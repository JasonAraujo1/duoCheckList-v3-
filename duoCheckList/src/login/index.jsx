import React, { useContext, useState, useEffect } from 'react'
import { fetchApiUsers } from '../services/fetchApi'
import { NavLink, useNavigate } from 'react-router'
import FormLogin from '../components/formLogin'
import RedBtn from '../components/ui/redBtn'
import Context from '../context/context'

export default function Login() {
  const [inputName, setInputName] = useState("")
  const [inputPassword, setInputPassword] = useState("")

  const { setUserId, userId, setName, setPassword } = useContext(Context)
  const navigate = useNavigate()

  useEffect(() => {
    if (userId) {
      navigate("/home")
    }
  }, [userId])

  async function handleClick() {
    const data = await fetchApiUsers()
    const userFound = data.find(user => user.name === inputName && user.password === inputPassword)

    if (userFound) {
      setUserId(userFound.id);
      setName(userFound.name);
      setPassword(userFound.password);
      localStorage.setItem("idUser", userFound.id); 
      navigate("/home");
    }
     else {
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
