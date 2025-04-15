import React from 'react'
import plus from '../../assets/plus.svg';
import logout from '../../assets/logout.svg';
import { NavLink } from 'react-router';

export default function HeaderHome() {
    return (
        <div>
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
        </div>
    )
}
