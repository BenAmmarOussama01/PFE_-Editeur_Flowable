import { useRef, useState, useEffect } from 'react'
import BpmnViewer from 'camunda-bpmn-js/lib/camunda-platform/Viewer'
import { useParams } from 'react-router-dom'
import useFetchXml from '../../hooks/useFetchXml'

import 'camunda-bpmn-js/dist/assets/camunda-platform-modeler.css'
import '../diagram_editor/bpmn.css'
import ViewerToolBar from '../DiagramToolBar/ViewerToolBar'
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
      <div className=" h-full w-full relative ">
        <ViewerToolBar id={id!} />

        <div ref={bpmnRef} className=" h-[80vh] w-full " />
      </div>
    </div>
  )
}

export default Viewer
