import { useState } from "react"
import { NavLink, useNavigate } from "react-router"
import arrow from '../assets/arrow.svg'

export default function NewProduct() {
  const [product, setProduct] = useState("")
  const [status, setStatus] = useState("")
  const [category, setCategory] = useState("")
  const [description, setDescription] = useState("")
  const navigate = useNavigate()
  const idUser = localStorage.getItem("idUser")

  async function handleClick() {
    const data = {
      product: product,
      status: status,
      category: category,
      description: description,
      idUser: idUser
    }
    const url = "https://67be079f321b883e790ee0ed.mockapi.io/api/v1/products"

    const req = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
    const res = await req.json()
    console.log("new post", res)


    alert("Produto cadastrado!")
    navigate("/home")

  }

  return (



    <div >
      <NavLink to={"/home"}>
        <img src={arrow} alt="" className='size-9' />
      </NavLink>

      <div className="flex flex-col gap-8 text-start">
        <p className='font-bold py-16 text-base flex  justify-center' >Novo produto</p>

        <div >
          <span>
            Produto
          </span>

          <input placeholder="Nome do Produto" onChange={(event) => setProduct(event.target.value)} className='p-1 mx-8 border border-gray-300 rounded-md  w-48' type="text" />
        </div>

        <div>
          <span className="">
            Status
          </span>

          <select onChange={(event) => setStatus(event.target.value)} className='p-1 mx-11 border w-48 border-gray-300 rounded-md'>
            <option selected disabled value="">Status</option>
            <option value="Adquirido">Adquirido</option>
            <option value="Não Adquirido">Não Adquirido</option>
          </select>
        </div>

        <div className="">
          <span className="">
            Categoria
          </span>
          <select onChange={(event) => setCategory(event.target.value)} name="" id="" className='p-1 mx-4 w-48 border  border-gray-300 rounded-md '>
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

        <div className="flex">
          <span>Descrição</span>
          <textarea
            onChange={(event) => setDescription(event.target.value)}
            className='mx-4 border border-gray-300 rounded-md p-3'
            rows="4"
            style={{ wordWrap: 'break-word' }}
          />

        </div>

        <button className=" my-20 bg-red-400 text-white font-bold rounded-lg py-2" onClick={handleClick}>Adicionar</button>
      </div>

    </div>
  )
}
