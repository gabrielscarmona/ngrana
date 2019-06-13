let nextTodoId = 0
export const addTodo = text => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})

export const setPriority = (id, priority) => ({
  type: 'SET_PRIORITY',
  id,
  priority
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
  SHOW_HIGH_PRIORITY: 'SHOW_HIGH_PRIORITY',
  SHOW_LOW_PRIORITY: 'SHOW_LOW_PRIORITY'
}

export const Priorities = {
  HIGH: 'HIGH',
  LOW: 'LOW'
}
