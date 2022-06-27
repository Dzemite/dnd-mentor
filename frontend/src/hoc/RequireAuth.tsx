import { useAppDispatch, useAppSelector } from "hooks/redux";
import { Navigate, useLocation } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { fetchUser } from "store/reducers/UserReducer/ActionCreator";

export const RequireAuth = ({children}) => {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const { user, isLoading } = useAppSelector(state => state.userReducer);
  const token = localStorage.getItem('token');
  const userId = token ? jwt_decode(token)['id'] : '';

  if (!user && token && userId && !isLoading) {
    dispatch(fetchUser(userId));
    return children;
  }
  if (!token) {
    return <Navigate to='/login' state={{from: location}}/>
  }
  return children;
};
