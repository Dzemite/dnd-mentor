import { Dashboard } from 'pages';
import Login from 'pages/login';

export const routes = [
  {
    name: 'Dashboard',
    path: '/',
    component: <Dashboard />,
  },
  {
    name: 'Login',
    path: '/login',
    component: <Login />
  }
];
