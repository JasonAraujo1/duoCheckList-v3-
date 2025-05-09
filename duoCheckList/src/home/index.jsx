import React, { useEffect, useState } from 'react'
import { fetchApiIdUser, fetchApiUsers } from '../services/fetchApi'
import { useNavigate } from 'react-router'
import TableHome from '../components/tableHome';
import HeaderHome from '../components/headerHome';
import SearchInput from '../components/searchInput'
import CleanSelectionBtn from '../components/ui/cleanSelectionBtn';


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

      const user = await fetchApiUsers()

      if (Array.isArray(user)) {
        const userNamefilter = user.filter((item) => (item.id).includes(idUser))
        const userNameChoosed = userNamefilter.map((item) => (item.name))
        setUserName(userNameChoosed)
      } else {
        console.log("fetchApiUsers retornou algo inválido:", user);
        setUserName([]) // ou algum fallback
      }

    }
    onLoad()
  }, [])

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

  return (
    <div className='w-full sm:w-90 md:w-200'>
      <HeaderHome />

      <div className='flex mb-3 mx-4'>
        <span className='text-gray-400 text-medium font-medium'>Olá, {userName}</span>
      </div>

      <div className='flex flex-col items-center'>

        <SearchInput
          searchProduct={searchProduct}
          handleChange={handleChange}
        />
        <CleanSelectionBtn
          handleClean={handleClean}
          cleanSelection={cleanSelection}
        />

        <div className="">
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
