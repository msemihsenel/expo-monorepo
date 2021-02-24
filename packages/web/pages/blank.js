import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, ScrollView } from 'react-native';
import {
    Layout,
    Text,
    Button,
    Card,
    Tab,
    TabBar,
    StyleService,
    useStyleSheet
} from '@ui-kitten/components';

import { useMediaQuery } from "react-responsive";





const Header = (props) => (
    <View {...props}>
        <Text category='h6'>Maldives</Text>
        <Text category='s1'>By Wikipedia</Text>
    </View>
);

const Footer = (props) => (
    <View {...props} style={[props.style, {
        flexDirection: 'row',
        justifyContent: 'flex-end'//TODO
    }]}>
        <Button
            style={{ marginHorizontal: 2 }}
            size='small'
            status='basic'>
            CANCEL
        </Button>
        <Button
            style={{ marginHorizontal: 2 }}
            size='small'>
            ACCEPT
        </Button>
    </View>
);

const BlankScreen = (props) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [isWeb, setIsWeb] = useState();
    const isWebControl = useMediaQuery({ minWidth: 1224 });


    const styles = useStyleSheet(themedStyles);

    const navigateDetails = () => {
        window.location.href = '/details';
    };

    //const isWeb = screenWidht >= 1224;

    console.log('IS_WEB', isWeb)


    useEffect(() => {
        setIsWeb(isWebControl)
    }, [isWebControl])



    return (
        <SafeAreaView style={styles.pageContainer}>

            <TabBar
                selectedIndex={selectedIndex}
                onSelect={index => setSelectedIndex(index)}
            >
                <Tab title='USERS' />
                <Tab title='ORDERS' />
                <Tab title='TRANSACTIONS' />
            </TabBar>

            <ScrollView contentContainerStyle={{ minHeight: '100%' }} style={{ flex: 1 }}>

                <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text category='h1'>BLANK PAGE</Text>
                    <Button onPress={navigateDetails}>OPEN DETAILS</Button>
                </Layout>
                <Layout style={styles.topContainer}>

                    <Card style={isWeb ? styles.cardWeb : styles.card} header={Header}>
                        <Text>With Header</Text>
                    </Card>

                    <Card style={isWeb ? styles.cardWeb : styles.card} footer={Footer}>
                        <Text>With Footer</Text>
                    </Card>

                    <Card style={isWeb ? styles.cardWeb : styles.card} header={Header}>
                        <Text>With Header</Text>
                    </Card>

                    <Card style={isWeb ? styles.cardWeb : styles.card} footer={Footer}>
                        <Text>With FooterF</Text>
                    </Card>

                </Layout>

            </ScrollView>
        </SafeAreaView>
    );
};

export default BlankScreen

const themedStyles = StyleService.create({
    pageContainer: {
        flex: 1,
        height: '100vh',
        backgroundColor: 'color-basic-100',
    },
    topContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap'
    },
    card: {
        flex: 1,
        margin: '1%',
        minWidth: '98%'
    },
    cardWeb: {
        flex: 1,
        margin: 2,
        minWidth: '24.5%'
    },
    footerContainer: {

    },
    footerControl: {
        marginHorizontal: 2,
    },
});