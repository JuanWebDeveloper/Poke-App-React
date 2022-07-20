import { AppRouter } from './routers/AppRouter';
import { Provider } from 'react-redux';

// Store Of The Application
import { store } from './store/store';

// App Styles
import './assets/scss/styles.scss';

const App = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};

export default App;
