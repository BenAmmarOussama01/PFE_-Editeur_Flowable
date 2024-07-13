import { useRef, useState, useEffect } from 'react'
import BpmnModeler from 'camunda-bpmn-js/lib/camunda-platform/Modeler'
import 'camunda-bpmn-js/dist/assets/camunda-platform-modeler.css'
import { useParams } from 'react-router-dom'
import useFetchXml from '../../hooks/useFetchXml'
import Box from '@mui/material/Box'

import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'

import ZoomInIcon from '@mui/icons-material/ZoomIn'
import ZoomOutIcon from '@mui/icons-material/ZoomOut'
import UndoIcon from '@mui/icons-material/Undo'
import RedoIcon from '@mui/icons-material/Redo'
import SaveIcon from '@mui/icons-material/Save'
import CircularProgress from '@mui/material/CircularProgress'

import { DEFAULT_BPMN_XML } from '../decision_model/diagram_editor/default_xml'
import { text_xml } from './test_xml'

import {
  replaceCamundaToFlowable,
  replaceFlowableToCamunda,
} from '../../config/utils/camundaToFlowable'
import { saveBpmnProcess } from '../../config/utils/saveBpmnProcess'
import useFetchProcessDetails from '../../hooks/useFetchDetails'
import SnackBar from '../feedback/SnackBar'
import { ISnackBarState } from '../../types/types'
import Button from '@mui/material/Button'
import { Tooltip } from '@mui/material'
import SelectFormModal from '../modals/SelectFormModal'
import './bpmn.css'
import axios from 'axios'
import ErrorModal from './ErrorModal'
import SelectDmnModal from '../modals/SelectDmnModal'

const buttonStyle = {
  backgroundColor: 'white',
  color: 'black',
  border: '1px solid #bdbdbd',
  height: '30px',
  padding: '0 10px',
}

const Bp = () => {
  let modelerInstance: any = null
  const bpmnRef = useRef<any>(null)
  const propertiesPanelRef = useRef<any>(null)
  const [modeler, setModeler] = useState<any>(null)

  const [togglePropertiesPanel, setTogglePropertiesPanel] =
    useState<boolean>(true)

  const [snackBarOpen, setSnackBarOpen] = useState<ISnackBarState>({
    open: false,
    message: '',
    feedBackType: 'success',
  })

  const [isFormModalOpen, setFormModalOpen] = useState(false)
  const [isDmnModalOpen, setDmnModalOpen] = useState(false)

  const [errorModalOpen, setErrorModalOpen] = useState(false)
  const [errorsList, setErrorsList] = useState<any[]>([])

  const [selectedForm, setSelectedForm] = useState<string | null>(null)
  const [selectedDmn, setSelectedDmn] = useState<string | null>(null)
  const [lastElement, setLastElement] = useState<any | null>(null)
  const [lastDMNElement, setLastDMNElement] = useState<any | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  let { id } = useParams()
  const { details, setDetails } = useFetchProcessDetails(id!)
  const { xml } = useFetchXml(id!)

  useEffect(() => {
    const setInputFieldValue = () => {
      const inputField = document.getElementById(
        'bio-properties-panel-formRef',
      ) as HTMLInputElement | null

      const dmnRef = document.getElementById(
        'bio-properties-panel-decisionRef',
      ) as HTMLInputElement | null

      const selectElement = document.getElementById(
        'bio-properties-panel-formType',
      ) as HTMLSelectElement | null

      const selectDMN = document.getElementById(
        'bio-properties-panel-implementationType',
      ) as HTMLSelectElement | null

      const formBinding = document.getElementById(
        'bio-properties-panel-formRefBinding',
      ) as HTMLSelectElement | null

      const labelFormBinding = document.querySelector(
        'label[for="bio-properties-panel-formRefBinding"]',
      ) as HTMLElement | null

      if (formBinding) {
        formBinding.style.display = 'none'
      }
      if (labelFormBinding) {
        labelFormBinding.style.display = 'none'
      }

      // form input field
      if (inputField && !inputField.hasAttribute('data-listener-added')) {
        //inputField.value = 'test form' // Use the value property instead of setAttribute
        inputField.readOnly = true
        inputField.addEventListener('click', () => setFormModalOpen(true))
        inputField.setAttribute('data-listener-added', 'true')
      }

      if (dmnRef && !dmnRef.hasAttribute('data-listener-added')) {
        dmnRef.readOnly = true
        dmnRef.addEventListener('click', () => setDmnModalOpen(true))
        dmnRef.setAttribute('data-listener-added', 'true')
      }

      //select forms
      if (selectElement) {
        let options = selectElement.options
        for (let i = 0; i < options.length; i++) {
          if (options[i].value === 'formRef') {
            selectElement.options[i].innerText = 'Form Reference'
          }
          if (
            options[i].value === 'formData' ||
            options[i].value === 'formKey'
          ) {
            selectElement.remove(i)
          }
        }
      }

      //select dmn
      // console.log('dmn select :', selectDMN)
      // console.log('form select :', selectElement)
      if (selectDMN) {
        let options = selectDMN.options
        const toDelete = [
          'external',
          'class',
          'expression',
          'delegateExpression',
          'connector',
        ]

        let containsDMN = Array.from(options).some(
          (option) => option.value === 'dmn',
        )
        if (containsDMN) {
          for (let i = 0; i < options.length; i++) {
            if (toDelete.includes(options[i].value)) {
              selectDMN.remove(i)
            }
          }
        }
      }
    }

    const observer = new MutationObserver((mutations) => {
      //  console.log('Observer callback executed')
      mutations.forEach((mutation) => {
        //console.log('Mutation observed:', mutation)
        if (mutation.type === 'childList') {
          setTimeout(setInputFieldValue, 100) // Delay setting the value to ensure it persists
        }
      })
    })

    observer.observe(document.body, { childList: true, subtree: true })

    if (!modelerInstance && bpmnRef.current) {
      modelerInstance = new BpmnModeler({
        container: bpmnRef.current,
        propertiesPanel: {
          parent: propertiesPanelRef.current,
        },
      })
      bpmnRef.current = modelerInstance
      const camunda = replaceFlowableToCamunda(text_xml)
      modelerInstance.importXML(text_xml).then((err: any) => {
        if (err?.warnings?.length) {
          console.warn(err.warnings)
        }
        modelerInstance.get('canvas').zoom('fit-viewport', 'auto')
      })
      setModeler(modelerInstance)

      const eventBus = modelerInstance.get('eventBus')

      const handleElementChanged = (event: any) => {
        const element = event.element
        console.log(element)
        if (element.type === 'bpmn:UserTask') {
          console.log('e : ', element)
          const businessObject = element.businessObject
          const camundaFormKey = businessObject.formRef
          setLastElement(element.businessObject)
          // //element.businessObject.formRef = 'testing ref'
          // console.log('user task')
          // console.log(businessObject)
          // console.log(element.businessObject.formRef)
          // const inputField = document.getElementById(
          //   'bio-properties-panel-formRef',
          // )

          /*if (inputField) {
            inputField.addEventListener('click', () => setFormModalOpen(true))
          }*/
        }
        if (element.type == 'bpmn:BusinessRuleTask') {
          console.log('e : ', element.businessObject.decisionRef)
          const businessObject = element.businessObject
          setLastDMNElement(element.businessObject)
        }
      }

      const handleElementClick = (event: any) => {
        const element = event.element
        console.log('element:', element)
        if (element.type === 'bpmn:UserTask') {
          setLastElement(element.businessObject)
        }
        if (element.type === 'bpmn:BusinessRuleTask') {
          setLastDMNElement(element.businessObject)
        }
      }
      eventBus.on('element.click', handleElementClick)

      eventBus.on('element.changed', handleElementChanged)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const inputField = document.getElementById(
      'bio-properties-panel-formRef',
    ) as HTMLInputElement | null
    console.log('form : ', selectedForm)

    if (inputField && selectedForm) {
      console.log('element clicked : ', lastElement)
      lastElement.formRef = selectedForm
      inputField.value = selectedForm
      console.log('element value  :', lastElement)
    }
  }, [selectedForm])

  useEffect(() => {
    const inputField = document.getElementById(
      'bio-properties-panel-decisionRef',
    ) as HTMLInputElement | null
    console.log('dmn : ', selectedDmn)

    if (inputField && selectedDmn) {
      console.log('element clicked : ', lastDMNElement)
      lastDMNElement.decisionRef = selectedDmn
      inputField.value = selectedDmn
      console.log('element value  :', lastDMNElement)
    }
  }, [selectedDmn])

  const handleCloseSnackBar = () => {
    setSnackBarOpen((prev) => ({ ...prev, open: false }))
  }

  const downloadImage = (dataURL: string) => {
    const a = document.createElement('a')
    a.href = dataURL
    a.download = 'image.svg'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  }

  const convertSvgToPng = (
    svgElement: Element,
    callback: (dataUrl: string) => void,
  ) => {
    const svgString = new XMLSerializer().serializeToString(svgElement)
    const canvas = document.createElement('canvas')
    const context = canvas.getContext('2d')
    const svg = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' })
    const url = URL.createObjectURL(svg)
    const image = new Image()
    image.onload = () => {
      // Adjust canvas size to match the SVG element
      canvas.width = svgElement.clientWidth
      canvas.height = svgElement.clientHeight
      context?.drawImage(image, 0, 0, canvas.width, canvas.height)
      URL.revokeObjectURL(url)
      const dataUrl = canvas.toDataURL('image/png')
      callback(dataUrl)
    }
    image.src = url
  }

  const captureFormAsImage = async () => {
    const { svg } = await modeler.saveSVG()

    var svgBlob = new Blob([svg], {
      type: 'image/svg+xml',
    })
    console.log(JSON.stringify(svgBlob))

    const randomNumber = Math.floor(Math.random() * 37)
    var fileName = randomNumber.toString().substring(7) + '.svg'

    var downloadLink = document.createElement('a')
    downloadLink.download = fileName
    downloadLink.href = window.URL.createObjectURL(svgBlob)
    downloadLink.onclick = function (event) {
      document.body.removeChild(event.target as Node)
    }
    downloadLink.style.visibility = 'hidden'
    document.body.appendChild(downloadLink)
    downloadLink.click()
  }

  const handleExport = () => {
    if (modeler) {
      modeler.saveXML({ format: true }).then((res: any) => {
        if (res.error) {
          console.error(res.error)
          return
        }

        // Convert to data URL
        console.log(res.xml)
        const svgElement = window.document.querySelector(
          '[data-element-id="Collaboration"]',
        )

        if (svgElement) {
          convertSvgToPng(svgElement, (dataUrl) => {
            // Create a download link
            const downloadLink = document.createElement('a')
            downloadLink.href = dataUrl
            downloadLink.download = 'bpmn-diagram.png'
            document.body.appendChild(downloadLink)
            downloadLink.click()
            document.body.removeChild(downloadLink)
          })
        }
      })
    }
  }

  const getXml = async () => {
    let x = modeler.get('eventBus')

    if (modeler) {
      modeler.saveXML({ format: true }).then((res: any) => {
        if (res.error) {
          console.error(res.error)
          return
        }

        // Convert to data URL
        console.log(res.xml)
      })
    }
  }

  const saveProcess = async () => {
    const details = {
      lastUpdated: 123,
      name: 'test',
      key: 'test',
      description: 'test',
    }
    if (!modeler) {
      modeler.saveXML({ format: true }).then(async (res: any) => {
        if (res.error) {
          console.error(res.error)
          return
        }
        const xmlflowable = replaceCamundaToFlowable(res.xml)

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
      })
    }

    setTimeout(() => {
      setSnackBarOpen({
        open: true,
        feedBackType: 'success',
        message: 'Process saved successfully!',
      })
    }, 1000)
  }

  const handleSave = async () => {
    setIsLoading(true)
    console.log('save clicked')
    if (modeler) {
      modeler.saveXML({ format: true }).then(async (res: any) => {
        if (res.error) {
          console.error(res.error)
          return
        }
        //const xmlflowable = replaceCamundaToFlowable(res.xml)
        //if (details) {
        axios
          .post('http://127.0.0.1:5000/check_bpmn', {
            bpmn_xml: res.xml,
          })
          .then(async (res) => {
            console.log(res.data)
            if (res.data.status === 'issues found') {
              setErrorModalOpen(true)
              setErrorsList(res.data.issues)
            } else {
              await saveProcess()

              axios
                .get('http://127.0.0.1:5000/')
                .then((res) => console.log(res))
                .catch((err) => console.log(err))
            }
          })
          .catch((err) => console.log(err))

        //}
      })
    }
    setIsLoading(false)
  }

  const detachPanel = () => {
    if (modeler && propertiesPanelRef.current) {
      const propertiesPanel = modeler.get('propertiesPanel')
      if (togglePropertiesPanel) {
        setTogglePropertiesPanel(false)
        propertiesPanel.detach()
        propertiesPanelRef.current.style.display = 'none'
      } else {
        setTogglePropertiesPanel(true)
        propertiesPanel.attachTo(propertiesPanelRef.current)
        propertiesPanelRef.current.style.display = 'block'
      }
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
            <Button
              onClick={handleSave}
              style={buttonStyle}
              //disabled={isLoading}
            >
              {isLoading ? <CircularProgress size={20} /> : <SaveIcon />}
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

        <Box sx={{ display: 'flex' }}>
          <Tooltip title="toggle properties panel">
            <Button onClick={detachPanel} style={buttonStyle}>
              {togglePropertiesPanel ? (
                <VisibilityOffIcon />
              ) : (
                <VisibilityIcon />
              )}
            </Button>
          </Tooltip>
        </Box>
        <button onClick={captureFormAsImage}>test</button>
        <button onClick={getXml}>xml</button>
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

      {isFormModalOpen && (
        <SelectFormModal
          open={isFormModalOpen}
          handleClose={() => setFormModalOpen(false)}
          setSelectedForm={setSelectedForm}
        />
      )}
      {errorModalOpen && (
        <ErrorModal
          open={errorModalOpen}
          handleClose={() => setErrorModalOpen(false)}
          errors={errorsList}
          saveProcess={saveProcess}
        />
      )}
      {isDmnModalOpen && (
        <SelectDmnModal
          open={isDmnModalOpen}
          handleClose={() => setDmnModalOpen(false)}
          setSelectedDmn={setSelectedDmn}
        />
      )}
    </>
  )
}

export default Bp
