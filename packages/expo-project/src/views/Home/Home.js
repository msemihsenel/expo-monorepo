import React from 'react';
import { SafeAreaView } from 'react-native';
import { Button, Divider, Layout, TopNavigation } from '@ui-kitten/components';

import { ComponentSecond } from '@monorepo/common'
// import ComponentSecond from '../../components/ComponentSecond'

export const HomeScreen = ({ navigation, route }) => {

    const navigateDetails = () => {
        navigation.navigate('Details');
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <TopNavigation title='MyApp' alignment='center' />
            <Divider />
            <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Button onPress={navigateDetails}>OPEN DETAILS</Button>
                <ComponentSecond />
            </Layout>
        </SafeAreaView>
    );
};