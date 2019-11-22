import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { RutaNoEncontradaComponent } from './ruta-no-encontrada/ruta-no-encontrada.component';
import { UsuarioListadoComponent } from './usuario-listado/usuario-listado.component';
import { UsuarioEdicionComponent } from './usuario-edicion/usuario-edicion.component';
import { UsuarioNuevoComponent } from './usuario-nuevo/usuario-nuevo.component';

import { RouterModule, Routes } from '@angular/router';
import { UsuarioService } from './usuario.service';

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "home", component: HomeComponent },
  { path: "usuario", component: UsuarioListadoComponent, children:[
    { path: "edicion/:id", component: UsuarioEdicionComponent },
    { path: "nuevo", component: UsuarioNuevoComponent }
  ]},
  { path: "**", component: RutaNoEncontradaComponent }
]


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    UsuarioComponent,
    RutaNoEncontradaComponent,
    UsuarioListadoComponent,
    UsuarioEdicionComponent,
    UsuarioNuevoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
