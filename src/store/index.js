const { createStore, combineReducers } = require('redux')
const { action } = require('./action')
const { reducer } = require('./reducer')

const allReducer = combineReducers({
  reducer
})

const store = createStore(allReducer)

exports.store = store

exports.action = action
