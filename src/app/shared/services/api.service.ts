import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  public getApiCall(url: string, params: any): Observable<any> {
    return this.http.get(url, params);
  }

  public postApiCall(url: string, body: any): Observable<any> {
    return this.http.post(url, body);
  }
}
