import React from 'react'
import PropTypes from 'prop-types'
import PrioritySelector from './PrioritySelector'


const Todo = ({ onClick, completed, text, priority, id}) => (

  <li>

    <span  
      onClick={onClick}
      style={{
        textDecoration: completed ? 'line-through' : 'none'
      }}> 
      
      {text}
    
    </span>

    <PrioritySelector todoId={id}  priority={priority}/>

  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
