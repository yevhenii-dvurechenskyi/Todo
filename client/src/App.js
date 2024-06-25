import './styles/tailwind.css';
import Heder from './components/ReusableComponents/Heder';
import Todo from './components/Todo/TodoPage';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Heder />}>
          <Route path='/todolist' element={<Todo />}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
