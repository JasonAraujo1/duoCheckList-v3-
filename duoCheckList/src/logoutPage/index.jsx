// src/pages/Logout.jsx
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import LogoutModal from '../components/ui/logoutModal'

export default function Logout() {
    const navigate = useNavigate()
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        setShowModal(true)
    }, [])

    function handleConfirm() {
        localStorage.clear()
        navigate('/', { replace: true }) // substitui no histórico
      }
      

    function handleCancel() {
        navigate(-1) // volta para a página anterior
    }

    if (!showModal) return null

    return (
        <LogoutModal 
        handleConfirm={handleConfirm} 
        handleCancel={handleCancel}
        />
    )

}
