
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TiendaRoutingModule } from './tienda-routing.module';


//Componentes
import { TiendaComponent } from './pages/tienda/tienda.component';
import { SacarTurnoComponent } from './pages/sacar-turno/sacar-turno.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { CardComponent } from './pages/tienda/card/card.component';
import { CrudComponent } from './pages/crud/crud.component';
import { VerProductoComponent } from './pages/ver-producto/ver-producto.component';
import { AcercaDeComponent } from './pages/acerca-de/acerca-de.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductoCrudComponent } from './pages/crud/producto-crud/producto-crud.component';
import { UsuarioCrudComponent } from './pages/crud/usuario-crud/usuario-crud.component';
import { TurnoCrudComponent } from './pages/crud/turno-crud/turno-crud.component';




@NgModule({
    declarations:[
        TiendaComponent,
        SacarTurnoComponent,
        ContactoComponent,
        CardComponent,
        CrudComponent,
        VerProductoComponent,
        AcercaDeComponent,
        ListadoComponent,
        HomeComponent,
        ProductoCrudComponent,
        UsuarioCrudComponent,
        TurnoCrudComponent,
    ],
    exports:[
        TiendaComponent,
        SacarTurnoComponent,
        ContactoComponent,
        CardComponent,
        CrudComponent,
        VerProductoComponent,
        AcercaDeComponent,
        ListadoComponent,
    ],
    imports:[
        CommonModule,
        SharedModule,
        RouterModule,
        FormsModule,
        TiendaRoutingModule,
        ReactiveFormsModule
    ]

})
export class TiendaModule{}

