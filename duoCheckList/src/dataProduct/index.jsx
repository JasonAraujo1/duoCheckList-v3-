import { useParams } from 'react-router';


export default function DataProduct() {
  const {id} = useParams()
  return (
    <div>
      <button className='text-red-600'>←</button>
      <p className='font-bold'>Dados do produto</p>
      <div>
        <table className=' w-sm'>

          <tbody >
            <tr className='border'>
              <td>Nome</td>
              <td>Produto A</td>
            </tr>
            <tr className='border'>
              <td>Status</td>
              <td>Pendente</td>
            </tr>
            <tr className='border'>
              <td>Categoria</td>
              <td>Escritório</td>
            </tr>
            <tr className='border'>
              <td>Descrição</td>
              <td>Lorem ipsum, dolor </td>
            </tr>
          </tbody>

        </table>
      </div>
    </div>
  )
}
