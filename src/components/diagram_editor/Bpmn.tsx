/*import { useEffect, useRef, useState } from 'react'
import BpmnModeler from 'bpmn-js/lib/Modeler'
import Modeling from 'bpmn-js/lib/features/modeling/Modeling'
import Palette from 'diagram-js/lib/features/palette/Palette'
import Minimap from 'diagram-js-minimap'
import 'diagram-js-minimap/assets/diagram-js-minimap.css' 
import { DEFAULT_BPMN_XML } from './default_xml'
import './bpmn.css'*/

/*interface Props {
  diagramXml?: string
}*/

const BpmnComponent = (/*{ diagramXml }: Props*/) => {
  /*const bpmnRef = useRef<HTMLDivElement>(null)
  const [modeler, setModeler] = useState<any>(null)

  useEffect(() => {
    if (!bpmnRef.current) return

    const modelerInstance = new BpmnModeler({
      container: bpmnRef.current,
      additionalModules: [Modeling, Palette, Minimap],
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
  }, [diagramXml])

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
  }*/

  return (
    <>
      {/*<button onClick={handleExport}>Save</button>
      <div ref={bpmnRef} style={{ height: '600px' }}></div>*/}
    </>
  )
}

export default BpmnComponent
