// src/pages/Logout.jsx
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Logout() {
  const navigate = useNavigate()
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    setShowModal(true)
  }, [])

  const handleConfirm = () => {
    localStorage.clear()
    navigate('/')
  }

  const handleCancel = () => {
    navigate(-1) // volta para a página anterior
  }

  if (!showModal) return null

  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: 'rgba(0,0,0,0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <div style={{
        background: 'white',
        padding: '2rem',
        borderRadius: '0.5rem',
        textAlign: 'center',
      }}>
        <h2>Tem certeza que deseja sair?</h2>
        <div style={{ marginTop: '1rem' }}>
          <button onClick={handleConfirm} style={{ marginRight: '1rem' }}>Sim</button>
          <button onClick={handleCancel}>Cancelar</button>
        </div>
      </div>
    </div>
  )
}
