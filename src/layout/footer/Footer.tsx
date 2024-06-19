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
      position: 'sticky',
      bottom: 0,
      width: '100%',
      textAlign: 'center',
      padding: '20px',
      backgroundColor: '#f2f2f2',
    }}
  >
    Copyright {2024} | ©PFE
  </footer>
  )
}

export default Footer
