export const text_xml = `
<?xml version="1.0" encoding="UTF-8"?>
<definitions xmlns="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:omgdc="http://www.omg.org/spec/DD/20100524/DC" xmlns:omgdi="http://www.omg.org/spec/DD/20100524/DI" xmlns:camunda="http://camunda.org/schema/1.0/bpmn" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:flowable="http://flowable.org/bpmn" targetNamespace="http://flowable.org/test" exporter="Flowable Open Source Modeler">
  <collaboration id="Collaboration">
    <participant id="sid-24EFE43D-DD40-4C1A-8BFE-FB23974CC96A" name="Onboarding " processRef="process" />
  </collaboration>
  <process id="process" name="Onboarding " isExecutable="true">
    <laneSet id="laneSet_process">
      <lane id="sid-ACA07D36-47ED-42E0-AE92-01A604F76BE2" name="Agent (CSA)">
        <flowNodeRef>sid-ACB9CA9B-A211-435C-98B5-9BA6718CF3C4</flowNodeRef>
        <flowNodeRef>sid-B2045504-32AE-42CE-83A0-16C8E7781178</flowNodeRef>
        <flowNodeRef>sid-92BA504A-25F9-4595-8263-441ADDCBD78C</flowNodeRef>
        <flowNodeRef>sid-9A2F1EBB-7251-4190-9A98-DB2243C037DD</flowNodeRef>
        <flowNodeRef>sid-E93981FF-4F90-44A3-9592-3FDE2A22E7FB</flowNodeRef>
        <flowNodeRef>sid-9E732312-7804-4B1B-8805-8C03F8652C15</flowNodeRef>
        <flowNodeRef>sid-BE3D5093-F1B0-4B13-BE16-C5B7A4AC5D31</flowNodeRef>
      </lane>
      <lane id="sid-95E2D2DE-C32D-440F-B1E8-97C4C8F30C3F" name="Provider">
        <flowNodeRef>sid-6AF03C2B-20C2-4BD9-A2B9-B181522E57F8</flowNodeRef>
        <flowNodeRef>sid-F2A4DFD8-ED12-4370-B0AA-D398B5731A3D</flowNodeRef>
        <flowNodeRef>sid-67CE113F-BC89-457F-86AD-4272D21DB75E</flowNodeRef>
        <flowNodeRef>sid-77395266-72A5-40E8-802D-0FA40393A9DD</flowNodeRef>
        <flowNodeRef>sid-32DDE495-1036-4E9A-BD17-6684B3E645BA</flowNodeRef>
        <flowNodeRef>sid-B17F8D33-EDCD-4864-AEBF-1E0550BAEF57</flowNodeRef>
        <flowNodeRef>sid-DE596D82-EDF1-4F51-9563-4A838A89B236</flowNodeRef>
        <flowNodeRef>sid-F8B69C64-C104-4284-97E1-380D13A2F64F</flowNodeRef>
        <flowNodeRef>sid-D9C316EE-700D-40FE-9F33-FA063F929971</flowNodeRef>
        <flowNodeRef>sid-483922C2-8FD4-4C68-8215-56AC82B65803</flowNodeRef>
        <flowNodeRef>sid-A7CE64D7-FCCB-4745-9082-FC8C1426A57C</flowNodeRef>
        <flowNodeRef>sid-6B5EFAF0-9BD2-4823-AE26-AA57AF44D151</flowNodeRef>
      </lane>
      <lane id="sid-2434F604-3C01-4FE8-AD5F-7E97A71ECD2A" name="Customer (front)">
        <flowNodeRef>startEvent1</flowNodeRef>
        <flowNodeRef>sid-57426898-D02F-4625-8931-E7AB3F325F78</flowNodeRef>
        <flowNodeRef>sid-78E244D5-B81B-4D72-B792-ABFED121749F</flowNodeRef>
        <flowNodeRef>sid-3DB913A9-9B53-4579-A97B-93C9128A402A</flowNodeRef>
        <flowNodeRef>sid-60933FDF-F739-4AC1-B5C8-2F62D770F1A3</flowNodeRef>
        <flowNodeRef>sid-07B0B261-1639-45C0-83DC-EF476AA9BF7D</flowNodeRef>
        <flowNodeRef>sid-23A57003-22F3-41E4-9295-5C1E5C10065A</flowNodeRef>
        <flowNodeRef>sid-BAB9D1EE-5FDC-45ED-B386-BC6D6DC0E232</flowNodeRef>
        <flowNodeRef>sid-0580A0EA-D9CE-4881-9549-023FFEC0699C</flowNodeRef>
        <flowNodeRef>sid-0E49295D-9D01-4880-85B3-8606F891805F</flowNodeRef>
        <flowNodeRef>sid-DFFFC420-FECD-4925-A44B-767BEF5DE0E4</flowNodeRef>
        <flowNodeRef>sid-C52984D5-F263-46CA-AE19-4A0286883BA2</flowNodeRef>
        <flowNodeRef>sid-DB2A2082-6457-41D0-80FC-6049F3288588</flowNodeRef>
        <flowNodeRef>sid-26F44C01-24BF-453D-9FD6-95ED4C98EB0F</flowNodeRef>
        <flowNodeRef>Activity_1fsy8h2</flowNodeRef>
      </lane>
    </laneSet>
    <userTask id="sid-ACB9CA9B-A211-435C-98B5-9BA6718CF3C4" name="Validate Customer info" camunda:formRefBinding="latest" camunda:assignee="bkdev" flowable:formKey="onboarding_request_validation::1" flowable:formFieldValidation="true">
      <extensionElements>
        <modeler:initiator-can-complete xmlns:modeler="http://flowable.org/modeler">false</modeler:initiator-can-complete>
      </extensionElements>
    </userTask>
    <receiveTask id="money-collected" name="Money collected" />
    <serviceTask id="sid-B2045504-32AE-42CE-83A0-16C8E7781178" name="Notify Agent" camunda:delegateExpression="\${sendEmail}" flowable:type="MessageCenterTask">
      <extensionElements>
        <flowable:field name="message_type">
          <flowable:string>onboarding-request-notification::EMAIL</flowable:string>
        </flowable:field>
        <camunda:inputOutput>
          <camunda:inputParameter name="email">qa.bkr.otp@yopmail.com</camunda:inputParameter>
        </camunda:inputOutput>
      </extensionElements>
      <incoming>sid-26F44C01-24BF-453D-9FD6-95ED4C98EB0F</incoming>
    </serviceTask>
    <exclusiveGateway id="sid-92BA504A-25F9-4595-8263-441ADDCBD78C" />
    <sequenceFlow id="sid-9A2F1EBB-7251-4190-9A98-DB2243C037DD" name="Rejected" sourceRef="sid-92BA504A-25F9-4595-8263-441ADDCBD78C" targetRef="sid-78E244D5-B81B-4D72-B792-ABFED121749F">
      <conditionExpression xsi:type="tFormalExpression">\${reject == true}</conditionExpression>
    </sequenceFlow>
    <sequenceFlow id="sid-E93981FF-4F90-44A3-9592-3FDE2A22E7FB" sourceRef="sid-92BA504A-25F9-4595-8263-441ADDCBD78C" targetRef="sid-67CE113F-BC89-457F-86AD-4272D21DB75E">
      <conditionExpression xsi:type="tFormalExpression">\${reject == false}</conditionExpression>
    </sequenceFlow>
    <sequenceFlow id="sid-9E732312-7804-4B1B-8805-8C03F8652C15" sourceRef="sid-B2045504-32AE-42CE-83A0-16C8E7781178" targetRef="sid-ACB9CA9B-A211-435C-98B5-9BA6718CF3C4" />
    <sequenceFlow id="sid-BE3D5093-F1B0-4B13-BE16-C5B7A4AC5D31" sourceRef="sid-ACB9CA9B-A211-435C-98B5-9BA6718CF3C4" targetRef="sid-92BA504A-25F9-4595-8263-441ADDCBD78C" />
    <exclusiveGateway id="sid-6AF03C2B-20C2-4BD9-A2B9-B181522E57F8" default="sid-F8B69C64-C104-4284-97E1-380D13A2F64F" />
    <serviceTask id="sid-F2A4DFD8-ED12-4370-B0AA-D398B5731A3D" name="Check user existence in keycloak " camunda:delegateExpression="\${checkUserExistence}">
      <incoming>sid-C52984D5-F263-46CA-AE19-4A0286883BA2</incoming>
    </serviceTask>
    <serviceTask id="sid-67CE113F-BC89-457F-86AD-4272D21DB75E" name="Create user account" camunda:delegateExpression="\${createUserAccount}" />
    <serviceTask id="sid-77395266-72A5-40E8-802D-0FA40393A9DD" name="Generate temporary password" camunda:delegateExpression="\${generateUserPassword}" />
    <serviceTask id="sid-32DDE495-1036-4E9A-BD17-6684B3E645BA" name="Notify Customer" camunda:delegateExpression="\${sendEmail}" flowable:type="MessageCenterTask">
      <extensionElements>
        <flowable:field name="message_type">
          <flowable:string>onboarding-account-exists::EMAIL</flowable:string>
        </flowable:field>
        <camunda:inputOutput>
          <camunda:inputParameter name="email">qa.bkr.otp@yopmail.com</camunda:inputParameter>
        </camunda:inputOutput>
      </extensionElements>
    </serviceTask>
    <endEvent id="sid-B17F8D33-EDCD-4864-AEBF-1E0550BAEF57">
      <extensionElements>
        <camunda:executionListener delegateExpression="\${dispatchCustomerExistsError}" event="start" />
      </extensionElements>
    </endEvent>
    <sequenceFlow id="sid-DE596D82-EDF1-4F51-9563-4A838A89B236" sourceRef="sid-77395266-72A5-40E8-802D-0FA40393A9DD" targetRef="sid-57426898-D02F-4625-8931-E7AB3F325F78" />
    <sequenceFlow id="sid-F8B69C64-C104-4284-97E1-380D13A2F64F" name="does not exist" sourceRef="sid-6AF03C2B-20C2-4BD9-A2B9-B181522E57F8" targetRef="sid-3DB913A9-9B53-4579-A97B-93C9128A402A" />
    <sequenceFlow id="sid-D9C316EE-700D-40FE-9F33-FA063F929971" sourceRef="sid-F2A4DFD8-ED12-4370-B0AA-D398B5731A3D" targetRef="sid-6AF03C2B-20C2-4BD9-A2B9-B181522E57F8" />
    <sequenceFlow id="sid-483922C2-8FD4-4C68-8215-56AC82B65803" name="Exists" sourceRef="sid-6AF03C2B-20C2-4BD9-A2B9-B181522E57F8" targetRef="sid-32DDE495-1036-4E9A-BD17-6684B3E645BA">
      <conditionExpression xsi:type="tFormalExpression">\${userExists}</conditionExpression>
    </sequenceFlow>
    <sequenceFlow id="sid-A7CE64D7-FCCB-4745-9082-FC8C1426A57C" sourceRef="sid-67CE113F-BC89-457F-86AD-4272D21DB75E" targetRef="sid-77395266-72A5-40E8-802D-0FA40393A9DD" />
    <sequenceFlow id="sid-6B5EFAF0-9BD2-4823-AE26-AA57AF44D151" sourceRef="sid-32DDE495-1036-4E9A-BD17-6684B3E645BA" targetRef="sid-B17F8D33-EDCD-4864-AEBF-1E0550BAEF57" />
    <startEvent id="startEvent1" camunda:formRefBinding="latest" flowable:formKey="onboardingFirstForm::3" flowable:formFieldValidation="true">
      <extensionElements />
      <outgoing>Flow_0zo5got</outgoing>
    </startEvent>
    <serviceTask id="sid-57426898-D02F-4625-8931-E7AB3F325F78" name="Notify User with creation success" camunda:delegateExpression="\${sendEmail}" flowable:type="MessageCenterTask">
      <extensionElements>
        <flowable:field name="message_type">
          <flowable:string>onboarding-account-created::EMAIL</flowable:string>
        </flowable:field>
        <camunda:inputOutput>
          <camunda:inputParameter name="email">qa.bkr.otp@yopmail.com</camunda:inputParameter>
        </camunda:inputOutput>
      </extensionElements>
    </serviceTask>
    <serviceTask id="sid-78E244D5-B81B-4D72-B792-ABFED121749F" name="Notify User with rejection" camunda:delegateExpression="\${sendEmail}" flowable:type="MessageCenterTask">
      <extensionElements>
        <flowable:field name="message_type">
          <flowable:string>onboarding-account-rejected::EMAIL</flowable:string>
        </flowable:field>
        <camunda:inputOutput>
          <camunda:inputParameter name="email">qa.bkr.otp@yopmail.com</camunda:inputParameter>
        </camunda:inputOutput>
      </extensionElements>
    </serviceTask>
    <userTask id="sid-3DB913A9-9B53-4579-A97B-93C9128A402A" name="Customer Details form" camunda:formRefBinding="latest" camunda:assignee="$INITIATOR" flowable:formKey="UserDetails::2" flowable:formFieldValidation="true">
      <extensionElements>
        <modeler:initiator-can-complete xmlns:modeler="http://flowable.org/modeler">true</modeler:initiator-can-complete>
      </extensionElements>
    </userTask>
    <endEvent id="sid-60933FDF-F739-4AC1-B5C8-2F62D770F1A3" />
    <scriptTask id="sid-07B0B261-1639-45C0-83DC-EF476AA9BF7D" name="Append process variables" scriptFormat="juel" flowable:autoStoreVariables="false">
      <script>\${execution.setVariable('user_identity_first_name', execution.getVariable('user_identity_username'))}</script>
    </scriptTask>
    <exclusiveGateway id="sid-23A57003-22F3-41E4-9295-5C1E5C10065A" default="sid-DB2A2082-6457-41D0-80FC-6049F3288588">
      <incoming>Flow_1m23zrt</incoming>
    </exclusiveGateway>
    <endEvent id="sid-BAB9D1EE-5FDC-45ED-B386-BC6D6DC0E232" />
    <sequenceFlow id="sid-0580A0EA-D9CE-4881-9549-023FFEC0699C" sourceRef="sid-57426898-D02F-4625-8931-E7AB3F325F78" targetRef="sid-60933FDF-F739-4AC1-B5C8-2F62D770F1A3" />
    <sequenceFlow id="sid-0E49295D-9D01-4880-85B3-8606F891805F" sourceRef="sid-78E244D5-B81B-4D72-B792-ABFED121749F" targetRef="sid-60933FDF-F739-4AC1-B5C8-2F62D770F1A3" />
    <sequenceFlow id="sid-DFFFC420-FECD-4925-A44B-767BEF5DE0E4" sourceRef="sid-3DB913A9-9B53-4579-A97B-93C9128A402A" targetRef="sid-07B0B261-1639-45C0-83DC-EF476AA9BF7D" />
    <sequenceFlow id="sid-C52984D5-F263-46CA-AE19-4A0286883BA2" name="&#62; 18" sourceRef="sid-23A57003-22F3-41E4-9295-5C1E5C10065A" targetRef="sid-F2A4DFD8-ED12-4370-B0AA-D398B5731A3D">
      <conditionExpression xsi:type="tFormalExpression">\${age_output == true}</conditionExpression>
    </sequenceFlow>
    <sequenceFlow id="sid-DB2A2082-6457-41D0-80FC-6049F3288588" sourceRef="sid-23A57003-22F3-41E4-9295-5C1E5C10065A" targetRef="sid-BAB9D1EE-5FDC-45ED-B386-BC6D6DC0E232" />
    <sequenceFlow id="sid-26F44C01-24BF-453D-9FD6-95ED4C98EB0F" sourceRef="sid-07B0B261-1639-45C0-83DC-EF476AA9BF7D" targetRef="sid-B2045504-32AE-42CE-83A0-16C8E7781178" />
    <sequenceFlow id="Flow_0zo5got" sourceRef="startEvent1" targetRef="Activity_1fsy8h2" />
    <sequenceFlow id="Flow_1m23zrt" sourceRef="Activity_1fsy8h2" targetRef="sid-23A57003-22F3-41E4-9295-5C1E5C10065A" />
    <businessRuleTask id="Activity_1fsy8h2" name="age validation" camunda:decisionRef="">
      <incoming>Flow_0zo5got</incoming>
      <outgoing>Flow_1m23zrt</outgoing>
    </businessRuleTask>
  </process>
  <bpmndi:BPMNDiagram id="BPMNDiagram_Collaboration">
    <bpmndi:BPMNPlane id="BPMNPlane_Collaboration" bpmnElement="Collaboration">
      <bpmndi:BPMNShape id="BPMNShape_sid-24EFE43D-DD40-4C1A-8BFE-FB23974CC96A" bpmnElement="sid-24EFE43D-DD40-4C1A-8BFE-FB23974CC96A">
        <omgdc:Bounds x="150" y="85" width="1325" height="769" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BPMNShape_sid-2434F604-3C01-4FE8-AD5F-7E97A71ECD2A" bpmnElement="sid-2434F604-3C01-4FE8-AD5F-7E97A71ECD2A">
        <omgdc:Bounds x="180" y="85" width="1295" height="311" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BPMNShape_sid-95E2D2DE-C32D-440F-B1E8-97C4C8F30C3F" bpmnElement="sid-95E2D2DE-C32D-440F-B1E8-97C4C8F30C3F">
        <omgdc:Bounds x="180" y="630" width="1295" height="224" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BPMNShape_sid-ACA07D36-47ED-42E0-AE92-01A604F76BE2" bpmnElement="sid-ACA07D36-47ED-42E0-AE92-01A604F76BE2">
        <omgdc:Bounds x="180" y="396" width="1295" height="234" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BPMNShape_sid-ACB9CA9B-A211-435C-98B5-9BA6718CF3C4" bpmnElement="sid-ACB9CA9B-A211-435C-98B5-9BA6718CF3C4">
        <omgdc:Bounds x="915" y="473" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BPMNShape_sid-B2045504-32AE-42CE-83A0-16C8E7781178" bpmnElement="sid-B2045504-32AE-42CE-83A0-16C8E7781178">
        <omgdc:Bounds x="705" y="473" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BPMNShape_sid-92BA504A-25F9-4595-8263-441ADDCBD78C" bpmnElement="sid-92BA504A-25F9-4595-8263-441ADDCBD78C" isMarkerVisible="true">
        <omgdc:Bounds x="1162" y="493" width="40" height="40" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BPMNShape_sid-6AF03C2B-20C2-4BD9-A2B9-B181522E57F8" bpmnElement="sid-6AF03C2B-20C2-4BD9-A2B9-B181522E57F8" isMarkerVisible="true">
        <omgdc:Bounds x="405" y="714" width="40" height="40" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BPMNShape_sid-F2A4DFD8-ED12-4370-B0AA-D398B5731A3D" bpmnElement="sid-F2A4DFD8-ED12-4370-B0AA-D398B5731A3D">
        <omgdc:Bounds x="225" y="694" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BPMNShape_sid-67CE113F-BC89-457F-86AD-4272D21DB75E" bpmnElement="sid-67CE113F-BC89-457F-86AD-4272D21DB75E">
        <omgdc:Bounds x="1132" y="684" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BPMNShape_sid-77395266-72A5-40E8-802D-0FA40393A9DD" bpmnElement="sid-77395266-72A5-40E8-802D-0FA40393A9DD">
        <omgdc:Bounds x="1317" y="684" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BPMNShape_sid-32DDE495-1036-4E9A-BD17-6684B3E645BA" bpmnElement="sid-32DDE495-1036-4E9A-BD17-6684B3E645BA">
        <omgdc:Bounds x="555" y="694" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BPMNShape_sid-B17F8D33-EDCD-4864-AEBF-1E0550BAEF57" bpmnElement="sid-B17F8D33-EDCD-4864-AEBF-1E0550BAEF57">
        <omgdc:Bounds x="750" y="720" width="28" height="28" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BPMNShape_startEvent1" bpmnElement="startEvent1">
        <omgdc:Bounds x="260" y="130" width="30" height="30" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BPMNShape_sid-57426898-D02F-4625-8931-E7AB3F325F78" bpmnElement="sid-57426898-D02F-4625-8931-E7AB3F325F78">
        <omgdc:Bounds x="1317" y="190" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BPMNShape_sid-78E244D5-B81B-4D72-B792-ABFED121749F" bpmnElement="sid-78E244D5-B81B-4D72-B792-ABFED121749F">
        <omgdc:Bounds x="1125" y="195" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BPMNShape_sid-3DB913A9-9B53-4579-A97B-93C9128A402A" bpmnElement="sid-3DB913A9-9B53-4579-A97B-93C9128A402A">
        <omgdc:Bounds x="375" y="201" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BPMNShape_sid-60933FDF-F739-4AC1-B5C8-2F62D770F1A3" bpmnElement="sid-60933FDF-F739-4AC1-B5C8-2F62D770F1A3">
        <omgdc:Bounds x="1260" y="145" width="28" height="28" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BPMNShape_sid-07B0B261-1639-45C0-83DC-EF476AA9BF7D" bpmnElement="sid-07B0B261-1639-45C0-83DC-EF476AA9BF7D">
        <omgdc:Bounds x="540" y="201" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BPMNShape_sid-23A57003-22F3-41E4-9295-5C1E5C10065A" bpmnElement="sid-23A57003-22F3-41E4-9295-5C1E5C10065A" isMarkerVisible="true">
        <omgdc:Bounds x="255" y="325" width="40" height="40" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BPMNShape_sid-BAB9D1EE-5FDC-45ED-B386-BC6D6DC0E232" bpmnElement="sid-BAB9D1EE-5FDC-45ED-B386-BC6D6DC0E232">
        <omgdc:Bounds x="345" y="331" width="28" height="28" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_1fsy8h2_di" bpmnElement="Activity_1fsy8h2">
        <omgdc:Bounds x="225" y="210" width="100" height="80" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="BPMNEdge_sid-9A2F1EBB-7251-4190-9A98-DB2243C037DD" bpmnElement="sid-9A2F1EBB-7251-4190-9A98-DB2243C037DD" flowable:sourceDockerX="20.0" flowable:sourceDockerY="20.0" flowable:targetDockerX="50.0" flowable:targetDockerY="40.0">
        <omgdi:waypoint x="1182" y="493" />
        <omgdi:waypoint x="1182" y="384" />
        <omgdi:waypoint x="1175" y="384" />
        <omgdi:waypoint x="1175" y="274.95000000000005" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="BPMNEdge_sid-E93981FF-4F90-44A3-9592-3FDE2A22E7FB" bpmnElement="sid-E93981FF-4F90-44A3-9592-3FDE2A22E7FB" flowable:sourceDockerX="20.0" flowable:sourceDockerY="20.0" flowable:targetDockerX="50.0" flowable:targetDockerY="40.0">
        <omgdi:waypoint x="1182" y="532.9452747513027" />
        <omgdi:waypoint x="1182" y="684" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="BPMNEdge_sid-9E732312-7804-4B1B-8805-8C03F8652C15" bpmnElement="sid-9E732312-7804-4B1B-8805-8C03F8652C15" flowable:sourceDockerX="50.0" flowable:sourceDockerY="40.0" flowable:targetDockerX="50.0" flowable:targetDockerY="40.0">
        <omgdi:waypoint x="804.9499999999999" y="513" />
        <omgdi:waypoint x="915" y="513" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="BPMNEdge_sid-BE3D5093-F1B0-4B13-BE16-C5B7A4AC5D31" bpmnElement="sid-BE3D5093-F1B0-4B13-BE16-C5B7A4AC5D31" flowable:sourceDockerX="50.0" flowable:sourceDockerY="40.0" flowable:targetDockerX="20.0" flowable:targetDockerY="20.0">
        <omgdi:waypoint x="1014.9499999999615" y="513" />
        <omgdi:waypoint x="1162" y="513" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="BPMNEdge_sid-DE596D82-EDF1-4F51-9563-4A838A89B236" bpmnElement="sid-DE596D82-EDF1-4F51-9563-4A838A89B236" flowable:sourceDockerX="50.0" flowable:sourceDockerY="40.0" flowable:targetDockerX="50.0" flowable:targetDockerY="40.0">
        <omgdi:waypoint x="1367" y="684" />
        <omgdi:waypoint x="1367" y="269.95000000000005" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="BPMNEdge_sid-F8B69C64-C104-4284-97E1-380D13A2F64F" bpmnElement="sid-F8B69C64-C104-4284-97E1-380D13A2F64F" flowable:sourceDockerX="20.0" flowable:sourceDockerY="20.0" flowable:targetDockerX="50.0" flowable:targetDockerY="40.0">
        <omgdi:waypoint x="425" y="714" />
        <omgdi:waypoint x="425" y="280.95000000000005" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="BPMNEdge_sid-D9C316EE-700D-40FE-9F33-FA063F929971" bpmnElement="sid-D9C316EE-700D-40FE-9F33-FA063F929971" flowable:sourceDockerX="50.0" flowable:sourceDockerY="40.0" flowable:targetDockerX="20.0" flowable:targetDockerY="20.0">
        <omgdi:waypoint x="324.95000000000005" y="734" />
        <omgdi:waypoint x="405" y="734" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="BPMNEdge_sid-483922C2-8FD4-4C68-8215-56AC82B65803" bpmnElement="sid-483922C2-8FD4-4C68-8215-56AC82B65803" flowable:sourceDockerX="20.0" flowable:sourceDockerY="20.0" flowable:targetDockerX="50.0" flowable:targetDockerY="40.0">
        <omgdi:waypoint x="444.9444614102196" y="734" />
        <omgdi:waypoint x="555" y="734" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="BPMNEdge_sid-A7CE64D7-FCCB-4745-9082-FC8C1426A57C" bpmnElement="sid-A7CE64D7-FCCB-4745-9082-FC8C1426A57C" flowable:sourceDockerX="50.0" flowable:sourceDockerY="40.0" flowable:targetDockerX="50.0" flowable:targetDockerY="40.0">
        <omgdi:waypoint x="1231.94999999981" y="724" />
        <omgdi:waypoint x="1316.999999999873" y="724" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="BPMNEdge_sid-6B5EFAF0-9BD2-4823-AE26-AA57AF44D151" bpmnElement="sid-6B5EFAF0-9BD2-4823-AE26-AA57AF44D151" flowable:sourceDockerX="50.0" flowable:sourceDockerY="40.0" flowable:targetDockerX="14.0" flowable:targetDockerY="14.0">
        <omgdi:waypoint x="654.9499999999268" y="734" />
        <omgdi:waypoint x="750" y="734" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="BPMNEdge_sid-0580A0EA-D9CE-4881-9549-023FFEC0699C" bpmnElement="sid-0580A0EA-D9CE-4881-9549-023FFEC0699C" flowable:sourceDockerX="50.0" flowable:sourceDockerY="40.0" flowable:targetDockerX="14.0" flowable:targetDockerY="14.0">
        <omgdi:waypoint x="1366.4366197183099" y="190" />
        <omgdi:waypoint x="1366" y="159" />
        <omgdi:waypoint x="1287.949935249432" y="159" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="BPMNEdge_sid-0E49295D-9D01-4880-85B3-8606F891805F" bpmnElement="sid-0E49295D-9D01-4880-85B3-8606F891805F" flowable:sourceDockerX="50.0" flowable:sourceDockerY="40.0" flowable:targetDockerX="14.0" flowable:targetDockerY="14.0">
        <omgdi:waypoint x="1175" y="195" />
        <omgdi:waypoint x="1175" y="159" />
        <omgdi:waypoint x="1260" y="159" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="BPMNEdge_sid-DFFFC420-FECD-4925-A44B-767BEF5DE0E4" bpmnElement="sid-DFFFC420-FECD-4925-A44B-767BEF5DE0E4" flowable:sourceDockerX="50.0" flowable:sourceDockerY="40.0" flowable:targetDockerX="50.0" flowable:targetDockerY="40.0">
        <omgdi:waypoint x="474.9499999998897" y="241" />
        <omgdi:waypoint x="539.9999999999847" y="241" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="BPMNEdge_sid-C52984D5-F263-46CA-AE19-4A0286883BA2" bpmnElement="sid-C52984D5-F263-46CA-AE19-4A0286883BA2" flowable:sourceDockerX="20.0" flowable:sourceDockerY="20.0" flowable:targetDockerX="50.0" flowable:targetDockerY="40.0">
        <omgdi:waypoint x="275" y="365" />
        <omgdi:waypoint x="275" y="694" />
        <bpmndi:BPMNLabel>
          <omgdc:Bounds x="279" y="527" width="23" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="BPMNEdge_sid-DB2A2082-6457-41D0-80FC-6049F3288588" bpmnElement="sid-DB2A2082-6457-41D0-80FC-6049F3288588" flowable:sourceDockerX="20.0" flowable:sourceDockerY="20.0" flowable:targetDockerX="14.0" flowable:targetDockerY="14.0">
        <omgdi:waypoint x="294.93813912009506" y="345" />
        <omgdi:waypoint x="345" y="345" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="BPMNEdge_sid-26F44C01-24BF-453D-9FD6-95ED4C98EB0F" bpmnElement="sid-26F44C01-24BF-453D-9FD6-95ED4C98EB0F" flowable:sourceDockerX="50.0" flowable:sourceDockerY="40.0" flowable:targetDockerX="50.0" flowable:targetDockerY="40.0">
        <omgdi:waypoint x="640" y="241" />
        <omgdi:waypoint x="755" y="241" />
        <omgdi:waypoint x="755" y="473" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0zo5got_di" bpmnElement="Flow_0zo5got">
        <omgdi:waypoint x="275" y="160" />
        <omgdi:waypoint x="275" y="210" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_1m23zrt_di" bpmnElement="Flow_1m23zrt">
        <omgdi:waypoint x="275" y="290" />
        <omgdi:waypoint x="275" y="325" />
      </bpmndi:BPMNEdge>
    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
</definitions>

`
