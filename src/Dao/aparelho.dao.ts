import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Aparelhos} from "../models/aparelhos.class"
@Injectable()
export class AparelhoDao{

	api:string = "http://www.amatezu.com/apiAcademia/index.php";
	constructor(public http: HttpClient){
	}

	cadastrarAparelho(aparelho:Aparelhos){
		let header = new HttpHeaders();
		console.log(JSON.stringify(aparelho));
		return this.http.put(this.api + "/aparelho",JSON.stringify(aparelho),{headers:header})
	}

	getAparelhos(){
		return this.http.get(this.api + "/aparelho")
	}

	getAparelhoId(codigo){
		console.log(this.api + "/aparelhoId?codigo=" + codigo);
		return this.http.get(this.api + "/aparelhoId?codigo=" + codigo)
		
	}

	cadastrarAparelhoCliente(idCliente,idAparelho){
		let header = new HttpHeaders();
		return this.http.put(this.api + "/aparelhoCliente?idCliente=" + idCliente + "&idAparelho=" + idAparelho,{},{headers:header})
	}
	getAparelhosCustoTotal(id){
		return this.http.get(this.api + "/clienteCustoTotal?id=" + id)
	}


}