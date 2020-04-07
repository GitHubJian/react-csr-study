const defaultState = {
  count: 0
}

function reducer(state = defaultState, action) {
  switch (action.type) {
    case 'increment':
      state.count += 1
      break
    case 'decrement':
      state.count -= 1
      break
  }

  return state
}

exports.reducer = reducer
