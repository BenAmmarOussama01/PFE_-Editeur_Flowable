import { FormBuilder, Form } from '@formio/react'
import { Button, Paper, TextField, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import 'formiojs/dist/formio.full.css'
import { useEffect, useRef, useState } from 'react'
import html2canvas from 'html2canvas'
import axiosInstance from '../../../setup/axiosConfig'
import { useParams } from 'react-router-dom'
import useFetchForm from '../../../hooks/useFetchForm'
import useFetchThumbnail from '../../../hooks/useFetchThumbnail'
import { ISnackBarState } from '../../../types/types'
import SnackBar from '../../feedback/SnackBar'
import { OpenAIClient, AzureKeyCredential } from '@azure/openai'

import CloseIcon from '@mui/icons-material/Close'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import AiIcon from './AiIcon'
import CircularProgress from '@mui/material/CircularProgress'
const azureApiKey = '338cd7c1022e471689ac97cdf68ed4a1'
const endpoint = 'https://pfeformgenerator.openai.azure.com/'

function Fm() {
  const formRef = useRef(null)
  const [formSchema, setFormSchema] = useState({})
  const [generateWithAiOpen, setGenerateWithAiOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formInput, setFormInput] = useState('')
  const [snackBarOpen, setSnackBarOpen] = useState<ISnackBarState>({
    open: false,
    message: '',
    feedBackType: 'success',
  })
  let { id } = useParams()
  const { formDetails } = useFetchForm(id!)
  const { imageSrc } = useFetchThumbnail(id!)

  const handleChange = (schema: any) => {
    setFormSchema(schema)
    console.log('Updated form schema:', JSON.stringify(schema))
  }

  const testFn = (data: string) => {
    let jsonStartIndex = data.indexOf('[')
    let jsonEndIndex = data.lastIndexOf(']')
    let jsonString = data.substring(jsonStartIndex, jsonEndIndex + 1)
    let lastData = `{"components":${jsonString}}`
    let x = JSON.parse(lastData)

    console.log(lastData)
    setFormSchema(x)
  }

  const generate = async () => {
    const client = new OpenAIClient(
      endpoint,
      new AzureKeyCredential(azureApiKey),
    )
    const deploymentName = 'pfe'

    const prompt = [
      `Based on these sets of description for form.io form builder , can you provide a form schema ? 
        description : ${formInput}
        only provide a  RFC8259 compliant JSON response  following this format without deviation:
        {
            "components": [ // array of components ]
          }
        `,
    ]
    try {
      const result = await client.getCompletions(deploymentName, prompt, {
        maxTokens: 515,
        temperature: 0.3,
      })
      setIsLoading(true)
      console.log(result)
      let data = result.choices[0].text
      testFn(data)
      setIsLoading(false)
      setSnackBarOpen({
        open: true,
        feedBackType: 'success',
        message: 'Form generated successfully!',
      })
    } catch (error) {
      setIsLoading(false)
      console.error('Error generating form schema:', error)
      setSnackBarOpen({
        open: true,
        feedBackType: 'error',
        message: 'Failed to generate Form!',
      })
    }
  }

  const captureFormAsImage = async () => {
    if (formRef.current) {
      const formDiv = window.document.querySelector(
        '[ref="form"]',
      ) as HTMLElement
      if (formDiv) {
        const canvas = await html2canvas(formDiv)
        const image = canvas.toDataURL('image/png')
        console.log(image)
        return image
      }
    }
  }

  const saveForm = async () => {
    const image = await captureFormAsImage()

    if (image) {
      axiosInstance
        .put(`configuration/modeler/rest/form-models/${id}`, {
          comment: '',
          newVersion: false,
          publish: false,
          formImageBase64: image,
          formRepresentation: {
            ...formDetails,
            formDefinition: JSON.stringify({
              specification: {
                display: 'form',
                name: formDetails?.name,
                key: formDetails?.key,
                ...formSchema,
              },
            }),
          },
        })
        .then((res) => {
          console.log('res save : ', res)
          ///debugger
          setSnackBarOpen({
            open: true,
            feedBackType: 'success',
            message: 'Form saved successfully!',
          })
        })

        .catch((err) => {
          console.log('err save : ', err)
          setSnackBarOpen({
            open: true,
            feedBackType: 'error',
            message: 'Fail to save Form!',
          })
        })
    }
  }

  const handleCloseSnackBar = () => {
    setSnackBarOpen((prev) => ({ ...prev, open: false }))
  }

  useEffect(() => {
    if (formDetails && formDetails.formDefinition) {
      if (JSON.parse(formDetails.formDefinition).specification) {
        let def = {
          components: JSON.parse(formDetails.formDefinition).specification
            .components,
        }
        console.log('test form : ', def)
        setFormSchema(def)
      }
    }
  }, [formDetails])

  return (
    <>
      <Box
        sx={{
          width: '90%',
          m: 'auto',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <Box sx={{ bgcolor: '#F5F5F5', p: 2, mt: 2 }} ref={formRef}>
          <FormBuilder form={formSchema} onChange={handleChange} />
        </Box>

        <Button
          variant="contained"
          sx={{ width: 100, height: 40, margin: 'auto', mt: 2 }}
          onClick={saveForm}
          //onClick={testFn}
        >
          Save
        </Button>
      </Box>
      {snackBarOpen && (
        <SnackBar {...snackBarOpen} handleClose={handleCloseSnackBar} />
      )}

      <Box sx={{ position: 'fixed', bottom: 100, right: 50 }}>
        {!generateWithAiOpen ? (
          <Button
            variant="contained"
            onClick={() => setGenerateWithAiOpen(true)}
            sx={{
              background:
                'linear-gradient(275.23deg, rgb(103, 109, 252) 18.88%, rgb(255, 106, 84) 94.85%) 0% 0% no-repeat padding-box padding-box transparent',
              borderRadius: '16px',
            }}
          >
            <AutoAwesomeIcon sx={{ pr: 1 }} fontSize="large" />
            Generate Form
          </Button>
        ) : (
          <Paper
            square
            sx={{
              width: '30rem',
              boxShadow: 3,
              borderRadius: '15px',
            }}
          >
            <Box sx={{ p: 2 }}>
              <CloseIcon
                sx={{
                  fontSize: 30,
                  position: 'absolute',
                  top: 10,
                  right: 10,
                  ':hover': { cursor: 'pointer' },
                }}
                onClick={() => setGenerateWithAiOpen(false)}
              />
              <Typography
                sx={{
                  color: 'gray',
                  fontWeight: 'bold',
                  fontSize: 20,
                }}
              >
                Generate Form with AI
              </Typography>
            </Box>

            <Box sx={{ width: '7rem', mx: 'auto' }}>
              <AiIcon />
            </Box>

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                p: 2,
                alignItems: 'center',
              }}
            >
              <TextField
                id="outlined-basic"
                label=""
                placeholder="Enter here your form description"
                variant="outlined"
                multiline
                rows={3}
                sx={{ width: '100%' }}
                value={formInput}
                onChange={(e) => setFormInput(e.target.value)}
              />
              <Button
                variant="contained"
                disabled={isLoading}
                sx={{
                  color: 'white !important',
                  width: '10rem',
                  height: '46px',
                  mt: 5,
                  background:
                    'linear-gradient(275.23deg, rgb(103, 109, 252) 18.88%, rgb(255, 106, 84) 94.85%) 0% 0% no-repeat padding-box padding-box transparent',
                }}
                onClick={() => {
                  generate()
                }}
              >
                {isLoading ? (
                  <CircularProgress sx={{ color: 'white' }} />
                ) : (
                  ' Generate Form'
                )}
              </Button>
            </Box>
          </Paper>
        )}
      </Box>
    </>
  )
}

export default Fm
