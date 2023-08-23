import React from 'react'
import { FormControl, InputLabel, Select, MenuItem, Button, Box } from '@mui/material';
import useNoticias from '../hooks/useNoticias';

const categorias = [ // no se puede agregar mas categorias, esto es lo que soporta la API de material UI
    { value: 'general', label: 'General' },
    { value: 'business', label: 'Negocios' },
    { value: 'entertainment', label: 'Entretenimiento' },
    { value: 'health', label: 'Salud' },
    { value: 'science', label: 'Ciencia' },
    { value: 'sports', label: 'Deportes' },
    { value: 'technology', label: 'Tecnología' },
]

const Formulario = () => {

    const {categoria, handleChangeCategoria} = useNoticias()

    return (
        <form>
            <FormControl fullWidth>
                <InputLabel>Categoria</InputLabel>
                <Select label="categoria" onChange={handleChangeCategoria} value={categoria}>
                    {categorias.map((categoria) => (
                        <MenuItem
                            key={categoria.value} value={categoria.value}>
                            {categoria.label}
                        </MenuItem>
                    ))}
                </Select>
                <Box sx={{ marginTop: 2 }}>
                    <Button fullWidth variant='contained'>Buscar noticias</Button>
                </Box>
            </FormControl>
        </form>
    )
}

export default Formulario