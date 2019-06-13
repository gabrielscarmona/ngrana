import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Priorities } from '../actions'
import { setPriority } from '../actions'


const PrioritySelector = ({todoId, priority, dispatch}) => ( 

    <select value={priority} onChange={ e => { dispatch(setPriority(todoId, e.currentTarget.value)) }}>
        {
        Object.keys(Priorities).map((key, i)=>{
            return (<option key={key} value={key} >{key}</option>)
        })
        }
    </select>
)

PrioritySelector.propTypes = {
  dispatch: PropTypes.func.isRequired,
  todoId: PropTypes.number.isRequired,
  priority: PropTypes.string.isRequired
}

export default connect()(PrioritySelector)

