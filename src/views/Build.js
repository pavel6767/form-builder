import React from 'react';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Preview from '../components/build/Preview';

import { SELECTION_INPUTS, INPUT_TYPES } from '../utilities/constants.js'

const NEW_FIELD_BASE_STATE = {
    label: '',
}

/**
add new component
edit inputs
commit to local state

option to remove
*/

export default function Build() {
    const [newField, setNewField] = React.useState({
        ...NEW_FIELD_BASE_STATE,
        name: 'text'
    })
    const [fieldState, setFieldState] = React.useState({
        label: '',
        required: false,
    })
    const [form, setForm] = React.useState([])

    function _handleSelectChange({ target }) {
        setNewField({
            ...NEW_FIELD_BASE_STATE,
            name: target.value
        })
        setFieldState({
            label: '',
            required: false,
            ...(!!SELECTION_INPUTS.has(target.value) && { options: [{ label: '', value: '' }] })
        })
    }
    function _addComponent() {
        setForm([...form, newField])
        setNewField(null)
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
                    value={newField?.name || ''}
                    label="Add Field"
                    onChange={_handleSelectChange}
                >
                    {INPUT_TYPES.map((elem) => (
                        <MenuItem key={elem[0]} value={elem[0]}>{elem[1]}</MenuItem>
                    ))}
                </Select>
            </FormControl>

            {newField && <div>
                <p>Select options for the <b>{newField.name}</b></p>
                <Preview
                    {...{
                        componentName: newField.name,
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