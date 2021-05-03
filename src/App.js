import './App.css';
import AppRouter from './route'
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import configureStore from './store/configureStore';
const { persistor, store } = configureStore();

const ActivityLoader =() =>{
  return(
    <h1>Loading ................</h1>
  )
}


function App({...props}) {
  return (
    <ReduxProvider store={store}>
        <PersistGate
          loading={<ActivityLoader/>}
          persistor={persistor}
        >
                <AppRouter/>
        </PersistGate>
      </ReduxProvider>
 
  );
}

export default App;
