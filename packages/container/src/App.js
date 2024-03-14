import React from "react"
import { BrowserRouter } from 'react-router-dom'
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles'

import MarketingApp from "./components/MarketingApp"
import Header from "./components/Header"

const generateClassName = createGenerateClassName({

    // para los estilos (css)
    // cambiamos el prefijo por defecto que material asigna a los id (jss) por ma
    // solo en container para que no colisione con los demás proyectos
    productionPrefix: 'co', 
})

export default () => {
    return (
        <BrowserRouter>
            <StylesProvider generateClassName={ generateClassName }>
                <div>
                    <Header />
                    <MarketingApp />
                </div>
            </StylesProvider>
        </BrowserRouter>
    )
}