import React, { useEffect, useState } from 'react'
import { fetchApiIdUser } from '../services/fetchApi'
import { NavLink } from 'react-router'
import plus from '../assets/plus.svg';
import search from '../assets/search.svg';

export default function Home() {

  const [dataProduct, setDataProduct] = useState([])
  const [searchProduct, setSearchProduct] = useState("")
  const [display, setDisplay] = useState([])

  useEffect(() => {
    async function onLoad() {
      const idUser = localStorage.getItem("idUser")
      console.log("idUser", idUser)
      const data = await fetchApiIdUser(idUser)
      setDataProduct(Array.isArray(data) ? data : [])
      setDisplay(data)
      //Se o usuário não tem produtos, a API pode retornar algo que não é um array (como undefined, null ou {}). Quando isso acontece, o React tenta fazer dataProduct.map(...) em algo inválido, o que gera erro e quebra a página.
      //então usamos Array.isArray() para checar se data é um array. Se for, usamos ele. Se não for, usamos um array vazio [].

    }
    onLoad()
  }, [])
  // console.log("teste", dataProduct)

  function handleChange({ target }) {
    setSearchProduct(target.value)
    const filterInput = dataProduct.filter((item) => item.product.includes(searchProduct))
    setDisplay(filterInput)
  }

  function handleSelect({ target }) {
    const filterInput = dataProduct.filter((item) => item.category === target.value)
    setDisplay(filterInput)
    if (target.value === "Todos") {
      setDisplay(dataProduct)
    }
  }


  function handleClickProduct(id) {
    localStorage.setItem("idProduct", id)
    // console.log("idProduct", id)
  }

  function handleSelectStatus({ target }) {
    const filterStatus = dataProduct.filter((item) => item.status === target.value)
    setDisplay(filterStatus)
    if (target.value === "Todos") {
      setDisplay(dataProduct)
    }
    else { option.value = "Status" }
  }

  return (
    <div>

      <div className='flex'>
        <NavLink to="/new">
          <img src={plus} alt="" className='' />
          <span className='text-gray-400 text-sm'>Novo</span>
        </NavLink>

      </div>

      <div>
        <img src={search} alt="" className='' />
        <input value={searchProduct} onChange={handleChange} placeholder='Buscar produto'
          className='bg-neutral-100 text-center' type="text" />
      </div>

      <div className="overflow-x-auto max-w-full">
        <table className="min-w-full border text-sm md:text-base">
          <thead className='border'>
            <tr>
              <th className="px-2 py-2">Todos</th>
              <th className="px-2 py-2">
                <select onChange={handleSelect} className="border rounded px-1 py-1 text-xs md:text-sm">
                  <option selected disabled value="categorias">Categorias</option>
                  <option value="Sala">Sala</option>
                  <option value="Quarto">Quarto</option>
                  <option value="Banheiro">Banheiro</option>
                  <option value="Lavanderia">Lavanderia</option>
                  <option value="Escritório">Escritório</option>
                  <option value="Quintal/Jardim">Quintal/Jardim</option>
                  <option value="Varanda/Sacada">Varanda/Sacada</option>
                  <option value="Cozinha">Cozinha</option>
                  <option value="Todos">Todos</option>
                </select>
              </th>
              <th className="px-2 py-2">
                <select onChange={handleSelectStatus} className="border rounded px-1 py-1 text-xs md:text-sm">
                  <option selected disabled value="categorias">Status</option>
                  <option value="Adquirido">Adquirido</option>
                  <option value="Não Adquirido">Não Adquirido</option>
                  <option value="Todos">Todos</option>
                </select>
              </th>
            </tr>
          </thead>

          <tbody className='border'>
            {display.length === 0 ? (
              <tr>
                <td colSpan="3" className="text-center py-2">Nenhum produto encontrado.</td>
              </tr>
            ) : (
              display.map((item) => (
                <tr key={item.id} className="hover:bg-gray-100">
                  <td className='cursor-pointer px-2 py-1'>
                    <NavLink to="/product" onClick={() => handleClickProduct(item.id)} className="text-blue-600 hover:underline">
                      {item.product}
                    </NavLink>
                  </td>
                  <td className='px-2 py-1'>{item.category}</td>
                  <td className='px-2 py-1'>{item.status}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>


    </div>
  )
}
