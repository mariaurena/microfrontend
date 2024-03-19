// { lazy, Suspense } para cargar 'perezosamente' componentes en nuestra app
import React, { lazy, Suspense, useState } from "react"

import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles'

import Progress from "./components/Progress"
import Header from "./components/Header"

// se cargan SÓLO cuando los necesitamos
const MarketingLazy = lazy( () => import('./components/MarketingApp'))
const AuthLazy      = lazy( () => import('./components/AuthApp'))

const generateClassName = createGenerateClassName({

    // para los estilos (css)
    // cambiamos el prefijo por defecto que material asigna a las classnames (jss) por ma
    // solo en container para que no colisione con los demás proyectos
    productionPrefix: 'co', 
})

export default () => {

    const [isSignedIn, setIsSignedIn] = useState(false)

    return (
        <BrowserRouter>
            <StylesProvider generateClassName={ generateClassName }>
                <div>
                    <Header 
                        onSignOut = { () => setIsSignedIn(false) }
                        isSignedIn = { isSignedIn }/>
                    <Suspense fallback = { <Progress /> }>
                        <Switch>
                            <Route path = "/auth">
                                <AuthLazy onSignIn = { () => setIsSignedIn(true) } />
                            </Route>
                            <Route path = "/"     component = { MarketingLazy }/>
                        </Switch>
                    </Suspense>
                </div>
            </StylesProvider>
        </BrowserRouter>
    )
}