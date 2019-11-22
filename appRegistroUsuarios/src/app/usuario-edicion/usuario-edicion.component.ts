import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-usuario-edicion',
  templateUrl: './usuario-edicion.component.html',
  styleUrls: ['./usuario-edicion.component.css']
})
export class UsuarioEdicionComponent implements OnInit {
  id: number
  obj3:UsuarioService
  //lista:Array<Array<string>>

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => { this.id = +params['id']; })
  }
  cargar(){
    //this.lista = this.obj3.listarUsuarios()
    //for (let usuario of this.lista){
    //  console.log(usuario);
    //}
    //this.obj3.cargarUsuario(this.id)

  }

}
