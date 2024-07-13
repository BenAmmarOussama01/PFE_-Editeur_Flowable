import { useRef, useState, useEffect } from 'react'
import BpmnModeler from 'camunda-bpmn-js/lib/camunda-platform/Modeler'
import 'camunda-bpmn-js/dist/assets/camunda-platform-modeler.css'
import './bpmn.css'
import { useParams } from 'react-router-dom'
import Box from '@mui/material/Box'
import { text_xml } from '../../diagram_editor/test_xml'

import ZoomInIcon from '@mui/icons-material/ZoomIn'
import ZoomOutIcon from '@mui/icons-material/ZoomOut'
import UndoIcon from '@mui/icons-material/Undo'
import RedoIcon from '@mui/icons-material/Redo'
import SaveIcon from '@mui/icons-material/Save'
import useFetchXml from '../../../hooks/useFetchXml'

const buttonStyle = {
  backgroundColor: 'white',
  color: 'black',
  border: '1px solid #bdbdbd',
  height: '30px',
  padding: '0 10px',
}

const BpTest = () => {
  const bpmnRef = useRef<HTMLDivElement>(null)
  const propertiesPanelRef = useRef<HTMLDivElement>(null)
  const [modeler, setModeler] = useState<any>(null)
  const escapeQuotes = (jsonString: string): string => {
    return jsonString
      .replace(/"/g, '\\"') // Remplace les guillemets doubles par \"
      .replace(/\$/g, '\\$') // Remplace les signes dollar par \$ (échappe le signe dollar)
      .replace(/'/g, "\\'") // Remplace les guillemets simples par \'
  }
  let modelerInstance: any = null

  let { id } = useParams()
  const { xml } = useFetchXml(id!)

  useEffect(() => {
    if (modelerInstance) return

    if (bpmnRef.current) {
      modelerInstance = new BpmnModeler({
        container: bpmnRef.current,
        propertiesPanel: {
          parent: propertiesPanelRef.current,
        },
      })

      modelerInstance.importXML(text_xml).then((err: any) => {
        if (err.warnings.length) {
          console.warn(err.warnings)
        }
        modelerInstance.get('canvas').zoom('fit-viewport', 'auto')
      })

      setModeler(modelerInstance)
    }
  }, [])

  const handleExport = () => {
    if (modeler) {
      modeler.saveXML({ format: true }).then((res: any) => {
        console.log(res.xml)
        if (res.error) {
          console.error(res.error)
          return
        }
        const escapedXml = escapeQuotes(res.xml)
        console.log(escapedXml)
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
          <button onClick={handleExport} style={buttonStyle}>
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

      <div className="flex h-full w-full relative">
        <div ref={bpmnRef} className="w-full h-screen" />
        <div
          ref={propertiesPanelRef}
          style={{ width: '25rem', borderLeft: '1px #ccc solid' }}
        />
      </div>

      <button onClick={handleExport} className="fixed left-0  bottom-28 ">
        Save
      </button>
    </>
  )
}

export default BpTest