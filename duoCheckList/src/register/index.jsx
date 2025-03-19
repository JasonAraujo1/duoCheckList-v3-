import React, { useState } from 'react'
import { useNavigate } from 'react-router'

export default function Register() {
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [repeatPassword, setRepeatPassword] = useState("")
  const navigate = useNavigate()

  async function handleClick() {
    const data = {
      name: name,
      password: password
    }
    const url = "https://67be079f321b883e790ee0ed.mockapi.io/api/v1/users"

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
      navigate("/login")
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
