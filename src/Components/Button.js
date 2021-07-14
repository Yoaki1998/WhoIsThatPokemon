import React from 'react'

const Button = ({name, winOrLose}) => {
    return (
        <button onClick={() => winOrLose(name)}> {name} </button>
    )
}

export default Button