import React, { useEffect, useState } from 'react'
import { fetchApiData } from '../assets/fetchApi'
import { Navigate, useNavigate } from 'react-router'

export default function Home() {

  const [dataProduct, setDataProduct] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    async function onLoad() {
      const data = await fetchApiData()
      setDataProduct(data)
    }
    onLoad()
  }, [])
  console.log("teste", dataProduct)

  function handleSelectedProduct(id){
    navigate(`/product/${id}`)
    const selectedProduct = dataProduct.find((item) => item.id === id)
  }

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
        <thead className='border '>
          <tr className=' flex justify-between mx-5'>
            <th>Todos</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody >

          <tr className='border'>
            {dataProduct.map((item) => (
              <tr onClick={()=>{handleSelectedProduct(item.id)}} className='flex justify-between mx-5'>
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
