import React from 'react';
import { SafeAreaView } from 'react-native';
import { Divider, Icon, Layout, Text, TopNavigation, TopNavigationAction, Button } from '@ui-kitten/components';

import { Component, CustomComponentForMapping } from '@monorepo/common'

const BackIcon = (props) => (
    <Icon {...props} name='arrow-back' />
);

export const DetailsScreen = ({ navigation, route }) => {
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

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <TopNavigation title='MyApp' alignment='center' accessoryLeft={BackAction} />
            <Divider />
            <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text category='h1'>DETAILS</Text>
                <Text>ROUTE:{route.name}</Text>
                <Text>PARAMS:{route.params ? JSON.stringify(route.params, 5) : "No Params Passed"}</Text>
                <CustomComponentForMapping>
                    <Text style={{ textAlign: 'center' }}>TEST</Text>
                </CustomComponentForMapping>
                <Button onPress={navigateBlank}>OPEN BLANK</Button>
            </Layout>
            <Component />
        </SafeAreaView>
    );
};