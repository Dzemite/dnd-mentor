import { Dashboard, Login, Signup, UserProfile } from 'pages';

export const routes = [
  {
    name: 'Dashboard',
    path: '/',
    requireAuth: true,
    component: <Dashboard />,
  },
  {
    name: 'UserProfile',
    path: '/profile',
    requireAuth: true,
    component: <UserProfile />,
  },
  {
    name: 'Login',
    path: '/login',
    requireAuth: false,
    component: <Login />
  },
  {
    name: 'Signup',
    path: '/signup',
    requireAuth: false,
    component: <Signup />
  },
];
