import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SystemListApiService {
  constructor(private http: HttpClient) {}

  public get(params) {
    let queryStr = Object.keys(params)
      .map(key => `${key}=${params[key]}`)
      .join('&');
    return this.http.get(`http://localhost:12342/api/system-list?${queryStr}`);
  }
}
