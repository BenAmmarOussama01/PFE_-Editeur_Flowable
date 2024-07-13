import { useRef, useState, useEffect } from 'react'
//import { useLocation } from 'react-router-dom'
import { CamundaPlatformModeler as DmnModeler } from 'camunda-dmn-js'
import 'camunda-dmn-js/dist/assets/camunda-platform-modeler.css'
import useFetchXml from '../../../hooks/useFetchXml'
import { useParams } from 'react-router-dom'
import Box from '@mui/material/Box'
import Tooltip from '@mui/material/Tooltip'
import Button from '@mui/material/Button'
import SnackBar from '../../feedback/SnackBar'
import SelectFormModal from '../../modals/SelectFormModal'
import ZoomInIcon from '@mui/icons-material/ZoomIn'
import ZoomOutIcon from '@mui/icons-material/ZoomOut'
import UndoIcon from '@mui/icons-material/Undo'
import RedoIcon from '@mui/icons-material/Redo'
import SaveIcon from '@mui/icons-material/Save'
import { ISnackBarState } from '../../../types/types'

const buttonStyle = {
  backgroundColor: 'white',
  color: 'black',
  border: '1px solid #bdbdbd',
  height: '30px',
  padding: '0 10px',
}

/*interface Props {
      diagramXml?: string
    }*/
const xml = `<definitions xmlns="https://www.omg.org/spec/DMN/20191111/MODEL/" xmlns:dmndi="https://www.omg.org/spec/DMN/20191111/DMNDI/" xmlns:dc="http://www.omg.org/spec/DMN/20180521/DC/" xmlns:di="http://www.omg.org/spec/DMN/20180521/DI/" id="definition_d9648e87-0959-11ef-bd68-16bcafdf159c" name="age-validation-decision" namespace="http://www.flowable.org/dmn" exporter="Flowable Open Source Modeler">
  <decision id="age_validation_decision" name="age-validation-decision">
    <description>age-validation-decision</description>
    <decisionTable id="decisionTable_cb380fc3-0df9-4de3-a7ab-f3960a21eb01" hitPolicy="FIRST">
      <input label="age_input">
        <inputExpression id="inputExpression_dcab8cce-92e9-4432-8f2f-6cf6f4becd36" typeRef="number">
          <text>age_input</text>
        </inputExpression>
      </input>
      <output id="outputExpression_cf7a20c5-d245-4ff8-9390-7db16e336fe4" label="age_output" name="age_output" typeRef="boolean"/>
      <rule>
        <inputEntry id="inputEntry_dcab8cce-92e9-4432-8f2f-6cf6f4becd36_1">
          <text><![CDATA[>= 18]]></text>
        </inputEntry>
        <outputEntry id="outputEntry_cf7a20c5-d245-4ff8-9390-7db16e336fe4_1">
          <text><![CDATA[true]]></text>
        </outputEntry>
      </rule>
      <rule>
        <inputEntry id="inputEntry_dcab8cce-92e9-4432-8f2f-6cf6f4becd36_2">
          <text><![CDATA[< 18]]></text>
        </inputEntry>
        <outputEntry id="outputEntry_cf7a20c5-d245-4ff8-9390-7db16e336fe4_2">
          <text><![CDATA[false]]></text>
        </outputEntry>
      </rule>
    </decisionTable>
  </decision>
  <dmndi:DMNDI/>
</definitions>`
const Dmn = () => {
  const bpmnRef = useRef<HTMLDivElement>(null)
  const propertiesPanelRef = useRef<HTMLDivElement>(null)
  const [modeler, setModeler] = useState<any>(null)
  let modelerInstance: any = null
  let { id } = useParams()
  const [snackBarOpen, setSnackBarOpen] = useState<ISnackBarState>({
    open: false,
    message: '',
    feedBackType: 'success',
  })
  const handleCloseSnackBar = () => {
    setSnackBarOpen((prev) => ({ ...prev, open: false }))
  }
  const handleSave = async () => {
    setTimeout(() => {
      setSnackBarOpen({
        open: true,
        feedBackType: 'success',
        message: 'decision table saved successfully!',
      })
    }, 1000)

    /*if (modeler) {
      modeler.saveXML({ format: true }).then(async (res: any) => {
        if (res.error) {
          console.error(res.error)
          return
        }
        const xmlflowable = replaceCamundaToFlowable(res.xml)
        if (details) {
          saveBpmnProcess(
            id!,
            xmlflowable,
            details?.lastUpdated,
            details?.name,
            details.key,
            details.description,
          )
            .then((res) => {
              setSnackBarOpen({
                open: true,
                feedBackType: 'success',
                message: 'Process saved successfully!',
              })
              setDetails((prev: any) => ({
                ...prev,
                lastUpdated: res.data.lastUpdated,
              }))
            })
            .catch((err) => {
              setSnackBarOpen({
                open: true,
                feedBackType: 'error',
                message: 'Fail to save Process!',
              })
            })
        }
      })
    }*/
  }

  //let { xml } = useFetchXml(id!)
  useEffect(() => {
    if (modelerInstance) return // Ensure we don't reinitialize if already set

    if (bpmnRef.current) {
      modelerInstance = new DmnModeler({
        container: bpmnRef.current,
        propertiesPanel: {
          parent: propertiesPanelRef.current,
        },
        common: {
          keyboard: {
            bindTo: document,
          },
        },
      })

      modelerInstance
        .importXML(xml)
        .then((err: any) => {
          if (err.warnings.length) {
            console.warn(err.warnings)
          }
          let x = modelerInstance.getViews()
          let y = x.find((view: any) => view.type == 'decisionTable')
          console.log('views :', modelerInstance.getViews())
          // modelerInstance.open(
          //   //if doesn't work remove this
          //   modelerInstance.getViews().find((view: any) => {
          //     view.type === 'decisionTable'
          //   }),
          // )
          // Ensure modelerInstance is ready before using get
          if (modelerInstance && typeof modelerInstance.get === 'function') {
            modelerInstance.get('canvas').zoom('fit-viewport')
          }
        })
        .catch((error: unknown) => {
          console.error('Error importing XML:', error)
        })
        .catch((err: any) => console.log(err))
    }

    setModeler(modelerInstance)
  }, [])
  const handleExport = () => {
    if (modeler) {
      modeler.saveXML({ format: true }).then((res: any) => {
        if (res.error) {
          console.error(res.error)
          return
        }
        console.log(res.xml)
        // const j2X = convert.json2xml(res.xml, { compact: true, spaces: 4 })
        // console.log('APDATE THE JSON TO XML', j2X)
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

  const handleUndo = () => {
    modeler.get('commandStack').undo()
  }

  const handleRedo = () => {
    modeler.get('commandStack').redo()
  }

  return (
    <>
      <Box
        sx={{
          height: 50,
          display: 'flex',
          gap: '50px',
          alignItems: 'center',
          borderBottom: '	#bdbdbd  1px solid',
        }}
      >
        <Box sx={{ display: 'flex', ml: '100px' }}>
          <Tooltip title="save process">
            <Button onClick={handleSave} style={buttonStyle}>
              <SaveIcon />
            </Button>
          </Tooltip>
        </Box>

        <Box sx={{ display: 'flex' }}>
          <Tooltip title="zoom in ">
            <Button onClick={handleZoomIn} style={buttonStyle}>
              <ZoomInIcon />
            </Button>
          </Tooltip>

          <Tooltip title="Reset zoom">
            <Button onClick={handleReset} style={buttonStyle}>
              100%
            </Button>
          </Tooltip>

          <Tooltip title="zoom out">
            <Button onClick={handleZoomOut} style={buttonStyle}>
              <ZoomOutIcon />
            </Button>
          </Tooltip>
        </Box>
        <Box sx={{ display: 'flex' }}>
          <Tooltip title="Undo">
            <Button onClick={handleUndo} style={buttonStyle}>
              <UndoIcon />
            </Button>
          </Tooltip>

          <Tooltip title="Redo">
            <Button onClick={handleRedo} style={buttonStyle}>
              <RedoIcon />
            </Button>
          </Tooltip>
        </Box>
      </Box>

      <div className="flex h-full w-full relative">
        <div ref={bpmnRef} className="w-full h-screen" />
        <div
          ref={propertiesPanelRef}
          style={{ width: '25rem', borderLeft: '1px #ccc solid' }}
        />
      </div>
      {snackBarOpen && (
        <SnackBar {...snackBarOpen} handleClose={handleCloseSnackBar} />
      )}
    </>
  )
}

export default Dmn
