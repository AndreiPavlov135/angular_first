export interface IVideoItems {
  kind: string;
  etag: string;
  id: ISearchItemId;
  snippet: ISnippet;
  statistics: { [key: string]: string };
}
interface ISearchItemId {
  kind: string;
  videoId: string;
}

interface ISnippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: {
    default: IThumbnails;
    medium: IThumbnails;
    high: IThumbnails;
    maxres: IThumbnails;
    standard: IThumbnails;
  };
  channelTitle: string;
  tags: string[];
  categoryId: string;
  liveBroadcastContent: string;
  localized: ILocalized;
  defaultLanguage?: string;
  defaultAudioLanguage: string;
}

interface IThumbnails {
  url: string;
  width: number;
  height: number;
}

interface ILocalized {
  title: string;
  description: string;
}
