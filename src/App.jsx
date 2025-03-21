import { useState } from 'react'

import './App.css'
import Home from './sections/Home';
import {Route, Routes} from 'react-router-dom';
import { ThemeSelect } from './sections/ThemeSelect';
import PrimaryNumbersGenerator from './sections/PrimaryNumbersGenerator';
import Layout from './components/Layout';

function App() {
 
  return (
    <Routes>
      <Route path='/' element={ <Layout/>}>
        <Route index element={
            <Home/>
          }> 
        </Route>
        <Route path='primary-numbers-range' element={
          <PrimaryNumbersGenerator/> 
        }>
        </Route>
      </Route>
     
    </Routes>
    
  );
}

export default App
