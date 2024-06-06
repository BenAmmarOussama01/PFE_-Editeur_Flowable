import { useRef, useState, useEffect } from 'react'
import BpmnModeler from 'camunda-bpmn-js/lib/camunda-platform/Modeler'
import 'camunda-bpmn-js/dist/assets/camunda-platform-modeler.css'
import { useParams } from 'react-router-dom'
import useFetchXml from '../../hooks/useFetchXml'
import Box from '@mui/material/Box'
import TokenSimulationModule from 'bpmn-js-token-simulation'

import ZoomInIcon from '@mui/icons-material/ZoomIn'
import ZoomOutIcon from '@mui/icons-material/ZoomOut'
import UndoIcon from '@mui/icons-material/Undo'
import RedoIcon from '@mui/icons-material/Redo'
import SaveIcon from '@mui/icons-material/Save'
import axios from 'axios'
import { APP_BASE_URL } from '../../config/app.constant'

const buttonStyle = {
  backgroundColor: 'white',
  color: 'black',
  border: '1px solid #bdbdbd',
  height: '30px',
  padding: '0 10px',
}

const Bp = () => {
  const bpmnRef = useRef<HTMLDivElement>(null)
  const propertiesPanelRef = useRef<HTMLDivElement>(null)
  const [modeler, setModeler] = useState<any>(null)

  let { id } = useParams()
  const { xml } = useFetchXml(id!)

  const handleExport = () => {
    if (modeler) {
      modeler.saveXML({ format: true }).then((res: any) => {
        console.log("reponce hamza", res.xml);

        axios.post(`${APP_BASE_URL}configuration/modeler/rest/converter/convert-to-json`, {
          value: res.xml,
        })
          .then(response => {
            console.log('Response ouss  :', response);

            const jsonXml = response.data;

            
            // Créer une instance FormData 
            const formData = new URLSearchParams();
            formData.append('modeltype', 'model');
            formData.append('json_xml', jsonXml);
            formData.append('name', 'modifyCardLimitsCSATicket');
            formData.append('key', 'MODIFY-CARD-LIMITS-REQUEST');
            formData.append('description', '');
            formData.append('newversion', 'false');
            formData.append('comment', '');
            let now = new Date();

            // Get the timestamp in seconds
            let timestampInSeconds = Math.floor(now.getTime() / 1000);
            formData.append('lastUpdated', `${timestampInSeconds}`);
            axios.post(`${APP_BASE_URL}configuration/modeler/rest/models/d60b52e8-1691-11ef-a536-eaf78a1c2578/editor/json`, formData)
              .then(finalResponse => {
                console.log('Final Response:', finalResponse);
              })
              .catch(error => {
                console.error('Error in final post:', error);
              });

          })
          .catch(error => {
            console.error('Error:', error);
          });

        if (res.error) {
          console.error(res.error);
          return;
        }
      });
    }
  };



  let modelerInstance: any = null



  useEffect(() => {
    if (modelerInstance) return
    if (xml) {
      console.log("result of useFetch", xml)
      // Append the hidden input to the DOM
      if (bpmnRef.current) {
        modelerInstance = new BpmnModeler({
          container: bpmnRef.current,
          propertiesPanel: {
            parent: propertiesPanelRef.current,
          },
          additionalModules: [TokenSimulationModule],
        })

        modelerInstance.importXML(xml).then((err: any) => {
          if (err.warnings.length) {
            console.warn(err.warnings)
          }
          modelerInstance.get('canvas').zoom('fit-viewport', 'auto')
        })

        setModeler(modelerInstance)
      }
    }
  }, [xml])

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

      { /* <button onClick={handleExport} className="fixed left-0  bottom-28 ">
        Save
      </button>*/}
    </>
  )
}

export default Bp


