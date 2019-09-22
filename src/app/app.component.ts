import { Persona } from './persona';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
 
  title = 'miApp';
  mostrar:boolean = false;

  seleccionada: Persona;

  lista: string[] = ["hola","que","tal"];
  seleccion: string;

  persona: Persona;

  listaPersonas: Persona[] = [];

  ngOnInit(): void {
      this.persona = new Persona("pedro", "perez", 25);

       this.listaPersonas.push(
                new Persona('ricardo', "rodriguez", 35, true, "java"), 
                new Persona("karinna", "sepulveda", 30,false, "python"),
                new Persona("cristoan", "srodriguez", 30, false,"C#")
      );

  }

  ver(){
    this.mostrar = true;
  }

  ocultar(){
    this.mostrar = false;
  }

  seleccionarPersona(persona:Persona):void{
      this.seleccionada = persona;
  }

}
