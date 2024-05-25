
import { React } from 'react';
import {Route,Routes,BrowserRouter}  from 'react-router-dom'
import Home from './components/Pages/Home';
import './App.css'
import Productspages from './components/Pages/Products/Productspages';
function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/home' element={<Home/>}/>

    <Route path='/product/:prodid' element={<Productspages/>}/>
    <Route path='*' element={<h1>404 not found</h1>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
