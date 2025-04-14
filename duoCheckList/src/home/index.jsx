import React, { useEffect, useState } from 'react'
import { fetchApiIdUser, fetchApiUsers } from '../services/fetchApi'
import { NavLink, useNavigate } from 'react-router'
import plus from '../assets/plus.svg';
import search from '../assets/search.svg';
import logout from '../assets/logout.svg';
import clean from '../assets/clean.svg';
import TableHome from '../components/tableHome';
import LogoutPage from '../logoutPage';


export default function Home() {

  const [dataProduct, setDataProduct] = useState([]);
  const [searchProduct, setSearchProduct] = useState("");
  const [display, setDisplay] = useState([]);
  const [cleanSelection, setCleanSelection] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [userName, setUserName] = useState([]);
  const navigate = useNavigate();





  useEffect(() => {
    async function onLoad() {
      const idUser = localStorage.getItem("idUser")
      if (idUser) {
        const data = await fetchApiIdUser(idUser)

        const sortedData = Array.isArray(data) ? data.sort((a, b) => a.product.localeCompare(b.product)) : []
        //ordem alfabética

        setDataProduct(Array.isArray(data) ? data : [])
        setDisplay(Array.isArray(data) ? data : [])

      }
      else {
        setDisplay([])
        navigate("/")
      }
      //  console.log("idUser", idUser)
      //Se o usuário não tem produtos, a API pode retornar algo que não é um array (como undefined, null ou {}). Quando isso acontece, o React tenta fazer dataProduct.map(...) em algo inválido, o que gera erro e quebra a página.
      //então usamos Array.isArray() para checar se data é um array. Se for, usamos ele. Se não for, usamos um array vazio [].
      const user = await fetchApiUsers()
      const userNamefilter = user.filter((item) => (item.id).includes(idUser))
      const userNameChoosed = userNamefilter.map((item) => (item.name))
      setUserName(userNameChoosed)
    }
    onLoad()
  }, [])
  // console.log("teste", dataProduct)

  function handleChange({ target }) {
    setSearchProduct(target.value)
    const filterInput = dataProduct.filter((item) => item.product.includes(searchProduct))
    setDisplay(filterInput)
    if (target.value === "") {
      setDisplay(dataProduct)
    }
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
          <span className='text-gray-400 text-sm cursor-pointer'>Novo</span>
        </NavLink>
        <div className=' cursor-pointer'>
          <NavLink to={'/logout'}>
            <img src={logout} alt="" className='size-8 hover:' />
            <span className='text-gray-400 text-sm '>Sair</span>
          </NavLink>
        </div>
      </div>

      <div className='flex mb-3 mx-4'>
        <span className='text-gray-400 text-medium font-medium'>Olá, {userName}</span>
      </div>

      <div className='flex flex-col items-center'>

        <div className='bg-neutral-100 flex p-2 rounded-lg justify-center w-full max-w-80 mt-5 mb-6 gap-4'>
          <img src={search} alt="" className='size-7 ' />
          <input value={searchProduct} onChange={handleChange} placeholder='Buscar Produto...'
            className='  outline-0' type="text" />
        </div>

        <div className='w-full text-start cursor-pointer  h-4' onClick={handleClean}>
          <span className={`underline text-sm flex items-center gap-1 ${cleanSelection === false ? 'hidden disabled ' : 'text-gray-500'}`}>Limpar filtros <span><img src={clean} alt="" className='size-3.5' /></span></span>
        </div>

        <div className=" ">
          <TableHome
            selectedCategory={selectedCategory}
            handleSelect={handleSelect}
            selectedStatus={selectedStatus}
            handleSelectStatus={handleSelectStatus}
            display={display}
            handleClickProduct={handleClickProduct} />
        </div>


      </div>
    </div>
  )
}
