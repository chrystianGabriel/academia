import { Component, OnInit } from '@angular/core';
import {Clientes} from "../../../models/clientes.class";
import {ClientesController} from "../../../controlers/cliente.controller";
import {AparelhosController} from "../../../controlers/aparelhos.controller";
import {FormatacaoUtil} from "../../../util/formatacao.util";
declare var $:any;
@Component({
  selector: 'cadastrar-clientes',
  templateUrl: './cadastrar_clientes.view.html',
  styleUrls: ['./cadastar_clientes.view.css']
})
export class CadastrarClientesView implements OnInit {
  
  public cliente:Clientes;
  public aparelhos;
  public custo;
  public textoBusca;
  private aux_aparelhos;
  constructor(public aparelhoCtrl:AparelhosController,public clientesCtrl:ClientesController) {
    this.cliente = new Clientes();
    this.custo = 0;
    this.aux_aparelhos = {}
  }

 async ngOnInit() {
     this.aparelhos = await this.aparelhoCtrl.getAparelhos();
  }

  async cadastrarCliente(){
     $("#modalCadastro").modal('hide');
     let util = new FormatacaoUtil();
     this.cliente.telefone = util.formatarTelefone(this.cliente.telefone);
     this.cliente.cpf = util.formatarCPF(this.cliente.cpf);
     this.cliente.endereco.cep = util.formatarCEP(this.cliente.endereco.cep)
  	 let a = await this.clientesCtrl.cadastrarCliente(this.cliente);
     let clienteId = await this.clientesCtrl.getClienteId(this.cliente.cpf);
     for(let key in this.aux_aparelhos){
       let aparelhoId = await this.aparelhoCtrl.getAparelhoId(key);
       await this.aparelhoCtrl.cadastrarAparelhoCliente(clienteId[0]._id,aparelhoId[0]._id)
     }
     window.location.reload();

  }

  adicionarAparelho(codigo,evento,custo){
    if(evento.target.checked == true){
       this.aux_aparelhos[codigo] = true;
       this.custo += parseInt(custo)
    }else{
       this.aux_aparelhos[codigo] = false;
       this.custo -= parseInt(custo)
    }

  }
}