import logo from './logo.svg';
import './App.css';
import List from './components/List';
import SongDetails from './components/SongDetails';
import { useSelector } from 'react-redux';
import Edit from "./components/Edit";

function App() {
  let selected = useSelector(sta => sta.selecteSong)
  let selectedFroEdit = useSelector(sta => sta.selectedSongForEdit)
  return (<>
    <List />
    {selected && <SongDetails />}
    {selectedFroEdit && <Edit />}
  </>
  );
}

export default App;
