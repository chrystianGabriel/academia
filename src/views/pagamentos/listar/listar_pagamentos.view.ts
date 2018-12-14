import { Component, OnInit } from '@angular/core';
import {PagamentosController} from "../../../controlers/pagamentos.controller"
@Component({
	selector: 'listar-pagamentos',
	templateUrl: './listar_pagamentos.view.html',
	styleUrls: ['./listar_pagamentos.view.css']
})
export class ListarPagamentosView implements OnInit {
	public pagamentos;
	public textoBusca;
	constructor(public pagamentoCtrl:PagamentosController){

	}
	async ngOnInit() {
		this.pagamentos = await this.pagamentoCtrl.getPagamento();
	}
	async buscarPagamento(){
		if(this.textoBusca === ""){
			this.pagamentos = await this.pagamentoCtrl.getPagamento();
		}else{
			this.pagamentos = await this.pagamentoCtrl.getPagamento();
			this.pagamentos = this.pagamentos.filter(pagamento=>pagamento.cliente.nome.toLowerCase().indexOf(this.textoBusca) > -1);
		}
	}
}