import { Component, OnInit } from '@angular/core';
import {Aparelhos} from "../../../models/aparelhos.class";
import {AparelhosController} from "../../../controlers/aparelhos.controller";
import {FormatacaoUtil} from "../../../util/formatacao.util";
declare var $:any;
@Component({
  selector: 'cadastrar-aparelhos',
  templateUrl: './cadastrar_aparelho.view.html',
  styleUrls: ['./cadastrar_aparelho.view.css']
})
export class CadastrarAparelhosView implements OnInit {
  
  public aparelho;
  constructor(public aparelhoCtrl:AparelhosController) {
    this.aparelho = new Aparelhos();
  }

  ngOnInit() {
  }

  cadastrarAparelhos(){
      $("#modalCadastroAparelho").modal('hide');
      this.aparelhoCtrl.cadastrarAparelho(this.aparelho);
      window.location.reload();
      
  	 
  }
}