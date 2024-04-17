import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { Box, Grid } from '@mui/material';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide({ flag, handleClose, details }) {
  const [open, setOpen] = React.useState(false);
  const { capital, currency, name, description, flagimage, isocode, population } = details;

  React.useEffect(() => {
    setOpen(flag)
  }, [flag]);

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>  <h2 align="center">{name}</h2>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={6}> Population: {population} </Grid>
              <Grid item xs={6}>Currency:{currency} </Grid>
            </Grid>
          </Box>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {description}
          </DialogContentText>
          <img src={flagimage} alt={name} />
        </DialogContent>

      </Dialog>
    </div>
  );
}