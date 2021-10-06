import RoleInfoDto from './RoleInfoDto';
import UserLoginInfoDto from './UserLoginInfoDto';

export class CurrentLoginInformations {
  user!: UserLoginInfoDto;
  role!: RoleInfoDto[];
}
