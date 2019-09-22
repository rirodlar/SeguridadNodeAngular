import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Producto } from '../dominio/producto';

@Component({
  selector: 'app-fila-producto',
  templateUrl: './fila-producto.component.html',
  styleUrls: ['./fila-producto.component.scss']
})
export class FilaProductoComponent implements OnInit {

  @Output() eventoBorrar = new EventEmitter<Producto>();
  @Output() eventoDetalle = new EventEmitter<Producto>();
  @Output() eventoEditar2 = new EventEmitter<Producto>();
  @Output() eventoEditar  = new EventEmitter<Producto>();
  @Output() eventoSalvar  = new EventEmitter<Producto>();

  @Input()  productoEditado: Producto;
  @Input()  producto: Producto;

  
  constructor() { }

  ngOnInit() {
  }

  borrar(producto: Producto):void{
    console.log(producto);

    this.eventoBorrar.emit(producto);
  }

  detalle(producto: Producto ):void{
    console.log("detalle");
      this.eventoDetalle.emit(producto);
  }


  editar2(producto: Producto):void{
      this.eventoEditar2.emit(producto);
  }

  editar(producto: Producto):void{
      console.log("editar");
      this.eventoEditar.emit(producto);
   }    

   salvar(producto: Producto):void{
     
        this.eventoSalvar.emit(producto);
    }
}
