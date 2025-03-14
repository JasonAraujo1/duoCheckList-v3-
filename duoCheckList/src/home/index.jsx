import React, { useEffect, useState } from 'react'
import { fetchApiData } from '../assets/fetchApi'
import { Navigate, NavLink, useNavigate } from 'react-router'

export default function Home() {

  const [dataProduct, setDataProduct] = useState([])
  const [selectedCategory, setSelectedCategory] = useState("")

  useEffect(() => {
    async function onLoad() {
      const data = await fetchApiData()
      setDataProduct(data)

    }
    onLoad()
  }, [])
  // console.log("teste", dataProduct)


  const filteredProducts =
    selectedCategory === ""
      ? dataProduct
      : dataProduct.filter((item) => item.category === selectedCategory)
  //selectedCategory é === a vazio? se sim, filteredProduct vai ser igual a dataProduct, fazendo o map de todos os produtos. Se não, filteredProduct vai ser igual ao filtro de dataProduct pela categoria escolhida

  return (
    <div>

      <div>
        <NavLink to="/new">
          <button>Adicionar</button>
        </NavLink>

      </div>

      <div>
        <input placeholder='Buscar produto' className='border' type="text" />

        <select onChange={(event) => setSelectedCategory(event.target.value)} name="" id="" className='border'>
          <option selected disabled value="">Categorias</option>
          <option value="Sala">Sala</option>
          <option value="Quarto">Quarto</option>
          <option value="Banheiro">Banheiro</option>
          <option value="Lavanderia">Lavanderia</option>
          <option value="Escritório">Escritório</option>
          <option value="Quintal/Jardim">Quintal/Jardim</option>
          <option value="Varanda/Sacada">Varanda/Sacada</option>
          <option value="Cozinha">Cozinha</option>
        </select>
      </div>

      <table className=' w-sm'>
        <thead className='border '>
          <tr className=' flex justify-between mx-5'>
            <th>Todos</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody >

          <tr className='border'>
            {filteredProducts.map((item) => (
              <tr className='flex justify-between mx-5'>
                <td>{item.product}</td>
                <td>{item.status}</td>
              </tr>
            ))}
          </tr>

        </tbody>

      </table>
    </div>
  )
}
