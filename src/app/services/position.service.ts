import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators'
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PositionService {
  API_ENDPOINT:string = environment.API_ENDPOINT;
  
  constructor(private http:HttpClient) { }

  public getPosition(imei:number){
    const URL = `${this.API_ENDPOINT}/jahecha/${imei}`;
    return this.http.get(URL)
      .pipe(catchError(
        this.handleError('getPosition', [])));
  }

  private handleError<T>(operation = 'operation', result?: T){
    return (error: any): Observable<T> => {
      /* send the error to the remote logging */
      console.error(error)
      
      console.log(`${operation} failed: ${error.message}`);

      return of(result as T)
    }
  }

}
