import { Provider } from 'react-redux'

import { store } from './store'

const ProviderWrapper: React.FC<any> = (props) => (
  <Provider store={store}>{props.children}</Provider>
)

export default ProviderWrapper
