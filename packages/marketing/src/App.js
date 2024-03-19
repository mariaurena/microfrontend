import React from 'react'
import { Switch, Route, Router } from 'react-router-dom'
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles'

import Landing from './components/Landing'
import Pricing from './components/Pricing'

const generateClassName = createGenerateClassName({

    // para los estilos (css)
    // cambiamos el prefijo por defecto que material asigna a las classnames (jss) por ma
    // solo en marketing para que no colisione con los demás proyectos
    productionPrefix: 'ma', 
})

export default({ history }) => {
    return <div>
        <StylesProvider generateClassName={ generateClassName }>
            <Router history = { history }>
                <Switch>
                    <Route exact path="/pricing" component = { Pricing }></Route>
                    <Route path = "/" component = { Landing }></Route>
                </Switch>
            </Router>
        </StylesProvider>
    </div>
}