import { Injectable } from '@angular/core';
import { AparelhoDao } from '../Dao/aparelho.dao';
import {Aparelhos} from '../models/aparelhos.class';
@Injectable()
export class AparelhosController{

	constructor(private aparelhoDao:AparelhoDao){

	}

	cadastrarAparelho(aparelho){
		return new Promise((sucesso,erro)=>{
			try{
				this.aparelhoDao.cadastrarAparelho(aparelho).subscribe(data=>{
					sucesso()
				})
			}catch(e){
				erro();
			}
		})
	}
	getAparelhos(){
		return new Promise((sucesso,erro)=>{
			this.aparelhoDao.getAparelhos().subscribe((data:any)=>{
				let aparelhos = new Array<Aparelhos>();
				for(let i = 0; i < data.length;i++){
					let aparelho = new Aparelhos();
					aparelho.nome = data[i]._nome
					aparelho.custo = data[i]._custo
					aparelho.codigo = data[i]._codigo
					aparelhos.push(aparelho)
				}
				sucesso(aparelhos)
			})
		})
	}

	getAparelhoId(codigo){
		return new Promise((sucesso,erro)=>{
			try{
				this.aparelhoDao.getAparelhoId(codigo).subscribe((id:any)=>{
					sucesso(id)
				})
			}catch(e){
				erro();
			}
			
		})
	}

	cadastrarAparelhoCliente(idCliente,idAparelho){
		return new Promise((sucesso,erro)=>{
			try{
				this.aparelhoDao.cadastrarAparelhoCliente(idCliente,idAparelho).subscribe(data=>{
					sucesso(data);
				});
			}catch(e){
				erro();
			}
		})
	}
	getAparelhosCustoTotal(id){
		return new Promise((sucesso,erro)=>{
			try{
				this.aparelhoDao.getAparelhosCustoTotal(id).subscribe(data=>{
					sucesso(data)
				})
			}catch(e){
				erro();
			}
		})
	}
}