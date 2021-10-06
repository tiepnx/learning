import { action, observable } from 'mobx';

import LoginModel from '../model/login/loginModel'
import tokenAuthService from '../services/tokenAuth/tokenAuthService';
import {setToken, getToken, clearToken} from './../helpers/utilities';

class AuthenticationStore {
  @observable loginModel: LoginModel = new LoginModel();

  get isAuthenticated(): boolean {
    var token = getToken();
    if (!token) return false;
    return true;
  }

  @action
  public async login(model: LoginModel) {
    let result = await tokenAuthService.authenticate({
      userNameOrEmailAddress: model.userNameOrEmailAddress,
      password: model.password,
      rememberClient: model.rememberMe,
    });
    setToken(result);
  }

  @action
  logout() {
    clearToken();
  }
}
export default AuthenticationStore;
