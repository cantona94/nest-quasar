import { IUser } from "src/types/types";

export interface ExampleStateInterface {
  user: IUser | null;
  isAuth: boolean;
}

function state(): ExampleStateInterface {
  return {
    user: null,
    isAuth: false
  }
}

export default state;
