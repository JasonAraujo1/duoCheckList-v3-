import  search  from "../../assets/search.svg";

export default function SearchInput({searchProduct, handleChange}) {
    return (
        <div className='bg-neutral-100 flex p-2 rounded-lg justify-center w-full max-w-80 mt-5 mb-6 gap-4'>
            <img src={search} alt="" className='size-7 ' />
            <input value={searchProduct} onChange={handleChange} placeholder='Buscar Produto...'
                className='  outline-0' type="text" />
        </div>
    )
}
