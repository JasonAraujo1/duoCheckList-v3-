import React from 'react'

export default function Register() {

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
        <input className='border' type="text" />
      </div>

      <div>
        <span>Senha: </span>
        <input className='border' type="password" />
      </div>

      <div>
        <span>Repetir senha: </span>
        <input className='border' type="password" />
      </div>

    </div>
  )
}
