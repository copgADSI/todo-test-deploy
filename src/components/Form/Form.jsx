import React, { useRef, useState } from 'react'
import CustomButton from '../CustomButton/CustomButton'
import CustomInput from '../CustomInput/CustomInput'
import TodoList from '../TodoList/TodoList'

const Form = () => {
    const inputRef = useRef(null)
    const [todos, setTodos] = useState([])
    const [todo, setTodo] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        if (todo) {
            todos.push({
                id: Date.now(),
                name: todo,
                state: false
            })    
        }
        setTodo("")

    }
    return (
        <>
            <form
                onSubmit={handleSubmit}
            >
                <CustomInput
                    type="text"
                    placeholder="Write Task"
                    todo={todo}
                    setTodo={setTodo}

                />
                <CustomButton type="sumit" text="add" />

            </form>
            <TodoList
                todos={todos}
                setTodos={setTodos}
            />
        </>
    )
}

export default Form