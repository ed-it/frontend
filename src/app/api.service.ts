import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }

  public getMarketData() {
    return this.http.get('http://localhost:12342/api/market');
  }

}
