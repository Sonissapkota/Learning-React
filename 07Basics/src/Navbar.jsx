import React from 'react'
import { memo } from 'react'

function Navbar ({userName}){
    console.log("Child component is rendered")
    return(
        <>
        <div>Hello this is {userName}</div>
        </>
    )
}

export default memo(Navbar)
