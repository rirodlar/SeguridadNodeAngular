import { HttpClient } from '@angular/common/http';
import { Producto } from './../dominio/producto';
import { Component, OnInit } from '@angular/core';
import { ProductosRESTService } from '../servicio/productos-rest.service';
import {flatMap, map} from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.scss']
})
export class ListaProductosComponent implements OnInit {

 

  lista: Producto[] = [];
  productoEditado: Producto;
  filtroConcepto: string = "";

  keyUp = new Subject<KeyboardEvent>();


  constructor(public servicio: ProductosRESTService, public router: Router) {
   // this.productoNuevo = new Producto(0, '', 0);
  //  this.lista = servicio.buscarTodos();

    this.keyUp.pipe(map((event:any) =>{
      console.log(event.target.value);

        return event.target.value;
    })).pipe(flatMap((texto)=> {
      console.log(texto);
          return this.servicio.buscarPorConcepto(texto);
    })).subscribe((datos) =>{
            console.log(datos);
            this.lista = datos;
    });
  }

  ngOnInit() {

    this.servicio.buscarTodos().subscribe((datos) =>{
        console.log(datos);
        this.lista = datos;
    })
  }

  /*
get listaFiltrada() {
    console.log("listaFiltrada");
    if (this.filtroConcepto == "") {
      return this.lista;
    }
    return this.lista.filter((p) => p.concepto.startsWith(this.filtroConcepto));
  }
*/
  borrar(producto: Producto) {
    //encadename un tuberia ( aplana la respuesta ) invocar otro observabke
    this.servicio.borrar(producto).pipe(flatMap(e => this.servicio.buscarTodos()))
     .subscribe(datos =>{
        this.lista = datos;
    });
  }


  editar(producto: Producto) {
    console.log("editar");
    this.productoEditado = producto;
  }

  detalle(producto: Producto){
    console.log(producto);

    this.router.navigate(["detalle", producto.id]);
  }

  editar2(producto: Producto){
    console.log(producto);

    this.router.navigate(["formularioEdicion", producto.id]);
  }

 

  salvar(producto: Producto) {
    console.log("salvando %o", producto);
    this.servicio.actualizar(producto).pipe(flatMap(e => this.servicio.buscarTodos()))
    .subscribe(datos =>{
       this.lista = datos;
   });
  
  }

  filtrarPorConcepto(evento){
        console.log(evento.target.value);
  }
  

  borrarProductoEvento(producto: Producto){
    this.borrar(producto);  
    console.log(producto);
  }

  detalleProductoEvento(producto: Producto){
    console.log("detalleProductoEvento" + producto);
     this.detalle(producto);
  }

  editar2ProductoEvento(producto: Producto){
    this.editar2(producto);
  }

  editarProductoEvento(producto: Producto){
    this.editar(producto);
  }

  salvarProductoEvento(producto:Producto){
    this.salvar(producto);
  }


}
