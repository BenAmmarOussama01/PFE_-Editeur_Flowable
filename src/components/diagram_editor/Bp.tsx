import { useRef, useState, useEffect } from 'react'
import BpmnModeler from 'camunda-bpmn-js/lib/camunda-platform/Modeler'
import 'camunda-bpmn-js/dist/assets/camunda-platform-modeler.css'
import { DEFAULT_BPMN_XML } from './default_xml'
import './bpmn.css'
import * as convert from 'xml-js'

import { useLocation } from 'react-router-dom'

interface Props {
  diagramXml?: string
}
const Bp = ({ diagramXml }: Props) => {
  //url location
  const location = useLocation()
  const { xml } = location.state
  console.log(xml)
  const bpmnRef = useRef<HTMLDivElement>(null)
  const propertiesPanelRef = useRef<HTMLDivElement>(null)
  const [modeler, setModeler] = useState<any>(null)
  let modelerInstance: any = null
  useEffect(() => {
    if (modelerInstance) return
    if (bpmnRef.current) {
      modelerInstance = new BpmnModeler({
        container: bpmnRef.current,
        propertiesPanel: {
          parent: propertiesPanelRef.current,
        },
      })
    }
    modelerInstance.importXML(xml).then((err: any) => {
      if (err.warnings.length) {
        console.warn(err.warnings)
      }
      modelerInstance.get('canvas').zoom('fit-viewport')
    })
    setModeler(modelerInstance)
  }, [])

  const handleExport = () => {
    if (modeler) {
      //console.log(modeler.getDefinitions());
      modeler.saveXML({ format: true }).then((res: any) => {
        if (res.error) {
          console.error(res.error)
          return
        }
        let result = convert.xml2json(res.xml, { compact: true, spaces: 4 })
        console.log('UPDATE XML TO JSON:', result)
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
