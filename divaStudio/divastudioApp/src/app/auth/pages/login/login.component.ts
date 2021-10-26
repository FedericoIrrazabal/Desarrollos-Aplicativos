import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario, UsuarioDTO } from '../../interfaces/usuario.interface';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(private router: Router, private __authservice:AuthService, private formBuilder: FormBuilder) { 
    this.form = this.formBuilder.group({
      email: [
        null,
        [
          Validators.required,
          Validators.email
        ]
      ],
      password: [
        null,
        [
          Validators.required,
          Validators.minLength(8)
        ]
      ]
    })
  }

  ngOnInit(): void {
  }

  login(){
    this.__authservice.login(this.form.value.email).subscribe(usuarios => {
      if (usuarios){
        usuarios.map(usuario => {
          if(usuario.email === this.form.value.email){
            if(atob(usuario.password) === this.form.value.password){
              let usuarioDTO:UsuarioDTO = usuario;
              delete usuarioDTO.password
              localStorage.setItem('usuario',JSON.stringify(usuarioDTO))
              this.router.navigate(['./tienda'])
              console.log(usuarioDTO)
            }
          }
        })
      }
      else{
        console.log('F')
      }
    })


  }

}
