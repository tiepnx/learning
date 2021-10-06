import { action, observable } from 'mobx';
import { EntityDto } from '../services/dto/entityDto';

import { CurrentLoginInformations } from '../services/session/dto/CurrentLoginInformations';
import UserService from '../services/user/userService';

class SessionStore {
  @observable currentLogin: CurrentLoginInformations = new CurrentLoginInformations();
  @action
  async getCurrentLoginInformations(entityDto: EntityDto) {
    let result = await UserService.getCurrentLoginInformations(entityDto);
    this.currentLogin.user = result;
  }
}

export default SessionStore;
