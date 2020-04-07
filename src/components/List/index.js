const React = require('react')

class List extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <ul className='j-list'>
        {this.props.list.map(function(item, idx) {
          return <li>{item.name}</li>
        })}
      </ul>
    )
  }
}

List.defaultProps = {
  list: []
}

module.exports = List
