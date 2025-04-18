import { NavLink } from 'react-router'
import edit from '../../../assets/edit.svg'

export default function EditBtn() {
    return (
        <div>
            <NavLink to={"/edit"}>
                <img src={edit} alt="" className='bg-red-400 rounded-lg p-1 size-8 cursor-pointer' />
            </NavLink>
        </div>
    )
}
