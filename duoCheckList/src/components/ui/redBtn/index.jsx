
export default function RedBtn({onClick, text}) {
  return (
    <div>
        <button onClick={onClick} className="cursor-pointer my-20 bg-red-400 text-white font-bold rounded-lg py-2 w-80" >{text}</button>
    </div>
  )
}
