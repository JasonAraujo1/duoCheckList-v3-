// src/pages/LogoutPage.jsx
import { useNavigate } from 'react-router-dom'

export default function LogoutPage() {
  const navigate = useNavigate()

  const confirmLogout = () => {
    localStorage.clear()
    navigate('/')
  }

  const cancelLogout = () => {
    navigate(-1) // volta para a página anterior
  }

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>Você tem certeza que deseja sair?</h2>
      <button onClick={confirmLogout} style={{ margin: '1rem' }}>Sim, quero sair</button>
      <button onClick={cancelLogout}>Cancelar</button>
    </div>
  )
}
