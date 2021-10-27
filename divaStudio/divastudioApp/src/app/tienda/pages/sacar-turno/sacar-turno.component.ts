import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TurnService } from '../../services/turn.service';
import { Router } from '@angular/router';
import { UsuarioDTO } from '../../../auth/interfaces/usuario.interface';

@Component({
  selector: 'app-sacar-turno',
  templateUrl: './sacar-turno.component.html',
  styleUrls: ['./sacar-turno.component.css']
})
export class SacarTurnoComponent implements OnInit {

  usuario: UsuarioDTO = JSON.parse(<string>localStorage.getItem('usuario'));

  form:FormGroup;

  constructor(private formBuilder:FormBuilder, private __turnService:TurnService, private router:Router) { 
    this.form = this.formBuilder.group({
      name:[
        null,
        [
          Validators.required
        ]
      ],
      date:[
        null,
        [
          Validators.required
        ]
      ],
      time:[
        null,
        [
          Validators.required
        ]
      ],
    })

  }

  ngOnInit(): void {
  }


  agregarTurno(){
    this.__turnService.agregarTurno(this.form.value).subscribe(resp => {
      if(resp){
        this.router.navigate(['/tienda/tienda'])
      }
    })

  }

}
