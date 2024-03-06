
import React, { useRef, useState, useEffect } from 'react'
import BpmnModeler from 'camunda-bpmn-js/lib/camunda-platform/Modeler'

import 'camunda-bpmn-js/dist/assets/camunda-platform-modeler.css'
import { DEFAULT_BPMN_XML } from './default_xml'
import './bpmn.css'

interface Props {
  diagramXml?: string
}
const BpmnComponent = ({ diagramXml }: Props) => {
  const bpmnRef = useRef<HTMLDivElement>(null)
  const propertiesPanelRef = useRef<HTMLDivElement>(null)
  const [modeler, setModeler] = useState<any>(null)
  let modelerInstance: any  
  useEffect(() => {
    if (modelerInstance) return
    modelerInstance = new BpmnModeler({
      container: bpmnRef.current,
      propertiesPanel: {
        parent: propertiesPanelRef.current,
      },
    })
    modelerInstance
      .importXML(diagramXml ? diagramXml : DEFAULT_BPMN_XML)
      .then((err: any) => {
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
        console.log('UPDATE XML:', res.xml)
      })
    }
  }

  useEffect(() => {
    console.log('mdl : ', modeler)
  }, [modeler])
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
        <div ref={bpmnRef} style={{ height: '786px' }} className="w-full" />
        
        <div
          ref={propertiesPanelRef}
          style={{ width: '22rem', borderLeft: '5px #ccc solid' }}
          
        />
        
      </div>
      <button onClick={handleExport}>Save</button>
      <button onClick={handleZoomIn}>+</button>
      <button onClick={handleZoomOut}>-</button>
      <button onClick={handleReset}>Reset</button>
    </>
  )
}

export default BpmnComponent