import { NavLink } from 'react-router'
import arrow from '../../assets/arrow.svg'

export default function HeaderDataProduct() {
    return (
        <div>
            <NavLink to={"/home"}>
                <img src={arrow} alt="" className='size-9' />
            </NavLink>
            <div className='flex flex-col items-start gap-4 mt-12 mb-18'>
                <p className='font-bold text-3xl'>Dados do Produto</p>
                <span className='text-gray-400 text-lg font-medium '>Informações do produto adicionado</span>
            </div>
        </div>
    )
}
