export class Exercicios{
	private _nome:string;
	private _codigo:string;


	set nome(value){
		this._nome = value;
	}

	set codigo(value){
		this._codigo = value;
	}

	get nome(){
		return this._nome;
	}

	get codigo(){
		return this._codigo;
	}

	
}