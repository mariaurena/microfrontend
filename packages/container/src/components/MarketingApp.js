import { mount } from 'marketing/MarketingApp'
import React, { useRef, useEffect } from "react"

export default () => {
    const ref = useRef(null)

    // sólo se hará la primera vez que se renderice
    useEffect( () => {
        mount(ref.current) // le pasamos a mount la referencia del archivo HTML
    })

    return <div ref={ ref }/>
}