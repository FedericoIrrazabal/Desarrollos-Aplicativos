import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioDTO } from 'src/app/auth/interfaces/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate{
  
  constructor(private router:Router){}

  canActivate(){
    let usuario: UsuarioDTO = JSON.parse(<string>localStorage.getItem('usuario'));
    if (!usuario.admin) {
      this.router.navigate(['/tienda/tienda']);
      return false;
    }
    return true;
  }
}
