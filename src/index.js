const React = require('react')
const { render } = require('react-dom')

class HelloWorld extends React.Component {
  render() {
    return <div>Hello, world</div>
  }
}

render(<HelloWorld />, document.getElementById('app'))
