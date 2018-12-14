import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {TabModule} from 'angular-tabs-component';
import { AppComponent } from './app.component';
import {CadastrarClientesView} from "../views/clientes/cadastrar_clientes/cadastrar_clientes.view";
import {ListarClientesView} from "../views/clientes/listar_clientes/listar_clientes.view";
import {ListarAparelhosView} from "../views/aparelhos/listar/listar_aparelhos.view";
import {CadastrarAparelhosView} from "../views/aparelhos/cadastrar/cadastrar_aparelhos.view";
import {ListarPagamentosView} from "../views/pagamentos/listar/listar_pagamentos.view";
import {CadastrarPagamentosView} from "../views/pagamentos/cadastrar/cadastrar_pagamento.view";
import {ListarExerciciosView} from "../views/exercicios/listar/listar_exercicios.view";
import {CadastrarExerciciosView} from "../views/exercicios/cadastrar/cadastrar_exercicios.view";
import { BrMaskerModule } from 'brmasker-ionic-3';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {ClientesController} from "../controlers/cliente.controller";
import {ClientesDao} from "../Dao/clientes.dao";
import {AparelhosController} from "../controlers/aparelhos.controller";
import {AparelhoDao} from "../Dao/aparelho.dao";
import {PagamentosController} from "../controlers/pagamentos.controller";
import {PagamentoDao} from "../Dao/pagamento.dao";
import {ExerciciosController} from "../controlers/exercicios.controller";
import {ExerciciosDao} from "../Dao/exercicios.dao";
@NgModule({
  declarations: [
    AppComponent,
    CadastrarClientesView,
    ListarClientesView,
    CadastrarAparelhosView,
    ListarAparelhosView,
    ListarPagamentosView,
    CadastrarPagamentosView,
    ListarExerciciosView,
    CadastrarExerciciosView
  ],
  imports: [
    BrowserModule,
    TabModule,
    BrMaskerModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ClientesController,ClientesDao,AparelhosController,AparelhoDao,PagamentosController,
  PagamentoDao,ExerciciosController,ExerciciosDao],
  bootstrap: [AppComponent]
})
export class AppModule { }
