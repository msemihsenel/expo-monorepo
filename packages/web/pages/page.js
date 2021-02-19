import { connect } from 'react-redux'

const Page = (props) => (
  <div>
    <div onClick={() => { props.change() }}>from redux=> {props.status}</div>
  </div>
);

const mapStateToProps = (state) => {
  return {
    status: state.status
  }
}

const mapDispatchToProps = (dispatch) => {
  console.log('dispatch çalıştı')
  return {
    change: () => dispatch({ type: 'SET_STATUS', payload: 'PAGE' })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Page)
