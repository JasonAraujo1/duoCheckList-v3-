import React, { useEffect, useState } from 'react'
import { fetchApiData } from '../assets/fetchApi'
import { Navigate, NavLink, useNavigate } from 'react-router'

export default function Home() {

  const [dataProduct, setDataProduct] = useState([])
  const [selectedCategory, setSelectedCategory] = useState("")
  const [searchProduct, setSearchProduct] = useState("")

  useEffect(() => {
    async function onLoad() {
      const data = await fetchApiData()
      setDataProduct(data)

    }
    onLoad()
  }, [])
  // console.log("teste", dataProduct)

  //REQUISIÇÃO DE CLICK BUSCAR
  function handleClickSearch() {
    const results = dataProduct.filter((item) =>
      item.product.toLowerCase().includes(searchProduct.toLowerCase())
    )
    setDataProduct(results)

  }

  //REQUISIÇÃO POR CARACTER DIGITADO
  const filteredProducts = dataProduct.filter((item) => {
    return (
      (selectedCategory === "" || item.category === selectedCategory) &&
      (searchProduct === "" || item.product.includes(searchProduct))
    )
  })
  // const filteredProducts =
  //   selectedCategory === ""
  //     ? dataProduct
  //     : dataProduct.filter((item) => item.category === selectedCategory)
  //selectedCategory é === a vazio? se sim, filteredProduct vai ser igual a dataProduct, fazendo o map de todos os produtos. Se não, filteredProduct vai ser igual ao filtro de dataProduct pela categoria escolhida

  return (
    <div>

      <div>
        <NavLink to="/new">
          <button>Adicionar</button>
        </NavLink>

      </div>

      <div>
        <input onChange={(event) => setSearchProduct(event.target.value)} placeholder='Buscar produto' className='border' type="text" />
        <button onClick={handleClickSearch}>buscar</button>

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
                <NavLink to={"/product"}>
                  <td className='cursor-pointer'>{item.product}</td>
                </NavLink>
                <td>{item.status}</td>
              </tr>
            ))}
          </tr>

        </tbody>

      </table>
    </div>
  )
}
