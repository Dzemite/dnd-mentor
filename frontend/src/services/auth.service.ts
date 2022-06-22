import { Auth } from "api/auth";

export class AuthService {
  authApi: Auth;

  constructor() {
    this.authApi = new Auth();
  }

  signIn(email: string, password: string) {
    this.authApi.post(this.getSignInQuery(email, password))
      .then((res) => {
        console.log(res.data.data.login.user.username);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  private getSignInQuery(email: string, password: string) {
    return "mutation { login(input: { identifier: \"test@mail.com\", password: \"test123\" }) { jwt user { id username email confirmed blocked}}}";
  }
}