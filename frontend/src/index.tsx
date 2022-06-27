import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import RouteManager from 'containers/RouterManager';
import { Provider } from 'react-redux';
import { setupStore } from 'store/store';

import 'react-toastify/dist/ReactToastify.css';
import 'styles/index.scss';
import { Layout } from 'containers';

const container = document.getElementById('root');
const root = createRoot(container!);
const store = setupStore();

root.render(
  <Provider store={store}>
    <Router>
      <ToastContainer autoClose={4000} hideProgressBar position="bottom-right" closeButton />
      <Layout>
        <RouteManager />
      </Layout>
    </Router>
  </Provider>,
);
