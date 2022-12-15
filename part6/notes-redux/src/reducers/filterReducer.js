const filterReducer = (state = 'ALL', action) => {
  // console.log('ACTION: ', action)
  // console.log('state now: ', state)
  switch (action.type) {
    case 'SET_FILTER':
      return action.filter
    default:
      return state
  }
}

export const filterChange = filter => {
  return {
    type: 'SET_FILTER',
    filter,
  }
}

export default filterReducer