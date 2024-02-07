// src/defaultBpmnXml.ts
export const DEFAULT_BPMN_XML = `<?xml version="1.0" encoding="UTF-8"?>
<definitions xmlns="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:omgdc="http://www.omg.org/spec/DD/20100524/DC" xmlns:omgdi="http://www.omg.org/spec/DD/20100524/DI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:signavio="http://www.signavio.com" id="sid-edcb32b0-ba3c-4331-9874-58685c514c55" targetNamespace="http://www.signavio.com" expressionLanguage="http://www.w3.org/TR/XPath" exporter="Camunda Modeler" exporterVersion="5.0.0-alpha.1" xsi:schemaLocation="http://www.omg.org/spec/BPMN/20100524/MODEL http://www.omg.org/spec/BPMN/2.0/20100501/BPMN20.xsd">
  <error id="sid-c4218475-d7d4-4ee6-ae73-5d44c49114b8" />
  <process id="rootProcess" name="Root" processType="None" isClosed="false" isExecutable="true">
    <startEvent id="sid-6687E2F4-B03D-4E57-A62B-68FA642BE19C">
      <outgoing>sid-89A3F9F2-CCC8-46C7-816B-DD8AC8A98300</outgoing>
    </startEvent>
    <parallelGateway id="parallelGateway" gatewayDirection="Diverging">
      <incoming>sid-89A3F9F2-CCC8-46C7-816B-DD8AC8A98300</incoming>
      <outgoing>sid-F06605E1-AEC1-4B39-8843-4AD3F547B557</outgoing>
      <outgoing>sid-FC2ECAF5-771E-4ED3-BEF6-EFAB45E79500</outgoing>
    </parallelGateway>
    <subProcess id="collapsedProcess" name="Order Products">
      <incoming>sid-F06605E1-AEC1-4B39-8843-4AD3F547B557</incoming>
      <outgoing>sid-31F6EC44-E44C-4121-B4FE-BD69AF208C05</outgoing>
      <startEvent id="sid-AB14D824-C8B9-4211-B224-C5AF8CED8BBD">
        <outgoing>sid-EB275CF2-5EF1-44FA-B41B-71EB37CC2657</outgoing>
      </startEvent>
      <userTask id="sid-9E3BA75C-29DD-4DAC-8283-8FDE4E9A6724" name="Check Items">
        <incoming>sid-EB275CF2-5EF1-44FA-B41B-71EB37CC2657</incoming>
        <outgoing>sid-FB543319-8DFB-4445-AAA3-720137FB230B</outgoing>
      </userTask>
      <subProcess id="expandedProcess" name="Expanded Process">
        <extensionElements>
          <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffff" />
          <signavio:signavioMetaData metaKey="bordercolor" metaValue="#000000" />
        </extensionElements>
        <incoming>sid-FB543319-8DFB-4445-AAA3-720137FB230B</incoming>
        <outgoing>sid-B99D259B-1BD5-45FF-BD57-FB99C360BAC0</outgoing>
        <startEvent id="sid-3B0273A0-FE3B-4525-9E1F-FBAE2F53C2E7">
          <outgoing>sid-472B540C-A0CD-46F4-9640-DF692EC1BFFC</outgoing>
        </startEvent>
        <subProcess id="collapsedProcess_2" name="Call External Supplier">
          <incoming>sid-472B540C-A0CD-46F4-9640-DF692EC1BFFC</incoming>
          <outgoing>sid-910420B0-D11B-4F9D-B285-703D8AC0BA90</outgoing>
          <startEvent id="sid-C67DBACD-2E96-4A69-97F0-9B04CCB255EC">
            <outgoing>sid-A7460113-CB75-491D-817B-5E1A8C606B8C</outgoing>
          </startEvent>
          <userTask id="sid-3459D5A6-4E18-4133-8362-0418AC9CE830" name="Call External Supplier">
            <incoming>sid-A7460113-CB75-491D-817B-5E1A8C606B8C</incoming>
            <outgoing>sid-01982395-64E8-43EF-A6D3-CDD276C312AA</outgoing>
          </userTask>
          <endEvent id="sid-987C40F8-82D3-4637-ABCE-A85A5E2AB8A9">
            <incoming>sid-01982395-64E8-43EF-A6D3-CDD276C312AA</incoming>
          </endEvent>
          <sequenceFlow id="sid-A7460113-CB75-491D-817B-5E1A8C606B8C" sourceRef="sid-C67DBACD-2E96-4A69-97F0-9B04CCB255EC" targetRef="sid-3459D5A6-4E18-4133-8362-0418AC9CE830" />
          <sequenceFlow id="sid-01982395-64E8-43EF-A6D3-CDD276C312AA" sourceRef="sid-3459D5A6-4E18-4133-8362-0418AC9CE830" targetRef="sid-987C40F8-82D3-4637-ABCE-A85A5E2AB8A9" />
        </subProcess>
        <endEvent id="sid-17C71FEB-D00D-46D0-ACBE-BB424A3EE5A5">
          <incoming>sid-910420B0-D11B-4F9D-B285-703D8AC0BA90</incoming>
        </endEvent>
        <sequenceFlow id="sid-472B540C-A0CD-46F4-9640-DF692EC1BFFC" sourceRef="sid-3B0273A0-FE3B-4525-9E1F-FBAE2F53C2E7" targetRef="collapsedProcess_2" />
        <sequenceFlow id="sid-910420B0-D11B-4F9D-B285-703D8AC0BA90" sourceRef="collapsedProcess_2" targetRef="sid-17C71FEB-D00D-46D0-ACBE-BB424A3EE5A5" />
      </subProcess>
      <endEvent id="sid-EE9F103D-15EA-4FBB-A4DB-8B94E5F04390">
        <incoming>sid-B99D259B-1BD5-45FF-BD57-FB99C360BAC0</incoming>
      </endEvent>
      <sequenceFlow id="sid-EB275CF2-5EF1-44FA-B41B-71EB37CC2657" sourceRef="sid-AB14D824-C8B9-4211-B224-C5AF8CED8BBD" targetRef="sid-9E3BA75C-29DD-4DAC-8283-8FDE4E9A6724" />
      <sequenceFlow id="sid-FB543319-8DFB-4445-AAA3-720137FB230B" sourceRef="sid-9E3BA75C-29DD-4DAC-8283-8FDE4E9A6724" targetRef="expandedProcess" />
      <sequenceFlow id="sid-B99D259B-1BD5-45FF-BD57-FB99C360BAC0" sourceRef="expandedProcess" targetRef="sid-EE9F103D-15EA-4FBB-A4DB-8B94E5F04390" />
    </subProcess>
    <subProcess id="sid-D0CDA908-DDCE-4E82-88D0-F1A919B8AE8B" name="Procure Payment">
      <incoming>sid-FC2ECAF5-771E-4ED3-BEF6-EFAB45E79500</incoming>
      <outgoing>sid-5B23450F-AF5E-4519-B134-32107776BD44</outgoing>
      <startEvent id="sid-A13CFBB9-5471-4439-96FA-B65862CA7B21">
        <outgoing>sid-E71F5783-AFE7-44ED-8A9C-378C95087448</outgoing>
      </startEvent>
      <subProcess id="sid-ECEB5194-0BF8-4913-A76F-963DC1FD1D7F" name="Charge Card">
        <incoming>sid-E71F5783-AFE7-44ED-8A9C-378C95087448</incoming>
        <outgoing>sid-6B9741CD-D94B-41C7-A2EA-63A4C9445E16</outgoing>
        <startEvent id="sid-F2CCFED7-AD11-4A21-80EE-71D9C96549C8">
          <outgoing>sid-3BB6D6CA-BF45-4D15-A1AB-64686C41DB32</outgoing>
        </startEvent>
        <userTask id="sid-29B8F97B-1A0D-4280-A62D-5093316C484B" name="Charge Card">
          <incoming>sid-3BB6D6CA-BF45-4D15-A1AB-64686C41DB32</incoming>
          <outgoing>sid-4E25B80E-EF68-4EE5-BB08-C1F54F1A7C39</outgoing>
        </userTask>
        <endEvent id="sid-F5AE4FCD-976F-4426-B1FF-7FCAA4CE2393">
          <incoming>sid-4E25B80E-EF68-4EE5-BB08-C1F54F1A7C39</incoming>
        </endEvent>
        <sequenceFlow id="sid-3BB6D6CA-BF45-4D15-A1AB-64686C41DB32" sourceRef="sid-F2CCFED7-AD11-4A21-80EE-71D9C96549C8" targetRef="sid-29B8F97B-1A0D-4280-A62D-5093316C484B" />
        <sequenceFlow id="sid-4E25B80E-EF68-4EE5-BB08-C1F54F1A7C39" sourceRef="sid-29B8F97B-1A0D-4280-A62D-5093316C484B" targetRef="sid-F5AE4FCD-976F-4426-B1FF-7FCAA4CE2393" />
      </subProcess>
      <subProcess id="sid-5DCDF44C-56B4-47A2-9085-00004E76F3A8" name="Accounting Stuff, I don&#39;t know">
        <incoming>sid-6B9741CD-D94B-41C7-A2EA-63A4C9445E16</incoming>
        <outgoing>sid-1A9DABC6-6079-4BF2-9D49-C4DC9569C519</outgoing>
        <startEvent id="sid-2098A7EE-D7D8-405E-AF61-95BA48E891B6">
          <outgoing>sid-E5404926-738D-4447-87FE-FC6DD1E8BEFC</outgoing>
        </startEvent>
        <userTask id="sid-E21C867A-7A56-46DD-9A1E-94C02FDB18FB" name="Accounting Stuff, I don&#39;t know">
          <incoming>sid-E5404926-738D-4447-87FE-FC6DD1E8BEFC</incoming>
          <outgoing>sid-FED62A8F-6C3A-4BB2-8DE9-18FB0B35B50E</outgoing>
        </userTask>
        <endEvent id="sid-DAFD7764-8FA5-417B-BB33-55E483687A7D">
          <incoming>sid-FED62A8F-6C3A-4BB2-8DE9-18FB0B35B50E</incoming>
        </endEvent>
        <sequenceFlow id="sid-E5404926-738D-4447-87FE-FC6DD1E8BEFC" sourceRef="sid-2098A7EE-D7D8-405E-AF61-95BA48E891B6" targetRef="sid-E21C867A-7A56-46DD-9A1E-94C02FDB18FB" />
        <sequenceFlow id="sid-FED62A8F-6C3A-4BB2-8DE9-18FB0B35B50E" sourceRef="sid-E21C867A-7A56-46DD-9A1E-94C02FDB18FB" targetRef="sid-DAFD7764-8FA5-417B-BB33-55E483687A7D" />
      </subProcess>
      <endEvent id="sid-345BB5A6-CE3B-4711-972A-81E47BA4B667">
        <incoming>sid-1A9DABC6-6079-4BF2-9D49-C4DC9569C519</incoming>
      </endEvent>
      <sequenceFlow id="sid-E71F5783-AFE7-44ED-8A9C-378C95087448" sourceRef="sid-A13CFBB9-5471-4439-96FA-B65862CA7B21" targetRef="sid-ECEB5194-0BF8-4913-A76F-963DC1FD1D7F">
        <extensionElements>
          <signavio:signavioMetaData metaKey="bordercolor" metaValue="#000000" />
        </extensionElements>
      </sequenceFlow>
      <sequenceFlow id="sid-6B9741CD-D94B-41C7-A2EA-63A4C9445E16" sourceRef="sid-ECEB5194-0BF8-4913-A76F-963DC1FD1D7F" targetRef="sid-5DCDF44C-56B4-47A2-9085-00004E76F3A8">
        <extensionElements>
          <signavio:signavioMetaData metaKey="bordercolor" metaValue="#000000" />
        </extensionElements>
      </sequenceFlow>
      <sequenceFlow id="sid-1A9DABC6-6079-4BF2-9D49-C4DC9569C519" sourceRef="sid-5DCDF44C-56B4-47A2-9085-00004E76F3A8" targetRef="sid-345BB5A6-CE3B-4711-972A-81E47BA4B667" />
    </subProcess>
    <parallelGateway id="sid-7412307A-1A0F-43BA-933B-6E84157B4E5B" gatewayDirection="Converging">
      <incoming>sid-5B23450F-AF5E-4519-B134-32107776BD44</incoming>
      <incoming>sid-31F6EC44-E44C-4121-B4FE-BD69AF208C05</incoming>
      <outgoing>sid-F7DA1903-6A1A-4858-AF4B-286A968C957F</outgoing>
    </parallelGateway>
    <boundaryEvent id="sid-C586DCF2-0B1B-4878-8042-F9869023F21B" attachedToRef="sid-D0CDA908-DDCE-4E82-88D0-F1A919B8AE8B">
      <outgoing>sid-DCB98638-BEBD-4548-B501-F0E29AC71ED4</outgoing>
      <errorEventDefinition id="sid-804c8ce9-8013-49e6-a6f5-bf97d24f6cf0" errorRef="sid-c4218475-d7d4-4ee6-ae73-5d44c49114b8" />
    </boundaryEvent>
    <endEvent id="sid-A53C38A9-456B-4AC9-9D4A-6EC9663BA77C">
      <incoming>sid-DCB98638-BEBD-4548-B501-F0E29AC71ED4</incoming>
    </endEvent>
    <endEvent id="sid-DA90DE99-58B0-4371-B71D-87A718ACB64D">
      <incoming>sid-3FAE72F2-4037-4CBA-8B89-01D7FC7FF3E3</incoming>
    </endEvent>
    <sequenceFlow id="sid-89A3F9F2-CCC8-46C7-816B-DD8AC8A98300" sourceRef="sid-6687E2F4-B03D-4E57-A62B-68FA642BE19C" targetRef="parallelGateway" />
    <sequenceFlow id="sid-F06605E1-AEC1-4B39-8843-4AD3F547B557" sourceRef="parallelGateway" targetRef="collapsedProcess" />
    <sequenceFlow id="sid-FC2ECAF5-771E-4ED3-BEF6-EFAB45E79500" sourceRef="parallelGateway" targetRef="sid-D0CDA908-DDCE-4E82-88D0-F1A919B8AE8B" />
    <sequenceFlow id="sid-5B23450F-AF5E-4519-B134-32107776BD44" sourceRef="sid-D0CDA908-DDCE-4E82-88D0-F1A919B8AE8B" targetRef="sid-7412307A-1A0F-43BA-933B-6E84157B4E5B" />
    <sequenceFlow id="sid-31F6EC44-E44C-4121-B4FE-BD69AF208C05" sourceRef="collapsedProcess" targetRef="sid-7412307A-1A0F-43BA-933B-6E84157B4E5B" />
    <sequenceFlow id="sid-DCB98638-BEBD-4548-B501-F0E29AC71ED4" sourceRef="sid-C586DCF2-0B1B-4878-8042-F9869023F21B" targetRef="sid-A53C38A9-456B-4AC9-9D4A-6EC9663BA77C" />
    <sequenceFlow id="sid-F7DA1903-6A1A-4858-AF4B-286A968C957F" sourceRef="sid-7412307A-1A0F-43BA-933B-6E84157B4E5B" targetRef="parallelGateway_withoutContent" />
    <sequenceFlow id="sid-3FAE72F2-4037-4CBA-8B89-01D7FC7FF3E3" sourceRef="parallelGateway_withoutContent" targetRef="sid-DA90DE99-58B0-4371-B71D-87A718ACB64D" />
    <userTask id="parallelGateway_withoutContent" name="Ship Items (todo)">
      <incoming>sid-F7DA1903-6A1A-4858-AF4B-286A968C957F</incoming>
      <outgoing>sid-3FAE72F2-4037-4CBA-8B89-01D7FC7FF3E3</outgoing>
    </userTask>
  </process>
  <bpmndi:BPMNDiagram id="sid-cbeafa41-c891-415c-ab0d-3eb4a233f9ed">
    <bpmndi:BPMNPlane id="sid-5fb4720f-4b99-4727-8770-dd4166bcd5e4" bpmnElement="rootProcess">
      <bpmndi:BPMNEdge id="sid-3FAE72F2-4037-4CBA-8B89-01D7FC7FF3E3_gui" bpmnElement="sid-3FAE72F2-4037-4CBA-8B89-01D7FC7FF3E3">
        <omgdi:waypoint x="675" y="226" />
        <omgdi:waypoint x="717" y="226" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="sid-F7DA1903-6A1A-4858-AF4B-286A968C957F_gui" bpmnElement="sid-F7DA1903-6A1A-4858-AF4B-286A968C957F">
        <omgdi:waypoint x="529" y="226" />
        <omgdi:waypoint x="575" y="226" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="sid-DCB98638-BEBD-4548-B501-F0E29AC71ED4_gui" bpmnElement="sid-DCB98638-BEBD-4548-B501-F0E29AC71ED4">
        <omgdi:waypoint x="420" y="380" />
        <omgdi:waypoint x="420" y="437.89053746720595" />
        <omgdi:waypoint x="515" y="438" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="sid-31F6EC44-E44C-4121-B4FE-BD69AF208C05_gui" bpmnElement="sid-31F6EC44-E44C-4121-B4FE-BD69AF208C05">
        <omgdi:waypoint x="445" y="120" />
        <omgdi:waypoint x="510.5" y="120" />
        <omgdi:waypoint x="510.5" y="205" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="sid-5B23450F-AF5E-4519-B134-32107776BD44_gui" bpmnElement="sid-5B23450F-AF5E-4519-B134-32107776BD44">
        <omgdi:waypoint x="445" y="325" />
        <omgdi:waypoint x="510.5" y="325" />
        <omgdi:waypoint x="510.5" y="245" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="sid-FC2ECAF5-771E-4ED3-BEF6-EFAB45E79500_gui" bpmnElement="sid-FC2ECAF5-771E-4ED3-BEF6-EFAB45E79500">
        <omgdi:waypoint x="255.5" y="245" />
        <omgdi:waypoint x="255.5" y="325" />
        <omgdi:waypoint x="345" y="325" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="sid-F06605E1-AEC1-4B39-8843-4AD3F547B557_gui" bpmnElement="sid-F06605E1-AEC1-4B39-8843-4AD3F547B557">
        <omgdi:waypoint x="255.5" y="205" />
        <omgdi:waypoint x="255.5" y="120" />
        <omgdi:waypoint x="345" y="120" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="sid-89A3F9F2-CCC8-46C7-816B-DD8AC8A98300_gui" bpmnElement="sid-89A3F9F2-CCC8-46C7-816B-DD8AC8A98300">
        <omgdi:waypoint x="190" y="225.09316770186336" />
        <omgdi:waypoint x="235" y="225.37267080745346" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNShape id="sid-6687E2F4-B03D-4E57-A62B-68FA642BE19C_gui" bpmnElement="sid-6687E2F4-B03D-4E57-A62B-68FA642BE19C">
        <omgdc:Bounds x="160" y="210" width="30" height="30" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="parallelGateway_gui" bpmnElement="parallelGateway">
        <omgdc:Bounds x="235" y="205" width="40" height="40" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_1x90on4_di" bpmnElement="parallelGateway_withoutContent">
        <omgdc:Bounds x="575" y="186" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="sid-DA90DE99-58B0-4371-B71D-87A718ACB64D_gui" bpmnElement="sid-DA90DE99-58B0-4371-B71D-87A718ACB64D">
        <omgdc:Bounds x="717" y="212" width="28" height="28" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="collapsedProcess_gui" bpmnElement="collapsedProcess" isExpanded="false">
        <omgdc:Bounds x="345" y="80" width="100" height="80" />
        <bpmndi:BPMNLabel labelStyle="sid-c53530f5-9da8-4535-ae6d-c94859ea5b93">
          <omgdc:Bounds x="352.99214363098145" y="102" width="84.08571243286133" height="12" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="sid-D0CDA908-DDCE-4E82-88D0-F1A919B8AE8B_gui" bpmnElement="sid-D0CDA908-DDCE-4E82-88D0-F1A919B8AE8B" isExpanded="false">
        <omgdc:Bounds x="345" y="285" width="100" height="80" />
        <bpmndi:BPMNLabel labelStyle="sid-c53530f5-9da8-4535-ae6d-c94859ea5b93">
          <omgdc:Bounds x="349.520715713501" y="307" width="91.02856826782227" height="12" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="sid-7412307A-1A0F-43BA-933B-6E84157B4E5B_gui" bpmnElement="sid-7412307A-1A0F-43BA-933B-6E84157B4E5B">
        <omgdc:Bounds x="490" y="205" width="40" height="40" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="sid-A53C38A9-456B-4AC9-9D4A-6EC9663BA77C_gui" bpmnElement="sid-A53C38A9-456B-4AC9-9D4A-6EC9663BA77C">
        <omgdc:Bounds x="515" y="424" width="28" height="28" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="sid-C586DCF2-0B1B-4878-8042-F9869023F21B_gui" bpmnElement="sid-C586DCF2-0B1B-4878-8042-F9869023F21B">
        <omgdc:Bounds x="405" y="350" width="30" height="30" />
      </bpmndi:BPMNShape>
    </bpmndi:BPMNPlane>
    <bpmndi:BPMNLabelStyle id="sid-c53530f5-9da8-4535-ae6d-c94859ea5b93">
      <omgdc:Font name="Arial" size="12" isBold="false" isItalic="false" isUnderline="false" isStrikeThrough="false" />
    </bpmndi:BPMNLabelStyle>
  </bpmndi:BPMNDiagram>
  <bpmndi:BPMNDiagram id="sid-99a6a759-9161-4f4a-a83d-9ad6b9fbdc7e">
    <bpmndi:BPMNPlane id="sid-62501c88-ba6c-44ea-90f1-3ccf6a7cea2f" bpmnElement="collapsedProcess">
      <bpmndi:BPMNEdge id="sid-B99D259B-1BD5-45FF-BD57-FB99C360BAC0_gui" bpmnElement="sid-B99D259B-1BD5-45FF-BD57-FB99C360BAC0">
        <omgdi:waypoint x="658" y="154.85467980295567" />
        <omgdi:waypoint x="703" y="154.9655172413793" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="sid-FB543319-8DFB-4445-AAA3-720137FB230B_gui" bpmnElement="sid-FB543319-8DFB-4445-AAA3-720137FB230B">
        <omgdi:waypoint x="325" y="154.89539748953976" />
        <omgdi:waypoint x="370" y="154.80125523012552" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="sid-EB275CF2-5EF1-44FA-B41B-71EB37CC2657_gui" bpmnElement="sid-EB275CF2-5EF1-44FA-B41B-71EB37CC2657">
        <omgdi:waypoint x="180" y="155" />
        <omgdi:waypoint x="225" y="155" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNShape id="sid-AB14D824-C8B9-4211-B224-C5AF8CED8BBD_gui" bpmnElement="sid-AB14D824-C8B9-4211-B224-C5AF8CED8BBD">
        <omgdc:Bounds x="150" y="140" width="30" height="30" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="sid-9E3BA75C-29DD-4DAC-8283-8FDE4E9A6724_gui" bpmnElement="sid-9E3BA75C-29DD-4DAC-8283-8FDE4E9A6724">
        <omgdc:Bounds x="225" y="115" width="100" height="80" />
        <bpmndi:BPMNLabel labelStyle="sid-592ddc98-48fc-42b3-b7f9-1df8b6d368c5">
          <omgdc:Bounds x="241.44285583496094" y="147" width="67.11428833007812" height="12" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="expandedProcess_gui" bpmnElement="expandedProcess" isExpanded="true">
        <omgdc:Bounds x="370" y="79" width="288" height="151" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="sid-910420B0-D11B-4F9D-B285-703D8AC0BA90_gui" bpmnElement="sid-910420B0-D11B-4F9D-B285-703D8AC0BA90">
        <omgdi:waypoint x="565" y="155" />
        <omgdi:waypoint x="610" y="155" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="sid-472B540C-A0CD-46F4-9640-DF692EC1BFFC_gui" bpmnElement="sid-472B540C-A0CD-46F4-9640-DF692EC1BFFC">
        <omgdi:waypoint x="420" y="155" />
        <omgdi:waypoint x="465" y="155" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNShape id="sid-3B0273A0-FE3B-4525-9E1F-FBAE2F53C2E7_gui" bpmnElement="sid-3B0273A0-FE3B-4525-9E1F-FBAE2F53C2E7">
        <omgdc:Bounds x="390" y="140" width="30" height="30" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="collapsedProcess_2_gui" bpmnElement="collapsedProcess_2" isExpanded="false">
        <omgdc:Bounds x="465" y="115" width="100" height="80" />
        <bpmndi:BPMNLabel labelStyle="sid-592ddc98-48fc-42b3-b7f9-1df8b6d368c5">
          <omgdc:Bounds x="481.4778537750244" y="141" width="67.11429214477539" height="24" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="sid-17C71FEB-D00D-46D0-ACBE-BB424A3EE5A5_gui" bpmnElement="sid-17C71FEB-D00D-46D0-ACBE-BB424A3EE5A5">
        <omgdc:Bounds x="610" y="141" width="28" height="28" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="sid-EE9F103D-15EA-4FBB-A4DB-8B94E5F04390_gui" bpmnElement="sid-EE9F103D-15EA-4FBB-A4DB-8B94E5F04390">
        <omgdc:Bounds x="703" y="141" width="28" height="28" />
      </bpmndi:BPMNShape>
    </bpmndi:BPMNPlane>
    <bpmndi:BPMNLabelStyle id="sid-592ddc98-48fc-42b3-b7f9-1df8b6d368c5">
      <omgdc:Font name="Arial" size="12" isBold="false" isItalic="false" isUnderline="false" isStrikeThrough="false" />
    </bpmndi:BPMNLabelStyle>
  </bpmndi:BPMNDiagram>
  <bpmndi:BPMNDiagram id="sid-0bbc44a9-8a6a-44a1-8b61-0cf870c26fe4">
    <bpmndi:BPMNPlane id="sid-275fa3fd-9114-4005-b305-71f6c1411c24" bpmnElement="collapsedProcess_2">
      <bpmndi:BPMNEdge id="sid-01982395-64E8-43EF-A6D3-CDD276C312AA_gui" bpmnElement="sid-01982395-64E8-43EF-A6D3-CDD276C312AA">
        <omgdi:waypoint x="405" y="145" />
        <omgdi:waypoint x="450" y="145" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="sid-A7460113-CB75-491D-817B-5E1A8C606B8C_gui" bpmnElement="sid-A7460113-CB75-491D-817B-5E1A8C606B8C">
        <omgdi:waypoint x="260" y="145" />
        <omgdi:waypoint x="305" y="145" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNShape id="sid-C67DBACD-2E96-4A69-97F0-9B04CCB255EC_gui" bpmnElement="sid-C67DBACD-2E96-4A69-97F0-9B04CCB255EC">
        <omgdc:Bounds x="230" y="130" width="30" height="30" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="sid-3459D5A6-4E18-4133-8362-0418AC9CE830_gui" bpmnElement="sid-3459D5A6-4E18-4133-8362-0418AC9CE830">
        <omgdc:Bounds x="305" y="105" width="100" height="80" />
        <bpmndi:BPMNLabel labelStyle="sid-efc2a4e3-a5c6-411d-80d4-64f3a53bc4a4">
          <omgdc:Bounds x="321.44285583496094" y="131" width="67.11428833007812" height="24" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="sid-987C40F8-82D3-4637-ABCE-A85A5E2AB8A9_gui" bpmnElement="sid-987C40F8-82D3-4637-ABCE-A85A5E2AB8A9">
        <omgdc:Bounds x="450" y="131" width="28" height="28" />
      </bpmndi:BPMNShape>
    </bpmndi:BPMNPlane>
    <bpmndi:BPMNLabelStyle id="sid-efc2a4e3-a5c6-411d-80d4-64f3a53bc4a4">
      <omgdc:Font name="Arial" size="12" isBold="false" isItalic="false" isUnderline="false" isStrikeThrough="false" />
    </bpmndi:BPMNLabelStyle>
  </bpmndi:BPMNDiagram>
  <bpmndi:BPMNDiagram id="sid-19b0e874-234e-4bee-b83c-068fe088c591">
    <bpmndi:BPMNPlane id="sid-89d69f37-848f-4da3-bb9a-df3a9889286d" bpmnElement="sid-D0CDA908-DDCE-4E82-88D0-F1A919B8AE8B">
      <bpmndi:BPMNEdge id="sid-1A9DABC6-6079-4BF2-9D49-C4DC9569C519_gui" bpmnElement="sid-1A9DABC6-6079-4BF2-9D49-C4DC9569C519">
        <omgdi:waypoint x="510" y="185" />
        <omgdi:waypoint x="555" y="185" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="sid-6B9741CD-D94B-41C7-A2EA-63A4C9445E16_gui" bpmnElement="sid-6B9741CD-D94B-41C7-A2EA-63A4C9445E16">
        <omgdi:waypoint x="365" y="185" />
        <omgdi:waypoint x="410" y="185" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="sid-E71F5783-AFE7-44ED-8A9C-378C95087448_gui" bpmnElement="sid-E71F5783-AFE7-44ED-8A9C-378C95087448">
        <omgdi:waypoint x="220" y="185" />
        <omgdi:waypoint x="265" y="185" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNShape id="sid-A13CFBB9-5471-4439-96FA-B65862CA7B21_gui" bpmnElement="sid-A13CFBB9-5471-4439-96FA-B65862CA7B21">
        <omgdc:Bounds x="190" y="170" width="30" height="30" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="sid-ECEB5194-0BF8-4913-A76F-963DC1FD1D7F_gui" bpmnElement="sid-ECEB5194-0BF8-4913-A76F-963DC1FD1D7F" isExpanded="false">
        <omgdc:Bounds x="265" y="145" width="100" height="80" />
        <bpmndi:BPMNLabel labelStyle="sid-3bb65e49-bd30-45eb-a52f-e94a5e93edbc">
          <omgdc:Bounds x="281.09214210510254" y="177" width="67.88571548461914" height="12" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="sid-5DCDF44C-56B4-47A2-9085-00004E76F3A8_gui" bpmnElement="sid-5DCDF44C-56B4-47A2-9085-00004E76F3A8" isExpanded="false">
        <omgdc:Bounds x="410" y="145" width="100" height="80" />
        <bpmndi:BPMNLabel labelStyle="sid-3bb65e49-bd30-45eb-a52f-e94a5e93edbc">
          <omgdc:Bounds x="424.5492877960205" y="165" width="70.9714241027832" height="36" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="sid-345BB5A6-CE3B-4711-972A-81E47BA4B667_gui" bpmnElement="sid-345BB5A6-CE3B-4711-972A-81E47BA4B667">
        <omgdc:Bounds x="555" y="171" width="28" height="28" />
      </bpmndi:BPMNShape>
    </bpmndi:BPMNPlane>
    <bpmndi:BPMNLabelStyle id="sid-3bb65e49-bd30-45eb-a52f-e94a5e93edbc">
      <omgdc:Font name="Arial" size="12" isBold="false" isItalic="false" isUnderline="false" isStrikeThrough="false" />
    </bpmndi:BPMNLabelStyle>
  </bpmndi:BPMNDiagram>
  <bpmndi:BPMNDiagram id="sid-5e1db01c-46b0-40b0-bb83-67add2799cae">
    <bpmndi:BPMNPlane id="sid-ecd0155e-80cf-40cd-85a9-edf72b8d2a6c" bpmnElement="sid-ECEB5194-0BF8-4913-A76F-963DC1FD1D7F">
      <bpmndi:BPMNEdge id="sid-4E25B80E-EF68-4EE5-BB08-C1F54F1A7C39_gui" bpmnElement="sid-4E25B80E-EF68-4EE5-BB08-C1F54F1A7C39">
        <omgdi:waypoint x="485" y="175" />
        <omgdi:waypoint x="530" y="175" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="sid-3BB6D6CA-BF45-4D15-A1AB-64686C41DB32_gui" bpmnElement="sid-3BB6D6CA-BF45-4D15-A1AB-64686C41DB32">
        <omgdi:waypoint x="340" y="175" />
        <omgdi:waypoint x="385" y="175" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNShape id="sid-F2CCFED7-AD11-4A21-80EE-71D9C96549C8_gui" bpmnElement="sid-F2CCFED7-AD11-4A21-80EE-71D9C96549C8">
        <omgdc:Bounds x="310" y="160" width="30" height="30" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="sid-29B8F97B-1A0D-4280-A62D-5093316C484B_gui" bpmnElement="sid-29B8F97B-1A0D-4280-A62D-5093316C484B">
        <omgdc:Bounds x="385" y="135" width="100" height="80" />
        <bpmndi:BPMNLabel labelStyle="sid-2e7107aa-4946-4b44-a3c0-a137c1775d39">
          <omgdc:Bounds x="401.05714416503906" y="167" width="67.88571166992188" height="12" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="sid-F5AE4FCD-976F-4426-B1FF-7FCAA4CE2393_gui" bpmnElement="sid-F5AE4FCD-976F-4426-B1FF-7FCAA4CE2393">
        <omgdc:Bounds x="530" y="161" width="28" height="28" />
      </bpmndi:BPMNShape>
    </bpmndi:BPMNPlane>
    <bpmndi:BPMNLabelStyle id="sid-2e7107aa-4946-4b44-a3c0-a137c1775d39">
      <omgdc:Font name="Arial" size="12" isBold="false" isItalic="false" isUnderline="false" isStrikeThrough="false" />
    </bpmndi:BPMNLabelStyle>
  </bpmndi:BPMNDiagram>
  <bpmndi:BPMNDiagram id="sid-63fc7b22-cc85-458f-aaab-e165a0e36240">
    <bpmndi:BPMNPlane id="sid-3f3c0ecd-73e0-4a0a-b05c-0b6bd60eeeb1" bpmnElement="sid-5DCDF44C-56B4-47A2-9085-00004E76F3A8">
      <bpmndi:BPMNEdge id="sid-FED62A8F-6C3A-4BB2-8DE9-18FB0B35B50E_gui" bpmnElement="sid-FED62A8F-6C3A-4BB2-8DE9-18FB0B35B50E">
        <omgdi:waypoint x="415" y="265" />
        <omgdi:waypoint x="460" y="265" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="sid-E5404926-738D-4447-87FE-FC6DD1E8BEFC_gui" bpmnElement="sid-E5404926-738D-4447-87FE-FC6DD1E8BEFC">
        <omgdi:waypoint x="270" y="265" />
        <omgdi:waypoint x="315" y="265" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNShape id="sid-2098A7EE-D7D8-405E-AF61-95BA48E891B6_gui" bpmnElement="sid-2098A7EE-D7D8-405E-AF61-95BA48E891B6">
        <omgdc:Bounds x="240" y="250" width="30" height="30" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="sid-E21C867A-7A56-46DD-9A1E-94C02FDB18FB_gui" bpmnElement="sid-E21C867A-7A56-46DD-9A1E-94C02FDB18FB">
        <omgdc:Bounds x="315" y="225" width="100" height="80" />
        <bpmndi:BPMNLabel labelStyle="sid-d93ac8fb-7a66-4ace-93a6-71582a8ab1a1">
          <omgdc:Bounds x="329.51428604125977" y="245" width="70.97142791748047" height="36" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="sid-DAFD7764-8FA5-417B-BB33-55E483687A7D_gui" bpmnElement="sid-DAFD7764-8FA5-417B-BB33-55E483687A7D">
        <omgdc:Bounds x="460" y="251" width="28" height="28" />
      </bpmndi:BPMNShape>
    </bpmndi:BPMNPlane>
    <bpmndi:BPMNLabelStyle id="sid-d93ac8fb-7a66-4ace-93a6-71582a8ab1a1">
      <omgdc:Font name="Arial" size="12" isBold="false" isItalic="false" isUnderline="false" isStrikeThrough="false" />
    </bpmndi:BPMNLabelStyle>
  </bpmndi:BPMNDiagram>
</definitions>
`
/*
2222222222
`<?xml version="1.0" encoding="UTF-8"?>
<definitions xmlns="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:omgdc="http://www.omg.org/spec/DD/20100524/DC" xmlns:omgdi="http://www.omg.org/spec/DD/20100524/DI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" targetNamespace="" xsi:schemaLocation="http://www.omg.org/spec/BPMN/20100524/MODEL http://www.omg.org/spec/BPMN/2.0/20100501/BPMN20.xsd">
  <collaboration id="sid-c0e745ff-361e-4afb-8c8d-2a1fc32b1424">
    <participant id="sid-87F4C1D6-25E1-4A45-9DA7-AD945993D06F" name="Customer" processRef="sid-C3803939-0872-457F-8336-EAE484DC4A04" />
  </collaboration>
  <process id="sid-C3803939-0872-457F-8336-EAE484DC4A04" name="Customer" processType="None" isClosed="false" isExecutable="false">
    <extensionElements />
    <laneSet id="sid-b167d0d7-e761-4636-9200-76b7f0e8e83a">
      <lane id="sid-57E4FE0D-18E4-478D-BC5D-B15164E93254">
        <flowNodeRef>sid-52EB1772-F36E-433E-8F5B-D5DFD26E6F26</flowNodeRef>
        <flowNodeRef>sid-E49425CF-8287-4798-B622-D2A7D78EF00B</flowNodeRef>
        <flowNodeRef>sid-D7F237E8-56D0-4283-A3CE-4F0EFE446138</flowNodeRef>
        <flowNodeRef>sid-E433566C-2289-4BEB-A19C-1697048900D2</flowNodeRef>
        <flowNodeRef>sid-5134932A-1863-4FFA-BB3C-A4B4078B11A9</flowNodeRef>
        <flowNodeRef>SCAN_OK</flowNodeRef>
      </lane>
    </laneSet>
    <task id="sid-52EB1772-F36E-433E-8F5B-D5DFD26E6F26" name="Scan QR code">
      <incoming>sid-4DC479E5-5C20-4948-BCFC-9EC5E2F66D8D</incoming>
      <outgoing>sid-EE8A7BA0-5D66-4F8B-80E3-CC2751B3856A</outgoing>
    </task>
    <task id="sid-E49425CF-8287-4798-B622-D2A7D78EF00B" name="Open product information in mobile  app">
      <incoming>sid-8B820AF5-DC5C-4618-B854-E08B71FB55CB</incoming>
      <outgoing>sid-57EB1F24-BD94-479A-BF1F-57F1EAA19C6C</outgoing>
    </task>
    <startEvent id="sid-D7F237E8-56D0-4283-A3CE-4F0EFE446138" name="Notices&#10;QR code">
      <outgoing>sid-7B791A11-2F2E-4D80-AFB3-91A02CF2B4FD</outgoing>
    </startEvent>
    <endEvent id="sid-E433566C-2289-4BEB-A19C-1697048900D2" name="Is informed">
      <incoming>sid-57EB1F24-BD94-479A-BF1F-57F1EAA19C6C</incoming>
    </endEvent>
    <exclusiveGateway id="sid-5134932A-1863-4FFA-BB3C-A4B4078B11A9">
      <incoming>sid-7B791A11-2F2E-4D80-AFB3-91A02CF2B4FD</incoming>
      <incoming>sid-337A23B9-A923-4CCE-B613-3E247B773CCE</incoming>
      <outgoing>sid-4DC479E5-5C20-4948-BCFC-9EC5E2F66D8D</outgoing>
    </exclusiveGateway>
    <exclusiveGateway id="SCAN_OK" name="Scan successful?&#10;">
      <incoming>sid-EE8A7BA0-5D66-4F8B-80E3-CC2751B3856A</incoming>
      <outgoing>sid-8B820AF5-DC5C-4618-B854-E08B71FB55CB</outgoing>
      <outgoing>sid-337A23B9-A923-4CCE-B613-3E247B773CCE</outgoing>
    </exclusiveGateway>
    <sequenceFlow id="sid-337A23B9-A923-4CCE-B613-3E247B773CCE" name="Yes" sourceRef="SCAN_OK" targetRef="sid-5134932A-1863-4FFA-BB3C-A4B4078B11A9" />
    <sequenceFlow id="sid-4DC479E5-5C20-4948-BCFC-9EC5E2F66D8D" sourceRef="sid-5134932A-1863-4FFA-BB3C-A4B4078B11A9" targetRef="sid-52EB1772-F36E-433E-8F5B-D5DFD26E6F26" />
    <sequenceFlow id="sid-8B820AF5-DC5C-4618-B854-E08B71FB55CB" name="No" sourceRef="SCAN_OK" targetRef="sid-E49425CF-8287-4798-B622-D2A7D78EF00B" />
    <sequenceFlow id="sid-57EB1F24-BD94-479A-BF1F-57F1EAA19C6C" sourceRef="sid-E49425CF-8287-4798-B622-D2A7D78EF00B" targetRef="sid-E433566C-2289-4BEB-A19C-1697048900D2" />
    <sequenceFlow id="sid-EE8A7BA0-5D66-4F8B-80E3-CC2751B3856A" sourceRef="sid-52EB1772-F36E-433E-8F5B-D5DFD26E6F26" targetRef="SCAN_OK" />
    <sequenceFlow id="sid-7B791A11-2F2E-4D80-AFB3-91A02CF2B4FD" sourceRef="sid-D7F237E8-56D0-4283-A3CE-4F0EFE446138" targetRef="sid-5134932A-1863-4FFA-BB3C-A4B4078B11A9" />
  </process>
  <bpmndi:BPMNDiagram id="sid-74620812-92c4-44e5-949c-aa47393d3830">
    <bpmndi:BPMNPlane id="sid-cdcae759-2af7-4a6d-bd02-53f3352a731d" bpmnElement="sid-c0e745ff-361e-4afb-8c8d-2a1fc32b1424">
      <bpmndi:BPMNShape id="sid-87F4C1D6-25E1-4A45-9DA7-AD945993D06F_gui" bpmnElement="sid-87F4C1D6-25E1-4A45-9DA7-AD945993D06F" isHorizontal="true">
        <omgdc:Bounds x="83" y="105" width="933" height="250" />
        <bpmndi:BPMNLabel labelStyle="sid-84cb49fd-2f7c-44fb-8950-83c3fa153d3b">
          <omgdc:Bounds x="47.49999999999999" y="170.42857360839844" width="12.000000000000014" height="59.142852783203125" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="sid-57E4FE0D-18E4-478D-BC5D-B15164E93254_gui" bpmnElement="sid-57E4FE0D-18E4-478D-BC5D-B15164E93254" isHorizontal="true">
        <omgdc:Bounds x="113" y="105" width="903" height="250" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="sid-52EB1772-F36E-433E-8F5B-D5DFD26E6F26_gui" bpmnElement="sid-52EB1772-F36E-433E-8F5B-D5DFD26E6F26">
        <omgdc:Bounds x="393" y="170" width="100" height="80" />
        <bpmndi:BPMNLabel labelStyle="sid-84cb49fd-2f7c-44fb-8950-83c3fa153d3b">
          <omgdc:Bounds x="360.5" y="172" width="84" height="12" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="sid-E49425CF-8287-4798-B622-D2A7D78EF00B_gui" bpmnElement="sid-E49425CF-8287-4798-B622-D2A7D78EF00B">
        <omgdc:Bounds x="728" y="170" width="100" height="80" />
        <bpmndi:BPMNLabel labelStyle="sid-84cb49fd-2f7c-44fb-8950-83c3fa153d3b">
          <omgdc:Bounds x="695.9285736083984" y="162" width="83.14285278320312" height="36" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="sid-EE8A7BA0-5D66-4F8B-80E3-CC2751B3856A_gui" bpmnElement="sid-EE8A7BA0-5D66-4F8B-80E3-CC2751B3856A">
        <omgdi:waypoint x="493" y="210" />
        <omgdi:waypoint x="585" y="210" />
        <bpmndi:BPMNLabel>
          <omgdc:Bounds x="494" y="185" width="90" height="20" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="sid-8B820AF5-DC5C-4618-B854-E08B71FB55CB_gui" bpmnElement="sid-8B820AF5-DC5C-4618-B854-E08B71FB55CB">
        <omgdi:waypoint x="635" y="210" />
        <omgdi:waypoint x="728" y="210" />
        <bpmndi:BPMNLabel labelStyle="sid-e0502d32-f8d1-41cf-9c4a-cbb49fecf581">
          <omgdc:Bounds x="642" y="185" width="16" height="12" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="sid-7B791A11-2F2E-4D80-AFB3-91A02CF2B4FD_gui" bpmnElement="sid-7B791A11-2F2E-4D80-AFB3-91A02CF2B4FD">
        <omgdi:waypoint x="223" y="210" />
        <omgdi:waypoint x="275" y="210" />
        <bpmndi:BPMNLabel>
          <omgdc:Bounds x="204" y="185" width="90" height="20" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="sid-4DC479E5-5C20-4948-BCFC-9EC5E2F66D8D_gui" bpmnElement="sid-4DC479E5-5C20-4948-BCFC-9EC5E2F66D8D">
        <omgdi:waypoint x="325" y="210" />
        <omgdi:waypoint x="393" y="210" />
        <bpmndi:BPMNLabel>
          <omgdc:Bounds x="314" y="185" width="90" height="20" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="sid-57EB1F24-BD94-479A-BF1F-57F1EAA19C6C_gui" bpmnElement="sid-57EB1F24-BD94-479A-BF1F-57F1EAA19C6C">
        <omgdi:waypoint x="828" y="210" />
        <omgdi:waypoint x="901" y="210" />
        <bpmndi:BPMNLabel>
          <omgdc:Bounds x="820" y="185" width="90" height="20" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="sid-337A23B9-A923-4CCE-B613-3E247B773CCE_gui" bpmnElement="sid-337A23B9-A923-4CCE-B613-3E247B773CCE">
        <omgdi:waypoint x="611" y="234" />
        <omgdi:waypoint x="610.5" y="299" />
        <omgdi:waypoint x="300.5" y="299" />
        <omgdi:waypoint x="301" y="234" />
        <bpmndi:BPMNLabel labelStyle="sid-e0502d32-f8d1-41cf-9c4a-cbb49fecf581">
          <omgdc:Bounds x="585" y="236" width="21" height="12" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNShape id="StartEvent_0l6sgn0_di" bpmnElement="sid-D7F237E8-56D0-4283-A3CE-4F0EFE446138">
        <omgdc:Bounds x="187" y="192" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <omgdc:Bounds x="182" y="229" width="46" height="24" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="EndEvent_0xwuvv5_di" bpmnElement="sid-E433566C-2289-4BEB-A19C-1697048900D2">
        <omgdc:Bounds x="901" y="192" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <omgdc:Bounds x="892" y="231" width="56" height="12" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="ExclusiveGateway_1g0eih2_di" bpmnElement="sid-5134932A-1863-4FFA-BB3C-A4B4078B11A9" isMarkerVisible="true">
        <omgdc:Bounds x="275" y="185" width="50" height="50" />
        <bpmndi:BPMNLabel>
          <omgdc:Bounds x="210" y="160" width="90" height="12" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="ExclusiveGateway_0vci1x5_di" bpmnElement="SCAN_OK" isMarkerVisible="true">
        <omgdc:Bounds x="585" y="185" width="50" height="50" />
        <bpmndi:BPMNLabel>
          <omgdc:Bounds x="568" y="157" width="88" height="24" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
    </bpmndi:BPMNPlane>
    <bpmndi:BPMNLabelStyle id="sid-e0502d32-f8d1-41cf-9c4a-cbb49fecf581">
      <omgdc:Font name="Arial" size="11" isBold="false" isItalic="false" isUnderline="false" isStrikeThrough="false" />
    </bpmndi:BPMNLabelStyle>
    <bpmndi:BPMNLabelStyle id="sid-84cb49fd-2f7c-44fb-8950-83c3fa153d3b">
      <omgdc:Font name="Arial" size="12" isBold="false" isItalic="false" isUnderline="false" isStrikeThrough="false" />
    </bpmndi:BPMNLabelStyle>
  </bpmndi:BPMNDiagram>
</definitions>`;
11111111111111111111111111111111111111
/*`<?xml version="1.0" encoding="UTF-8"?>
<bpmn:definitions xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" id="Definitions_1" targetNamespace="http://bpmn.io/schema/bpmn">
<bpmn:process id="Process_1" isExecutable="false">
</bpmn:process>
<bpmndi:BPMNDiagram id="BPMNDiagram_1">
  <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Process_1">
  </bpmndi:BPMNPlane>
</bpmndi:BPMNDiagram>
</bpmn:definitions>`;*/