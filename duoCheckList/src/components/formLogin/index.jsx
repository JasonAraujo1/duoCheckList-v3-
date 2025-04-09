import React from 'react'
import checkList from '../../assets/checkList.svg'

export default function FormLogin({setName, setPassword}) {
    return (
        <div>
            <div className='flex flex-col items-center m-2'>
                <img src={checkList} alt="" className='size-20' />
                <p className='font-bold text-gray-400'>Duo CheckList</p>
            </div>

            <div className='flex flex-col items-start gap-4 '>
                <p className='font-bold text-3xl'>Login</p>
                <span className='text-gray-400 text-lg font-medium '>Preencha os campos para entrar </span>
            </div>

            <div className='flex flex-col items-start '>
                <span className='text-red-400 font-bold text-base py-2'>Nome de usuário: </span>
                <input autocapitalize="off" onChange={(event) => setName(event.target.value)} className='border-b-2 border-gray-200 w-full outline-0' type="text" placeholder='ex: fulano123' />
            </div>

            <div className='flex flex-col items-start '>
                <span className='text-red-400 font-bold text-base py-2'>Senha: </span>
                <input onChange={(event) => setPassword(event.target.value)} className='border-b-2 border-gray-200 w-full outline-0' type="password" placeholder='Sua senha' />
            </div>
        </div>
    )
}
