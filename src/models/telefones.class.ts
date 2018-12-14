export class Telefones{
	private _ddd:string;
	private _telefone:string;

	set ddd(value){
		this._ddd = value;
	}

	set telefone(value){
		this._telefone = value;
	}

	get ddd(){
		return this._ddd;
	}

	get telefone(){

		return this._telefone;
	}
}
