import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private _apiKey: string = 'ddf9442c69a1aa97524b66e3cba8b9b0'
  public uri: string = 'https://api.themoviedb.org/3'
  constructor(private http: HttpClient) { }

  public getData(type: string, query: string, qryNum?: any, qryString?: any) {
    let apiResponse: any;
    return new Observable<any>(
      (responseObservable) => {
        this.http.get(`${this.uri}/${type}/${query}`,
          { params: new HttpParams().set('api_key', this._apiKey).append('with_genres', qryNum).append('sort_by', qryString) }).pipe(
            map((response) => response),
            catchError(ApiService._handleError)
          ).subscribe((response: any) =>
            (apiResponse = response),
            (error) => {
              responseObservable.error(error)
            },
            () => {
              responseObservable.next(apiResponse);
              responseObservable.complete()
            }
          )
      }
    )
  }


  public getCategoryData(type: string, query: string, params?: HttpParams) {
    let apiResponse: any;
    return new Observable<any>(
      (responseObservable) => {
        this.http.get(`${this.uri}/${type}/${query}`,
          { params: params.append('api_key', this._apiKey) }).pipe(
            map((response) => response),
            catchError(ApiService._handleError)
          ).subscribe((response: any) =>
            (apiResponse = response),
            (error) => {
              responseObservable.error(error)
            },
            () => {
              responseObservable.next(apiResponse);
              responseObservable.complete()
            }
          )
      }
    )

  }


  private static _handleError(error) {
    const objectError = {
      status: error.status,
      data: error
    }
    return throwError(objectError)
  }
}
