import React from 'react'
import Home from './pages/Home/Home'
import TopNav from './components/TopNav/TopNav'
import { Route, Routes } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import UserForm from './pages/Registeration/UserForm';
import LogIn from './pages/Registeration/LogIn';



function App() {
  return (
    <>
      <div>
    <TopNav/>
        <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/Registeration" element={<UserForm/>}></Route> 
    <Route path="/Login" element={<LogIn/>}></Route> 
    {/* <Route path="/i" element={<AboutMe/>}></Route>
    <Route path="/g" element={<Gallery/>}></Route>
    <Route path="/Movies" element={<Movies/>}></Route>
    <Route path="/details/:id" element={<Details/>}></Route>
    <Route path="/FavMovies" element={<FavMovies/>}></Route>
    <Route path="/Todo" element={<Todo/>}></Route>
  <Route path="/Registeration" element={<Register/>}></Route> */}
    {/* <Route path="/Input" element={<Input/>}></Route> */}
    {/* <Footer/> */}
  
  
  </Routes></div></>
  )
}

export default App