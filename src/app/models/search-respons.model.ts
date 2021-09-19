import { ISearchItem } from './search-item.model';

export interface ISearchRespons {
    kind: string;
    etag: string;
    pageInfo: { [key: string]: number };
    items: ISearchItem[];
}