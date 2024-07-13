import ViewerToolBar from '../../DiagramToolBar/ViewerToolBar'
import { useParams } from 'react-router-dom'
import { useRef, useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import { Form } from '@formio/react'
import formSchema from './form.json'
const schema = ``

const FormViewer = () => {
  let { id } = useParams()

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
          sx={{
            height: '80vh',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            mt: '50px',
          }}
        >
          <Box sx={{ width: '50%' }}>
            <Form form={formSchema} />
          </Box>
        </Box>
      </Box>
    </div>
  )
}

export default FormViewer
