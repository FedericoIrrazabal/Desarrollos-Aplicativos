
import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../../interfaces/product.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() producto : Product | undefined;

  constructor() { 
    
  }

  ngOnInit(): void {
  }

}
