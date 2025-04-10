
import { useState } from "react"
import { NavLink, useNavigate } from "react-router"
import arrow from '../assets/arrow.svg'
import FormEditProduct from "../components/formEditProduct"

export default function Edit() {
    const [product, setProduct] = useState("")
    const [status, setStatus] = useState("")
    const [category, setCategory] = useState("")
    const [description, setDescription] = useState("")
    const navigate = useNavigate()
    const idUser = localStorage.getItem("idUser")

    const idProduct = localStorage.getItem("idProduct")
    // console.log(idProduct)

    async function handleClick() {
        const data = {
            product: product,
            status: status,
            category: category,
            description: description,
            idUser: idUser
        }
        const url = `https://67be079f321b883e790ee0ed.mockapi.io/api/v1/products/${idProduct}`

        const req = await fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        const res = await req.json()
        // console.log("new post", res)


        alert("Produto cadastrado!")
        navigate("/home")

    }

    return (
        <div className='flex flex-col gap-6  md:w-200'>
            <NavLink to={"/home"}>
                <img src={arrow} alt="" className='size-9' />
            </NavLink>

            <div className='flex flex-col gap-6  md:w-200 my-8' >
                <div className='flex flex-col items-start gap-4'>
                    <p className='font-bold text-3xl'>Editar Produto</p>
                    <span className='text-gray-400 text-lg font-medium '>Preencha os campos para editar </span>
                </div>

                <FormEditProduct
                    setProduct={setProduct}
                    setStatus={setStatus}
                    setCategory={setCategory}
                    setDescription={setDescription} />
                <div>
                    <button className="cursor-pointer my-20 bg-red-400 text-white font-bold rounded-lg py-2 w-80" onClick={handleClick}>Editar</button>
                </div>
            </div>



        </div>
    )
}


