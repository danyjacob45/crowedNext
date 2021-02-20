export interface IRegister {
  email: string;
  firstname: true;
  password: string;
  rePassword: string;
  referrer: string;
  username: string;
}

export interface ILogin {
  username: string;
  password: true;
}
