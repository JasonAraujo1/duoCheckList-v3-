import React, { useEffect, useState } from 'react'
import { fetchApiIdUser } from '../services/fetchApi'
import { NavLink, useNavigate } from 'react-router'
import plus from '../assets/plus.svg';
import search from '../assets/search.svg';
import logout from '../assets/logout.svg';
import clean from '../assets/clean.svg';


export default function Home() {

  const [dataProduct, setDataProduct] = useState([]);
  const [searchProduct, setSearchProduct] = useState("");
  const [display, setDisplay] = useState([]);
  const [cleanSelection, setCleanSelection] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const navigate = useNavigate();


  function handleLogout(){
    localStorage.clear()
  }

  useEffect(() => {
    async function onLoad() {
      const idUser = localStorage.getItem("idUser")
      if(idUser){
        const data = await fetchApiIdUser(idUser)
        setDataProduct(Array.isArray(data) ? data : [])
        setDisplay(Array.isArray(data) ? data : [])
      }
      else{
        setDisplay([])
        navigate("/login")
      }
      //  console.log("idUser", idUser)
      //Se o usuário não tem produtos, a API pode retornar algo que não é um array (como undefined, null ou {}). Quando isso acontece, o React tenta fazer dataProduct.map(...) em algo inválido, o que gera erro e quebra a página.
      //então usamos Array.isArray() para checar se data é um array. Se for, usamos ele. Se não for, usamos um array vazio [].

      
    }
    onLoad()
  }, [])
  // console.log("teste", dataProduct)

  function handleChange({ target }) {
    setSearchProduct(target.value)
    const filterInput = dataProduct.filter((item) => item.product.includes(searchProduct))
    setDisplay(filterInput)
  }

  function handleClickProduct(id) {
    localStorage.setItem("idProduct", id)
    // console.log("idProduct", id)
  }

  function handleSelect({ target }) {
    setSelectedCategory(target.value)
    const filterInput = dataProduct.filter((item) => item.category === target.value)
    setDisplay(filterInput)
    setCleanSelection(true)
  }

  function handleSelectStatus({ target }) {
    setSelectedStatus(target.value);
    const filterStatus = dataProduct.filter((item) => item.status === target.value)
    setDisplay(filterStatus)
    setCleanSelection(true)
  }

  function handleClean() {
    setDisplay(dataProduct)
    setSelectedCategory("")
    setSelectedStatus("")
    setCleanSelection(false)
  }
  //toda vez que usa as funcoes de select options, atualiza o status da 'cleanselection' com boolean, fiz o ternario para ativar o 'limpar filtros' em caso de true no html(linha 85), e ao clicar no limpar filtro ele atualiza o staus do setdisplay com data product e o status do cleanselection com false para esconder o 'limpar filtros'
  
  
  return (
    <div className='w-full sm:w-90 md:w-200'>

      <div className='flex mb-8 justify-between items-center'>
        <NavLink to="/new">
          <img src={plus} alt="" className='size-15 hover:' />
          <span className='text-gray-400 text-sm'>Novo</span>
        </NavLink>
        <NavLink to="/login" onClick={handleLogout}>
          <img src={logout} alt="" className='size-8 hover:' />
          <span className='text-gray-400 text-sm'>Sair</span>
        </NavLink>

      </div>
      <div className='flex flex-col items-center'>


        <div className='bg-neutral-100 flex p-2 rounded-lg justify-center w-full max-w-80 mt-5 mb-6 gap-4'>
          <img src={search} alt="" className='size-7 ' />
          <input value={searchProduct} onChange={handleChange} placeholder='Buscar Produto...'
            className='  outline-0' type="text" />
        </div>

        <div className='w-full text-start cursor-pointer  h-4' onClick={handleClean}>
          <span className={`underline text-sm flex items-center gap-1 ${cleanSelection === false ? 'hidden disabled ' : 'text-gray-500'}`}>Limpar filtros <span><img src={clean} alt="" className='size-3.5'/></span></span>
        </div>

        <div className=" ">
          <table className=" text-sm md:text-base md:w-200 text-start ">
            <thead className='border-b-2 border-b-red-400 '>
              <tr className=''>
                <th className="w-30 md:w-72 text-start px-2 py-2 text-red-400 text-base">Produtos</th>
                <th className="text-start py-2 pr-3">
                  <select value={selectedCategory}  onChange={handleSelect} className="text-red-400  rounded  py-1  text-base md:text-sm outline-0 w-full md:w-36" >
                    <option disabled value="">Categorias</option>
                    <option value="Sala">Sala</option>
                    <option value="Quarto">Quarto</option>
                    <option value="Banheiro">Banheiro</option>
                    <option value="Lavanderia">Lavanderia</option>
                    <option value="Escritório">Escritório</option>
                    <option value="Quintal/Jardim">Quintal/Jardim</option>
                    <option value="Varanda/Sacada">Varanda/Sacada</option>
                    <option value="Cozinha">Cozinha</option>
                  </select>
                </th>
                <th className=" py-2 text-start">
                  <select value={selectedStatus} onChange={handleSelectStatus} className="text-red-400 rounded px-1 py-1   text-base md:text-sm outline-0 w-full md:w-28">
                    <option className='outline-0' disabled value="">Status</option>
                    <option className='outline-0' value="Adquirido">Adquirido</option>
                    <option className='outline-0' value="Não Adquirido">Não Adquirido</option>
                  </select>
                </th>
              </tr>
            </thead>

            <tbody className=''>
              {display.length === 0 ? (
                <tr>
                  <td colSpan="3" className="text-center py-2">Nenhum produto encontrado.</td>
                </tr>
              ) : (
                display.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-100 ">
                    <td className='cursor-pointer px-2 py-3 border-b border-gray-300 text-base font-medium '>
                      <NavLink to="/product" onClick={() => handleClickProduct(item.id)} className=" ">
                        {item.product}
                      </NavLink>
                    </td>
                    <td className='px-2 py-1 border-b font-light text-neutral-500 border-gray-300'>{item.category}</td>
                    <td
                      className={`px-2 py-1 border-b  text-sm font-semibold border-gray-300 ${item.status === 'Não Adquirido' ? 'text-amber-500' : 'text-lime-500'
                        }`}
                    >
                      {item.status}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>


      </div>
    </div>
  )
}
