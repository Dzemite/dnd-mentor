import { Button, Link, TextField } from "@mui/material";
import { useLoginMutation } from "generated/graphql";
import { useAppDispatch, useAppSelector } from "hooks/redux";
import { ChangeEvent, FC, FormEvent, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { loginUser } from "store/reducers/UserReducer/ActionCreator";

import s from "./LoginForm.module.scss";

export const LoginForm: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [ loginMutationTrigger ] = useLoginMutation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {error} = useAppSelector(state => state.userReducer);

  const fromPage = (location.state as {from: any})?.from?.pathname || '';

  const handleSubmit = (event: FormEvent<HTMLFormElement>) =>  {
    dispatch(loginUser({
      loginMutationTrigger,
      credentials: { email, password }
    }))
      .then(() => {
        debugger;
        navigate(fromPage || '/', {replace: true})
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
        error={!!error}
      />
      <TextField
        id="password"
        label="Password"
        type="password"
        value={password}
        onChange={handlePasswordChange}
        error={!!error}
        helperText={error}
      />
      <Link href="/signup" underline="hover">registration</Link>
      <Button type="submit" variant="contained">Login</Button>
    </form>
  );
}
