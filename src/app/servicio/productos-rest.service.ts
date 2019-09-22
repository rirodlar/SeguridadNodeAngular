import { Producto } from './../dominio/producto';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RESTService } from '../rest.service';

@Injectable({
  providedIn: 'root'
})
export class ProductosRESTService extends RESTService<Producto, string>{

  constructor(public  http: HttpClient) {
    super("productos","id", http);
  }

  /*public buscarTodos(): Observable<Producto[]>{
   return  this.http.get<Producto[]>("http://localhost:3000/productos") ;
  }*/

 /* public borrar(producto: Producto):Observable<Producto>{
    return this.http.delete<Producto>("http://localhost:3000/productos/${producto.id}");
  }*/

  /*public insertar(producto:Producto):Observable<Producto>{
    return this.http.post<Producto>("http://localhost:3000/productos", producto);
  }*/

  public actualizar(producto: Producto):Observable<Producto>{
    console.log(producto);
   // return this.http.put<Producto>("http://localhost:3000/productos/${producto.id}", producto);
    return this.http.put<Producto>(`http://localhost:3000/productos/${producto.id}`, producto);
  }

  public buscarPorConcepto(concepto:string): Observable<Producto[]>{
    return this.http.get<Producto[]>(`${this.url}/filtro/${concepto}`)
  }

  public buscarPorId(id:string): Observable<Producto>{
    return this.http.get<Producto>(`http://localhost:3000/productos/${id}`);
  }


}
