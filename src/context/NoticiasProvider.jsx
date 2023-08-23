import axios from 'axios'
import React, { useState, createContext, useEffect } from 'react'

const NoticiasContext = createContext()

const NoticiasProvider = ({ children }) => {

    // cuando se cargue por primera vez la pagina, que traiga noticias de tipo "general"
    const [categoria, setCategoria] = useState('general')
    const [noticias, setNoticias] = useState([])

    useEffect(() => {
        const consultarAPI = async () => {
            try {
                // nos trae por defecto 20, para mostrar todo escribimos "pageSize=100", si lo eliminamos podemos escribir "page=2"
                const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&pageSize=100&apiKey=${import.meta.env.VITE_API_KEY}`
                const { data } = await axios(url)
                setNoticias(data.articles)
            } catch (error) {
                console.error(error)
            }
        }
        consultarAPI()
    }, [categoria])


    const handleChangeCategoria = (e) => {
        setCategoria(e.target.value)
    }

    return (
        <NoticiasContext.Provider
            value={{
                categoria,
                handleChangeCategoria,
                noticias
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