import { Routes, Route } from "react-router-dom";

import "./App.css";
import BpmnComponent from "./components/diagram_editor/Bpmn";
import Login from "./pages/Login";
import SignIn from "./pages/LoginMUI";
import SignUp from "./pages/SignUp";
const xml = `<?xml version="1.0" encoding="UTF-8"?>
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
</bpmn:definitions>`;

function App() {
  return (
    <Routes>
      <Route path="/" element={<BpmnComponent diagramXml={xml} />} />
      <Route path="/login" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}

export default App;
