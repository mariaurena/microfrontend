import { mount } from 'auth/AuthApp'
import React, { useRef, useEffect } from "react"
import { useHistory } from 'react-router-dom'

export default ({ onSignIn }) => {

    const ref     = useRef( null )
    const history = useHistory()

    // sólo se hará la primera vez que se renderice
    useEffect( () => {
        const { onParentNavigate } = mount(ref.current, {
            
            initialPath: history.location.pathname,
            // 'location' es proporcionado por listen para saber
            // a dónde debemos navegar
            onNavigate: ( location ) => {

                // console.log("The container noticed navigation in Marketing")
                // console.log( location )
                const { pathname: nextPathname } = location  // renombramos pathname por nextPathname
                // console.log( nextPathname )

                const { pathname } = history.location // pathname actual 

                // sólo actualizamos si es un nuevo pathname distinto al actual
                if ( pathname !== nextPathname ){
                    history.push( nextPathname )
                }

                history.push( nextPathname )  // actualizamos el path del Browser History del container

            },

            onSignIn: () => {
                onSignIn()
            }
        }) 

        // cada vez que hay un cambio en el history llamaremos a 'onParentNavigate'
        history.listen( onParentNavigate )
        
    }, []) // solo se ejecuta cuando el componente 'MarketingApp' se renderiza por primera vez

    return <div ref={ ref }/>
}