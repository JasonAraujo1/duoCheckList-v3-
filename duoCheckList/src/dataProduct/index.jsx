import { useEffect, useState } from 'react';
import { NavLink } from 'react-router';
import { fetchApiIdUser } from '../services/fetchApi';
import arrow from '../assets/arrow.svg'
import trash from '../assets/trash.svg'
import edit from '../assets/edit.svg'


export default function DataProduct() {
  const [dataUser, setDataUser] = useState([]);
  const [dataProduct, setDataProduct] = useState([]);

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
  // console.log("dataUser",dataUser)

  const filteredProduct = dataUser.filter((item) => item.id === dataProduct);
  console.log("produto filtrado", filteredProduct);

  return (
    <div className='w-80'>
      <NavLink to={"/home"}>
        <img src={arrow} alt="" className='size-9' />
      </NavLink>
      <p className='font-bold py-16 text-base'>Dados do produto</p>

      <div>
        {dataUser.length === 0 ? (
          <p>Nenhum produto encontrado.</p>
        ) : (
          filteredProduct.map((item) => (
            <table key={item.id} className="w-full sm:w-auto mb-8  table-auto ">
              <tbody >
                <tr className="border  border-gray-200">
                  <td className="px-4 py-2 bg-gray-100">Nome</td>
                  <td className="px-4 py-2">{item.product}</td>
                </tr>
                <tr className="border border-gray-200">
                  <td className="px-4 py-2 bg-gray-100">Status</td>
                  <td className={`px-4 py-2 ${item.status === 'Não Adquirido' ? 'text-amber-500' : 'text-lime-500'
                        }`}>{item.status}</td>
                </tr>
                <tr className="border border-gray-200">
                  <td className="px-4 py-2 bg-gray-100">Categoria</td>
                  <td className="px-4 py-2">{item.category}</td>
                </tr>
                <tr className="border border-gray-200">
                  <td className="px-4 py-2 bg-gray-100">Descrição</td>
                  <td className="px-4 py-2">{item.description}</td>
                </tr>
              </tbody>
            </table>


          ))
        )}
        <div className='flex justify-between'>
          <img src={trash} alt="" className='bg-red-400 rounded-lg p-1 size-8 ' />
          <img src={edit} alt="" className='bg-red-400 rounded-lg p-1 size-8 ' />
        </div>
      </div>
    </div>
  );
}
