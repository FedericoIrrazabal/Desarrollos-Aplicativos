import { Component, OnInit } from '@angular/core';
import { TurnService } from '../../../services/turn.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Turno } from '../../../interfaces/turn.interface';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-turno-crud',
  templateUrl: './turno-crud.component.html',
  styleUrls: ['./turno-crud.component.css']
})
export class TurnoCrudComponent implements OnInit {

  form:FormGroup

  turnos:Turno[]=[];

  turno:Turno ={
    name: '',
    date: '',
    time: '',
    jobs: '',
  }

  constructor(private __turnService:TurnService, private modal:NgbModal, private formBuilder:FormBuilder) { 
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
      jobs:[
        null,
        [
          Validators.required,
          Validators.maxLength(50)
        ]
      ]
    })
  }

  ngOnInit(): void {
    this.mostrarTurnos()
  }

  mostrarTurnos(){
    this.__turnService.mostrarTurnos().subscribe(turnos => {
      this.turnos = turnos;
    })
  }

  mandarId(id:string){
    console.log(id)
    this.__turnService.verTurno(id).subscribe(turno => {
      this.turno = turno;
    })
}

openModal(contenido:any){
  this.modal.open(contenido)
}

eliminar(id:string){
  console.log(id)
  this.__turnService.eliminarTurno(id!).subscribe(resp => {
    if(resp){
      this.mostrarTurnos()
    }
  })
}

guardar(){
    this.__turnService.actualizarTurno(this.turno).subscribe(resp => {
      if(resp){
        this.mostrarTurnos();
        this.limpiarInputs();
      }
    })
  }

  limpiarInputs(){
    this.turno.name = '';
    this.turno.date = '';
    this.turno.time = '';
    this.turno.jobs = ''
  }

  cerrar(){
    this.limpiarInputs();
  }
 

}

