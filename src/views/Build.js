import React from 'react';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Preview from '../components/build/Preview';

import { SELECTION_INPUTS, INPUT_TYPES } from '../utilities/constants.js'
import FormsContext from '../context/forms-context';
import { Typography } from '@mui/material';

export default function Build() {
  const [fieldState, setFieldState] = React.useState(null)
  const [currentForm, setCurrentForm] = React.useState([])

  const context = React.useContext(FormsContext)

  function _handleSelectChange({ target }) {
    setFieldState({
      name: target.value,
      label: '',
      required: false,
      ...(!!SELECTION_INPUTS.has(target.value) && { options: [{ label: '', value: '' }] })
    })
  }
  function _addComponent() {
    // if (fieldState.options && fieldState.options[fieldState.options.length - 1].label === '') {
    //   // const newOptions = fieldState.options

    //   setFieldState({
    //     ...fieldState,
    //     options: fieldState.options.slice(0, fieldState.options.length - 2)
    //   })
    // }


    setCurrentForm([...currentForm, fieldState])
    setFieldState(null)
  }
  function _saveForm() {
    context.setForms([...context.forms, currentForm])
    setCurrentForm([])
  }

  return (
    <div>
      <Typography variant='h3'>Build a form</Typography>
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
        {currentForm.map((el, inx) => <p key={`${el.name}-${inx}`}>{el.name} - "{el.label}"</p>)}
        {!!currentForm.length && (
          <Button onClick={_saveForm}>
            save form
          </Button>
        )}
      </div>
    </div>
  )
}