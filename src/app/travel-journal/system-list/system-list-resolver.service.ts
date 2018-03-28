import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

import { SystemListApiService } from './system-list-api.service';

@Injectable()
export class SystemListResolver implements Resolve<any> {
  constructor(private api: SystemListApiService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.api.get({});
  }
}
