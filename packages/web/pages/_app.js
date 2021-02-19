
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

import { default as KittenConfigs } from '@monorepo/kitten-configs';

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

const App = ({ Component, pageProps }) => {

  return (
    <Provider store={store}>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider
        {...eva}
        theme={{ ...eva.light, ...KittenConfigs.customTheme }}
        customMapping={KittenConfigs.customMapping}
      >
        <Component {...pageProps} />
      </ApplicationProvider>
    </Provider>
  )
}

App.getInitialProps = async ({ Component, ctx }) => {
  const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
  //     //Anything returned here can be access by the client
  return { pageProps: pageProps };
}

export default App

