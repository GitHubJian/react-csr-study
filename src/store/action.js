exports.action = {
  increment: function increment(list) {
    return {
      type: 'increment',
      payload: list
    }
  },
  decrement: function decrement() {
    return {
      type: 'decrement'
    }
  }
}
