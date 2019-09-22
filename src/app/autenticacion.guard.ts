import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {JwtTokenService} from './servicio/jwt-token.service';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionGuard implements CanActivate  {


  constructor(private router: Router, private jwtTokenService: JwtTokenService){

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    //si tienes un tocken activo
    if(this.jwtTokenService.token){
      return true;
    }
    return this.router.navigate(["login"]);
    return false;
  }

}
