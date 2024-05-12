import { useState } from 'react'
import { FileUploader } from 'react-drag-drop-files'

const FilePicker = () => {
  const [file, setFile] = useState<File | null>(null)
  const fileTypes = ['XML']
  const handleChange = (file: File) => {
    setFile(file)
  }
  return (
    <div className="ml-10">
      <FileUploader handleChange={handleChange} name="file" types={fileTypes} />
    </div>
  )
}

export default FilePicker
