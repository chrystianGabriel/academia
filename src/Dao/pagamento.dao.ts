import { Injectable } from '@angular/core';
import {Pagamentos} from "../models/pagamentos.class"
import { HttpClient,HttpHeaders } from '@angular/common/http';
@Injectable()
export class PagamentoDao{
	api:string = "http://www.amatezu.com/apiAcademia/index.php";
	constructor(public http: HttpClient){
	}

	cadastrarPagamento(pagamento:Pagamentos){
		let header = new HttpHeaders();
		return this.http.put(this.api + "/pagamento",JSON.stringify(pagamento),{headers:header})
	}
	
	getPagamentos(){
		return this.http.get(this.api + "/pagamento");
	}
}