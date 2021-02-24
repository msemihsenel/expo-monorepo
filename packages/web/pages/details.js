import React from 'react';
import {
    Layout,
    Text,
    Button,
    StyleService,
    useStyleSheet
} from '@ui-kitten/components';
import { connect } from 'react-redux'

import { Component, CustomCircleButton } from '@monorepo/common'

const Details = (props) => {

    const navigateBlank = () => {
        window.location.href = '/blank';
    };

    const styles = useStyleSheet(themedStyles);

    return (
        <div className='pageContainer'>
            <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center', margin: '5%' }}>
                <Text category='h1'>DETAILS</Text>
                <Text>ROUTE:</Text>
                <Text>PARAMS:</Text>
                <CustomCircleButton onPress={() => { props.change(); console.log('STYLES', styles) }}>
                    <Text style={styles.buttonText}>TEST</Text>
                </CustomCircleButton>
                <Button onPress={navigateBlank}>OPEN BLANK</Button>
            </Layout>
            <Component />
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        status: state.status
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        change: () => dispatch({ type: 'SET_STATUS', payload: 'testFromDetails' })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Details)

const themedStyles = StyleService.create({
    buttonText: {
        textAlign: 'center',
        color: 'color-success-default'
    },
    pageContainer: {
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
});