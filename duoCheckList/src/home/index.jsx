import React, { useEffect, useState } from 'react'
import { fetchApiIdUser } from '../services/fetchApi'
import { NavLink, useNavigate } from 'react-router'

export default function Home() {

  const [dataProduct, setDataProduct] = useState([])
  const [searchProduct, setSearchProduct] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("")
  const navigate = useNavigate()

  useEffect(() => {
    async function onLoad() {
      const idUser = localStorage.getItem("idUser")
      console.log("idUser", idUser)
      const data = await fetchApiIdUser(idUser)
      setDataProduct(Array.isArray(data) ? data : [])
      //Se o usuário não tem produtos, a API pode retornar algo que não é um array (como undefined, null ou {}). Quando isso acontece, o React tenta fazer dataProduct.map(...) em algo inválido, o que gera erro e quebra a página.
      //então usamos Array.isArray() para checar se data é um array. Se for, usamos ele. Se não for, usamos um array vazio [].

    }
    onLoad()
  }, [])
  // console.log("teste", dataProduct)


  //REQUISIÇÃO POR CARACTER DIGITADO

  const filteredProducts =
    selectedCategory === ""
      ? dataProduct
      : dataProduct.filter((item) => item.category === selectedCategory)
  //selectedCategory é === a vazio? se sim, filteredProduct vai ser igual a dataProduct, fazendo o map de todos os produtos. Se não, filteredProduct vai ser igual ao filtro de dataProduct pela categoria escolhida

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
        <input onChange={(event) => setSearchProduct(event.target.value)} placeholder='Buscar produto' className='border' type="text" />


        <select onChange={(event) => setSelectedCategory(event.target.value)} className='border'>
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

        <tbody className='border'>
          {filteredProducts.length === 0 ? (
            <tr>
              <td className="text-center">Nenhum produto encontrado.</td>
            </tr>
          ) : (
            filteredProducts.map((item) => (
              <tr key={item.id} className='flex justify-between mx-5 '>
                <NavLink to="/product">
                  <td onClick={() => handleClickProduct(item.id)} className='cursor-pointer'>{item.product}</td>
                </NavLink>
                <td>{item.status}</td>
              </tr>
            ))
          )}
        </tbody>


      </table>
    </div>
  )
}
