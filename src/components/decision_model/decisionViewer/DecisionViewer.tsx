import { useRef, useState, useEffect } from 'react'

import { CamundaPlatformModeler as DmnViewer } from 'camunda-dmn-js'
import 'camunda-dmn-js/dist/assets/camunda-platform-modeler.css'
import Box from '@mui/material/Box'
import { useParams } from 'react-router-dom'
import ViewerToolBar from '../../DiagramToolBar/ViewerToolBar'
import './decision.css'

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<definitions xmlns="https://www.omg.org/spec/DMN/20191111/MODEL/" xmlns:biodi="http://bpmn.io/schema/dmn/biodi/2.0" id="definitions_19ornvc" name="definitions" namespace="http://camunda.org/schema/1.0/dmn" exporter="dmn-js (https://demo.bpmn.io/dmn)" exporterVersion="16.4.0">
  <decision id="decision_05ewr6j" name="">
    <decisionTable id="decisionTable_0qr09d0">
      <input id="input1" label="season">
        <inputExpression id="inputExpression1" typeRef="string">
          <text></text>
        </inputExpression>
      </input>
      <output id="output1" label="dish" name="" typeRef="string" biodi:width="236" />
      <rule id="DecisionRule_1tluakt">
        <inputEntry id="UnaryTests_08pemkz">
          <text>"Fall"</text>
        </inputEntry>
        <outputEntry id="LiteralExpression_044qukc">
          <text>"Spareribs"</text>
        </outputEntry>
      </rule>
      <rule id="DecisionRule_198yn7p">
        <inputEntry id="UnaryTests_1rk7qmi">
          <text>"winter"</text>
        </inputEntry>
        <outputEntry id="LiteralExpression_0eycf5h">
          <text>"Roastbeef"</text>
        </outputEntry>
      </rule>
      <rule id="DecisionRule_0gm7w1x">
        <inputEntry id="UnaryTests_09mjoiw">
          <text>"spring"</text>
        </inputEntry>
        <outputEntry id="LiteralExpression_1hijl0d">
          <text>"Steak"</text>
        </outputEntry>
      </rule>
      <rule id="DecisionRule_1sheyvw">
        <inputEntry id="UnaryTests_03mjadb">
          <text>"summer"</text>
        </inputEntry>
        <outputEntry id="LiteralExpression_0btbe96">
          <text>"Ligh Sala and a nice Steak"</text>
        </outputEntry>
      </rule>
    </decisionTable>
  </decision>
</definitions>`

const DecisionViewer = () => {
  const dmnRef = useRef<HTMLDivElement>(null)
  let modelerInstance: any = null
  const [modeler, setModeler] = useState<any>(null)
  let { id } = useParams()

  useEffect(() => {
    if (modelerInstance) return
    if (xml) {
      if (dmnRef.current) {
        modelerInstance = new DmnViewer({
          container: dmnRef.current,
        })

        modelerInstance.importXML(xml).then((err: any) => {
          if (err.warnings.length) {
            console.warn(err.warnings)
          }
          const canvas = modelerInstance.get('canvas')

          const { inner } = canvas.viewbox()

          const center = {
            x: inner.x + inner.width / 2,
            y: inner.y + inner.height / 2,
          }

          canvas.zoom('fit-viewport', center)
        })

        setModeler(modelerInstance)
      }
    }
  }, [xml])

  return (
    <div>
      <Box
        sx={{
          height: '100%',
          width: '100%',
          position: 'relative',
          overflowX: 'hidden',
        }}
      >
        <ViewerToolBar id={id!} />

        <Box
          ref={dmnRef}
          sx={{ height: '80vh', width: '100%', ml: '300px', mt: '100px' }}
        />
      </Box>
    </div>
  )
}

export default DecisionViewer
