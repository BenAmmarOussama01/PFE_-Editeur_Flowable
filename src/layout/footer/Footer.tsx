import { strict } from 'assert'
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

        bottom: 0,
        width: '100%',
        textAlign: 'center',
        marginBottom: '200px'!,
        padding: '15px',
        backgroundColor: '#f2f2f2',
      }}
    >
      Copyright {currentDay} | ©PFE
    </footer>
  )
}

export default Footer
