import React from 'react';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Preview from '../components/build/Preview';

import { SELECTION_INPUTS, INPUT_TYPES } from '../utilities/constants.js'

export default function Build() {
  const [fieldState, setFieldState] = React.useState(null)
  const [form, setForm] = React.useState([])

  function _handleSelectChange({ target }) {
    setFieldState({
      name: target.value,
      label: '',
      required: false,
      ...(!!SELECTION_INPUTS.has(target.value) && { options: [{ label: '', value: '' }] })
    })
  }
  function _addComponent() {
    setForm([...form, fieldState])
  }
  function _saveForm() {
    // call to global store to save form
  }

  return (
    <div>
      <h2>Build a form</h2>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Add field</InputLabel>
        <Select
          value={fieldState?.name || ''}
          label="Add Field"
          onChange={_handleSelectChange}
        >
          {INPUT_TYPES.map((elem) => (
            <MenuItem key={elem[0]} value={elem[0]}>{elem[1]}</MenuItem>
          ))}
        </Select>
      </FormControl>

      {fieldState && <div>
        <p>Select options for the <b>{fieldState.name}</b></p>
        <Preview
          {...{
            fieldState,
            setFieldState
          }}
        />
        <Button onClick={_addComponent}>Add component</Button>
      </div>}

      <div>
        {form.map((el, inx) => <p key={`${el.name}-${inx}`}>{el.name}</p>)}
        {!!form.length && (
          <Button onClick={_saveForm}>
            save form
          </Button>
        )}
      </div>
    </div>
  )
}