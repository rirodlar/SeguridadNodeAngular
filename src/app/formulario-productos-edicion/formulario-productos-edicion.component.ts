import { Component, OnInit } from '@angular/core';
import { Producto } from '../dominio/producto';
import { ProductosRESTService } from '../servicio/productos-rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-formulario-productos-edicion',
  templateUrl: './formulario-productos-edicion.component.html',
  styleUrls: ['./formulario-productos-edicion.component.scss']
})
export class FormularioProductosEdicionComponent implements OnInit {


  productoEditar: Producto = new Producto();

  constructor(public servicio: ProductosRESTService, public route: ActivatedRoute, public router: Router) { }

  ngOnInit() {

    this.route.paramMap.subscribe((parametros) => {
      console.log(parametros.get("id"));

      this.servicio.buscarPorId(parametros.get("id")).subscribe((datos) => {

        this.productoEditar = datos;

        console.log(this.productoEditar);
      });
    });

  }

  salvar() {
   
    this.servicio.actualizar(this.productoEditar)
      .subscribe( ()=> {
       this.router.navigate(["/lista"]);
      });
  }

}
