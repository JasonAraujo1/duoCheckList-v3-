import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router'
import checkList from '../assets/checkList.svg'

export default function Register() {
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [repeatPassword, setRepeatPassword] = useState("")
  const navigate = useNavigate()

  async function handleClick() {
     if (!name || name.includes(" ")) {
      alert("Nome de usuário não pode estar vazio ou conter espaços!");
      return;
    }

    if (!password) {
      alert("A senha não pode estar vazia!");
      return;
    }

    if (password !== repeatPassword) {
      alert("As senhas não coincidem!");
      return;
    }

    const data = { name, password };
    const url = "https://67be079f321b883e790ee0ed.mockapi.io/api/v1/users";

    const req = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    await req.json();
    alert("Cadastro efetuado!");
    navigate("/");
  }

  return (
    <div className='flex flex-col gap-6  md:w-200'>
      <div className='flex flex-col items-center m-9'>
        <img src={checkList} alt="" className='size-20' />
        <p className='font-bold text-gray-400'>Duo CheckList</p>
      </div>

      <div className='flex flex-col items-start gap-4'>
        <p className='font-bold text-3xl'>Criar conta</p>
        <span className='text-gray-400 text-lg font-medium '>Preencha os campos para criar </span>
      </div>

      <div className='flex flex-col items-start '>
        <span className='text-red-400 font-bold text-base py-2'>Nome de usuário: </span>
        <input onChange={(event) => setName(event.target.value)} className='border-b-2 border-gray-200 w-full outline-0' type="text" placeholder='ex: fulano de Tal' />
      </div>

      <div className='flex flex-col items-start'>
        <span className='text-red-400 font-bold text-base py-2'>Senha: </span>
        <input onChange={(event) => setPassword(event.target.value)} className='border-b-2 border-gray-200 w-full outline-0' type="password" placeholder='Sua senha' />
      </div>

      <div className='flex flex-col items-start '>
        <span className='text-red-400 font-bold text-base py-2'>Repetir senha: </span>
        <input onChange={(event) => setRepeatPassword(event.target.value)} className='border-b-2 border-gray-200 w-full outline-0' type="password" placeholder='Sua senha' />
      </div>
      <div>
        <button className="cursor-pointer my-10 bg-red-400 text-white font-bold rounded-lg py-2  w-80" onClick={handleClick}>Criar</button>
      </div>
      <span className='text-gray-400 font-medium'>Já possui conta?
        <NavLink to={'/'}>
          <span className='text-red-400 font-bold underline mx-1'>Entrar</span>
        </NavLink>
      </span>
    </div>
  )
}
