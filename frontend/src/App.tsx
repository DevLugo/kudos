import './App.css';
import { useRoutes } from 'react-router-dom';
import { Provider } from 'react-redux';
import routes from './Routes';
import store from './store';

export default function App() {
  let element = useRoutes(routes);

  return (
    <Provider store={store}>
      {element}
    </Provider>
  );
}