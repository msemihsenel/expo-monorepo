import React from 'react';
import { SafeAreaView } from 'react-native';
import { Button, Divider, Layout, TopNavigation, Text } from '@ui-kitten/components';

export const NotFoundScreen = ({ navigation, route }) => {

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text category='h1'>CUSTOM 404 PAGE</Text>
            </Layout>
        </SafeAreaView>
    );
};