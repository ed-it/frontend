import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TravelJournalApi {

  constructor(private http: HttpClient) { }

  public getByTime() {
    return this.http.get('http://localhost:12342/api/all-fsd-jumps');
  }

  public getByCount() {
    return this.http.get('http://localhost:12342/api/all-fsd-jumps?byCount=true');
  }

}
