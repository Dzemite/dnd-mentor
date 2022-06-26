import { RequireAuth } from 'hoc';
import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routes } from 'router';

const RouteManager: FC = () => {
  const router = routes.map((route) => {
    return <Route path={route.path} element={
      route.requireAuth ? 
        <RequireAuth>{route.component}</RequireAuth> :
        route.component
    } key={route.name} />;
  });
  return <Routes>{router}</Routes>;
};

export default RouteManager;
