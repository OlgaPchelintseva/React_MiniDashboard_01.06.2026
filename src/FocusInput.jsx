import { useRef } from "react";


function FocusInput(){
    // 1. Создаем реф со значением по умолчанию
    const inputRef = useRef(null);
    
    const handleButtonClick = () => {
        // 3. через current получаем доступ к html элементу
        inputRef.current.focus();
    }

    return (
        <div>
            {/* 2. Привязываем реф к элементу на странице */}
            {/* говорим реакту, если происходит какое то изменение, то перерисовки не будет, но визуально изменения будут */}
            <input ref={inputRef} type="text"/> 
            <button onClick={handleButtonClick}>FOCUS</button>
        </div>
    );
};

export default FocusInput;