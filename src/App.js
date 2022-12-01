import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home/Home';

function App() {
  return (
    <div className='background'>
      <Routes>
        <Route path={"/"} element={<Home/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
