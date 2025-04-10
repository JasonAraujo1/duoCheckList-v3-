import React from 'react'

export default function TableDataProduct({dataUser, filteredProduct }) {
  return (
    <div>
        {dataUser.length === 0 ? (
          <p>Nenhum produto encontrado.</p>
        ) : (
          filteredProduct.map((item) => (
            <table key={item.id} className="w-full sm:w-auto md:w-200 mb-8  table-auto ">
              <tbody >
                <tr className="border  border-gray-200">
                  <td className="px-4 py-2 bg-gray-100">Nome</td>
                  <td className="px-4 py-2">{item.product}</td>
                </tr>
                <tr className="border border-gray-200">
                  <td className="px-4 py-2 bg-gray-100">Status</td>
                  <td className={`px-4 py-2 ${item.status === 'Não Adquirido' ? 'text-amber-500' : 'text-lime-500'
                    }`}>{item.status}</td>
                </tr>
                <tr className="border border-gray-200">
                  <td className="px-4 py-2 bg-gray-100">Categoria</td>
                  <td className="px-4 py-2">{item.category}</td>
                </tr>
                <tr className="border border-gray-200">
                  <td className="px-4 py-2 bg-gray-100">Descrição</td>
                  <td className="px-4 py-2">{item.description}</td>
                </tr>
              </tbody>
            </table>


          ))
        )}
    </div>
  )
}
