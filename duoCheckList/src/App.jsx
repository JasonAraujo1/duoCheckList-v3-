import { Route, Routes } from 'react-router'
import './App.css'
import Login from './login'
import Register from './register'
import DataProduct from './dataProduct'
import NewProduct from './newProduct'
import Edit from './editProduct'
import Home from './home'
import LogoutPage from './logoutPage'


export default function App() {

  return (
    <Routes>
      <Route path="/home" element={<Home/>}/>
      <Route index element={<Login/>}/>
      <Route path="/logout" element={<LogoutPage />} />
      <Route path ="/register" element={<Register/>}/>
      <Route path ="/product" element={<DataProduct/>}/>
      <Route path ="/new" element={<NewProduct/>}/>
      <Route path ="/edit" element={<Edit/>}/>
    </Routes>
  )
}

 
