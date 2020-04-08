const React = require('react')
const { connect } = require('react-redux')

class List extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {}

  render() {
    return (
      <ul className='j-list'>
        {this.props.list.map(function(item, idx) {
          return <li key={idx}>{item}</li>
        })}
      </ul>
    )
  }
}

List.defaultProps = {
  list: []
}

const mapStateToProps = function(state, ownProps) {
  return {
    list: state.reducer.list
  }
}

const mapDispatchToProps = function(dispatch, ownProps) {
  return {}
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(List)
