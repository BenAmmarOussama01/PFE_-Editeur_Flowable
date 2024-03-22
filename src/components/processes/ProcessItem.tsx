import PersonIcon from '@mui/icons-material/Person'
import CreateIcon from '@mui/icons-material/Create'

import { useEffect, useRef, useState } from 'react'
import BpmnViewer from 'bpmn-js/lib/Viewer'
import '../diagram_editor/bpmn.css'
import { Link } from 'react-router-dom'
/*const xml = `<?xml version="1.0" encoding="UTF-8"?>
 <bpmn:definitions xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" id="Definitions_1" targetNamespace="http://bpmn.io/schema/bpmn">
   <bpmn:process id="Process_1" isExecutable="false">
    <bpmn:startEvent id="Event_1q76s97">
       <bpmn:outgoing>Flow_0dee8r4</bpmn:outgoing>
    </bpmn:startEvent>
     <bpmn:task id="Activity_1b9yjiu">
       <bpmn:incoming>Flow_0dee8r4</bpmn:incoming>
       <bpmn:outgoing>Flow_03kmzjl</bpmn:outgoing>
     </bpmn:task>
     <bpmn:exclusiveGateway id="Gateway_0xd2868">
      <bpmn:incoming>Flow_03kmzjl</bpmn:incoming>
     </bpmn:exclusiveGateway>
     <bpmn:sequenceFlow id="Flow_0dee8r4" sourceRef="Event_1q76s97" targetRef="Activity_1b9yjiu" />
     <bpmn:sequenceFlow id="Flow_03kmzjl" sourceRef="Activity_1b9yjiu" targetRef="Gateway_0xd2868" />
   </bpmn:process>
   <bpmndi:BPMNDiagram id="BPMNDiagram_1">
     <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Process_1">
      <bpmndi:BPMNShape id="Event_1q76s97_di" bpmnElement="Event_1q76s97">
         <dc:Bounds x="342" y="182" width="36" height="36" />
      </bpmndi:BPMNShape>
       <bpmndi:BPMNShape id="Activity_1b9yjiu_di" bpmnElement="Activity_1b9yjiu">
        <dc:Bounds x="490" y="160" width="100" height="80" />
       </bpmndi:BPMNShape>
       <bpmndi:BPMNShape id="Gateway_0xd2868_di" bpmnElement="Gateway_0xd2868" isMarkerVisible="true">
         <dc:Bounds x="725" y="175" width="50" height="50" />
      </bpmndi:BPMNShape>
       <bpmndi:BPMNEdge id="Flow_0dee8r4_di" bpmnElement="Flow_0dee8r4">
         <di:waypoint x="378" y="200" />
         <di:waypoint x="490" y="200" />
       </bpmndi:BPMNEdge>
       <bpmndi:BPMNEdge id="Flow_03kmzjl_di" bpmnElement="Flow_03kmzjl">
         <di:waypoint x="590" y="200" />
        <di:waypoint x="725" y="200" />
       </bpmndi:BPMNEdge>
     </bpmndi:BPMNPlane>
   </bpmndi:BPMNDiagram>
 </bpmn:definitions>`*/

interface ProcessProps {
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

  //convert milliseconds to normal date
  const handleFormatDate = () => {
    let date = new Date(lastUpdated)
    return `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`
  }

  return (
    <div className="border-2 h-80 border-slate-200 hover:cursor-pointer relative">
      <Link to={`${id}`} state={{ xml }}>
        <div ref={bpmnRef} style={{ height: '200px' }}></div>
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
