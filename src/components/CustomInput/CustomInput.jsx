import React, { useState } from 'react'
import "./style.css"
const CustomInput = ({  type, placeholder, todo, setTodo }) => {
    return (
        <>
            <input
                type={type}
                placeholder={placeholder}
                value={todo}
                onChange={e => setTodo(e.target.value)}
                className="input"
            />
        </>
    )
}

export default CustomInput