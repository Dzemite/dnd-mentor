import { Button, TextField } from "@mui/material";
import { useAppDispatch, useAppSelector } from "hooks/redux";
import { ChangeEvent, FC, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signupUser } from "store/reducers/SignupReducer/ActionCreator";
import { addUser } from "store/reducers/UserReducer/ActionCreator";
import { IUser } from "types/User";

import s from "./RegistrationForm.module.scss";

export const RegistrationForm: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const {error} = useAppSelector(state => state.userReducer);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) =>  {
    dispatch(signupUser({ username, email, password, role: 3 }))
      .then(user => {
        
        dispatch(addUser(user.payload as IUser));
        navigate('/', {replace: true})
      });

    event.preventDefault();
  };
  const handleUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
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
    <form className={s.registrationFormWrapper} onSubmit={handleSubmit}>
      <TextField
        id="username"
        label="Username"
        value={username}
        onChange={handleUsernameChange}
        // error={!!error}
      />
      <TextField
        id="email"
        label="Email"
        value={email}
        onChange={handleEmailChange}
        // error={!!error}
      />
      <TextField
        id="password"
        label="Password"
        type="password"
        value={password}
        onChange={handlePasswordChange}
        // error={!!error}
        // helperText={error}
      />
      <Button type="submit" variant="contained">SignUp</Button>
    </form>
  );
}
