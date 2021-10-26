import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';



const routes: Routes = [
    {
        path:'auth',
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
    },
    {
        path:'tienda',
        loadChildren: () => import('./tienda/tienda.module').then(m => m.TiendaModule)
    },
    {
        path:'**',
        redirectTo:'auth',
    }
];

@NgModule ({
    imports:[
        CommonModule,
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule {}