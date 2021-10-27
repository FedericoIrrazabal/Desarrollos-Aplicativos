import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TiendaComponent } from './pages/tienda/tienda.component';
import { SacarTurnoComponent } from './pages/sacar-turno/sacar-turno.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { AcercaDeComponent } from './pages/acerca-de/acerca-de.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { CrudComponent } from './pages/crud/crud.component';
import { VerProductoComponent } from './pages/ver-producto/ver-producto.component';
import { AuthGuard } from '../shared/guards/auth.guard';
import { HomeComponent } from './pages/home/home.component';
import { AdminGuard } from '../shared/guards/admin.guard';
import { CommonModule } from '@angular/common';
import { UsuarioCrudComponent } from './pages/crud/usuario-crud/usuario-crud.component';
import { ProductoCrudComponent } from './pages/crud/producto-crud/producto-crud.component';
import { TurnoCrudComponent } from './pages/crud/turno-crud/turno-crud.component';

const routes : Routes = [
  {
    path: '',
    component:HomeComponent,
    children: [
      {
        path:'tienda',
        component:TiendaComponent,
        canActivate:[AuthGuard]
      },
      {
        path:'turno',
        component:SacarTurnoComponent
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
        component:CrudComponent,
        canActivate:[AuthGuard,AdminGuard]
      },
      {
        path:'producto/:id',
        component: VerProductoComponent
      },
      {
        path:'usuarioscrud',
        component:UsuarioCrudComponent,
        canActivate:[AuthGuard,AdminGuard]
      },
      {
        path:'productoscrud',
        component:ProductoCrudComponent,
        canActivate:[AuthGuard,AdminGuard]
      },
      {
        path:'turnoscrud',
        component:TurnoCrudComponent,
        canActivate:[AuthGuard,AdminGuard]
      },
      {
        path:'**',
        redirectTo:'tienda'
      }
    ]
  }
 
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ],
  providers:[
    AuthGuard,
    AdminGuard
  ]
})
export class TiendaRoutingModule { }
