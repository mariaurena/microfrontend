import { mount } from 'dashboard/DashboardApp'
import React, { useRef, useEffect } from "react"

export default () => {

    const ref     = useRef( null )

    // sólo se hará la primera vez que se renderice
    useEffect( () => {
        
        mount(ref.current)
        
    }, [])

    return <div ref={ ref }/>
}