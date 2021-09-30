
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';




//Componentes
import { TiendaComponent } from './tienda/tienda.component';
import { SacarTurnoComponent } from './sacar-turno/sacar-turno.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CardComponent } from './tienda/card/card.component';
import { CrudComponent } from './crud/crud.component';
import { VerProductoComponent } from './ver-producto/ver-producto.component';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { ListadoComponent } from './listado/listado.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
    declarations:[
        TiendaComponent,
        SacarTurnoComponent,
        ContactoComponent,
        AcercaDeComponent,
        CardComponent,
        CrudComponent,
        VerProductoComponent,
        AcercaDeComponent,
        ListadoComponent,
        
    ],
    exports:[
        TiendaComponent,
        SacarTurnoComponent,
        ContactoComponent,
        AcercaDeComponent,
        CardComponent,
        CrudComponent,
        VerProductoComponent,
  

    ],
    imports:[
        CommonModule,
        SharedModule,
        RouterModule,
        FormsModule
    ]

})
export class PagesModule{}

