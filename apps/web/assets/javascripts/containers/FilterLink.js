import React, { Component, PropTypes } from 'react'
import Link from '../components/Link'
import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions/todos'

const mapStateToProps = (state, ownProps) => {
  return(
    {
      active: state.visibilityFilter === ownProps.filter
    }
  )
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return(
    {
      onClick: () => { dispatch(setVisibilityFilter(ownProps.filter)) }
    }
  )
}


const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)

export default FilterLink