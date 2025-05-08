import React, { useContext, useState } from 'react'
import { fetchApiUsers } from '../services/fetchApi'
import { NavLink, useNavigate } from 'react-router'
import FormLogin from '../components/formLogin'
import { useEffect } from 'react'
import RedBtn from '../components/ui/redBtn'
import Context from '../context/context'

export default function Login() {
  const [inputName, setInputName] = useState("")
  const [inputPassword, setInputPassword] = useState("")

  const { name, password, userId } = useContext(Context);
console.log(name, password, userId) 
  const navigate = useNavigate()

  useEffect(() => {
    if (userId) {
      // navigate("/home")
    }
  }, [])

  async function handleClick() {
    if (name === inputName && password === inputPassword) {
      // navigate("/home")
    } else {
      alert("Usuário ou senha incorretos!")
    }
  }

  return (
    <div className='flex flex-col gap-6 w-80 md:w-200'>
      <FormLogin setInputName={setInputName} setInputPassword={setInputPassword} />

      <RedBtn onClick={handleClick} text={'Entrar'} />

      <span className='text-gray-400 font-medium'>Não possui conta?
        <NavLink to={'/register'}>
          <span className='text-red-400 font-bold underline mx-1'>Cadrastrar</span>
        </NavLink>
      </span>
    </div>
  )
}
