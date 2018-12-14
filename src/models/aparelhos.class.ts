import {Exercicios} from "./exercicios.class";

export class Aparelhos{
	private _exercecios:Array<Exercicios>;
	private _nome:string;
	private _codigo:string;
	private _custo:number;

	set exercecios(value){
		this._exercecios = value;
	}
	set nome(value){
		this._nome = value;
	}
	set codigo(value){
		this._codigo = value;
	}
	set custo(value){
		this._custo = value;
	}
	
	get exercecios(){
		return this._exercecios;
	}
	get nome(){
		return this._nome;
	}
	get codigo(){
		return this._codigo;
	}
	get custo(){
		return this._custo;
	}


}