import { IVideoItems } from './video-items.model';

export interface IVideoResponse {
  kind: string;
  etag: string;
  nextPageToken: string;
  pageInfo: { [key: string]: number };
  regionCode: string;
  items: IVideoItems[];
}
