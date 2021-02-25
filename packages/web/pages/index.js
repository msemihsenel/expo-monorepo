import React from 'react';
import { SafeAreaView } from 'react-native';
import { Button, Layout, StyleService, useStyleSheet } from '@ui-kitten/components';

import { ComponentSecond } from '@monorepo/common'

const App = (props) => {

  const styles = useStyleSheet(themedStyles);

  const navigateDetails = () => {
    window.location.href = '/details'
  };

  return (
    <SafeAreaView style={styles.pageContainer}>
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button onPress={navigateDetails}>OPEN DETAILS</Button>
        <ComponentSecond />
      </Layout>
    </SafeAreaView>
  );
};

export default App

const themedStyles = StyleService.create({
  pageContainer: {
    flex: 1,
    height: '100vh',
    backgroundColor: 'color-basic-100',
  },
});