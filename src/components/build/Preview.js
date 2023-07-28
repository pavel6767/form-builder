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


const NEW_FIELD_BASE_STATE = {
  text: {
    label: '',
    // required: false,
  },
  textarea: {
    label: '',

  },
  dropdown: {
    label: '',

  },
  radio: {
    label: '',

  },
  checkbox: {
    label: '',

  },
}

export default function Preview({ componentName, newState, setNewState }) {
  const selectComponent = {
    text: <>
      <InputLabel>{newState}</InputLabel>
      <TextField label={newState} />
    </>,
    textarea: <>
      <InputLabel>{newState}</InputLabel>
      <TextField label={newState} multiline />
    </>,
    dropdown: <>
      <InputLabel>{newState}</InputLabel>
      {/* value={newField?.name || ''} */}
      {/* onChange={setNewState} */}
      <Select
        label={newState}
      >
        <MenuItem value='ji'>hi</MenuItem>
        {/* {INPUT_TYPES.map((elem) => (
          <MenuItem key={elem[0]} value={elem[0]}>{elem[1]}</MenuItem>
        ))} */}
      </Select>
    </>,
    radio: <>
      <InputLabel>{newState}</InputLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
      </RadioGroup>
    </>,
    checkbox: <>
      <InputLabel>{newState}</InputLabel>
      <FormGroup>
        <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
        <FormControlLabel required control={<Checkbox />} label="Required" />
        <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
      </FormGroup>
      );
    </>,
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
          {/* for all attributes, show a text field */}
          <TextField label='set label' value={newState} onChange={(e) => setNewState(e.target.value)} />
        </Grid>
        <Grid item>
          {selectComponent[componentName]}
        </Grid>
      </Grid>
    </div>
  );
}