import React from 'react'
import SingleTodo from '../SingleTodo/SingleTodo'

const TodoList = ({ todos, setTodos }) => {

    return (
        <>
            {todos.map((todo) => (
                <SingleTodo
                    key={todo.id}
                    name={todo.name}
                    state={todo.state}
                />
            ))}
        </>
    )
}

export default TodoList