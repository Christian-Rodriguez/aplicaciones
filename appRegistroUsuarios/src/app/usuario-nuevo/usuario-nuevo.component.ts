import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-usuario-nuevo',
  templateUrl: './usuario-nuevo.component.html',
  styleUrls: ['./usuario-nuevo.component.css']
})
export class UsuarioNuevoComponent implements OnInit {
  nombreUsuario: string = ""
  obj2:UsuarioService

  constructor(usuarioService: UsuarioService) {
    this.obj2 = usuarioService
  }

  ngOnInit() {
  }

  insertar(){
    this.obj2.insertarUsuario(this.nombreUsuario)
  }

}
