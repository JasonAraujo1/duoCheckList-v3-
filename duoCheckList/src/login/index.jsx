import React from 'react'

export default function Login() {
  return (
    <div>
      <div>
        <img src="" alt="imagem logo" />
        <p>título logo</p>
      </div>

      <div>
        <p className='font-bold text-xl'>Login</p>
        <span>preencha os campos para entrar</span>
      </div>

      <div>
        <span>nome de usuário: </span>
        <input className='border' type="text" />
      </div>

      <div>
        <span>Senha: </span>
        <input className='border' type="password" />
      </div>


    </div>
  )
}
