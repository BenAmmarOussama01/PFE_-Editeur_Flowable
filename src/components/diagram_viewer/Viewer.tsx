import { useRef, useState, useEffect } from 'react'
import BpmnViewer from 'camunda-bpmn-js/lib/camunda-platform/Viewer'
import { useParams } from 'react-router-dom'
import useFetchXml from '../../hooks/useFetchXml'

import 'camunda-bpmn-js/dist/assets/camunda-platform-modeler.css'

import ViewerToolBar from '../DiagramToolBar/ViewerToolBar'
import Box from '@mui/material/Box'
const Viewer = () => {
  const bpmnRef = useRef<HTMLDivElement>(null)
  const [modeler, setModeler] = useState<any>(null)
  let modelerInstance: any = null
  let { id } = useParams()
  const { xml } = useFetchXml(id!)

  useEffect(() => {
    if (modelerInstance) return
    if (xml) {
      if (bpmnRef.current) {
        modelerInstance = new BpmnViewer({
          container: bpmnRef.current,
        })

        modelerInstance.importXML(xml).then((err: any) => {
          if (err.warnings.length) {
            console.warn(err.warnings)
          }
          const canvas = modelerInstance.get('canvas')

          const { inner } = canvas.viewbox()

          const center = {
            x: inner.x + inner.width / 2,
            y: inner.y + inner.height / 2,
          }

          canvas.zoom('fit-viewport', center)
        })

        setModeler(modelerInstance)
      }
    }
  }, [xml])
  return (
    <div>
      <Box sx={{ height: '100%', width: '100%', position: 'relative' }}>
        <ViewerToolBar id={id!} />

        <Box ref={bpmnRef} sx={{ height: '80vh', width: '100%' }} />
      </Box>
    </div>
  )
}

export default Viewer
