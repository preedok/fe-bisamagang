import React from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    IconButton,
    Box,
    Typography,
    Button,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import bgImage from '../../assets/bgbatik.png'
const CustomDialog = ({
    open,
    onClose,
    title,
    children,
    actions,
    maxWidth = 'xl',
    fullWidth = false,
}) => {
    return (
        <Dialog
            open={open}
            onClose={onClose}
            maxWidth={maxWidth}
            fullWidth={fullWidth}
            PaperProps={{
                style: {
                    backgroundImage: `url(${bgImage})`, 
                    backgroundSize: 'cover',
                    backgroundPosition: 'center', 
                    backgroundRepeat: 'no-repeat',
                },
            }}
        >
            <DialogTitle>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Typography variant="h6">{title}</Typography>
                    <IconButton onClick={onClose} size="small">
                        <CloseIcon />
                    </IconButton>
                </Box>
            </DialogTitle>
            <DialogContent>
                {children}
            </DialogContent>
            <DialogActions>
                {actions ? (
                    actions.map((action, index) => (
                        <Button key={index} variant={action.variant} onClick={action.onClick}>
                            {action.label}
                        </Button>
                    ))
                ) : null}
            </DialogActions>
        </Dialog>
    );
};

export default CustomDialog;