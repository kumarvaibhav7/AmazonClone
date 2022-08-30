import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';


export interface savecart{
  savecarttojson:()=>Observable<boolean>|Promise<boolean>|boolean;
}

@Injectable({
  providedIn: 'root'
})
export class GuardsGuard implements CanDeactivate<savecart> {
  canDeactivate(
    component: savecart,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log("candeactivate");
    return component && component.savecarttojson ? component.savecarttojson() :true;
  }
  
}
