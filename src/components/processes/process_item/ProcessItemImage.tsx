import { useEffect, useState } from 'react'
import { fetchThumbnailImage } from '../../../config/utils/converToImage'

interface Props {
  id: string
}

const ProcessItemImage = ({ id }: Props) => {
  const [imageSrc, setImageSrc] = useState('')
  useEffect(() => {
    fetchThumbnailImage(id)
      .then((imageUrl) => {
        setImageSrc(imageUrl)
      })
      .catch((error) => {
        console.error('Error:', error)
      })

    // Cleanup function to revoke the URL when component unmounts
    return () => {
      if (imageSrc) {
        URL.revokeObjectURL(imageSrc)
      }
    }
  }, [])

  return (
    <>
      {imageSrc && (
        <img
          src={imageSrc}
          alt="Fetched Image"
          style={{ height: '200px', width: '100%' }}
        />
      )}
    </>
  )
}

export default ProcessItemImage
