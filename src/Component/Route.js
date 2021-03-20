import React, { useEffect, useState } from 'react'



const Route=({path,children})=>{

    const[currentPath,setCUrentPath]=useState(window.location.pathname)

    useEffect(()=>{
     const onLocationChange=()=>{
           setCUrentPath(window.location.pathname)
        }

        window.addEventListener('popststate',onLocationChange)

        return()=>{
            window.removeEventListener('popststate',onLocationChange)
        }
    },[])

    return currentPath===path?children:null
}

export default Route