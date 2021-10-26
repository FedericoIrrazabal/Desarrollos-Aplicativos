import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../interfaces/usuario.interface';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

 usuario:FormGroup;

  constructor(private __authservice:AuthService,  private router:Router, private formBuilder:FormBuilder) {
    this.usuario = this.formBuilder.group({
      name:[
        null,
        [
          Validators.required
        ]
      ],
      email:[
        null,
        [
          Validators.required,
          Validators.email
        ]
      ],
      password:[
        null,
        [
          Validators.required,
          Validators.minLength(8)
        ]
      ],
      avatar:[
        null,
        [
          Validators.required
        ]
      ],
      city:[
        null,
        [
          Validators.required
        ]
      ],
      zipcode:[
        null,
        [
          Validators.required,
          Validators.maxLength(4)
        ]
      ]
      
    })

   }

  ngOnInit(): void {
  }

  agregarRegistro(){

    this.usuario.value.password = btoa(this.usuario.value.password)
    console.log(this.usuario.value.password)
    console.log(atob(this.usuario.value.password))
    

    this.__authservice.registroUsuario(this.usuario.value).subscribe(resp => {
      if(resp){
        this.router.navigate(['/auth/login'])
      }
    })
  }

}
