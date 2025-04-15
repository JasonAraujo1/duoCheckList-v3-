import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router'
import FormRegister from '../components/formRegister'

export default function Register() {
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [repeatPassword, setRepeatPassword] = useState("")

  const navigate = useNavigate()

  async function handleClick(event) {
    event.preventDefault()

    if (!name || !password || !repeatPassword) {
      alert("Todos os campos devem ser preenchidos!");
      return;
    }
    if (name !== name.trim()) {
      alert("O nome de usuário não pode conter espaços desnecessários no início ou no final!");
      return;
    }
    if (name.length < 3) {
      alert("O nome de usuário deve ter pelo menos 6 caracteres.");
      return;
    }
    if (password !== password.trim()) {
      alert("A senha não pode conter espaços desnecessários no início ou no final!");
      return;
    }
    if (password.length < 6) {
      alert("A senha deve ter pelo menos 6 caracteres.");
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
      <FormRegister setName={setName} setPassword={setPassword} setRepeatPassword={setRepeatPassword}/>
      <div>
        <button className="cursor-pointer mt-7 bg-red-400 text-white font-bold rounded-lg py-2  w-80" onClick={handleClick}>Criar</button>
      </div>
      <span className='text-gray-400 font-medium'>Já possui conta?
        <NavLink to={'/'}>
          <span className='text-red-400 font-bold underline mx-1'>Entrar</span>
        </NavLink>
      </span>
    </div>
  )
}
