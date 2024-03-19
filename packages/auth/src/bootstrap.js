import React from 'react'
import ReactDOM from 'react-dom'
import { createMemoryHistory, createBrowserHistory } from 'history'
import App from './App'

// Mount function to start up the app
const mount = (el, { onSignIn, onNavigate, defaultHistory, initialPath }) => {

    // defaultHistory --> si estamos en dev y ejecutando 'AuthApp' aisladamente
    const history =  defaultHistory || createMemoryHistory({
        initialEntries: [initialPath]
    })

    // cada vez que se pincha en algun lugar para navegar
    // listen proporciona 'location' para saber a dónde 
    // debemos navegar
    if ( onNavigate ){
        history.listen( onNavigate )
    }

    ReactDOM.render(<App onSignIn = { onSignIn } history = { history } />, el)

    return {
        onParentNavigate( location ) {

            // console.log("Container just navigated")
            const { pathname: nextPathname } = location

            const { pathname } = history.location // pathname actual 

            // sólo actualizamos si es un nuevo pathname distinto al actual
            if ( pathname !== nextPathname ){
                history.push( nextPathname )
            }
        }
    }
}

// If we are in development and in isolation,
// call mount inmediately
if (process.env.NODE_ENV === 'development') {

    const devRoot = document.querySelector('#_auth-dev-root')

    if( devRoot ){
        mount(devRoot, { defaultHistory: createBrowserHistory() })
    }
}


// We are running through container
// and we shoud export the mount function
export { mount }