import { useState } from "react"
import { NavLink, useNavigate } from "react-router"

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
      idUser:idUser
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



    <div>
      <NavLink to={"/home"}>
        <button className='text-red-600'>←</button>
      </NavLink>

      <p className='font-bold'>Novo produto</p>

      <div>
        Produto
        <input onChange={(event) => setProduct(event.target.value)} className='border' type="text" />
      </div>

      <div>
        Status
        <select onChange={(event) => setStatus(event.target.value)} className='border'>
          <option selected disabled value="">Categorias</option>
          <option value="Adquirido">Adquirido</option>
          <option value="Não Adquirido">Não Adquirido</option>
        </select>
      </div>

      <div>
        Categoria
        <select onChange={(event) => setCategory(event.target.value)} name="" id="" className='border'>
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

      <div>
        Descrição
        <input onChange={(event) => setDescription(event.target.value)} className='border' type="text" />
      </div>

      <button onClick={handleClick}>Enviar</button>
    </div>
  )
}
