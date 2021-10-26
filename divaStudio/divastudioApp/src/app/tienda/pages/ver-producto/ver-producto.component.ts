import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap} from "rxjs/operators";
import { ProductService } from '../../services/product.service';
import { Product } from '../../interfaces/product.interface';
import { Comment } from 'src/app/tienda/interfaces/comment.interface';
import { CommentService } from '../../services/comment.service';

@Component({
  selector: 'app-ver-producto',
  templateUrl: './ver-producto.component.html',
  styleUrls: ['./ver-producto.component.css']
})
export class VerProductoComponent implements OnInit {

  producto!: Product;

  comments: Comment [] = [];

  comment: Comment = {
    idProducto : "",
    name : "",
    comment : "",
    punctuation : ""
  }

  constructor(private verProducto: ActivatedRoute, private __productService:ProductService, private __commentService:CommentService) { }

  ngOnInit(): void {

    this.verProducto.params.pipe(switchMap( ({id}) => this.__productService.verProducto(id))).subscribe(producto => {
      this.producto = producto;
      this.comment.idProducto = producto.id!;
      this.mostrarComentarios();
    })

  }

  mostrarComentarios(){
    this.__commentService.mostrarComentarios(this.comment.idProducto).subscribe(comments => {
      this.comments = comments;
  })
}


  guardarComentario(){
    console.log(this.comment)
    if(this.comment.name.trim().length === 0){
      return;
    }
    this.__commentService.agregarComentario(this.comment).subscribe(() => {
      this.mostrarComentarios();
    });
    this.limpiarInputs();
    }

  limpiarInputs(){
    this.comment.name = '';
    this.comment.comment = '';
    this.comment.punctuation = '';
  }

}

