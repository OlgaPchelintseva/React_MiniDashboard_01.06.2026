// import FilterList from './FilterList';
// import FocusInput from './FocusInput';

import React, { useState, useMemo, useEffecct } from "react";
import { generateMockData } from "./mocKData";
import DashboardMetrics from "./DashboadMetrics";

function App() {

  // const DATA = [
  //   {id: 1, name: 'Olya'},
  //   {id: 2, name: 'Eva'},
  //   {id: 3, name: 'Elena'},
  //   {id: 4, name: 'Alisa'},
  // ]

  const [rawData, setRawData] = useState(()=>generateMockData());

  return (
    // <>
    //   <FocusInput />
    //   <FilterList users={DATA}/>
    // </>
    
    <>
      <DashboardMetrics filteredData={rawData}/>
    </>
  );
};

export default App;
