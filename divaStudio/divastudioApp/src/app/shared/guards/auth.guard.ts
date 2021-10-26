import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioDTO } from 'src/app/auth/interfaces/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{

  constructor(private router:Router){}

  canActivate()
    {
      let usuario: UsuarioDTO = JSON.parse(<string>localStorage.getItem('usuario'));
      if (usuario == null) {
          this.router.navigate(['/auth/login']);
          return false;
      }
      return true;
  }
}
