import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap, Params } from '@angular/router';
import { UsuarioService } from '../usuario.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-usuario-edicion',
  templateUrl: './usuario-edicion.component.html',
  styleUrls: ['./usuario-edicion.component.css']
})
export class UsuarioEdicionComponent implements OnInit {
  idSeleccionado: number
  obj3:UsuarioService
  suscripcion: Subscription
  nombreUsuario: string = ""

  constructor(usuarioService: UsuarioService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.obj3 = usuarioService
  }

  ngOnInit() {
    //this.idSeleccionado = +this.activatedRoute.snapshot.paramMap.get("id")
    //console.log("Fuera de la suscripción", this.idSeleccionado)

    this.suscripcion = this.activatedRoute.paramMap.subscribe(
      (parametros: Params) => {
        this.idSeleccionado = parametros.params.id
        console.log("Desde una suscripción", this.idSeleccionado)

        this.nombreUsuario = this.obj3.cargarUsuario(this.idSeleccionado)
      }
    )
  }

}
