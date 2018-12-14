export class Endereco {
	private _logradouro:String;
	private _numero:String;
	private _complemento:String;
	private _cep:String;
	private _bairro:String;
	constructor(){
		this._logradouro = new String();
		this._numero = new String();
		this._complemento = new String();
		this._cep = new String();
		this._bairro = new String();
	}
	set logradouro(value){
		this._logradouro = value;	
	}
	set numero(value){
		this._numero = value;
	}
	set complemento(value){
		this._complemento = value;
	}
	set cep(value){
		this._cep = value;
	}
	set bairro(value){
		this._bairro = value;
	}
	get logradouro(){
		return this._logradouro; 
	}
	get numero(){
		return this._numero; 
	}
	get complemento(){
		return this._complemento; 
	}
	get cep(){
		return this._cep; 
	}
	get bairro(){
		return this._bairro; 
	}

}