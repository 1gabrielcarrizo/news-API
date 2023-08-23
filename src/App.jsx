import React from 'react'
import { Container, Grid, Typography } from '@mui/material';
import Formulario from './components/Formulario';
import { NoticiasProvider } from './context/NoticiasProvider';
import ListadoNoticias from './components/ListadoNoticias';
import Footer from './components/Footer';

const App = () => {
  return (
    <NoticiasProvider>
      <Container>
        <header>
          <Typography align='center' marginY={5} component="h1" variant='h3'>
            Buscador de noticias
          </Typography>
        </header>
        <Grid container direction="row" justifyContent="center" alignItems="center">
          <Grid item xs={12} md={6}>
            <Formulario />
          </Grid>
        </Grid>
        <ListadoNoticias/>
      </Container>
      <Footer/>
    </NoticiasProvider>
  )
}

export default App