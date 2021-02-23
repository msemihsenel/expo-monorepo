import React from 'react';
import { Button, Layout } from '@ui-kitten/components';

import { connect } from 'react-redux'

const ComponentSecond = (props) => {
    console.log('PROPS', props)
    return (
        <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Button onPress={() => { props.change() }}>{props.status}</Button>
        </Layout>
    );
};

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

export default connect(mapStateToProps, mapDispatchToProps)(ComponentSecond)