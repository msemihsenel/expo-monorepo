import React from 'react';
import { SafeAreaView, Platform, ScrollView } from 'react-native';
import {
    Icon,
    Layout,
    Text,
    TopNavigation,
    TopNavigationAction,
    Button,
    StyleService,
    useStyleSheet
} from '@ui-kitten/components';
import { connect } from 'react-redux'

import { Component, CustomCircleButton } from '@monorepo/common'

const BackIcon = (props) => (
    <Icon {...props} name='arrow-back' />
);

const DetailsScreen = ({ navigation, route, ...props }) => {
    console.log("ROUTE", route)
    const navigateBack = () => {
        navigation.goBack();
    };

    const BackAction = () => (
        <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
    );

    const navigateBlank = () => {
        navigation.navigate('Blank');
    };

    const styles = useStyleSheet(themedStyles);

    return (
        <SafeAreaView style={styles.pageContainer}>
            {
                Platform.OS != 'web' && <TopNavigation title='MyApp' alignment='center' accessoryLeft={BackAction} />
            }
            <ScrollView contentContainerStyle={{ minHeight: '100%' }} style={{ flex: 1 }}>
                <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center', margin: '5%' }}>
                    <Text category='h1'>DETAILS</Text>
                    <Text>ROUTE:{route.name}</Text>
                    <Text>PARAMS:{route.params ? JSON.stringify(route.params, 5) : "No Params Passed"}</Text>
                    <CustomCircleButton onPress={() => { props.change(); console.log('STYLES', styles) }}>
                        <Text style={styles.buttonText}>TEST</Text>
                    </CustomCircleButton>
                    <Button onPress={navigateBlank}>OPEN BLANK</Button>
                </Layout>
                <Component />
            </ScrollView>
        </SafeAreaView>
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

export default connect(mapStateToProps, mapDispatchToProps)(DetailsScreen)

const themedStyles = StyleService.create({
    pageContainer: {
        flex: 1,
        backgroundColor: 'color-basic-100',
    },
    buttonText: {
        textAlign: 'center',
        color: 'color-success-default'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'color-success-default',
    },
});