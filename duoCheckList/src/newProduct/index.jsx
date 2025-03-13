import { useState } from "react"

export default function NewProduct() {
  const [nome, setNome] = useState("")
  const [status, setStatus] = useState("")
  const [categoria, setCategoria] = useState("")
  const [descricao, setDescricao] = useState("")

  function handleClick() {
    console.log(nome, status, categoria, descricao)
  }

  return (



    <div>
      <button className='text-red-600'>←</button>
      <p className='font-bold'>Novo produto</p>

      <div>
        Nome
        <input onChange={(event) => setNome(event.target.value)} className='border' type="text" />
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
        <select onChange={(event) => setCategoria(event.target.value)} name="" id="" className='border'>
          <option selected disabled value="">Categorias</option>
          <option value="Sala">Sala</option>
          <option value="Quarto">Quarto</option>
          <option value="Banheiro">Banheiro</option>
          <option value="Lavanderia">Lavanderia</option>
          <option value="Escritório">Escritório</option>
          <option value="Quintal/Jardim">Quintal/Jardim</option>
          <option value="Varanda/Sacada">Varanda/Sacada</option>
        </select>
      </div>

      <div>
        Descrição
        <input onChange={(event) => setDescricao(event.target.value)} className='border' type="text" />
      </div>

      <button onClick={handleClick}>Enviar</button>
    </div>
  )
}
