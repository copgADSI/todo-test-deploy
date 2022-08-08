import React from 'react'
import { AiTwotoneDelete, AiFillEdit } from "react-icons/ai";

import "./style.css"

const SingleTodo = ({ name,state }) => {
  console.log(name,state);
  return (
    <div className="container_cards">
      <div className="card">
        {name}
        <div className='actions'>
          <AiFillEdit className='icon'/>
          <AiTwotoneDelete className='icon'  />
        </div>
      </div>
      
      
    </div>
  )
}

export default SingleTodo