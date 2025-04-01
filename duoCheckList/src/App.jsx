import { Route, Routes } from 'react-router'
import './App.css'
import Home from './home'
import Login from './login'
import Register from './register'
import DataProduct from './dataProduct'
import NewProduct from './newProduct'
import Edit from './editProduct'


export default function App() {

  return (
    <Routes>
      <Route index element={<Home/>}/>
      <Route path ="/login" element={<Login/>}/>
      <Route path ="/register" element={<Register/>}/>
      <Route path ="/product" element={<DataProduct/>}/>
      <Route path ="/new" element={<NewProduct/>}/>
      <Route path ="/edit" element={<Edit/>}/>
    </Routes>
  )
}

 
