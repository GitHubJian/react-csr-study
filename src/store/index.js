const { createStore } = require('redux')
const { action } = require('./action')
const { reducer } = require('./reducer')

const store = createStore(reducer)

exports.store = store

exports.action = action
