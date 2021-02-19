import React from 'react';
import { connect } from 'react-redux';

class TestComponent extends React.Component {

    static getInitialProps({ store }) { }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div onClick={() => { this.props.change() }}>from redux=> {this.props.status}</div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        status: state.status
    }
}

const mapDispatchToProps = (dispatch) => {
    console.log('dispatch çalıştı')
    return {
        change: () => dispatch({ type: 'SET_STATUS', payload: 'TESTTEST' })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TestComponent);



