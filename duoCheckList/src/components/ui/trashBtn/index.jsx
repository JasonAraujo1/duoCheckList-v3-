import trash from '../../../assets/trash.svg'

export default function TrashBtn({handleDelete}) {
    return (
        <div>
            <img onClick={handleDelete} src={trash} alt="" className='bg-red-400 rounded-lg p-1 size-8 cursor-pointer' />
        </div>
    )
}
