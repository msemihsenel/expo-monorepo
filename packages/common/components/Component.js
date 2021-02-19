import React from 'react';
import { SafeAreaView } from 'react-native';
import { Button, Divider, Layout, TopNavigation } from '@ui-kitten/components';

import { connect } from 'react-redux'

const Component = (props) => {
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
        change: () => dispatch({ type: 'SET_STATUS', payload: 'test' })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Component)
