import { Button, Link } from "@mui/material";
import Input from "@mui/material/Input";
import { Auth } from "api/auth";
import { useLoginMutation } from "generated/graphql";
import { ChangeEvent, FC, FormEvent, FormEventHandler, useState } from "react";

import s from "./LoginForm.module.scss";

const LoginForm: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = new Auth();

  const data = useLoginMutation();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) =>  {
    data.mutateAsync({data: {identifier: "test@mail.com", password: "test123"}})
      .then(res => {
        console.log(res);
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
      <Input name="email" placeholder="Email" value={email} onChange={handleEmailChange} />
      <Input name="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
      <Link href="/" underline="hover">registration</Link>
      <Button type="submit" variant="contained">Login</Button>
    </form>
  );
}
export default LoginForm;