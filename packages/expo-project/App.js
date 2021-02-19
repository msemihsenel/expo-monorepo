// import React from 'react';
// import * as eva from '@eva-design/eva';
// import { ApplicationProvider, Layout, Text, Button } from '@ui-kitten/components';

// import { default as KittenConfigs } from '@monorepo/kitten-configs';

// import { createStore } from 'redux'
// import { Provider } from 'react-redux'

// const initialState = {
//   status: 'first value'
// }

// const reducer = (state = initialState, action) => {
//   if (action.type == 'SET_STATUS') {
//     return Object.assign({}, state, { status: 'new value' + action.payload })
//   }
//   return state
// }

// const store = createStore(reducer)

// const HomeScreen = () => (
//   <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//     <Text category='h1'>HOME</Text>
//     <Button onPress={() => { props.change() }}>TEST</Button>
//   </Layout>
// );

// export default () => (
//   <Provider store={store}>
//     <ApplicationProvider
//       {...eva}
//       theme={{ ...eva.light, ...KittenConfigs.customTheme }}
//       customMapping={KittenConfigs.customMapping}
//     >
//       <HomeScreen />
//     </ApplicationProvider>
//   </Provider>
// );
//----------------------------
import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { AppNavigator } from './src/navigation/Navigation';

import { default as KittenConfigs } from '@monorepo/kitten-configs';

import { createStore } from 'redux'
import { Provider } from 'react-redux'

const initialState = {
  status: 'first value'
}

const reducer = (state = initialState, action) => {
  if (action.type == 'SET_STATUS') {
    return Object.assign({}, state, { status: 'new value' + action.payload })
  }
  return state
}

const store = createStore(reducer)

export default () => {
  return (

    <Provider store={store}>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider
        {...eva}
        theme={{ ...eva.light, ...KittenConfigs.customTheme }}
        customMapping={KittenConfigs.customMapping}
      >
        <AppNavigator />
      </ApplicationProvider>
    </Provider>

  )
};