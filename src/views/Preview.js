import React from 'react';
import FormsContext from '../context/forms-context';
import ShowInput from '../components/build/ShowInput';
import { Button, Card, Container, Grid, Typography } from '@mui/material';

export default function Preview() {
  const context = React.useContext(FormsContext)
  function _handleSubmit(ev) {
    ev.preventDefault();
  }
  return (
    <div>
      <Typography variant='h3'>Preview a form</Typography>
      <Container>
        {context.forms.map((form, inx1) => (
          <Card key={`form-no-${inx1}`} variant='outlined'>
            <Typography variant='h3'>Form {inx1 + 1}</Typography>
            <form onSubmit={_handleSubmit}>
              <Grid
                container
                direction="column"
                spacing={2}
                alignItems="center"
              >
                {form.map((elem, inx2) => (
                  <Grid item key={`form ${inx1}-${inx2}`}>
                    {ShowInput(elem)}
                  </Grid>
                ))}
                <Button type='submit'>Submit</Button>
              </Grid>
            </form>
          </Card >
        ))
        }
      </Container >
    </div >
  )
}