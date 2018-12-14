import { Component, OnInit } from '@angular/core';
import {PagamentosController} from "../../../controlers/pagamentos.controller";
import {ClientesController} from "../../../controlers/cliente.controller";
import {AparelhosController} from "../../../controlers/aparelhos.controller";
import {Pagamentos} from "../../../models/pagamentos.class";
declare var $:any;
@Component({
	selector: 'cadastrar-pagamentos',
	templateUrl: './cadastrar_pagamento.view.html',
	styleUrls: ['./cadastrar_pagamento.view.css']
})
export class CadastrarPagamentosView implements OnInit {
	public pagamento;
	public clientes;
	public valorTotal;
	constructor(public aparelhoCtrl:AparelhosController,public clienteCtrl:ClientesController,public pagamentoCtrl:PagamentosController){
		this.pagamento = new Pagamentos();
	}
	async ngOnInit() {
		this.clientes = await this.clienteCtrl.getClientes()
	}

	async cadastrarPagamentos(){
		$("#modalCadastroPagamento").modal("hide");
		await this.pagamentoCtrl.cadastrarPagamento(this.pagamento);
		window.location.reload();
		
	}
	async mudarCliente(){
		let select:any = document.getElementById("clientes");
		let idCliente = await this.clienteCtrl.getClienteId(select.options[select.selectedIndex].value);
		this.pagamento.id_cliente = idCliente[0]._id;
		this.valorTotal = await this.aparelhoCtrl.getAparelhosCustoTotal(this.pagamento.id_cliente);
		this.valorTotal = this.valorTotal[0]._valorTotal
	}
}