import { useEffect, useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import { APP_BASE_URL } from '../../config/app.constant';
import { ISnackBarState } from '../../types/types';
import SnackBar from '../feedback/SnackBar';

interface EditModelProps {
  modelId: string;
  initialModelName: string;
  initialModelKey: string;
  initialDescription: string;
  isOpen: boolean;
  onClose: () => void;
}

const ModifyAppModal = ({ modelId, initialModelName, initialModelKey, initialDescription, isOpen, onClose }: EditModelProps) => {
  const [name, setModelName] = useState(initialModelName);
  const [key, setModelKey] = useState(initialModelKey);
  const [description, setDescription] = useState(initialDescription);

  const [snackBarState, setSnackBarState] = useState<ISnackBarState>({
    open: false,
    message: '',
    feedBackType: 'success',
  });

  const handleCloseSnackBar = () => {
    setSnackBarState((prev) => ({ ...prev, open: false }));
  };

  useEffect(() => {
    setModelName(name);
    setModelKey(key);
    setDescription(description);
  }, [name,key,description]);

  const handleSave = async () => {
    const payload = {
      name,
      key,
      description,
    };
    try {
      const response = await axios.put(
        `${APP_BASE_URL}configuration/modeler/rest/models/${modelId}`,
        payload
      );
      console.log('Response:', response.data);
      onClose();
      setSnackBarState({
        open: true,
        feedBackType: 'success',
        message: 'Application modified successfully!',
      });
    } catch (error) {
      setSnackBarState({
        open: true,
        feedBackType: 'error',
        message: 'Failed to modify application!',
      });
      console.error('Error saving model:', error);
    }
  };
  return (
    <>
      <Dialog open={isOpen} onClose={onClose}>
        <DialogTitle>Edit model details</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            label="Model name"
            fullWidth
            value={name}
            onChange={(e) => setModelName(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Model key"
            fullWidth
            value={key}
            onChange={(e) => setModelKey(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Description"
            fullWidth
            multiline
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="error">Cancel</Button>
          <Button onClick={handleSave} color="success">Save</Button>
        </DialogActions>
      </Dialog>
      <SnackBar
        open={snackBarState.open}
        message={snackBarState.message}
        feedBackType={snackBarState.feedBackType}
        handleClose={handleCloseSnackBar}
      />
    </>
  );
};

export default ModifyAppModal;
