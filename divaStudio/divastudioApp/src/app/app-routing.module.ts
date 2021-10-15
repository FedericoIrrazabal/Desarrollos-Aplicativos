import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TiendaComponent } from './pages/tienda/tienda.component';
import { SacarTurnoComponent } from './pages/sacar-turno/sacar-turno.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { VerProductoComponent } from './pages/ver-producto/ver-producto.component';
import { CrudComponent } from './pages/crud/crud.component';
import { AcercaDeComponent } from './pages/acerca-de/acerca-de.component';
import { ListadoComponent } from './pages/listado/listado.component';

const routes: Routes = [
    {
        path:'',
        component:TiendaComponent,
        pathMatch:'full'
    },
    {
        path:'turno',
        component:SacarTurnoComponent,
    },
    {
        path:'contacto',
        component:ContactoComponent
    },
    {
        path:'acerca',
        component:AcercaDeComponent
    },
    {
        path:'listado/:termino',
        component:ListadoComponent
    },
    {
        path:'crud',
        component:CrudComponent
    },
    {
        path:'producto/:id',
        component: VerProductoComponent
    },
    {
        path:'**',
        redirectTo:''
    }
];

@NgModule ({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule {}