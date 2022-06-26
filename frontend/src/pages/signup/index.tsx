import { RegistrationForm } from "containers";
import { FC } from "react";

import s from "./Signup.module.scss";

const Signup: FC = () => {
  return (
    <div className={s.signupWrapper}>
      <RegistrationForm />
    </div>
  );
}
export default Signup;