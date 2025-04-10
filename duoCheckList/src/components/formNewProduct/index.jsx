
export default function FormNewProduct({setProduct, setStatus, setCategory, setDescription}) {
  return (
    <div>
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
    </div>
  )
}
