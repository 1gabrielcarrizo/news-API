import React from 'react'
import Typography from '@mui/material/Typography';
import useNoticias from '../hooks/useNoticias';
import { Grid } from '@mui/material';
import Noticia from './Noticia';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const ListadoNoticias = () => {

    const { noticias, totalNoticias, handleChangePagina, pagina } = useNoticias()

    const totalPaginas = Math.ceil(totalNoticias / 20) // usamos "ceil" para redondear hacia arriba

    return (
        <>
            <Typography textAlign={'center'} marginY={5} variant='h3' component={'h2'}>
                Ultimas noticias
            </Typography>
            <Grid container spacing={2}>
                {noticias.map((noticia) => (
                    <Noticia key={noticia.url} noticia={noticia} />
                ))}
            </Grid>
            {/* PAGINACION */}
            <Stack sx={{
                marginY: 5
            }}
                spacing={2}
                direction={"row"}
                justifyContent={"center"}
                alignItems={"center"}>
                <Pagination
                    count={totalPaginas} // calcula la cantidad de paginas
                    color="primary"
                    onChange={handleChangePagina}
                    page={pagina} />
            </Stack>
        </>
    )
}

export default ListadoNoticias