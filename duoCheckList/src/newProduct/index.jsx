import { useState } from "react"
import { NavLink, useNavigate } from "react-router"
import arrow from '../assets/arrow.svg'
import FormNewProduct from "../components/formNewProduct"

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

        <FormNewProduct
          setProduct={setProduct}
          setStatus={setStatus}
          setCategory={setCategory}
          setDescription={setDescription} />

        <div>
          <button className="cursor-pointer my-20 bg-red-400 text-white font-bold rounded-lg py-2 w-80" onClick={handleClick}>Adicionar</button>
        </div>
      </div>
    </div>
  )
}
