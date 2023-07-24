import React from "react"
import './text.css'


const Text = ({value, color}) => {
    return(
        <>
            <p className="text" style={{textTransform: 'uppercase', color: color }}>{value}</p>
        </>
    )
}

export { Text }


