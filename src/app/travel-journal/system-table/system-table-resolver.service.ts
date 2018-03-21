import { Injectable }             from '@angular/core';
import { Observable }             from 'rxjs/Observable';
import { Router, Resolve, RouterStateSnapshot,
         ActivatedRouteSnapshot } from '@angular/router';

import { TravelJournalApi }  from './../travel-journal-api.service';

@Injectable()
export class SystemTableResolver implements Resolve<any> {
  constructor(private api: TravelJournalApi, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.api.getByCount();
  }
}
