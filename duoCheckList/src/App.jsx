import { Route, Routes } from 'react-router'
import './App.css'
import Home from './home'
import Login from './login'
import Register from './register'
import DataProduct from './dataProduct'
import NewProduct from './newProduct'


export default function App() {

  return (
    <Routes>
      <Route path ="/home" element={<Home/>}/>
      <Route path ="/login" element={<Login/>}/>
      <Route path ="/register" element={<Register/>}/>
      <Route path ="/product" element={<DataProduct/>}/>
      <Route path ="/new" element={<NewProduct/>}/>
    </Routes>
  )
}

 
