import { PagedFilterAndSortedRequest } from '../../dto/pagedFilterAndSortedRequest';
import { PagingRequest } from '../../dto/pagingRequest';

export interface PagedUserResultRequestDto extends PagedFilterAndSortedRequest,PagingRequest  {
    keyword: string
}
