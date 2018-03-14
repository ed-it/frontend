import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class StatusApi {

  constructor(private http: HttpClient) { }

  public getStatusData() {
    return this.http.get('http://localhost:12342/api/status');
  }

}
