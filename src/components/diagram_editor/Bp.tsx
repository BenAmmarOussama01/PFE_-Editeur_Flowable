import { useRef, useState, useEffect } from 'react'
import BpmnModeler from 'camunda-bpmn-js/lib/camunda-platform/Modeler'
import 'camunda-bpmn-js/dist/assets/camunda-platform-modeler.css'
import './bpmn.css'
import { useParams } from 'react-router-dom'
import useFetchXml from '../../hooks/useFetchXml'
import { DEFAULT_BPMN_XML } from './default_xml'
import Box from '@mui/material/Box'

import ZoomInIcon from '@mui/icons-material/ZoomIn'
import ZoomOutIcon from '@mui/icons-material/ZoomOut'
import UndoIcon from '@mui/icons-material/Undo'
import RedoIcon from '@mui/icons-material/Redo'
import SaveIcon from '@mui/icons-material/Save'
import {
  replaceCamundaToFlowable,
  replaceFlowableToCamunda,
} from '../../config/utils/camundaToFlowable'
import { saveBpmnProcess } from '../../config/utils/saveBpmnProcess'
import useFetchProcessDetails from '../../hooks/useFetchProcessDetails'
import SnackBar from '../feedback/SnackBar'
import { ISnackBarState } from '../../types/types'
const buttonStyle = {
  backgroundColor: 'white',
  color: 'black',
  border: '1px solid #bdbdbd',
  height: '30px',
  padding: '0 10px',
}

const Bp = () => {
  let modelerInstance: any = null
  const bpmnRef = useRef<HTMLDivElement>(null)
  const propertiesPanelRef = useRef<HTMLDivElement>(null)
  const [modeler, setModeler] = useState<any>(null)

  const [snackBarOpen, setSnackBarOpen] = useState<ISnackBarState>({
    open: false,
    message: '',
    feedBackType: 'success',
  })

  let { id } = useParams()
  const { details } = useFetchProcessDetails(id!)
  const { xml } = useFetchXml(id!)

  useEffect(() => {
    if (modelerInstance) return
    if (xml) {
      if (bpmnRef.current) {
        modelerInstance = new BpmnModeler({
          container: bpmnRef.current,
          propertiesPanel: {
            parent: propertiesPanelRef.current,
          },
        })
        const cxml = replaceFlowableToCamunda(xml)
        modelerInstance.importXML(cxml).then((err: any) => {
          if (err.warnings.length) {
            console.warn(err.warnings)
          }
          modelerInstance.get('canvas').zoom('fit-viewport', 'auto')
        })

        setModeler(modelerInstance)
      }
    }
  }, [xml])

  const handleCloseSnackBar = () => {
    setSnackBarOpen((prev) => ({ ...prev, open: false }))
  }

  const handleSave = async () => {
    if (modeler) {
      modeler.saveXML({ format: true }).then(async (res: any) => {
        if (res.error) {
          console.error(res.error)
          return
        }
        // console.log(res.xml)
        const xmlflowable = replaceCamundaToFlowable(res.xml)
        if (details) {
          console.log(details?.lastUpdated)
          saveBpmnProcess(id!, xmlflowable, details?.lastUpdated)
            .then((res) => {
              console.log('res save : ', res)
              ///debugger
              setSnackBarOpen({
                open: true,
                feedBackType: 'success',
                message: 'Process saved successfully!',
              })
            })

            .catch((err) => {
              console.log('err save : ', err)
              setSnackBarOpen({
                open: true,
                feedBackType: 'error',
                message: 'Fail to save Process!',
              })
            })
          console.log('res save : ', res)
        }
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
          <button onClick={handleSave} style={buttonStyle}>
            <SaveIcon />
          </button>
        </Box>
        <Box sx={{ display: 'flex' }}>
          <button onClick={handleZoomIn} style={buttonStyle}>
            <ZoomInIcon />
          </button>
          <button onClick={handleReset} style={buttonStyle}>
            100%
          </button>
          <button onClick={handleZoomOut} style={buttonStyle}>
            <ZoomOutIcon />
          </button>
        </Box>
        <Box sx={{ display: 'flex' }}>
          <button onClick={handleUndo} style={buttonStyle}>
            <UndoIcon />
          </button>

          <button onClick={handleRedo} style={buttonStyle}>
            <RedoIcon />
          </button>
        </Box>
      </Box>

      {/*   <Box
        sx={{
          display: 'flex',
          height: '100%',
          width: '100%',
          position: 'relative',
        }}
      >
        <Box ref={bpmnRef} sx={{ width: '100%' }} />
        <Box
          ref={propertiesPanelRef}
          sx={{ width: '25rem', borderLeft: '1px #ccc solid' }}
        />
      </Box> */}

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

export default Bp
