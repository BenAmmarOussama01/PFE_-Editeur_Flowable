import { useState } from 'react'
import { FileUploader } from 'react-drag-drop-files'

interface Props {
  file: File | null
  setFile: (file: File) => void
}
const FilePicker = ({ file, setFile }: Props) => {
  const fileTypes = ['XML']

  return (
    <div className="ml-10">
      <FileUploader handleChange={setFile} name="file" types={fileTypes} />
    </div>
  )
}

export default FilePicker
