import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private lista: Array<Array<string>> = [["1","José"], ["2","Tomás"], ["3","Pedro"]]
  id:number = 0
  constructor() { }

  insertarUsuario(nombre:string){
    this.id = this.lista.length + 1
    this.lista.push([String(this.id), nombre])
  }

  listarUsuarios() {
    return this.lista
  }




}
