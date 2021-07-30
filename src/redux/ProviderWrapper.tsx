import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { persistor } from './store'
import { store } from './store'

const ProviderWrapper: React.FC<any> = (props) => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      {props.children}
    </PersistGate>
  </Provider>
)

export default ProviderWrapper
