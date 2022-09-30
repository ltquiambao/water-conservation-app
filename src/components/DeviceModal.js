import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function DeviceModal({
  handleClose,
  open,
  deviceDetails: {
    deviceIcon,
    deviceName,
    deviceId,
    deviceLocation,
    isWaterFlowing,
    isWaterContam,
    phLevel,
  },
}) {
  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          <Stack direction="row" spacing={2} alignItems="center">
            {deviceIcon}
            {deviceName}
          </Stack>
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <TextField
            disabled
            fullWidth
            margin="normal"
            label="Device ID"
            id="device_id"
            value={deviceId}
          />
          <TextField
            disabled
            fullWidth
            margin="normal"
            label="Location"
            id="location"
            value={deviceLocation}
          />
          <TextField
            disabled
            fullWidth
            margin="normal"
            label="Is the water flowing?"
            id="isWaterFlowing"
            value={isWaterFlowing}
          />
          <TextField
            disabled
            fullWidth
            margin="normal"
            label="Is the water contaminated?"
            id="isWaterContam"
            value={isWaterContam}
          />
          <TextField
            disabled
            fullWidth
            margin="normal"
            label="ph Level?"
            id="phLevel"
            value={phLevel}
          />
          <Typography variant="caption" gutterBottom>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
            cursus magna, vel scelerisque nisl consectetur et.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Save changes
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
