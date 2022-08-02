import { Route,Routes } from 'react-router-dom';
import TodoList from "./pages/TodoList";
import Detail from "./pages/Detail";


const App = ()=>{
  return <Routes>
          <Route path="/" element={<TodoList/>}/>
          <Route path="/detail/:id" element={<Detail/>}/>
        </Routes>
}

export default App;
