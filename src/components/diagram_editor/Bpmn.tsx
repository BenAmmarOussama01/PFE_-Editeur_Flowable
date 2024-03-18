import Minimap from 'diagram-js-minimap'
import 'diagram-js-minimap/assets/diagram-js-minimap.css'
import { useEffect, useRef, useState } from 'react'
import BpmnModeler from 'bpmn-js/lib/Modeler'
import Modeling from 'bpmn-js/lib/features/modeling/Modeling'
import Palette from 'diagram-js/lib/features/palette/Palette'
import {
  BpmnPropertiesPanelModule,
  BpmnPropertiesProviderModule,
} from 'bpmn-js-properties-panel'
import { DEFAULT_BPMN_XML } from './default_xml'
import './bpmn.css'
interface Props {
  diagramXml?: string
}
const BpmnComponent = ({ diagramXml }: Props) => {
  const bpmnRef = useRef<HTMLDivElement>(null)
  const propertiesPanelRef = useRef<HTMLDivElement>(null)
  const [modeler, setModeler] = useState<any>(null)
  let modelerInstance: any = null
  useEffect(() => {
    if (modelerInstance) return
    modelerInstance = new BpmnModeler({
      container: bpmnRef.current,
      propertiesPanel: {
        parent: propertiesPanelRef.current,
      },
      additionalModules: [
        Modeling,
        Palette,
        Minimap,
        BpmnPropertiesPanelModule,
        BpmnPropertiesProviderModule,
      ],
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
  return (
    <>
      <button onClick={handleExport}>Save</button>
      <div className="flex h-full w-full relative">
        <div ref={bpmnRef} style={{ height: '600px' }} className="w-full" />
        <div
          ref={propertiesPanelRef}
          style={{ width: '25rem', borderLeft: '1px #ccc solid' }}
        />
      </div>
    </>
  )
}
export default BpmnComponent
