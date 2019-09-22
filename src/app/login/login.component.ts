import { Component, OnInit } from '@angular/core';
import {Usuario} from '../dominio/usuario';
import {LoginService} from '../servicio/login.service';
import {Router} from '@angular/router';
import {JwtTokenService} from '../servicio/jwt-token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  usuario: Usuario = new Usuario();

  constructor(private loginService: LoginService, private router: Router, private jwtTokenService: JwtTokenService) {

  }

  ngOnInit() {
  }

  validar(usuario: Usuario) {
    //console.log(usuario);
    this.loginService.login(usuario).subscribe((datos: any)=>{
      console.log(datos);
      this.jwtTokenService.token = datos.token;

      this.router.navigate(["lista"]);
    })

  }
}
