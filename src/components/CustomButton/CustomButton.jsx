import React from 'react'
import "./style.css"
const CustomButton = ({ text, type }) => {
    return (
        <button
            type={type}
            className='button'
        >
            {text}
        </button>
    )
}

export default CustomButton