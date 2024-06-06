import { FormBuilder, Form } from '@formio/react'
import { Button } from '@mui/material'
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

function Fm() {
  const formRef = useRef(null)
  const [formSchema, setFormSchema] = useState({})
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
        >
          Save
        </Button>
      </Box>
      {snackBarOpen && (
        <SnackBar {...snackBarOpen} handleClose={handleCloseSnackBar} />
      )}
    </>
  )
}

export default Fm
