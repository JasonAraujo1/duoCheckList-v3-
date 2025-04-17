import React, { useState } from 'react'
import { fetchApiUsers } from '../services/fetchApi'
import { NavLink, useNavigate } from 'react-router'
import FormLogin from '../components/formLogin'
import { useEffect } from 'react'

export default function Login() {
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")

  useEffect(() => {
    const idUser = localStorage.getItem("idUser")
    if (idUser) {
      navigate("/home")
    }
  }, [])

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
      <FormLogin setName={setName} setPassword={setPassword} />

      <div>
        <button className="cursor-pointer mt-16 bg-red-400 text-white font-bold rounded-lg py-2 w-80" onClick={handleClick}>Entrar</button>
      </div>
        
      <span className='text-gray-400 font-medium'>Não possui conta?
        <NavLink to={'/register'}>
          <span className='text-red-400 font-bold underline mx-1'>Cadrastrar</span>
        </NavLink>
      </span>
    </div>
  )
}
