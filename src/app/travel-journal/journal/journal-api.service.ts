import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class JournalApiService {

  constructor(private http: HttpClient) { }

  public get(params) {

    const query: any = {
      page: params.page || 1,
      display: params.display || 50,
    };

    if (params.searchFilter) {
      query.searchFilter = params.searchFilter;
    }

    let queryStr = Object.keys(query).map(key => `${key}=${query[key]}`).join('&');

    return this.http.get(`http://localhost:12342/api/system-journal?${queryStr}`);
  }
}
