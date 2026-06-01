// import FilterList from './FilterList';
// import FocusInput from './FocusInput';

import React, { useState, useMemo, useEffecct } from "react";
import { generateMockData } from "./mocKData";
import DashboardMetrics from "./DashboadMetrics";
import FilterPanel from "./FilterPanel";

function App() {

  // const DATA = [
  //   {id: 1, name: 'Olya'},
  //   {id: 2, name: 'Eva'},
  //   {id: 3, name: 'Elena'},
  //   {id: 4, name: 'Alisa'},
  // ]

  const [rawData, setRawData] = useState(()=>generateMockData());
  const [filters, setFilters] =useState({search: '', category: '', status: ''});
  
  const filteredData = useMemo(() => {

  }, [rawData, filters.search, filters.category, filters.status]);

  return (
    // <>
    //   <FocusInput />
    //   <FilterList users={DATA}/>
    // </>
    
    <>
      <DashboardMetrics filteredData={rawData}/>
      {/* <FilterPanel filters={} setFilters={} onOpenModal={}/> */}
    </>
  );
};

export default App;
