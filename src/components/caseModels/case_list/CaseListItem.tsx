import { useEffect, useState } from 'react'

import PersonIcon from '@mui/icons-material/Person'
import CreateIcon from '@mui/icons-material/Create'
import { Link } from 'react-router-dom'
import { formatDate } from '../../../config/utils/formatDate'
import { fetchThumbnailImage } from '../../../config/utils/converToImage'

interface CaseModelProps {
  name: string
  createdBy: string
  lastUpdated: number
  id: string
}

const CaseListItem = ({ id, name, createdBy, lastUpdated }: CaseModelProps) => {
  const [imageSrc, setImageSrc] = useState('')
  useEffect(() => {
    console.log(id)
    fetchThumbnailImage(id)
      .then((imageUrl) => {
        console.log(imageUrl)
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

  useEffect(() => {
    console.log('imagesrc')
  }, [imageSrc])

  return (
    <div className="border-4 h-80 border-slate-200 hover:cursor-pointer relative w-[320px]">
      <Link to={`${id}`}>
        <div
          style={{
            height: '200px',
            width: '100%',
            background: `url(${imageSrc}) no-repeat center center `,
          }}
        ></div>
        <div className="bg-slate-100 p-3 hover:pb-10 absolute bottom-0 right-0 left-0 transition duration-300 ease-in-out w-full">
          <div>{name}</div>
          <div className="flex items-center gap-2 mt-3">
            <PersonIcon /> {createdBy}
          </div>
          <div className="flex items-center gap-2 mt-3 ">
            <CreateIcon /> {formatDate(lastUpdated)}
          </div>
        </div>
      </Link>
    </div>
  )
}

export default CaseListItem
