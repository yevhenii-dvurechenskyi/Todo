import './styles/tailwind.css';
import Heder from './components/ReusableComponents/Heder';
import Grinder from './components/Games/Grinder'  
import Inventory from './components/Inventory/Inventory';
import Case from './components/Games/Case'
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Heder />}>
          <Route path='/grinder' element={<Grinder />}/>
          <Route path='/inventory' element={<Inventory />}/>
          <Route path='/case' element={<Case />}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
