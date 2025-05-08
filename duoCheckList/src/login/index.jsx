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
  
  useEffect(() => {
    const idUser = localStorage.getItem("idUser")
    if (idUser) {
      navigate("/home")
      console.log(name, password, userId)
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
