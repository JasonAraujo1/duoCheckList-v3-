import { useEffect, useState } from 'react';
import { NavLink } from 'react-router';
import { fetchApiIdUser, fetchApiProducts } from '../services/fetchApi'; // certifique-se que está importado

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
  console.log("produto filtrado",filteredProduct);

  return (
    <div>
      <NavLink to={"/home"}>
        <button className='text-red-600'>←</button>
      </NavLink>
      <p className='font-bold'>Dados do produto</p>

      <div>
        {dataUser.length === 0 ? (
          <p>Nenhum produto encontrado.</p>
        ) : (
          filteredProduct.map((item) => (
            <table key={item.id} className='w-sm mb-4 border'>
              <tbody>
                <tr className='border'>
                  <td>Nome</td>
                  <td>{item.product}</td>
                </tr>
                <tr className='border'>
                  <td>Status</td>
                  <td>{item.status}</td>
                </tr>
                <tr className='border'>
                  <td>Categoria</td>
                  <td>{item.category}</td>
                </tr>
                <tr className='border'>
                  <td>Descrição</td>
                  <td>{item.description}</td>
                </tr>
              </tbody>
            </table>
          ))
        )}
        <button>Apagar</button>
        <button>Editar</button>
      </div>
    </div>
  );
}
