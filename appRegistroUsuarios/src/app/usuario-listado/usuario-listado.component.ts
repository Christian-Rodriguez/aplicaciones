import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-usuario-listado',
  templateUrl: './usuario-listado.component.html',
  styleUrls: ['./usuario-listado.component.css']
})
export class UsuarioListadoComponent implements OnInit {
  listaUsuarios: Array<Array<string>> = []
  obj: UsuarioService
  constructor(usuarioService: UsuarioService) {
     this.obj = usuarioService
   }

  ngOnInit() {
    this.listar();
  }

  listar() {
    this.listaUsuarios = this.obj.listarUsuarios()
  }

}
