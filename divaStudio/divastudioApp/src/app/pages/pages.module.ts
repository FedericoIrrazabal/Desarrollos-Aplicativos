
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

//Componentes
import { TiendaComponent } from './tienda/tienda.component';
import { SacarTurnoComponent } from './sacar-turno/sacar-turno.component';
import { ContactoComponent } from './contacto/contacto.component';
import { AyudaComponent } from './ayuda/ayuda.component';
import { CardComponent } from './tienda/card/card.component';



@NgModule({
    declarations:[
        TiendaComponent,
        SacarTurnoComponent,
        ContactoComponent,
        AyudaComponent,
        CardComponent
    ],
    exports:[
        TiendaComponent,
        SacarTurnoComponent,
        ContactoComponent,
        AyudaComponent,
        CardComponent

    ],
    imports:[
        CommonModule
    ]

})
export class PagesModule{}

