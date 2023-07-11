import { makeAutoObservable } from "mobx";
import { accountApi } from "../http/accountApi";

export class User {
  constructor() {
    const cachedUser = accountApi.getCurrentUser();
    this.user = cachedUser;
    makeAutoObservable(this);
  }

  setUser(user) {
    console.log(user);
    this.user = user;
  }
}
