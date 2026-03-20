"use client"
import { useEffect } from "react"

function users() {
    useEffect(() => { 
        alert("users")
    } , [])
  return (
    <div>users</div>
  )
}

export default users