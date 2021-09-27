import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ISearchRespons } from 'src/app/models/search-respons.model';
import { youTubeResponse } from '../mock-response';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }
  public getYouTubeMoves(): Observable<ISearchRespons> {
    return of(youTubeResponse).pipe(delay(1000));
  }
}
