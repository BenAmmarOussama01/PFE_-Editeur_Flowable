import React, { useEffect } from 'react'

const Test = () => {
  useEffect(() => {
    console.log('test')
  }, [])
  return <div>hello</div>
}

export default Test
