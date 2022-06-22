import { User } from "interfaces/User";
import Graphql from "./graphql";

interface AuthResponce {
  data: {
    login: {
      jwt: string,
      user: User
    }
  }
}

export class Auth extends Graphql<AuthResponce> {
  
}