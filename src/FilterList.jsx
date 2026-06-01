import React, { useState, useMemo } from 'react';

function FilterList({users}){
    // useMemo будет перерасчитывать список только тогда, когда меняется сам список или поисковый запрос
    const [query, setQuery] = useState('');
    const filteredUsers = useMemo(() => {
        console.log('Начало фильтрации');
        return users.filter(user => user.name.toLowerCase().includes(query.toLowerCase())); // оставляем имена, которые совпадают с запросом
    }, [query, users]);


    return (
        <div>
            <input 
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <ul>
                {filteredUsers.map(user => 
                    <li key={user.id}>{user.name}</li>
                )}
            </ul>
        </div>
    );
};

export default FilterList;