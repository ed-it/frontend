import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as statusModel from './../models';

@Injectable()
export class StatusService {
  constructor(private http: HttpClient) {}

  public getStatus(): Observable<statusModel.StatusReponse> {
    return this.http.get<statusModel.StatusReponse>('http://localhost:12342/api/status');
  }
}



// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// import { Store, select } from '@ngrx/store';
// import { Observable } from 'rxjs/Observable';

// import { PipState } from './pips-display/pip-reducer';

// @Injectable()
// export class StatusApi {
//   constructor(private http: HttpClient, private store: Store<PipState>) {}

//   public getStatusData() {
//     const statusData = this.http.get('http://localhost:12342/api/status');

//     const dispatcher = statusData.subscribe(
//       (data: any) => {
//         const { event, timestamp, params } = data;
//         this.store.dispatch({ type: 'UPDATE', payload: params.pips });
//       },
//       error => console.log(error),
//       () => dispatcher.unsubscribe()
//     );

//     return statusData;
//   }
// }