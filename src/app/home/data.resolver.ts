import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { DataService } from '../data.service';

@Injectable()
export class DataResolver implements Resolve<any> {
  constructor(private dataservice: DataService, private router: Router) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.dataservice.getusersData();
  }
}

@Injectable()
export class DataResolver2 implements Resolve<any> {
  constructor(private dataservice: DataService, private router: Router) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.dataservice.getcarousel();
  }
}

@Injectable()
export class DataResolver3 implements Resolve<any> {
  constructor(private dataservice: DataService, private router: Router) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.dataservice.getproductdata();
  }
}

@Injectable()
export class DataResolver4 implements Resolve<any> {
  constructor(private dataservice: DataService, private router: Router) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.dataservice.getcart();
  }
}

@Injectable()
export class DataResolver5 implements Resolve<any> {
  constructor(private dataservice: DataService, private router: Router) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.dataservice.getproductdata();
  }
}
