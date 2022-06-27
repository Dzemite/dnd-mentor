import { Main, Login, Signup, UserProfile } from 'pages';

export const routes = [
  {
    name: 'Main',
    path: '/',
    requireAuth: true,
    component: <Main />,
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
