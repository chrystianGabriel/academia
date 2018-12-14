import {Clientes} from '../models/clientes.class';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ClientesDao{
	api:string = "http://www.amatezu.com/apiAcademia/index.php";
	constructor(public http: HttpClient){
	}

	cadastrarCliente(cliente:Clientes){
		let header = new HttpHeaders();
		return this.http.put(this.api + "/cliente",JSON.stringify(cliente),{headers:header})
	}
	
	getClientes(){
		return this.http.get(this.api + "/cliente");
	}

	getClienteId(cpf){
		return this.http.get(this.api + "/clienteId?cpf=" + cpf)
	}

	getClientePorId(id){
		return this.http.get(this.api + "/clientePorId?id=" + id)
	}
}