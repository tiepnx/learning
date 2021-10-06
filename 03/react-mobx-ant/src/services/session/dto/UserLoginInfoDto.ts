import { EntityDto } from '../../dto/entityDto';

export default class UserLoginInfoDto extends EntityDto {
  userName!: string;
  fullName!: string;
  emailAddress!: string;
  creationTime!: Date;
  lastLoginTime!:Date;
  avatar!: string;
}
