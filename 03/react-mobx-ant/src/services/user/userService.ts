import { CreateOrUpdateUserInput } from './dto/createOrUpdateUserInput';
import { EntityDto } from '../../services/dto/entityDto';
import { GetAllUserOutput } from './dto/getAllUserOutput';
import { PagedResultDto } from '../../services/dto/pagedResultDto';
import { PagedUserResultRequestDto } from "./dto/PagedUserResultRequestDto";
import { UpdateUserInput } from './dto/updateUserInput';
import http from '../httpService';
import UserLoginInfoDto from '../session/dto/UserLoginInfoDto';


class UserService {
  public async create(createUserInput: CreateOrUpdateUserInput) {
    debugger;
    let result = await http.post('api/users', createUserInput);
    return result.data;
  }

  public async update(updateUserInput: UpdateUserInput) {
    const result = await http.put(`api/users/${updateUserInput.id}`, updateUserInput);
    return result.data;
  }

  public async delete(entityDto: EntityDto) {
    let result = await http.delete(`api/users/${entityDto.id}`);
    return result.data;
  }
  public async get(entityDto: EntityDto): Promise<CreateOrUpdateUserInput> {
    let result = await http.get(`api/users/${entityDto.id}`);
    return result.data;
  }

  public async getAll(pagedFilterAndSortedRequest: PagedUserResultRequestDto): Promise<PagedResultDto<GetAllUserOutput>> {
    //const result = await http.get(`api/users?page=${pagedFilterAndSortedRequest.page}&limit=${pagedFilterAndSortedRequest.maxResultCount}`);
    const result = await http.get(`api/users?filter=${pagedFilterAndSortedRequest.keyword}`);
    const data = result.data;
    return {
      totalCount: data.length,
      items: data
    }
  }
  public async getCurrentLoginInformations(entityDto: EntityDto): Promise<UserLoginInfoDto>{
    let result = await http.get(`api/users/${entityDto}`);
    return result.data;
  }
}

export default new UserService();
