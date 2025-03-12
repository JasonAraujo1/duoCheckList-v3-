import React from 'react'

export default function NewProduct() {
  return (
    <div>
      <button className='text-red-600'>←</button>
      <p className='font-bold'>Novo produto</p>

      <div>
        Nome
        <input className='border' type="text" />
      </div>

      <div>
        Status
        <select name="" id="" className='border'>
          <option selected disabled value="">Categorias</option>
          <option value="">Adquirido</option>
          <option value="">Não Adquirido</option>
          <option value="">Pendente</option>
        </select>
      </div>

      <div>
        Categoria
        <select name="" id="" className='border'>
          <option selected disabled value="">Categorias</option>
          <option value="">Adquirido</option>
          <option value="">Não Adquirido</option>
          <option value="">Pendente</option>
        </select>
      </div>

      <div>
        Descrição
        <input className='border' type="text" />
      </div>
    </div>
  )
}
