import { ErrorComponent } from './error/error.component';
import { FormularioProductosEdicionComponent } from './formulario-productos-edicion/formulario-productos-edicion.component';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormularioProductosComponent } from './formulario-productos/formulario-productos.component';
import { DetalleProductosComponent } from './detalle-productos/detalle-productos.component';
import {LoginComponent} from './login/login.component';
import {AutenticacionGuard} from './autenticacion.guard';


const routes: Routes = [

  {
    path:"login", component: LoginComponent
  },
  {
    path:"lista", component: ListaProductosComponent, canActivate:[AutenticacionGuard]
  },
  {
    path:"formulario", component: FormularioProductosComponent, canActivate:[AutenticacionGuard]
  },
  {
    path:"detalle/:id", component: DetalleProductosComponent , canActivate:[AutenticacionGuard]
  },
  {
    path:"formularioEdicion/:id", component: FormularioProductosEdicionComponent , canActivate:[AutenticacionGuard]
  },
  {
    path:"", redirectTo: "/login", pathMatch: "full"
  },
  {
    path:"error", component: ErrorComponent
  },
  {
    path:"**", redirectTo: "/error", pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
