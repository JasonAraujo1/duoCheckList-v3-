import clean from '../../../assets/clean.svg'


export default function CleanSelectionBtn({ handleClean, cleanSelection }) {
    return (
        <div className='w-full text-start cursor-pointer  h-4' onClick={handleClean}>
            <span className={`underline text-sm flex items-center gap-1 ${cleanSelection === false ? 'hidden disabled ' : 'text-gray-500'}`}>Limpar filtros <span><img src={clean} alt="" className='size-3.5' /></span></span>
        </div>
    )
}
