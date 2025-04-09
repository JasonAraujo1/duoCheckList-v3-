import React from 'react'
import { NavLink } from 'react-router'

export default function TableHome({selectedCategory, handleSelect, selectedStatus, handleSelectStatus , display}) {
  return (
    <table className=" text-sm md:text-base md:w-200 text-start ">
            <thead className='border-b-2 border-b-red-400 '>
              <tr className=''>
                <th className="w-30 md:w-72 text-start px-2 py-2 text-red-400 text-base">Produtos</th>
                <th className="text-start py-2 pr-3">
                  <select value={selectedCategory} onChange={handleSelect} className="text-red-400  rounded  py-1  text-base md:text-sm outline-0 w-full md:w-36" >
                    <option disabled value="">Categorias</option>
                    <option value="Sala">Sala</option>
                    <option value="Quarto">Quarto</option>
                    <option value="Banheiro">Banheiro</option>
                    <option value="Lavanderia">Lavanderia</option>
                    <option value="Escritório">Escritório</option>
                    <option value="Quintal/Jardim">Quintal/Jardim</option>
                    <option value="Varanda/Sacada">Varanda/Sacada</option>
                    <option value="Cozinha">Cozinha</option>
                  </select>
                </th>
                <th className=" py-2 text-start">
                  <select value={selectedStatus} onChange={handleSelectStatus} className="text-red-400 rounded px-1 py-1   text-base md:text-sm outline-0 w-full md:w-28">
                    <option className='outline-0' disabled value="">Status</option>
                    <option className='outline-0' value="Adquirido">Adquirido</option>
                    <option className='outline-0' value="Não Adquirido">Não Adquirido</option>
                  </select>
                </th>
              </tr>
            </thead>

            <tbody className=''>
              {display.length === 0 ? (
                <tr>
                  <td colSpan="3" className="text-center py-2">Nenhum produto encontrado.</td>
                </tr>
              ) : (
                display.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-100 ">
                    <td className='cursor-pointer px-2 py-3 border-b border-gray-300 text-base font-medium '>
                      <NavLink to="/product" onClick={() => handleClickProduct(item.id)} className=" ">
                        {item.product}
                      </NavLink>
                    </td>
                    <td className='px-2 py-1 border-b font-light text-neutral-500 border-gray-300'>{item.category}</td>
                    <td
                      className={`px-2 py-1 border-b  text-sm font-semibold border-gray-300 ${item.status === 'Não Adquirido' ? 'text-amber-500' : 'text-lime-500'
                        }`}
                    >
                      {item.status}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
  )
}
