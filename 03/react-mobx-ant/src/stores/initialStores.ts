import AuthenticationStore from './authenticationStore';
import SessionStore from './sessionStore';
import UserStore from './userStore';
export default function InitialStores() {
  return {
    authenticationStore: new AuthenticationStore(),
    userStore: new UserStore(),
    sessionStore: new SessionStore()
  };
}
