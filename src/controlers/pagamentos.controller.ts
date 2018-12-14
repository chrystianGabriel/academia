import { Injectable } from '@angular/core';
import {PagamentoDao} from "../Dao/pagamento.dao";
import {ClientesController} from "./cliente.controller";
import {Pagamentos} from "../models/pagamentos.class"
@Injectable()
export class PagamentosController{
	constructor(private clienteCtrl:ClientesController,private pagamentoDao:PagamentoDao){

	}

	cadastrarPagamento(pagamento:Pagamentos){
		return new Promise((sucesso,erro)=>{
			try{
				this.pagamentoDao.cadastrarPagamento(pagamento).subscribe(data=>{
					sucesso();
				});
			}catch(e){
				erro();
			}
		})
		
	}
	getPagamento(){
		return new Promise((sucesso,erro)=>{
			this.pagamentoDao.getPagamentos().subscribe(async (data:any)=>{
				let pagamentos = new Array<Pagamentos>();
				for(let i = 0; i < data.length; i++){
					let pagamento = new Pagamentos();
					let cliente:any = await this.clienteCtrl.getClientePorId(data[i]._cliente_id)
					pagamento.data = data[i]._data;
					pagamento.metodo_pgto = data[i]._metodo_pgto;
					pagamento.valorTotal = data[i]._valorTotal;
					pagamento.cliente = cliente;
					pagamentos.push(pagamento);
				}
				sucesso(pagamentos);
			});
		})
	}
	

}