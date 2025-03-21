import React, { useEffect, useState } from 'react'
import { fetchApiIdUser } from '../services/fetchApi'
import { data, NavLink, useNavigate } from 'react-router'

export default function Home() {

  const [dataProduct, setDataProduct] = useState([])
  const [searchProduct, setSearchProduct] = useState("")
  const [display, setDisplay] = useState([])
  const navigate = useNavigate()

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

  return (
    <div>

      <div>
        <NavLink to="/new">
          <button>Adicionar</button>
        </NavLink>

      </div>

      <div>
        <input value={searchProduct} onChange={handleChange} placeholder='Buscar produto' className='border' type="text" />
      </div>

      <table className=' w-sm'>
        <thead className='border '>
          <tr className=' flex justify-between mx-5'>
            <th>Todos</th>
            <th>
              <select onChange={handleSelect} >
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
            <th>
              <select>
                <option selected disabled value="categorias">Status</option>
                <option value="Adquirido">Adquirido</option>
                <option value="Nao Adquirido">Não Adquirido</option>
              </select>
            </th>
          </tr>
        </thead>

        <tbody className='border'>
          {display.length === 0 ? (
            <tr>
              <td className="text-center">Nenhum produto encontrado.</td>
            </tr>
          ) : (
            display.map((item) => (
              <tr key={item.id} className='flex justify-between mx-5 '>
                <NavLink to="/product">
                  <td onClick={() => handleClickProduct(item.id)} className='cursor-pointer'>{item.product}</td>
                </NavLink>
                <td>{item.category}</td>
                <td>{item.status}</td>
              </tr>
            ))
          )}
        </tbody>


      </table>
    </div>
  )
}
