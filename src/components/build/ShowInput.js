import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { FormLabel } from '@mui/material';

const ShowInput = (fieldState) => {
  const input = {
    text: (
      <TextField
        label={fieldState.label}
        required={fieldState.required}
      />),
    textarea: (
      <TextField
        label={fieldState.label}
        required={fieldState.required}
        multiline
      />),
    dropdown: (
      <>
        <FormLabel>{fieldState.label}</FormLabel>
        <Select label={fieldState.label}>
          {fieldState.options?.map((elem, inx) => (
            <MenuItem
              key={`${elem.label}-${inx}`}
              value={elem.label}
            >
              {elem.label}
            </MenuItem>
          ))}
        </Select>
      </>),
    radio: (
      <>
        <FormLabel>{fieldState.label}</FormLabel>
        <RadioGroup required={fieldState.required}>
          {fieldState.options?.map((elem, inx) => (
            <FormControlLabel
              control={<Radio />}
              key={`${elem.label}-${inx}`}
              label={elem.label}
              value={elem.value}
            />
          ))}
        </RadioGroup>
      </>),
    checkbox: (
      <>
        <FormLabel>{fieldState.label}</FormLabel>
        <FormGroup required={fieldState.required}>
          {fieldState.options?.map((elem, inx) => (
            <FormControlLabel
              control={<Checkbox />}
              key={`${elem.label}-${inx}`}
              label={elem.label}
              value={elem.value}
            />
          ))}
        </FormGroup>
      </>),
  }

  return (
    <FormControl required={fieldState.required}>
      {input[fieldState.name]}
    </FormControl>
  )
}

export default ShowInput