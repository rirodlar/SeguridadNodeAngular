import { ProductosRESTService } from './../servicio/productos-rest.service';
import { Component, OnInit } from '@angular/core';
import { Producto } from '../dominio/producto';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-productos',
  templateUrl: './detalle-productos.component.html',
  styleUrls: ['./detalle-productos.component.scss']
})
export class DetalleProductosComponent implements OnInit {

  producto: Producto;
  constructor(public servicio: ProductosRESTService, public route: ActivatedRoute) {
      
   }

  ngOnInit() {
          this.route.paramMap.subscribe((parametros)=>{
                  //console.log(parametros.get("id"));

                  this.servicio.buscarPorId(parametros.get("id")).subscribe((datos) =>{
                    this.producto = datos;
                });
          });

    
     
  }

}
