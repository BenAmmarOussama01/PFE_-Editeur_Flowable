import { useEffect, useState } from 'react'

const Footer = () => {
  const [currentDay, setCurrentDay] = useState('')

  useEffect(() => {
    const date = new Date()
    setCurrentDay(date.toLocaleDateString(undefined))
  }, [])

  return (
    <footer
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        textAlign: 'center',
        padding: '20px',
        marginTop: 'auto',
        marginBottom: 'auto',
        backgroundColor: '#f2f2f2',
      }}
    >
      Copyright {currentDay} | ©PFE
    </footer>
  )
}

export default Footer
