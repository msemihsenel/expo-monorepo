import Head from 'next/head'
import styles from '../styles/Home.module.css'

import { connect } from 'react-redux'

const Home = (props) => {
  return (
    <h1 className={styles.title} onClick={() => { props.change() }}>
      Welcome to <a href="https://nextjs.org">{props.status}</a>
    </h1>
  )
}

const mapStateToProps = (state) => {
  return {
    status: state.status
  }
}

const mapDispatchToProps = (dispatch) => {
  console.log('dispatch çalıştı')
  return {
    change: () => dispatch({ type: 'SET_STATUS', payload: 'test2' })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
