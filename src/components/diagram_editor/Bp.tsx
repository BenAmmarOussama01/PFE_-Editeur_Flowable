import { useRef, useState, useEffect } from 'react'
import BpmnModeler from 'camunda-bpmn-js/lib/camunda-platform/Modeler'
import 'camunda-bpmn-js/dist/assets/camunda-platform-modeler.css'
import './bpmn.css'
import * as convert from 'xml-js'

import { useLocation } from 'react-router-dom'

import axios from 'axios'
import { APP_BASE_URL } from '../../config/app.constant'
import { useParams } from 'react-router-dom'

interface Props {
  diagramXml?: string
}
const xml = `<definitions xmlns="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:flowable="http://flowable.org/bpmn" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:omgdc="http://www.omg.org/spec/DD/20100524/DC" xmlns:omgdi="http://www.omg.org/spec/DD/20100524/DI" typeLanguage="http://www.w3.org/2001/XMLSchema" expressionLanguage="http://www.w3.org/1999/XPath" targetNamespace="http://flowable.org/test" exporter="Flowable Open Source Modeler" exporterVersion="6.8.0">
<collaboration id="Collaboration">
<participant id="sid-50788AC2-B1AB-480B-B797-7F03672FD9B0" name="associateRegistrationRequest" processRef="ASSOCIATE_REGISTRATION_PROCESS"/>
</collaboration>
<process id="ASSOCIATE_REGISTRATION_PROCESS" name="associateRegistrationRequest" isExecutable="true">
<extensionElements>
<flowable:executionListener event="start"/>
</extensionElements>
<laneSet id="laneSet_ASSOCIATE_REGISTRATION_PROCESS">
<lane id="sid-F87E348C-5112-4A27-BD6D-0541737DB772">
<flowNodeRef>startEvent1</flowNodeRef>
<flowNodeRef>sid-241B50A9-F2C8-433D-847C-AA2508FC784B</flowNodeRef>
<flowNodeRef>sid-4E4C9FB7-F9D7-47FD-A1CA-C8E9433AE8BE</flowNodeRef>
<flowNodeRef>sid-750955E8-C8C3-4A25-8D39-B68988C7047F</flowNodeRef>
<flowNodeRef>sid-06C67E15-B7F7-4FA3-8B8C-5A26613C3D4C</flowNodeRef>
<flowNodeRef>sid-02A02B45-041F-42C3-9D8F-A375AB14C47F</flowNodeRef>
<flowNodeRef>sid-2BB61919-78A1-4C58-A9AD-DC53267A153D</flowNodeRef>
<flowNodeRef>sid-5B9B141F-960A-4820-A066-0C759B3685F7</flowNodeRef>
<flowNodeRef>sid-C55590AF-E703-4BD0-8ACE-A756B34509D4</flowNodeRef>
<flowNodeRef>sid-C0135E74-A250-4131-8FAB-E2CEA33F0314</flowNodeRef>
<flowNodeRef>sid-A7895F07-56DC-494E-93E6-6D43B8B08A25</flowNodeRef>
<flowNodeRef>sid-6B70D7CE-4059-4179-A4C2-3C45173A6D9E</flowNodeRef>
</lane>
</laneSet>
<startEvent id="startEvent1" flowable:formKey="ASSOCIATE_REGISTRATION_FORM" flowable:formFieldValidation="true">
<extensionElements>
<flowable:executionListener event="start" />
</extensionElements>
</startEvent>
<userTask id="sid-241B50A9-F2C8-433D-847C-AA2508FC784B" name="Associate Registration Request" flowable:formKey="ASSOCIATE_REGISTRATION_FORM" flowable:formFieldValidation="true"/>
<endEvent id="sid-4E4C9FB7-F9D7-47FD-A1CA-C8E9433AE8BE"/>
<exclusiveGateway id="sid-750955E8-C8C3-4A25-8D39-B68988C7047F"/>
<userTask id="sid-06C67E15-B7F7-4FA3-8B8C-5A26613C3D4C" name="Upload Signed Documents" flowable:formFieldValidation="true"/>
<userTask id="sid-02A02B45-041F-42C3-9D8F-A375AB14C47F" name="Validate Request" flowable:formFieldValidation="true"/>
<sequenceFlow id="sid-2BB61919-78A1-4C58-A9AD-DC53267A153D" sourceRef="sid-241B50A9-F2C8-433D-847C-AA2508FC784B" targetRef="sid-06C67E15-B7F7-4FA3-8B8C-5A26613C3D4C"/>
<sequenceFlow id="sid-5B9B141F-960A-4820-A066-0C759B3685F7" sourceRef="sid-06C67E15-B7F7-4FA3-8B8C-5A26613C3D4C" targetRef="sid-750955E8-C8C3-4A25-8D39-B68988C7047F"/>
<sequenceFlow id="sid-C55590AF-E703-4BD0-8ACE-A756B34509D4" sourceRef="sid-02A02B45-041F-42C3-9D8F-A375AB14C47F" targetRef="sid-4E4C9FB7-F9D7-47FD-A1CA-C8E9433AE8BE"/>
<sequenceFlow id="sid-C0135E74-A250-4131-8FAB-E2CEA33F0314" sourceRef="startEvent1" targetRef="sid-241B50A9-F2C8-433D-847C-AA2508FC784B"/>
<sequenceFlow id="sid-A7895F07-56DC-494E-93E6-6D43B8B08A25" name="Approve" sourceRef="sid-750955E8-C8C3-4A25-8D39-B68988C7047F" targetRef="sid-02A02B45-041F-42C3-9D8F-A375AB14C47F"/>
<sequenceFlow id="sid-6B70D7CE-4059-4179-A4C2-3C45173A6D9E" name="Reject" sourceRef="sid-750955E8-C8C3-4A25-8D39-B68988C7047F" targetRef="sid-4E4C9FB7-F9D7-47FD-A1CA-C8E9433AE8BE"/>
</process>
<bpmndi:BPMNDiagram id="BPMNDiagram_Collaboration">
<bpmndi:BPMNPlane bpmnElement="Collaboration" id="BPMNPlane_Collaboration">
<bpmndi:BPMNShape bpmnElement="sid-50788AC2-B1AB-480B-B797-7F03672FD9B0" id="BPMNShape_sid-50788AC2-B1AB-480B-B797-7F03672FD9B0">
<omgdc:Bounds height="318.99999873340136" width="801.9999969154596" x="134.9999979734421" y="41.9999993890524"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-F87E348C-5112-4A27-BD6D-0541737DB772" id="BPMNShape_sid-F87E348C-5112-4A27-BD6D-0541737DB772">
<omgdc:Bounds height="318.99999873340136" width="771.9999969154596" x="164.9999979734421" y="41.9999993890524"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="startEvent1" id="BPMNShape_startEvent1">
<omgdc:Bounds height="30.000000000000007" width="30.0" x="194.99997965991628" y="124.99999687075623"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-241B50A9-F2C8-433D-847C-AA2508FC784B" id="BPMNShape_sid-241B50A9-F2C8-433D-847C-AA2508FC784B">
<omgdc:Bounds height="68.00000017881393" width="133.9999995082617" x="359.999994635582" y="74.99999888241294"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-4E4C9FB7-F9D7-47FD-A1CA-C8E9433AE8BE" id="BPMNShape_sid-4E4C9FB7-F9D7-47FD-A1CA-C8E9433AE8BE">
<omgdc:Bounds height="28.000000000000007" width="28.00000000000003" x="584.9999565929196" y="309.9999919533732"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-750955E8-C8C3-4A25-8D39-B68988C7047F" id="BPMNShape_sid-750955E8-C8C3-4A25-8D39-B68988C7047F">
<omgdc:Bounds height="40.00000000000001" width="40.00000000000003" x="578.999974027277" y="188.49999187141685"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-06C67E15-B7F7-4FA3-8B8C-5A26613C3D4C" id="BPMNShape_sid-06C67E15-B7F7-4FA3-8B8C-5A26613C3D4C">
<omgdc:Bounds height="63.00000023841857" width="136.99999944865695" x="614.9999816715721" y="77.49999769777065"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-02A02B45-041F-42C3-9D8F-A375AB14C47F" id="BPMNShape_sid-02A02B45-041F-42C3-9D8F-A375AB14C47F">
<omgdc:Bounds height="57.000000342726715" width="133.9999995082616" x="749.9999888241292" y="179.999997317791"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNEdge bpmnElement="sid-C0135E74-A250-4131-8FAB-E2CEA33F0314" id="BPMNEdge_sid-C0135E74-A250-4131-8FAB-E2CEA33F0314" flowable:sourceDockerX="15.0" flowable:sourceDockerY="15.0" flowable:targetDockerX="66.99999975413085" flowable:targetDockerY="34.00000008940697">
<omgdi:waypoint x="224.94997451075707" y="139.99999687075623"/>
<omgdi:waypoint x="269.5454416871071" y="139.99999687075626"/>
<omgdi:waypoint x="269.5454416871071" y="108.9999989718199"/>
<omgdi:waypoint x="359.999994635582" y="108.9999989718199"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-A7895F07-56DC-494E-93E6-6D43B8B08A25" id="BPMNEdge_sid-A7895F07-56DC-494E-93E6-6D43B8B08A25" flowable:sourceDockerX="20.5" flowable:sourceDockerY="20.5" flowable:targetDockerX="66.99999975413078" flowable:targetDockerY="28.500000171363354">
<omgdi:waypoint x="618.4892526672853" y="208.95621356551806"/>
<omgdi:waypoint x="749.9999888241281" y="208.65390379503967"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-5B9B141F-960A-4820-A066-0C759B3685F7" id="BPMNEdge_sid-5B9B141F-960A-4820-A066-0C759B3685F7" flowable:sourceDockerX="68.49999972432855" flowable:sourceDockerY="31.50000011920929" flowable:targetDockerX="20.0" flowable:targetDockerY="20.0">
<omgdi:waypoint x="683.4999813959006" y="140.44999793618922"/>
<omgdi:waypoint x="683.4999813959006" y="164.49999490380304"/>
<omgdi:waypoint x="598.999974027277" y="164.49999490380304"/>
<omgdi:waypoint x="598.999974027277" y="188.49999187141685"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-C55590AF-E703-4BD0-8ACE-A756B34509D4" id="BPMNEdge_sid-C55590AF-E703-4BD0-8ACE-A756B34509D4" flowable:sourceDockerX="66.99999975413084" flowable:sourceDockerY="56.00000034272668" flowable:targetDockerX="14.0" flowable:targetDockerY="14.0">
<omgdi:waypoint x="816.9999885782601" y="236.94999766051774"/>
<omgdi:waypoint x="816.9999885782601" y="323.9999919533732"/>
<omgdi:waypoint x="612.949879064375" y="323.9999919533732"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-2BB61919-78A1-4C58-A9AD-DC53267A153D" id="BPMNEdge_sid-2BB61919-78A1-4C58-A9AD-DC53267A153D" flowable:sourceDockerX="66.99999975413085" flowable:sourceDockerY="34.00000008940697" flowable:targetDockerX="0.9999999999999996" flowable:targetDockerY="31.50000011920929">
<omgdi:waypoint x="493.9499931319449" y="108.99999856243218"/>
<omgdi:waypoint x="614.9999808774807" y="108.99999782278469"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-6B70D7CE-4059-4179-A4C2-3C45173A6D9E" id="BPMNEdge_sid-6B70D7CE-4059-4179-A4C2-3C45173A6D9E" flowable:sourceDockerX="20.5" flowable:sourceDockerY="20.5" flowable:targetDockerX="14.0" flowable:targetDockerY="14.0">
<omgdi:waypoint x="599.4170016893506" y="228.02440576035514"/>
<omgdi:waypoint x="599.0606103173354" y="310.00012219522046"/>
</bpmndi:BPMNEdge>
</bpmndi:BPMNPlane>
</bpmndi:BPMNDiagram>
</definitions>`
const Bp = ({ diagramXml }: Props) => {
  const [xmlBp, setXmlBp] = useState({})

  //url location
  const location = useLocation()
  const { id } = useParams()
  ////const { xml } = location.state
  //console.log(xml)
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
  /*useEffect(() => {
    axios
      .post(
        `${APP_BASE_URL}configuration/modeler/rest/converter/convert-to-xml/${id}`,
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
  }, [])*/

  const handleExport = () => {
    if (modeler) {
      modeler.saveXML({ format: true }).then((res: any) => {
        if (res.error) {
          console.error(res.error)
          return
        }
        console.log(res.xml)
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
