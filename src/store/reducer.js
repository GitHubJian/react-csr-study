const defaultState = {
  count: 0,
  list: [1, 3, 4]
}

exports.reducer = function reducer(state = defaultState, action) {
  switch (action.type) {
    case 'LIST_ASYNC_DATA':
      state = {
        ...state,
        list: action.payload
      }
      break
  }

  return state
}
