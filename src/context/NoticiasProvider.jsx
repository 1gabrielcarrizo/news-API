import axios from 'axios'
import React, { useState, createContext, useEffect } from 'react'

const NoticiasContext = createContext()

const NoticiasProvider = ({ children }) => {

    // cuando se cargue por primera vez la pagina, que traiga noticias de tipo "general"
    const [categoria, setCategoria] = useState('general')
    const [noticias, setNoticias] = useState([])
    const [pagina, setPagina] = useState(1)
    const [totalNoticias, setTotalNoticias] = useState(0)

    useEffect(() => {
        const consultarAPI = async () => {
            try {
                // nos trae por defecto 20, para mostrar todo escribimos "pageSize=100", si lo eliminamos podemos escribir "page=2"
                const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=${import.meta.env.VITE_API_KEY}`
                const { data } = await axios(url)
                setNoticias(data.articles)
                setTotalNoticias(data.totalResults) // noticias en total
                setPagina(1) // si se cambia de categoria, que regrese a la pagina 1
            } catch (error) {
                console.error(error)
            }
        }
        consultarAPI()
    }, [categoria])

    useEffect(() => {
        const consultarAPI = async () => {
            try {
                // este contiene "pagina"
                const url = `https://newsapi.org/v2/top-headlines?country=ar&page=${pagina}&category=${categoria}&apiKey=${import.meta.env.VITE_API_KEY}`
                const { data } = await axios(url)
                setNoticias(data.articles)
                setTotalNoticias(data.totalResults) // noticias en total
            } catch (error) {
                console.error(error)
            }
        }
        consultarAPI()
    }, [pagina])

    const handleChangeCategoria = (e) => {
        setCategoria(e.target.value)
    }

    const handleChangePagina = (e, valor) => {
        // usamos el "textContent" porque no tiene un value
        // console.log(e.target.textContent) // forma 1
        setPagina(valor) // forma 2, esta sirve para las flechas que tiene la paginacion
    }

    return (
        <NoticiasContext.Provider
            value={{
                categoria,
                handleChangeCategoria,
                noticias,
                totalNoticias,
                handleChangePagina,
                pagina
            }}
        >
            {children}
        </NoticiasContext.Provider>
    )
}

export {
    NoticiasProvider
}

export default NoticiasContext