import LoginForm from "containers/LoginForm";
import { FC } from "react";

import s from "./Login.module.scss";

const Login: FC = () => {
  return (
    <div className={s.loginWrapper}>
      <LoginForm />
    </div>
  );
}
export default Login;