export interface ISearchItem {
    kind: string;
    etag: string;
    id: string;
    snippet: ISnippet;
    statistics: { [key: string]: string }
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
    };
    channelTitle: string;
    tags: string[];
    categoryId: string;
    liveBroadcastContent: string;
    localized: ILocalized;
    defaultAudioLanguage: string;
}

interface IThumbnails {
    url: string;
    width: string;
    height: string;
}

interface ILocalized {
    title: string;
    description: string;
}