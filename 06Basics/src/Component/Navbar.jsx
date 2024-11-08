import React from 'react'
import {memo} from 'react'

const Navbar = ({adjective, getAdjective}) =>{
    console.log("Component is rendered")
    return (
        <>
        <div>I am a {adjective} developer!</div>
        <button onClick={getAdjective}>Set adjective</button>
        </>
    );
}

export default memo(Navbar)