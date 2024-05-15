import { useRef, useState, useEffect } from 'react'
import BpmnModeler from 'camunda-bpmn-js/lib/camunda-platform/Modeler'
import 'camunda-bpmn-js/dist/assets/camunda-platform-modeler.css'
import './bpmn.css'

import { useParams } from 'react-router-dom'
import useFetchXml from '../../hooks/useFetchXml'

const Bp = () => {
  const bpmnRef = useRef<HTMLDivElement>(null)
  const propertiesPanelRef = useRef<HTMLDivElement>(null)
  const [modeler, setModeler] = useState<any>(null)
  let modelerInstance: any = null

  let { id } = useParams()
  const { xml } = useFetchXml(id!)
  useEffect(() => {
    if (modelerInstance) return
    if (xml) {
      if (bpmnRef.current) {
        modelerInstance = new BpmnModeler({
          container: bpmnRef.current,
          propertiesPanel: {
            parent: propertiesPanelRef.current,
          },
        })

        modelerInstance.importXML(xml).then((err: any) => {
          if (err.warnings.length) {
            console.warn(err.warnings)
          }
          modelerInstance.get('canvas').zoom('fit-viewport', 'auto')
        })

        setModeler(modelerInstance)
      }
    }
  }, [xml])

  const handleExport = () => {
    if (modeler) {
      modeler.saveXML({ format: true }).then((res: any) => {
        console.log(res.xml)
        if (res.error) {
          console.error(res.error)
          return
        }
      })
    }
  }

  const handleZoomIn = () => {
    modeler.get('zoomScroll').stepZoom(1)
  }
  const handleZoomOut = () => {
    modeler.get('zoomScroll').stepZoom(-1)
  }
  const handleReset = () => {
    modeler.get('zoomScroll').reset()
  }
  return (
    <>
      <div className="flex h-full w-full relative">
        <div ref={bpmnRef} className="w-full h-screen" />
        <div
          ref={propertiesPanelRef}
          style={{ width: '25rem', borderLeft: '1px #ccc solid' }}
        />
      </div>
      <div className=" fixed bottom-28 right-80">
        <button onClick={handleZoomIn}>+</button>
        <button onClick={handleZoomOut}>-</button>
        <button onClick={handleReset}>Reset</button>
      </div>
      <button onClick={handleExport} className="fixed left-0  bottom-28 ">
        Save
      </button>
    </>
  )
}

export default Bp
