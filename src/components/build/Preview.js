import React from 'react';

import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Button } from '@mui/material';
import ShowInput from './ShowInput';



export default function Preview({ fieldState, setFieldState }) {
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
        spacing={12}
        justifyContent="center"
        alignItems="flex-start"
      >
        {/* className='display--flexCol' */}
        <Grid
          item
        >
          <Grid
            container
            direction="column"
            spacing={2}
            justifyContent="center"
            alignItems="flex-start"
          >
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
        </Grid>
        <Grid item>
          {ShowInput(fieldState)}
        </Grid>
      </Grid>
    </div>
  );
}