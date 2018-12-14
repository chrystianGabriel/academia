import {ClientesDao} from "../Dao/clientes.dao";
import {Clientes} from "../models/clientes.class";
import { Injectable } from '@angular/core';

@Injectable()
export class ClientesController{
	constructor(private daoCliente:ClientesDao){
	}
	cadastrarCliente(cliente:Clientes){

		return new Promise((sucesso,erro)=>{
			try{
				this.daoCliente.cadastrarCliente(cliente).subscribe(data=>{
				sucesso()
			});
			}catch(e){
				erro();
			}
		})
	}
	getClientes(){
		return new Promise((sucesso,erro)=>{
			this.daoCliente.getClientes().subscribe((data:any)=>{
				let clientes = new Array<Clientes>();
				for(let i = 0; i < data.length; i++){
					let cliente = new Clientes();
					cliente.nome = data[i]._nome;
					cliente.cpf = data[i]._cpf;
					cliente.email = data[i]._email;
					cliente.endereco.logradouro = data[i]._logradouro;
					cliente.endereco.complemento = data[i]._complemento;
					cliente.endereco.cep = data[i]._cep;
					cliente.endereco.bairro = data[i]._bairro;
					clientes.push(cliente);
				}
				sucesso(clientes);
			});
		})
	}

	getClienteId(cpf){
		return new Promise((sucesso,erro)=>{
			try{
				this.daoCliente.getClienteId(cpf).subscribe(data=>{
					sucesso(data)
				});
			}catch(e){
				erro();
			}
		})
	}
	getClientePorId(id){
		return new Promise((sucesso,erro)=>{
			this.daoCliente.getClientePorId(id).subscribe(data=>{
				let cliente = new Clientes();
				cliente.nome = data[0]._nome;
				cliente.cpf = data[0]._cpf;
				cliente.email = data[0]._email;
				cliente.endereco.logradouro = data[0]._logradouro;
				cliente.endereco.complemento = data[0]._complemento;
				cliente.endereco.cep = data[0]._cep;
				cliente.endereco.bairro = data[0]._bairro;
				sucesso(cliente);
			})
		})
	}

}