import './App.css';
import Desarrolladores from './Component/Desarrolladores/desarrolladores.js';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from './Component/Inicio/inicio.js';

function App() {
  return (
    <>
    <div className='App'>
        <Router>
          <Routes>
            <Route path='/' element={<Inicio />}>
            </Route>
            <Route path='/Desarrolladores' element={<Desarrolladores />} />
          </Routes>
        </Router>

    </div>
    </>
  );
}

export default App;
