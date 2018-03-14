import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LocationApi {

  constructor(private http: HttpClient) { }

  public getLocationData() {
    return this.http.get('http://localhost:12342/api/location');
  }

}
