import { Button, Link, TextField } from "@mui/material";
import { useAppDispatch, useAppSelector } from "hooks/redux";
import { ChangeEvent, FC, FormEvent, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { userAPI } from "services/userService";
import { addUser } from "store/reducers/UserReducer/ActionCreator";
import { ILoginRes } from "types/responses";

import s from "./LoginForm.module.scss";

export const LoginForm: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {user} = useAppSelector(state => state.userReducer);
  const [authUser, {isError}] = userAPI.useAuthUserMutation();

  const fromPage = (location.state as {from: any})?.from?.pathname || '';

  const handleSubmit = (event: FormEvent<HTMLFormElement>) =>  {
    authUser({ identifier: email, password })
      .then(res => {
        localStorage.setItem('token', (res as { data: ILoginRes; }).data.jwt);
        dispatch(addUser((res as { data: ILoginRes; }).data.user));
        navigate(fromPage || '/', {replace: true})
      })
      .catch(err => {
        console.log(err);
      });

    event.preventDefault();
  };
  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    event.preventDefault();
  };
  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    event.preventDefault();
  };

  return (
    <form className={s.loginFormWrapper} onSubmit={handleSubmit}>
      <TextField
        id="email"
        label="Email"
        value={email}
        onChange={handleEmailChange}
        error={isError}
      />
      <TextField
        id="password"
        label="Password"
        type="password"
        value={password}
        onChange={handlePasswordChange}
        error={isError}
        // helperText={error}
      />
      <Link href="/signup" underline="hover">registration</Link>
      <Button type="submit" variant="contained">Login</Button>
      User: {user?.username}
    </form>
  );
}
