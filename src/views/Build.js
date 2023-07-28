import React from 'react';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';

const INPUT_TYPES = [
    ['text', 'Text (one line)'],
    ['textarea', 'Text area'],
    ['dropdown', 'Dropdown'],
    ['radio', 'Radio'],
    ['checkbox', 'Checkbox'],
]

/**
 add new component
 edit inputs
 commit to local state

 option to remove
*/

export default function Build() {
    const [newComponent, setNewComponent] = React.useState('')
    const [form, setForm] = React.useState([])
    function handleChange(ev) {
        setNewComponent(ev.target.value)
    }
    function addComponent() {
        setForm([...form, newComponent])
        setNewComponent('')
    }
    return (
        <div>
            <h2>Build a form</h2>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Add field</InputLabel>
                <Select
                    value={newComponent}
                    label="Add Field"
                    onChange={handleChange}
                >
                    {INPUT_TYPES.map((elem) => (
                        <MenuItem key={elem[0]} value={elem[0]}>{elem[1]}</MenuItem>
                    ))}
                </Select>
            </FormControl>
            <Button onClick={addComponent}>Add component</Button>
            <div>
                {form.map((el, inx) => <p key={`${el}-${inx}`}>{el}</p>)}
            </div>
        </div>
    )
}