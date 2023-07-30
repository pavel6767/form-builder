import './App.css';
import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import Main from './views/Main';
import Build from './views/Build';
import Preview from './views/Preview';

import FormsContext from './context/forms-context';
import { Container, Grid, Paper, Typography } from '@mui/material';

const initialState = [
  { "name": "text", "label": "text one", "required": true },
  {
    "name": "radio", "label": "radio group1", "required": true, "options": [
      { "label": "one option", "value": "one-option" },
      { "label": "option 2", "value": "option-2" },
      { "label": "", "value": "" }]
  },
  {
    "name": "dropdown", "label": "dropdown menu group", "required": true, "options": [
      { "label": "one", "value": "one" },
      { "label": "two", "value": "two" },
      { "label": "threeeee", "value": "threeeee" },
      { "label": "", "value": "" }]
  },
  {
    "name": "checkbox", "label": "checkbox group ", "required": true, "options": [
      { "label": "one option", "value": "one-option" },
      { "label": "another otption", "value": "another-otption" },
      { "label": "some other thing", "value": "some-other-thing" },
      { "label": "", "value": "" }]
  },
  { "name": "textarea", "label": "big text area", "required": true }
]

function App() {
  const [forms, setForms] = React.useState([initialState])
  return (
    <BrowserRouter>
      <Container id='main'>
        <Paper variant='outlined'>
          <Typography variant='h2'>
            Form Builder
          </Typography>
          <Container maxWidth='xs'>
            <nav>
              <Grid
                container
                spacing={4}
                justifyContent="center"
                alignItems="flex-end"
              >
                <Grid item>
                  <Link to="/">Main</Link>
                </Grid>
                <Grid item>
                  <Link to="/build">Build</Link>
                </Grid>
                <Grid item>
                  <Link to="/preview">Preview</Link>
                </Grid>
              </Grid>
            </nav>
          </Container>
          {/* <Container> */}
          {/* <Paper variant='outlined'> */}
          <FormsContext.Provider value={{ forms, setForms }}>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="build" element={<Build />} />
              <Route path="preview" element={<Preview />} />
            </Routes>
          </FormsContext.Provider>
        </Paper>
        {/* </Container> */}
      </Container>
    </BrowserRouter>
  );
}

export default App;
