import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RESTService<T, K> {
  
 private servidor: string ="http://localhost:3000";

  constructor(public endPoint: string, public id: K, public  http: HttpClient) {

   }
  //url generica
   get url(){
      return `${this.servidor}/${this.endPoint}`;
   }

   public buscarTodos(): Observable<T[]>{
     return this.http.get<T[]>(this.url);
   }

   public insertar(tipo: T): Observable<T>{
    return this.http.post<T>(this.url, tipo);
  }

  public borrar(tipo: T): Observable<T>{
    return this.http.delete<T>(`${this.url}/${tipo[`${this.id}`]}`);
  }


  public actualizar(tipo: T): Observable<T>{
    return this.http.put<T>(`${this.url}/${tipo[`${this.id}`]}`, tipo);
  }

  public buscarUno(id: K): Observable<T>{
     return this.http.get<T>(`${this.url}/${this.id}`);
  }
  
}
