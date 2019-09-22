import { Component, OnInit } from '@angular/core';
import { Producto } from '../dominio/producto';
import { ProductosRESTService } from '../servicio/productos-rest.service';
import { flatMap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario-productos',
  templateUrl: './formulario-productos.component.html',
  styleUrls: ['./formulario-productos.component.scss']
})
export class FormularioProductosComponent implements OnInit {

  
  
  productoNuevo: Producto;

  constructor(public servicio: ProductosRESTService, public router: Router) { 
    this.productoNuevo = new Producto(0, '', 0,'');
  }

  ngOnInit() {
  }


  insertar(producto: Producto) {
    /*this.servicio.insertar(producto).pipe(flatMap(e=>this.servicio.buscarTodos()))
    .subscribe(datos => {
        //this.lista = datos;
    })*/
    this.servicio.insertar(producto)
        .subscribe(() => {
            this.router.navigate(['/lista']);

    });

  }


}
