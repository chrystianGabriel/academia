import {Telefones} from "../models/telefones.class";

export class FormatacaoUtil{
	formatarTelefone(telefone_str:String){
		return telefone_str.replace(/[\(\)\.\s-]+/g,'')
	}
	formatarCEP(cep_str:String){
		console.log("cep_str", cep_str);
		return cep_str.replace(/[\(\)\.\s-]+/g,'')
	}

	formatarCPF(cpf_str:String){
		console.log("cpf_str", cpf_str);
		return cpf_str.replace(/[\(\)\.\s-]+/g,'')
	}
}