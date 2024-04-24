import PersonIcon from '@mui/icons-material/Person'
import CreateIcon from '@mui/icons-material/Create'

import { useEffect, useRef, useState } from 'react'
import BpmnViewer from 'bpmn-js/lib/Viewer'
import '../diagram_editor/bpmn.css'
import { Link } from 'react-router-dom'

export interface ProcessProps {
  name: string
  createdBy: string
  lastUpdated: number
  id: string
  xml: string
}

const ProcessItem = ({
  id,
  name,
  createdBy,
  lastUpdated,
  xml,
}: ProcessProps) => {
  const bpmnRef = useRef<HTMLDivElement>(null)
  const [modeler, setModeler] = useState<any>(null)
  const [imageSrc, setImageSrc] = useState('')
  let modelerInstance: any = null
  useEffect(() => {
    if (modelerInstance) return
    modelerInstance = new BpmnViewer({
      container: bpmnRef.current as HTMLElement,
    })

    modelerInstance.importXML(xml).then((err: any) => {
      if (err.warnings.length) {
        console.warn(err.warnings)
      }
      //to center diagram in the viewer
      modelerInstance.get('canvas').zoom('fit-viewport', 'auto')
    })

    setModeler(modelerInstance)
  }, [])
  /*useEffect(() => {
    const fetchImage = async () => {
      const response = await fetch(
        `http://localhost:8070/configuration/modeler/rest/models/${id}/thumbnail`,
      )
      console.log('test :', response.body)
    }
    fetchImage()
  }, [])*/

  useEffect(() => {
    // Assuming imageData is the ReadableStream containing the image data
    console.log('id: ', id)
    fetch(
      `http://localhost:8070/configuration/modeler/rest/models/${id}/thumbnail`,
    )
      .then((response) => response.body)
      .then((body) => {
        console.log('body : ', body)
        const reader = body!.getReader()
        const chunks: any = []

        reader.read().then(function processChunk({ done, value }) {
          if (done) {
            const blob = new Blob(chunks, { type: 'image/jpeg' })
            const imageUrl = URL.createObjectURL(blob)
            setImageSrc(imageUrl)
            return
          }
          chunks.push(value)
          reader.read().then(processChunk)
        })
      })

    // Cleanup function to revoke the URL when component unmounts
    return () => {
      if (imageSrc) {
        URL.revokeObjectURL(imageSrc)
      }
    }
  }, [])

  //const process= useAppSelector((state)=>state.process.process)
  //{bject.values(process).map((process)).............}

  //convert milliseconds to normal date
  const handleFormatDate = () => {
    let date = new Date(lastUpdated)
    return `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`
  }

  return (
    <div className="border-2 h-80 border-slate-200 hover:cursor-pointer relative">
      <Link to={`${id}`} state={{ xml }}>
        {imageSrc && (
          <img
            src={imageSrc}
            alt="Fetched Image"
            style={{ height: '200px', width: '100%' }}
          />
        )}
        <div className="bg-slate-100 p-3 hover:pb-10 absolute bottom-0 right-0 left-0 transition duration-300 ease-in-out">
          <div>{name}</div>
          <div className="flex items-center gap-2 mt-3">
            <PersonIcon /> {createdBy}
          </div>
          <div className="flex items-center gap-2 mt-3 ">
            <CreateIcon /> {handleFormatDate()}
          </div>
        </div>
      </Link>
    </div>
  )
}

export default ProcessItem
