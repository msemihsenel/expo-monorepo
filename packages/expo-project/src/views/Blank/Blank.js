import React from 'react';
import { SafeAreaView, View, Platform, Dimensions, ScrollView } from 'react-native';
import {
    Layout,
    Text,
    Button,
    Card,
    Tab,
    TabBar,
    BottomNavigation,
    BottomNavigationTab,
    StyleService,
    useStyleSheet
} from '@ui-kitten/components';

import '@expo/match-media'
import { useMediaQuery } from "react-responsive";

const BlankScreen = ({ navigation, route }) => {
    const [selectedIndex, setSelectedIndex] = React.useState(0);

    let screenWidht = Dimensions.get('window').width;
    let screenHeight = Dimensions.get('window').height;
    console.log('PLATFORM', Platform)
    console.log('DIMENSIONS', Dimensions.get('window'))
    const navigateDetails = () => {
        navigation.navigate('Details');
    };

    //const isWeb = screenWidht >= 1224;
    const isWeb = useMediaQuery({
        minWidth: 1224,
        // alternatively...
        //query: "(max-device-width: 1224px)"
    });
    console.log('IS_WEB', isWeb)
    const styles = useStyleSheet(themedStyles);

    const Header = (props) => (
        <View {...props}>
            <Text category='h6'>Maldives</Text>
            <Text category='s1'>By Wikipedia</Text>
        </View>
    );

    const Footer = (props) => (
        <View {...props} style={[props.style, styles.footerContainer]}>
            <Button
                style={styles.footerControl}
                size='small'
                status='basic'>
                CANCEL
        </Button>
            <Button
                style={styles.footerControl}
                size='small'>
                ACCEPT
        </Button>
        </View>
    );

    return (
        <SafeAreaView style={styles.pageContainer}>
            {
                Platform.OS == 'web' && <TabBar
                    selectedIndex={selectedIndex}
                    onSelect={index => setSelectedIndex(index)}>
                    <Tab title='USERS' />
                    <Tab title='ORDERS' />
                    <Tab title='TRANSACTIONS' />
                </TabBar>
            }
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
            {
                Platform.OS != 'web' && <BottomNavigation
                    selectedIndex={selectedIndex}
                    onSelect={index => setSelectedIndex(index)}>
                    <BottomNavigationTab title='USERS' />
                    <BottomNavigationTab title='ORDERS' />
                    <BottomNavigationTab title='TRANSACTIONS' />
                </BottomNavigation>
            }
        </SafeAreaView>
    );
};

export default BlankScreen

const themedStyles = StyleService.create({
    pageContainer: {
        flex: 1,
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
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    footerControl: {
        marginHorizontal: 2,
    },
});