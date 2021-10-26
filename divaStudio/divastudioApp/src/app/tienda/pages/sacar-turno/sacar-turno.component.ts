import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-sacar-turno',
  templateUrl: './sacar-turno.component.html',
  styleUrls: ['./sacar-turno.component.css']
})
export class SacarTurnoComponent implements OnInit {

  turno:FormGroup;

  constructor(private formBuilder:FormBuilder) { 
    this.turno = this.formBuilder.group({
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
          Validators.required
        ]
      ],
    })

  }

  ngOnInit(): void {
  }

}
