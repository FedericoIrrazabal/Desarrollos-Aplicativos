import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  termino: string = "";

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  buscar(){
    this.router.navigate(["/listado/" + this.termino])
    }

  }



