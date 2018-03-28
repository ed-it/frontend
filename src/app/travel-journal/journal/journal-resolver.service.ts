import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

import { JournalApiService } from './journal-api.service';

@Injectable()
export class JournalResolver implements Resolve<any> {
  constructor(private api: JournalApiService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.api.get({});
  }
}
