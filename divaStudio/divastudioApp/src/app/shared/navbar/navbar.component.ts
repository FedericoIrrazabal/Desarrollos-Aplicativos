import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioDTO } from 'src/app/auth/interfaces/usuario.interface';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  usuario: UsuarioDTO = JSON.parse(<string>localStorage.getItem('usuario'));
  
  termino: string = "";

  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log(this.usuario)
  }


  buscar(){
    this.router.navigate(["/tienda/listado/" + this.termino])
    }

  

  cerrarSesion(){
    localStorage.clear()
    this.router.navigate(['/auth/login'])

  }
}



