exports.action = {
  increment: function increment() {
    return {
      type: 'increment',
      payload: '',
      error: '',
      meta: {}
    }
  },
  decrement: function decrement() {
    return {
      type: 'decrement'
    }
  }
}
