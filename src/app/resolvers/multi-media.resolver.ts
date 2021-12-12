import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { ApiService } from '../services/api.service';

@Injectable({
  providedIn: 'root'
})
export class MultiMediaResolverService implements Resolve<any> {
  constructor(private _apiService: ApiService) {}
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    console.log('Called Get movie in resolver...', route);
    return this._apiService.getData("movie","").pipe(
      catchError(error => {
        return of('No data');
      })
    );
  }
}
