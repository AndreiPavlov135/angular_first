import { ISearchItem } from './search-item.model';

export interface ISearchRespons {
  kind: string;
  etag: string;
  nextPageToken: string;
  pageInfo: { [key: string]: number };
  regionCode: string;
  items: ISearchItem[];
}
