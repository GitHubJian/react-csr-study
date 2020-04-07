const React = require('react')
const { render } = require('react-dom')
const { store, action } = require('./store')

class HelloWorld extends React.Component {
  constructor() {
    super()

    const state = store.getState()

    this.state = {
      count: state.count
    }

    this.onIncrementHandler = this.onIncrementHandler.bind(this)
    this.onDecrementHandler = this.onDecrementHandler.bind(this)
  }

  onIncrementHandler() {
    store.dispatch(action.increment())
  }

  onDecrementHandler() {
    store.dispatch(action.decrement())
  }

  render() {
    const that = this

    store.subscribe(function() {
      const state = store.getState()

      that.setState({
        count: state.count
      })
    })

    return (
      <div>
        <div>Value: {this.state.count}</div>

        <div onClick={this.onIncrementHandler}>
          <span> 加 </span>
        </div>
        <div onClick={this.onDecrementHandler}>
          <span> 减 </span>
        </div>
      </div>
    )
  }
}

render(<HelloWorld />, document.getElementById('app'))
