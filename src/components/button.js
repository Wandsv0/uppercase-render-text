import React from 'react'
import './button.css'


const Button = ({label}) => {
    return(
        <>
            <button className='button' onClick={ () => {alert(`A label desse botão é: ${label}`)} }>Clique aqui</button>
        </>
    )
}

export { Button }