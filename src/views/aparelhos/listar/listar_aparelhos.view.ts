import { Component, OnInit } from '@angular/core';
import {AparelhosController} from "../../../controlers/aparelhos.controller";
import {FormatacaoUtil} from "../../../util/formatacao.util";
declare var $:any;
@Component({
  selector: 'listar-aparelhos',
  templateUrl: './listar_aparelho.view.html',
  styleUrls: ['./listar_aparelho.view.css']
})
export class ListarAparelhosView implements OnInit {

  public aparelhos;
  public textoBusca;
  constructor(public aparelhoCtrl:AparelhosController) {

  }

  async ngOnInit() {
    await this.carregarAparelhos();
  }


  async buscarAparelho(){
    if(this.textoBusca === ""){
      this.aparelhos = await this.aparelhoCtrl.getAparelhos()
    }else{
      this.aparelhos = await this.aparelhoCtrl.getAparelhos()
      this.aparelhos = this.aparelhos.filter(aparelho=>aparelho.nome.toLowerCase().indexOf(this.textoBusca) > -1);

    }
  }
  async carregarAparelhos(){
     this.aparelhos = await this.aparelhoCtrl.getAparelhos()
  }
}