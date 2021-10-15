import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product.interface';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  productos:Product[] = [];
  
  producto:Product ={
    name : '',
    avatar : '',
    price : '',
    productDescription : '',
  }

  constructor(private __productService:ProductService, private router:Router, private modal:NgbModal) { }

  ngOnInit(): void {
  this.getProductos();
  }

  guardar(){
    if(this.producto.name.trim().length === 0){
      return;
    }
    

    if(this.producto.id){
      this.__productService.actualizarProducto(this.producto).subscribe(producto => {
        console.log(producto)
        this.getProductos();
      })
    }
    else{
      this.__productService.agregarProducto(this.producto).subscribe(resp => {
      console.log(resp)
      this.getProductos();
        })
    }
    
    this.limpiarInputs();
  }

  openModal(contenido:any){
    this.modal.open(contenido)
  }

  getProductos(){
    this.__productService.mostrarProductos().subscribe(productos => {
      this.productos = productos;
    })
  }
  mandarId(id:string){
    console.log(id)
    this.__productService.verProducto(id).subscribe(producto => {
      this.producto = producto;
    })
  
  }
  eliminar(id:string){
    console.log(id)
    this.__productService.eliminarProducto(id!).subscribe(resp => {
      if(resp = 200){
        this.getProductos()
      }
    })
  }
  cerrar(){
    this.limpiarInputs();
  }
  limpiarInputs(){
    this.producto.name = '';
    this.producto.avatar = '';
    this.producto.price = '';
    this.producto.productDescription = ''
  }

}
