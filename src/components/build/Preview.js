import React from 'react';

import FormGroup from '@mui/material/FormGroup';
import InputLabel from '@mui/material/InputLabel';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Button } from '@mui/material';

const selectComponent = (fieldState) => ({
  text: <>
    <InputLabel>{fieldState.label}</InputLabel>
    <TextField label={fieldState.label} required={fieldState.required} />
  </>,
  textarea: <>
    <InputLabel>{fieldState.label}</InputLabel>
    <TextField label={fieldState.label} required={fieldState.required} multiline />
  </>,
  dropdown: <>
    <InputLabel>{fieldState.label}</InputLabel>
    <Select label={fieldState.label} required={fieldState.required}>
      {fieldState.options?.map((elem, inx) => (
        <MenuItem
          key={`${elem.label}-${inx}`}
          value={elem.label}
        >
          {elem.label}
        </MenuItem>
      ))}
    </Select>
  </>,
  radio: <>
    <InputLabel>{fieldState.label}</InputLabel>
    <RadioGroup
      name={fieldState.label}
      required={fieldState.required}
    >
      {fieldState.options?.map((elem, inx) => (
        <FormControlLabel
          control={<Radio />}
          key={`${elem.label}-${inx}`}
          label={elem.label} />
      ))}
    </RadioGroup>
  </>,
  checkbox: <>
    <InputLabel>{fieldState.label}</InputLabel>
    <FormGroup>
      {fieldState.options?.map((elem, inx) => (
        <FormControlLabel
          control={<Checkbox />}
          key={`${elem.label}-${inx}`}
          label={elem.label} />
      ))}

    </FormGroup>
    );
  </>,
})

export default function Preview({ componentName, fieldState, setFieldState }) {
  function _updateState({ target }) {
    if (target.dataset.level) {

    } else if (target.dataset.key === 'required') {

      setFieldState({
        ...fieldState,
        required: target.checked
      })
    } else {
      setFieldState({
        ...fieldState,
        [target.dataset.key]: target.value
      })
    }
    setTimeout(() => {
      console.log({
        key: target.dataset.key,
        value: target.value,
        checked: target.checked,
        required: fieldState.required
      })
    }, 200)
  }
  return (
    <div>
      <h2>Preview</h2>
      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="flex-end"
      >
        <Grid item>
          <TextField
            inputProps={{ 'data-key': 'label' }}
            label='set label'
            value={fieldState.label}
            onChange={_updateState}
          />
          <FormControlLabel
            control={<Checkbox
              checked={fieldState.required}
              inputProps={{ 'data-key': 'required' }}
              onChange={_updateState}
            />}
            label={`Required? ${fieldState.required}`}
          />
          {!!fieldState.options && (
            <>
              <p>add an option</p>
              <TextField
                inputProps={{ 'data-level': 1 }}
                label={`Option No.${fieldState.options.length - 1}`}
                value={fieldState.options[fieldState.options.length - 1].value}
                onChange={_updateState}
              />
              <Button>add option</Button>
            </>
          )}
        </Grid>
        <Grid item>
          {selectComponent(fieldState)[componentName]}
        </Grid>
      </Grid>
    </div>
  );
}