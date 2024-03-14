import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles'

import Landing from './components/Landing'
import Pricing from './components/Pricing'

const generateClassName = createGenerateClassName({

    // para los estilos (css)
    // cambiamos el prefijo por defecto que material asigna a los id (jss) por ma
    // solo en marketing para que no colisione con los demás proyectos
    productionPrefix: 'ma', 
})

export default() => {
    return <div>
        <StylesProvider generateClassName={ generateClassName }>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/pricing" component = { Pricing }></Route>
                    <Route path = "/" component = { Landing }></Route>
                </Switch>
            </BrowserRouter>
        </StylesProvider>
    </div>
}