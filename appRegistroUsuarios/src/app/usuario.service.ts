import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private lista: Array<string> = ["José", "Tomás", "Pedro"]
  constructor() { }

  insertarUsuario(nombre:string){
    this.lista.push(nombre)
  }

  listarUsuarios(){
    return this.lista
  }
}
