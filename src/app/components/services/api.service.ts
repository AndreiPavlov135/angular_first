import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ISearchRespons } from 'src/app/models/search-respons.model';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IVideoResponse } from 'src/app/models/video-response.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly SEARCH_URL: string =
    'https://www.googleapis.com/youtube/v3/search';
  private readonly VIDEO_URL: string =
    'https://www.googleapis.com/youtube/v3/videos';
  private readonly API_KEY: string = 'AIzaSyAO9Pr36DBnSNa8EklYWVomGuq0FzLQRZ4';
  constructor(private http: HttpClient) {}

  public getYouTubeMoves(searchText?: string): Observable<ISearchRespons> {
    const params: HttpParams = new HttpParams()
      .set('type', 'video')
      .set('part', 'snippet')
      .set('maxResults', '10')
      .set('q', searchText || '')
      .set('key', this.API_KEY);
    return this.http.get<IVideoResponse>(`${this.SEARCH_URL}`, { params }).pipe(
      map((videoResponse) => {
        const listItems: string = videoResponse.items
          .map((items) => items.id.videoId)
          .join(',');
        return listItems;
      }),
      mergeMap((listItems) => {
        return this.http.get<ISearchRespons>(
          `${this.VIDEO_URL}?key=${this.API_KEY}&id=${listItems}&part=snippet,statistics`
        );
      }),
      catchError(() => {
        console.log('ошибка');
        return of({} as ISearchRespons);
      })
    );
  }

  public getItemById(id: string): Observable<ISearchRespons> {
    return this.http.get<ISearchRespons>(
      `${this.VIDEO_URL}?key=${this.API_KEY}&id=${id}&part=snippet,statistics`
    );
  }
}
