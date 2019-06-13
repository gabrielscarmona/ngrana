import React from 'react'
import FilterLink from '../containers/FilterLink'
import { VisibilityFilters } from '../actions'

const Footer = () => (
  <div>
    <span>Show: </span>
    <FilterLink filter={VisibilityFilters.SHOW_ALL}>
      All
    </FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
      Active
    </FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
      Completed
    </FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_HIGH_PRIORITY}>
      High Priority
    </FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_LOW_PRIORITY}>
      Low Priority
    </FilterLink>

  </div>
)

export default Footer
