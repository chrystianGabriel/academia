import { Component, OnInit } from '@angular/core';
import {Clientes} from "../../../models/clientes.class";
import {ClientesController} from "../../../controlers/cliente.controller";
import {FormatacaoUtil} from "../../../util/formatacao.util";
declare var $:any;
@Component({
  selector: 'listar-clientes',
  templateUrl: './listar_clientes.view.html',
  styleUrls: ['./listar_clientes.view.css']
})
export class ListarClientesView implements OnInit {



  public clientes;
  public textoBusca;
  constructor(public clientesCtrl:ClientesController) {

  }

  ngOnInit() {
    this.carregarClientes()
    let ref = this;
   
  }
  async buscarCliente(){
    if(this.textoBusca === ""){
      this.clientes = await this.clientesCtrl.getClientes();
    }else{
      this.clientes = await this.clientesCtrl.getClientes();
      this.clientes = this.clientes.filter(cliente=>cliente.nome.toLowerCase().indexOf(this.textoBusca) > -1);

    }
  }
  async carregarClientes(){
    this.clientes = await this.clientesCtrl.getClientes();
  }

  
}