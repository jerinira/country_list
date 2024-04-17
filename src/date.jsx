import * as React from 'react';

import Button from '@mui/material/Button';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

function ButtonField(props) {
  const {
    setOpen,
    label,
    id,
    disabled,
    InputProps: { ref } = {},
    inputProps: { 'aria-label': ariaLabel } = {},
  } = props;

  return (
    <Button
      variant="outlined"
      id={id}
      disabled={disabled}
      ref={ref}
      aria-label={ariaLabel}
      onClick={() => setOpen?.((prev) => !prev)}
    >
      {label ? `Current date: ${label}` : 'Pick a date'}
    </Button>
  );
}

function ButtonDatePicker(props) {
  const [open, setOpen] = React.useState(false);

  return (
    <DatePicker
      slots={{ field: ButtonField, ...props.slots }}
      slotProps={{ field: { setOpen } }}
      {...props}
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
    />
  );
}

export default function PickerWithButtonField() {
  const [value, setValue] = React.useState(null);
const handleDateChange=(newValue)=>{
console.log('date---',newValue )
}
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ButtonDatePicker
      variant="text"
        label={value == null ? null : value.format('MM/DD/YYYY')}
        value={value}
       // onChange={(newValue) => setValue(newValue)}
        onChange={(newValue) => handleDateChange(newValue)}
      />
    </LocalizationProvider>
  );
}