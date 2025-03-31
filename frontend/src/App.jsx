import './App.css'
import {Route, Routes} from 'react-router-dom';

import Layout from './components/Layout';
import {Home,PrimaryNumbersGenerator} from './sections/index'

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
