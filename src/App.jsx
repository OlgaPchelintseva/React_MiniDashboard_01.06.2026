import './App.css'
import FilterList from './FilterList';
import FocusInput from './FocusInput'

function App() {
  const DATA = [
    {id: 1, name: 'Olya'},
    {id: 2, name: 'Eva'},
    {id: 3, name: 'Elena'},
    {id: 4, name: 'Alisa'},
  ]

  return (
    <>
      <FocusInput />
      <FilterList users={DATA}/>
    </>
  );
};

export default App;
