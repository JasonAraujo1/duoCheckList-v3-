import React, { useEffect, useState } from 'react'

export default function Register() {
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [repeatPassword, setRepeatPassword] = useState("")


  async function handleClick() {
    const data = {
      name: name,
      password: password
    }
    const url = "https://67d355c78bca322cc269d90d.mockapi.io/register/register"

    const req = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
    const res = await req.json()
    // console.log(res)

    if (password !== repeatPassword) {
      alert("As senhas não coincidem!");
     
    }else{
      alert("Cadastro efetuado!")
    }
  }

  return (
    <div>
      <div>
        <img src="" alt="imagem logo" />
        <p>título logo</p>
      </div>

      <div>
        <p className='font-bold text-xl'>Criar conta</p>
        <span>preencha os campos para criar</span>
      </div>

      <div>
        <span>nome de usuário: </span>
        <input onChange={(event) => setName(event.target.value)} className='border' type="text" />
      </div>

      <div>
        <span>Senha: </span>
        <input onChange={(event) => setPassword(event.target.value)} className='border' type="password" />
      </div>

      <div>
        <span>Repetir senha: </span>
        <input onChange={(event) => setRepeatPassword(event.target.value)} className='border' type="password" />
      </div>

      <button onClick={handleClick}>Enviar</button>
    </div>
  )
}
