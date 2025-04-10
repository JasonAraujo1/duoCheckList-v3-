import { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router';
import { fetchApiIdUser } from '../services/fetchApi';
import arrow from '../assets/arrow.svg'
import trash from '../assets/trash.svg'
import edit from '../assets/edit.svg'
import TableDataProduct from '../components/tableDataProduct';


export default function DataProduct() {
  const [dataUser, setDataUser] = useState([]);
  const [dataProduct, setDataProduct] = useState([]);
  const navigate = useNavigate()


  useEffect(() => {
    async function onLoad() {
      const idUser = localStorage.getItem("idUser");
      const data = await fetchApiIdUser(idUser);
      setDataUser(Array.isArray(data) ? data : []);

      const idProduct = localStorage.getItem("idProduct")
      // console.log("idProduct", idProduct)
      setDataProduct(idProduct)

    }
    onLoad()
  }, []);


  async function handleDelete() {
    const url = `https://67be079f321b883e790ee0ed.mockapi.io/api/v1/products/${dataProduct}`;

    await fetch(url, { method: 'DELETE' });

    setDataUser(dataUser.filter(item => item.id !== dataProduct))
    localStorage.removeItem("idProduct");

    alert("Item removido")
    navigate("/home")
  }



  const filteredProduct = dataUser.filter((item) => item.id === dataProduct);
  // console.log("produto filtrado", filteredProduct);

  return (
    <div className=' w-full sm:w-80 md:w-200'>
      <NavLink to={"/home"}>
        <img src={arrow} alt="" className='size-9' />
      </NavLink>
      <div className='flex flex-col items-start gap-4 mt-12 mb-18'>
        <p className='font-bold text-3xl'>Dados do Produto</p>
        <span className='text-gray-400 text-lg font-medium '>Informações do produto adicionado</span>
      </div>

      <div>

        <TableDataProduct
          dataUser={dataUser}
          filteredProduct={filteredProduct} />

        <div className='flex justify-between'>
          <img onClick={handleDelete} src={trash} alt="" className='bg-red-400 rounded-lg p-1 size-8 cursor-pointer' />
          <NavLink to={"/edit"}>
            <img src={edit} alt="" className='bg-red-400 rounded-lg p-1 size-8 cursor-pointer' />
          </NavLink>
        </div>
      </div>
    </div>
  );
}
