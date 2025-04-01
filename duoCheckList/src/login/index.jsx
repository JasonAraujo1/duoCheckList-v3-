import React, { useState } from 'react'
import { fetchApiUsers } from '../services/fetchApi'
import { NavLink, useNavigate } from 'react-router'
import checkList from '../assets/checkList.svg'

export default function Login() {
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  async function handleClick() {
    const data = await fetchApiUsers()
    const dataFind = data.find((item) => item.name === name && item.password === password)
    // console.log(dataFind)

    if (!dataFind) {
      alert("Usuário ou senha incorretos!")
    } else {
      localStorage.setItem("idUser", dataFind.id)

      navigate("/home")
    }

  }

  return (
    <div className='flex flex-col gap-6 w-80 md:w-200'>
      <div className='flex flex-col items-center m-9'>
        <img src={checkList} alt="" className='size-20' />
        <p className='font-bold text-gray-400'>Duo CheckList</p>
      </div>

      <div className='flex flex-col items-start gap-4 '>
        <p className='font-bold text-3xl'>Login</p>
        <span className='text-gray-400 text-lg font-medium '>Preencha os campos para entrar </span>
      </div>

      <div className='flex flex-col items-start '>
        <span className='text-red-400 font-bold text-base py-2'>nome de usuário: </span>
        <input onChange={(event) => setName(event.target.value)} className='border-b-2 border-gray-200 w-full outline-0' type="text" placeholder='ex: fulano123' />
      </div>

      <div className='flex flex-col items-start '>
        <span className='text-red-400 font-bold text-base py-2'>Senha: </span>
        <input onChange={(event) => setPassword(event.target.value)} className='border-b-2 border-gray-200 w-full outline-0' type="password" placeholder='Sua senha'/>
      </div>
    <div>
      
      <button className="cursor-pointer my-10 bg-red-400 text-white font-bold rounded-lg py-2 w-80" onClick={handleClick}>Entrar</button>
    </div>
      <span className='text-gray-400 font-medium'>Não possui conta?
        <NavLink to={'/register'}>
          <span className='text-red-400 font-bold'> Cadrastro</span>
        </NavLink>
      </span>
    </div>
  )
}
