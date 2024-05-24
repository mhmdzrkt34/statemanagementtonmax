
import './App.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import HomeVIew from './views/HomeView';
import TestView from './views/TestView';



export default function App(){

  return (



    <Router>


      <Routes>


      <Route path='/' element={<HomeVIew/>}/>
      <Route path='/test' element={<TestView/>}/>



      </Routes>
    </Router>
  )




}