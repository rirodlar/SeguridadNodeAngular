import { Injectable } from '@angular/core';
import { Producto } from '../dominio/producto';

//singleton ( unico objeto)
@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  lista: Producto[] = [];
  constructor() { 
        this.lista.push(
          new Producto(1,"telefono", 300,''),
          new Producto(2, "tablet",200,'')
        )
  }

  public buscarTodos(): Producto[]{
    return this.lista;
  }

  public borrar(producto: Producto):void{
      let indice = this.lista.indexOf(producto);

      this.lista.splice(indice, 1);
  }

  public insertar(producto:Producto):void{
    this.lista.push(producto);
  }
}
