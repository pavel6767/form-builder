import React from 'react';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Preview from '../components/build/Preview';

const INPUT_TYPES = [
    ['checkbox', 'Checkbox'],
    ['dropdown', 'Dropdown'],
    ['radio', 'Radio'],
    ['text', 'Text (one line)'],
    ['textarea', 'Text area'],
]

const NEW_FIELD_BASE_STATE = {
    text: {
        label: '',

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

/**
add new component
edit inputs
commit to local state

option to remove
*/

export default function Build() {
    const [newField, setNewField] = React.useState(null)
    const [newState, setNewState] = React.useState('')
    const [form, setForm] = React.useState([])

    function _handleChange(ev) {
        setNewField({
            ...NEW_FIELD_BASE_STATE[ev.target.value],
            name: ev.target.value
        })
        setNewState('')
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
                    onChange={_handleChange}
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
                        newState,
                        setNewState
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