import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../../../auth/interfaces/usuario.interface';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../../../../auth/services/auth.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-usuario-crud',
  templateUrl: './usuario-crud.component.html',
  styleUrls: ['./usuario-crud.component.css']
})
export class UsuarioCrudComponent implements OnInit {
  
  form:FormGroup;

  usuarios:Usuario[] = [];

  usuario:Usuario = {
    name:'',
    email:'',
    password:'',
    admin:false,
    avatar: '',
    city: '',
    zipcode:''
  }

  constructor(private __authService:AuthService,private modal:NgbModal, private formBuilder:FormBuilder) { 
    this.form = this.formBuilder.group({
      name:[
        null,
        [
          Validators.required
        ]
      ],
      avatar:[
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
      admin:[]
    })
  }

  ngOnInit(): void {
    this.mostrarUsuarios();
  }

  mostrarUsuarios(){
    this.__authService.mostrarUsuarios().subscribe(usuarios => {
      this.usuarios = usuarios;
    })
  }

  mandarId(id:string){
    this.__authService.verUsuario(id).subscribe(usuario => {
      this.usuario = usuario;
    })
}

openModal(contenido:any){
  this.modal.open(contenido)
}

eliminar(id:string){
  this.__authService.eliminarUsuario(id!).subscribe(resp => {
    if(resp){
      this.mostrarUsuarios()
    }
  })
}

guardar(){

  this.usuario.admin = this.form.value.admin
  console.log(this.usuario.admin)

    this.__authService.actualizarUsuario(this.usuario).subscribe(resp => {
      if(resp){
        this.mostrarUsuarios();
        this.limpiarInputs();
      }
    })
  }

  limpiarInputs(){
    this.usuario.name = '';
    this.usuario.email = '';
    this.usuario.password = '';
    this.usuario.avatar = '';
    this.usuario.city = '';
    this.usuario.zipcode = '';
  }

  cerrar(){
    this.limpiarInputs();
  }

}
