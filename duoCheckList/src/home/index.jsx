import React from 'react'

export default function Home() {
  return (
    <div>

      <div>
        <button >Adicionar</button>
      </div>

      <div>
        <input placeholder='Buscar produto' className='border' type="text" />

        <select name="" id="" className='border'>
          <option selected disabled value="">Categorias</option>
          <option value="">Adquirido</option>
          <option value="">Não Adquirido</option>
          <option value="">Pendente</option>
        </select>
      </div>

      <table className=' w-sm'>
        <thead className='border'>
          <tr>
            <th>Todos</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody >
          <tr className='border'>
            <td>Produto A</td>
            <td>Pendente</td>  
          </tr>
        </tbody>

      </table>
    </div>
  )
}
