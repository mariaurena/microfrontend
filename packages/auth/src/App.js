import React from 'react'
import { Switch, Route, Router } from 'react-router-dom'
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles'

import Signin from './components/Signin'
import Signup from './components/Signup'

const generateClassName = createGenerateClassName({

    // para los estilos (css)
    // cambiamos el prefijo por defecto que material asigna a las classnames (jss) por au
    // solo en auth para que no colisione con los demás proyectos
    productionPrefix: 'au', 
})

export default({ history, onSignIn }) => {
    return <div>
        <StylesProvider generateClassName={ generateClassName }>
            <Router history = { history }>
                <Switch>
                    <Route path = "/auth/signin" >
                        <Signin onSignIn = { onSignIn } />
                    </Route>
                    <Route path = "/auth/signup" >
                        <Signup onSignIn = { onSignIn } />
                    </Route>                
                </Switch>
            </Router>
        </StylesProvider>
    </div>
}