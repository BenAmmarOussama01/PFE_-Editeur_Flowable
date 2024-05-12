
import * as convert from 'xml-js'
export const DEFAULT_BPMN_XML ='<definitions xmlns="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:flowable="http://flowable.org/bpmn" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:omgdc="http://www.omg.org/spec/DD/20100524/DC" xmlns:omgdi="http://www.omg.org/spec/DD/20100524/DI" typeLanguage="http://www.w3.org/2001/XMLSchema" expressionLanguage="http://www.w3.org/1999/XPath" targetNamespace="http://flowable.org/test" exporter="Flowable Open Source Modeler" exporterVersion="6.8.0"> <collaboration id="Collaboration"> <participant id="sid-B49FCF5A-EA4B-41BE-B7E2-53AD2982C7B6" name="PUBLIC-CLAIMS" processRef="PUBLIC-CLAIMS"/> </collaboration> <process id="PUBLIC-CLAIMS" name="PUBLIC-CLAIMS" isExecutable="true"> <laneSet id="laneSet_PUBLIC-CLAIMS"> <lane id="sid-186E0384-54B4-4C2B-A69A-5A5F457AB5C8"> <flowNodeRef>publicClaimsId</flowNodeRef> <flowNodeRef>sid-1628B204-1FBA-48B0-9AE5-AC414A1380B6</flowNodeRef> <flowNodeRef>sid-9428D4A6-63B6-41F7-9459-B3BADC95A69B</flowNodeRef> <flowNodeRef>sid-EEAFD8EA-D6C0-42D8-B37F-CF9201F7100D</flowNodeRef> <flowNodeRef>sid-D5E4FB1D-2D62-4C11-9FC4-14DD34475CF2</flowNodeRef> <flowNodeRef>sid-8E1D7D17-3926-491E-9970-03E48A03969E</flowNodeRef> <flowNodeRef>sid-14441778-C43B-4200-A15F-EB7953A27CFD</flowNodeRef> </lane> </laneSet> <startEvent id="publicClaimsId" flowable:formKey="PUBLIC_CLAIMS" flowable:formFieldValidation="true"> <extensionElements> <flowable:executionListener event="start" expression="${applicationReferenceListener.onStart(execution)}"/> <flowable:executionListener event="start" expression="${execution.setVariable("requestType", "Public Claim")}"/> <flowable:executionListener event="start" expression="${execution.setVariable("isPrivate", "False")}"/> </extensionElements> </startEvent> <endEvent id="sid-1628B204-1FBA-48B0-9AE5-AC414A1380B6"/> <serviceTask id="sid-9428D4A6-63B6-41F7-9459-B3BADC95A69B" name="Send Mail to Client" flowable:delegateExpression="${sendMailClaims}"/> <userTask id="sid-EEAFD8EA-D6C0-42D8-B37F-CF9201F7100D" name="Reviw Public Claims " flowable:formKey="PUBLIC_CLAIMS" flowable:formFieldValidation="true"/> <sequenceFlow id="sid-D5E4FB1D-2D62-4C11-9FC4-14DD34475CF2" sourceRef="sid-EEAFD8EA-D6C0-42D8-B37F-CF9201F7100D" targetRef="sid-9428D4A6-63B6-41F7-9459-B3BADC95A69B"/> <sequenceFlow id="sid-8E1D7D17-3926-491E-9970-03E48A03969E" sourceRef="sid-9428D4A6-63B6-41F7-9459-B3BADC95A69B" targetRef="sid-1628B204-1FBA-48B0-9AE5-AC414A1380B6"/> <sequenceFlow id="sid-14441778-C43B-4200-A15F-EB7953A27CFD" sourceRef="publicClaimsId" targetRef="sid-EEAFD8EA-D6C0-42D8-B37F-CF9201F7100D"> <extensionElements> <flowable:executionListener event="start" expression="${saveElasticRecord.execute(execution)}"/> </extensionElements> </sequenceFlow> </process> <bpmndi:BPMNDiagram id="BPMNDiagram_Collaboration"> <bpmndi:BPMNPlane bpmnElement="Collaboration" id="BPMNPlane_Collaboration"> <bpmndi:BPMNShape bpmnElement="sid-B49FCF5A-EA4B-41BE-B7E2-53AD2982C7B6" id="BPMNShape_sid-B49FCF5A-EA4B-41BE-B7E2-53AD2982C7B6"> <omgdc:Bounds height="366.0" width="905.5" x="90.0" y="75.0"/> </bpmndi:BPMNShape> <bpmndi:BPMNShape bpmnElement="sid-186E0384-54B4-4C2B-A69A-5A5F457AB5C8" id="BPMNShape_sid-186E0384-54B4-4C2B-A69A-5A5F457AB5C8"> <omgdc:Bounds height="366.0" width="875.5" x="120.0" y="75.0"/> </bpmndi:BPMNShape> <bpmndi:BPMNShape bpmnElement="publicClaimsId" id="BPMNShape_publicClaimsId"> <omgdc:Bounds height="30.0" width="30.0" x="180.0000029007608" y="234.99998673796713"/> </bpmndi:BPMNShape> <bpmndi:BPMNShape bpmnElement="sid-1628B204-1FBA-48B0-9AE5-AC414A1380B6" id="BPMNShape_sid-1628B204-1FBA-48B0-9AE5-AC414A1380B6"> <omgdc:Bounds height="28.0" width="28.0" x="869.9999740719803" y="235.9999734461328"/> </bpmndi:BPMNShape> <bpmndi:BPMNShape bpmnElement="sid-9428D4A6-63B6-41F7-9459-B3BADC95A69B" id="BPMNShape_sid-9428D4A6-63B6-41F7-9459-B3BADC95A69B"> <omgdc:Bounds height="80.0" width="100.0" x="629.9999624490755" y="209.99998047948003"/> </bpmndi:BPMNShape> <bpmndi:BPMNShape bpmnElement="sid-EEAFD8EA-D6C0-42D8-B37F-CF9201F7100D" id="BPMNShape_sid-EEAFD8EA-D6C0-42D8-B37F-CF9201F7100D"> <omgdc:Bounds height="80.0" width="100.0" x="344.99998971819906" y="209.9999937415125"/> </bpmndi:BPMNShape> <bpmndi:BPMNEdge bpmnElement="sid-14441778-C43B-4200-A15F-EB7953A27CFD" id="BPMNEdge_sid-14441778-C43B-4200-A15F-EB7953A27CFD" flowable:sourceDockerX="15.0" flowable:sourceDockerY="15.0" flowable:targetDockerX="50.0" flowable:targetDockerY="40.0"> <omgdi:waypoint x="209.95000244365428" y="249.99998726148218"/> <omgdi:waypoint x="344.99998936146983" y="249.99999199062603"/> </bpmndi:BPMNEdge> <bpmndi:BPMNEdge bpmnElement="sid-8E1D7D17-3926-491E-9970-03E48A03969E" id="BPMNEdge_sid-8E1D7D17-3926-491E-9970-03E48A03969E" flowable:sourceDockerX="50.0" flowable:sourceDockerY="40.0" flowable:targetDockerX="14.0" flowable:targetDockerY="14.0"> <omgdi:waypoint x="729.9499624490754" y="249.9999787556205"/> <omgdi:waypoint x="869.9999740719803" y="249.99997392708963"/> </bpmndi:BPMNEdge> <bpmndi:BPMNEdge bpmnElement="sid-D5E4FB1D-2D62-4C11-9FC4-14DD34475CF2" id="BPMNEdge_sid-D5E4FB1D-2D62-4C11-9FC4-14DD34475CF2" flowable:sourceDockerX="50.0" flowable:sourceDockerY="40.0" flowable:targetDockerX="50.0" flowable:targetDockerY="40.0"> <omgdi:waypoint x="444.94998971819905" y="249.9999914148399"/> <omgdi:waypoint x="629.9999624326144" y="249.99998280382593"/> </bpmndi:BPMNEdge> </bpmndi:BPMNPlane> </bpmndi:BPMNDiagram> </definitions>'
{/* 
const arrayOfXmlProcess= [`<definitions xmlns="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:flowable="http://flowable.org/bpmn" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:omgdc="http://www.omg.org/spec/DD/20100524/DC" xmlns:omgdi="http://www.omg.org/spec/DD/20100524/DI" typeLanguage="http://www.w3.org/2001/XMLSchema" expressionLanguage="http://www.w3.org/1999/XPath" targetNamespace="http://flowable.org/test" exporter="Flowable Open Source Modeler" exporterVersion="6.8.0">
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
</definitions>`,`<definitions xmlns="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:flowable="http://flowable.org/bpmn" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:omgdc="http://www.omg.org/spec/DD/20100524/DC" xmlns:omgdi="http://www.omg.org/spec/DD/20100524/DI" typeLanguage="http://www.w3.org/2001/XMLSchema" expressionLanguage="http://www.w3.org/1999/XPath" targetNamespace="http://flowable.org/test" exporter="Flowable Open Source Modeler" exporterVersion="6.8.0">
<collaboration id="Collaboration">
<participant id="sid-4C011B7E-A905-4729-BD94-111D4E27F59F" name="publicContactUsCSATicket" processRef="PUBLIC-CONTACT-US"/>
</collaboration>
<process id="PUBLIC-CONTACT-US" name="publicContactUsCSATicket" isExecutable="true">
<laneSet id="laneSet_PUBLIC-CONTACT-US">
<lane id="sid-548DC6DC-14FD-4085-BE83-069DF3626BA5">
<flowNodeRef>startEvent1</flowNodeRef>
<flowNodeRef>sid-195ADED9-C3B5-40ED-AFD4-2CFF0B6741A7</flowNodeRef>
<flowNodeRef>sid-B6706ED5-B562-4792-A9CC-B1CFE427E963</flowNodeRef>
<flowNodeRef>sid-63EBF361-9DE2-46A1-9980-F437C229C2B1</flowNodeRef>
<flowNodeRef>sid-A6F685D9-F0DB-4E8D-8146-434B3F85F6A6</flowNodeRef>
<flowNodeRef>sid-C9CB508E-A48C-4A99-A202-AAAF022E7C66</flowNodeRef>
<flowNodeRef>sid-22F954BB-9DEE-46A5-AED4-D58F6696D96B</flowNodeRef>
<flowNodeRef>sid-E9C38694-3F95-4DD8-9A7E-D06F74BC929D</flowNodeRef>
<flowNodeRef>sid-5C305F23-D36F-4BDB-9317-440416D8023E</flowNodeRef>
</lane>
</laneSet>
<startEvent id="startEvent1" flowable:formKey="PUBLIC_CONTACT_US" flowable:formFieldValidation="true">
<extensionElements>
<flowable:executionListener event="start" />
<flowable:executionListener event="start" />
<flowable:executionListener event="start" />
<flowable:executionListener event="start"/>
<flowable:executionListener event="start"/>
</extensionElements>
</startEvent>
<endEvent id="sid-195ADED9-C3B5-40ED-AFD4-2CFF0B6741A7"/>
<serviceTask id="sid-B6706ED5-B562-4792-A9CC-B1CFE427E963" name="Send Agent Notif" />
<userTask id="sid-63EBF361-9DE2-46A1-9980-F437C229C2B1" name="Agent Response" flowable:formKey="PUBLIC_CONTACT_US" flowable:formFieldValidation="true"/>
<boundaryEvent id="sid-A6F685D9-F0DB-4E8D-8146-434B3F85F6A6" attachedToRef="sid-63EBF361-9DE2-46A1-9980-F437C229C2B1" cancelActivity="true">
<timerEventDefinition>
<timeDuration>PT48H</timeDuration>
</timerEventDefinition>
</boundaryEvent>
<sequenceFlow id="sid-C9CB508E-A48C-4A99-A202-AAAF022E7C66" sourceRef="sid-A6F685D9-F0DB-4E8D-8146-434B3F85F6A6" targetRef="sid-B6706ED5-B562-4792-A9CC-B1CFE427E963"/>
<sequenceFlow id="sid-22F954BB-9DEE-46A5-AED4-D58F6696D96B" sourceRef="sid-B6706ED5-B562-4792-A9CC-B1CFE427E963" targetRef="sid-63EBF361-9DE2-46A1-9980-F437C229C2B1"/>
<sequenceFlow id="sid-E9C38694-3F95-4DD8-9A7E-D06F74BC929D" sourceRef="startEvent1" targetRef="sid-63EBF361-9DE2-46A1-9980-F437C229C2B1">
<extensionElements>
<flowable:executionListener event="start" />
</extensionElements>
</sequenceFlow>
<sequenceFlow id="sid-5C305F23-D36F-4BDB-9317-440416D8023E" sourceRef="sid-63EBF361-9DE2-46A1-9980-F437C229C2B1" targetRef="sid-195ADED9-C3B5-40ED-AFD4-2CFF0B6741A7">
<extensionElements>
<flowable:executionListener event="start" />
</extensionElements>
</sequenceFlow>
</process>
<bpmndi:BPMNDiagram id="BPMNDiagram_Collaboration">
<bpmndi:BPMNPlane bpmnElement="Collaboration" id="BPMNPlane_Collaboration">
<bpmndi:BPMNShape bpmnElement="sid-4C011B7E-A905-4729-BD94-111D4E27F59F" id="BPMNShape_sid-4C011B7E-A905-4729-BD94-111D4E27F59F">
<omgdc:Bounds height="323.0000021576884" width="691.0000012289596" x="44.999998042981204" y="60.0000013775298"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-548DC6DC-14FD-4085-BE83-069DF3626BA5" id="BPMNShape_sid-548DC6DC-14FD-4085-BE83-069DF3626BA5">
<omgdc:Bounds height="323.0000021576884" width="661.0000012289596" x="74.9999980429812" y="60.0000013775298"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="startEvent1" id="BPMNShape_startEvent1">
<omgdc:Bounds height="30.0" width="30.0" x="120.00000551011927" y="265.0000115942093"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-195ADED9-C3B5-40ED-AFD4-2CFF0B6741A7" id="BPMNShape_sid-195ADED9-C3B5-40ED-AFD4-2CFF0B6741A7">
<omgdc:Bounds height="28.0" width="28.000000000000014" x="495.0000113646209" y="266.0000116171681"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-B6706ED5-B562-4792-A9CC-B1CFE427E963" id="BPMNShape_sid-B6706ED5-B562-4792-A9CC-B1CFE427E963">
<omgdc:Bounds height="80.0" width="99.9999999999999" x="241.00001742045276" y="90.00000413258947"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-63EBF361-9DE2-46A1-9980-F437C229C2B1" id="BPMNShape_sid-63EBF361-9DE2-46A1-9980-F437C229C2B1">
<omgdc:Bounds height="79.99999999999997" width="100.00000000000001" x="239.99999642372137" y="239.99999642372137"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-A6F685D9-F0DB-4E8D-8146-434B3F85F6A6" id="BPMNShape_sid-A6F685D9-F0DB-4E8D-8146-434B3F85F6A6">
<omgdc:Bounds height="31.0" width="31.000000000000014" x="224.16006820654172" y="230.72219150545277"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNEdge bpmnElement="sid-22F954BB-9DEE-46A5-AED4-D58F6696D96B" id="BPMNEdge_sid-22F954BB-9DEE-46A5-AED4-D58F6696D96B" flowable:sourceDockerX="74.99999999999994" flowable:sourceDockerY="79.00000000000001" flowable:targetDockerX="75.0" flowable:targetDockerY="0.9999999999999997">
<omgdi:waypoint x="316.0000174204527" y="169.95000413258947"/>
<omgdi:waypoint x="316.0000174204527" y="205.00000027815543"/>
<omgdi:waypoint x="315.0263858695161" y="239.99999642372137"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-E9C38694-3F95-4DD8-9A7E-D06F74BC929D" id="BPMNEdge_sid-E9C38694-3F95-4DD8-9A7E-D06F74BC929D" flowable:sourceDockerX="15.0" flowable:sourceDockerY="15.0" flowable:targetDockerX="1.0" flowable:targetDockerY="40.0">
<omgdi:waypoint x="149.95000388500435" y="280.0000094474419"/>
<omgdi:waypoint x="239.9999961722145" y="279.9999965596833"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-5C305F23-D36F-4BDB-9317-440416D8023E" id="BPMNEdge_sid-5C305F23-D36F-4BDB-9317-440416D8023E" flowable:sourceDockerX="99.0" flowable:sourceDockerY="39.99999999999996" flowable:targetDockerX="14.0" flowable:targetDockerY="13.999999999999998">
<omgdi:waypoint x="339.9499964237214" y="279.9999965086259"/>
<omgdi:waypoint x="495.0000111144176" y="280.0000103659432"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-C9CB508E-A48C-4A99-A202-AAAF022E7C66" id="BPMNEdge_sid-C9CB508E-A48C-4A99-A202-AAAF022E7C66" flowable:sourceDockerX="16.0" flowable:sourceDockerY="16.0" flowable:targetDockerX="49.99999999999996" flowable:targetDockerY="40.0">
<omgdi:waypoint x="246.53096799477444" y="232.04954840221103"/>
<omgdi:waypoint x="273.5774689373592" y="169.95000413258947"/>
</bpmndi:BPMNEdge>
</bpmndi:BPMNPlane>
</bpmndi:BPMNDiagram>
</definitions>`,`<definitions xmlns="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:flowable="http://flowable.org/bpmn" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:omgdc="http://www.omg.org/spec/DD/20100524/DC" xmlns:omgdi="http://www.omg.org/spec/DD/20100524/DI" typeLanguage="http://www.w3.org/2001/XMLSchema" expressionLanguage="http://www.w3.org/1999/XPath" targetNamespace="http://flowable.org/test" exporter="Flowable Open Source Modeler" exporterVersion="6.8.0">
<collaboration id="Collaboration">
<participant id="sid-B49FCF5A-EA4B-41BE-B7E2-53AD2982C7B6" name="PUBLIC-CLAIMS" processRef="PUBLIC-CLAIMS"/>
</collaboration>
<process id="PUBLIC-CLAIMS" name="PUBLIC-CLAIMS" isExecutable="true">
<laneSet id="laneSet_PUBLIC-CLAIMS">
<lane id="sid-186E0384-54B4-4C2B-A69A-5A5F457AB5C8">
<flowNodeRef>publicClaimsId</flowNodeRef>
<flowNodeRef>sid-1628B204-1FBA-48B0-9AE5-AC414A1380B6</flowNodeRef>
<flowNodeRef>sid-9428D4A6-63B6-41F7-9459-B3BADC95A69B</flowNodeRef>
<flowNodeRef>sid-EEAFD8EA-D6C0-42D8-B37F-CF9201F7100D</flowNodeRef>
<flowNodeRef>sid-D5E4FB1D-2D62-4C11-9FC4-14DD34475CF2</flowNodeRef>
<flowNodeRef>sid-8E1D7D17-3926-491E-9970-03E48A03969E</flowNodeRef>
<flowNodeRef>sid-14441778-C43B-4200-A15F-EB7953A27CFD</flowNodeRef>
</lane>
</laneSet>
<startEvent id="publicClaimsId" flowable:formKey="PUBLIC_CLAIMS" flowable:formFieldValidation="true">
<extensionElements>
<flowable:executionListener event="start" />
<flowable:executionListener event="start" />
<flowable:executionListener event="start" />
</extensionElements>
</startEvent>
<endEvent id="sid-1628B204-1FBA-48B0-9AE5-AC414A1380B6"/>
<serviceTask id="sid-9428D4A6-63B6-41F7-9459-B3BADC95A69B" name="Send Mail to Client" />
<userTask id="sid-EEAFD8EA-D6C0-42D8-B37F-CF9201F7100D" name="Reviw Public Claims " flowable:formKey="PUBLIC_CLAIMS" flowable:formFieldValidation="true"/>
<sequenceFlow id="sid-D5E4FB1D-2D62-4C11-9FC4-14DD34475CF2" sourceRef="sid-EEAFD8EA-D6C0-42D8-B37F-CF9201F7100D" targetRef="sid-9428D4A6-63B6-41F7-9459-B3BADC95A69B"/>
<sequenceFlow id="sid-8E1D7D17-3926-491E-9970-03E48A03969E" sourceRef="sid-9428D4A6-63B6-41F7-9459-B3BADC95A69B" targetRef="sid-1628B204-1FBA-48B0-9AE5-AC414A1380B6"/>
<sequenceFlow id="sid-14441778-C43B-4200-A15F-EB7953A27CFD" sourceRef="publicClaimsId" targetRef="sid-EEAFD8EA-D6C0-42D8-B37F-CF9201F7100D">
<extensionElements>
<flowable:executionListener event="start" />
</extensionElements>
</sequenceFlow>
</process>
<bpmndi:BPMNDiagram id="BPMNDiagram_Collaboration">
<bpmndi:BPMNPlane bpmnElement="Collaboration" id="BPMNPlane_Collaboration">
<bpmndi:BPMNShape bpmnElement="sid-B49FCF5A-EA4B-41BE-B7E2-53AD2982C7B6" id="BPMNShape_sid-B49FCF5A-EA4B-41BE-B7E2-53AD2982C7B6">
<omgdc:Bounds height="366.0" width="905.5" x="90.0" y="75.0"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-186E0384-54B4-4C2B-A69A-5A5F457AB5C8" id="BPMNShape_sid-186E0384-54B4-4C2B-A69A-5A5F457AB5C8">
<omgdc:Bounds height="366.0" width="875.5" x="120.0" y="75.0"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="publicClaimsId" id="BPMNShape_publicClaimsId">
<omgdc:Bounds height="30.0" width="30.0" x="180.0000029007608" y="234.99998673796713"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-1628B204-1FBA-48B0-9AE5-AC414A1380B6" id="BPMNShape_sid-1628B204-1FBA-48B0-9AE5-AC414A1380B6">
<omgdc:Bounds height="28.0" width="28.0" x="869.9999740719803" y="235.9999734461328"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-9428D4A6-63B6-41F7-9459-B3BADC95A69B" id="BPMNShape_sid-9428D4A6-63B6-41F7-9459-B3BADC95A69B">
<omgdc:Bounds height="80.0" width="100.0" x="629.9999624490755" y="209.99998047948003"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-EEAFD8EA-D6C0-42D8-B37F-CF9201F7100D" id="BPMNShape_sid-EEAFD8EA-D6C0-42D8-B37F-CF9201F7100D">
<omgdc:Bounds height="80.0" width="100.0" x="344.99998971819906" y="209.9999937415125"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNEdge bpmnElement="sid-14441778-C43B-4200-A15F-EB7953A27CFD" id="BPMNEdge_sid-14441778-C43B-4200-A15F-EB7953A27CFD" flowable:sourceDockerX="15.0" flowable:sourceDockerY="15.0" flowable:targetDockerX="50.0" flowable:targetDockerY="40.0">
<omgdi:waypoint x="209.95000244365428" y="249.99998726148218"/>
<omgdi:waypoint x="344.99998936146983" y="249.99999199062603"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-8E1D7D17-3926-491E-9970-03E48A03969E" id="BPMNEdge_sid-8E1D7D17-3926-491E-9970-03E48A03969E" flowable:sourceDockerX="50.0" flowable:sourceDockerY="40.0" flowable:targetDockerX="14.0" flowable:targetDockerY="14.0">
<omgdi:waypoint x="729.9499624490754" y="249.9999787556205"/>
<omgdi:waypoint x="869.9999740719803" y="249.99997392708963"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-D5E4FB1D-2D62-4C11-9FC4-14DD34475CF2" id="BPMNEdge_sid-D5E4FB1D-2D62-4C11-9FC4-14DD34475CF2" flowable:sourceDockerX="50.0" flowable:sourceDockerY="40.0" flowable:targetDockerX="50.0" flowable:targetDockerY="40.0">
<omgdi:waypoint x="444.94998971819905" y="249.9999914148399"/>
<omgdi:waypoint x="629.9999624326144" y="249.99998280382593"/>
</bpmndi:BPMNEdge>
</bpmndi:BPMNPlane>
</bpmndi:BPMNDiagram>
</definitions>`,`<definitions xmlns="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:flowable="http://flowable.org/bpmn" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:omgdc="http://www.omg.org/spec/DD/20100524/DC" xmlns:omgdi="http://www.omg.org/spec/DD/20100524/DI" typeLanguage="http://www.w3.org/2001/XMLSchema" expressionLanguage="http://www.w3.org/1999/XPath" targetNamespace="http://flowable.org/test" exporter="Flowable Open Source Modeler" exporterVersion="6.8.0">
<collaboration id="Collaboration">
<participant id="sid-0A4A9CD0-904F-4034-8D7A-3017D8666B48" name="registrationRequest" processRef="REGISTRATION-PROCESS"/>
</collaboration>
<process id="REGISTRATION-PROCESS" name="registrationRequest" isExecutable="true">
<extensionElements>
<flowable:executionListener event="start"/>
</extensionElements>
<laneSet id="laneSet_REGISTRATION-PROCESS">
<lane id="sid-08076A91-2959-4A34-BD99-FF3AA5C2D700">
<flowNodeRef>sid-BCB44C58-AD24-4C32-8B63-F15258B5E682</flowNodeRef>
<flowNodeRef>sid-89935027-60BE-4FDD-9A01-47536C80EF7D</flowNodeRef>
<flowNodeRef>sid-A343ED8D-BC6E-43A1-8D2F-B52600B55D01</flowNodeRef>
<flowNodeRef>sid-03E6468B-462C-4687-8116-38EFE213EDCF</flowNodeRef>
<flowNodeRef>sid-ED1D7DF9-AB18-437B-A4F5-EB8C4786E6B4</flowNodeRef>
<flowNodeRef>sid-7EA087C6-2AC8-40CD-A087-5EC898A3A43A</flowNodeRef>
<flowNodeRef>sid-0887B87E-338A-4426-82A3-EC4DC2EFF389</flowNodeRef>
<flowNodeRef>sid-3B983132-8E86-4515-8849-4FD5DF12153B</flowNodeRef>
<flowNodeRef>sid-C6E55C0F-26E9-40DD-8604-A22B9E9FB953</flowNodeRef>
</lane>
</laneSet>
<startEvent id="sid-BCB44C58-AD24-4C32-8B63-F15258B5E682" flowable:formKey="REGISTRATION_FORM" flowable:formFieldValidation="true">
<extensionElements>
<flowable:executionListener event="start" />
</extensionElements>
</startEvent>
<userTask id="sid-89935027-60BE-4FDD-9A01-47536C80EF7D" name="Handle REQUEST" flowable:formKey="REGISTRATION_FORM" flowable:formFieldValidation="true"/>
<endEvent id="sid-A343ED8D-BC6E-43A1-8D2F-B52600B55D01"/>
<boundaryEvent id="sid-03E6468B-462C-4687-8116-38EFE213EDCF" attachedToRef="sid-89935027-60BE-4FDD-9A01-47536C80EF7D" cancelActivity="true">
<timerEventDefinition>
<timeDuration>P1M</timeDuration>
</timerEventDefinition>
</boundaryEvent>
<serviceTask id="sid-ED1D7DF9-AB18-437B-A4F5-EB8C4786E6B4" name="Block user" />
<sequenceFlow id="sid-7EA087C6-2AC8-40CD-A087-5EC898A3A43A" sourceRef="sid-89935027-60BE-4FDD-9A01-47536C80EF7D" targetRef="sid-A343ED8D-BC6E-43A1-8D2F-B52600B55D01"/>
<sequenceFlow id="sid-0887B87E-338A-4426-82A3-EC4DC2EFF389" sourceRef="sid-BCB44C58-AD24-4C32-8B63-F15258B5E682" targetRef="sid-89935027-60BE-4FDD-9A01-47536C80EF7D"/>
<sequenceFlow id="sid-3B983132-8E86-4515-8849-4FD5DF12153B" sourceRef="sid-ED1D7DF9-AB18-437B-A4F5-EB8C4786E6B4" targetRef="sid-89935027-60BE-4FDD-9A01-47536C80EF7D"/>
<sequenceFlow id="sid-C6E55C0F-26E9-40DD-8604-A22B9E9FB953" sourceRef="sid-03E6468B-462C-4687-8116-38EFE213EDCF" targetRef="sid-ED1D7DF9-AB18-437B-A4F5-EB8C4786E6B4"/>
</process>
<bpmndi:BPMNDiagram id="BPMNDiagram_Collaboration">
<bpmndi:BPMNPlane bpmnElement="Collaboration" id="BPMNPlane_Collaboration">
<bpmndi:BPMNShape bpmnElement="sid-0A4A9CD0-904F-4034-8D7A-3017D8666B48" id="BPMNShape_sid-0A4A9CD0-904F-4034-8D7A-3017D8666B48">
<omgdc:Bounds height="326.9999995827675" width="627.000000834465" x="240.0" y="135.0"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-08076A91-2959-4A34-BD99-FF3AA5C2D700" id="BPMNShape_sid-08076A91-2959-4A34-BD99-FF3AA5C2D700">
<omgdc:Bounds height="326.9999995827675" width="597.000000834465" x="270.0" y="135.0"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-BCB44C58-AD24-4C32-8B63-F15258B5E682" id="BPMNShape_sid-BCB44C58-AD24-4C32-8B63-F15258B5E682">
<omgdc:Bounds height="30.0" width="30.0" x="315.50000200183314" y="330.4999911155952"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-89935027-60BE-4FDD-9A01-47536C80EF7D" id="BPMNShape_sid-89935027-60BE-4FDD-9A01-47536C80EF7D">
<omgdc:Bounds height="75.0" width="113.0" x="431.99999426470765" y="307.9999911155952"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-A343ED8D-BC6E-43A1-8D2F-B52600B55D01" id="BPMNShape_sid-A343ED8D-BC6E-43A1-8D2F-B52600B55D01">
<omgdc:Bounds height="28.0" width="28.0" x="641.9999942647077" y="331.4999911155952"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-03E6468B-462C-4687-8116-38EFE213EDCF" id="BPMNShape_sid-03E6468B-462C-4687-8116-38EFE213EDCF">
<omgdc:Bounds height="31.0" width="31.0" x="529.5219697541017" y="299.72040966244566"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-ED1D7DF9-AB18-437B-A4F5-EB8C4786E6B4" id="BPMNShape_sid-ED1D7DF9-AB18-437B-A4F5-EB8C4786E6B4">
<omgdc:Bounds height="80.0" width="100.0" x="438.49999426470765" y="164.0"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNEdge bpmnElement="sid-3B983132-8E86-4515-8849-4FD5DF12153B" id="BPMNEdge_sid-3B983132-8E86-4515-8849-4FD5DF12153B" flowable:sourceDockerX="50.0" flowable:sourceDockerY="40.0" flowable:targetDockerX="56.5" flowable:targetDockerY="37.5">
<omgdi:waypoint x="488.49999426470765" y="243.95000000000002"/>
<omgdi:waypoint x="488.49999426470765" y="307.9999911155952"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-C6E55C0F-26E9-40DD-8604-A22B9E9FB953" id="BPMNEdge_sid-C6E55C0F-26E9-40DD-8604-A22B9E9FB953" flowable:sourceDockerX="16.0" flowable:sourceDockerY="16.0" flowable:targetDockerX="50.0" flowable:targetDockerY="40.0">
<omgdi:waypoint x="538.2466969682445" y="301.46505473114826"/>
<omgdi:waypoint x="508.8904307810449" y="243.95000000000002"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-7EA087C6-2AC8-40CD-A087-5EC898A3A43A" id="BPMNEdge_sid-7EA087C6-2AC8-40CD-A087-5EC898A3A43A" flowable:sourceDockerX="56.5" flowable:sourceDockerY="37.5" flowable:targetDockerX="14.0" flowable:targetDockerY="14.0">
<omgdi:waypoint x="544.9499942646112" y="345.4999911155952"/>
<omgdi:waypoint x="641.9999942647077" y="345.4999911155952"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-0887B87E-338A-4426-82A3-EC4DC2EFF389" id="BPMNEdge_sid-0887B87E-338A-4426-82A3-EC4DC2EFF389" flowable:sourceDockerX="15.000000000000007" flowable:sourceDockerY="15.0" flowable:targetDockerX="1.13" flowable:targetDockerY="37.5">
<omgdi:waypoint x="345.4500002672425" y="345.4999911155952"/>
<omgdi:waypoint x="431.99999426470765" y="345.4999911155952"/>
</bpmndi:BPMNEdge>
</bpmndi:BPMNPlane>
</bpmndi:BPMNDiagram>
</definitions>`,`<definitions xmlns="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:flowable="http://flowable.org/bpmn" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:omgdc="http://www.omg.org/spec/DD/20100524/DC" xmlns:omgdi="http://www.omg.org/spec/DD/20100524/DI" typeLanguage="http://www.w3.org/2001/XMLSchema" expressionLanguage="http://www.w3.org/1999/XPath" targetNamespace="http://flowable.org/test" exporter="Flowable Open Source Modeler" exporterVersion="6.8.0">
<collaboration id="Collaboration">
<participant id="sid-EDC880BA-8C80-4DF4-8A43-AA0B2C00169C" name="DIGITAL-ONBOARDING" processRef="DIGITAL-ONBOARDING"/>
</collaboration>
<process id="DIGITAL-ONBOARDING" name="DIGITAL-ONBOARDING" isExecutable="true">
<laneSet id="laneSet_DIGITAL-ONBOARDING">
<lane id="sid-751278AF-885C-4738-BB0F-1C9422861C3F" name="BANKERISE">
<flowNodeRef>startEvent1</flowNodeRef>
<flowNodeRef>sid-DDAF1D6C-111B-4B45-9A9C-C04778614711</flowNodeRef>
<flowNodeRef>sid-B204F5AB-D4E9-4526-AF47-3A4473674590</flowNodeRef>
<flowNodeRef>sid-0926FD99-23E8-4134-AFBA-4E2866AF8F8D</flowNodeRef>
<flowNodeRef>sid-6ADC54D9-4599-4721-A8BC-93333E6E5699</flowNodeRef>
<flowNodeRef>sid-3C0FB75D-FB6D-402D-B5AF-8CD8F9534E5A</flowNodeRef>
<flowNodeRef>sid-5E9E76B2-1F15-4598-88F3-DD613C8B5049</flowNodeRef>
<flowNodeRef>sid-08F14AE2-39DC-4218-BEA9-621EE993F8E2</flowNodeRef>
<flowNodeRef>sid-E55091A7-2690-4802-8E8F-E7FB168964B4</flowNodeRef>
<flowNodeRef>sid-AE48F376-6414-43C2-AA28-7A3B163010E0</flowNodeRef>
<flowNodeRef>sid-E5887151-EB14-4987-9C75-3AE141C0D229</flowNodeRef>
<flowNodeRef>sid-B5B99FB1-F2B3-453F-8197-2860F459E903</flowNodeRef>
<flowNodeRef>sid-E8ABA4E6-D545-4428-BAB5-D028B7690D88</flowNodeRef>
<flowNodeRef>sid-051E6AD9-A47E-4F30-B05E-7CDB62A592BC</flowNodeRef>
<flowNodeRef>sid-39BF20E9-9007-4D69-B60A-5866BD861025</flowNodeRef>
<flowNodeRef>sid-F6167D38-92D2-4D78-B612-A12599978A8A</flowNodeRef>
<flowNodeRef>sid-09B801D5-7AFA-4935-8CBA-F970B088B71E</flowNodeRef>
<flowNodeRef>sid-35A61403-E0EE-47E6-820C-FE1AEA965EE2</flowNodeRef>
<flowNodeRef>sid-BD4C98D6-19DF-4711-AD2F-7608E14C02E9</flowNodeRef>
<flowNodeRef>sid-3A0BF80C-0E8D-440A-A328-F355E7ED2C50</flowNodeRef>
<flowNodeRef>sid-3703471B-859B-46E4-A743-7532C91683E9</flowNodeRef>
<flowNodeRef>sid-8BCDA330-C501-4011-9115-B9CA7A3DB45E</flowNodeRef>
<flowNodeRef>sid-FE8069BC-A3D6-4765-BD99-F9203E3B9760</flowNodeRef>
<flowNodeRef>sid-ACEFA2C7-344C-4F8F-AF7F-AEA1F9CAA3B3</flowNodeRef>
<flowNodeRef>sid-02E6E5C2-DA06-4B40-9F31-EAFEF38AC521</flowNodeRef>
<flowNodeRef>sid-398BC13C-C945-48A7-8CCA-4CE7455F6721</flowNodeRef>
</lane>
<lane id="sid-0C3960D3-8BE5-49F7-99B8-5F5BF4BAA75B" name="BNA">
<flowNodeRef>sid-42A1E09C-3442-4C2A-BE7B-4075F880FA14</flowNodeRef>
<flowNodeRef>sid-E1B58A5B-95B3-4046-8CF3-5211B6DBF9C2</flowNodeRef>
<flowNodeRef>sid-042445D9-20C3-4537-9269-0E4A6AFEDD62</flowNodeRef>
<flowNodeRef>sid-F7CB0285-5074-47D1-BFE7-54E7B9ABE7E3</flowNodeRef>
<flowNodeRef>sid-27E9E4F2-C021-4F73-94DF-17D689A0BF6E</flowNodeRef>
<flowNodeRef>sid-39E754F3-ACAF-4D4C-9596-8A5B5EB9F0FC</flowNodeRef>
<flowNodeRef>sid-3054F143-E42D-4B6B-8C65-6533DFA2B72A</flowNodeRef>
<flowNodeRef>sid-C2186BA5-A6FB-44CA-922D-2DEF33649123</flowNodeRef>
<flowNodeRef>sid-624760E9-8D58-4C36-B8E5-140C29F4FCD4</flowNodeRef>
<flowNodeRef>sid-0627C903-077E-424E-B299-322812D30737</flowNodeRef>
<flowNodeRef>sid-F463A6AF-2EB3-4880-B1CC-691EF3D957FE</flowNodeRef>
<flowNodeRef>sid-9A8BFF0D-68DA-4E3F-9184-7D426AD21696</flowNodeRef>
<flowNodeRef>sid-DE9FD691-A78E-4A47-B5A5-200CA2350280</flowNodeRef>
<flowNodeRef>sid-15E3ECFC-B1AF-4F8F-86FD-5CCE3431565D</flowNodeRef>
<flowNodeRef>sid-5731849D-41B3-4B15-A63D-1F4EB3A6BC61</flowNodeRef>
<flowNodeRef>sid-BE809FC8-CE78-4552-BAE4-5A4A35D530A5</flowNodeRef>
<flowNodeRef>sid-90CA4DE4-BE39-4A80-BD72-7BC2E9DABC67</flowNodeRef>
<flowNodeRef>sid-9002FA92-B5D3-4ED7-8017-38AF6745E3F7</flowNodeRef>
</lane>
</laneSet>
<startEvent id="startEvent1" name="First Form" flowable:formKey="ON_BOARDING_PROCESS" flowable:formFieldValidation="true">
<extensionElements>
<flowable:executionListener event="start"/>
<flowable:executionListener event="start" />
<flowable:executionListener event="start" />
<flowable:executionListener event="start" />
<flowable:executionListener event="start"/>
</extensionElements>
</startEvent>
<userTask id="sid-0926FD99-23E8-4134-AFBA-4E2866AF8F8D" name="OnBoarding Upload Form" flowable:assignee="$INITIATOR" flowable:formKey="ON_BOARDING_PROCESS" flowable:formFieldValidation="true">
<extensionElements>
<flowable:executionListener event="start"/>
<flowable:taskListener event="create"/>
<modeler:activiti-idm-initiator xmlns:modeler="http://flowable.org/modeler">
<![CDATA[ true ]]>
</modeler:activiti-idm-initiator>
</extensionElements>
</userTask>
<serviceTask id="sid-E55091A7-2690-4802-8E8F-E7FB168964B4" name="Create digital Account"/>
<endEvent id="sid-AE48F376-6414-43C2-AA28-7A3B163010E0"/>
<serviceTask id="sid-39BF20E9-9007-4D69-B60A-5866BD861025" name="Mail Utilisateur + numero de referance" />
<serviceTask id="sid-F6167D38-92D2-4D78-B612-A12599978A8A" name="Close digital Account" />
<serviceTask id="sid-09B801D5-7AFA-4935-8CBA-F970B088B71E" name="Activate Account" />
<userTask id="sid-42A1E09C-3442-4C2A-BE7B-4075F880FA14" name="Smile API PreValidation" flowable:formKey="OnBoardingUploadFiles" flowable:formFieldValidation="true">
<extensionElements>
<flowable:taskListener event="create" />
</extensionElements>
</userTask>
<userTask id="sid-042445D9-20C3-4537-9269-0E4A6AFEDD62" name="Smile API Validation" flowable:formKey="OnBoardingUploadFiles" flowable:formFieldValidation="true"/>
<boundaryEvent id="sid-39E754F3-ACAF-4D4C-9596-8A5B5EB9F0FC" attachedToRef="sid-042445D9-20C3-4537-9269-0E4A6AFEDD62" cancelActivity="true">
<timerEventDefinition>
<timeDuration>P1Y</timeDuration>
</timerEventDefinition>
</boundaryEvent>
<serviceTask id="sid-3054F143-E42D-4B6B-8C65-6533DFA2B72A" name="Assign pack and role" />
<exclusiveGateway id="sid-C2186BA5-A6FB-44CA-922D-2DEF33649123" default="sid-9A8BFF0D-68DA-4E3F-9184-7D426AD21696"/>
<exclusiveGateway id="sid-624760E9-8D58-4C36-B8E5-140C29F4FCD4"/>
<sequenceFlow id="sid-3703471B-859B-46E4-A743-7532C91683E9" sourceRef="sid-0926FD99-23E8-4134-AFBA-4E2866AF8F8D" targetRef="sid-E55091A7-2690-4802-8E8F-E7FB168964B4"/>
<sequenceFlow id="sid-0627C903-077E-424E-B299-322812D30737" sourceRef="sid-39E754F3-ACAF-4D4C-9596-8A5B5EB9F0FC" targetRef="sid-F6167D38-92D2-4D78-B612-A12599978A8A"/>
<sequenceFlow id="sid-F463A6AF-2EB3-4880-B1CC-691EF3D957FE" sourceRef="sid-3054F143-E42D-4B6B-8C65-6533DFA2B72A" targetRef="sid-AE48F376-6414-43C2-AA28-7A3B163010E0"/>
<sequenceFlow id="sid-9A8BFF0D-68DA-4E3F-9184-7D426AD21696" sourceRef="sid-C2186BA5-A6FB-44CA-922D-2DEF33649123" targetRef="sid-3054F143-E42D-4B6B-8C65-6533DFA2B72A"/>
<sequenceFlow id="sid-DE9FD691-A78E-4A47-B5A5-200CA2350280" sourceRef="sid-42A1E09C-3442-4C2A-BE7B-4075F880FA14" targetRef="sid-624760E9-8D58-4C36-B8E5-140C29F4FCD4"/>
<sequenceFlow id="sid-8BCDA330-C501-4011-9115-B9CA7A3DB45E" sourceRef="startEvent1" targetRef="sid-0926FD99-23E8-4134-AFBA-4E2866AF8F8D"/>
<sequenceFlow id="sid-15E3ECFC-B1AF-4F8F-86FD-5CCE3431565D" sourceRef="sid-042445D9-20C3-4537-9269-0E4A6AFEDD62" targetRef="sid-C2186BA5-A6FB-44CA-922D-2DEF33649123"/>
<sequenceFlow id="sid-FE8069BC-A3D6-4765-BD99-F9203E3B9760" sourceRef="sid-F6167D38-92D2-4D78-B612-A12599978A8A" targetRef="sid-AE48F376-6414-43C2-AA28-7A3B163010E0"/>
<sequenceFlow id="sid-ACEFA2C7-344C-4F8F-AF7F-AEA1F9CAA3B3" sourceRef="sid-09B801D5-7AFA-4935-8CBA-F970B088B71E" targetRef="sid-042445D9-20C3-4537-9269-0E4A6AFEDD62"/>
<sequenceFlow id="sid-02E6E5C2-DA06-4B40-9F31-EAFEF38AC521" sourceRef="sid-E55091A7-2690-4802-8E8F-E7FB168964B4" targetRef="sid-39BF20E9-9007-4D69-B60A-5866BD861025"/>
<sequenceFlow id="sid-398BC13C-C945-48A7-8CCA-4CE7455F6721" sourceRef="sid-39BF20E9-9007-4D69-B60A-5866BD861025" targetRef="sid-42A1E09C-3442-4C2A-BE7B-4075F880FA14"/>
<sequenceFlow id="sid-5731849D-41B3-4B15-A63D-1F4EB3A6BC61" name="Pre validation " sourceRef="sid-624760E9-8D58-4C36-B8E5-140C29F4FCD4" targetRef="sid-09B801D5-7AFA-4935-8CBA-F970B088B71E">
<conditionExpression xsi:type="tFormalExpression">
</conditionExpression>
</sequenceFlow>
<sequenceFlow id="sid-BE809FC8-CE78-4552-BAE4-5A4A35D530A5" name="Refused" sourceRef="sid-624760E9-8D58-4C36-B8E5-140C29F4FCD4" targetRef="sid-F6167D38-92D2-4D78-B612-A12599978A8A">
<conditionExpression xsi:type="tFormalExpression">

</conditionExpression>
</sequenceFlow>
<sequenceFlow id="sid-90CA4DE4-BE39-4A80-BD72-7BC2E9DABC67" name="Validated" sourceRef="sid-C2186BA5-A6FB-44CA-922D-2DEF33649123" targetRef="sid-3054F143-E42D-4B6B-8C65-6533DFA2B72A">
<conditionExpression xsi:type="tFormalExpression">

</conditionExpression>
</sequenceFlow>
<sequenceFlow id="sid-9002FA92-B5D3-4ED7-8017-38AF6745E3F7" name="Non validated" sourceRef="sid-C2186BA5-A6FB-44CA-922D-2DEF33649123" targetRef="sid-F6167D38-92D2-4D78-B612-A12599978A8A">
<conditionExpression xsi:type="tFormalExpression">

</conditionExpression>
</sequenceFlow>
<textAnnotation id="sid-DDAF1D6C-111B-4B45-9A9C-C04778614711">
<text>Get pack api BNA DONE Get bundles api</text>
</textAnnotation>
<textAnnotation id="sid-B204F5AB-D4E9-4526-AF47-3A4473674590">
<text>Upload file API</text>
</textAnnotation>
<textAnnotation id="sid-6ADC54D9-4599-4721-A8BC-93333E6E5699">
<text>Depuis Message center</text>
</textAnnotation>
<textAnnotation id="sid-3C0FB75D-FB6D-402D-B5AF-8CD8F9534E5A">
<text>Change status to resigned</text>
</textAnnotation>
<textAnnotation id="sid-5E9E76B2-1F15-4598-88F3-DD613C8B5049">
<text>Asign pack intermediere Assign role intermediere </text>
</textAnnotation>
<textAnnotation id="sid-08F14AE2-39DC-4218-BEA9-621EE993F8E2">
<text>Asign selected pack Assign selected role </text>
</textAnnotation>
<textAnnotation id="sid-E5887151-EB14-4987-9C75-3AE141C0D229">
<text>Notify BNA avec cloture</text>
</textAnnotation>
<textAnnotation id="sid-B5B99FB1-F2B3-453F-8197-2860F459E903">
<text>Keycloak force new password</text>
</textAnnotation>
<textAnnotation id="sid-E8ABA4E6-D545-4428-BAB5-D028B7690D88">
<text>Pack API that includes catalogues</text>
</textAnnotation>
<textAnnotation id="sid-051E6AD9-A47E-4F30-B05E-7CDB62A592BC">
<text>Done</text>
</textAnnotation>
<textAnnotation id="sid-35A61403-E0EE-47E6-820C-FE1AEA965EE2">
<text>Generated Username and Password, and Created a User on Keycloak (Not Activated).</text>
</textAnnotation>
<textAnnotation id="sid-BD4C98D6-19DF-4711-AD2F-7608E14C02E9">
<text>Activate an Account on Keycloak and Create a Digital Account with Only Consultation Permissions.</text>
</textAnnotation>
<textAnnotation id="sid-3A0BF80C-0E8D-440A-A328-F355E7ED2C50">
<text>Check CIN Exist</text>
</textAnnotation>
<textAnnotation id="sid-E1B58A5B-95B3-4046-8CF3-5211B6DBF9C2">
<text>Expose API for complete task DONE Create Smile ticket - with reference number - Not Done I GET COMPTE BANCAIRE CODE CLIENT Variable @Authorize</text>
</textAnnotation>
<textAnnotation id="sid-F7CB0285-5074-47D1-BFE7-54E7B9ABE7E3">
<text>1 year in pre validation</text>
</textAnnotation>
<textAnnotation id="sid-27E9E4F2-C021-4F73-94DF-17D689A0BF6E">
<text>Get Code client Variable</text>
</textAnnotation>
</process>
<bpmndi:BPMNDiagram id="BPMNDiagram_Collaboration">
<bpmndi:BPMNPlane bpmnElement="Collaboration" id="BPMNPlane_Collaboration">
<bpmndi:BPMNShape bpmnElement="sid-EDC880BA-8C80-4DF4-8A43-AA0B2C00169C" id="BPMNShape_sid-EDC880BA-8C80-4DF4-8A43-AA0B2C00169C">
<omgdc:Bounds height="903.2342562459221" width="2355.269877220092" x="63.53007054254415" y="74.99999888241292"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-751278AF-885C-4738-BB0F-1C9422861C3F" id="BPMNShape_sid-751278AF-885C-4738-BB0F-1C9422861C3F">
<omgdc:Bounds height="454.47605942323924" width="2325.269877220092" x="93.53007054254415" y="74.99999888241292"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="startEvent1" id="BPMNShape_startEvent1">
<omgdc:Bounds height="30.000000000000014" width="30.000000000000014" x="209.9999968707562" y="267.6919218352196"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-DDAF1D6C-111B-4B45-9A9C-C04778614711" id="BPMNShape_sid-DDAF1D6C-111B-4B45-9A9C-C04778614711">
<omgdc:Bounds height="45.999999929558086" width="157.00000083121375" x="285.0000040151859" y="168.50000944625336"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-B204F5AB-D4E9-4526-AF47-3A4473674590" id="BPMNShape_sid-B204F5AB-D4E9-4526-AF47-3A4473674590">
<omgdc:Bounds height="42.9999999013814" width="93.99999992955817" x="420.0" y="435.0"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-0926FD99-23E8-4134-AFBA-4E2866AF8F8D" id="BPMNShape_sid-0926FD99-23E8-4134-AFBA-4E2866AF8F8D">
<omgdc:Bounds height="80.00000000000007" width="100.00000000000007" x="389.99999173482325" y="239.9999949137374"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-6ADC54D9-4599-4721-A8BC-93333E6E5699" id="BPMNShape_sid-6ADC54D9-4599-4721-A8BC-93333E6E5699">
<omgdc:Bounds height="33.999999774586016" width="178.00000109889282" x="809.9999758601194" y="344.99999485909944"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-3C0FB75D-FB6D-402D-B5AF-8CD8F9534E5A" id="BPMNShape_sid-3C0FB75D-FB6D-402D-B5AF-8CD8F9534E5A">
<omgdc:Bounds height="50.00000000000007" width="100.00000000000007" x="1635.0" y="405.0"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-5E9E76B2-1F15-4598-88F3-DD613C8B5049" id="BPMNShape_sid-5E9E76B2-1F15-4598-88F3-DD613C8B5049">
<omgdc:Bounds height="54.0000000563535" width="144.00000060580015" x="1800.0000253590688" y="165.00000464916266"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-08F14AE2-39DC-4218-BEA9-621EE993F8E2" id="BPMNShape_sid-08F14AE2-39DC-4218-BEA9-621EE993F8E2">
<omgdc:Bounds height="46.999999957734886" width="159.00000081712534" x="1965.0000276836502" y="168.50000707236265"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-E55091A7-2690-4802-8E8F-E7FB168964B4" id="BPMNShape_sid-E55091A7-2690-4802-8E8F-E7FB168964B4">
<omgdc:Bounds height="80.00000000000001" width="100.00000000000018" x="569.999975840253" y="242.69191553751614"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-AE48F376-6414-43C2-AA28-7A3B163010E0" id="BPMNShape_sid-AE48F376-6414-43C2-AA28-7A3B163010E0">
<omgdc:Bounds height="28.000000000000014" width="27.999999999999844" x="2133.1109961899983" y="268.69192582414007"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-E5887151-EB14-4987-9C75-3AE141C0D229" id="BPMNShape_sid-E5887151-EB14-4987-9C75-3AE141C0D229">
<omgdc:Bounds height="46.9999999718233" width="151.0000007466843" x="1639.499974816225" y="465.0"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-B5B99FB1-F2B3-453F-8197-2860F459E903" id="BPMNShape_sid-B5B99FB1-F2B3-453F-8197-2860F459E903">
<omgdc:Bounds height="46.999999957734886" width="159.00000081712534" x="2190.0" y="259.19192584527264"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-E8ABA4E6-D545-4428-BAB5-D028B7690D88" id="BPMNShape_sid-E8ABA4E6-D545-4428-BAB5-D028B7690D88">
<omgdc:Bounds height="33.999999774586016" width="178.00000109889288" x="134.9999959766866" y="360.4999736766937"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-051E6AD9-A47E-4F30-B05E-7CDB62A592BC" id="BPMNShape_sid-051E6AD9-A47E-4F30-B05E-7CDB62A592BC">
<omgdc:Bounds height="33.999999774586016" width="178.00000109889282" x="585.0" y="439.5000000633977"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-39BF20E9-9007-4D69-B60A-5866BD861025" id="BPMNShape_sid-39BF20E9-9007-4D69-B60A-5866BD861025">
<omgdc:Bounds height="80.00000000000001" width="99.99999999999996" x="749.9999841054293" y="242.69192068082816"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-F6167D38-92D2-4D78-B612-A12599978A8A" id="BPMNShape_sid-F6167D38-92D2-4D78-B612-A12599978A8A">
<omgdc:Bounds height="80.00000000000001" width="100.00000000000007" x="1784.9999069050002" y="389.99997965991605"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-09B801D5-7AFA-4935-8CBA-F970B088B71E" id="BPMNShape_sid-09B801D5-7AFA-4935-8CBA-F970B088B71E">
<omgdc:Bounds height="80.00000000000001" width="100.0000000000003" x="1064.9999769867397" y="239.9999898274749"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-35A61403-E0EE-47E6-820C-FE1AEA965EE2" id="BPMNShape_sid-35A61403-E0EE-47E6-820C-FE1AEA965EE2">
<omgdc:Bounds height="100.99999888051632" width="201.00000078596833" x="539.9999919533731" y="119.99999640882027"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-BD4C98D6-19DF-4711-AD2F-7608E14C02E9" id="BPMNShape_sid-BD4C98D6-19DF-4711-AD2F-7608E14C02E9">
<omgdc:Bounds height="82.99999904442903" width="233.0000003091314" x="1049.999984353781" y="134.99999798834327"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-3A0BF80C-0E8D-440A-A328-F355E7ED2C50" id="BPMNShape_sid-3A0BF80C-0E8D-440A-A328-F355E7ED2C50">
<omgdc:Bounds height="42.9999999013814" width="93.99999992955817" x="330.0" y="355.99997361329605"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-0C3960D3-8BE5-49F7-99B8-5F5BF4BAA75B" id="BPMNShape_sid-0C3960D3-8BE5-49F7-99B8-5F5BF4BAA75B">
<omgdc:Bounds height="448.75819682268286" width="2325.269877220092" x="93.53007054254415" y="529.4760583056521"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-42A1E09C-3442-4C2A-BE7B-4075F880FA14" id="BPMNShape_sid-42A1E09C-3442-4C2A-BE7B-4075F880FA14">
<omgdc:Bounds height="79.99999999999994" width="99.99999999999996" x="869.99998703599" y="659.9999901652338"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-E1B58A5B-95B3-4046-8CF3-5211B6DBF9C2" id="BPMNShape_sid-E1B58A5B-95B3-4046-8CF3-5211B6DBF9C2">
<omgdc:Bounds height="96.99999925494194" width="332.99999658763403" x="659.9999901652337" y="779.9999644973082"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-042445D9-20C3-4537-9269-0E4A6AFEDD62" id="BPMNShape_sid-042445D9-20C3-4537-9269-0E4A6AFEDD62">
<omgdc:Bounds height="80.00000000000006" width="100.00000000000007" x="1529.9999772012236" y="674.9999899417162"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-F7CB0285-5074-47D1-BFE7-54E7B9ABE7E3" id="BPMNShape_sid-F7CB0285-5074-47D1-BFE7-54E7B9ABE7E3">
<omgdc:Bounds height="31.99999973232093" width="170.00000098618585" x="1650.0000464916263" y="737.8551672460108"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-27E9E4F2-C021-4F73-94DF-17D689A0BF6E" id="BPMNShape_sid-27E9E4F2-C021-4F73-94DF-17D689A0BF6E">
<omgdc:Bounds height="46.999999971823286" width="151.00000074668384" x="1469.9999584031889" y="764.999983787538"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-39E754F3-ACAF-4D4C-9596-8A5B5EB9F0FC" id="BPMNShape_sid-39E754F3-ACAF-4D4C-9596-8A5B5EB9F0FC">
<omgdc:Bounds height="31.0" width="31.00000000000007" x="1614.7949070508748" y="700.3249203635964"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-3054F143-E42D-4B6B-8C65-6533DFA2B72A" id="BPMNShape_sid-3054F143-E42D-4B6B-8C65-6533DFA2B72A">
<omgdc:Bounds height="80.0" width="100.00000000000007" x="1939.9628513560467" y="242.69192132885564"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-C2186BA5-A6FB-44CA-922D-2DEF33649123" id="BPMNShape_sid-C2186BA5-A6FB-44CA-922D-2DEF33649123">
<omgdc:Bounds height="40.0" width="40.00000000000007" x="1821.8147054045078" y="262.6919234483777"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-624760E9-8D58-4C36-B8E5-140C29F4FCD4" id="BPMNShape_sid-624760E9-8D58-4C36-B8E5-140C29F4FCD4">
<omgdc:Bounds height="40.0" width="40.00000000000007" x="1094.9999995570302" y="700.9475744529299"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNEdge bpmnElement="sid-3703471B-859B-46E4-A743-7532C91683E9" id="BPMNEdge_sid-3703471B-859B-46E4-A743-7532C91683E9" flowable:sourceDockerX="50.000000000000014" flowable:sourceDockerY="40.00000000000003" flowable:targetDockerX="50.00000000000009" flowable:targetDockerY="40.0">
<omgdi:waypoint x="489.94999173482336" y="279.9999949137374"/>
<omgdi:waypoint x="529.9999837875382" y="279.9999949137374"/>
<omgdi:waypoint x="569.999975840253" y="281.1964039478029"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-0627C903-077E-424E-B299-322812D30737" id="BPMNEdge_sid-0627C903-077E-424E-B299-322812D30737" flowable:sourceDockerX="16.0" flowable:sourceDockerY="16.0" flowable:targetDockerX="50.000000000000455" flowable:targetDockerY="40.0">
<omgdi:waypoint x="1646.7385796537476" y="716.7747877021749"/>
<omgdi:waypoint x="1834.9999069050007" y="722.0867382911161"/>
<omgdi:waypoint x="1834.9999069050007" y="469.9499796599161"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-DE9FD691-A78E-4A47-B5A5-200CA2350280" id="BPMNEdge_sid-DE9FD691-A78E-4A47-B5A5-200CA2350280" flowable:sourceDockerX="99.0" flowable:sourceDockerY="40.0" flowable:targetDockerX="20.5" flowable:targetDockerY="20.5">
<omgdi:waypoint x="969.9499870359899" y="699.9999901652338"/>
<omgdi:waypoint x="1032.4999932965102" y="699.9999901652338"/>
<omgdi:waypoint x="1032.4999932965102" y="721.4475744529299"/>
<omgdi:waypoint x="1095.4999995570302" y="721.4475744529299"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-9002FA92-B5D3-4ED7-8017-38AF6745E3F7" id="BPMNEdge_sid-9002FA92-B5D3-4ED7-8017-38AF6745E3F7" flowable:sourceDockerX="20.5" flowable:sourceDockerY="20.5" flowable:targetDockerX="50.0" flowable:targetDockerY="1.0">
<omgdi:waypoint x="1842.3147054045078" y="302.12694416518616"/>
<omgdi:waypoint x="1842.3147054045078" y="346.34595155414684"/>
<omgdi:waypoint x="1835.1555268763514" y="389.99997965991605"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-FE8069BC-A3D6-4765-BD99-F9203E3B9760" id="BPMNEdge_sid-FE8069BC-A3D6-4765-BD99-F9203E3B9760" flowable:sourceDockerX="50.0" flowable:sourceDockerY="40.0" flowable:targetDockerX="13.999999999999885" flowable:targetDockerY="14.0">
<omgdi:waypoint x="1884.949906904802" y="429.99997965991605"/>
<omgdi:waypoint x="2147.1109961899983" y="429.99997965991605"/>
<omgdi:waypoint x="2147.1109961899983" y="296.641853895372"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-ACEFA2C7-344C-4F8F-AF7F-AEA1F9CAA3B3" id="BPMNEdge_sid-ACEFA2C7-344C-4F8F-AF7F-AEA1F9CAA3B3" flowable:sourceDockerX="50.000000000000085" flowable:sourceDockerY="40.0" flowable:targetDockerX="50.0" flowable:targetDockerY="40.0">
<omgdi:waypoint x="1164.94997698674" y="279.9999898274749"/>
<omgdi:waypoint x="1434.999997075399" y="279.9999898274749"/>
<omgdi:waypoint x="1434.999997075399" y="714.9999899417162"/>
<omgdi:waypoint x="1529.9999772012236" y="714.9999899417162"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-15E3ECFC-B1AF-4F8F-86FD-5CCE3431565D" id="BPMNEdge_sid-15E3ECFC-B1AF-4F8F-86FD-5CCE3431565D" flowable:sourceDockerX="50.0" flowable:sourceDockerY="40.0" flowable:targetDockerX="18.867187867929715" flowable:targetDockerY="18.0">
<omgdi:waypoint x="1579.9999772012236" y="674.9999899417162"/>
<omgdi:waypoint x="1579.9999772012236" y="280.97232413564984"/>
<omgdi:waypoint x="1823.749698767247" y="280.7100322179415"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-BE809FC8-CE78-4552-BAE4-5A4A35D530A5" id="BPMNEdge_sid-BE809FC8-CE78-4552-BAE4-5A4A35D530A5" flowable:sourceDockerX="20.5" flowable:sourceDockerY="20.5" flowable:targetDockerX="50.0" flowable:targetDockerY="40.0">
<omgdi:waypoint x="1115.4999995570302" y="740.3901519539374"/>
<omgdi:waypoint x="1115.4999995570302" y="849.0"/>
<omgdi:waypoint x="1834.9999069050002" y="849.0"/>
<omgdi:waypoint x="1834.9999069050002" y="469.9499796599161"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-8BCDA330-C501-4011-9115-B9CA7A3DB45E" id="BPMNEdge_sid-8BCDA330-C501-4011-9115-B9CA7A3DB45E" flowable:sourceDockerX="15.0" flowable:sourceDockerY="15.0" flowable:targetDockerX="50.000000000000014" flowable:targetDockerY="40.00000000000003">
<omgdi:waypoint x="239.9499946154784" y="282.6919218352196"/>
<omgdi:waypoint x="314.9999943027898" y="282.6919218352196"/>
<omgdi:waypoint x="389.9999917348223" y="281.0756889336605"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-398BC13C-C945-48A7-8CCA-4CE7455F6721" id="BPMNEdge_sid-398BC13C-C945-48A7-8CCA-4CE7455F6721" flowable:sourceDockerX="50.0" flowable:sourceDockerY="79.0" flowable:targetDockerX="1.0" flowable:targetDockerY="40.0">
<omgdi:waypoint x="799.9999841054293" y="322.6419206808282"/>
<omgdi:waypoint x="799.9999841054293" y="699.9999901652338"/>
<omgdi:waypoint x="869.9999870359405" y="699.9999901652338"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-9A8BFF0D-68DA-4E3F-9184-7D426AD21696" id="BPMNEdge_sid-9A8BFF0D-68DA-4E3F-9184-7D426AD21696" flowable:sourceDockerX="20.5" flowable:sourceDockerY="20.5" flowable:targetDockerX="50.0" flowable:targetDockerY="40.0">
<omgdi:waypoint x="1861.3226181220675" y="283.12736238750716"/>
<omgdi:waypoint x="1939.9628513560303" y="282.8610741868829"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-90CA4DE4-BE39-4A80-BD72-7BC2E9DABC67" id="BPMNEdge_sid-90CA4DE4-BE39-4A80-BD72-7BC2E9DABC67" flowable:sourceDockerX="20.5" flowable:sourceDockerY="20.5" flowable:targetDockerX="50.0" flowable:targetDockerY="40.0">
<omgdi:waypoint x="1861.3226181220675" y="283.12736238750716"/>
<omgdi:waypoint x="1939.9628513560303" y="282.8610741868829"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-5731849D-41B3-4B15-A63D-1F4EB3A6BC61" id="BPMNEdge_sid-5731849D-41B3-4B15-A63D-1F4EB3A6BC61" flowable:sourceDockerX="20.5" flowable:sourceDockerY="20.5" flowable:targetDockerX="50.0" flowable:targetDockerY="40.0">
<omgdi:waypoint x="1115.4773200997288" y="701.4248949956285"/>
<omgdi:waypoint x="1115.0452278894036" y="319.94998982747495"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-F463A6AF-2EB3-4880-B1CC-691EF3D957FE" id="BPMNEdge_sid-F463A6AF-2EB3-4880-B1CC-691EF3D957FE" flowable:sourceDockerX="50.0" flowable:sourceDockerY="39.999999999999986" flowable:targetDockerX="13.999999999999885" flowable:targetDockerY="14.0">
<omgdi:waypoint x="2039.912851355944" y="282.69192275769507"/>
<omgdi:waypoint x="2133.1109952301076" y="282.69192542366454"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-02E6E5C2-DA06-4B40-9F31-EAFEF38AC521" id="BPMNEdge_sid-02E6E5C2-DA06-4B40-9F31-EAFEF38AC521" flowable:sourceDockerX="99.00000000000023" flowable:sourceDockerY="40.0" flowable:targetDockerX="1.0" flowable:targetDockerY="40.0">
<omgdi:waypoint x="669.9499757050233" y="282.6919155971033"/>
<omgdi:waypoint x="749.9999841054293" y="282.69192061810486"/>
</bpmndi:BPMNEdge>
</bpmndi:BPMNPlane>
</bpmndi:BPMNDiagram>
</definitions>`,`<definitions xmlns="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:flowable="http://flowable.org/bpmn" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:omgdc="http://www.omg.org/spec/DD/20100524/DC" xmlns:omgdi="http://www.omg.org/spec/DD/20100524/DI" typeLanguage="http://www.w3.org/2001/XMLSchema" expressionLanguage="http://www.w3.org/1999/XPath" targetNamespace="http://flowable.org/test" exporter="Flowable Open Source Modeler" exporterVersion="6.8.0">
<collaboration id="Collaboration">
<participant id="sid-64D9419F-239C-47BD-BE8E-E1B2ABDC1FD5" name="PRIVATE-CLAIMS-CARD" processRef="PRIVATE-CLAIMS-CARD"/>
</collaboration>
<process id="PRIVATE-CLAIMS-CARD" name="PRIVATE-CLAIMS-CARD" isExecutable="true">
<laneSet id="laneSet_PRIVATE-CLAIMS-CARD">
<lane id="sid-4F3D9ABA-F60D-40B5-BC92-B7850A47DDB5">
<flowNodeRef>startEvent1</flowNodeRef>
<flowNodeRef>sid-28E00AF2-4C08-402E-A934-6BA427D3A15A</flowNodeRef>
<flowNodeRef>sid-78EBE55E-4BFD-4AD6-800C-6EE876D01F92</flowNodeRef>
<flowNodeRef>sid-390F95D5-AD4F-4776-8953-E0D85C0BA2AE</flowNodeRef>
<flowNodeRef>sid-FF1FC00F-11FB-4DAA-9268-CC77FCACD8A4</flowNodeRef>
</lane>
</laneSet>
<startEvent id="startEvent1" flowable:formKey="PRIVATE_CLAIMS_CARD" flowable:formFieldValidation="true">
<extensionElements>
<flowable:executionListener event="start"/>
<flowable:executionListener event="start"/>
<flowable:executionListener event="start" />
</extensionElements>
</startEvent>
<userTask id="sid-28E00AF2-4C08-402E-A934-6BA427D3A15A" name="Review Claims"  flowable:formKey="PRIVATE_CLAIMS_CARD" flowable:formFieldValidation="true"/>
<endEvent id="sid-78EBE55E-4BFD-4AD6-800C-6EE876D01F92"/>
<sequenceFlow id="sid-390F95D5-AD4F-4776-8953-E0D85C0BA2AE" sourceRef="sid-28E00AF2-4C08-402E-A934-6BA427D3A15A" targetRef="sid-78EBE55E-4BFD-4AD6-800C-6EE876D01F92"/>
<sequenceFlow id="sid-FF1FC00F-11FB-4DAA-9268-CC77FCACD8A4" sourceRef="startEvent1" targetRef="sid-28E00AF2-4C08-402E-A934-6BA427D3A15A">
<extensionElements>
<flowable:executionListener event="start"/>
</extensionElements>
</sequenceFlow>
</process>
<bpmndi:BPMNDiagram id="BPMNDiagram_Collaboration">
<bpmndi:BPMNPlane bpmnElement="Collaboration" id="BPMNPlane_Collaboration">
<bpmndi:BPMNShape bpmnElement="sid-64D9419F-239C-47BD-BE8E-E1B2ABDC1FD5" id="BPMNShape_sid-64D9419F-239C-47BD-BE8E-E1B2ABDC1FD5">
<omgdc:Bounds height="250.0" width="600.0" x="195.0" y="120.0"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-4F3D9ABA-F60D-40B5-BC92-B7850A47DDB5" id="BPMNShape_sid-4F3D9ABA-F60D-40B5-BC92-B7850A47DDB5">
<omgdc:Bounds height="250.0" width="570.0" x="225.0" y="120.0"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="startEvent1" id="BPMNShape_startEvent1">
<omgdc:Bounds height="30.0" width="30.0" x="300.000006887649" y="230.0000052805309"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-28E00AF2-4C08-402E-A934-6BA427D3A15A" id="BPMNShape_sid-28E00AF2-4C08-402E-A934-6BA427D3A15A">
<omgdc:Bounds height="80.0" width="100.0" x="445.0" y="205.0"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-78EBE55E-4BFD-4AD6-800C-6EE876D01F92" id="BPMNShape_sid-78EBE55E-4BFD-4AD6-800C-6EE876D01F92">
<omgdc:Bounds height="28.0" width="28.0" x="630.0" y="231.0"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNEdge bpmnElement="sid-390F95D5-AD4F-4776-8953-E0D85C0BA2AE" id="BPMNEdge_sid-390F95D5-AD4F-4776-8953-E0D85C0BA2AE" flowable:sourceDockerX="50.0" flowable:sourceDockerY="40.0" flowable:targetDockerX="14.0" flowable:targetDockerY="14.0">
<omgdi:waypoint x="544.9499999998887" y="245.0"/>
<omgdi:waypoint x="630.0" y="245.0"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-FF1FC00F-11FB-4DAA-9268-CC77FCACD8A4" id="BPMNEdge_sid-FF1FC00F-11FB-4DAA-9268-CC77FCACD8A4" flowable:sourceDockerX="15.0" flowable:sourceDockerY="15.0" flowable:targetDockerX="50.0" flowable:targetDockerY="40.0">
<omgdi:waypoint x="329.95000632362917" y="245.00000484048664"/>
<omgdi:waypoint x="444.99999999997294" y="245.0000014653474"/>
</bpmndi:BPMNEdge>
</bpmndi:BPMNPlane>
</bpmndi:BPMNDiagram>
</definitions>`,`<definitions xmlns="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:flowable="http://flowable.org/bpmn" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:omgdc="http://www.omg.org/spec/DD/20100524/DC" xmlns:omgdi="http://www.omg.org/spec/DD/20100524/DI" typeLanguage="http://www.w3.org/2001/XMLSchema" expressionLanguage="http://www.w3.org/1999/XPath" targetNamespace="http://flowable.org/test" exporter="Flowable Open Source Modeler" exporterVersion="6.8.0">
<collaboration id="Collaboration">
<participant id="sid-18A5897E-D859-4B89-9EB4-B54A3CA95E7E" name="modifyCardLimitsCSATicket" processRef="MODIFY-CARD-LIMITS-REQUEST"/>
</collaboration>
<process id="MODIFY-CARD-LIMITS-REQUEST" name="modifyCardLimitsCSATicket" isExecutable="true">
<laneSet id="laneSet_MODIFY-CARD-LIMITS-REQUEST">
<lane id="sid-C953796D-B691-487E-BAC5-A26874E5925B">
<flowNodeRef>startEvent1</flowNodeRef>
<flowNodeRef>sid-259F813A-69C6-429B-BFD6-C7DCA044FF7C</flowNodeRef>
<flowNodeRef>sid-45D107AB-47A7-4524-9477-13000FC44ECD</flowNodeRef>
<flowNodeRef>sid-0C6B2AFA-FF58-42B4-BE83-DDA4D0B6BEF0</flowNodeRef>
<flowNodeRef>sid-B1DE7814-868F-4F01-877D-E3B3E9B0F214</flowNodeRef>
</lane>
</laneSet>
<startEvent id="startEvent1" flowable:formKey="CARD_LIMITS" flowable:formFieldValidation="true">
<extensionElements>
<flowable:executionListener event="start"/>
<flowable:executionListener event="start" />
<flowable:executionListener event="start"/>
</extensionElements>
</startEvent>
<userTask id="sid-259F813A-69C6-429B-BFD6-C7DCA044FF7C" name="Agent Response" flowable:formKey="CARD_LIMITS" flowable:formFieldValidation="true">
<extensionElements>
<flowable:taskListener event="create" />
</extensionElements>
</userTask>
<intermediateThrowEvent id="sid-45D107AB-47A7-4524-9477-13000FC44ECD"/>
<sequenceFlow id="sid-0C6B2AFA-FF58-42B4-BE83-DDA4D0B6BEF0" sourceRef="sid-259F813A-69C6-429B-BFD6-C7DCA044FF7C" targetRef="sid-45D107AB-47A7-4524-9477-13000FC44ECD"/>
<sequenceFlow id="sid-B1DE7814-868F-4F01-877D-E3B3E9B0F214" sourceRef="startEvent1" targetRef="sid-259F813A-69C6-429B-BFD6-C7DCA044FF7C"/>
</process>
<bpmndi:BPMNDiagram id="BPMNDiagram_Collaboration">
<bpmndi:BPMNPlane bpmnElement="Collaboration" id="BPMNPlane_Collaboration">
<bpmndi:BPMNShape bpmnElement="sid-18A5897E-D859-4B89-9EB4-B54A3CA95E7E" id="BPMNShape_sid-18A5897E-D859-4B89-9EB4-B54A3CA95E7E">
<omgdc:Bounds height="250.0" width="600.0" x="75.00000516573687" y="0.0"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-C953796D-B691-487E-BAC5-A26874E5925B" id="BPMNShape_sid-C953796D-B691-487E-BAC5-A26874E5925B">
<omgdc:Bounds height="250.0" width="570.0" x="105.00000516573687" y="0.0"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="startEvent1" id="BPMNShape_startEvent1">
<omgdc:Bounds height="30.0" width="30.0" x="153.00000340938615" y="89.99997600802101"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-259F813A-69C6-429B-BFD6-C7DCA044FF7C" id="BPMNShape_sid-259F813A-69C6-429B-BFD6-C7DCA044FF7C">
<omgdc:Bounds height="80.00000000000003" width="100.0" x="348.0000237279513" y="64.99998415840608"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-45D107AB-47A7-4524-9477-13000FC44ECD" id="BPMNShape_sid-45D107AB-47A7-4524-9477-13000FC44ECD">
<omgdc:Bounds height="30.0" width="30.0" x="597.0000139474892" y="89.99998415840605"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNEdge bpmnElement="sid-0C6B2AFA-FF58-42B4-BE83-DDA4D0B6BEF0" id="BPMNEdge_sid-0C6B2AFA-FF58-42B4-BE83-DDA4D0B6BEF0" flowable:sourceDockerX="50.000000000000014" flowable:sourceDockerY="40.000000000000014" flowable:targetDockerX="14.999999999999943" flowable:targetDockerY="15.0">
<omgdi:waypoint x="447.9500237279507" y="104.99998415840608"/>
<omgdi:waypoint x="597.0000139474892" y="104.99998415840605"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-B1DE7814-868F-4F01-877D-E3B3E9B0F214" id="BPMNEdge_sid-B1DE7814-868F-4F01-877D-E3B3E9B0F214" flowable:sourceDockerX="15.0" flowable:sourceDockerY="15.0" flowable:targetDockerX="50.000000000000014" flowable:targetDockerY="40.000000000000014">
<omgdi:waypoint x="182.95000306370923" y="104.99997653779599"/>
<omgdi:waypoint x="348.00002372788947" y="104.99998238658341"/>
</bpmndi:BPMNEdge>
</bpmndi:BPMNPlane>
</bpmndi:BPMNDiagram>
</definitions>`,`<definitions xmlns="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:flowable="http://flowable.org/bpmn" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:omgdc="http://www.omg.org/spec/DD/20100524/DC" xmlns:omgdi="http://www.omg.org/spec/DD/20100524/DI" typeLanguage="http://www.w3.org/2001/XMLSchema" expressionLanguage="http://www.w3.org/1999/XPath" targetNamespace="http://flowable.org/test" exporter="Flowable Open Source Modeler" exporterVersion="6.8.0">
<collaboration id="Collaboration">
<participant id="sid-66835F67-24C8-47A9-9EA8-600DDF895BCC" name="privateContactUsCSATicket" processRef="PRIVATE-CONTACT-US"/>
</collaboration>
<process id="PRIVATE-CONTACT-US" name="privateContactUsCSATicket" isExecutable="true">
<laneSet id="laneSet_PRIVATE-CONTACT-US">
<lane id="sid-467C5225-6E9C-4F34-9A8E-DE98DFD59111">
<flowNodeRef>sid-E674BD50-495D-490F-85CD-1C55561B5D17</flowNodeRef>
<flowNodeRef>sid-E8533F9D-4396-494E-B6CB-B2C4F8DC34D8</flowNodeRef>
<flowNodeRef>sid-3C3163F0-E35F-45DD-A8ED-C608DF926BBF</flowNodeRef>
<flowNodeRef>sid-6A13B70A-9729-4C61-87F6-D73A243C3E30</flowNodeRef>
<flowNodeRef>sid-A3946831-1437-4F1A-A073-439666C968C0</flowNodeRef>
<flowNodeRef>sid-9EE3E16C-0D8F-43A1-832C-22F47171AF88</flowNodeRef>
<flowNodeRef>sid-2F7D9DB9-06B3-4670-A2E0-4C9BF3BEBDCB</flowNodeRef>
<flowNodeRef>sid-3F2DCECF-573C-4BD4-97A5-07DE13188799</flowNodeRef>
<flowNodeRef>sid-773675AB-80F7-4882-BE31-42A8A2C6CAA4</flowNodeRef>
</lane>
</laneSet>
<startEvent id="sid-E674BD50-495D-490F-85CD-1C55561B5D17" flowable:formKey="PRIVATE_CONTACT_US" flowable:formFieldValidation="true">
<extensionElements>
<flowable:executionListener event="start" />
<flowable:executionListener event="start" />
<flowable:executionListener event="start" />
<flowable:executionListener event="start" />
<flowable:executionListener event="start" />
<flowable:executionListener event="start" />
</extensionElements>
</startEvent>
<userTask id="sid-E8533F9D-4396-494E-B6CB-B2C4F8DC34D8" name="Agent Response"  flowable:formKey="PRIVATE_CONTACT_US" flowable:formFieldValidation="true"/>
<endEvent id="sid-3C3163F0-E35F-45DD-A8ED-C608DF926BBF"/>
<serviceTask id="sid-6A13B70A-9729-4C61-87F6-D73A243C3E30" name="Send Agent Notif" />
<boundaryEvent id="sid-A3946831-1437-4F1A-A073-439666C968C0" attachedToRef="sid-E8533F9D-4396-494E-B6CB-B2C4F8DC34D8" cancelActivity="true">
<timerEventDefinition>
<timeDuration>PT48H</timeDuration>
</timerEventDefinition>
</boundaryEvent>
<sequenceFlow id="sid-9EE3E16C-0D8F-43A1-832C-22F47171AF88" sourceRef="sid-A3946831-1437-4F1A-A073-439666C968C0" targetRef="sid-6A13B70A-9729-4C61-87F6-D73A243C3E30"/>
<sequenceFlow id="sid-2F7D9DB9-06B3-4670-A2E0-4C9BF3BEBDCB" sourceRef="sid-6A13B70A-9729-4C61-87F6-D73A243C3E30" targetRef="sid-E8533F9D-4396-494E-B6CB-B2C4F8DC34D8"/>
<sequenceFlow id="sid-3F2DCECF-573C-4BD4-97A5-07DE13188799" sourceRef="sid-E8533F9D-4396-494E-B6CB-B2C4F8DC34D8" targetRef="sid-3C3163F0-E35F-45DD-A8ED-C608DF926BBF">
<extensionElements>
<flowable:executionListener event="start" />
</extensionElements>
</sequenceFlow>
<sequenceFlow id="sid-773675AB-80F7-4882-BE31-42A8A2C6CAA4" sourceRef="sid-E674BD50-495D-490F-85CD-1C55561B5D17" targetRef="sid-E8533F9D-4396-494E-B6CB-B2C4F8DC34D8">
<extensionElements>
<flowable:executionListener event="start" />
</extensionElements>
</sequenceFlow>
</process>
<bpmndi:BPMNDiagram id="BPMNDiagram_Collaboration">
<bpmndi:BPMNPlane bpmnElement="Collaboration" id="BPMNPlane_Collaboration">
<bpmndi:BPMNShape bpmnElement="sid-66835F67-24C8-47A9-9EA8-600DDF895BCC" id="BPMNShape_sid-66835F67-24C8-47A9-9EA8-600DDF895BCC">
<omgdc:Bounds height="357.000002433636" width="727.000002846895" x="149.99999552965176" y="29.999999105930353"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-467C5225-6E9C-4F34-9A8E-DE98DFD59111" id="BPMNShape_sid-467C5225-6E9C-4F34-9A8E-DE98DFD59111">
<omgdc:Bounds height="357.000002433636" width="697.000002846895" x="179.99999552965176" y="29.999999105930353"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-E674BD50-495D-490F-85CD-1C55561B5D17" id="BPMNShape_sid-E674BD50-495D-490F-85CD-1C55561B5D17">
<omgdc:Bounds height="29.999999999999996" width="30.0" x="255.00000790920717" y="148.48301455440034"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-E8533F9D-4396-494E-B6CB-B2C4F8DC34D8" id="BPMNShape_sid-E8533F9D-4396-494E-B6CB-B2C4F8DC34D8">
<omgdc:Bounds height="80.0" width="117.99999949336046" x="405.9999818415577" y="123.48303247948425"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-3C3163F0-E35F-45DD-A8ED-C608DF926BBF" id="BPMNShape_sid-3C3163F0-E35F-45DD-A8ED-C608DF926BBF">
<omgdc:Bounds height="27.999999999999996" width="28.0" x="644.9999807775026" y="149.48301676696968"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-6A13B70A-9729-4C61-87F6-D73A243C3E30" id="BPMNShape_sid-6A13B70A-9729-4C61-87F6-D73A243C3E30">
<omgdc:Bounds height="80.00000000000003" width="100.0" x="414.9999876381091" y="255.00002927250955"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-A3946831-1437-4F1A-A073-439666C968C0" id="BPMNShape_sid-A3946831-1437-4F1A-A073-439666C968C0">
<omgdc:Bounds height="30.999999999999996" width="31.0" x="415.2565070268554" y="188.09070559163743"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNEdge bpmnElement="sid-2F7D9DB9-06B3-4670-A2E0-4C9BF3BEBDCB" id="BPMNEdge_sid-2F7D9DB9-06B3-4670-A2E0-4C9BF3BEBDCB" flowable:sourceDockerX="50.0" flowable:sourceDockerY="40.000000000000014" flowable:targetDockerX="58.99999974668023" flowable:targetDockerY="40.0">
<omgdi:waypoint x="464.9999857980819" y="255.00002927250955"/>
<omgdi:waypoint x="464.99998342596507" y="203.43303247948427"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-773675AB-80F7-4882-BE31-42A8A2C6CAA4" id="BPMNEdge_sid-773675AB-80F7-4882-BE31-42A8A2C6CAA4" flowable:sourceDockerX="15.000000000000007" flowable:sourceDockerY="15.0" flowable:targetDockerX="58.99999974668024" flowable:targetDockerY="40.00000000000001">
<omgdi:waypoint x="284.95000742815506" y="163.48301592865704"/>
<omgdi:waypoint x="405.99998183498667" y="163.48302705599662"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-3F2DCECF-573C-4BD4-97A5-07DE13188799" id="BPMNEdge_sid-3F2DCECF-573C-4BD4-97A5-07DE13188799" flowable:sourceDockerX="101.42663753696246" flowable:sourceDockerY="39.999982447444864" flowable:targetDockerX="14.0" flowable:targetDockerY="14.0">
<omgdi:waypoint x="523.9499813349182" y="163.4830151275162"/>
<omgdi:waypoint x="644.9999802266076" y="163.48301659701522"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-9EE3E16C-0D8F-43A1-832C-22F47171AF88" id="BPMNEdge_sid-9EE3E16C-0D8F-43A1-832C-22F47171AF88" flowable:sourceDockerX="16.0" flowable:sourceDockerY="16.0" flowable:targetDockerX="50.0" flowable:targetDockerY="40.000000000000014">
<omgdi:waypoint x="436.80828758874526" y="219.04623657580038"/>
<omgdi:waypoint x="450.1528941849857" y="255.00002927250955"/>
</bpmndi:BPMNEdge>
</bpmndi:BPMNPlane>
</bpmndi:BPMNDiagram>
</definitions>`,`<definitions xmlns="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:flowable="http://flowable.org/bpmn" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:omgdc="http://www.omg.org/spec/DD/20100524/DC" xmlns:omgdi="http://www.omg.org/spec/DD/20100524/DI" typeLanguage="http://www.w3.org/2001/XMLSchema" expressionLanguage="http://www.w3.org/1999/XPath" targetNamespace="http://www.flowable.org/processdef" exporter="Flowable Open Source Modeler" exporterVersion="6.8.0">
<process id="Process_A" name="Process_A" isExecutable="true">
<startEvent id="startEvent1" flowable:initiator="initiator" flowable:formKey="Subscription-Personal-Info-Step" flowable:formFieldValidation="true"/>
<userTask id="sid-BDCA837F-BB0A-4F72-BBCD-B81DC4197676" name="Step 2"  flowable:formKey="Subscription-Role-Step" flowable:formFieldValidation="true">
<extensionElements>
<modeler:initiator-can-complete xmlns:modeler="http://flowable.org/modeler">
<![CDATA[ false ]]>
</modeler:initiator-can-complete>
</extensionElements>
</userTask>
<sequenceFlow id="sid-3F0BBC8A-17A8-4413-A750-D31A791EB3A0" sourceRef="startEvent1" targetRef="sid-BDCA837F-BB0A-4F72-BBCD-B81DC4197676"/>
<endEvent id="sid-B6C40972-ABDD-4742-8629-8AA2372D82DA"/>
<userTask id="sid-F747F375-676C-4E02-BC54-DB82567DBF47" name="Step 3"  flowable:formKey="Subscription-Otp-Step" flowable:formFieldValidation="true">
<extensionElements>
<modeler:initiator-can-complete xmlns:modeler="http://flowable.org/modeler">
<![CDATA[ false ]]>
</modeler:initiator-can-complete>
</extensionElements>
</userTask>
<userTask id="sid-23431025-9017-400B-9445-10E34982D495" name="Step 4" flowable:formKey="Subscription-Email-Step" flowable:formFieldValidation="true">
<extensionElements>
<modeler:initiator-can-complete xmlns:modeler="http://flowable.org/modeler">
<![CDATA[ false ]]>
</modeler:initiator-can-complete>
</extensionElements>
</userTask>
<sequenceFlow id="sid-1C2F3AD1-51E6-47F0-93FB-078247A59AC7" sourceRef="sid-BDCA837F-BB0A-4F72-BBCD-B81DC4197676" targetRef="sid-F747F375-676C-4E02-BC54-DB82567DBF47"/>
<sequenceFlow id="sid-9DA0318E-EC4F-4EAA-A0A3-F5BEB251D338" sourceRef="sid-F747F375-676C-4E02-BC54-DB82567DBF47" targetRef="sid-23431025-9017-400B-9445-10E34982D495"/>
<sequenceFlow id="sid-4ECC158E-9F75-49FB-8B54-5DAE636E3220" sourceRef="sid-23431025-9017-400B-9445-10E34982D495" targetRef="sid-B6C40972-ABDD-4742-8629-8AA2372D82DA"/>
</process>
<bpmndi:BPMNDiagram id="BPMNDiagram_Process_A">
<bpmndi:BPMNPlane bpmnElement="Process_A" id="BPMNPlane_Process_A">
<bpmndi:BPMNShape bpmnElement="startEvent1" id="BPMNShape_startEvent1">
<omgdc:Bounds height="30.0" width="30.0" x="224.9999966472388" y="185.9999763071555"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-BDCA837F-BB0A-4F72-BBCD-B81DC4197676" id="BPMNShape_sid-BDCA837F-BB0A-4F72-BBCD-B81DC4197676">
<omgdc:Bounds height="80.0" width="100.0" x="344.99999485909944" y="160.9999898076061"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-B6C40972-ABDD-4742-8629-8AA2372D82DA" id="BPMNShape_sid-B6C40972-ABDD-4742-8629-8AA2372D82DA">
<omgdc:Bounds height="28.0" width="28.0" x="839.9999874830248" y="186.99997907877113"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-F747F375-676C-4E02-BC54-DB82567DBF47" id="BPMNShape_sid-F747F375-676C-4E02-BC54-DB82567DBF47">
<omgdc:Bounds height="79.99999999999994" width="100.0" x="509.9999924004079" y="160.999981865288"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-23431025-9017-400B-9445-10E34982D495" id="BPMNShape_sid-23431025-9017-400B-9445-10E34982D495">
<omgdc:Bounds height="79.99999999999994" width="100.0" x="674.9999899417163" y="160.99999220669292"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNEdge bpmnElement="sid-1C2F3AD1-51E6-47F0-93FB-078247A59AC7" id="BPMNEdge_sid-1C2F3AD1-51E6-47F0-93FB-078247A59AC7" flowable:sourceDockerX="50.0" flowable:sourceDockerY="40.0" flowable:targetDockerX="50.0" flowable:targetDockerY="39.99999999999997">
<omgdi:waypoint x="444.9499948590892" y="200.99998740084297"/>
<omgdi:waypoint x="509.9999924004079" y="200.9999842696443"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-4ECC158E-9F75-49FB-8B54-5DAE636E3220" id="BPMNEdge_sid-4ECC158E-9F75-49FB-8B54-5DAE636E3220" flowable:sourceDockerX="50.0" flowable:sourceDockerY="39.99999999999997" flowable:targetDockerX="14.0" flowable:targetDockerY="14.0">
<omgdi:waypoint x="774.9499899416569" y="200.99998711835104"/>
<omgdi:waypoint x="839.9999874207823" y="200.99998049841858"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-9DA0318E-EC4F-4EAA-A0A3-F5BEB251D338" id="BPMNEdge_sid-9DA0318E-EC4F-4EAA-A0A3-F5BEB251D338" flowable:sourceDockerX="50.0" flowable:sourceDockerY="39.99999999999997" flowable:targetDockerX="50.0" flowable:targetDockerY="39.99999999999997">
<omgdi:waypoint x="609.9499924003863" y="200.99998499591334"/>
<omgdi:waypoint x="674.9999898485303" y="200.99998907293377"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-3F0BBC8A-17A8-4413-A750-D31A791EB3A0" id="BPMNEdge_sid-3F0BBC8A-17A8-4413-A750-D31A791EB3A0" flowable:sourceDockerX="15.0" flowable:sourceDockerY="15.0" flowable:targetDockerX="50.0" flowable:targetDockerY="40.0">
<omgdi:waypoint x="254.94999588610239" y="200.9999776092958"/>
<omgdi:waypoint x="344.9999947832937" y="200.99998545262198"/>
</bpmndi:BPMNEdge>
</bpmndi:BPMNPlane>
</bpmndi:BPMNDiagram>
</definitions>`,`<definitions xmlns="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:flowable="http://flowable.org/bpmn" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:omgdc="http://www.omg.org/spec/DD/20100524/DC" xmlns:omgdi="http://www.omg.org/spec/DD/20100524/DI" typeLanguage="http://www.w3.org/2001/XMLSchema" expressionLanguage="http://www.w3.org/1999/XPath" targetNamespace="http://www.flowable.org/processdef" exporter="Flowable Open Source Modeler" exporterVersion="6.8.0">
<process id="APPLY-FOR-CREDIT" name="APPLY-FOR-CREDIT" isExecutable="true">
<startEvent id="startEvent1" flowable:initiator="initiator" flowable:formKey="OnBoardingAgenceChoose" flowable:formFieldValidation="true">
<extensionElements>
<flowable:executionListener event="start" />
<flowable:executionListener event="start" />
<flowable:executionListener event="start" />
<flowable:executionListener event="start" />
<flowable:executionListener event="start" />
</extensionElements>
</startEvent>
<userTask id="sid-8A4D881D-399B-4EE0-9259-47C02818ADF0" name="Authentication (E-Mail OR SMS)" flowable:formKey="ContactUs" flowable:formFieldValidation="true"/>
<userTask id="sid-2078C253-A074-4B66-903F-2D3CAFDCE38C" name="Simulation" flowable:formKey="ContactUs" flowable:formFieldValidation="true"/>
<userTask id="sid-0B0E4CBC-F0C3-408C-B727-09BAC4C561B9" name="Confirmation" flowable:formKey="ContactUs" flowable:formFieldValidation="true"/>
<sequenceFlow id="sid-3DD7119F-6959-4D03-A3FB-245D03972138" sourceRef="sid-2078C253-A074-4B66-903F-2D3CAFDCE38C" targetRef="sid-0B0E4CBC-F0C3-408C-B727-09BAC4C561B9"/>
<serviceTask id="sid-4C34B192-DB08-4FCC-A146-02DB4FCCF6D6" name="Check Credentials Validity"/>
<exclusiveGateway id="sid-8DC96BB1-1051-4A68-9D89-EF7D069BA2EC"/>
<endEvent id="sid-C71F4356-68C7-4E5C-9AD0-2F2ACD796829"/>
<serviceTask id="sid-8824C6EA-B026-4036-A181-441778B6147E" name="Send OTP" />
<userTask id="sid-A02D8A91-1279-45E6-9C4F-9E09588AE499" name="OTP Form" flowable:formKey="Subscription-Otp-Step" flowable:formFieldValidation="true"/>
<exclusiveGateway id="sid-94002D28-A952-4C2D-B37E-4719A1A74A41"/>
<serviceTask id="sid-D40FB894-A322-493D-A6A4-B85BA3B6B3F8" name="Check OTP" />
<sequenceFlow id="sid-256BF981-A29B-4854-AE10-3DE854A23530" sourceRef="sid-94002D28-A952-4C2D-B37E-4719A1A74A41" targetRef="sid-D40FB894-A322-493D-A6A4-B85BA3B6B3F8"/>
<exclusiveGateway id="sid-22A65B44-C288-4E02-96F4-8855F7DF5DD8"/>
<endEvent id="sid-86153686-27CF-4D84-9DD0-9FC726BF9616"/>
<sequenceFlow id="sid-82079FF2-7E9E-4346-ABA0-F0A3192A926C" sourceRef="sid-0B0E4CBC-F0C3-408C-B727-09BAC4C561B9" targetRef="sid-86153686-27CF-4D84-9DD0-9FC726BF9616"/>
<sequenceFlow id="sid-21402F3B-82D3-4AC5-AC10-22E96A9BBAB3" sourceRef="sid-4C34B192-DB08-4FCC-A146-02DB4FCCF6D6" targetRef="sid-8DC96BB1-1051-4A68-9D89-EF7D069BA2EC"/>
<userTask id="sid-634A64F5-AA48-450B-ADC3-DABD2867D79F" name="Choice Of Credit" flowable:formKey="ContactUs" flowable:formFieldValidation="true"/>
<sequenceFlow id="sid-ABF52B6C-539C-4C2A-A924-2582FBE41D6E" sourceRef="sid-634A64F5-AA48-450B-ADC3-DABD2867D79F" targetRef="sid-2078C253-A074-4B66-903F-2D3CAFDCE38C"/>
<sequenceFlow id="sid-2EA6B518-8E0F-4CC7-8D3F-65C5775835FD" sourceRef="sid-D40FB894-A322-493D-A6A4-B85BA3B6B3F8" targetRef="sid-22A65B44-C288-4E02-96F4-8855F7DF5DD8"/>
<sequenceFlow id="sid-B9C24E48-8A3C-47FF-A25E-1375565BCE70" sourceRef="sid-8824C6EA-B026-4036-A181-441778B6147E" targetRef="sid-A02D8A91-1279-45E6-9C4F-9E09588AE499"/>
<sequenceFlow id="sid-C4C13992-4B53-44AC-A1E2-F34072B04703" sourceRef="sid-A02D8A91-1279-45E6-9C4F-9E09588AE499" targetRef="sid-94002D28-A952-4C2D-B37E-4719A1A74A41"/>
<sequenceFlow id="sid-EB1E36E4-0CD2-456E-8C60-A668F30BA073" name="Valid Credentials" sourceRef="sid-8DC96BB1-1051-4A68-9D89-EF7D069BA2EC" targetRef="sid-8A4D881D-399B-4EE0-9259-47C02818ADF0">
<conditionExpression xsi:type="tFormalExpression">

</conditionExpression>
</sequenceFlow>
<sequenceFlow id="sid-AD570CDA-9A3F-468F-8957-0F53BC15099F" name="Invalid Credentials" sourceRef="sid-8DC96BB1-1051-4A68-9D89-EF7D069BA2EC" targetRef="sid-C71F4356-68C7-4E5C-9AD0-2F2ACD796829">
<conditionExpression xsi:type="tFormalExpression">

</conditionExpression>
</sequenceFlow>
<sequenceFlow id="sid-5E5C9E59-2CAA-49CA-BB0F-E354F21A3EA1" name="Resend OTP" sourceRef="sid-94002D28-A952-4C2D-B37E-4719A1A74A41" targetRef="sid-8824C6EA-B026-4036-A181-441778B6147E">
<conditionExpression xsi:type="tFormalExpression">

</conditionExpression>
</sequenceFlow>
<sequenceFlow id="sid-B021640E-BB45-4FED-8C14-B5E628CD016C" name="Valid OTP" sourceRef="sid-22A65B44-C288-4E02-96F4-8855F7DF5DD8" targetRef="sid-634A64F5-AA48-450B-ADC3-DABD2867D79F">
<conditionExpression xsi:type="tFormalExpression">

</conditionExpression>
</sequenceFlow>
<sequenceFlow id="sid-5E2A112D-AA06-4BFC-85A8-11686CB4A3DC" name="Invalid OTP" sourceRef="sid-22A65B44-C288-4E02-96F4-8855F7DF5DD8" targetRef="sid-A02D8A91-1279-45E6-9C4F-9E09588AE499">
<conditionExpression xsi:type="tFormalExpression">
</conditionExpression>
</sequenceFlow>
<sequenceFlow id="sid-890E1DE0-157D-4A6C-88C3-A51E91658B82" sourceRef="startEvent1" targetRef="sid-4C34B192-DB08-4FCC-A146-02DB4FCCF6D6"/>
<sequenceFlow id="sid-C671C812-418F-4B9E-B715-53AA7569B3CC" sourceRef="sid-8A4D881D-399B-4EE0-9259-47C02818ADF0" targetRef="sid-8824C6EA-B026-4036-A181-441778B6147E"/>
</process>
<bpmndi:BPMNDiagram id="BPMNDiagram_APPLY-FOR-CREDIT">
<bpmndi:BPMNPlane bpmnElement="APPLY-FOR-CREDIT" id="BPMNPlane_APPLY-FOR-CREDIT">
<bpmndi:BPMNShape bpmnElement="startEvent1" id="BPMNShape_startEvent1">
<omgdc:Bounds height="30.0" width="30.0" x="0.0" y="163.0"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-8A4D881D-399B-4EE0-9259-47C02818ADF0" id="BPMNShape_sid-8A4D881D-399B-4EE0-9259-47C02818ADF0">
<omgdc:Bounds height="80.0" width="99.99999999999989" x="749.9999776482589" y="137.99999177455936"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-2078C253-A074-4B66-903F-2D3CAFDCE38C" id="BPMNShape_sid-2078C253-A074-4B66-903F-2D3CAFDCE38C">
<omgdc:Bounds height="80.0" width="100.0" x="1319.9999213218723" y="137.99999588727962"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-0B0E4CBC-F0C3-408C-B727-09BAC4C561B9" id="BPMNShape_sid-0B0E4CBC-F0C3-408C-B727-09BAC4C561B9">
<omgdc:Bounds height="80.0" width="100.0" x="1480.0" y="138.0"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-4C34B192-DB08-4FCC-A146-02DB4FCCF6D6" id="BPMNShape_sid-4C34B192-DB08-4FCC-A146-02DB4FCCF6D6">
<omgdc:Bounds height="80.0" width="100.0" x="179.99999463558214" y="137.99999588727962"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-8DC96BB1-1051-4A68-9D89-EF7D069BA2EC" id="BPMNShape_sid-8DC96BB1-1051-4A68-9D89-EF7D069BA2EC">
<omgdc:Bounds height="40.0" width="40.0" x="484.99998256564174" y="157.99999764561656"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-C71F4356-68C7-4E5C-9AD0-2F2ACD796829" id="BPMNShape_sid-C71F4356-68C7-4E5C-9AD0-2F2ACD796829">
<omgdc:Bounds height="28.0" width="28.0" x="490.9999737590558" y="339.9999908506872"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-8824C6EA-B026-4036-A181-441778B6147E" id="BPMNShape_sid-8824C6EA-B026-4036-A181-441778B6147E">
<omgdc:Bounds height="80.0" width="100.0" x="989.0" y="138.0"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-A02D8A91-1279-45E6-9C4F-9E09588AE499" id="BPMNShape_sid-A02D8A91-1279-45E6-9C4F-9E09588AE499">
<omgdc:Bounds height="80.0" width="100.0" x="989.0" y="313.9999908506872"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-94002D28-A952-4C2D-B37E-4719A1A74A41" id="BPMNShape_sid-94002D28-A952-4C2D-B37E-4719A1A74A41">
<omgdc:Bounds height="40.0" width="40.0" x="1019.0" y="480.0"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-D40FB894-A322-493D-A6A4-B85BA3B6B3F8" id="BPMNShape_sid-D40FB894-A322-493D-A6A4-B85BA3B6B3F8">
<omgdc:Bounds height="80.0" width="100.0" x="988.9999705255041" y="614.9999633431452"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-22A65B44-C288-4E02-96F4-8855F7DF5DD8" id="BPMNShape_sid-22A65B44-C288-4E02-96F4-8855F7DF5DD8">
<omgdc:Bounds height="40.0" width="40.0" x="1019.0" y="781.0"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-86153686-27CF-4D84-9DD0-9FC726BF9616" id="BPMNShape_sid-86153686-27CF-4D84-9DD0-9FC726BF9616">
<omgdc:Bounds height="28.0" width="28.0" x="1630.0" y="163.9999958872796"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-634A64F5-AA48-450B-ADC3-DABD2867D79F" id="BPMNShape_sid-634A64F5-AA48-450B-ADC3-DABD2867D79F">
<omgdc:Bounds height="80.0" width="100.0" x="1154.9999311566385" y="137.99999588727962"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNEdge bpmnElement="sid-5E5C9E59-2CAA-49CA-BB0F-E354F21A3EA1" id="BPMNEdge_sid-5E5C9E59-2CAA-49CA-BB0F-E354F21A3EA1" flowable:sourceDockerX="20.0" flowable:sourceDockerY="20.0" flowable:targetDockerX="50.0" flowable:targetDockerY="40.0">
<omgdi:waypoint x="1058.9406862744872" y="500.0"/>
<omgdi:waypoint x="1146.0" y="500.0"/>
<omgdi:waypoint x="1146.0" y="178.0"/>
<omgdi:waypoint x="1088.9499999999484" y="178.0"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-82079FF2-7E9E-4346-ABA0-F0A3192A926C" id="BPMNEdge_sid-82079FF2-7E9E-4346-ABA0-F0A3192A926C" flowable:sourceDockerX="50.0" flowable:sourceDockerY="40.0" flowable:targetDockerX="14.0" flowable:targetDockerY="14.0">
<omgdi:waypoint x="1579.9499997253004" y="177.99999819617528"/>
<omgdi:waypoint x="1630.0" y="177.9999963905467"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-AD570CDA-9A3F-468F-8957-0F53BC15099F" id="BPMNEdge_sid-AD570CDA-9A3F-468F-8957-0F53BC15099F" flowable:sourceDockerX="20.0" flowable:sourceDockerY="20.0" flowable:targetDockerX="14.0" flowable:targetDockerY="14.0">
<omgdi:waypoint x="504.99998156489335" y="197.94433424756454"/>
<omgdi:waypoint x="504.9999737590558" y="339.9999908506872"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-C671C812-418F-4B9E-B715-53AA7569B3CC" id="BPMNEdge_sid-C671C812-418F-4B9E-B715-53AA7569B3CC" flowable:sourceDockerX="49.99999999999994" flowable:sourceDockerY="40.0" flowable:targetDockerX="50.0" flowable:targetDockerY="40.0">
<omgdi:waypoint x="849.9499768954831" y="177.99999349364185"/>
<omgdi:waypoint x="989.0" y="177.9999982791967"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-ABF52B6C-539C-4C2A-A924-2582FBE41D6E" id="BPMNEdge_sid-ABF52B6C-539C-4C2A-A924-2582FBE41D6E" flowable:sourceDockerX="50.0" flowable:sourceDockerY="40.0" flowable:targetDockerX="50.0" flowable:targetDockerY="40.0">
<omgdi:waypoint x="1254.9499311566194" y="177.99999588727962"/>
<omgdi:waypoint x="1319.9999213218723" y="177.99999588727962"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-21402F3B-82D3-4AC5-AC10-22E96A9BBAB3" id="BPMNEdge_sid-21402F3B-82D3-4AC5-AC10-22E96A9BBAB3" flowable:sourceDockerX="50.0" flowable:sourceDockerY="40.0" flowable:targetDockerX="20.0" flowable:targetDockerY="20.0">
<omgdi:waypoint x="279.9499932360849" y="177.99999620665756"/>
<omgdi:waypoint x="484.99997932164285" y="177.99999751773748"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-B9C24E48-8A3C-47FF-A25E-1375565BCE70" id="BPMNEdge_sid-B9C24E48-8A3C-47FF-A25E-1375565BCE70" flowable:sourceDockerX="50.0" flowable:sourceDockerY="40.0" flowable:targetDockerX="50.0" flowable:targetDockerY="40.0">
<omgdi:waypoint x="1039.0" y="217.95000000000002"/>
<omgdi:waypoint x="1039.0" y="313.9999908506872"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-3DD7119F-6959-4D03-A3FB-245D03972138" id="BPMNEdge_sid-3DD7119F-6959-4D03-A3FB-245D03972138" flowable:sourceDockerX="50.0" flowable:sourceDockerY="40.0" flowable:targetDockerX="50.0" flowable:targetDockerY="40.0">
<omgdi:waypoint x="1419.9499205510037" y="177.99999717121887"/>
<omgdi:waypoint x="1479.999999462276" y="177.9999987147755"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-256BF981-A29B-4854-AE10-3DE854A23530" id="BPMNEdge_sid-256BF981-A29B-4854-AE10-3DE854A23530" flowable:sourceDockerX="20.0" flowable:sourceDockerY="20.0" flowable:targetDockerX="50.0" flowable:targetDockerY="40.0">
<omgdi:waypoint x="1038.999996196839" y="519.9435724538437"/>
<omgdi:waypoint x="1038.9999781223196" y="614.9999633431452"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-C4C13992-4B53-44AC-A1E2-F34072B04703" id="BPMNEdge_sid-C4C13992-4B53-44AC-A1E2-F34072B04703" flowable:sourceDockerX="50.0" flowable:sourceDockerY="40.0" flowable:targetDockerX="20.0" flowable:targetDockerY="20.0">
<omgdi:waypoint x="1039.0" y="393.9499908506872"/>
<omgdi:waypoint x="1039.0" y="480.0"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-5E2A112D-AA06-4BFC-85A8-11686CB4A3DC" id="BPMNEdge_sid-5E2A112D-AA06-4BFC-85A8-11686CB4A3DC" flowable:sourceDockerX="20.0" flowable:sourceDockerY="20.0" flowable:targetDockerX="50.0" flowable:targetDockerY="40.0">
<omgdi:waypoint x="1019.0" y="801.0"/>
<omgdi:waypoint x="913.0" y="801.0"/>
<omgdi:waypoint x="913.0" y="353.0"/>
<omgdi:waypoint x="989.0" y="353.6031690845415"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-EB1E36E4-0CD2-456E-8C60-A668F30BA073" id="BPMNEdge_sid-EB1E36E4-0CD2-456E-8C60-A668F30BA073" flowable:sourceDockerX="20.0" flowable:sourceDockerY="20.0" flowable:targetDockerX="49.99999999999994" flowable:targetDockerY="40.0">
<omgdi:waypoint x="524.9466027523281" y="177.99999724757885"/>
<omgdi:waypoint x="749.9999756981464" y="177.99999276865873"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-2EA6B518-8E0F-4CC7-8D3F-65C5775835FD" id="BPMNEdge_sid-2EA6B518-8E0F-4CC7-8D3F-65C5775835FD" flowable:sourceDockerX="50.0" flowable:sourceDockerY="40.0" flowable:targetDockerX="20.0" flowable:targetDockerY="20.0">
<omgdi:waypoint x="1038.9999785906125" y="694.9499633431451"/>
<omgdi:waypoint x="1038.9999959623997" y="781.0"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-B021640E-BB45-4FED-8C14-B5E628CD016C" id="BPMNEdge_sid-B021640E-BB45-4FED-8C14-B5E628CD016C" flowable:sourceDockerX="20.0" flowable:sourceDockerY="20.0" flowable:targetDockerX="50.0" flowable:targetDockerY="40.0">
<omgdi:waypoint x="1058.943958207147" y="801.0"/>
<omgdi:waypoint x="1204.0" y="801.0"/>
<omgdi:waypoint x="1204.9357301197178" y="217.94999588727964"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-890E1DE0-157D-4A6C-88C3-A51E91658B82" id="BPMNEdge_sid-890E1DE0-157D-4A6C-88C3-A51E91658B82" flowable:sourceDockerX="15.0" flowable:sourceDockerY="15.0" flowable:targetDockerX="50.0" flowable:targetDockerY="40.0">
<omgdi:waypoint x="29.949999604612593" y="177.99999971306602"/>
<omgdi:waypoint x="179.99999443187767" y="177.9999968427698"/>
</bpmndi:BPMNEdge>
</bpmndi:BPMNPlane>
</bpmndi:BPMNDiagram>
</definitions>`,`<definitions xmlns="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:flowable="http://flowable.org/bpmn" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:omgdc="http://www.omg.org/spec/DD/20100524/DC" xmlns:omgdi="http://www.omg.org/spec/DD/20100524/DI" typeLanguage="http://www.w3.org/2001/XMLSchema" expressionLanguage="http://www.w3.org/1999/XPath" targetNamespace="http://www.flowable.org/processdef" exporter="Flowable Open Source Modeler" exporterVersion="6.8.0">
<process id="DIGITAL-ONBOARDING-TEST" name="DIGITAL-ONBOARDING-TEST" isExecutable="true">
<startEvent id="startEvent1" flowable:formKey="OnBoardingAgenceChoose" flowable:formFieldValidation="true"/>
<userTask id="sid-59358794-33E7-4D8A-8D83-2860EC87274C" name="Personal Info" flowable:formKey="OnBoardingPeronalInformation" flowable:formFieldValidation="true"/>
<userTask id="sid-F0B05142-24B5-4FDC-AA2E-EFA554132E35" name="Contact Details" flowable:formKey="OnBoardingContactDetails" flowable:formFieldValidation="true"/>
<userTask id="sid-283D9CE2-6F40-4B7E-8CBF-F039321A84E0" name="Professional Information" flowable:formKey="OnBoardingProfessionelleInformation" flowable:formFieldValidation="true"/>
<userTask id="sid-1CD1F402-BDA6-4664-AD76-4623260A5EAE" name="Package info" flowable:formKey="OnBoardingPackageDetails" flowable:formFieldValidation="true"/>
<userTask id="sid-E4BC0291-7F85-464C-88F8-C240717D2F18" name="Overview" flowable:formKey="OnBoardingOverview" flowable:formFieldValidation="true"/>
<userTask id="sid-E4B27FA5-F15B-4504-9855-0B30712C8350" name="Upload Files" flowable:formKey="OnBoardingUploadFiles" flowable:formFieldValidation="true"/>
<endEvent id="sid-AE48F376-6414-43C2-AA28-7A3B163010E0"/>
<sequenceFlow id="sid-C62B7BF3-0314-4000-AFCC-36AAB09809B8" sourceRef="sid-E4B27FA5-F15B-4504-9855-0B30712C8350" targetRef="sid-AE48F376-6414-43C2-AA28-7A3B163010E0"/>
<sequenceFlow id="sid-C6762800-17D2-475F-8982-143E0A289961" sourceRef="sid-59358794-33E7-4D8A-8D83-2860EC87274C" targetRef="sid-F0B05142-24B5-4FDC-AA2E-EFA554132E35"/>
<sequenceFlow id="sid-51A34B07-B43B-404E-BE83-F0CB315ED554" sourceRef="sid-F0B05142-24B5-4FDC-AA2E-EFA554132E35" targetRef="sid-283D9CE2-6F40-4B7E-8CBF-F039321A84E0"/>
<sequenceFlow id="sid-EF96E2D0-24B9-4366-BDBA-139F86FA1251" sourceRef="sid-283D9CE2-6F40-4B7E-8CBF-F039321A84E0" targetRef="sid-1CD1F402-BDA6-4664-AD76-4623260A5EAE"/>
<sequenceFlow id="sid-BC0AD36C-984D-445A-9ECA-8425B7CFDAA0" sourceRef="sid-1CD1F402-BDA6-4664-AD76-4623260A5EAE" targetRef="sid-E4BC0291-7F85-464C-88F8-C240717D2F18"/>
<sequenceFlow id="sid-696F5C59-7429-4910-A825-ACB73BB64E73" sourceRef="sid-E4BC0291-7F85-464C-88F8-C240717D2F18" targetRef="sid-E4B27FA5-F15B-4504-9855-0B30712C8350"/>
<sequenceFlow id="sid-8BCDA330-C501-4011-9115-B9CA7A3DB45E" sourceRef="startEvent1" targetRef="sid-59358794-33E7-4D8A-8D83-2860EC87274C"/>
</process>
<bpmndi:BPMNDiagram id="BPMNDiagram_DIGITAL-ONBOARDING-TEST">
<bpmndi:BPMNPlane bpmnElement="DIGITAL-ONBOARDING-TEST" id="BPMNPlane_DIGITAL-ONBOARDING-TEST">
<bpmndi:BPMNShape bpmnElement="startEvent1" id="BPMNShape_startEvent1">
<omgdc:Bounds height="30.0" width="30.0" x="90.0" y="210.0"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-59358794-33E7-4D8A-8D83-2860EC87274C" id="BPMNShape_sid-59358794-33E7-4D8A-8D83-2860EC87274C">
<omgdc:Bounds height="80.0" width="100.0" x="225.0" y="185.0"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-F0B05142-24B5-4FDC-AA2E-EFA554132E35" id="BPMNShape_sid-F0B05142-24B5-4FDC-AA2E-EFA554132E35">
<omgdc:Bounds height="80.0" width="100.0" x="405.0" y="185.0"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-283D9CE2-6F40-4B7E-8CBF-F039321A84E0" id="BPMNShape_sid-283D9CE2-6F40-4B7E-8CBF-F039321A84E0">
<omgdc:Bounds height="80.0" width="100.0" x="570.0" y="185.0"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-1CD1F402-BDA6-4664-AD76-4623260A5EAE" id="BPMNShape_sid-1CD1F402-BDA6-4664-AD76-4623260A5EAE">
<omgdc:Bounds height="80.0" width="100.0" x="735.0" y="185.0"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-E4BC0291-7F85-464C-88F8-C240717D2F18" id="BPMNShape_sid-E4BC0291-7F85-464C-88F8-C240717D2F18">
<omgdc:Bounds height="80.0" width="100.0" x="885.0" y="185.0"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-E4B27FA5-F15B-4504-9855-0B30712C8350" id="BPMNShape_sid-E4B27FA5-F15B-4504-9855-0B30712C8350">
<omgdc:Bounds height="80.0" width="100.0" x="1035.0" y="185.0"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-AE48F376-6414-43C2-AA28-7A3B163010E0" id="BPMNShape_sid-AE48F376-6414-43C2-AA28-7A3B163010E0">
<omgdc:Bounds height="28.0" width="28.0" x="1238.5" y="211.0"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNEdge bpmnElement="sid-8BCDA330-C501-4011-9115-B9CA7A3DB45E" id="BPMNEdge_sid-8BCDA330-C501-4011-9115-B9CA7A3DB45E" flowable:sourceDockerX="15.0" flowable:sourceDockerY="15.0" flowable:targetDockerX="50.0" flowable:targetDockerY="40.0">
<omgdi:waypoint x="119.94999936756076" y="225.0"/>
<omgdi:waypoint x="224.9999999999356" y="225.0"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-51A34B07-B43B-404E-BE83-F0CB315ED554" id="BPMNEdge_sid-51A34B07-B43B-404E-BE83-F0CB315ED554" flowable:sourceDockerX="50.0" flowable:sourceDockerY="40.0" flowable:targetDockerX="50.0" flowable:targetDockerY="40.0">
<omgdi:waypoint x="504.9499999998897" y="225.0"/>
<omgdi:waypoint x="570.0" y="225.0"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-C62B7BF3-0314-4000-AFCC-36AAB09809B8" id="BPMNEdge_sid-C62B7BF3-0314-4000-AFCC-36AAB09809B8" flowable:sourceDockerX="50.0" flowable:sourceDockerY="40.0" flowable:targetDockerX="14.0" flowable:targetDockerY="14.0">
<omgdi:waypoint x="1134.95" y="225.0"/>
<omgdi:waypoint x="1238.5" y="225.0"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-BC0AD36C-984D-445A-9ECA-8425B7CFDAA0" id="BPMNEdge_sid-BC0AD36C-984D-445A-9ECA-8425B7CFDAA0" flowable:sourceDockerX="50.0" flowable:sourceDockerY="40.0" flowable:targetDockerX="50.0" flowable:targetDockerY="40.0">
<omgdi:waypoint x="834.9499999999999" y="225.0"/>
<omgdi:waypoint x="885.0" y="225.0"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-696F5C59-7429-4910-A825-ACB73BB64E73" id="BPMNEdge_sid-696F5C59-7429-4910-A825-ACB73BB64E73" flowable:sourceDockerX="50.0" flowable:sourceDockerY="40.0" flowable:targetDockerX="50.0" flowable:targetDockerY="40.0">
<omgdi:waypoint x="984.9499999999999" y="225.0"/>
<omgdi:waypoint x="1035.0" y="225.0"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-C6762800-17D2-475F-8982-143E0A289961" id="BPMNEdge_sid-C6762800-17D2-475F-8982-143E0A289961" flowable:sourceDockerX="50.0" flowable:sourceDockerY="40.0" flowable:targetDockerX="50.0" flowable:targetDockerY="40.0">
<omgdi:waypoint x="324.9499999999431" y="225.0"/>
<omgdi:waypoint x="404.99999999997226" y="225.0"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-EF96E2D0-24B9-4366-BDBA-139F86FA1251" id="BPMNEdge_sid-EF96E2D0-24B9-4366-BDBA-139F86FA1251" flowable:sourceDockerX="50.0" flowable:sourceDockerY="40.0" flowable:targetDockerX="50.0" flowable:targetDockerY="40.0">
<omgdi:waypoint x="669.9499999998898" y="225.0"/>
<omgdi:waypoint x="735.0" y="225.0"/>
</bpmndi:BPMNEdge>
</bpmndi:BPMNPlane>
</bpmndi:BPMNDiagram>
</definitions>`,`<definitions xmlns="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:flowable="http://flowable.org/bpmn" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:omgdc="http://www.omg.org/spec/DD/20100524/DC" xmlns:omgdi="http://www.omg.org/spec/DD/20100524/DI" typeLanguage="http://www.w3.org/2001/XMLSchema" expressionLanguage="http://www.w3.org/1999/XPath" targetNamespace="http://www.flowable.org/processdef" exporter="Flowable Open Source Modeler" exporterVersion="6.8.0">
<process id="APPLY-FOR-CREDIT" name="APPLY-FOR-CREDIT" isExecutable="true">
<startEvent id="startEvent1" flowable:formKey="OnBoardingAgenceChoose" flowable:formFieldValidation="true">
<extensionElements>
<flowable:executionListener event="start" />
<flowable:executionListener event="start" />
<flowable:executionListener event="start" />
<flowable:executionListener event="start" />
<flowable:executionListener event="start" />
</extensionElements>
</startEvent>
<userTask id="sid-8A4D881D-399B-4EE0-9259-47C02818ADF0" name="Authentication (E-Mail OR SMS)" flowable:formKey="ContactUs" flowable:formFieldValidation="true"/>
<userTask id="sid-2078C253-A074-4B66-903F-2D3CAFDCE38C" name="Simulation" flowable:formKey="ContactUs" flowable:formFieldValidation="true"/>
<userTask id="sid-0B0E4CBC-F0C3-408C-B727-09BAC4C561B9" name="Confirmation" flowable:formKey="ContactUs" flowable:formFieldValidation="true"/>
<sequenceFlow id="sid-3DD7119F-6959-4D03-A3FB-245D03972138" sourceRef="sid-2078C253-A074-4B66-903F-2D3CAFDCE38C" targetRef="sid-0B0E4CBC-F0C3-408C-B727-09BAC4C561B9"/>
<serviceTask id="sid-4C34B192-DB08-4FCC-A146-02DB4FCCF6D6" name="Check Credentials Validity" />
<exclusiveGateway id="sid-8DC96BB1-1051-4A68-9D89-EF7D069BA2EC"/>
<endEvent id="sid-C71F4356-68C7-4E5C-9AD0-2F2ACD796829"/>
<serviceTask id="sid-8824C6EA-B026-4036-A181-441778B6147E" name="Send OTP" />
<userTask id="sid-A02D8A91-1279-45E6-9C4F-9E09588AE499" name="OTP Form" flowable:formKey="Subscription-Otp-Step" flowable:formFieldValidation="true"/>
<exclusiveGateway id="sid-94002D28-A952-4C2D-B37E-4719A1A74A41"/>
<serviceTask id="sid-D40FB894-A322-493D-A6A4-B85BA3B6B3F8" name="Check OTP" />
<sequenceFlow id="sid-256BF981-A29B-4854-AE10-3DE854A23530" sourceRef="sid-94002D28-A952-4C2D-B37E-4719A1A74A41" targetRef="sid-D40FB894-A322-493D-A6A4-B85BA3B6B3F8"/>
<exclusiveGateway id="sid-22A65B44-C288-4E02-96F4-8855F7DF5DD8"/>
<endEvent id="sid-86153686-27CF-4D84-9DD0-9FC726BF9616"/>
<sequenceFlow id="sid-82079FF2-7E9E-4346-ABA0-F0A3192A926C" sourceRef="sid-0B0E4CBC-F0C3-408C-B727-09BAC4C561B9" targetRef="sid-86153686-27CF-4D84-9DD0-9FC726BF9616"/>
<sequenceFlow id="sid-21402F3B-82D3-4AC5-AC10-22E96A9BBAB3" sourceRef="sid-4C34B192-DB08-4FCC-A146-02DB4FCCF6D6" targetRef="sid-8DC96BB1-1051-4A68-9D89-EF7D069BA2EC"/>
<userTask id="sid-634A64F5-AA48-450B-ADC3-DABD2867D79F" name="Choice Of Credit" flowable:formKey="ContactUs" flowable:formFieldValidation="true"/>
<sequenceFlow id="sid-ABF52B6C-539C-4C2A-A924-2582FBE41D6E" sourceRef="sid-634A64F5-AA48-450B-ADC3-DABD2867D79F" targetRef="sid-2078C253-A074-4B66-903F-2D3CAFDCE38C"/>
<sequenceFlow id="sid-2EA6B518-8E0F-4CC7-8D3F-65C5775835FD" sourceRef="sid-D40FB894-A322-493D-A6A4-B85BA3B6B3F8" targetRef="sid-22A65B44-C288-4E02-96F4-8855F7DF5DD8"/>
<sequenceFlow id="sid-B9C24E48-8A3C-47FF-A25E-1375565BCE70" sourceRef="sid-8824C6EA-B026-4036-A181-441778B6147E" targetRef="sid-A02D8A91-1279-45E6-9C4F-9E09588AE499"/>
<sequenceFlow id="sid-C4C13992-4B53-44AC-A1E2-F34072B04703" sourceRef="sid-A02D8A91-1279-45E6-9C4F-9E09588AE499" targetRef="sid-94002D28-A952-4C2D-B37E-4719A1A74A41"/>
<sequenceFlow id="sid-EB1E36E4-0CD2-456E-8C60-A668F30BA073" name="Valid Credentials" sourceRef="sid-8DC96BB1-1051-4A68-9D89-EF7D069BA2EC" targetRef="sid-8A4D881D-399B-4EE0-9259-47C02818ADF0">
<conditionExpression xsi:type="tFormalExpression">

</conditionExpression>
</sequenceFlow>
<sequenceFlow id="sid-AD570CDA-9A3F-468F-8957-0F53BC15099F" name="Invalid Credentials" sourceRef="sid-8DC96BB1-1051-4A68-9D89-EF7D069BA2EC" targetRef="sid-C71F4356-68C7-4E5C-9AD0-2F2ACD796829">
<conditionExpression xsi:type="tFormalExpression">

</conditionExpression>
</sequenceFlow>
<sequenceFlow id="sid-5E5C9E59-2CAA-49CA-BB0F-E354F21A3EA1" name="Resend OTP" sourceRef="sid-94002D28-A952-4C2D-B37E-4719A1A74A41" targetRef="sid-8824C6EA-B026-4036-A181-441778B6147E">
<conditionExpression xsi:type="tFormalExpression">
</conditionExpression>
</sequenceFlow>
<sequenceFlow id="sid-B021640E-BB45-4FED-8C14-B5E628CD016C" name="Valid OTP" sourceRef="sid-22A65B44-C288-4E02-96F4-8855F7DF5DD8" targetRef="sid-634A64F5-AA48-450B-ADC3-DABD2867D79F">
<conditionExpression xsi:type="tFormalExpression">
</conditionExpression>
</sequenceFlow>
<sequenceFlow id="sid-5E2A112D-AA06-4BFC-85A8-11686CB4A3DC" name="Invalid OTP" sourceRef="sid-22A65B44-C288-4E02-96F4-8855F7DF5DD8" targetRef="sid-A02D8A91-1279-45E6-9C4F-9E09588AE499">
<conditionExpression xsi:type="tFormalExpression">
</conditionExpression>
</sequenceFlow>
<sequenceFlow id="sid-890E1DE0-157D-4A6C-88C3-A51E91658B82" sourceRef="startEvent1" targetRef="sid-4C34B192-DB08-4FCC-A146-02DB4FCCF6D6"/>
<sequenceFlow id="sid-C671C812-418F-4B9E-B715-53AA7569B3CC" sourceRef="sid-8A4D881D-399B-4EE0-9259-47C02818ADF0" targetRef="sid-8824C6EA-B026-4036-A181-441778B6147E"/>
</process>
<bpmndi:BPMNDiagram id="BPMNDiagram_APPLY-FOR-CREDIT">
<bpmndi:BPMNPlane bpmnElement="APPLY-FOR-CREDIT" id="BPMNPlane_APPLY-FOR-CREDIT">
<bpmndi:BPMNShape bpmnElement="startEvent1" id="BPMNShape_startEvent1">
<omgdc:Bounds height="30.0" width="30.0" x="0.0" y="163.0"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-8A4D881D-399B-4EE0-9259-47C02818ADF0" id="BPMNShape_sid-8A4D881D-399B-4EE0-9259-47C02818ADF0">
<omgdc:Bounds height="80.0" width="99.99999999999989" x="749.9999776482589" y="137.99999177455936"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-2078C253-A074-4B66-903F-2D3CAFDCE38C" id="BPMNShape_sid-2078C253-A074-4B66-903F-2D3CAFDCE38C">
<omgdc:Bounds height="80.0" width="100.0" x="1319.9999213218723" y="137.99999588727962"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-0B0E4CBC-F0C3-408C-B727-09BAC4C561B9" id="BPMNShape_sid-0B0E4CBC-F0C3-408C-B727-09BAC4C561B9">
<omgdc:Bounds height="80.0" width="100.0" x="1480.0" y="138.0"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-4C34B192-DB08-4FCC-A146-02DB4FCCF6D6" id="BPMNShape_sid-4C34B192-DB08-4FCC-A146-02DB4FCCF6D6">
<omgdc:Bounds height="80.0" width="100.0" x="179.99999463558214" y="137.99999588727962"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-8DC96BB1-1051-4A68-9D89-EF7D069BA2EC" id="BPMNShape_sid-8DC96BB1-1051-4A68-9D89-EF7D069BA2EC">
<omgdc:Bounds height="40.0" width="40.0" x="484.99998256564174" y="157.99999764561656"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-C71F4356-68C7-4E5C-9AD0-2F2ACD796829" id="BPMNShape_sid-C71F4356-68C7-4E5C-9AD0-2F2ACD796829">
<omgdc:Bounds height="28.0" width="28.0" x="490.9999737590558" y="339.9999908506872"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-8824C6EA-B026-4036-A181-441778B6147E" id="BPMNShape_sid-8824C6EA-B026-4036-A181-441778B6147E">
<omgdc:Bounds height="80.0" width="100.0" x="989.0" y="138.0"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-A02D8A91-1279-45E6-9C4F-9E09588AE499" id="BPMNShape_sid-A02D8A91-1279-45E6-9C4F-9E09588AE499">
<omgdc:Bounds height="80.0" width="100.0" x="989.0" y="313.9999908506872"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-94002D28-A952-4C2D-B37E-4719A1A74A41" id="BPMNShape_sid-94002D28-A952-4C2D-B37E-4719A1A74A41">
<omgdc:Bounds height="40.0" width="40.0" x="1019.0" y="480.0"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-D40FB894-A322-493D-A6A4-B85BA3B6B3F8" id="BPMNShape_sid-D40FB894-A322-493D-A6A4-B85BA3B6B3F8">
<omgdc:Bounds height="80.0" width="100.0" x="988.9999705255041" y="614.9999633431452"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-22A65B44-C288-4E02-96F4-8855F7DF5DD8" id="BPMNShape_sid-22A65B44-C288-4E02-96F4-8855F7DF5DD8">
<omgdc:Bounds height="40.0" width="40.0" x="1019.0" y="781.0"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-86153686-27CF-4D84-9DD0-9FC726BF9616" id="BPMNShape_sid-86153686-27CF-4D84-9DD0-9FC726BF9616">
<omgdc:Bounds height="28.0" width="28.0" x="1630.0" y="163.9999958872796"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-634A64F5-AA48-450B-ADC3-DABD2867D79F" id="BPMNShape_sid-634A64F5-AA48-450B-ADC3-DABD2867D79F">
<omgdc:Bounds height="80.0" width="100.0" x="1154.9999311566385" y="137.99999588727962"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNEdge bpmnElement="sid-5E5C9E59-2CAA-49CA-BB0F-E354F21A3EA1" id="BPMNEdge_sid-5E5C9E59-2CAA-49CA-BB0F-E354F21A3EA1" flowable:sourceDockerX="20.0" flowable:sourceDockerY="20.0" flowable:targetDockerX="50.0" flowable:targetDockerY="40.0">
<omgdi:waypoint x="1058.848025092937" y="500.09279069767433"/>
<omgdi:waypoint x="1146.0" y="500.5"/>
<omgdi:waypoint x="1146.0" y="178.0"/>
<omgdi:waypoint x="1088.9499999999484" y="178.0"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-82079FF2-7E9E-4346-ABA0-F0A3192A926C" id="BPMNEdge_sid-82079FF2-7E9E-4346-ABA0-F0A3192A926C" flowable:sourceDockerX="50.0" flowable:sourceDockerY="40.0" flowable:targetDockerX="14.0" flowable:targetDockerY="14.0">
<omgdi:waypoint x="1579.9499997253004" y="177.99999819617528"/>
<omgdi:waypoint x="1630.0" y="177.9999963905467"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-AD570CDA-9A3F-468F-8957-0F53BC15099F" id="BPMNEdge_sid-AD570CDA-9A3F-468F-8957-0F53BC15099F" flowable:sourceDockerX="20.0" flowable:sourceDockerY="20.0" flowable:targetDockerX="14.0" flowable:targetDockerY="14.0">
<omgdi:waypoint x="504.99998156489335" y="197.94433424756454"/>
<omgdi:waypoint x="504.9999737590558" y="339.9999908506872"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-C671C812-418F-4B9E-B715-53AA7569B3CC" id="BPMNEdge_sid-C671C812-418F-4B9E-B715-53AA7569B3CC" flowable:sourceDockerX="49.99999999999994" flowable:sourceDockerY="40.0" flowable:targetDockerX="50.0" flowable:targetDockerY="40.0">
<omgdi:waypoint x="849.9499768954831" y="177.99999349364185"/>
<omgdi:waypoint x="989.0" y="177.9999982791967"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-ABF52B6C-539C-4C2A-A924-2582FBE41D6E" id="BPMNEdge_sid-ABF52B6C-539C-4C2A-A924-2582FBE41D6E" flowable:sourceDockerX="50.0" flowable:sourceDockerY="40.0" flowable:targetDockerX="50.0" flowable:targetDockerY="40.0">
<omgdi:waypoint x="1254.9499311566194" y="177.99999588727962"/>
<omgdi:waypoint x="1319.9999213218723" y="177.99999588727962"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-21402F3B-82D3-4AC5-AC10-22E96A9BBAB3" id="BPMNEdge_sid-21402F3B-82D3-4AC5-AC10-22E96A9BBAB3" flowable:sourceDockerX="50.0" flowable:sourceDockerY="40.0" flowable:targetDockerX="20.0" flowable:targetDockerY="20.0">
<omgdi:waypoint x="279.9499932360849" y="177.99999620665756"/>
<omgdi:waypoint x="484.99997932164285" y="177.99999751773748"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-B9C24E48-8A3C-47FF-A25E-1375565BCE70" id="BPMNEdge_sid-B9C24E48-8A3C-47FF-A25E-1375565BCE70" flowable:sourceDockerX="50.0" flowable:sourceDockerY="40.0" flowable:targetDockerX="50.0" flowable:targetDockerY="40.0">
<omgdi:waypoint x="1039.0" y="217.95000000000002"/>
<omgdi:waypoint x="1039.0" y="313.9999908506872"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-3DD7119F-6959-4D03-A3FB-245D03972138" id="BPMNEdge_sid-3DD7119F-6959-4D03-A3FB-245D03972138" flowable:sourceDockerX="50.0" flowable:sourceDockerY="40.0" flowable:targetDockerX="50.0" flowable:targetDockerY="40.0">
<omgdi:waypoint x="1419.9499205510037" y="177.99999717121887"/>
<omgdi:waypoint x="1479.999999462276" y="177.9999987147755"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-256BF981-A29B-4854-AE10-3DE854A23530" id="BPMNEdge_sid-256BF981-A29B-4854-AE10-3DE854A23530" flowable:sourceDockerX="20.0" flowable:sourceDockerY="20.0" flowable:targetDockerX="50.0" flowable:targetDockerY="40.0">
<omgdi:waypoint x="1038.999996196839" y="519.9435724538437"/>
<omgdi:waypoint x="1038.9999781223196" y="614.9999633431452"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-C4C13992-4B53-44AC-A1E2-F34072B04703" id="BPMNEdge_sid-C4C13992-4B53-44AC-A1E2-F34072B04703" flowable:sourceDockerX="50.0" flowable:sourceDockerY="40.0" flowable:targetDockerX="20.0" flowable:targetDockerY="20.0">
<omgdi:waypoint x="1039.0" y="393.9499908506872"/>
<omgdi:waypoint x="1039.0" y="480.0"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-5E2A112D-AA06-4BFC-85A8-11686CB4A3DC" id="BPMNEdge_sid-5E2A112D-AA06-4BFC-85A8-11686CB4A3DC" flowable:sourceDockerX="20.0" flowable:sourceDockerY="20.0" flowable:targetDockerX="50.0" flowable:targetDockerY="40.0">
<omgdi:waypoint x="1019.0790513833899" y="801.0788537549407"/>
<omgdi:waypoint x="913.0" y="801.5"/>
<omgdi:waypoint x="913.0" y="353.9999908506872"/>
<omgdi:waypoint x="989.0" y="353.9999908506872"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-EB1E36E4-0CD2-456E-8C60-A668F30BA073" id="BPMNEdge_sid-EB1E36E4-0CD2-456E-8C60-A668F30BA073" flowable:sourceDockerX="20.0" flowable:sourceDockerY="20.0" flowable:targetDockerX="49.99999999999994" flowable:targetDockerY="40.0">
<omgdi:waypoint x="524.9466027523281" y="177.99999724757885"/>
<omgdi:waypoint x="749.9999756981464" y="177.99999276865873"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-2EA6B518-8E0F-4CC7-8D3F-65C5775835FD" id="BPMNEdge_sid-2EA6B518-8E0F-4CC7-8D3F-65C5775835FD" flowable:sourceDockerX="50.0" flowable:sourceDockerY="40.0" flowable:targetDockerX="20.0" flowable:targetDockerY="20.0">
<omgdi:waypoint x="1038.9999785906125" y="694.9499633431451"/>
<omgdi:waypoint x="1038.9999959623997" y="781.0"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-B021640E-BB45-4FED-8C14-B5E628CD016C" id="BPMNEdge_sid-B021640E-BB45-4FED-8C14-B5E628CD016C" flowable:sourceDockerX="20.0" flowable:sourceDockerY="20.0" flowable:targetDockerX="50.0" flowable:targetDockerY="40.0">
<omgdi:waypoint x="1058.8841386282463" y="801.0599099346812"/>
<omgdi:waypoint x="1204.9999311566385" y="801.5"/>
<omgdi:waypoint x="1204.9999311566385" y="217.94999588727964"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-890E1DE0-157D-4A6C-88C3-A51E91658B82" id="BPMNEdge_sid-890E1DE0-157D-4A6C-88C3-A51E91658B82" flowable:sourceDockerX="15.0" flowable:sourceDockerY="15.0" flowable:targetDockerX="50.0" flowable:targetDockerY="40.0">
<omgdi:waypoint x="29.949999604612593" y="177.99999971306602"/>
<omgdi:waypoint x="179.99999443187767" y="177.9999968427698"/>
</bpmndi:BPMNEdge>
</bpmndi:BPMNPlane>
</bpmndi:BPMNDiagram>
</definitions>`,`<definitions xmlns="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:flowable="http://flowable.org/bpmn" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:omgdc="http://www.omg.org/spec/DD/20100524/DC" xmlns:omgdi="http://www.omg.org/spec/DD/20100524/DI" typeLanguage="http://www.w3.org/2001/XMLSchema" expressionLanguage="http://www.w3.org/1999/XPath" targetNamespace="http://flowable.org/test" exporter="Flowable Open Source Modeler" exporterVersion="6.8.0">
<collaboration id="Collaboration">
<participant id="sid-B3DFECBB-EDEA-456E-B014-3200493301F5" name="DIGITAL SUBSCRIPTION" processRef="DIGITAL-SUBSCRIPTION"/>
</collaboration>
<process id="DIGITAL-SUBSCRIPTION" name="DIGITAL SUBSCRIPTION" isExecutable="true">
<laneSet id="laneSet_DIGITAL-SUBSCRIPTION">
<lane id="sid-01F0D8D0-7B41-4D1E-AA35-1062C6961F1C" name="Bankerise">
<flowNodeRef>startEvent1</flowNodeRef>
<flowNodeRef>sid-65A751F4-C159-4477-90B0-36F30694100A</flowNodeRef>
<flowNodeRef>sid-A17F3E98-9B8F-4EE1-92B8-2BDD9F395ABE</flowNodeRef>
<flowNodeRef>sid-DF6C8BC1-03F2-46AA-A441-2D43ABC7B478</flowNodeRef>
<flowNodeRef>sid-BD34BD39-100F-4469-8C6A-3C4F81A1CFAB</flowNodeRef>
<flowNodeRef>sid-9A0DFE37-144C-4B16-9DB8-1F3B0F533CC5</flowNodeRef>
<flowNodeRef>sid-9D281282-643D-4651-8DC5-CA58D0905888</flowNodeRef>
<flowNodeRef>sid-CB09F31E-8460-42F7-87C2-FF7ABC63D01F</flowNodeRef>
<flowNodeRef>sid-2CDD1281-4956-4A5F-B6BD-1F6DDDAE0FB9</flowNodeRef>
<flowNodeRef>sid-DC7EDF17-92D9-4C0E-8E7A-24715C517499</flowNodeRef>
<flowNodeRef>sid-689DA667-CEA4-49DF-A39D-AF123BBC846F</flowNodeRef>
<flowNodeRef>sid-E21CE175-9EFD-45BE-88B6-DE1BF332E267</flowNodeRef>
<flowNodeRef>sid-026F700C-83B0-42FD-8D09-74A1E43DFD60</flowNodeRef>
<flowNodeRef>sid-D014AF56-AA67-4B14-A510-C2B1BE50AB5C</flowNodeRef>
<flowNodeRef>sid-5776E820-0760-4150-9902-78C46A5D8815</flowNodeRef>
<flowNodeRef>sid-7590E614-788C-4EC3-B997-993C3730B205</flowNodeRef>
<flowNodeRef>sid-A83B5BA1-6E81-4859-8614-23A0F490B1E4</flowNodeRef>
<flowNodeRef>sid-638B812B-DACD-41DA-B2BF-74BC2D4D42E8</flowNodeRef>
<flowNodeRef>sid-0331E5F6-8FD4-4C04-A9FF-ABBC28740F15</flowNodeRef>
<flowNodeRef>sid-D6A09D2E-6CBD-45B7-A6A2-EF99B97D28A3</flowNodeRef>
<flowNodeRef>sid-E19CF8FB-ECA6-4857-A633-813D4036E092</flowNodeRef>
<flowNodeRef>sid-E217AC59-9CC8-4A9D-B1C9-D350D4A24324</flowNodeRef>
<flowNodeRef>sid-79E57737-4DCF-4A15-AA4A-0EE41B2D16D1</flowNodeRef>
<flowNodeRef>sid-C5B3099D-A3DD-4A05-93BD-6AE6C4A52234</flowNodeRef>
<flowNodeRef>sid-8C3AEFE5-17C1-4337-8043-53EEA3C7A502</flowNodeRef>
</lane>
<lane id="sid-12059E60-EB1C-442D-B1E9-3E44A1196F6B" name="BNA">
<flowNodeRef>sid-67B53CA6-E2ED-4B37-AABD-B6E540B8ABE7</flowNodeRef>
<flowNodeRef>sid-4A6BFBE0-993B-4BC6-8C95-3F6C8036EE0B</flowNodeRef>
<flowNodeRef>sid-65A134C5-547D-49EE-9A7F-A8234270D638</flowNodeRef>
<flowNodeRef>sid-567AE0B2-341D-4B88-A873-B6C8595CB634</flowNodeRef>
<flowNodeRef>sid-78960D36-CCDC-4F93-99D1-CB3DA21E65DE</flowNodeRef>
<flowNodeRef>sid-5DD469D9-0E8B-40F7-9837-36910456DC56</flowNodeRef>
<flowNodeRef>sid-6D5F7F40-F778-4D69-B042-F6177B5DEE00</flowNodeRef>
<flowNodeRef>sid-609E4D80-09F6-40CF-A524-8CECB39290E7</flowNodeRef>
<flowNodeRef>sid-0562280F-4F15-44DC-B44C-707FAAEF7E18</flowNodeRef>
<flowNodeRef>sid-7C964429-1FC6-4B5E-8F04-B5539B6EE09E</flowNodeRef>
<flowNodeRef>sid-8572B97A-4653-4A84-9210-F0C69E482DF9</flowNodeRef>
<flowNodeRef>sid-CFC467A7-4593-4AFA-BDFF-F5A81B334864</flowNodeRef>
<flowNodeRef>sid-4AE93A9D-3455-4ECF-A95D-7EE27A6210F8</flowNodeRef>
<flowNodeRef>sid-14FBC7E1-5060-4819-B5C5-FE65772FEA36</flowNodeRef>
</lane>
</laneSet>
<startEvent id="startEvent1" name="Personal Information" flowable:formKey="Subscription-Personal-Info-Step" flowable:formFieldValidation="true">
<extensionElements>
<flowable:executionListener event="start"/>
</extensionElements>
</startEvent>
<userTask id="sid-65A751F4-C159-4477-90B0-36F30694100A" name="OTP FORM" flowable:assignee="$INITIATOR" flowable:formKey="Subscription-Otp-Step" flowable:formFieldValidation="true">
<extensionElements>
<modeler:initiator-can-complete xmlns:modeler="http://flowable.org/modeler">
<![CDATA[ true ]]>
</modeler:initiator-can-complete>
</extensionElements>
</userTask>
<exclusiveGateway id="sid-A17F3E98-9B8F-4EE1-92B8-2BDD9F395ABE" default="sid-5776E820-0760-4150-9902-78C46A5D8815"/>
<userTask id="sid-DF6C8BC1-03F2-46AA-A441-2D43ABC7B478" name="Role Selection Bundles" flowable:assignee="$INITIATOR" flowable:formKey="Subscription-Role-Step" flowable:formFieldValidation="true">
<extensionElements>
<modeler:initiator-can-complete xmlns:modeler="http://flowable.org/modeler">
<![CDATA[ true ]]>
</modeler:initiator-can-complete>
</extensionElements>
</userTask>
<serviceTask id="sid-BD34BD39-100F-4469-8C6A-3C4F81A1CFAB" name="Prepare Roles-Bundles" />
<userTask id="sid-9A0DFE37-144C-4B16-9DB8-1F3B0F533CC5" name="Email Verification" flowable:assignee="$INITIATOR" flowable:formKey="Subscription-Email-Step" flowable:formFieldValidation="true">
<extensionElements>
<modeler:initiator-can-complete xmlns:modeler="http://flowable.org/modeler">
<![CDATA[ true ]]>
</modeler:initiator-can-complete>
</extensionElements>
</userTask>
<exclusiveGateway id="sid-9D281282-643D-4651-8DC5-CA58D0905888" default="sid-A83B5BA1-6E81-4859-8614-23A0F490B1E4"/>
<endEvent id="sid-CB09F31E-8460-42F7-87C2-FF7ABC63D01F"/>
<serviceTask id="sid-2CDD1281-4956-4A5F-B6BD-1F6DDDAE0FB9" name="Create Digital Account" />
<userTask id="sid-DC7EDF17-92D9-4C0E-8E7A-24715C517499" name="Personal Information" flowable:assignee="$INITIATOR" flowable:formKey="Subscription-Personal-Info-Step" flowable:formFieldValidation="true">
<extensionElements>
<modeler:initiator-can-complete xmlns:modeler="http://flowable.org/modeler">
<![CDATA[ true ]]>
</modeler:initiator-can-complete>
</extensionElements>
</userTask>
<exclusiveGateway id="sid-689DA667-CEA4-49DF-A39D-AF123BBC846F" default="sid-C5B3099D-A3DD-4A05-93BD-6AE6C4A52234"/>
<sequenceFlow id="sid-E21CE175-9EFD-45BE-88B6-DE1BF332E267" sourceRef="sid-65A751F4-C159-4477-90B0-36F30694100A" targetRef="sid-A17F3E98-9B8F-4EE1-92B8-2BDD9F395ABE"/>
<sequenceFlow id="sid-026F700C-83B0-42FD-8D09-74A1E43DFD60" sourceRef="sid-9A0DFE37-144C-4B16-9DB8-1F3B0F533CC5" targetRef="sid-9D281282-643D-4651-8DC5-CA58D0905888"/>
<sequenceFlow id="sid-D014AF56-AA67-4B14-A510-C2B1BE50AB5C" sourceRef="sid-BD34BD39-100F-4469-8C6A-3C4F81A1CFAB" targetRef="sid-DF6C8BC1-03F2-46AA-A441-2D43ABC7B478"/>
<sequenceFlow id="sid-5776E820-0760-4150-9902-78C46A5D8815" sourceRef="sid-A17F3E98-9B8F-4EE1-92B8-2BDD9F395ABE" targetRef="sid-567AE0B2-341D-4B88-A873-B6C8595CB634"/>
<sequenceFlow id="sid-7590E614-788C-4EC3-B997-993C3730B205" name="New Email" sourceRef="sid-9D281282-643D-4651-8DC5-CA58D0905888" targetRef="sid-5DD469D9-0E8B-40F7-9837-36910456DC56">
<conditionExpression xsi:type="tFormalExpression">
</conditionExpression>
</sequenceFlow>
<sequenceFlow id="sid-A83B5BA1-6E81-4859-8614-23A0F490B1E4" name="Same Email" sourceRef="sid-9D281282-643D-4651-8DC5-CA58D0905888" targetRef="sid-2CDD1281-4956-4A5F-B6BD-1F6DDDAE0FB9"/>
<sequenceFlow id="sid-638B812B-DACD-41DA-B2BF-74BC2D4D42E8" sourceRef="sid-2CDD1281-4956-4A5F-B6BD-1F6DDDAE0FB9" targetRef="sid-CB09F31E-8460-42F7-87C2-FF7ABC63D01F"/>
<sequenceFlow id="sid-0331E5F6-8FD4-4C04-A9FF-ABBC28740F15" name="ReSend OTP" sourceRef="sid-A17F3E98-9B8F-4EE1-92B8-2BDD9F395ABE" targetRef="sid-65A134C5-547D-49EE-9A7F-A8234270D638">
<conditionExpression xsi:type="tFormalExpression">
</conditionExpression>
</sequenceFlow>
<sequenceFlow id="sid-D6A09D2E-6CBD-45B7-A6A2-EF99B97D28A3" sourceRef="startEvent1" targetRef="sid-67B53CA6-E2ED-4B37-AABD-B6E540B8ABE7"/>
<sequenceFlow id="sid-E19CF8FB-ECA6-4857-A633-813D4036E092" sourceRef="sid-DC7EDF17-92D9-4C0E-8E7A-24715C517499" targetRef="sid-67B53CA6-E2ED-4B37-AABD-B6E540B8ABE7"/>
<sequenceFlow id="sid-E217AC59-9CC8-4A9D-B1C9-D350D4A24324" sourceRef="sid-DF6C8BC1-03F2-46AA-A441-2D43ABC7B478" targetRef="sid-689DA667-CEA4-49DF-A39D-AF123BBC846F"/>
<sequenceFlow id="sid-79E57737-4DCF-4A15-AA4A-0EE41B2D16D1" name="Previous" sourceRef="sid-689DA667-CEA4-49DF-A39D-AF123BBC846F" targetRef="sid-DC7EDF17-92D9-4C0E-8E7A-24715C517499">
<conditionExpression xsi:type="tFormalExpression">

</conditionExpression>
</sequenceFlow>
<sequenceFlow id="sid-C5B3099D-A3DD-4A05-93BD-6AE6C4A52234" sourceRef="sid-689DA667-CEA4-49DF-A39D-AF123BBC846F" targetRef="sid-65A134C5-547D-49EE-9A7F-A8234270D638"/>
<sequenceFlow id="sid-8C3AEFE5-17C1-4337-8043-53EEA3C7A502" name="Previous" sourceRef="sid-A17F3E98-9B8F-4EE1-92B8-2BDD9F395ABE" targetRef="sid-DF6C8BC1-03F2-46AA-A441-2D43ABC7B478">
<conditionExpression xsi:type="tFormalExpression">

</conditionExpression>
</sequenceFlow>
<serviceTask id="sid-67B53CA6-E2ED-4B37-AABD-B6E540B8ABE7" name="Check existance & get info" />
<exclusiveGateway id="sid-4A6BFBE0-993B-4BC6-8C95-3F6C8036EE0B" default="sid-4AE93A9D-3455-4ECF-A95D-7EE27A6210F8"/>
<serviceTask id="sid-65A134C5-547D-49EE-9A7F-A8234270D638" name="Send OTP" >
<extensionElements>
<flowable:executionListener event="start" />
</extensionElements>
</serviceTask>
<serviceTask id="sid-567AE0B2-341D-4B88-A873-B6C8595CB634" name="Check OTP" />
<exclusiveGateway id="sid-78960D36-CCDC-4F93-99D1-CB3DA21E65DE" default="sid-0562280F-4F15-44DC-B44C-707FAAEF7E18"/>
<serviceTask id="sid-5DD469D9-0E8B-40F7-9837-36910456DC56" name="Save Email in BNA" />
<sequenceFlow id="sid-6D5F7F40-F778-4D69-B042-F6177B5DEE00" sourceRef="sid-567AE0B2-341D-4B88-A873-B6C8595CB634" targetRef="sid-78960D36-CCDC-4F93-99D1-CB3DA21E65DE"/>
<sequenceFlow id="sid-609E4D80-09F6-40CF-A524-8CECB39290E7" sourceRef="sid-67B53CA6-E2ED-4B37-AABD-B6E540B8ABE7" targetRef="sid-4A6BFBE0-993B-4BC6-8C95-3F6C8036EE0B"/>
<sequenceFlow id="sid-0562280F-4F15-44DC-B44C-707FAAEF7E18" name="Invalid" sourceRef="sid-78960D36-CCDC-4F93-99D1-CB3DA21E65DE" targetRef="sid-65A751F4-C159-4477-90B0-36F30694100A"/>
<sequenceFlow id="sid-7C964429-1FC6-4B5E-8F04-B5539B6EE09E" sourceRef="sid-65A134C5-547D-49EE-9A7F-A8234270D638" targetRef="sid-65A751F4-C159-4477-90B0-36F30694100A"/>
<sequenceFlow id="sid-8572B97A-4653-4A84-9210-F0C69E482DF9" name="No bank account or already subscribed" sourceRef="sid-4A6BFBE0-993B-4BC6-8C95-3F6C8036EE0B" targetRef="sid-CB09F31E-8460-42F7-87C2-FF7ABC63D01F">
<conditionExpression xsi:type="tFormalExpression">
</conditionExpression>
</sequenceFlow>
<sequenceFlow id="sid-CFC467A7-4593-4AFA-BDFF-F5A81B334864" sourceRef="sid-5DD469D9-0E8B-40F7-9837-36910456DC56" targetRef="sid-2CDD1281-4956-4A5F-B6BD-1F6DDDAE0FB9"/>
<sequenceFlow id="sid-4AE93A9D-3455-4ECF-A95D-7EE27A6210F8" name="No digital account" sourceRef="sid-4A6BFBE0-993B-4BC6-8C95-3F6C8036EE0B" targetRef="sid-BD34BD39-100F-4469-8C6A-3C4F81A1CFAB"/>
<sequenceFlow id="sid-14FBC7E1-5060-4819-B5C5-FE65772FEA36" name="Valid" sourceRef="sid-78960D36-CCDC-4F93-99D1-CB3DA21E65DE" targetRef="sid-9A0DFE37-144C-4B16-9DB8-1F3B0F533CC5">
<conditionExpression xsi:type="tFormalExpression">
</conditionExpression>
</sequenceFlow>
</process>
<bpmndi:BPMNDiagram id="BPMNDiagram_Collaboration">
<bpmndi:BPMNPlane bpmnElement="Collaboration" id="BPMNPlane_Collaboration">
<bpmndi:BPMNShape bpmnElement="sid-B3DFECBB-EDEA-456E-B014-3200493301F5" id="BPMNShape_sid-B3DFECBB-EDEA-456E-B014-3200493301F5">
<omgdc:Bounds height="791.9999630376717" width="1810.2999359183054" x="14.99999921768908" y="44.999997653067226"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-01F0D8D0-7B41-4D1E-AA35-1062C6961F1C" id="BPMNShape_sid-01F0D8D0-7B41-4D1E-AA35-1062C6961F1C">
<omgdc:Bounds height="384.10249892729564" width="1780.2999359183054" x="44.99999921768908" y="44.999997653067226"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="startEvent1" id="BPMNShape_startEvent1">
<omgdc:Bounds height="30.0" width="30.0" x="120.00000143051183" y="222.05124976377286"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-65A751F4-C159-4477-90B0-36F30694100A" id="BPMNShape_sid-65A751F4-C159-4477-90B0-36F30694100A">
<omgdc:Bounds height="80.0" width="100.00000000000004" x="944.9999295920165" y="197.0512468274805"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-A17F3E98-9B8F-4EE1-92B8-2BDD9F395ABE" id="BPMNShape_sid-A17F3E98-9B8F-4EE1-92B8-2BDD9F395ABE">
<omgdc:Bounds height="40.0" width="40.00000000000004" x="1094.9999486804056" y="217.05124609121108"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-DF6C8BC1-03F2-46AA-A441-2D43ABC7B478" id="BPMNShape_sid-DF6C8BC1-03F2-46AA-A441-2D43ABC7B478">
<omgdc:Bounds height="79.99999999999997" width="100.00000000000004" x="540.0000064373032" y="197.05124585279248"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-BD34BD39-100F-4469-8C6A-3C4F81A1CFAB" id="BPMNShape_sid-BD34BD39-100F-4469-8C6A-3C4F81A1CFAB">
<omgdc:Bounds height="80.0" width="99.99999999999993" x="374.9999984353792" y="197.05124585279245"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-9A0DFE37-144C-4B16-9DB8-1F3B0F533CC5" id="BPMNShape_sid-9A0DFE37-144C-4B16-9DB8-1F3B0F533CC5">
<omgdc:Bounds height="80.0" width="100.00000000000004" x="1259.9999812245371" y="197.05124350375797"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-9D281282-643D-4651-8DC5-CA58D0905888" id="BPMNShape_sid-9D281282-643D-4651-8DC5-CA58D0905888">
<omgdc:Bounds height="40.0" width="40.00000000000004" x="1427.0874394710397" y="217.05124652945722"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-CB09F31E-8460-42F7-87C2-FF7ABC63D01F" id="BPMNShape_sid-CB09F31E-8460-42F7-87C2-FF7ABC63D01F">
<omgdc:Bounds height="28.0" width="28.000000000000043" x="1769.9999736249451" y="223.05124644005025"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-2CDD1281-4956-4A5F-B6BD-1F6DDDAE0FB9" id="BPMNShape_sid-2CDD1281-4956-4A5F-B6BD-1F6DDDAE0FB9">
<omgdc:Bounds height="80.0" width="100.00000000000004" x="1619.9999951720288" y="197.0512521128074"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-DC7EDF17-92D9-4C0E-8E7A-24715C517499" id="BPMNShape_sid-DC7EDF17-92D9-4C0E-8E7A-24715C517499">
<omgdc:Bounds height="79.99999999999991" width="99.99999999999999" x="225.0000026822097" y="197.0512458527925"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-689DA667-CEA4-49DF-A39D-AF123BBC846F" id="BPMNShape_sid-689DA667-CEA4-49DF-A39D-AF123BBC846F">
<omgdc:Bounds height="40.0" width="40.00000000000004" x="675.0000080466291" y="217.05124609121108"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-12059E60-EB1C-442D-B1E9-3E44A1196F6B" id="BPMNShape_sid-12059E60-EB1C-442D-B1E9-3E44A1196F6B">
<omgdc:Bounds height="407.89746411037606" width="1780.2999359183054" x="44.99999921768908" y="429.10249658036287"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-67B53CA6-E2ED-4B37-AABD-B6E540B8ABE7" id="BPMNShape_sid-67B53CA6-E2ED-4B37-AABD-B6E540B8ABE7">
<omgdc:Bounds height="80.0" width="99.99999999999999" x="225.00000536441945" y="593.0512336398224"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-4A6BFBE0-993B-4BC6-8C95-3F6C8036EE0B" id="BPMNShape_sid-4A6BFBE0-993B-4BC6-8C95-3F6C8036EE0B">
<omgdc:Bounds height="40.0" width="39.999999999999986" x="404.99999396502983" y="613.0512265700991"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-65A134C5-547D-49EE-9A7F-A8234270D638" id="BPMNShape_sid-65A134C5-547D-49EE-9A7F-A8234270D638">
<omgdc:Bounds height="80.0" width="99.99999999999993" x="719.9999678134925" y="593.0512268681223"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-567AE0B2-341D-4B88-A873-B6C8595CB634" id="BPMNShape_sid-567AE0B2-341D-4B88-A873-B6C8595CB634">
<omgdc:Bounds height="80.0" width="100.00000000000004" x="1064.999935626986" y="593.0512268681223"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-78960D36-CCDC-4F93-99D1-CB3DA21E65DE" id="BPMNShape_sid-78960D36-CCDC-4F93-99D1-CB3DA21E65DE">
<omgdc:Bounds height="40.0" width="40.00000000000004" x="1094.9999184161459" y="719.999989271164"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-5DD469D9-0E8B-40F7-9837-36910456DC56" id="BPMNShape_sid-5DD469D9-0E8B-40F7-9837-36910456DC56">
<omgdc:Bounds height="80.0" width="100.00000000000004" x="1397.0873978345903" y="593.0512268681223"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNEdge bpmnElement="sid-5776E820-0760-4150-9902-78C46A5D8815" id="BPMNEdge_sid-5776E820-0760-4150-9902-78C46A5D8815" flowable:sourceDockerX="20.00000000000002" flowable:sourceDockerY="20.0" flowable:targetDockerX="50.00000000000002" flowable:targetDockerY="40.0">
<omgdi:waypoint x="1114.999948021142" y="256.99872844499663"/>
<omgdi:waypoint x="1114.9999369438651" y="593.0512268681223"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-7C964429-1FC6-4B5E-8F04-B5539B6EE09E" id="BPMNEdge_sid-7C964429-1FC6-4B5E-8F04-B5539B6EE09E" flowable:sourceDockerX="49.999999999999964" flowable:sourceDockerY="40.0" flowable:targetDockerX="50.00000000000002" flowable:targetDockerY="40.0">
<omgdi:waypoint x="819.9499678134924" y="633.0512268681223"/>
<omgdi:waypoint x="856.2999873906374" y="633.0512268681223"/>
<omgdi:waypoint x="856.2999873906374" y="217.0512468274805"/>
<omgdi:waypoint x="944.9999295920163" y="229.84143848777623"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-CFC467A7-4593-4AFA-BDFF-F5A81B334864" id="BPMNEdge_sid-CFC467A7-4593-4AFA-BDFF-F5A81B334864" flowable:sourceDockerX="50.00000000000002" flowable:sourceDockerY="40.0" flowable:targetDockerX="50.00000000000002" flowable:targetDockerY="40.0">
<omgdi:waypoint x="1497.0373978345904" y="633.0512268681223"/>
<omgdi:waypoint x="1669.9999951720288" y="633.0512268681223"/>
<omgdi:waypoint x="1669.9999951720288" y="277.0012521128074"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-026F700C-83B0-42FD-8D09-74A1E43DFD60" id="BPMNEdge_sid-026F700C-83B0-42FD-8D09-74A1E43DFD60" flowable:sourceDockerX="50.00000000000002" flowable:sourceDockerY="40.0" flowable:targetDockerX="20.00000000000002" flowable:targetDockerY="20.0">
<omgdi:waypoint x="1359.9499800251685" y="237.05124460621968"/>
<omgdi:waypoint x="1427.0874393080508" y="237.0512460880311"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-D014AF56-AA67-4B14-A510-C2B1BE50AB5C" id="BPMNEdge_sid-D014AF56-AA67-4B14-A510-C2B1BE50AB5C" flowable:sourceDockerX="49.999999999999964" flowable:sourceDockerY="40.0" flowable:targetDockerX="50.00000000000002" flowable:targetDockerY="39.999999999999986">
<omgdi:waypoint x="474.9499984353175" y="237.05124585279245"/>
<omgdi:waypoint x="540.0000064371759" y="237.05124585279248"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-E217AC59-9CC8-4A9D-B1C9-D350D4A24324" id="BPMNEdge_sid-E217AC59-9CC8-4A9D-B1C9-D350D4A24324" flowable:sourceDockerX="50.00000000000002" flowable:sourceDockerY="39.999999999999986" flowable:targetDockerX="20.00000000000002" flowable:targetDockerY="20.0">
<omgdi:waypoint x="639.9500064372717" y="237.05124596621167"/>
<omgdi:waypoint x="675.0000080466291" y="237.05124604579805"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-A83B5BA1-6E81-4859-8614-23A0F490B1E4" id="BPMNEdge_sid-A83B5BA1-6E81-4859-8614-23A0F490B1E4" flowable:sourceDockerX="20.00000000000002" flowable:sourceDockerY="20.0" flowable:targetDockerX="50.00000000000002" flowable:targetDockerY="40.0">
<omgdi:waypoint x="1467.032966129322" y="237.05124702915015"/>
<omgdi:waypoint x="1619.9999941447163" y="237.05125086044404"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-609E4D80-09F6-40CF-A524-8CECB39290E7" id="BPMNEdge_sid-609E4D80-09F6-40CF-A524-8CECB39290E7" flowable:sourceDockerX="49.99999999999999" flowable:sourceDockerY="40.0" flowable:targetDockerX="19.999999999999993" flowable:targetDockerY="20.0">
<omgdi:waypoint x="324.950005364363" y="633.0512336398224"/>
<omgdi:waypoint x="373.8937683105469" y="633.0512336398224"/>
<omgdi:waypoint x="370.64998070232826" y="633.5512265700991"/>
<omgdi:waypoint x="405.18230932658264" y="633.2330861432632"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-79E57737-4DCF-4A15-AA4A-0EE41B2D16D1" id="BPMNEdge_sid-79E57737-4DCF-4A15-AA4A-0EE41B2D16D1" flowable:sourceDockerX="20.00000000000002" flowable:sourceDockerY="20.0" flowable:targetDockerX="49.99999999999999" flowable:targetDockerY="39.99999999999996">
<omgdi:waypoint x="685.4458375936993" y="226.60513597392293"/>
<omgdi:waypoint x="619.0437620282173" y="154.0062551259992"/>
<omgdi:waypoint x="275.0000026822097" y="154.0062551259992"/>
<omgdi:waypoint x="275.0000026822097" y="197.0512458527925"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-7590E614-788C-4EC3-B997-993C3730B205" id="BPMNEdge_sid-7590E614-788C-4EC3-B997-993C3730B205" flowable:sourceDockerX="20.00000000000002" flowable:sourceDockerY="20.0" flowable:targetDockerX="50.00000000000002" flowable:targetDockerY="40.0">
<omgdi:waypoint x="1447.0874373681888" y="256.9987303226734"/>
<omgdi:waypoint x="1447.0874020350354" y="593.0512268681223"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-6D5F7F40-F778-4D69-B042-F6177B5DEE00" id="BPMNEdge_sid-6D5F7F40-F778-4D69-B042-F6177B5DEE00" flowable:sourceDockerX="50.00000000000002" flowable:sourceDockerY="40.0" flowable:targetDockerX="20.00000000000002" flowable:targetDockerY="20.0">
<omgdi:waypoint x="1114.9999291899446" y="673.0012268681222"/>
<omgdi:waypoint x="1114.9999216266197" y="719.9999924896842"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-638B812B-DACD-41DA-B2BF-74BC2D4D42E8" id="BPMNEdge_sid-638B812B-DACD-41DA-B2BF-74BC2D4D42E8" flowable:sourceDockerX="50.00000000000002" flowable:sourceDockerY="40.0" flowable:targetDockerX="14.000000000000021" flowable:targetDockerY="14.0">
<omgdi:waypoint x="1719.9499951720181" y="237.0512496247555"/>
<omgdi:waypoint x="1769.9999734854016" y="237.05124713421674"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-0562280F-4F15-44DC-B44C-707FAAEF7E18" id="BPMNEdge_sid-0562280F-4F15-44DC-B44C-707FAAEF7E18" flowable:sourceDockerX="20.00000000000002" flowable:sourceDockerY="20.0" flowable:targetDockerX="50.00000000000002" flowable:targetDockerY="40.0">
<omgdi:waypoint x="1095.047266916461" y="740.0472194002283"/>
<omgdi:waypoint x="904.2999874055386" y="740.499989271164"/>
<omgdi:waypoint x="904.2999874055386" y="257.0512468274805"/>
<omgdi:waypoint x="944.9999295920165" y="248.06558681400517"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-14FBC7E1-5060-4819-B5C5-FE65772FEA36" id="BPMNEdge_sid-14FBC7E1-5060-4819-B5C5-FE65772FEA36" flowable:sourceDockerX="20.00000000000002" flowable:sourceDockerY="20.0" flowable:targetDockerX="50.00000000000002" flowable:targetDockerY="40.0">
<omgdi:waypoint x="1134.8327458138494" y="740.1066236909459"/>
<omgdi:waypoint x="1208.0438230991365" y="740.499989271164"/>
<omgdi:waypoint x="1208.0438230991365" y="237.05124350375797"/>
<omgdi:waypoint x="1259.9999812245371" y="237.05124350375797"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-0331E5F6-8FD4-4C04-A9FF-ABBC28740F15" id="BPMNEdge_sid-0331E5F6-8FD4-4C04-A9FF-ABBC28740F15" flowable:sourceDockerX="20.00000000000002" flowable:sourceDockerY="20.0" flowable:targetDockerX="49.999999999999964" flowable:targetDockerY="40.0">
<omgdi:waypoint x="1103.9744134479943" y="228.0761597915455"/>
<omgdi:waypoint x="1024.0437627315525" y="163.00625666379943"/>
<omgdi:waypoint x="769.9999678134925" y="163.00625666379943"/>
<omgdi:waypoint x="769.9999678134925" y="593.0512268681223"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-D6A09D2E-6CBD-45B7-A6A2-EF99B97D28A3" id="BPMNEdge_sid-D6A09D2E-6CBD-45B7-A6A2-EF99B97D28A3" flowable:sourceDockerX="15.0" flowable:sourceDockerY="15.0" flowable:targetDockerX="49.99999999999999" flowable:targetDockerY="40.0">
<omgdi:waypoint x="135.00000143051182" y="252.0012496471903"/>
<omgdi:waypoint x="135.00000143051182" y="633.0512336398224"/>
<omgdi:waypoint x="225.00000536441945" y="633.0512336398224"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-8572B97A-4653-4A84-9210-F0C69E482DF9" id="BPMNEdge_sid-8572B97A-4653-4A84-9210-F0C69E482DF9" flowable:sourceDockerX="19.999999999999993" flowable:sourceDockerY="20.0" flowable:targetDockerX="14.000000000000021" flowable:targetDockerY="14.0">
<omgdi:waypoint x="425.06416301461206" y="652.9306859942222"/>
<omgdi:waypoint x="425.49999396502983" y="787.9999992251396"/>
<omgdi:waypoint x="1783.9999736249454" y="787.9999992251396"/>
<omgdi:waypoint x="1783.9999736249451" y="251.00116310380284"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-E21CE175-9EFD-45BE-88B6-DE1BF332E267" id="BPMNEdge_sid-E21CE175-9EFD-45BE-88B6-DE1BF332E267" flowable:sourceDockerX="50.00000000000002" flowable:sourceDockerY="40.0" flowable:targetDockerX="20.00000000000002" flowable:targetDockerY="20.0">
<omgdi:waypoint x="1044.9499239823508" y="237.0512465207016"/>
<omgdi:waypoint x="1094.9999488031171" y="237.0512462136158"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-8C3AEFE5-17C1-4337-8043-53EEA3C7A502" id="BPMNEdge_sid-8C3AEFE5-17C1-4337-8043-53EEA3C7A502" flowable:sourceDockerX="20.00000000000002" flowable:sourceDockerY="20.0" flowable:targetDockerX="50.00000000000002" flowable:targetDockerY="39.999999999999986">
<omgdi:waypoint x="1108.4512752401852" y="223.5979685394783"/>
<omgdi:waypoint x="1057.0438229560853" y="118.00625470876659"/>
<omgdi:waypoint x="590.0000064373032" y="118.00625470876659"/>
<omgdi:waypoint x="590.0000064373032" y="197.05124585279248"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-4AE93A9D-3455-4ECF-A95D-7EE27A6210F8" id="BPMNEdge_sid-4AE93A9D-3455-4ECF-A95D-7EE27A6210F8" flowable:sourceDockerX="19.999999999999993" flowable:sourceDockerY="20.0" flowable:targetDockerX="49.999999999999964" flowable:targetDockerY="40.0">
<omgdi:waypoint x="424.9999941902406" y="613.0512267958743"/>
<omgdi:waypoint x="424.9999979838287" y="277.00124585279247"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-C5B3099D-A3DD-4A05-93BD-6AE6C4A52234" id="BPMNEdge_sid-C5B3099D-A3DD-4A05-93BD-6AE6C4A52234" flowable:sourceDockerX="20.00000000000002" flowable:sourceDockerY="20.0" flowable:targetDockerX="49.999999999999964" flowable:targetDockerY="40.0">
<omgdi:waypoint x="695.0251656771047" y="256.9735796753466"/>
<omgdi:waypoint x="695.5000080466291" y="633.0512268681223"/>
<omgdi:waypoint x="719.9999678134644" y="633.0512268681223"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-E19CF8FB-ECA6-4857-A633-813D4036E092" id="BPMNEdge_sid-E19CF8FB-ECA6-4857-A633-813D4036E092" flowable:sourceDockerX="49.99999999999999" flowable:sourceDockerY="39.99999999999996" flowable:targetDockerX="49.99999999999999" flowable:targetDockerY="40.0">
<omgdi:waypoint x="275.0000029528013" y="277.0012458527924"/>
<omgdi:waypoint x="275.00000509348916" y="593.0512336398224"/>
</bpmndi:BPMNEdge>
</bpmndi:BPMNPlane>
</bpmndi:BPMNDiagram>
</definitions>`,`<definitions xmlns="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:flowable="http://flowable.org/bpmn" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:omgdc="http://www.omg.org/spec/DD/20100524/DC" xmlns:omgdi="http://www.omg.org/spec/DD/20100524/DI" typeLanguage="http://www.w3.org/2001/XMLSchema" expressionLanguage="http://www.w3.org/1999/XPath" targetNamespace="http://www.flowable.org/processdef" exporter="Flowable Open Source Modeler" exporterVersion="6.8.0">
<process id="Process_A" name="Process_A" isExecutable="true">
<startEvent id="startEvent1" flowable:formKey="Subscription-Personal-Info-Step" flowable:formFieldValidation="true"/>
<userTask id="sid-BDCA837F-BB0A-4F72-BBCD-B81DC4197676" name="Step 2" flowable:assignee="$INITIATOR" flowable:formKey="Subscription-Role-Step" flowable:formFieldValidation="true">
<extensionElements>
<modeler:initiator-can-complete xmlns:modeler="http://flowable.org/modeler">
<![CDATA[ true ]]>
</modeler:initiator-can-complete>
</extensionElements>
</userTask>
<sequenceFlow id="sid-3F0BBC8A-17A8-4413-A750-D31A791EB3A0" sourceRef="startEvent1" targetRef="sid-BDCA837F-BB0A-4F72-BBCD-B81DC4197676"/>
<endEvent id="sid-B6C40972-ABDD-4742-8629-8AA2372D82DA"/>
<userTask id="sid-F747F375-676C-4E02-BC54-DB82567DBF47" name="Step 3" flowable:assignee="$INITIATOR" flowable:formKey="Subscription-Otp-Step" flowable:formFieldValidation="true">
<extensionElements>
<modeler:initiator-can-complete xmlns:modeler="http://flowable.org/modeler">
<![CDATA[ true ]]>
</modeler:initiator-can-complete>
</extensionElements>
</userTask>
<userTask id="sid-23431025-9017-400B-9445-10E34982D495" name="Step 4" flowable:assignee="$INITIATOR" flowable:formKey="Subscription-Email-Step" flowable:formFieldValidation="true">
<extensionElements>
<modeler:initiator-can-complete xmlns:modeler="http://flowable.org/modeler">
<![CDATA[ true ]]>
</modeler:initiator-can-complete>
</extensionElements>
</userTask>
<sequenceFlow id="sid-1C2F3AD1-51E6-47F0-93FB-078247A59AC7" sourceRef="sid-BDCA837F-BB0A-4F72-BBCD-B81DC4197676" targetRef="sid-F747F375-676C-4E02-BC54-DB82567DBF47"/>
<sequenceFlow id="sid-9DA0318E-EC4F-4EAA-A0A3-F5BEB251D338" sourceRef="sid-F747F375-676C-4E02-BC54-DB82567DBF47" targetRef="sid-23431025-9017-400B-9445-10E34982D495"/>
<sequenceFlow id="sid-4ECC158E-9F75-49FB-8B54-5DAE636E3220" sourceRef="sid-23431025-9017-400B-9445-10E34982D495" targetRef="sid-B6C40972-ABDD-4742-8629-8AA2372D82DA"/>
</process>
<bpmndi:BPMNDiagram id="BPMNDiagram_Process_A">
<bpmndi:BPMNPlane bpmnElement="Process_A" id="BPMNPlane_Process_A">
<bpmndi:BPMNShape bpmnElement="startEvent1" id="BPMNShape_startEvent1">
<omgdc:Bounds height="30.0" width="30.0" x="224.9999966472388" y="185.9999763071555"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-BDCA837F-BB0A-4F72-BBCD-B81DC4197676" id="BPMNShape_sid-BDCA837F-BB0A-4F72-BBCD-B81DC4197676">
<omgdc:Bounds height="80.0" width="100.0" x="344.99999485909944" y="160.9999898076061"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-B6C40972-ABDD-4742-8629-8AA2372D82DA" id="BPMNShape_sid-B6C40972-ABDD-4742-8629-8AA2372D82DA">
<omgdc:Bounds height="28.0" width="28.0" x="839.9999874830248" y="186.99997907877113"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-F747F375-676C-4E02-BC54-DB82567DBF47" id="BPMNShape_sid-F747F375-676C-4E02-BC54-DB82567DBF47">
<omgdc:Bounds height="79.99999999999994" width="100.0" x="509.9999924004079" y="160.999981865288"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-23431025-9017-400B-9445-10E34982D495" id="BPMNShape_sid-23431025-9017-400B-9445-10E34982D495">
<omgdc:Bounds height="79.99999999999994" width="100.0" x="674.9999899417163" y="160.99999220669292"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNEdge bpmnElement="sid-1C2F3AD1-51E6-47F0-93FB-078247A59AC7" id="BPMNEdge_sid-1C2F3AD1-51E6-47F0-93FB-078247A59AC7" flowable:sourceDockerX="50.0" flowable:sourceDockerY="40.0" flowable:targetDockerX="50.0" flowable:targetDockerY="39.99999999999997">
<omgdi:waypoint x="444.9499948590892" y="200.99998740084297"/>
<omgdi:waypoint x="509.9999924004079" y="200.9999842696443"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-4ECC158E-9F75-49FB-8B54-5DAE636E3220" id="BPMNEdge_sid-4ECC158E-9F75-49FB-8B54-5DAE636E3220" flowable:sourceDockerX="50.0" flowable:sourceDockerY="39.99999999999997" flowable:targetDockerX="14.0" flowable:targetDockerY="14.0">
<omgdi:waypoint x="774.9499899416569" y="200.99998711835104"/>
<omgdi:waypoint x="839.9999874207823" y="200.99998049841858"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-9DA0318E-EC4F-4EAA-A0A3-F5BEB251D338" id="BPMNEdge_sid-9DA0318E-EC4F-4EAA-A0A3-F5BEB251D338" flowable:sourceDockerX="50.0" flowable:sourceDockerY="39.99999999999997" flowable:targetDockerX="50.0" flowable:targetDockerY="39.99999999999997">
<omgdi:waypoint x="609.9499924003863" y="200.99998499591334"/>
<omgdi:waypoint x="674.9999898485303" y="200.99998907293377"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-3F0BBC8A-17A8-4413-A750-D31A791EB3A0" id="BPMNEdge_sid-3F0BBC8A-17A8-4413-A750-D31A791EB3A0" flowable:sourceDockerX="15.0" flowable:sourceDockerY="15.0" flowable:targetDockerX="50.0" flowable:targetDockerY="40.0">
<omgdi:waypoint x="254.94999588610239" y="200.9999776092958"/>
<omgdi:waypoint x="344.9999947832937" y="200.99998545262198"/>
</bpmndi:BPMNEdge>
</bpmndi:BPMNPlane>
</bpmndi:BPMNDiagram>
</definitions>`,`<definitions xmlns="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:flowable="http://flowable.org/bpmn" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:omgdc="http://www.omg.org/spec/DD/20100524/DC" xmlns:omgdi="http://www.omg.org/spec/DD/20100524/DI" typeLanguage="http://www.w3.org/2001/XMLSchema" expressionLanguage="http://www.w3.org/1999/XPath" targetNamespace="http://www.flowable.org/processdef" exporter="Flowable Open Source Modeler" exporterVersion="6.8.0">
<process id="Process_A" name="Process_A" isExecutable="true">
<startEvent id="startEvent1" flowable:formKey="Subscription-Personal-Info-Step" flowable:formFieldValidation="true"/>
<userTask id="sid-BDCA837F-BB0A-4F72-BBCD-B81DC4197676" name="Step 2" flowable:assignee="$INITIATOR" flowable:formKey="Subscription-Role-Step" flowable:formFieldValidation="true">
<extensionElements>
<modeler:initiator-can-complete xmlns:modeler="http://flowable.org/modeler">
<![CDATA[ true ]]>
</modeler:initiator-can-complete>
</extensionElements>
</userTask>
<sequenceFlow id="sid-3F0BBC8A-17A8-4413-A750-D31A791EB3A0" sourceRef="startEvent1" targetRef="sid-BDCA837F-BB0A-4F72-BBCD-B81DC4197676"/>
<endEvent id="sid-B6C40972-ABDD-4742-8629-8AA2372D82DA"/>
<userTask id="sid-F747F375-676C-4E02-BC54-DB82567DBF47" name="Step 3" flowable:assignee="$INITIATOR" flowable:formKey="Subscription-Otp-Step" flowable:formFieldValidation="true">
<extensionElements>
<modeler:initiator-can-complete xmlns:modeler="http://flowable.org/modeler">
<![CDATA[ true ]]>
</modeler:initiator-can-complete>
</extensionElements>
</userTask>
<userTask id="sid-23431025-9017-400B-9445-10E34982D495" name="Step 4" flowable:assignee="$INITIATOR" flowable:formKey="Subscription-Email-Step" flowable:formFieldValidation="true">
<extensionElements>
<modeler:initiator-can-complete xmlns:modeler="http://flowable.org/modeler">
<![CDATA[ true ]]>
</modeler:initiator-can-complete>
</extensionElements>
</userTask>
<sequenceFlow id="sid-1C2F3AD1-51E6-47F0-93FB-078247A59AC7" sourceRef="sid-BDCA837F-BB0A-4F72-BBCD-B81DC4197676" targetRef="sid-F747F375-676C-4E02-BC54-DB82567DBF47"/>
<sequenceFlow id="sid-9DA0318E-EC4F-4EAA-A0A3-F5BEB251D338" sourceRef="sid-F747F375-676C-4E02-BC54-DB82567DBF47" targetRef="sid-23431025-9017-400B-9445-10E34982D495"/>
<sequenceFlow id="sid-4ECC158E-9F75-49FB-8B54-5DAE636E3220" sourceRef="sid-23431025-9017-400B-9445-10E34982D495" targetRef="sid-B6C40972-ABDD-4742-8629-8AA2372D82DA"/>
</process>
<bpmndi:BPMNDiagram id="BPMNDiagram_Process_A">
<bpmndi:BPMNPlane bpmnElement="Process_A" id="BPMNPlane_Process_A">
<bpmndi:BPMNShape bpmnElement="startEvent1" id="BPMNShape_startEvent1">
<omgdc:Bounds height="30.0" width="30.0" x="224.9999966472388" y="185.9999763071555"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-BDCA837F-BB0A-4F72-BBCD-B81DC4197676" id="BPMNShape_sid-BDCA837F-BB0A-4F72-BBCD-B81DC4197676">
<omgdc:Bounds height="80.0" width="100.0" x="344.99999485909944" y="160.9999898076061"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-B6C40972-ABDD-4742-8629-8AA2372D82DA" id="BPMNShape_sid-B6C40972-ABDD-4742-8629-8AA2372D82DA">
<omgdc:Bounds height="28.0" width="28.0" x="839.9999874830248" y="186.99997907877113"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-F747F375-676C-4E02-BC54-DB82567DBF47" id="BPMNShape_sid-F747F375-676C-4E02-BC54-DB82567DBF47">
<omgdc:Bounds height="79.99999999999994" width="100.0" x="509.9999924004079" y="160.999981865288"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-23431025-9017-400B-9445-10E34982D495" id="BPMNShape_sid-23431025-9017-400B-9445-10E34982D495">
<omgdc:Bounds height="79.99999999999994" width="100.0" x="674.9999899417163" y="160.99999220669292"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNEdge bpmnElement="sid-1C2F3AD1-51E6-47F0-93FB-078247A59AC7" id="BPMNEdge_sid-1C2F3AD1-51E6-47F0-93FB-078247A59AC7" flowable:sourceDockerX="50.0" flowable:sourceDockerY="40.0" flowable:targetDockerX="50.0" flowable:targetDockerY="39.99999999999997">
<omgdi:waypoint x="444.9499948590892" y="200.99998740084297"/>
<omgdi:waypoint x="509.9999924004079" y="200.9999842696443"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-4ECC158E-9F75-49FB-8B54-5DAE636E3220" id="BPMNEdge_sid-4ECC158E-9F75-49FB-8B54-5DAE636E3220" flowable:sourceDockerX="50.0" flowable:sourceDockerY="39.99999999999997" flowable:targetDockerX="14.0" flowable:targetDockerY="14.0">
<omgdi:waypoint x="774.9499899416569" y="200.99998711835104"/>
<omgdi:waypoint x="839.9999874207823" y="200.99998049841858"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-9DA0318E-EC4F-4EAA-A0A3-F5BEB251D338" id="BPMNEdge_sid-9DA0318E-EC4F-4EAA-A0A3-F5BEB251D338" flowable:sourceDockerX="50.0" flowable:sourceDockerY="39.99999999999997" flowable:targetDockerX="50.0" flowable:targetDockerY="39.99999999999997">
<omgdi:waypoint x="609.9499924003863" y="200.99998499591334"/>
<omgdi:waypoint x="674.9999898485303" y="200.99998907293377"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-3F0BBC8A-17A8-4413-A750-D31A791EB3A0" id="BPMNEdge_sid-3F0BBC8A-17A8-4413-A750-D31A791EB3A0" flowable:sourceDockerX="15.0" flowable:sourceDockerY="15.0" flowable:targetDockerX="50.0" flowable:targetDockerY="40.0">
<omgdi:waypoint x="254.94999588610239" y="200.9999776092958"/>
<omgdi:waypoint x="344.9999947832937" y="200.99998545262198"/>
</bpmndi:BPMNEdge>
</bpmndi:BPMNPlane>
</bpmndi:BPMNDiagram>
</definitions>`,`<definitions xmlns="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:flowable="http://flowable.org/bpmn" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:omgdc="http://www.omg.org/spec/DD/20100524/DC" xmlns:omgdi="http://www.omg.org/spec/DD/20100524/DI" typeLanguage="http://www.w3.org/2001/XMLSchema" expressionLanguage="http://www.w3.org/1999/XPath" targetNamespace="http://flowable.org/test" exporter="Flowable Open Source Modeler" exporterVersion="6.8.0">
<collaboration id="Collaboration">
<participant id="sid-86401AE7-10C7-4C4B-A164-F4E496AE096E" name="PRIVATE-CLAIMS-ACCOUNT" processRef="PRIVATE-CLAIMS-ACCOUNT"/>
</collaboration>
<process id="PRIVATE-CLAIMS-ACCOUNT" name="PRIVATE-CLAIMS-ACCOUNT" isExecutable="true">
<laneSet id="laneSet_PRIVATE-CLAIMS-ACCOUNT">
<lane id="sid-F0491A54-553A-4035-8FE8-5EF891707248">
<flowNodeRef>startEvent1</flowNodeRef>
<flowNodeRef>sid-53F962D2-AB74-4CD2-900A-B6E0986F32C1</flowNodeRef>
<flowNodeRef>sid-FE3B1F38-6C12-4BB3-819D-43A3BDBE3EC1</flowNodeRef>
<flowNodeRef>sid-51502D20-979B-4230-A1AA-73E3DCB54053</flowNodeRef>
</lane>
</laneSet>
<startEvent id="startEvent1" flowable:formKey="PRIVATE_CLAIMS_ACCOUNT" flowable:formFieldValidation="true">
<extensionElements>
<flowable:executionListener event="start" />
<flowable:executionListener event="start" />
<flowable:executionListener event="end" />
</extensionElements>
</startEvent>
<endEvent id="sid-53F962D2-AB74-4CD2-900A-B6E0986F32C1"/>
<userTask id="sid-FE3B1F38-6C12-4BB3-819D-43A3BDBE3EC1" name="Review Claims" flowable:formKey="PRIVATE_CLAIMS_ACCOUNT" flowable:formFieldValidation="true"/>
<sequenceFlow id="sid-51502D20-979B-4230-A1AA-73E3DCB54053" sourceRef="startEvent1" targetRef="sid-FE3B1F38-6C12-4BB3-819D-43A3BDBE3EC1">
<extensionElements>
<flowable:executionListener event="start" />
</extensionElements>
</sequenceFlow>
</process>
<bpmndi:BPMNDiagram id="BPMNDiagram_Collaboration">
<bpmndi:BPMNPlane bpmnElement="Collaboration" id="BPMNPlane_Collaboration">
<bpmndi:BPMNShape bpmnElement="sid-86401AE7-10C7-4C4B-A164-F4E496AE096E" id="BPMNShape_sid-86401AE7-10C7-4C4B-A164-F4E496AE096E">
<omgdc:Bounds height="328.0" width="728.0" x="150.0" y="105.0"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-F0491A54-553A-4035-8FE8-5EF891707248" id="BPMNShape_sid-F0491A54-553A-4035-8FE8-5EF891707248">
<omgdc:Bounds height="328.0" width="698.0" x="180.0" y="105.0"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="startEvent1" id="BPMNShape_startEvent1">
<omgdc:Bounds height="30.0" width="30.0" x="255.0" y="254.0"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-53F962D2-AB74-4CD2-900A-B6E0986F32C1" id="BPMNShape_sid-53F962D2-AB74-4CD2-900A-B6E0986F32C1">
<omgdc:Bounds height="28.0" width="28.0" x="750.0" y="255.0"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-FE3B1F38-6C12-4BB3-819D-43A3BDBE3EC1" id="BPMNShape_sid-FE3B1F38-6C12-4BB3-819D-43A3BDBE3EC1">
<omgdc:Bounds height="80.0" width="100.0" x="464.0" y="229.0"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNEdge bpmnElement="sid-51502D20-979B-4230-A1AA-73E3DCB54053" id="BPMNEdge_sid-51502D20-979B-4230-A1AA-73E3DCB54053" flowable:sourceDockerX="15.0" flowable:sourceDockerY="15.0" flowable:targetDockerX="11.0" flowable:targetDockerY="43.0">
<omgdi:waypoint x="284.94838013978153" y="269.21875757545223"/>
<omgdi:waypoint x="463.99999999999704" y="271.8390243902439"/>
</bpmndi:BPMNEdge>
</bpmndi:BPMNPlane>
</bpmndi:BPMNDiagram>
</definitions>`,`<definitions xmlns="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:flowable="http://flowable.org/bpmn" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:omgdc="http://www.omg.org/spec/DD/20100524/DC" xmlns:omgdi="http://www.omg.org/spec/DD/20100524/DI" typeLanguage="http://www.w3.org/2001/XMLSchema" expressionLanguage="http://www.w3.org/1999/XPath" targetNamespace="http://flowable.org/test" exporter="Flowable Open Source Modeler" exporterVersion="6.8.0">
<collaboration id="Collaboration">
<participant id="sid-75C6B959-C5AC-45AD-B0B6-3ED685E30CEB" name="PRIVATE-CLAIMS" processRef="PRIVATE-CLAIMS"/>
</collaboration>
<process id="PRIVATE-CLAIMS" name="PRIVATE-CLAIMS" isExecutable="true">
<laneSet id="laneSet_PRIVATE-CLAIMS">
<lane id="sid-32A1634E-13A1-444D-8F54-47E398225202">
<flowNodeRef>startEvent1</flowNodeRef>
<flowNodeRef>sid-E2210566-13E6-40B9-BDD2-AFCE599D62A9</flowNodeRef>
<flowNodeRef>sid-9C66E85F-4104-4AB7-A331-CB7F103849C6</flowNodeRef>
<flowNodeRef>sid-9DE262F3-EB56-4042-BF3C-E3852C0E68ED</flowNodeRef>
<flowNodeRef>sid-3DE12630-BB06-4F13-A914-3D2AE5D5660E</flowNodeRef>
<flowNodeRef>sid-4F53D37A-549C-40B4-8C01-6D1AD8F1C9FD</flowNodeRef>
<flowNodeRef>sid-BC0F46B0-542C-4A3F-8BE4-BAC1BB9A5392</flowNodeRef>
</lane>
</laneSet>
<startEvent id="startEvent1" flowable:formKey="PRIVATE_CLAIMS" flowable:formFieldValidation="true">
<extensionElements>
<flowable:executionListener event="start" />
<flowable:executionListener event="start"/>
</extensionElements>
</startEvent>
<endEvent id="sid-E2210566-13E6-40B9-BDD2-AFCE599D62A9"/>
<serviceTask id="sid-9C66E85F-4104-4AB7-A331-CB7F103849C6" name="Send mail to Client" />
<userTask id="sid-9DE262F3-EB56-4042-BF3C-E3852C0E68ED" name="Review Private Claims" flowable:formKey="PRIVATE_CLAIMS" flowable:formFieldValidation="true"/>
<sequenceFlow id="sid-3DE12630-BB06-4F13-A914-3D2AE5D5660E" sourceRef="sid-9DE262F3-EB56-4042-BF3C-E3852C0E68ED" targetRef="sid-9C66E85F-4104-4AB7-A331-CB7F103849C6"/>
<sequenceFlow id="sid-4F53D37A-549C-40B4-8C01-6D1AD8F1C9FD" sourceRef="sid-9C66E85F-4104-4AB7-A331-CB7F103849C6" targetRef="sid-E2210566-13E6-40B9-BDD2-AFCE599D62A9"/>
<sequenceFlow id="sid-BC0F46B0-542C-4A3F-8BE4-BAC1BB9A5392" sourceRef="startEvent1" targetRef="sid-9DE262F3-EB56-4042-BF3C-E3852C0E68ED">
<extensionElements>
<flowable:executionListener event="start"/>
</extensionElements>
</sequenceFlow>
</process>
<bpmndi:BPMNDiagram id="BPMNDiagram_Collaboration">
<bpmndi:BPMNPlane bpmnElement="Collaboration" id="BPMNPlane_Collaboration">
<bpmndi:BPMNShape bpmnElement="sid-75C6B959-C5AC-45AD-B0B6-3ED685E30CEB" id="BPMNShape_sid-75C6B959-C5AC-45AD-B0B6-3ED685E30CEB">
<omgdc:Bounds height="357.0" width="870.0" x="75.0" y="105.0"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-32A1634E-13A1-444D-8F54-47E398225202" id="BPMNShape_sid-32A1634E-13A1-444D-8F54-47E398225202">
<omgdc:Bounds height="357.0" width="840.0" x="105.0" y="105.0"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="startEvent1" id="BPMNShape_startEvent1">
<omgdc:Bounds height="30.0" width="30.0" x="135.0" y="268.5"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-E2210566-13E6-40B9-BDD2-AFCE599D62A9" id="BPMNShape_sid-E2210566-13E6-40B9-BDD2-AFCE599D62A9">
<omgdc:Bounds height="28.0" width="28.0" x="840.0" y="269.5"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-9C66E85F-4104-4AB7-A331-CB7F103849C6" id="BPMNShape_sid-9C66E85F-4104-4AB7-A331-CB7F103849C6">
<omgdc:Bounds height="80.0" width="100.0" x="555.0" y="243.5"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-9DE262F3-EB56-4042-BF3C-E3852C0E68ED" id="BPMNShape_sid-9DE262F3-EB56-4042-BF3C-E3852C0E68ED">
<omgdc:Bounds height="80.0" width="100.0" x="330.0" y="243.5"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNEdge bpmnElement="sid-3DE12630-BB06-4F13-A914-3D2AE5D5660E" id="BPMNEdge_sid-3DE12630-BB06-4F13-A914-3D2AE5D5660E" flowable:sourceDockerX="99.0" flowable:sourceDockerY="40.0" flowable:targetDockerX="50.0" flowable:targetDockerY="40.0">
<omgdi:waypoint x="429.95000000000005" y="283.5"/>
<omgdi:waypoint x="555.0" y="283.5"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-4F53D37A-549C-40B4-8C01-6D1AD8F1C9FD" id="BPMNEdge_sid-4F53D37A-549C-40B4-8C01-6D1AD8F1C9FD" flowable:sourceDockerX="50.0" flowable:sourceDockerY="40.0" flowable:targetDockerX="14.0" flowable:targetDockerY="14.0">
<omgdi:waypoint x="654.9499999999877" y="283.5"/>
<omgdi:waypoint x="840.0" y="283.5"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-BC0F46B0-542C-4A3F-8BE4-BAC1BB9A5392" id="BPMNEdge_sid-BC0F46B0-542C-4A3F-8BE4-BAC1BB9A5392" flowable:sourceDockerX="15.0" flowable:sourceDockerY="15.0" flowable:targetDockerX="1.0" flowable:targetDockerY="40.0">
<omgdi:waypoint x="164.94999944207564" y="283.5"/>
<omgdi:waypoint x="329.9999999999751" y="283.5"/>
</bpmndi:BPMNEdge>
</bpmndi:BPMNPlane>
</bpmndi:BPMNDiagram>
</definitions>`,`<definitions xmlns="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:flowable="http://flowable.org/bpmn" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:omgdc="http://www.omg.org/spec/DD/20100524/DC" xmlns:omgdi="http://www.omg.org/spec/DD/20100524/DI" typeLanguage="http://www.w3.org/2001/XMLSchema" expressionLanguage="http://www.w3.org/1999/XPath" targetNamespace="http://flowable.org/test" exporter="Flowable Open Source Modeler" exporterVersion="6.8.0">
<collaboration id="Collaboration">
<participant id="sid-75C6B959-C5AC-45AD-B0B6-3ED685E30CEB" name="PRIVATE-CLAIMS" processRef="PRIVATE-CLAIMS"/>
</collaboration>
<process id="PRIVATE-CLAIMS" name="PRIVATE-CLAIMS" isExecutable="true">
<laneSet id="laneSet_PRIVATE-CLAIMS">
<lane id="sid-32A1634E-13A1-444D-8F54-47E398225202">
<flowNodeRef>startEvent1</flowNodeRef>
<flowNodeRef>sid-E2210566-13E6-40B9-BDD2-AFCE599D62A9</flowNodeRef>
<flowNodeRef>sid-9C66E85F-4104-4AB7-A331-CB7F103849C6</flowNodeRef>
<flowNodeRef>sid-9DE262F3-EB56-4042-BF3C-E3852C0E68ED</flowNodeRef>
<flowNodeRef>sid-3DE12630-BB06-4F13-A914-3D2AE5D5660E</flowNodeRef>
<flowNodeRef>sid-4F53D37A-549C-40B4-8C01-6D1AD8F1C9FD</flowNodeRef>
<flowNodeRef>sid-BC0F46B0-542C-4A3F-8BE4-BAC1BB9A5392</flowNodeRef>
</lane>
</laneSet>
<startEvent id="startEvent1" flowable:formKey="PRIVATE_CLAIMS" flowable:formFieldValidation="true">
<extensionElements>
<flowable:executionListener event="start" />
<flowable:executionListener event="start"/>
</extensionElements>
</startEvent>
<endEvent id="sid-E2210566-13E6-40B9-BDD2-AFCE599D62A9"/>
<serviceTask id="sid-9C66E85F-4104-4AB7-A331-CB7F103849C6" name="Send mail to Client"/>
<userTask id="sid-9DE262F3-EB56-4042-BF3C-E3852C0E68ED" name="Review Private Claims" flowable:formKey="PRIVATE_CLAIMS" flowable:formFieldValidation="true"/>
<sequenceFlow id="sid-3DE12630-BB06-4F13-A914-3D2AE5D5660E" sourceRef="sid-9DE262F3-EB56-4042-BF3C-E3852C0E68ED" targetRef="sid-9C66E85F-4104-4AB7-A331-CB7F103849C6"/>
<sequenceFlow id="sid-4F53D37A-549C-40B4-8C01-6D1AD8F1C9FD" sourceRef="sid-9C66E85F-4104-4AB7-A331-CB7F103849C6" targetRef="sid-E2210566-13E6-40B9-BDD2-AFCE599D62A9"/>
<sequenceFlow id="sid-BC0F46B0-542C-4A3F-8BE4-BAC1BB9A5392" sourceRef="startEvent1" targetRef="sid-9DE262F3-EB56-4042-BF3C-E3852C0E68ED">
<extensionElements>
<flowable:executionListener event="start" />
</extensionElements>
</sequenceFlow>
</process>
<bpmndi:BPMNDiagram id="BPMNDiagram_Collaboration">
<bpmndi:BPMNPlane bpmnElement="Collaboration" id="BPMNPlane_Collaboration">
<bpmndi:BPMNShape bpmnElement="sid-75C6B959-C5AC-45AD-B0B6-3ED685E30CEB" id="BPMNShape_sid-75C6B959-C5AC-45AD-B0B6-3ED685E30CEB">
<omgdc:Bounds height="357.0" width="870.0" x="75.0" y="105.0"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-32A1634E-13A1-444D-8F54-47E398225202" id="BPMNShape_sid-32A1634E-13A1-444D-8F54-47E398225202">
<omgdc:Bounds height="357.0" width="840.0" x="105.0" y="105.0"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="startEvent1" id="BPMNShape_startEvent1">
<omgdc:Bounds height="30.0" width="30.0" x="135.0" y="268.5"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-E2210566-13E6-40B9-BDD2-AFCE599D62A9" id="BPMNShape_sid-E2210566-13E6-40B9-BDD2-AFCE599D62A9">
<omgdc:Bounds height="28.0" width="28.0" x="840.0" y="269.5"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-9C66E85F-4104-4AB7-A331-CB7F103849C6" id="BPMNShape_sid-9C66E85F-4104-4AB7-A331-CB7F103849C6">
<omgdc:Bounds height="80.0" width="100.0" x="555.0" y="243.5"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-9DE262F3-EB56-4042-BF3C-E3852C0E68ED" id="BPMNShape_sid-9DE262F3-EB56-4042-BF3C-E3852C0E68ED">
<omgdc:Bounds height="80.0" width="100.0" x="330.0" y="243.5"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNEdge bpmnElement="sid-3DE12630-BB06-4F13-A914-3D2AE5D5660E" id="BPMNEdge_sid-3DE12630-BB06-4F13-A914-3D2AE5D5660E" flowable:sourceDockerX="99.0" flowable:sourceDockerY="40.0" flowable:targetDockerX="50.0" flowable:targetDockerY="40.0">
<omgdi:waypoint x="429.95000000000005" y="283.5"/>
<omgdi:waypoint x="555.0" y="283.5"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-4F53D37A-549C-40B4-8C01-6D1AD8F1C9FD" id="BPMNEdge_sid-4F53D37A-549C-40B4-8C01-6D1AD8F1C9FD" flowable:sourceDockerX="50.0" flowable:sourceDockerY="40.0" flowable:targetDockerX="14.0" flowable:targetDockerY="14.0">
<omgdi:waypoint x="654.9499999999877" y="283.5"/>
<omgdi:waypoint x="840.0" y="283.5"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-BC0F46B0-542C-4A3F-8BE4-BAC1BB9A5392" id="BPMNEdge_sid-BC0F46B0-542C-4A3F-8BE4-BAC1BB9A5392" flowable:sourceDockerX="15.0" flowable:sourceDockerY="15.0" flowable:targetDockerX="1.0" flowable:targetDockerY="40.0">
<omgdi:waypoint x="164.94999944207564" y="283.5"/>
<omgdi:waypoint x="329.9999999999751" y="283.5"/>
</bpmndi:BPMNEdge>
</bpmndi:BPMNPlane>
</bpmndi:BPMNDiagram>
</definitions>`,`<definitions xmlns="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:flowable="http://flowable.org/bpmn" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:omgdc="http://www.omg.org/spec/DD/20100524/DC" xmlns:omgdi="http://www.omg.org/spec/DD/20100524/DI" typeLanguage="http://www.w3.org/2001/XMLSchema" expressionLanguage="http://www.w3.org/1999/XPath" targetNamespace="http://www.flowable.org/processdef" exporter="Flowable Open Source Modeler" exporterVersion="6.8.0">
<process id="CHECKBOOK-REQUEST" name="chequeCSATicket" isExecutable="true">
<startEvent id="startEvent1" flowable:formKey="checkbook-request" flowable:formFieldValidation="true">
<extensionElements>
<flowable:executionListener event="start" />
<flowable:executionListener event="start" />
<flowable:executionListener event="start" />
<flowable:executionListener event="start" />
</extensionElements>
</startEvent>
<userTask id="sid-7506C489-4B01-433D-9245-FCB86F44B2D1" name="Smile Validation" flowable:formKey="checkbook-request" flowable:formFieldValidation="true"/>
<endEvent id="sid-6E0F3E23-772A-476A-8E13-CF683DB6A386"/>
<serviceTask id="sid-A022D9D1-332B-4046-BDD6-51C7B2E0A32F" name="Demand Checkbook" />
<sequenceFlow id="sid-21C09C02-7353-4F4C-91A3-9F2AA4B27954" sourceRef="sid-A022D9D1-332B-4046-BDD6-51C7B2E0A32F" targetRef="sid-7506C489-4B01-433D-9245-FCB86F44B2D1"/>
<sequenceFlow id="sid-37772A6F-3418-4A5D-8FD8-E3B5D9864D87" sourceRef="startEvent1" targetRef="sid-A022D9D1-332B-4046-BDD6-51C7B2E0A32F"/>
<sequenceFlow id="sid-1815A352-E00D-42EB-8ABD-398E18D08E31" sourceRef="sid-7506C489-4B01-433D-9245-FCB86F44B2D1" targetRef="sid-6E0F3E23-772A-476A-8E13-CF683DB6A386"/>
<textAnnotation id="sid-8A66234E-461D-446C-9AAB-3EE4DE0A13E6">
<text>API Compte autorisé from customer number from token</text>
</textAnnotation>
<textAnnotation id="sid-2D77AB52-7893-4846-801F-7D3769994CC5">
<text>API Check demandes before</text>
</textAnnotation>
</process>
<bpmndi:BPMNDiagram id="BPMNDiagram_CHECKBOOK-REQUEST">
<bpmndi:BPMNPlane bpmnElement="CHECKBOOK-REQUEST" id="BPMNPlane_CHECKBOOK-REQUEST">
<bpmndi:BPMNShape bpmnElement="startEvent1" id="BPMNShape_startEvent1">
<omgdc:Bounds height="30.0" width="30.0" x="29.99999952316287" y="189.99999169011954"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-7506C489-4B01-433D-9245-FCB86F44B2D1" id="BPMNShape_sid-7506C489-4B01-433D-9245-FCB86F44B2D1">
<omgdc:Bounds height="80.0" width="100.0" x="374.99998807907207" y="164.99998906751551"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-8A66234E-461D-446C-9AAB-3EE4DE0A13E6" id="BPMNShape_sid-8A66234E-461D-446C-9AAB-3EE4DE0A13E6">
<omgdc:Bounds height="53.99999988079075" width="263.99999523162865" x="29.999999523162877" y="104.99999499321028"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-2D77AB52-7893-4846-801F-7D3769994CC5" id="BPMNShape_sid-2D77AB52-7893-4846-801F-7D3769994CC5">
<omgdc:Bounds height="53.99999988079077" width="263.99999523162853" x="44.99999932944775" y="269.99999597668653"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-6E0F3E23-772A-476A-8E13-CF683DB6A386" id="BPMNShape_sid-6E0F3E23-772A-476A-8E13-CF683DB6A386">
<omgdc:Bounds height="28.0" width="28.0" x="600.000013775298" y="190.9999934526518"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-A022D9D1-332B-4046-BDD6-51C7B2E0A32F" id="BPMNShape_sid-A022D9D1-332B-4046-BDD6-51C7B2E0A32F">
<omgdc:Bounds height="80.0" width="100.0" x="179.99999463558214" y="164.99999508261695"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNEdge bpmnElement="sid-21C09C02-7353-4F4C-91A3-9F2AA4B27954" id="BPMNEdge_sid-21C09C02-7353-4F4C-91A3-9F2AA4B27954" flowable:sourceDockerX="50.0" flowable:sourceDockerY="40.0" flowable:targetDockerX="50.0" flowable:targetDockerY="40.0">
<omgdi:waypoint x="279.9499940823247" y="204.9999935402832"/>
<omgdi:waypoint x="374.9999877520785" y="204.99999060830692"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-1815A352-E00D-42EB-8ABD-398E18D08E31" id="BPMNEdge_sid-1815A352-E00D-42EB-8ABD-398E18D08E31" flowable:sourceDockerX="50.0" flowable:sourceDockerY="40.0" flowable:targetDockerX="14.0" flowable:targetDockerY="14.0">
<omgdi:waypoint x="474.949988079036" y="204.99999022644425"/>
<omgdi:waypoint x="600.0000137320285" y="204.99999312782694"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-37772A6F-3418-4A5D-8FD8-E3B5D9864D87" id="BPMNEdge_sid-37772A6F-3418-4A5D-8FD8-E3B5D9864D87" flowable:sourceDockerX="14.999999999999972" flowable:sourceDockerY="15.0" flowable:targetDockerX="1.0" flowable:targetDockerY="40.0">
<omgdi:waypoint x="59.9499985349906" y="204.99999206304483"/>
<omgdi:waypoint x="179.9999927530011" y="204.99999505767207"/>
</bpmndi:BPMNEdge>
</bpmndi:BPMNPlane>
</bpmndi:BPMNDiagram>
</definitions>`,`<definitions xmlns="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:flowable="http://flowable.org/bpmn" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:omgdc="http://www.omg.org/spec/DD/20100524/DC" xmlns:omgdi="http://www.omg.org/spec/DD/20100524/DI" typeLanguage="http://www.w3.org/2001/XMLSchema" expressionLanguage="http://www.w3.org/1999/XPath" targetNamespace="http://flowable.org/test" exporter="Flowable Open Source Modeler" exporterVersion="6.8.0">
<collaboration id="Collaboration">
<participant id="sid-EB80DDC1-50EB-4F8C-AB8F-81545195F4E9" name="PRIVATE-COMPLAINT" processRef="PRIVATE-COMPLAINT"/>
</collaboration>
<process id="PRIVATE-COMPLAINT" name="PRIVATE-COMPLAINT" isExecutable="true">
<laneSet id="laneSet_PRIVATE-COMPLAINT">
<lane id="sid-C526053D-0098-4765-8D08-4648609137CA">
<flowNodeRef>startEvent1</flowNodeRef>
<flowNodeRef>sid-5202C900-D84A-4EDF-8C70-93CBB4277326</flowNodeRef>
<flowNodeRef>sid-3790C0A2-69B0-4F0C-BFF5-B9DF035E71ED</flowNodeRef>
<flowNodeRef>sid-988CB1BF-406C-4A8C-BD0B-934DC6142435</flowNodeRef>
<flowNodeRef>sid-E7992E4F-9AD6-4B9C-8886-1BF3D7062B73</flowNodeRef>
</lane>
</laneSet>
<startEvent id="startEvent1" flowable:formKey="PRIVATE_COMPLAINT" flowable:formFieldValidation="true"/>
<userTask id="sid-5202C900-D84A-4EDF-8C70-93CBB4277326" name="Review comlaint" flowable:formKey="PRIVATE_COMPLAINT" flowable:formFieldValidation="true"/>
<endEvent id="sid-3790C0A2-69B0-4F0C-BFF5-B9DF035E71ED"/>
<sequenceFlow id="sid-988CB1BF-406C-4A8C-BD0B-934DC6142435" sourceRef="startEvent1" targetRef="sid-5202C900-D84A-4EDF-8C70-93CBB4277326"/>
<sequenceFlow id="sid-E7992E4F-9AD6-4B9C-8886-1BF3D7062B73" sourceRef="sid-5202C900-D84A-4EDF-8C70-93CBB4277326" targetRef="sid-3790C0A2-69B0-4F0C-BFF5-B9DF035E71ED"/>
</process>
<bpmndi:BPMNDiagram id="BPMNDiagram_Collaboration">
<bpmndi:BPMNPlane bpmnElement="Collaboration" id="BPMNPlane_Collaboration">
<bpmndi:BPMNShape bpmnElement="sid-EB80DDC1-50EB-4F8C-AB8F-81545195F4E9" id="BPMNShape_sid-EB80DDC1-50EB-4F8C-AB8F-81545195F4E9">
<omgdc:Bounds height="250.0" width="600.0" x="120.0" y="120.0"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-C526053D-0098-4765-8D08-4648609137CA" id="BPMNShape_sid-C526053D-0098-4765-8D08-4648609137CA">
<omgdc:Bounds height="250.0" width="570.0" x="150.0" y="120.0"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="startEvent1" id="BPMNShape_startEvent1">
<omgdc:Bounds height="30.0" width="30.0" x="225.0" y="230.0"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-5202C900-D84A-4EDF-8C70-93CBB4277326" id="BPMNShape_sid-5202C900-D84A-4EDF-8C70-93CBB4277326">
<omgdc:Bounds height="80.0" width="100.0" x="370.0" y="205.0"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-3790C0A2-69B0-4F0C-BFF5-B9DF035E71ED" id="BPMNShape_sid-3790C0A2-69B0-4F0C-BFF5-B9DF035E71ED">
<omgdc:Bounds height="28.0" width="28.0" x="600.0" y="231.0"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNEdge bpmnElement="sid-E7992E4F-9AD6-4B9C-8886-1BF3D7062B73" id="BPMNEdge_sid-E7992E4F-9AD6-4B9C-8886-1BF3D7062B73" flowable:sourceDockerX="50.0" flowable:sourceDockerY="40.0" flowable:targetDockerX="14.0" flowable:targetDockerY="14.0">
<omgdi:waypoint x="469.94999999985953" y="245.0"/>
<omgdi:waypoint x="600.0" y="245.0"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-988CB1BF-406C-4A8C-BD0B-934DC6142435" id="BPMNEdge_sid-988CB1BF-406C-4A8C-BD0B-934DC6142435" flowable:sourceDockerX="15.0" flowable:sourceDockerY="15.0" flowable:targetDockerX="50.0" flowable:targetDockerY="40.0">
<omgdi:waypoint x="254.94999943586106" y="245.0"/>
<omgdi:waypoint x="369.99999999997226" y="245.0"/>
</bpmndi:BPMNEdge>
</bpmndi:BPMNPlane>
</bpmndi:BPMNDiagram>
</definitions>`,`<definitions xmlns="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:flowable="http://flowable.org/bpmn" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:omgdc="http://www.omg.org/spec/DD/20100524/DC" xmlns:omgdi="http://www.omg.org/spec/DD/20100524/DI" typeLanguage="http://www.w3.org/2001/XMLSchema" expressionLanguage="http://www.w3.org/1999/XPath" targetNamespace="http://www.flowable.org/processdef" exporter="Flowable Open Source Modeler" exporterVersion="6.8.0">
<process id="APPLY-FOR-CREDIT-PRIVATE" name="APPLY-FOR-CREDIT-PRIVATE" isExecutable="true">
<documentation>Flow of apply for credit for BNA customers (authenticated users)</documentation>
<startEvent id="startEvent1" flowable:formKey="OnBoardingAgenceChoose" flowable:formFieldValidation="true">
<extensionElements>
<flowable:executionListener event="start" />
<flowable:executionListener event="start" />
<flowable:executionListener event="start" />
<flowable:executionListener event="start" />
<flowable:executionListener event="start" />
</extensionElements>
</startEvent>
<userTask id="sid-B2D2EBFF-45F8-43EE-900E-11A1401FCED6" name="Simulation" flowable:formFieldValidation="true"/>
<sequenceFlow id="sid-45CCC06E-2A85-4DE0-82D0-0C7BBFCB93B4" sourceRef="startEvent1" targetRef="sid-B2D2EBFF-45F8-43EE-900E-11A1401FCED6"/>
<sequenceFlow id="sid-FE44A016-098B-435F-8711-13180497AD43" sourceRef="sid-B2D2EBFF-45F8-43EE-900E-11A1401FCED6" targetRef="sid-752F91E2-0FC4-4767-AF8C-7EFDAEFD185B"/>
<endEvent id="sid-DF44ECE4-9111-4E91-A408-AB79739BE7A5"/>
<sequenceFlow id="sid-EA5C3290-146F-4627-859A-13942783CB22" sourceRef="sid-752F91E2-0FC4-4767-AF8C-7EFDAEFD185B" targetRef="sid-DF44ECE4-9111-4E91-A408-AB79739BE7A5"/>
<userTask id="sid-752F91E2-0FC4-4767-AF8C-7EFDAEFD185B" name="Confirmation" flowable:formFieldValidation="true"/>
<textAnnotation id="sid-2C22786B-719A-44EB-A3D3-5DBF2024A4C8">
<text>Choice Of Credit</text>
</textAnnotation>
<association id="sid-2C0A0238-5D07-4C3F-A9FB-6EEF03ADD46E" sourceRef="startEvent1" targetRef="sid-2C22786B-719A-44EB-A3D3-5DBF2024A4C8" associationDirection="None"/>
<textAnnotation id="sid-F574573B-8D45-4B43-A7E8-4194BA86A881">
<text>Credit Simulation</text>
</textAnnotation>
<association id="sid-B1A9E2D7-349E-4167-A0D2-34171855512E" sourceRef="sid-B2D2EBFF-45F8-43EE-900E-11A1401FCED6" targetRef="sid-F574573B-8D45-4B43-A7E8-4194BA86A881" associationDirection="None"/>
<textAnnotation id="sid-1D084244-0B13-47A5-B8C0-30556AAE9FBB">
<text>- Confirmation of credit application - Accord de principe </text>
</textAnnotation>
<association id="sid-FC01599C-1904-43BE-95EE-DE5B58404128" sourceRef="sid-752F91E2-0FC4-4767-AF8C-7EFDAEFD185B" targetRef="sid-1D084244-0B13-47A5-B8C0-30556AAE9FBB" associationDirection="None"/>
</process>
<bpmndi:BPMNDiagram id="BPMNDiagram_APPLY-FOR-CREDIT-PRIVATE">
<bpmndi:BPMNPlane bpmnElement="APPLY-FOR-CREDIT-PRIVATE" id="BPMNPlane_APPLY-FOR-CREDIT-PRIVATE">
<bpmndi:BPMNShape bpmnElement="startEvent1" id="BPMNShape_startEvent1">
<omgdc:Bounds height="30.0" width="30.0" x="100.0" y="163.0"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-2C22786B-719A-44EB-A3D3-5DBF2024A4C8" id="BPMNShape_sid-2C22786B-719A-44EB-A3D3-5DBF2024A4C8">
<omgdc:Bounds height="50.0" width="100.0" x="179.99999463558214" y="44.99999463558234"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-B2D2EBFF-45F8-43EE-900E-11A1401FCED6" id="BPMNShape_sid-B2D2EBFF-45F8-43EE-900E-11A1401FCED6">
<omgdc:Bounds height="80.0" width="100.0" x="328.9999788999567" y="137.99999588727962"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-F574573B-8D45-4B43-A7E8-4194BA86A881" id="BPMNShape_sid-F574573B-8D45-4B43-A7E8-4194BA86A881">
<omgdc:Bounds height="49.99999999999999" width="100.0" x="404.9999879300598" y="44.99999597668671"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-DF44ECE4-9111-4E91-A408-AB79739BE7A5" id="BPMNShape_sid-DF44ECE4-9111-4E91-A408-AB79739BE7A5">
<omgdc:Bounds height="28.0" width="28.0" x="749.9999776482589" y="163.99999511241927"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-752F91E2-0FC4-4767-AF8C-7EFDAEFD185B" id="BPMNShape_sid-752F91E2-0FC4-4767-AF8C-7EFDAEFD185B">
<omgdc:Bounds height="80.0" width="100.0" x="524.9999687075629" y="137.99998766183927"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-1D084244-0B13-47A5-B8C0-30556AAE9FBB" id="BPMNShape_sid-1D084244-0B13-47A5-B8C0-30556AAE9FBB">
<omgdc:Bounds height="44.00000017881393" width="128.9999991953374" x="644.9999615550059" y="47.99999168515287"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNEdge bpmnElement="sid-2C0A0238-5D07-4C3F-A9FB-6EEF03ADD46E" id="BPMNEdge_sid-2C0A0238-5D07-4C3F-A9FB-6EEF03ADD46E" flowable:sourceDockerX="15.0" flowable:sourceDockerY="15.0" flowable:targetDockerX="1.0" flowable:targetDockerY="24.0">
<omgdi:waypoint x="122.74454545789497" y="165.16698733790005"/>
<omgdi:waypoint x="179.99999463558214" y="70.56893423425875"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-B1A9E2D7-349E-4167-A0D2-34171855512E" id="BPMNEdge_sid-B1A9E2D7-349E-4167-A0D2-34171855512E" flowable:sourceDockerX="50.0" flowable:sourceDockerY="40.0" flowable:targetDockerX="1.0" flowable:targetDockerY="23.999999999999996">
<omgdi:waypoint x="388.89585377736387" y="137.99999588727962"/>
<omgdi:waypoint x="404.9999879300598" y="72.83517987605545"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-FC01599C-1904-43BE-95EE-DE5B58404128" id="BPMNEdge_sid-FC01599C-1904-43BE-95EE-DE5B58404128" flowable:sourceDockerX="50.0" flowable:sourceDockerY="40.0" flowable:targetDockerX="1.289999991953374" flowable:targetDockerY="21.120000085830686">
<omgdi:waypoint x="601.1575304399203" y="137.99998766183927"/>
<omgdi:waypoint x="644.9999615550059" y="71.01382270925704"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-EA5C3290-146F-4627-859A-13942783CB22" id="BPMNEdge_sid-EA5C3290-146F-4627-859A-13942783CB22" flowable:sourceDockerX="50.0" flowable:sourceDockerY="40.0" flowable:targetDockerX="14.0" flowable:targetDockerY="14.0">
<omgdi:waypoint x="624.9499683770938" y="177.99998963092102"/>
<omgdi:waypoint x="749.9999773598255" y="177.99999456052447"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-45CCC06E-2A85-4DE0-82D0-0C7BBFCB93B4" id="BPMNEdge_sid-45CCC06E-2A85-4DE0-82D0-0C7BBFCB93B4" flowable:sourceDockerX="15.0" flowable:sourceDockerY="15.0" flowable:targetDockerX="50.0" flowable:targetDockerY="40.0">
<omgdi:waypoint x="129.94999973774114" y="177.99999976632267"/>
<omgdi:waypoint x="328.9999772017742" y="177.99999666542507"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-FE44A016-098B-435F-8711-13180497AD43" id="BPMNEdge_sid-FE44A016-098B-435F-8711-13180497AD43" flowable:sourceDockerX="50.0" flowable:sourceDockerY="40.0" flowable:targetDockerX="50.0" flowable:targetDockerY="40.0">
<omgdi:waypoint x="428.9499788169086" y="177.9999937889529"/>
<omgdi:waypoint x="524.999968322248" y="177.9999897580677"/>
</bpmndi:BPMNEdge>
</bpmndi:BPMNPlane>
</bpmndi:BPMNDiagram>
</definitions>`,`<definitions xmlns="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:flowable="http://flowable.org/bpmn" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:omgdc="http://www.omg.org/spec/DD/20100524/DC" xmlns:omgdi="http://www.omg.org/spec/DD/20100524/DI" typeLanguage="http://www.w3.org/2001/XMLSchema" expressionLanguage="http://www.w3.org/1999/XPath" targetNamespace="http://www.flowable.org/processdef" exporter="Flowable Open Source Modeler" exporterVersion="6.8.0">
<process id="APPLY-FOR-CREDIT" name="APPLY-FOR-CREDIT" isExecutable="true">
<startEvent id="startEvent1" flowable:formKey="OnBoardingAgenceChoose" flowable:formFieldValidation="true">
<extensionElements>
<flowable:executionListener event="start" />
<flowable:executionListener event="start"/>
<flowable:executionListener event="start"/>
<flowable:executionListener event="start" />
<flowable:executionListener event="start" />
</extensionElements>
</startEvent>
<userTask id="sid-8A4D881D-399B-4EE0-9259-47C02818ADF0" name="Authentication (E-Mail OR SMS)" flowable:formKey="ContactUs" flowable:formFieldValidation="true"/>
<userTask id="sid-2078C253-A074-4B66-903F-2D3CAFDCE38C" name="Simulation" flowable:formKey="ContactUs" flowable:formFieldValidation="true"/>
<userTask id="sid-0B0E4CBC-F0C3-408C-B727-09BAC4C561B9" name="Confirmation" flowable:formKey="ContactUs" flowable:formFieldValidation="true"/>
<sequenceFlow id="sid-3DD7119F-6959-4D03-A3FB-245D03972138" sourceRef="sid-2078C253-A074-4B66-903F-2D3CAFDCE38C" targetRef="sid-0B0E4CBC-F0C3-408C-B727-09BAC4C561B9"/>
<serviceTask id="sid-4C34B192-DB08-4FCC-A146-02DB4FCCF6D6" name="Check Credentials Validity" />
<exclusiveGateway id="sid-8DC96BB1-1051-4A68-9D89-EF7D069BA2EC"/>
<endEvent id="sid-C71F4356-68C7-4E5C-9AD0-2F2ACD796829"/>
<serviceTask id="sid-8824C6EA-B026-4036-A181-441778B6147E" name="Send OTP" />
<userTask id="sid-A02D8A91-1279-45E6-9C4F-9E09588AE499" name="OTP Form" flowable:formKey="Subscription-Otp-Step" flowable:formFieldValidation="true"/>
<exclusiveGateway id="sid-94002D28-A952-4C2D-B37E-4719A1A74A41"/>
<serviceTask id="sid-D40FB894-A322-493D-A6A4-B85BA3B6B3F8" name="Check OTP" />
<sequenceFlow id="sid-256BF981-A29B-4854-AE10-3DE854A23530" sourceRef="sid-94002D28-A952-4C2D-B37E-4719A1A74A41" targetRef="sid-D40FB894-A322-493D-A6A4-B85BA3B6B3F8"/>
<exclusiveGateway id="sid-22A65B44-C288-4E02-96F4-8855F7DF5DD8"/>
<endEvent id="sid-86153686-27CF-4D84-9DD0-9FC726BF9616"/>
<sequenceFlow id="sid-82079FF2-7E9E-4346-ABA0-F0A3192A926C" sourceRef="sid-0B0E4CBC-F0C3-408C-B727-09BAC4C561B9" targetRef="sid-86153686-27CF-4D84-9DD0-9FC726BF9616"/>
<sequenceFlow id="sid-21402F3B-82D3-4AC5-AC10-22E96A9BBAB3" sourceRef="sid-4C34B192-DB08-4FCC-A146-02DB4FCCF6D6" targetRef="sid-8DC96BB1-1051-4A68-9D89-EF7D069BA2EC"/>
<userTask id="sid-634A64F5-AA48-450B-ADC3-DABD2867D79F" name="Choice Of Credit" flowable:formKey="ContactUs" flowable:formFieldValidation="true"/>
<sequenceFlow id="sid-ABF52B6C-539C-4C2A-A924-2582FBE41D6E" sourceRef="sid-634A64F5-AA48-450B-ADC3-DABD2867D79F" targetRef="sid-2078C253-A074-4B66-903F-2D3CAFDCE38C"/>
<sequenceFlow id="sid-2EA6B518-8E0F-4CC7-8D3F-65C5775835FD" sourceRef="sid-D40FB894-A322-493D-A6A4-B85BA3B6B3F8" targetRef="sid-22A65B44-C288-4E02-96F4-8855F7DF5DD8"/>
<sequenceFlow id="sid-B9C24E48-8A3C-47FF-A25E-1375565BCE70" sourceRef="sid-8824C6EA-B026-4036-A181-441778B6147E" targetRef="sid-A02D8A91-1279-45E6-9C4F-9E09588AE499"/>
<sequenceFlow id="sid-C4C13992-4B53-44AC-A1E2-F34072B04703" sourceRef="sid-A02D8A91-1279-45E6-9C4F-9E09588AE499" targetRef="sid-94002D28-A952-4C2D-B37E-4719A1A74A41"/>
<sequenceFlow id="sid-EB1E36E4-0CD2-456E-8C60-A668F30BA073" name="Valid Credentials" sourceRef="sid-8DC96BB1-1051-4A68-9D89-EF7D069BA2EC" targetRef="sid-8A4D881D-399B-4EE0-9259-47C02818ADF0">
<conditionExpression xsi:type="tFormalExpression">

</conditionExpression>
</sequenceFlow>
<sequenceFlow id="sid-AD570CDA-9A3F-468F-8957-0F53BC15099F" name="Invalid Credentials" sourceRef="sid-8DC96BB1-1051-4A68-9D89-EF7D069BA2EC" targetRef="sid-C71F4356-68C7-4E5C-9AD0-2F2ACD796829">
<conditionExpression xsi:type="tFormalExpression">

</conditionExpression>
</sequenceFlow>
<sequenceFlow id="sid-5E5C9E59-2CAA-49CA-BB0F-E354F21A3EA1" name="Resend OTP" sourceRef="sid-94002D28-A952-4C2D-B37E-4719A1A74A41" targetRef="sid-8824C6EA-B026-4036-A181-441778B6147E">
<conditionExpression xsi:type="tFormalExpression">

</conditionExpression>
</sequenceFlow>
<sequenceFlow id="sid-B021640E-BB45-4FED-8C14-B5E628CD016C" name="Valid OTP" sourceRef="sid-22A65B44-C288-4E02-96F4-8855F7DF5DD8" targetRef="sid-634A64F5-AA48-450B-ADC3-DABD2867D79F">
<conditionExpression xsi:type="tFormalExpression">
</conditionExpression>
</sequenceFlow>
<sequenceFlow id="sid-5E2A112D-AA06-4BFC-85A8-11686CB4A3DC" name="Invalid OTP" sourceRef="sid-22A65B44-C288-4E02-96F4-8855F7DF5DD8" targetRef="sid-A02D8A91-1279-45E6-9C4F-9E09588AE499">
<conditionExpression xsi:type="tFormalExpression">
</conditionExpression>
</sequenceFlow>
<sequenceFlow id="sid-890E1DE0-157D-4A6C-88C3-A51E91658B82" sourceRef="startEvent1" targetRef="sid-4C34B192-DB08-4FCC-A146-02DB4FCCF6D6"/>
<sequenceFlow id="sid-C671C812-418F-4B9E-B715-53AA7569B3CC" sourceRef="sid-8A4D881D-399B-4EE0-9259-47C02818ADF0" targetRef="sid-8824C6EA-B026-4036-A181-441778B6147E"/>
</process>
<bpmndi:BPMNDiagram id="BPMNDiagram_APPLY-FOR-CREDIT">
<bpmndi:BPMNPlane bpmnElement="APPLY-FOR-CREDIT" id="BPMNPlane_APPLY-FOR-CREDIT">
<bpmndi:BPMNShape bpmnElement="startEvent1" id="BPMNShape_startEvent1">
<omgdc:Bounds height="30.0" width="30.0" x="0.0" y="163.0"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-8A4D881D-399B-4EE0-9259-47C02818ADF0" id="BPMNShape_sid-8A4D881D-399B-4EE0-9259-47C02818ADF0">
<omgdc:Bounds height="80.0" width="99.99999999999989" x="749.9999776482589" y="137.99999177455936"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-2078C253-A074-4B66-903F-2D3CAFDCE38C" id="BPMNShape_sid-2078C253-A074-4B66-903F-2D3CAFDCE38C">
<omgdc:Bounds height="80.0" width="100.0" x="1319.9999213218723" y="137.99999588727962"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-0B0E4CBC-F0C3-408C-B727-09BAC4C561B9" id="BPMNShape_sid-0B0E4CBC-F0C3-408C-B727-09BAC4C561B9">
<omgdc:Bounds height="80.0" width="100.0" x="1480.0" y="138.0"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-4C34B192-DB08-4FCC-A146-02DB4FCCF6D6" id="BPMNShape_sid-4C34B192-DB08-4FCC-A146-02DB4FCCF6D6">
<omgdc:Bounds height="80.0" width="100.0" x="179.99999463558214" y="137.99999588727962"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-8DC96BB1-1051-4A68-9D89-EF7D069BA2EC" id="BPMNShape_sid-8DC96BB1-1051-4A68-9D89-EF7D069BA2EC">
<omgdc:Bounds height="40.0" width="40.0" x="484.99998256564174" y="157.99999764561656"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-C71F4356-68C7-4E5C-9AD0-2F2ACD796829" id="BPMNShape_sid-C71F4356-68C7-4E5C-9AD0-2F2ACD796829">
<omgdc:Bounds height="28.0" width="28.0" x="490.9999737590558" y="339.9999908506872"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-8824C6EA-B026-4036-A181-441778B6147E" id="BPMNShape_sid-8824C6EA-B026-4036-A181-441778B6147E">
<omgdc:Bounds height="80.0" width="100.0" x="989.0" y="138.0"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-A02D8A91-1279-45E6-9C4F-9E09588AE499" id="BPMNShape_sid-A02D8A91-1279-45E6-9C4F-9E09588AE499">
<omgdc:Bounds height="80.0" width="100.0" x="989.0" y="313.9999908506872"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-94002D28-A952-4C2D-B37E-4719A1A74A41" id="BPMNShape_sid-94002D28-A952-4C2D-B37E-4719A1A74A41">
<omgdc:Bounds height="40.0" width="40.0" x="1019.0" y="480.0"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-D40FB894-A322-493D-A6A4-B85BA3B6B3F8" id="BPMNShape_sid-D40FB894-A322-493D-A6A4-B85BA3B6B3F8">
<omgdc:Bounds height="80.0" width="100.0" x="988.9999705255041" y="614.9999633431452"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-22A65B44-C288-4E02-96F4-8855F7DF5DD8" id="BPMNShape_sid-22A65B44-C288-4E02-96F4-8855F7DF5DD8">
<omgdc:Bounds height="40.0" width="40.0" x="1019.0" y="781.0"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-86153686-27CF-4D84-9DD0-9FC726BF9616" id="BPMNShape_sid-86153686-27CF-4D84-9DD0-9FC726BF9616">
<omgdc:Bounds height="28.0" width="28.0" x="1630.0" y="163.9999958872796"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-634A64F5-AA48-450B-ADC3-DABD2867D79F" id="BPMNShape_sid-634A64F5-AA48-450B-ADC3-DABD2867D79F">
<omgdc:Bounds height="80.0" width="100.0" x="1154.9999311566385" y="137.99999588727962"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNEdge bpmnElement="sid-5E5C9E59-2CAA-49CA-BB0F-E354F21A3EA1" id="BPMNEdge_sid-5E5C9E59-2CAA-49CA-BB0F-E354F21A3EA1" flowable:sourceDockerX="20.0" flowable:sourceDockerY="20.0" flowable:targetDockerX="50.0" flowable:targetDockerY="40.0">
<omgdi:waypoint x="1058.848025092937" y="500.09279069767433"/>
<omgdi:waypoint x="1146.0" y="500.5"/>
<omgdi:waypoint x="1146.0" y="178.0"/>
<omgdi:waypoint x="1088.9499999999484" y="178.0"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-82079FF2-7E9E-4346-ABA0-F0A3192A926C" id="BPMNEdge_sid-82079FF2-7E9E-4346-ABA0-F0A3192A926C" flowable:sourceDockerX="50.0" flowable:sourceDockerY="40.0" flowable:targetDockerX="14.0" flowable:targetDockerY="14.0">
<omgdi:waypoint x="1579.9499997253004" y="177.99999819617528"/>
<omgdi:waypoint x="1630.0" y="177.9999963905467"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-AD570CDA-9A3F-468F-8957-0F53BC15099F" id="BPMNEdge_sid-AD570CDA-9A3F-468F-8957-0F53BC15099F" flowable:sourceDockerX="20.0" flowable:sourceDockerY="20.0" flowable:targetDockerX="14.0" flowable:targetDockerY="14.0">
<omgdi:waypoint x="504.99998156489335" y="197.94433424756454"/>
<omgdi:waypoint x="504.9999737590558" y="339.9999908506872"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-C671C812-418F-4B9E-B715-53AA7569B3CC" id="BPMNEdge_sid-C671C812-418F-4B9E-B715-53AA7569B3CC" flowable:sourceDockerX="49.99999999999994" flowable:sourceDockerY="40.0" flowable:targetDockerX="50.0" flowable:targetDockerY="40.0">
<omgdi:waypoint x="849.9499768954831" y="177.99999349364185"/>
<omgdi:waypoint x="989.0" y="177.9999982791967"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-ABF52B6C-539C-4C2A-A924-2582FBE41D6E" id="BPMNEdge_sid-ABF52B6C-539C-4C2A-A924-2582FBE41D6E" flowable:sourceDockerX="50.0" flowable:sourceDockerY="40.0" flowable:targetDockerX="50.0" flowable:targetDockerY="40.0">
<omgdi:waypoint x="1254.9499311566194" y="177.99999588727962"/>
<omgdi:waypoint x="1319.9999213218723" y="177.99999588727962"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-21402F3B-82D3-4AC5-AC10-22E96A9BBAB3" id="BPMNEdge_sid-21402F3B-82D3-4AC5-AC10-22E96A9BBAB3" flowable:sourceDockerX="50.0" flowable:sourceDockerY="40.0" flowable:targetDockerX="20.0" flowable:targetDockerY="20.0">
<omgdi:waypoint x="279.9499932360849" y="177.99999620665756"/>
<omgdi:waypoint x="484.99997932164285" y="177.99999751773748"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-B9C24E48-8A3C-47FF-A25E-1375565BCE70" id="BPMNEdge_sid-B9C24E48-8A3C-47FF-A25E-1375565BCE70" flowable:sourceDockerX="50.0" flowable:sourceDockerY="40.0" flowable:targetDockerX="50.0" flowable:targetDockerY="40.0">
<omgdi:waypoint x="1039.0" y="217.95000000000002"/>
<omgdi:waypoint x="1039.0" y="313.9999908506872"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-3DD7119F-6959-4D03-A3FB-245D03972138" id="BPMNEdge_sid-3DD7119F-6959-4D03-A3FB-245D03972138" flowable:sourceDockerX="50.0" flowable:sourceDockerY="40.0" flowable:targetDockerX="50.0" flowable:targetDockerY="40.0">
<omgdi:waypoint x="1419.9499205510037" y="177.99999717121887"/>
<omgdi:waypoint x="1479.999999462276" y="177.9999987147755"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-256BF981-A29B-4854-AE10-3DE854A23530" id="BPMNEdge_sid-256BF981-A29B-4854-AE10-3DE854A23530" flowable:sourceDockerX="20.0" flowable:sourceDockerY="20.0" flowable:targetDockerX="50.0" flowable:targetDockerY="40.0">
<omgdi:waypoint x="1038.999996196839" y="519.9435724538437"/>
<omgdi:waypoint x="1038.9999781223196" y="614.9999633431452"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-C4C13992-4B53-44AC-A1E2-F34072B04703" id="BPMNEdge_sid-C4C13992-4B53-44AC-A1E2-F34072B04703" flowable:sourceDockerX="50.0" flowable:sourceDockerY="40.0" flowable:targetDockerX="20.0" flowable:targetDockerY="20.0">
<omgdi:waypoint x="1039.0" y="393.9499908506872"/>
<omgdi:waypoint x="1039.0" y="480.0"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-5E2A112D-AA06-4BFC-85A8-11686CB4A3DC" id="BPMNEdge_sid-5E2A112D-AA06-4BFC-85A8-11686CB4A3DC" flowable:sourceDockerX="20.0" flowable:sourceDockerY="20.0" flowable:targetDockerX="50.0" flowable:targetDockerY="40.0">
<omgdi:waypoint x="1019.0790513833899" y="801.0788537549407"/>
<omgdi:waypoint x="913.0" y="801.5"/>
<omgdi:waypoint x="913.0" y="353.9999908506872"/>
<omgdi:waypoint x="989.0" y="353.9999908506872"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-EB1E36E4-0CD2-456E-8C60-A668F30BA073" id="BPMNEdge_sid-EB1E36E4-0CD2-456E-8C60-A668F30BA073" flowable:sourceDockerX="20.0" flowable:sourceDockerY="20.0" flowable:targetDockerX="49.99999999999994" flowable:targetDockerY="40.0">
<omgdi:waypoint x="524.9466027523281" y="177.99999724757885"/>
<omgdi:waypoint x="749.9999756981464" y="177.99999276865873"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-2EA6B518-8E0F-4CC7-8D3F-65C5775835FD" id="BPMNEdge_sid-2EA6B518-8E0F-4CC7-8D3F-65C5775835FD" flowable:sourceDockerX="50.0" flowable:sourceDockerY="40.0" flowable:targetDockerX="20.0" flowable:targetDockerY="20.0">
<omgdi:waypoint x="1038.9999785906125" y="694.9499633431451"/>
<omgdi:waypoint x="1038.9999959623997" y="781.0"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-B021640E-BB45-4FED-8C14-B5E628CD016C" id="BPMNEdge_sid-B021640E-BB45-4FED-8C14-B5E628CD016C" flowable:sourceDockerX="20.0" flowable:sourceDockerY="20.0" flowable:targetDockerX="50.0" flowable:targetDockerY="40.0">
<omgdi:waypoint x="1058.8841386282463" y="801.0599099346812"/>
<omgdi:waypoint x="1204.9999311566385" y="801.5"/>
<omgdi:waypoint x="1204.9999311566385" y="217.94999588727964"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-890E1DE0-157D-4A6C-88C3-A51E91658B82" id="BPMNEdge_sid-890E1DE0-157D-4A6C-88C3-A51E91658B82" flowable:sourceDockerX="15.0" flowable:sourceDockerY="15.0" flowable:targetDockerX="50.0" flowable:targetDockerY="40.0">
<omgdi:waypoint x="29.949999604612593" y="177.99999971306602"/>
<omgdi:waypoint x="179.99999443187767" y="177.9999968427698"/>
</bpmndi:BPMNEdge>
</bpmndi:BPMNPlane>
</bpmndi:BPMNDiagram>
</definitions>`,`<definitions xmlns="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:flowable="http://flowable.org/bpmn" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:omgdc="http://www.omg.org/spec/DD/20100524/DC" xmlns:omgdi="http://www.omg.org/spec/DD/20100524/DI" typeLanguage="http://www.w3.org/2001/XMLSchema" expressionLanguage="http://www.w3.org/1999/XPath" targetNamespace="http://flowable.org/test" exporter="Flowable Open Source Modeler" exporterVersion="6.8.0">
<collaboration id="Collaboration">
<participant id="sid-4C011B7E-A905-4729-BD94-111D4E27F59F" name="PROFILE-SUB-ACCOUNT" processRef="PROFILE-SUB-ACCOUNT"/>
</collaboration>
<process id="PROFILE-SUB-ACCOUNT" name="PROFILE-SUB-ACCOUNT" isExecutable="true">
<laneSet id="laneSet_PROFILE-SUB-ACCOUNT">
<lane id="sid-548DC6DC-14FD-4085-BE83-069DF3626BA5">
<flowNodeRef>startEvent1</flowNodeRef>
<flowNodeRef>sid-195ADED9-C3B5-40ED-AFD4-2CFF0B6741A7</flowNodeRef>
<flowNodeRef>sid-CD29B5A8-F36A-432E-A1D6-34E34CF21AF3</flowNodeRef>
<flowNodeRef>sid-13552514-9AFF-45D5-B5D2-370FA17F4ED8</flowNodeRef>
<flowNodeRef>sid-9A2AF15F-7EF2-496B-B6F4-CECF57CAE816</flowNodeRef>
</lane>
</laneSet>
<startEvent id="startEvent1" flowable:formKey="PROFILE_SUB_ACCOUNT" flowable:formFieldValidation="true">
<extensionElements>
<flowable:executionListener event="start" />
<flowable:executionListener event="start" />
<flowable:executionListener event="start" />
<flowable:executionListener event="start" />
</extensionElements>
</startEvent>
<endEvent id="sid-195ADED9-C3B5-40ED-AFD4-2CFF0B6741A7"/>
<userTask id="sid-CD29B5A8-F36A-432E-A1D6-34E34CF21AF3" name="Sub account" flowable:assignee="$INITIATOR" flowable:formFieldValidation="true">
<extensionElements>
<modeler:activiti-idm-initiator xmlns:modeler="http://flowable.org/modeler">
<![CDATA[ true ]]>
</modeler:activiti-idm-initiator>
</extensionElements>
</userTask>
<sequenceFlow id="sid-13552514-9AFF-45D5-B5D2-370FA17F4ED8" sourceRef="startEvent1" targetRef="sid-CD29B5A8-F36A-432E-A1D6-34E34CF21AF3"/>
<sequenceFlow id="sid-9A2AF15F-7EF2-496B-B6F4-CECF57CAE816" sourceRef="sid-CD29B5A8-F36A-432E-A1D6-34E34CF21AF3" targetRef="sid-195ADED9-C3B5-40ED-AFD4-2CFF0B6741A7"/>
</process>
<bpmndi:BPMNDiagram id="BPMNDiagram_Collaboration">
<bpmndi:BPMNPlane bpmnElement="Collaboration" id="BPMNPlane_Collaboration">
<bpmndi:BPMNShape bpmnElement="sid-4C011B7E-A905-4729-BD94-111D4E27F59F" id="BPMNShape_sid-4C011B7E-A905-4729-BD94-111D4E27F59F">
<omgdc:Bounds height="249.99999999999994" width="600.0" x="44.999998658895514" y="89.99999731779103"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-548DC6DC-14FD-4085-BE83-069DF3626BA5" id="BPMNShape_sid-548DC6DC-14FD-4085-BE83-069DF3626BA5">
<omgdc:Bounds height="249.99999999999994" width="570.0" x="74.99999865889552" y="89.99999731779103"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="startEvent1" id="BPMNShape_startEvent1">
<omgdc:Bounds height="30.000000000000014" width="30.0" x="164.9999968707562" y="199.9999967813492"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-195ADED9-C3B5-40ED-AFD4-2CFF0B6741A7" id="BPMNShape_sid-195ADED9-C3B5-40ED-AFD4-2CFF0B6741A7">
<omgdc:Bounds height="28.000000000000014" width="27.99999999999997" x="464.9999924004079" y="200.99999676644805"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-CD29B5A8-F36A-432E-A1D6-34E34CF21AF3" id="BPMNShape_sid-CD29B5A8-F36A-432E-A1D6-34E34CF21AF3">
<omgdc:Bounds height="79.99999999999999" width="99.99999999999991" x="270.0" y="174.99999731779099"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNEdge bpmnElement="sid-9A2AF15F-7EF2-496B-B6F4-CECF57CAE816" id="BPMNEdge_sid-9A2AF15F-7EF2-496B-B6F4-CECF57CAE816" flowable:sourceDockerX="49.99999999999997" flowable:sourceDockerY="39.99999999999999" flowable:targetDockerX="14.0" flowable:targetDockerY="14.000000000000007">
<omgdi:waypoint x="369.9499999999458" y="214.9999971444127"/>
<omgdi:waypoint x="464.9999903889563" y="214.99999681482058"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-13552514-9AFF-45D5-B5D2-370FA17F4ED8" id="BPMNEdge_sid-13552514-9AFF-45D5-B5D2-370FA17F4ED8" flowable:sourceDockerX="15.0" flowable:sourceDockerY="15.000000000000007" flowable:targetDockerX="49.99999999999997" flowable:targetDockerY="39.99999999999999">
<omgdi:waypoint x="194.94999593833097" y="214.99999683863354"/>
<omgdi:waypoint x="270.0" y="214.99999712620465"/>
</bpmndi:BPMNEdge>
</bpmndi:BPMNPlane>
</bpmndi:BPMNDiagram>
</definitions>`,`<definitions xmlns="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:flowable="http://flowable.org/bpmn" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:omgdc="http://www.omg.org/spec/DD/20100524/DC" xmlns:omgdi="http://www.omg.org/spec/DD/20100524/DI" typeLanguage="http://www.w3.org/2001/XMLSchema" expressionLanguage="http://www.w3.org/1999/XPath" targetNamespace="http://flowable.org/test" exporter="Flowable Open Source Modeler" exporterVersion="6.8.0">
<collaboration id="Collaboration">
<participant id="sid-99179D86-DFE8-40FD-ACA2-85B42856786D" name="SUBSCRIPTION-VALIDATION" processRef="SUBSCRIPTION-VALIDATION"/>
</collaboration>
<process id="SUBSCRIPTION-VALIDATION" name="SUBSCRIPTION-VALIDATION" isExecutable="true">
<laneSet id="laneSet_SUBSCRIPTION-VALIDATION">
<lane id="sid-7F69D470-C6ED-4EEA-B71F-EA554490D875">
<flowNodeRef>startEvent1</flowNodeRef>
<flowNodeRef>sid-24037A09-5D18-4119-900E-A18282F5DFBA</flowNodeRef>
<flowNodeRef>sid-3540AB96-F4EF-4B6E-B853-6EDE94D6CE85</flowNodeRef>
<flowNodeRef>sid-A661CCAF-94C4-4C02-B79D-18C990D5EBD5</flowNodeRef>
<flowNodeRef>sid-2F41FB9F-54AF-48F1-BFC4-B58C4662FAB9</flowNodeRef>
<flowNodeRef>sid-8081FD7B-EFB2-4FA1-AA0B-EC24CF302418</flowNodeRef>
<flowNodeRef>sid-F3FA65F1-5701-4004-97F5-968899A97430</flowNodeRef>
<flowNodeRef>sid-C9D8D1CE-29D0-49BB-9F5C-FDECB1D57A89</flowNodeRef>
<flowNodeRef>sid-75CE4199-AD13-483D-A406-B1EC736754C4</flowNodeRef>
<flowNodeRef>sid-783F8887-E835-45E1-B6CB-AB9320FF637B</flowNodeRef>
<flowNodeRef>sid-D0D42C6F-042A-42F5-8DCD-AD5A2C3B8A1F</flowNodeRef>
<flowNodeRef>sid-812FF794-1F12-4FDC-8D3C-84340F5C75D0</flowNodeRef>
<flowNodeRef>sid-2088DA1D-F5B6-4DF1-B488-9042CB90F582</flowNodeRef>
<flowNodeRef>sid-8E53F188-B4EF-4135-B696-D60F618CD877</flowNodeRef>
<flowNodeRef>sid-FA0C1866-9A01-4977-AA2A-8DA6D101E4FE</flowNodeRef>
<flowNodeRef>sid-138AE6FB-16CE-4B34-8C29-BEC40816F7B5</flowNodeRef>
</lane>
</laneSet>
<startEvent id="startEvent1" flowable:formFieldValidation="true"/>
<userTask id="sid-24037A09-5D18-4119-900E-A18282F5DFBA" name="Signature client Agence" flowable:formFieldValidation="true"/>
<serviceTask id="sid-3540AB96-F4EF-4B6E-B853-6EDE94D6CE85" name="Activate Account"/>
<endEvent id="sid-A661CCAF-94C4-4C02-B79D-18C990D5EBD5"/>
<serviceTask id="sid-2F41FB9F-54AF-48F1-BFC4-B58C4662FAB9" name="Disable digital account"/>
<boundaryEvent id="sid-F3FA65F1-5701-4004-97F5-968899A97430" cancelActivity="true">
<timerEventDefinition/>
</boundaryEvent>
<sequenceFlow id="sid-812FF794-1F12-4FDC-8D3C-84340F5C75D0" sourceRef="startEvent1" targetRef="sid-24037A09-5D18-4119-900E-A18282F5DFBA"/>
<sequenceFlow id="sid-2088DA1D-F5B6-4DF1-B488-9042CB90F582" sourceRef="sid-F3FA65F1-5701-4004-97F5-968899A97430" targetRef="sid-2F41FB9F-54AF-48F1-BFC4-B58C4662FAB9"/>
<sequenceFlow id="sid-8E53F188-B4EF-4135-B696-D60F618CD877" sourceRef="sid-24037A09-5D18-4119-900E-A18282F5DFBA" targetRef="sid-3540AB96-F4EF-4B6E-B853-6EDE94D6CE85"/>
<sequenceFlow id="sid-FA0C1866-9A01-4977-AA2A-8DA6D101E4FE" sourceRef="sid-3540AB96-F4EF-4B6E-B853-6EDE94D6CE85" targetRef="sid-A661CCAF-94C4-4C02-B79D-18C990D5EBD5"/>
<sequenceFlow id="sid-138AE6FB-16CE-4B34-8C29-BEC40816F7B5" sourceRef="sid-2F41FB9F-54AF-48F1-BFC4-B58C4662FAB9" targetRef="sid-24037A09-5D18-4119-900E-A18282F5DFBA"/>
<textAnnotation id="sid-8081FD7B-EFB2-4FA1-AA0B-EC24CF302418">
<text>Can't initiate new process</text>
</textAnnotation>
<textAnnotation id="sid-C9D8D1CE-29D0-49BB-9F5C-FDECB1D57A89">
<text>Actif pack intermidiere</text>
</textAnnotation>
<textAnnotation id="sid-75CE4199-AD13-483D-A406-B1EC736754C4">
<text>Actif catalogue service choisi</text>
</textAnnotation>
<textAnnotation id="sid-783F8887-E835-45E1-B6CB-AB9320FF637B">
<text>Front Popup timer</text>
</textAnnotation>
<textAnnotation id="sid-D0D42C6F-042A-42F5-8DCD-AD5A2C3B8A1F">
<text>Message informative</text>
</textAnnotation>
</process>
<bpmndi:BPMNDiagram id="BPMNDiagram_Collaboration">
<bpmndi:BPMNPlane bpmnElement="Collaboration" id="BPMNPlane_Collaboration">
<bpmndi:BPMNShape bpmnElement="sid-99179D86-DFE8-40FD-ACA2-85B42856786D" id="BPMNShape_sid-99179D86-DFE8-40FD-ACA2-85B42856786D">
<omgdc:Bounds height="330.0" width="755.0" x="60.0" y="75.0"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-7F69D470-C6ED-4EEA-B71F-EA554490D875" id="BPMNShape_sid-7F69D470-C6ED-4EEA-B71F-EA554490D875">
<omgdc:Bounds height="330.0" width="725.0" x="90.0" y="75.0"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="startEvent1" id="BPMNShape_startEvent1">
<omgdc:Bounds height="30.0" width="30.0" x="131.75" y="160.0"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-24037A09-5D18-4119-900E-A18282F5DFBA" id="BPMNShape_sid-24037A09-5D18-4119-900E-A18282F5DFBA">
<omgdc:Bounds height="80.0" width="100.0" x="281.75" y="135.0"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-3540AB96-F4EF-4B6E-B853-6EDE94D6CE85" id="BPMNShape_sid-3540AB96-F4EF-4B6E-B853-6EDE94D6CE85">
<omgdc:Bounds height="80.0" width="100.0" x="510.0" y="135.0"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-A661CCAF-94C4-4C02-B79D-18C990D5EBD5" id="BPMNShape_sid-A661CCAF-94C4-4C02-B79D-18C990D5EBD5">
<omgdc:Bounds height="28.0" width="28.0" x="735.0" y="161.0"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-2F41FB9F-54AF-48F1-BFC4-B58C4662FAB9" id="BPMNShape_sid-2F41FB9F-54AF-48F1-BFC4-B58C4662FAB9">
<omgdc:Bounds height="80.0" width="100.0" x="281.75" y="282.0"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-8081FD7B-EFB2-4FA1-AA0B-EC24CF302418" id="BPMNShape_sid-8081FD7B-EFB2-4FA1-AA0B-EC24CF302418">
<omgdc:Bounds height="50.0" width="100.0" x="180.0" y="300.0"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-F3FA65F1-5701-4004-97F5-968899A97430" id="BPMNShape_sid-F3FA65F1-5701-4004-97F5-968899A97430">
<omgdc:Bounds height="31.0" width="31.0" x="277.1710031215116" y="200.02635986948314"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-C9D8D1CE-29D0-49BB-9F5C-FDECB1D57A89" id="BPMNShape_sid-C9D8D1CE-29D0-49BB-9F5C-FDECB1D57A89">
<omgdc:Bounds height="50.0" width="100.0" x="150.0" y="90.0"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-75CE4199-AD13-483D-A406-B1EC736754C4" id="BPMNShape_sid-75CE4199-AD13-483D-A406-B1EC736754C4">
<omgdc:Bounds height="44.0" width="194.0" x="615.0" y="90.0"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-783F8887-E835-45E1-B6CB-AB9320FF637B" id="BPMNShape_sid-783F8887-E835-45E1-B6CB-AB9320FF637B">
<omgdc:Bounds height="32.0" width="138.0" x="131.0" y="210.0"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-D0D42C6F-042A-42F5-8DCD-AD5A2C3B8A1F" id="BPMNShape_sid-D0D42C6F-042A-42F5-8DCD-AD5A2C3B8A1F">
<omgdc:Bounds height="50.0" width="100.0" x="387.49999422580015" y="86.99999870359899"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNEdge bpmnElement="sid-2088DA1D-F5B6-4DF1-B488-9042CB90F582" id="BPMNEdge_sid-2088DA1D-F5B6-4DF1-B488-9042CB90F582" flowable:sourceDockerX="16.0" flowable:sourceDockerY="16.0" flowable:targetDockerX="50.0" flowable:targetDockerY="40.0">
<omgdi:waypoint x="298.6286766294091" y="231.01673788801597"/>
<omgdi:waypoint x="317.18826678748616" y="282.0"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-FA0C1866-9A01-4977-AA2A-8DA6D101E4FE" id="BPMNEdge_sid-FA0C1866-9A01-4977-AA2A-8DA6D101E4FE" flowable:sourceDockerX="50.0" flowable:sourceDockerY="40.0" flowable:targetDockerX="14.0" flowable:targetDockerY="14.0">
<omgdi:waypoint x="609.9499999999675" y="175.0"/>
<omgdi:waypoint x="735.0" y="175.0"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-138AE6FB-16CE-4B34-8C29-BEC40816F7B5" id="BPMNEdge_sid-138AE6FB-16CE-4B34-8C29-BEC40816F7B5" flowable:sourceDockerX="50.0" flowable:sourceDockerY="40.0" flowable:targetDockerX="50.0" flowable:targetDockerY="40.0">
<omgdi:waypoint x="331.75" y="282.0"/>
<omgdi:waypoint x="331.75" y="214.95000000000002"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-8E53F188-B4EF-4135-B696-D60F618CD877" id="BPMNEdge_sid-8E53F188-B4EF-4135-B696-D60F618CD877" flowable:sourceDockerX="50.0" flowable:sourceDockerY="40.0" flowable:targetDockerX="50.0" flowable:targetDockerY="40.0">
<omgdi:waypoint x="381.69999999990534" y="175.0"/>
<omgdi:waypoint x="509.9999999999794" y="175.0"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-812FF794-1F12-4FDC-8D3C-84340F5C75D0" id="BPMNEdge_sid-812FF794-1F12-4FDC-8D3C-84340F5C75D0" flowable:sourceDockerX="15.0" flowable:sourceDockerY="15.0" flowable:targetDockerX="50.0" flowable:targetDockerY="40.0">
<omgdi:waypoint x="161.69999946593478" y="175.0"/>
<omgdi:waypoint x="281.75" y="175.0"/>
</bpmndi:BPMNEdge>
</bpmndi:BPMNPlane>
</bpmndi:BPMNDiagram>
</definitions>`,`<definitions xmlns="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:flowable="http://flowable.org/bpmn" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:omgdc="http://www.omg.org/spec/DD/20100524/DC" xmlns:omgdi="http://www.omg.org/spec/DD/20100524/DI" typeLanguage="http://www.w3.org/2001/XMLSchema" expressionLanguage="http://www.w3.org/1999/XPath" targetNamespace="http://flowable.org/test" exporter="Flowable Open Source Modeler" exporterVersion="6.8.0">
<collaboration id="Collaboration">
<participant id="sid-99179D86-DFE8-40FD-ACA2-85B42856786D" name="SUBSCRIPTION-VALIDATION" processRef="SUBSCRIPTION-VALIDATION"/>
</collaboration>
<process id="SUBSCRIPTION-VALIDATION" name="SUBSCRIPTION-VALIDATION" isExecutable="true">
<laneSet id="laneSet_SUBSCRIPTION-VALIDATION">
<lane id="sid-7F69D470-C6ED-4EEA-B71F-EA554490D875">
<flowNodeRef>startEvent1</flowNodeRef>
<flowNodeRef>sid-24037A09-5D18-4119-900E-A18282F5DFBA</flowNodeRef>
<flowNodeRef>sid-3540AB96-F4EF-4B6E-B853-6EDE94D6CE85</flowNodeRef>
<flowNodeRef>sid-A661CCAF-94C4-4C02-B79D-18C990D5EBD5</flowNodeRef>
<flowNodeRef>sid-2F41FB9F-54AF-48F1-BFC4-B58C4662FAB9</flowNodeRef>
<flowNodeRef>sid-8081FD7B-EFB2-4FA1-AA0B-EC24CF302418</flowNodeRef>
<flowNodeRef>sid-F3FA65F1-5701-4004-97F5-968899A97430</flowNodeRef>
<flowNodeRef>sid-C9D8D1CE-29D0-49BB-9F5C-FDECB1D57A89</flowNodeRef>
<flowNodeRef>sid-75CE4199-AD13-483D-A406-B1EC736754C4</flowNodeRef>
<flowNodeRef>sid-783F8887-E835-45E1-B6CB-AB9320FF637B</flowNodeRef>
<flowNodeRef>sid-D0D42C6F-042A-42F5-8DCD-AD5A2C3B8A1F</flowNodeRef>
<flowNodeRef>sid-812FF794-1F12-4FDC-8D3C-84340F5C75D0</flowNodeRef>
<flowNodeRef>sid-2088DA1D-F5B6-4DF1-B488-9042CB90F582</flowNodeRef>
<flowNodeRef>sid-8E53F188-B4EF-4135-B696-D60F618CD877</flowNodeRef>
<flowNodeRef>sid-FA0C1866-9A01-4977-AA2A-8DA6D101E4FE</flowNodeRef>
<flowNodeRef>sid-138AE6FB-16CE-4B34-8C29-BEC40816F7B5</flowNodeRef>
</lane>
</laneSet>
<startEvent id="startEvent1" flowable:formFieldValidation="true"/>
<userTask id="sid-24037A09-5D18-4119-900E-A18282F5DFBA" name="Signature client Agence" flowable:formFieldValidation="true"/>
<serviceTask id="sid-3540AB96-F4EF-4B6E-B853-6EDE94D6CE85" name="Activate Account"/>
<endEvent id="sid-A661CCAF-94C4-4C02-B79D-18C990D5EBD5"/>
<serviceTask id="sid-2F41FB9F-54AF-48F1-BFC4-B58C4662FAB9" name="Disable digital account"/>
<boundaryEvent id="sid-F3FA65F1-5701-4004-97F5-968899A97430" cancelActivity="true">
<timerEventDefinition/>
</boundaryEvent>
<sequenceFlow id="sid-812FF794-1F12-4FDC-8D3C-84340F5C75D0" sourceRef="startEvent1" targetRef="sid-24037A09-5D18-4119-900E-A18282F5DFBA"/>
<sequenceFlow id="sid-2088DA1D-F5B6-4DF1-B488-9042CB90F582" sourceRef="sid-F3FA65F1-5701-4004-97F5-968899A97430" targetRef="sid-2F41FB9F-54AF-48F1-BFC4-B58C4662FAB9"/>
<sequenceFlow id="sid-8E53F188-B4EF-4135-B696-D60F618CD877" sourceRef="sid-24037A09-5D18-4119-900E-A18282F5DFBA" targetRef="sid-3540AB96-F4EF-4B6E-B853-6EDE94D6CE85"/>
<sequenceFlow id="sid-FA0C1866-9A01-4977-AA2A-8DA6D101E4FE" sourceRef="sid-3540AB96-F4EF-4B6E-B853-6EDE94D6CE85" targetRef="sid-A661CCAF-94C4-4C02-B79D-18C990D5EBD5"/>
<sequenceFlow id="sid-138AE6FB-16CE-4B34-8C29-BEC40816F7B5" sourceRef="sid-2F41FB9F-54AF-48F1-BFC4-B58C4662FAB9" targetRef="sid-24037A09-5D18-4119-900E-A18282F5DFBA"/>
<textAnnotation id="sid-8081FD7B-EFB2-4FA1-AA0B-EC24CF302418">
<text>Can't initiate new process</text>
</textAnnotation>
<textAnnotation id="sid-C9D8D1CE-29D0-49BB-9F5C-FDECB1D57A89">
<text>Actif pack intermidiere</text>
</textAnnotation>
<textAnnotation id="sid-75CE4199-AD13-483D-A406-B1EC736754C4">
<text>Actif catalogue service choisi</text>
</textAnnotation>
<textAnnotation id="sid-783F8887-E835-45E1-B6CB-AB9320FF637B">
<text>Front Popup timer</text>
</textAnnotation>
<textAnnotation id="sid-D0D42C6F-042A-42F5-8DCD-AD5A2C3B8A1F">
<text>Message informative</text>
</textAnnotation>
</process>
<bpmndi:BPMNDiagram id="BPMNDiagram_Collaboration">
<bpmndi:BPMNPlane bpmnElement="Collaboration" id="BPMNPlane_Collaboration">
<bpmndi:BPMNShape bpmnElement="sid-99179D86-DFE8-40FD-ACA2-85B42856786D" id="BPMNShape_sid-99179D86-DFE8-40FD-ACA2-85B42856786D">
<omgdc:Bounds height="330.0" width="755.0" x="60.0" y="75.0"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-7F69D470-C6ED-4EEA-B71F-EA554490D875" id="BPMNShape_sid-7F69D470-C6ED-4EEA-B71F-EA554490D875">
<omgdc:Bounds height="330.0" width="725.0" x="90.0" y="75.0"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="startEvent1" id="BPMNShape_startEvent1">
<omgdc:Bounds height="30.0" width="30.0" x="131.75" y="160.0"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-24037A09-5D18-4119-900E-A18282F5DFBA" id="BPMNShape_sid-24037A09-5D18-4119-900E-A18282F5DFBA">
<omgdc:Bounds height="80.0" width="100.0" x="281.75" y="135.0"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-3540AB96-F4EF-4B6E-B853-6EDE94D6CE85" id="BPMNShape_sid-3540AB96-F4EF-4B6E-B853-6EDE94D6CE85">
<omgdc:Bounds height="80.0" width="100.0" x="510.0" y="135.0"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-A661CCAF-94C4-4C02-B79D-18C990D5EBD5" id="BPMNShape_sid-A661CCAF-94C4-4C02-B79D-18C990D5EBD5">
<omgdc:Bounds height="28.0" width="28.0" x="735.0" y="161.0"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-2F41FB9F-54AF-48F1-BFC4-B58C4662FAB9" id="BPMNShape_sid-2F41FB9F-54AF-48F1-BFC4-B58C4662FAB9">
<omgdc:Bounds height="80.0" width="100.0" x="281.75" y="282.0"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-8081FD7B-EFB2-4FA1-AA0B-EC24CF302418" id="BPMNShape_sid-8081FD7B-EFB2-4FA1-AA0B-EC24CF302418">
<omgdc:Bounds height="50.0" width="100.0" x="180.0" y="300.0"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-F3FA65F1-5701-4004-97F5-968899A97430" id="BPMNShape_sid-F3FA65F1-5701-4004-97F5-968899A97430">
<omgdc:Bounds height="31.0" width="31.0" x="277.1710031215116" y="200.02635986948314"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-C9D8D1CE-29D0-49BB-9F5C-FDECB1D57A89" id="BPMNShape_sid-C9D8D1CE-29D0-49BB-9F5C-FDECB1D57A89">
<omgdc:Bounds height="50.0" width="100.0" x="150.0" y="90.0"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-75CE4199-AD13-483D-A406-B1EC736754C4" id="BPMNShape_sid-75CE4199-AD13-483D-A406-B1EC736754C4">
<omgdc:Bounds height="44.0" width="194.0" x="615.0" y="90.0"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-783F8887-E835-45E1-B6CB-AB9320FF637B" id="BPMNShape_sid-783F8887-E835-45E1-B6CB-AB9320FF637B">
<omgdc:Bounds height="32.0" width="138.0" x="131.0" y="210.0"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-D0D42C6F-042A-42F5-8DCD-AD5A2C3B8A1F" id="BPMNShape_sid-D0D42C6F-042A-42F5-8DCD-AD5A2C3B8A1F">
<omgdc:Bounds height="50.0" width="100.0" x="387.49999422580015" y="86.99999870359899"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNEdge bpmnElement="sid-2088DA1D-F5B6-4DF1-B488-9042CB90F582" id="BPMNEdge_sid-2088DA1D-F5B6-4DF1-B488-9042CB90F582" flowable:sourceDockerX="16.0" flowable:sourceDockerY="16.0" flowable:targetDockerX="50.0" flowable:targetDockerY="40.0">
<omgdi:waypoint x="298.6286766294091" y="231.01673788801597"/>
<omgdi:waypoint x="317.18826678748616" y="282.0"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-FA0C1866-9A01-4977-AA2A-8DA6D101E4FE" id="BPMNEdge_sid-FA0C1866-9A01-4977-AA2A-8DA6D101E4FE" flowable:sourceDockerX="50.0" flowable:sourceDockerY="40.0" flowable:targetDockerX="14.0" flowable:targetDockerY="14.0">
<omgdi:waypoint x="609.9499999999675" y="175.0"/>
<omgdi:waypoint x="735.0" y="175.0"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-138AE6FB-16CE-4B34-8C29-BEC40816F7B5" id="BPMNEdge_sid-138AE6FB-16CE-4B34-8C29-BEC40816F7B5" flowable:sourceDockerX="50.0" flowable:sourceDockerY="40.0" flowable:targetDockerX="50.0" flowable:targetDockerY="40.0">
<omgdi:waypoint x="331.75" y="282.0"/>
<omgdi:waypoint x="331.75" y="214.95000000000002"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-8E53F188-B4EF-4135-B696-D60F618CD877" id="BPMNEdge_sid-8E53F188-B4EF-4135-B696-D60F618CD877" flowable:sourceDockerX="50.0" flowable:sourceDockerY="40.0" flowable:targetDockerX="50.0" flowable:targetDockerY="40.0">
<omgdi:waypoint x="381.69999999990534" y="175.0"/>
<omgdi:waypoint x="509.9999999999794" y="175.0"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-812FF794-1F12-4FDC-8D3C-84340F5C75D0" id="BPMNEdge_sid-812FF794-1F12-4FDC-8D3C-84340F5C75D0" flowable:sourceDockerX="15.0" flowable:sourceDockerY="15.0" flowable:targetDockerX="50.0" flowable:targetDockerY="40.0">
<omgdi:waypoint x="161.69999946593478" y="175.0"/>
<omgdi:waypoint x="281.75" y="175.0"/>
</bpmndi:BPMNEdge>
</bpmndi:BPMNPlane>
</bpmndi:BPMNDiagram>
</definitions>`,`<definitions xmlns="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:flowable="http://flowable.org/bpmn" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:omgdc="http://www.omg.org/spec/DD/20100524/DC" xmlns:omgdi="http://www.omg.org/spec/DD/20100524/DI" typeLanguage="http://www.w3.org/2001/XMLSchema" expressionLanguage="http://www.w3.org/1999/XPath" targetNamespace="http://flowable.org/test" exporter="Flowable Open Source Modeler" exporterVersion="6.8.0">
<collaboration id="Collaboration">
<participant id="sid-F041EB8A-3D14-486A-8F7F-3464116A2A8E" name="PROFILE" processRef="PROFILE"/>
</collaboration>
<process id="PROFILE" name="PROFILE" isExecutable="true">
<laneSet id="laneSet_PROFILE">
<lane id="sid-719200A9-08E4-4C54-8045-7C64300D2C31">
<flowNodeRef>startEvent1</flowNodeRef>
<flowNodeRef>sid-DE146DD6-81D3-4B29-AE32-2A25576D85A3</flowNodeRef>
<flowNodeRef>sid-AF267419-891E-4F48-AC2F-041D05BD1FFC</flowNodeRef>
</lane>
</laneSet>
<startEvent id="startEvent1" flowable:formKey="profil_form" flowable:formFieldValidation="true"/>
<endEvent id="sid-DE146DD6-81D3-4B29-AE32-2A25576D85A3"/>
<sequenceFlow id="sid-AF267419-891E-4F48-AC2F-041D05BD1FFC" sourceRef="startEvent1" targetRef="sid-DE146DD6-81D3-4B29-AE32-2A25576D85A3"/>
</process>
<bpmndi:BPMNDiagram id="BPMNDiagram_Collaboration">
<bpmndi:BPMNPlane bpmnElement="Collaboration" id="BPMNPlane_Collaboration">
<bpmndi:BPMNShape bpmnElement="sid-F041EB8A-3D14-486A-8F7F-3464116A2A8E" id="BPMNShape_sid-F041EB8A-3D14-486A-8F7F-3464116A2A8E">
<omgdc:Bounds height="249.99999999999997" width="599.9999999999999" x="179.999997317791" y="104.9999984353781"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-719200A9-08E4-4C54-8045-7C64300D2C31" id="BPMNShape_sid-719200A9-08E4-4C54-8045-7C64300D2C31">
<omgdc:Bounds height="249.99999999999997" width="569.9999999999999" x="209.999997317791" y="104.9999984353781"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="startEvent1" id="BPMNShape_startEvent1">
<omgdc:Bounds height="30.0" width="30.0" x="254.99999620020392" y="194.99999709427362"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-DE146DD6-81D3-4B29-AE32-2A25576D85A3" id="BPMNShape_sid-DE146DD6-81D3-4B29-AE32-2A25576D85A3">
<omgdc:Bounds height="28.0" width="28.00000000000003" x="604.9999894946815" y="195.99999465048322"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNEdge bpmnElement="sid-AF267419-891E-4F48-AC2F-041D05BD1FFC" id="BPMNEdge_sid-AF267419-891E-4F48-AC2F-041D05BD1FFC" flowable:sourceDockerX="15.0" flowable:sourceDockerY="15.0" flowable:targetDockerX="14.0" flowable:targetDockerY="14.0">
<omgdi:waypoint x="284.94999605011213" y="209.99999698923966"/>
<omgdi:waypoint x="604.9999894946815" y="209.99999474816482"/>
</bpmndi:BPMNEdge>
</bpmndi:BPMNPlane>
</bpmndi:BPMNDiagram>
</definitions>`,`<definitions xmlns="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:flowable="http://flowable.org/bpmn" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:omgdc="http://www.omg.org/spec/DD/20100524/DC" xmlns:omgdi="http://www.omg.org/spec/DD/20100524/DI" typeLanguage="http://www.w3.org/2001/XMLSchema" expressionLanguage="http://www.w3.org/1999/XPath" targetNamespace="http://www.flowable.org/processdef" exporter="Flowable Open Source Modeler" exporterVersion="6.8.0">
<process id="Process_B" name="Process_B" isExecutable="true">
<documentation>null</documentation>
<startEvent id="startEvent1" flowable:formKey="OnBoardingPeronalInformation" flowable:formFieldValidation="true">
<extensionElements>
<flowable:formProperty id="test_form" name="test_form" type="string" default="test" writable="false"/>
</extensionElements>
</startEvent>
<serviceTask id="sid-60803CDC-CC58-4E00-9940-89102C89C90F" name="Test" flowable:type="dmn">
<extensionElements>
<flowable:field name="decisionTableReferenceKey">
<flowable:string>
<![CDATA[ expressionTest ]]>
</flowable:string>
</flowable:field>
<flowable:field name="decisionTaskThrowErrorOnNoHits">
<flowable:string>
<![CDATA[ false ]]>
</flowable:string>
</flowable:field>
<flowable:field name="fallbackToDefaultTenant">
<flowable:string>
<![CDATA[ false ]]>
</flowable:string>
</flowable:field>
<flowable:field name="sameDeployment">
<flowable:string>
<![CDATA[ false ]]>
</flowable:string>
</flowable:field>
<flowable:decisionReferenceType xmlns:flowable="http://flowable.org/bpmn">
<![CDATA[ decisionService ]]>
</flowable:decisionReferenceType>
</extensionElements>
</serviceTask>
<endEvent id="sid-44D37C9D-3377-43E4-9D61-88817E0381DD"/>
<sequenceFlow id="sid-6AE84E13-032F-40CA-862C-1D0C4C6F5269" sourceRef="sid-60803CDC-CC58-4E00-9940-89102C89C90F" targetRef="sid-44D37C9D-3377-43E4-9D61-88817E0381DD"/>
<sequenceFlow id="sid-C303FE05-DFD6-45A7-983F-277D68E7AF3B" sourceRef="startEvent1" targetRef="sid-60803CDC-CC58-4E00-9940-89102C89C90F"/>
</process>
<bpmndi:BPMNDiagram id="BPMNDiagram_Process_B">
<bpmndi:BPMNPlane bpmnElement="Process_B" id="BPMNPlane_Process_B">
<bpmndi:BPMNShape bpmnElement="startEvent1" id="BPMNShape_startEvent1">
<omgdc:Bounds height="30.0" width="30.0" x="164.99999754130843" y="162.99999757111075"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-60803CDC-CC58-4E00-9940-89102C89C90F" id="BPMNShape_sid-60803CDC-CC58-4E00-9940-89102C89C90F">
<omgdc:Bounds height="80.0" width="100.0" x="344.999989718199" y="137.99999551475057"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-44D37C9D-3377-43E4-9D61-88817E0381DD" id="BPMNShape_sid-44D37C9D-3377-43E4-9D61-88817E0381DD">
<omgdc:Bounds height="28.0" width="28.0" x="610.9999815821651" y="163.99999307096024"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNEdge bpmnElement="sid-6AE84E13-032F-40CA-862C-1D0C4C6F5269" id="BPMNEdge_sid-6AE84E13-032F-40CA-862C-1D0C4C6F5269" flowable:sourceDockerX="50.0" flowable:sourceDockerY="40.0" flowable:targetDockerX="14.0" flowable:targetDockerY="14.0">
<omgdi:waypoint x="444.9499877349434" y="177.9999949834918"/>
<omgdi:waypoint x="610.9999812865501" y="177.99999321918145"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-C303FE05-DFD6-45A7-983F-277D68E7AF3B" id="BPMNEdge_sid-C303FE05-DFD6-45A7-983F-277D68E7AF3B" flowable:sourceDockerX="15.0" flowable:sourceDockerY="15.0" flowable:targetDockerX="50.0" flowable:targetDockerY="40.0">
<omgdi:waypoint x="194.94999709546113" y="177.99999742764376"/>
<omgdi:waypoint x="344.9999871146894" y="177.99999599249563"/>
</bpmndi:BPMNEdge>
</bpmndi:BPMNPlane>
</bpmndi:BPMNDiagram>
</definitions>`,`<definitions xmlns="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:flowable="http://flowable.org/bpmn" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:omgdc="http://www.omg.org/spec/DD/20100524/DC" xmlns:omgdi="http://www.omg.org/spec/DD/20100524/DI" typeLanguage="http://www.w3.org/2001/XMLSchema" expressionLanguage="http://www.w3.org/1999/XPath" targetNamespace="http://flowable.org/test" exporter="Flowable Open Source Modeler" exporterVersion="6.8.0">
<collaboration id="Collaboration">
<participant id="sid-B3DFECBB-EDEA-456E-B014-3200493301F5" name="DIGITAL SUBSCRIPTION" processRef="DIGITAL-SUBSCRIPTION"/>
</collaboration>
<process id="DIGITAL-SUBSCRIPTION" name="DIGITAL SUBSCRIPTION" isExecutable="true">
<laneSet id="laneSet_DIGITAL-SUBSCRIPTION">
<lane id="sid-01F0D8D0-7B41-4D1E-AA35-1062C6961F1C" name="Bankerise">
<flowNodeRef>startEvent1</flowNodeRef>
<flowNodeRef>sid-65A751F4-C159-4477-90B0-36F30694100A</flowNodeRef>
<flowNodeRef>sid-A17F3E98-9B8F-4EE1-92B8-2BDD9F395ABE</flowNodeRef>
<flowNodeRef>sid-DF6C8BC1-03F2-46AA-A441-2D43ABC7B478</flowNodeRef>
<flowNodeRef>sid-BD34BD39-100F-4469-8C6A-3C4F81A1CFAB</flowNodeRef>
<flowNodeRef>sid-9A0DFE37-144C-4B16-9DB8-1F3B0F533CC5</flowNodeRef>
<flowNodeRef>sid-9D281282-643D-4651-8DC5-CA58D0905888</flowNodeRef>
<flowNodeRef>sid-CB09F31E-8460-42F7-87C2-FF7ABC63D01F</flowNodeRef>
<flowNodeRef>sid-2CDD1281-4956-4A5F-B6BD-1F6DDDAE0FB9</flowNodeRef>
<flowNodeRef>sid-DC7EDF17-92D9-4C0E-8E7A-24715C517499</flowNodeRef>
<flowNodeRef>sid-689DA667-CEA4-49DF-A39D-AF123BBC846F</flowNodeRef>
<flowNodeRef>sid-E21CE175-9EFD-45BE-88B6-DE1BF332E267</flowNodeRef>
<flowNodeRef>sid-026F700C-83B0-42FD-8D09-74A1E43DFD60</flowNodeRef>
<flowNodeRef>sid-D014AF56-AA67-4B14-A510-C2B1BE50AB5C</flowNodeRef>
<flowNodeRef>sid-5776E820-0760-4150-9902-78C46A5D8815</flowNodeRef>
<flowNodeRef>sid-7590E614-788C-4EC3-B997-993C3730B205</flowNodeRef>
<flowNodeRef>sid-A83B5BA1-6E81-4859-8614-23A0F490B1E4</flowNodeRef>
<flowNodeRef>sid-638B812B-DACD-41DA-B2BF-74BC2D4D42E8</flowNodeRef>
<flowNodeRef>sid-0331E5F6-8FD4-4C04-A9FF-ABBC28740F15</flowNodeRef>
<flowNodeRef>sid-D6A09D2E-6CBD-45B7-A6A2-EF99B97D28A3</flowNodeRef>
<flowNodeRef>sid-E19CF8FB-ECA6-4857-A633-813D4036E092</flowNodeRef>
<flowNodeRef>sid-E217AC59-9CC8-4A9D-B1C9-D350D4A24324</flowNodeRef>
<flowNodeRef>sid-79E57737-4DCF-4A15-AA4A-0EE41B2D16D1</flowNodeRef>
<flowNodeRef>sid-C5B3099D-A3DD-4A05-93BD-6AE6C4A52234</flowNodeRef>
<flowNodeRef>sid-8C3AEFE5-17C1-4337-8043-53EEA3C7A502</flowNodeRef>
</lane>
<lane id="sid-12059E60-EB1C-442D-B1E9-3E44A1196F6B" name="BNA">
<flowNodeRef>sid-67B53CA6-E2ED-4B37-AABD-B6E540B8ABE7</flowNodeRef>
<flowNodeRef>sid-4A6BFBE0-993B-4BC6-8C95-3F6C8036EE0B</flowNodeRef>
<flowNodeRef>sid-65A134C5-547D-49EE-9A7F-A8234270D638</flowNodeRef>
<flowNodeRef>sid-567AE0B2-341D-4B88-A873-B6C8595CB634</flowNodeRef>
<flowNodeRef>sid-78960D36-CCDC-4F93-99D1-CB3DA21E65DE</flowNodeRef>
<flowNodeRef>sid-5DD469D9-0E8B-40F7-9837-36910456DC56</flowNodeRef>
<flowNodeRef>sid-6D5F7F40-F778-4D69-B042-F6177B5DEE00</flowNodeRef>
<flowNodeRef>sid-609E4D80-09F6-40CF-A524-8CECB39290E7</flowNodeRef>
<flowNodeRef>sid-0562280F-4F15-44DC-B44C-707FAAEF7E18</flowNodeRef>
<flowNodeRef>sid-7C964429-1FC6-4B5E-8F04-B5539B6EE09E</flowNodeRef>
<flowNodeRef>sid-8572B97A-4653-4A84-9210-F0C69E482DF9</flowNodeRef>
<flowNodeRef>sid-CFC467A7-4593-4AFA-BDFF-F5A81B334864</flowNodeRef>
<flowNodeRef>sid-4AE93A9D-3455-4ECF-A95D-7EE27A6210F8</flowNodeRef>
<flowNodeRef>sid-14FBC7E1-5060-4819-B5C5-FE65772FEA36</flowNodeRef>
</lane>
</laneSet>
<startEvent id="startEvent1" name="Personal Information" flowable:formKey="Subscription-Personal-Info-Step" flowable:formFieldValidation="true">
<extensionElements>
<flowable:executionListener event="start" />
</extensionElements>
</startEvent>
<userTask id="sid-65A751F4-C159-4477-90B0-36F30694100A" name="OTP FORM" flowable:assignee="$INITIATOR" flowable:formKey="Subscription-Otp-Step" flowable:formFieldValidation="true">
<extensionElements>
<modeler:activiti-idm-initiator xmlns:modeler="http://flowable.org/modeler">
<![CDATA[ true ]]>
</modeler:activiti-idm-initiator>
</extensionElements>
</userTask>
<exclusiveGateway id="sid-A17F3E98-9B8F-4EE1-92B8-2BDD9F395ABE" default="sid-5776E820-0760-4150-9902-78C46A5D8815"/>
<userTask id="sid-DF6C8BC1-03F2-46AA-A441-2D43ABC7B478" name="Role Selection Bundles" flowable:assignee="$INITIATOR" flowable:formKey="Subscription-Role-Step" flowable:formFieldValidation="true">
<extensionElements>
<modeler:activiti-idm-initiator xmlns:modeler="http://flowable.org/modeler">
<![CDATA[ true ]]>
</modeler:activiti-idm-initiator>
</extensionElements>
</userTask>
<serviceTask id="sid-BD34BD39-100F-4469-8C6A-3C4F81A1CFAB" name="Prepare Roles-Bundles"/>
<userTask id="sid-9A0DFE37-144C-4B16-9DB8-1F3B0F533CC5" name="Email Verification" flowable:assignee="$INITIATOR" flowable:formKey="Subscription-Email-Step" flowable:formFieldValidation="true">
<extensionElements>
<modeler:activiti-idm-initiator xmlns:modeler="http://flowable.org/modeler">
<![CDATA[ true ]]>
</modeler:activiti-idm-initiator>
</extensionElements>
</userTask>
<exclusiveGateway id="sid-9D281282-643D-4651-8DC5-CA58D0905888" default="sid-A83B5BA1-6E81-4859-8614-23A0F490B1E4"/>
<endEvent id="sid-CB09F31E-8460-42F7-87C2-FF7ABC63D01F"/>
<serviceTask id="sid-2CDD1281-4956-4A5F-B6BD-1F6DDDAE0FB9" name="Create Digital Account"/>
<userTask id="sid-DC7EDF17-92D9-4C0E-8E7A-24715C517499" name="Personal Information" flowable:assignee="$INITIATOR" flowable:formKey="Subscription-Personal-Info-Step" flowable:formFieldValidation="true">
<extensionElements>
<modeler:activiti-idm-initiator xmlns:modeler="http://flowable.org/modeler">
<![CDATA[ true ]]>
</modeler:activiti-idm-initiator>
</extensionElements>
</userTask>
<exclusiveGateway id="sid-689DA667-CEA4-49DF-A39D-AF123BBC846F" default="sid-C5B3099D-A3DD-4A05-93BD-6AE6C4A52234"/>
<serviceTask id="sid-67B53CA6-E2ED-4B37-AABD-B6E540B8ABE7" name="Check existance & get info" />
<exclusiveGateway id="sid-4A6BFBE0-993B-4BC6-8C95-3F6C8036EE0B" default="sid-4AE93A9D-3455-4ECF-A95D-7EE27A6210F8"/>
<serviceTask id="sid-65A134C5-547D-49EE-9A7F-A8234270D638" name="Send OTP" >
<extensionElements>
<flowable:executionListener event="start" />
</extensionElements>
</serviceTask>
<serviceTask id="sid-567AE0B2-341D-4B88-A873-B6C8595CB634" name="Check OTP" />
<exclusiveGateway id="sid-78960D36-CCDC-4F93-99D1-CB3DA21E65DE" default="sid-0562280F-4F15-44DC-B44C-707FAAEF7E18"/>
<serviceTask id="sid-5DD469D9-0E8B-40F7-9837-36910456DC56" name="Save Email in BNA" />
<sequenceFlow id="sid-E21CE175-9EFD-45BE-88B6-DE1BF332E267" sourceRef="sid-65A751F4-C159-4477-90B0-36F30694100A" targetRef="sid-A17F3E98-9B8F-4EE1-92B8-2BDD9F395ABE"/>
<sequenceFlow id="sid-6D5F7F40-F778-4D69-B042-F6177B5DEE00" sourceRef="sid-567AE0B2-341D-4B88-A873-B6C8595CB634" targetRef="sid-78960D36-CCDC-4F93-99D1-CB3DA21E65DE"/>
<sequenceFlow id="sid-026F700C-83B0-42FD-8D09-74A1E43DFD60" sourceRef="sid-9A0DFE37-144C-4B16-9DB8-1F3B0F533CC5" targetRef="sid-9D281282-643D-4651-8DC5-CA58D0905888"/>
<sequenceFlow id="sid-609E4D80-09F6-40CF-A524-8CECB39290E7" sourceRef="sid-67B53CA6-E2ED-4B37-AABD-B6E540B8ABE7" targetRef="sid-4A6BFBE0-993B-4BC6-8C95-3F6C8036EE0B"/>
<sequenceFlow id="sid-D014AF56-AA67-4B14-A510-C2B1BE50AB5C" sourceRef="sid-BD34BD39-100F-4469-8C6A-3C4F81A1CFAB" targetRef="sid-DF6C8BC1-03F2-46AA-A441-2D43ABC7B478"/>
<sequenceFlow id="sid-5776E820-0760-4150-9902-78C46A5D8815" sourceRef="sid-A17F3E98-9B8F-4EE1-92B8-2BDD9F395ABE" targetRef="sid-567AE0B2-341D-4B88-A873-B6C8595CB634"/>
<sequenceFlow id="sid-7590E614-788C-4EC3-B997-993C3730B205" name="New Email" sourceRef="sid-9D281282-643D-4651-8DC5-CA58D0905888" targetRef="sid-5DD469D9-0E8B-40F7-9837-36910456DC56">
<conditionExpression xsi:type="tFormalExpression">

</conditionExpression>
</sequenceFlow>
<sequenceFlow id="sid-0562280F-4F15-44DC-B44C-707FAAEF7E18" name="Invalid" sourceRef="sid-78960D36-CCDC-4F93-99D1-CB3DA21E65DE" targetRef="sid-65A751F4-C159-4477-90B0-36F30694100A"/>
<sequenceFlow id="sid-7C964429-1FC6-4B5E-8F04-B5539B6EE09E" sourceRef="sid-65A134C5-547D-49EE-9A7F-A8234270D638" targetRef="sid-65A751F4-C159-4477-90B0-36F30694100A"/>
<sequenceFlow id="sid-8572B97A-4653-4A84-9210-F0C69E482DF9" name="No bank account or already subscribed" sourceRef="sid-4A6BFBE0-993B-4BC6-8C95-3F6C8036EE0B" targetRef="sid-CB09F31E-8460-42F7-87C2-FF7ABC63D01F">
<conditionExpression xsi:type="tFormalExpression">
</conditionExpression>
</sequenceFlow>
<sequenceFlow id="sid-CFC467A7-4593-4AFA-BDFF-F5A81B334864" sourceRef="sid-5DD469D9-0E8B-40F7-9837-36910456DC56" targetRef="sid-2CDD1281-4956-4A5F-B6BD-1F6DDDAE0FB9"/>
<sequenceFlow id="sid-A83B5BA1-6E81-4859-8614-23A0F490B1E4" name="Same Email" sourceRef="sid-9D281282-643D-4651-8DC5-CA58D0905888" targetRef="sid-2CDD1281-4956-4A5F-B6BD-1F6DDDAE0FB9"/>
<sequenceFlow id="sid-638B812B-DACD-41DA-B2BF-74BC2D4D42E8" sourceRef="sid-2CDD1281-4956-4A5F-B6BD-1F6DDDAE0FB9" targetRef="sid-CB09F31E-8460-42F7-87C2-FF7ABC63D01F"/>
<sequenceFlow id="sid-0331E5F6-8FD4-4C04-A9FF-ABBC28740F15" name="ReSend OTP" sourceRef="sid-A17F3E98-9B8F-4EE1-92B8-2BDD9F395ABE" targetRef="sid-65A134C5-547D-49EE-9A7F-A8234270D638">
<conditionExpression xsi:type="tFormalExpression">

</conditionExpression>
</sequenceFlow>
<sequenceFlow id="sid-D6A09D2E-6CBD-45B7-A6A2-EF99B97D28A3" sourceRef="startEvent1" targetRef="sid-67B53CA6-E2ED-4B37-AABD-B6E540B8ABE7"/>
<sequenceFlow id="sid-E19CF8FB-ECA6-4857-A633-813D4036E092" sourceRef="sid-DC7EDF17-92D9-4C0E-8E7A-24715C517499" targetRef="sid-67B53CA6-E2ED-4B37-AABD-B6E540B8ABE7"/>
<sequenceFlow id="sid-4AE93A9D-3455-4ECF-A95D-7EE27A6210F8" name="No digital account" sourceRef="sid-4A6BFBE0-993B-4BC6-8C95-3F6C8036EE0B" targetRef="sid-BD34BD39-100F-4469-8C6A-3C4F81A1CFAB"/>
<sequenceFlow id="sid-E217AC59-9CC8-4A9D-B1C9-D350D4A24324" sourceRef="sid-DF6C8BC1-03F2-46AA-A441-2D43ABC7B478" targetRef="sid-689DA667-CEA4-49DF-A39D-AF123BBC846F"/>
<sequenceFlow id="sid-79E57737-4DCF-4A15-AA4A-0EE41B2D16D1" name="Previous" sourceRef="sid-689DA667-CEA4-49DF-A39D-AF123BBC846F" targetRef="sid-DC7EDF17-92D9-4C0E-8E7A-24715C517499">
<conditionExpression xsi:type="tFormalExpression">
<![CDATA[ ]]>
</conditionExpression>
</sequenceFlow>
<sequenceFlow id="sid-C5B3099D-A3DD-4A05-93BD-6AE6C4A52234" sourceRef="sid-689DA667-CEA4-49DF-A39D-AF123BBC846F" targetRef="sid-65A134C5-547D-49EE-9A7F-A8234270D638"/>
<sequenceFlow id="sid-14FBC7E1-5060-4819-B5C5-FE65772FEA36" name="Valid" sourceRef="sid-78960D36-CCDC-4F93-99D1-CB3DA21E65DE" targetRef="sid-9A0DFE37-144C-4B16-9DB8-1F3B0F533CC5">
<conditionExpression xsi:type="tFormalExpression">
<![CDATA[  ]]>
</conditionExpression>
</sequenceFlow>
<sequenceFlow id="sid-8C3AEFE5-17C1-4337-8043-53EEA3C7A502" name="Previous" sourceRef="sid-A17F3E98-9B8F-4EE1-92B8-2BDD9F395ABE" targetRef="sid-DF6C8BC1-03F2-46AA-A441-2D43ABC7B478">
<conditionExpression xsi:type="tFormalExpression">
<![CDATA[  ]]>
</conditionExpression>
</sequenceFlow>
</process>
<bpmndi:BPMNDiagram id="BPMNDiagram_Collaboration">
<bpmndi:BPMNPlane bpmnElement="Collaboration" id="BPMNPlane_Collaboration">
<bpmndi:BPMNShape bpmnElement="sid-B3DFECBB-EDEA-456E-B014-3200493301F5" id="BPMNShape_sid-B3DFECBB-EDEA-456E-B014-3200493301F5">
<omgdc:Bounds height="791.9999630376717" width="1810.2999359183054" x="14.99999921768908" y="44.999997653067226"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-01F0D8D0-7B41-4D1E-AA35-1062C6961F1C" id="BPMNShape_sid-01F0D8D0-7B41-4D1E-AA35-1062C6961F1C">
<omgdc:Bounds height="384.10249892729564" width="1780.2999359183054" x="44.99999921768908" y="44.999997653067226"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="startEvent1" id="BPMNShape_startEvent1">
<omgdc:Bounds height="30.0" width="30.0" x="120.00000143051183" y="222.05124976377286"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-65A751F4-C159-4477-90B0-36F30694100A" id="BPMNShape_sid-65A751F4-C159-4477-90B0-36F30694100A">
<omgdc:Bounds height="80.0" width="100.00000000000004" x="944.9999295920165" y="197.0512468274805"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-A17F3E98-9B8F-4EE1-92B8-2BDD9F395ABE" id="BPMNShape_sid-A17F3E98-9B8F-4EE1-92B8-2BDD9F395ABE">
<omgdc:Bounds height="40.0" width="40.00000000000004" x="1094.9999486804056" y="217.05124609121108"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-DF6C8BC1-03F2-46AA-A441-2D43ABC7B478" id="BPMNShape_sid-DF6C8BC1-03F2-46AA-A441-2D43ABC7B478">
<omgdc:Bounds height="79.99999999999997" width="100.00000000000004" x="540.0000064373032" y="197.05124585279248"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-BD34BD39-100F-4469-8C6A-3C4F81A1CFAB" id="BPMNShape_sid-BD34BD39-100F-4469-8C6A-3C4F81A1CFAB">
<omgdc:Bounds height="80.0" width="99.99999999999993" x="374.9999984353792" y="197.05124585279245"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-9A0DFE37-144C-4B16-9DB8-1F3B0F533CC5" id="BPMNShape_sid-9A0DFE37-144C-4B16-9DB8-1F3B0F533CC5">
<omgdc:Bounds height="80.0" width="100.00000000000004" x="1259.9999812245371" y="197.05124350375797"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-9D281282-643D-4651-8DC5-CA58D0905888" id="BPMNShape_sid-9D281282-643D-4651-8DC5-CA58D0905888">
<omgdc:Bounds height="40.0" width="40.00000000000004" x="1427.0874394710397" y="217.05124652945722"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-CB09F31E-8460-42F7-87C2-FF7ABC63D01F" id="BPMNShape_sid-CB09F31E-8460-42F7-87C2-FF7ABC63D01F">
<omgdc:Bounds height="28.0" width="28.000000000000043" x="1769.9999736249451" y="223.05124644005025"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-2CDD1281-4956-4A5F-B6BD-1F6DDDAE0FB9" id="BPMNShape_sid-2CDD1281-4956-4A5F-B6BD-1F6DDDAE0FB9">
<omgdc:Bounds height="80.0" width="100.00000000000004" x="1619.9999951720288" y="197.0512521128074"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-DC7EDF17-92D9-4C0E-8E7A-24715C517499" id="BPMNShape_sid-DC7EDF17-92D9-4C0E-8E7A-24715C517499">
<omgdc:Bounds height="79.99999999999991" width="99.99999999999999" x="225.0000026822097" y="197.0512458527925"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-689DA667-CEA4-49DF-A39D-AF123BBC846F" id="BPMNShape_sid-689DA667-CEA4-49DF-A39D-AF123BBC846F">
<omgdc:Bounds height="40.0" width="40.00000000000004" x="675.0000080466291" y="217.05124609121108"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-12059E60-EB1C-442D-B1E9-3E44A1196F6B" id="BPMNShape_sid-12059E60-EB1C-442D-B1E9-3E44A1196F6B">
<omgdc:Bounds height="407.89746411037606" width="1780.2999359183054" x="44.99999921768908" y="429.10249658036287"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-67B53CA6-E2ED-4B37-AABD-B6E540B8ABE7" id="BPMNShape_sid-67B53CA6-E2ED-4B37-AABD-B6E540B8ABE7">
<omgdc:Bounds height="80.0" width="99.99999999999999" x="225.00000536441945" y="593.0512336398224"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-4A6BFBE0-993B-4BC6-8C95-3F6C8036EE0B" id="BPMNShape_sid-4A6BFBE0-993B-4BC6-8C95-3F6C8036EE0B">
<omgdc:Bounds height="40.0" width="39.999999999999986" x="404.99999396502983" y="613.0512265700991"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-65A134C5-547D-49EE-9A7F-A8234270D638" id="BPMNShape_sid-65A134C5-547D-49EE-9A7F-A8234270D638">
<omgdc:Bounds height="80.0" width="99.99999999999993" x="719.9999678134925" y="593.0512268681223"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-567AE0B2-341D-4B88-A873-B6C8595CB634" id="BPMNShape_sid-567AE0B2-341D-4B88-A873-B6C8595CB634">
<omgdc:Bounds height="80.0" width="100.00000000000004" x="1064.999935626986" y="593.0512268681223"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-78960D36-CCDC-4F93-99D1-CB3DA21E65DE" id="BPMNShape_sid-78960D36-CCDC-4F93-99D1-CB3DA21E65DE">
<omgdc:Bounds height="40.0" width="40.00000000000004" x="1094.9999184161459" y="719.999989271164"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-5DD469D9-0E8B-40F7-9837-36910456DC56" id="BPMNShape_sid-5DD469D9-0E8B-40F7-9837-36910456DC56">
<omgdc:Bounds height="80.0" width="100.00000000000004" x="1397.0873978345903" y="593.0512268681223"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNEdge bpmnElement="sid-5776E820-0760-4150-9902-78C46A5D8815" id="BPMNEdge_sid-5776E820-0760-4150-9902-78C46A5D8815" flowable:sourceDockerX="20.499999999999996" flowable:sourceDockerY="20.5" flowable:targetDockerX="50.0" flowable:targetDockerY="40.0">
<omgdi:waypoint x="1115.475897417643" y="256.5228298625575"/>
<omgdi:waypoint x="1115.050442636986" y="593.0512268681223"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-7C964429-1FC6-4B5E-8F04-B5539B6EE09E" id="BPMNEdge_sid-7C964429-1FC6-4B5E-8F04-B5539B6EE09E" flowable:sourceDockerX="49.99999999999994" flowable:sourceDockerY="40.0" flowable:targetDockerX="1.0" flowable:targetDockerY="20.0">
<omgdi:waypoint x="819.9499678134924" y="633.0512268681223"/>
<omgdi:waypoint x="856.2999873906374" y="633.0512268681223"/>
<omgdi:waypoint x="856.2999873906374" y="217.0512468274805"/>
<omgdi:waypoint x="944.9999295920165" y="217.0512468274805"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-CFC467A7-4593-4AFA-BDFF-F5A81B334864" id="BPMNEdge_sid-CFC467A7-4593-4AFA-BDFF-F5A81B334864" flowable:sourceDockerX="50.0" flowable:sourceDockerY="40.0" flowable:targetDockerX="50.0" flowable:targetDockerY="40.0">
<omgdi:waypoint x="1497.0373978345904" y="633.0512268681223"/>
<omgdi:waypoint x="1669.9999951720288" y="633.0512268681223"/>
<omgdi:waypoint x="1669.9999951720288" y="277.0012521128074"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-026F700C-83B0-42FD-8D09-74A1E43DFD60" id="BPMNEdge_sid-026F700C-83B0-42FD-8D09-74A1E43DFD60" flowable:sourceDockerX="49.99999999999994" flowable:sourceDockerY="40.0" flowable:targetDockerX="20.5" flowable:targetDockerY="20.5">
<omgdi:waypoint x="1359.9499812245342" y="237.23276550766715"/>
<omgdi:waypoint x="1427.5144928947213" y="237.478299953143"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-D014AF56-AA67-4B14-A510-C2B1BE50AB5C" id="BPMNEdge_sid-D014AF56-AA67-4B14-A510-C2B1BE50AB5C" flowable:sourceDockerX="49.99999999999997" flowable:sourceDockerY="40.0" flowable:targetDockerX="50.0" flowable:targetDockerY="39.999999999999986">
<omgdi:waypoint x="474.94999843522373" y="237.05124585279245"/>
<omgdi:waypoint x="540.0000064372697" y="237.05124585279248"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-E217AC59-9CC8-4A9D-B1C9-D350D4A24324" id="BPMNEdge_sid-E217AC59-9CC8-4A9D-B1C9-D350D4A24324" flowable:sourceDockerX="50.0" flowable:sourceDockerY="39.999999999999986" flowable:targetDockerX="20.0" flowable:targetDockerY="20.0">
<omgdi:waypoint x="639.9500064372717" y="237.05124596621167"/>
<omgdi:waypoint x="675.0000080466291" y="237.05124604579805"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-609E4D80-09F6-40CF-A524-8CECB39290E7" id="BPMNEdge_sid-609E4D80-09F6-40CF-A524-8CECB39290E7" flowable:sourceDockerX="50.00000000000001" flowable:sourceDockerY="40.0" flowable:targetDockerX="20.5" flowable:targetDockerY="20.5">
<omgdi:waypoint x="324.950005364363" y="633.0512336398224"/>
<omgdi:waypoint x="373.8937683105469" y="633.0512336398224"/>
<omgdi:waypoint x="370.64998070232826" y="633.5512265700991"/>
<omgdi:waypoint x="405.49999396502983" y="633.5512265700991"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-A83B5BA1-6E81-4859-8614-23A0F490B1E4" id="BPMNEdge_sid-A83B5BA1-6E81-4859-8614-23A0F490B1E4" flowable:sourceDockerX="20.5" flowable:sourceDockerY="20.5" flowable:targetDockerX="50.0" flowable:targetDockerY="40.0">
<omgdi:waypoint x="1466.575848983302" y="237.50843735335033"/>
<omgdi:waypoint x="1619.9999951720251" y="237.16354218129274"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-79E57737-4DCF-4A15-AA4A-0EE41B2D16D1" id="BPMNEdge_sid-79E57737-4DCF-4A15-AA4A-0EE41B2D16D1" flowable:sourceDockerX="20.5" flowable:sourceDockerY="20.5" flowable:targetDockerX="49.999999999999986" flowable:targetDockerY="39.99999999999996">
<omgdi:waypoint x="685.4652033372694" y="226.58575987393422"/>
<omgdi:waypoint x="619.0437620282173" y="154.0062551259992"/>
<omgdi:waypoint x="275.0000026822097" y="154.0062551259992"/>
<omgdi:waypoint x="275.0000026822097" y="197.0512458527925"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-6D5F7F40-F778-4D69-B042-F6177B5DEE00" id="BPMNEdge_sid-6D5F7F40-F778-4D69-B042-F6177B5DEE00" flowable:sourceDockerX="50.0" flowable:sourceDockerY="40.0" flowable:targetDockerX="20.0" flowable:targetDockerY="20.0">
<omgdi:waypoint x="1114.9999291899446" y="673.0012268681222"/>
<omgdi:waypoint x="1114.9999216266197" y="719.9999924896842"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-7590E614-788C-4EC3-B997-993C3730B205" id="BPMNEdge_sid-7590E614-788C-4EC3-B997-993C3730B205" flowable:sourceDockerX="20.5" flowable:sourceDockerY="20.5" flowable:targetDockerX="50.0" flowable:targetDockerY="40.0">
<omgdi:waypoint x="1447.5633868316297" y="256.5228316733039"/>
<omgdi:waypoint x="1447.1379077318577" y="593.0512268681223"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-0562280F-4F15-44DC-B44C-707FAAEF7E18" id="BPMNEdge_sid-0562280F-4F15-44DC-B44C-707FAAEF7E18" flowable:sourceDockerX="20.5" flowable:sourceDockerY="20.5" flowable:targetDockerX="1.0" flowable:targetDockerY="60.0">
<omgdi:waypoint x="1095.4999184161459" y="740.499989271164"/>
<omgdi:waypoint x="904.2999874055386" y="740.499989271164"/>
<omgdi:waypoint x="904.2999874055386" y="257.0512468274805"/>
<omgdi:waypoint x="944.9999295920165" y="257.0512468274805"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-638B812B-DACD-41DA-B2BF-74BC2D4D42E8" id="BPMNEdge_sid-638B812B-DACD-41DA-B2BF-74BC2D4D42E8" flowable:sourceDockerX="50.0" flowable:sourceDockerY="40.0" flowable:targetDockerX="14.0" flowable:targetDockerY="14.0">
<omgdi:waypoint x="1719.9499951720181" y="237.0512496247555"/>
<omgdi:waypoint x="1769.9999734854016" y="237.05124713421674"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-14FBC7E1-5060-4819-B5C5-FE65772FEA36" id="BPMNEdge_sid-14FBC7E1-5060-4819-B5C5-FE65772FEA36" flowable:sourceDockerX="20.5" flowable:sourceDockerY="20.5" flowable:targetDockerX="50.0" flowable:targetDockerY="40.0">
<omgdi:waypoint x="1134.4396910838323" y="740.499989271164"/>
<omgdi:waypoint x="1208.0438230991365" y="740.499989271164"/>
<omgdi:waypoint x="1208.0438230991365" y="237.05124350375797"/>
<omgdi:waypoint x="1259.9999812245371" y="237.05124350375797"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-0331E5F6-8FD4-4C04-A9FF-ABBC28740F15" id="BPMNEdge_sid-0331E5F6-8FD4-4C04-A9FF-ABBC28740F15" flowable:sourceDockerX="20.499999999999996" flowable:sourceDockerY="20.5" flowable:targetDockerX="50.0" flowable:targetDockerY="40.000000000000114">
<omgdi:waypoint x="1103.9296273697073" y="228.12092263460093"/>
<omgdi:waypoint x="1024.0437627315525" y="163.00625666379943"/>
<omgdi:waypoint x="769.9999678134925" y="163.00625666379943"/>
<omgdi:waypoint x="769.9999678134925" y="593.0512268681223"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-D6A09D2E-6CBD-45B7-A6A2-EF99B97D28A3" id="BPMNEdge_sid-D6A09D2E-6CBD-45B7-A6A2-EF99B97D28A3" flowable:sourceDockerX="15.0" flowable:sourceDockerY="15.0" flowable:targetDockerX="50.00000000000001" flowable:targetDockerY="40.0">
<omgdi:waypoint x="135.00000143051182" y="252.0012496471903"/>
<omgdi:waypoint x="135.00000143051182" y="633.0512336398224"/>
<omgdi:waypoint x="225.00000536441945" y="633.0512336398224"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-8572B97A-4653-4A84-9210-F0C69E482DF9" id="BPMNEdge_sid-8572B97A-4653-4A84-9210-F0C69E482DF9" flowable:sourceDockerX="20.5" flowable:sourceDockerY="20.5" flowable:targetDockerX="14.000000000000227" flowable:targetDockerY="14.0">
<omgdi:waypoint x="425.49999396502983" y="652.495095819374"/>
<omgdi:waypoint x="425.49999396502983" y="787.9999992251396"/>
<omgdi:waypoint x="1783.9999736249454" y="787.9999992251396"/>
<omgdi:waypoint x="1783.9999736249454" y="251.00116310380284"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-E21CE175-9EFD-45BE-88B6-DE1BF332E267" id="BPMNEdge_sid-E21CE175-9EFD-45BE-88B6-DE1BF332E267" flowable:sourceDockerX="50.0" flowable:sourceDockerY="40.0" flowable:targetDockerX="20.0" flowable:targetDockerY="20.0">
<omgdi:waypoint x="1044.9499239823508" y="237.0512465207016"/>
<omgdi:waypoint x="1094.9999488031171" y="237.0512462136158"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-8C3AEFE5-17C1-4337-8043-53EEA3C7A502" id="BPMNEdge_sid-8C3AEFE5-17C1-4337-8043-53EEA3C7A502" flowable:sourceDockerX="20.500000000000117" flowable:sourceDockerY="20.5" flowable:targetDockerX="50.0" flowable:targetDockerY="39.999999999999986">
<omgdi:waypoint x="1108.6034827471362" y="223.44568644188422"/>
<omgdi:waypoint x="1057.0438229560853" y="118.00625470876659"/>
<omgdi:waypoint x="590.0000064373032" y="118.00625470876659"/>
<omgdi:waypoint x="590.0000064373032" y="197.05124585279248"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-4AE93A9D-3455-4ECF-A95D-7EE27A6210F8" id="BPMNEdge_sid-4AE93A9D-3455-4ECF-A95D-7EE27A6210F8" flowable:sourceDockerX="20.5" flowable:sourceDockerY="20.5" flowable:targetDockerX="50.0" flowable:targetDockerY="40.0">
<omgdi:waypoint x="425.4747416646079" y="613.5259742696771"/>
<omgdi:waypoint x="425.05037629762626" y="277.00124585279247"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-C5B3099D-A3DD-4A05-93BD-6AE6C4A52234" id="BPMNEdge_sid-C5B3099D-A3DD-4A05-93BD-6AE6C4A52234" flowable:sourceDockerX="20.5" flowable:sourceDockerY="20.5" flowable:targetDockerX="49.99999999999994" flowable:targetDockerY="40.0">
<omgdi:waypoint x="695.5000080466291" y="256.4988509950381"/>
<omgdi:waypoint x="695.5000080466291" y="633.0512268681223"/>
<omgdi:waypoint x="719.9999678134644" y="633.0512268681223"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-E19CF8FB-ECA6-4857-A633-813D4036E092" id="BPMNEdge_sid-E19CF8FB-ECA6-4857-A633-813D4036E092" flowable:sourceDockerX="50.0" flowable:sourceDockerY="39.99999999999997" flowable:targetDockerX="50.0" flowable:targetDockerY="40.0">
<omgdi:waypoint x="275.0000029528013" y="277.0012458527924"/>
<omgdi:waypoint x="275.00000509348916" y="593.0512336398224"/>
</bpmndi:BPMNEdge>
</bpmndi:BPMNPlane>
</bpmndi:BPMNDiagram>
</definitions>`,`<definitions xmlns="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:flowable="http://flowable.org/bpmn" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:omgdc="http://www.omg.org/spec/DD/20100524/DC" xmlns:omgdi="http://www.omg.org/spec/DD/20100524/DI" typeLanguage="http://www.w3.org/2001/XMLSchema" expressionLanguage="http://www.w3.org/1999/XPath" targetNamespace="http://www.flowable.org/processdef" exporter="Flowable Open Source Modeler" exporterVersion="6.8.0">
<process id="DIGITAL-ONBOARDING-TEST" name="DIGITAL-ONBOARDING-TEST" isExecutable="true">
<startEvent id="startEvent1" flowable:formKey="OnBoardingAgenceChoose" flowable:formFieldValidation="true"/>
<userTask id="sid-59358794-33E7-4D8A-8D83-2860EC87274C" name="Personal Info" flowable:formKey="OnBoardingPeronalInformation" flowable:formFieldValidation="true"/>
<userTask id="sid-F0B05142-24B5-4FDC-AA2E-EFA554132E35" name="Contact Details" flowable:formKey="OnBoardingContactDetails" flowable:formFieldValidation="true"/>
<userTask id="sid-283D9CE2-6F40-4B7E-8CBF-F039321A84E0" name="Professional Information" flowable:formKey="OnBoardingProfessionelleInformation" flowable:formFieldValidation="true"/>
<userTask id="sid-1CD1F402-BDA6-4664-AD76-4623260A5EAE" name="Package info" flowable:formKey="OnBoardingPackageDetails" flowable:formFieldValidation="true"/>
<userTask id="sid-E4BC0291-7F85-464C-88F8-C240717D2F18" name="Overview" flowable:formKey="OnBoardingOverview" flowable:formFieldValidation="true"/>
<userTask id="sid-E4B27FA5-F15B-4504-9855-0B30712C8350" name="Upload Files" flowable:formKey="OnBoardingUploadFiles" flowable:formFieldValidation="true"/>
<endEvent id="sid-AE48F376-6414-43C2-AA28-7A3B163010E0"/>
<sequenceFlow id="sid-C62B7BF3-0314-4000-AFCC-36AAB09809B8" sourceRef="sid-E4B27FA5-F15B-4504-9855-0B30712C8350" targetRef="sid-AE48F376-6414-43C2-AA28-7A3B163010E0"/>
<sequenceFlow id="sid-C6762800-17D2-475F-8982-143E0A289961" sourceRef="sid-59358794-33E7-4D8A-8D83-2860EC87274C" targetRef="sid-F0B05142-24B5-4FDC-AA2E-EFA554132E35"/>
<sequenceFlow id="sid-51A34B07-B43B-404E-BE83-F0CB315ED554" sourceRef="sid-F0B05142-24B5-4FDC-AA2E-EFA554132E35" targetRef="sid-283D9CE2-6F40-4B7E-8CBF-F039321A84E0"/>
<sequenceFlow id="sid-EF96E2D0-24B9-4366-BDBA-139F86FA1251" sourceRef="sid-283D9CE2-6F40-4B7E-8CBF-F039321A84E0" targetRef="sid-1CD1F402-BDA6-4664-AD76-4623260A5EAE"/>
<sequenceFlow id="sid-BC0AD36C-984D-445A-9ECA-8425B7CFDAA0" sourceRef="sid-1CD1F402-BDA6-4664-AD76-4623260A5EAE" targetRef="sid-E4BC0291-7F85-464C-88F8-C240717D2F18"/>
<sequenceFlow id="sid-696F5C59-7429-4910-A825-ACB73BB64E73" sourceRef="sid-E4BC0291-7F85-464C-88F8-C240717D2F18" targetRef="sid-E4B27FA5-F15B-4504-9855-0B30712C8350"/>
<sequenceFlow id="sid-8BCDA330-C501-4011-9115-B9CA7A3DB45E" sourceRef="startEvent1" targetRef="sid-59358794-33E7-4D8A-8D83-2860EC87274C"/>
</process>
<bpmndi:BPMNDiagram id="BPMNDiagram_DIGITAL-ONBOARDING-TEST">
<bpmndi:BPMNPlane bpmnElement="DIGITAL-ONBOARDING-TEST" id="BPMNPlane_DIGITAL-ONBOARDING-TEST">
<bpmndi:BPMNShape bpmnElement="startEvent1" id="BPMNShape_startEvent1">
<omgdc:Bounds height="30.0" width="30.0" x="90.0" y="210.0"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-59358794-33E7-4D8A-8D83-2860EC87274C" id="BPMNShape_sid-59358794-33E7-4D8A-8D83-2860EC87274C">
<omgdc:Bounds height="80.0" width="100.0" x="225.0" y="185.0"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-F0B05142-24B5-4FDC-AA2E-EFA554132E35" id="BPMNShape_sid-F0B05142-24B5-4FDC-AA2E-EFA554132E35">
<omgdc:Bounds height="80.0" width="100.0" x="405.0" y="185.0"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-283D9CE2-6F40-4B7E-8CBF-F039321A84E0" id="BPMNShape_sid-283D9CE2-6F40-4B7E-8CBF-F039321A84E0">
<omgdc:Bounds height="80.0" width="100.0" x="570.0" y="185.0"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-1CD1F402-BDA6-4664-AD76-4623260A5EAE" id="BPMNShape_sid-1CD1F402-BDA6-4664-AD76-4623260A5EAE">
<omgdc:Bounds height="80.0" width="100.0" x="735.0" y="185.0"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-E4BC0291-7F85-464C-88F8-C240717D2F18" id="BPMNShape_sid-E4BC0291-7F85-464C-88F8-C240717D2F18">
<omgdc:Bounds height="80.0" width="100.0" x="885.0" y="185.0"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-E4B27FA5-F15B-4504-9855-0B30712C8350" id="BPMNShape_sid-E4B27FA5-F15B-4504-9855-0B30712C8350">
<omgdc:Bounds height="80.0" width="100.0" x="1035.0" y="185.0"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-AE48F376-6414-43C2-AA28-7A3B163010E0" id="BPMNShape_sid-AE48F376-6414-43C2-AA28-7A3B163010E0">
<omgdc:Bounds height="28.0" width="28.0" x="1238.5" y="211.0"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNEdge bpmnElement="sid-8BCDA330-C501-4011-9115-B9CA7A3DB45E" id="BPMNEdge_sid-8BCDA330-C501-4011-9115-B9CA7A3DB45E" flowable:sourceDockerX="15.0" flowable:sourceDockerY="15.0" flowable:targetDockerX="50.0" flowable:targetDockerY="40.0">
<omgdi:waypoint x="119.94999936756076" y="225.0"/>
<omgdi:waypoint x="224.9999999999356" y="225.0"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-51A34B07-B43B-404E-BE83-F0CB315ED554" id="BPMNEdge_sid-51A34B07-B43B-404E-BE83-F0CB315ED554" flowable:sourceDockerX="50.0" flowable:sourceDockerY="40.0" flowable:targetDockerX="50.0" flowable:targetDockerY="40.0">
<omgdi:waypoint x="504.9499999998897" y="225.0"/>
<omgdi:waypoint x="570.0" y="225.0"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-C62B7BF3-0314-4000-AFCC-36AAB09809B8" id="BPMNEdge_sid-C62B7BF3-0314-4000-AFCC-36AAB09809B8" flowable:sourceDockerX="50.0" flowable:sourceDockerY="40.0" flowable:targetDockerX="14.0" flowable:targetDockerY="14.0">
<omgdi:waypoint x="1134.95" y="225.0"/>
<omgdi:waypoint x="1238.5" y="225.0"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-BC0AD36C-984D-445A-9ECA-8425B7CFDAA0" id="BPMNEdge_sid-BC0AD36C-984D-445A-9ECA-8425B7CFDAA0" flowable:sourceDockerX="50.0" flowable:sourceDockerY="40.0" flowable:targetDockerX="50.0" flowable:targetDockerY="40.0">
<omgdi:waypoint x="834.9499999999999" y="225.0"/>
<omgdi:waypoint x="885.0" y="225.0"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-696F5C59-7429-4910-A825-ACB73BB64E73" id="BPMNEdge_sid-696F5C59-7429-4910-A825-ACB73BB64E73" flowable:sourceDockerX="50.0" flowable:sourceDockerY="40.0" flowable:targetDockerX="50.0" flowable:targetDockerY="40.0">
<omgdi:waypoint x="984.9499999999999" y="225.0"/>
<omgdi:waypoint x="1035.0" y="225.0"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-C6762800-17D2-475F-8982-143E0A289961" id="BPMNEdge_sid-C6762800-17D2-475F-8982-143E0A289961" flowable:sourceDockerX="50.0" flowable:sourceDockerY="40.0" flowable:targetDockerX="50.0" flowable:targetDockerY="40.0">
<omgdi:waypoint x="324.9499999999431" y="225.0"/>
<omgdi:waypoint x="404.99999999997226" y="225.0"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-EF96E2D0-24B9-4366-BDBA-139F86FA1251" id="BPMNEdge_sid-EF96E2D0-24B9-4366-BDBA-139F86FA1251" flowable:sourceDockerX="50.0" flowable:sourceDockerY="40.0" flowable:targetDockerX="50.0" flowable:targetDockerY="40.0">
<omgdi:waypoint x="669.9499999998898" y="225.0"/>
<omgdi:waypoint x="735.0" y="225.0"/>
</bpmndi:BPMNEdge>
</bpmndi:BPMNPlane>
</bpmndi:BPMNDiagram>
</definitions>`,`<definitions xmlns="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:flowable="http://flowable.org/bpmn" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:omgdc="http://www.omg.org/spec/DD/20100524/DC" xmlns:omgdi="http://www.omg.org/spec/DD/20100524/DI" typeLanguage="http://www.w3.org/2001/XMLSchema" expressionLanguage="http://www.w3.org/1999/XPath" targetNamespace="http://www.flowable.org/processdef" exporter="Flowable Open Source Modeler" exporterVersion="6.8.0">
<process id="Process_A" name="Process_A" isExecutable="true">
<startEvent id="startEvent1" flowable:formKey="Subscription-Personal-Info-Step" flowable:formFieldValidation="true"/>
<userTask id="sid-BDCA837F-BB0A-4F72-BBCD-B81DC4197676" name="Step 2" flowable:assignee="$INITIATOR" flowable:formKey="Subscription-Role-Step" flowable:formFieldValidation="true">
<extensionElements>
<modeler:activiti-idm-initiator xmlns:modeler="http://flowable.org/modeler">
<![CDATA[ true ]]>
</modeler:activiti-idm-initiator>
</extensionElements>
</userTask>
<sequenceFlow id="sid-3F0BBC8A-17A8-4413-A750-D31A791EB3A0" sourceRef="startEvent1" targetRef="sid-BDCA837F-BB0A-4F72-BBCD-B81DC4197676"/>
<endEvent id="sid-B6C40972-ABDD-4742-8629-8AA2372D82DA"/>
<userTask id="sid-F747F375-676C-4E02-BC54-DB82567DBF47" name="Step 3" flowable:assignee="$INITIATOR" flowable:formKey="Subscription-Otp-Step" flowable:formFieldValidation="true">
<extensionElements>
<modeler:activiti-idm-initiator xmlns:modeler="http://flowable.org/modeler">
<![CDATA[ true ]]>
</modeler:activiti-idm-initiator>
</extensionElements>
</userTask>
<userTask id="sid-23431025-9017-400B-9445-10E34982D495" name="Step 4" flowable:assignee="$INITIATOR" flowable:formKey="Subscription-Email-Step" flowable:formFieldValidation="true">
<extensionElements>
<modeler:activiti-idm-initiator xmlns:modeler="http://flowable.org/modeler">
<![CDATA[ true ]]>
</modeler:activiti-idm-initiator>
</extensionElements>
</userTask>
<sequenceFlow id="sid-1C2F3AD1-51E6-47F0-93FB-078247A59AC7" sourceRef="sid-BDCA837F-BB0A-4F72-BBCD-B81DC4197676" targetRef="sid-F747F375-676C-4E02-BC54-DB82567DBF47"/>
<sequenceFlow id="sid-9DA0318E-EC4F-4EAA-A0A3-F5BEB251D338" sourceRef="sid-F747F375-676C-4E02-BC54-DB82567DBF47" targetRef="sid-23431025-9017-400B-9445-10E34982D495"/>
<sequenceFlow id="sid-4ECC158E-9F75-49FB-8B54-5DAE636E3220" sourceRef="sid-23431025-9017-400B-9445-10E34982D495" targetRef="sid-B6C40972-ABDD-4742-8629-8AA2372D82DA"/>
</process>
<bpmndi:BPMNDiagram id="BPMNDiagram_Process_A">
<bpmndi:BPMNPlane bpmnElement="Process_A" id="BPMNPlane_Process_A">
<bpmndi:BPMNShape bpmnElement="startEvent1" id="BPMNShape_startEvent1">
<omgdc:Bounds height="30.0" width="30.0" x="224.9999966472388" y="185.9999763071555"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-BDCA837F-BB0A-4F72-BBCD-B81DC4197676" id="BPMNShape_sid-BDCA837F-BB0A-4F72-BBCD-B81DC4197676">
<omgdc:Bounds height="80.0" width="100.0" x="344.99999485909944" y="160.9999898076061"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-B6C40972-ABDD-4742-8629-8AA2372D82DA" id="BPMNShape_sid-B6C40972-ABDD-4742-8629-8AA2372D82DA">
<omgdc:Bounds height="28.0" width="28.0" x="839.9999874830248" y="186.99997907877113"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-F747F375-676C-4E02-BC54-DB82567DBF47" id="BPMNShape_sid-F747F375-676C-4E02-BC54-DB82567DBF47">
<omgdc:Bounds height="79.99999999999994" width="100.0" x="509.9999924004079" y="160.999981865288"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNShape bpmnElement="sid-23431025-9017-400B-9445-10E34982D495" id="BPMNShape_sid-23431025-9017-400B-9445-10E34982D495">
<omgdc:Bounds height="79.99999999999994" width="100.0" x="674.9999899417163" y="160.99999220669292"/>
</bpmndi:BPMNShape>
<bpmndi:BPMNEdge bpmnElement="sid-1C2F3AD1-51E6-47F0-93FB-078247A59AC7" id="BPMNEdge_sid-1C2F3AD1-51E6-47F0-93FB-078247A59AC7" flowable:sourceDockerX="50.0" flowable:sourceDockerY="40.0" flowable:targetDockerX="50.0" flowable:targetDockerY="39.99999999999994">
<omgdi:waypoint x="444.9499944508091" y="200.999987400843"/>
<omgdi:waypoint x="509.9999918929855" y="200.9999842696443"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-4ECC158E-9F75-49FB-8B54-5DAE636E3220" id="BPMNEdge_sid-4ECC158E-9F75-49FB-8B54-5DAE636E3220" flowable:sourceDockerX="50.0" flowable:sourceDockerY="39.99999999999997" flowable:targetDockerX="14.0" flowable:targetDockerY="14.0">
<omgdi:waypoint x="774.9499899416569" y="200.99998711835104"/>
<omgdi:waypoint x="839.9999874207823" y="200.99998049841858"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-9DA0318E-EC4F-4EAA-A0A3-F5BEB251D338" id="BPMNEdge_sid-9DA0318E-EC4F-4EAA-A0A3-F5BEB251D338" flowable:sourceDockerX="50.0" flowable:sourceDockerY="39.999999999999986" flowable:targetDockerX="50.0" flowable:targetDockerY="39.99999999999997">
<omgdi:waypoint x="609.9499924003863" y="200.99998499591334"/>
<omgdi:waypoint x="674.9999898485303" y="200.99998907293377"/>
</bpmndi:BPMNEdge>
<bpmndi:BPMNEdge bpmnElement="sid-3F0BBC8A-17A8-4413-A750-D31A791EB3A0" id="BPMNEdge_sid-3F0BBC8A-17A8-4413-A750-D31A791EB3A0" flowable:sourceDockerX="15.0" flowable:sourceDockerY="15.0" flowable:targetDockerX="50.0" flowable:targetDockerY="40.0">
<omgdi:waypoint x="254.94999588610239" y="200.9999776092958"/>
<omgdi:waypoint x="344.9999947832937" y="200.99998545262198"/>
</bpmndi:BPMNEdge>
</bpmndi:BPMNPlane>
</bpmndi:BPMNDiagram>
</definitions>`];
let arrayOfJson:any[]=[];
arrayOfXmlProcess.forEach(xmlElement => {
    let json = convert.xml2json(xmlElement, { compact: true, spaces: 4 });
    arrayOfJson.push(JSON.parse(json));
});
console.log(arrayOfJson);*/}