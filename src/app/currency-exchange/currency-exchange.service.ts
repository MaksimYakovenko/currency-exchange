import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  private apiUrl = 'https://tascombank.ua/api/currencies';

  constructor(private http: HttpClient) { }

  getCurrencies(): Observable<any> {
    return this.http.get(this.apiUrl).pipe(
      map(data => Array.isArray(data) ? data[0] : data),

    );

  }
  getCurrencies1(): Observable<any> {
    return this.http.get(this.apiUrl).pipe(
      map(data => Array.isArray(data) ? data[1] : data),

    );
}}
