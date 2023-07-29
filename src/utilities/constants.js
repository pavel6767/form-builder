export const CONSTANTS = {
  CHECKBOX: 'checkbox',
  DROPDOWN: 'dropdown',
  RADIO: 'radio',
  TEXT: 'text',
  TEXTAREA: 'textarea',
}

export const INPUT_TYPES = [
  [CONSTANTS.CHECKBOX, 'Checkbox'],
  [CONSTANTS.DROPDOWN, 'Dropdown'],
  [CONSTANTS.RADIO, 'Radio'],
  [CONSTANTS.TEXT, 'Text (one line)'],
  [CONSTANTS.TEXTAREA, 'Text area'],
]
export const SELECTION_INPUTS = new Set([CONSTANTS.DROPDOWN, CONSTANTS.RADIO, CONSTANTS.CHECKBOX])


