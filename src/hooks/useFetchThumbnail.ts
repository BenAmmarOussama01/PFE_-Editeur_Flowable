import { useState, useEffect } from 'react'
import { fetchThumbnailImage } from '../config/utils/converToImage'

const useFetchThumbnail = (id: string) => {
  const [imageSrc, setImageSrc] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)

    fetchThumbnailImage(id)
      .then((imageUrl) => {
        setImageSrc(imageUrl)
      })
      .catch((error) => {
        console.error('Error:', error)
      })
      .finally(() => {
        setIsLoading(false)
      })

    return () => {
      if (imageSrc) {
        URL.revokeObjectURL(imageSrc)
      }
    }
  }, [])
  return { imageSrc, isLoading }
}

export default useFetchThumbnail
