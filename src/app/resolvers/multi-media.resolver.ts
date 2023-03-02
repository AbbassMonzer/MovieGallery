import { Injectable } from '@angular/core'
import { ActivatedRouteSnapshot, Resolve } from '@angular/router'
import { Observable, of } from 'rxjs'
import { catchError } from 'rxjs/operators'
import { ApiService } from '../services/api.service'

@Injectable({
  providedIn: 'root',
})
export class MultiMediaResolverService implements Resolve<any> {
  id: any
  type: any
  constructor(private _apiService: ApiService) {}
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    this.id = route.paramMap.get('id')
    this.type = route.paramMap.get('type')
    return this._apiService.getData(this.type, this.id).pipe(
      catchError(error => {
        return of('No data')
      })
    )
  }
}
