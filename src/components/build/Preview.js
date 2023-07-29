import React from 'react';

import FormControl from '@mui/material/FormControl';
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
  text: (
    <>
      <InputLabel>{fieldState.label}</InputLabel>
      <TextField label={fieldState.label} />
    </>),
  textarea: (
    <>
      <InputLabel>{fieldState.label}</InputLabel>
      <TextField label={fieldState.label} multiline />
    </>),
  dropdown: (
    <>
      <InputLabel>{fieldState.label}</InputLabel>
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
      <InputLabel>{fieldState.label}</InputLabel>
      <RadioGroup name={fieldState.label}>
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
      <InputLabel>{fieldState.label}</InputLabel>
      <FormGroup>
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
})

export default function Preview({ componentName, fieldState, setFieldState }) {
  function _updateState({ target }) {
    if (target.dataset.level) {
      const newOptions = [...fieldState.options]
      newOptions.pop()
      setFieldState({
        ...fieldState,
        options: [
          ...newOptions,
          {
            label: target.value,
            value: target.value.slice(0).replaceAll(' ', '-')
          }
        ]
      })
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
  }

  function _addOption() {
    setFieldState({
      ...fieldState,
      options: [
        ...fieldState.options,
        {
          label: '',
          value: ''
        }
      ]
    })
  }
  function _removeOption() {
    setFieldState({
      ...fieldState,
      options: fieldState.options.slice(0, fieldState.options.length - 1)
    })
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
            label="Make this field required?"
          />
          {!!fieldState.options && (
            <>
              <p>add an option</p>
              <TextField
                inputProps={{ 'data-level': 1 }}
                label={`Option No.${fieldState.options.length}`}
                value={fieldState.options[fieldState.options.length - 1].label}
                onChange={_updateState}
              />
              <Button
                onClick={_addOption}
                disabled={!fieldState.options[fieldState.options.length - 1].label}
              >
                add option
              </Button>
              <Button
                onClick={_removeOption}
                disabled={fieldState.options.length === 1}
              >
                remove option
              </Button>
            </>
          )}
        </Grid>
        <Grid item>
          <FormControl required={fieldState.required}>
            {selectComponent(fieldState)[componentName]}
          </FormControl>
        </Grid>
      </Grid>
    </div>
  );
}