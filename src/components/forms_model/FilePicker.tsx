import { useState } from 'react'
import { FileUploader } from 'react-drag-drop-files'

const FilePicker = () => {
  const [file, setFile] = useState<File | null>(null)
  const fileTypes = ['JPG', 'PNG', 'GIF']
  const handleChange = (file: File) => {
    setFile(file)
  }
  return (
    <FileUploader handleChange={handleChange} name="file" types={fileTypes} />
  )
}

export default FilePicker