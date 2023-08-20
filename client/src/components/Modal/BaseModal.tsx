import {FC, ReactNode} from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useTheme } from '@mui/material';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: '80vw',
  bgcolor: 'background.paper',
  border: '1px solid #000',
  borderRadius: 1,
  boxShadow: 24,
  p: 4,
};

type BaseModalProps = {
    children: ReactNode;
    open: boolean;
    handleClose: () => void;
}

const BaseModal: FC<BaseModalProps> = ({children, open, handleClose}) => {
  const theme = useTheme()
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{...style, background: theme.palette.secondary.main}}>
          {children}
        </Box>
      </Modal>
    </div>
  );
}

export default BaseModal;