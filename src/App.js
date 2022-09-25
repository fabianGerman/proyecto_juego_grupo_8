import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import NavBarD from './Components/NavBar';
import Dis1 from './Components/Diseniadores/Dis1.js';
import Dis2 from './Components/Diseniadores/Dis2.js';
import Dis3 from './Components/Diseniadores/Dis3.js';
import Dis4 from './Components/Diseniadores/Dis4.js';
import Dis5 from './Components/Diseniadores/Dis5.js';
import Dis6 from './Components/Diseniadores/Dis6.js';

function App() {
  return (
        <div className='App'>
            

            <Router>
                <Routes>
                    <Route path='/' element={<NavBarD />}>
                        
                      <Route path='/Dis1' element={<Dis1/>}/>
                      <Route path='/Dis2' element={<Dis2/>}/>
                      <Route path='/Dis3' element={<Dis3/>}/>
                      <Route path='/Dis4' element={<Dis4/>}/>
                      <Route path='/Dis5' element={<Dis5/>}/>
                      <Route path='/Dis6' element={<Dis6/>}/>
                      
                    </Route>
                </Routes>
            </Router>

        </div>
  );
}

export default App;
