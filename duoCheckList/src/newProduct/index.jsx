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


    <div className='flex flex-col gap-6  md:w-200'>
      <NavLink to={"/home"}>
        <img src={arrow} alt="" className='size-9' />
      </NavLink>


      <div className='flex flex-col gap-6  md:w-200 my-8' >
        <div className='flex flex-col items-start gap-4'>
          <p className='font-bold text-3xl'>Novo Produto</p>
          <span className='text-gray-400 text-lg font-medium '>Preencha os campos para adicionar </span>
        </div>

        <div className='flex flex-col items-start '>
          <span className='text-red-400 font-bold text-base py-2'>
            Produto
          </span>
          <input className='border-b-2 border-gray-200 w-full outline-0' placeholder="Nome do Produto" onChange={(event) => setProduct(event.target.value)} type="text" />
        </div>

        <div className='flex flex-col items-start'>
          <span className='text-red-400 font-bold text-base py-2'>
            Status
          </span>

          <select className='border-b-2 border-gray-200 w-full outline-0 text-gray-400' onChange={(event) => setStatus(event.target.value)} >
            <option selected disabled value="">Status</option>
            <option value="Adquirido">Adquirido</option>
            <option value="Não Adquirido">Não Adquirido</option>
          </select>
        </div>

        <div className='flex flex-col items-start '>
          <span className='text-red-400 font-bold text-base py-2'>
            Categoria
          </span>
          <select className='border-b-2 border-gray-200 w-full outline-0 text-gray-400' onChange={(event) => setCategory(event.target.value)} name="" id="" >
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

        <div className='flex flex-col items-start '>
          <span className='text-red-400 font-bold text-base py-2'>Descrição</span>
          <textarea
            onChange={(event) => setDescription(event.target.value)}

            rows="4"
            style={{ wordWrap: 'break-word' }}
            className='border border-gray-300 w-full'
            placeholder="Adicione sua descrição..."
          />

        </div>
        <div>
          <button className="cursor-pointer my-20 bg-red-400 text-white font-bold rounded-lg py-2 w-80" onClick={handleClick}>Adicionar</button>
        </div>
      </div>



    </div>
  )
}
