import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { FormularioProductosComponent } from './formulario-productos/formulario-productos.component';
import { DetalleProductosComponent } from './detalle-productos/detalle-productos.component';
import { FormularioProductosEdicionComponent } from './formulario-productos-edicion/formulario-productos-edicion.component';
import { ErrorComponent } from './error/error.component';
import { IvaPipe } from './iva.pipe';
import { FilaProductoComponent } from './fila-producto/fila-producto.component';
import { LoginComponent } from './login/login.component';
import {JWT_OPTIONS, JwtModule} from '@auth0/angular-jwt';
import {JwtTokenService} from './servicio/jwt-token.service';


export function jwtOptionsFactory(tokenService: JwtTokenService) {
  return {
    tokenGetter: () => {
      return tokenService.token;
    },
       whitelistedDomains: ["localhost:3000"],
       blacklistedRoutes: ["localhost:3000/login/"]
  }
}


@NgModule({
  declarations: [
    AppComponent,
    ListaProductosComponent,
    FormularioProductosComponent,
    DetalleProductosComponent,
    FormularioProductosEdicionComponent,
    ErrorComponent,
    IvaPipe,
    FilaProductoComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      jwtOptionsProvider: {
        provide: JWT_OPTIONS,
        useFactory: jwtOptionsFactory,
        deps: [JwtTokenService]
      }
    })
  ],
  providers: [JwtTokenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
