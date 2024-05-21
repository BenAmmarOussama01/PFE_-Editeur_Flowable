import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import FilePicker from '../modals/FilePicker';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Importer useNavigate
import { APP_BASE_URL } from '../../config/app.constant';
import { getModalDescription } from '../../config/modelType';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  boxShadow: 24,
  pb: 4,
  outline: 'none',
};

interface Props {
  open: boolean;
  handleClose: () => void;
  modelType: number;
}

const ImportModal = ({ open, handleClose, modelType }: Props) => {
  const [file, setFile] = useState<File | null>(null);
  const navigate = useNavigate(); // Initialiser useNavigate

  useEffect(() => {
    console.log(file);
  }, [file]);

  const handleImportFile = async () => {
    if (file) {
      try {
        const formData = new FormData();
        formData.append('file', file);

        const url = `${APP_BASE_URL}configuration/modeler/rest/import-process-model`;
        const headers = {
          'Content-Type': 'multipart/form-data',
        };

        const result = await axios.post(url, formData, { headers });

        // Extraction de l'ID du processus de la réponse
        const processId = result.data.id;
        console.log('Imported Process ID:', processId);

        // Redirection vers la page de processus avec l'ID
        navigate(`/blocks/modeler/processes/${processId}`);
        
      } catch (err) {
        console.error('An error occurred:', err);
        if (axios.isAxiosError(err)) {
          console.error('Response:', err.response);
          console.error('Data:', err.response?.data);
          console.error('Status:', err.response?.status);
          console.error('Headers:', err.response?.headers);
        }
      }
    } else {
      console.log('No file selected');
    }
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="w-full bg-slate-100 py-5 mb-6">
            <p className="text-2xl ml-10">
              Import {getModalDescription(modelType)}
            </p>
          </div>
          <FilePicker file={file} setFile={setFile} />

          <Box sx={{ float: 'right', mr: 6, mt: 4 }}>
            <Button
              variant="contained"
              type="submit"
              onClick={handleImportFile}
            >
              Save
            </Button>
          </Box>

          <CloseIcon
            color="disabled"
            sx={{ fontSize: 30 }}
            className="absolute top-6 right-3 hover:cursor-pointer"
            onClick={handleClose}
          />
        </Box>
      </Modal>
    </div>
  );
};

export default ImportModal;
