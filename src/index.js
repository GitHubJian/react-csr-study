const React = require('react')
const { render } = require('react-dom')
const { Provider } = require('react-redux')
const { store } = require('./store')

const List = require('./components/List')

class App extends React.Component {
  componentDidMount() {
    setTimeout(function() {
      let list = [3, 4, 5]

      store.dispatch({ type: 'LIST_ASYNC_DATA', payload: list })
    }, 1e3)
  }

  render() {
    return (
      <Provider store={store}>
        <List />
      </Provider>
    )
  }
}

render(<App />, document.getElementById('app'))
