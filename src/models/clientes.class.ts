import {Exercicios} from "./exercicios.class";
import {Endereco} from "./endereco.class";
import {Telefones} from "./telefones.class";
import {Aparelhos} from "./aparelhos.class";

export class Clientes{
	private _exercicios:Array<Exercicios>;
	private _nome:String;
	private _cpf:String;
	private _email:String;
	private _endereco:Endereco;
	private _telefone:String;
	private _aparelhos:Array<Aparelhos>;

	constructor(){
		this._nome = new String();
		this._cpf = new String();
		this._email = new String();
		this._exercicios = new Array<Exercicios>();
		this._endereco = new Endereco();
		this._telefone = new String();
		this._aparelhos = new Array<Aparelhos>();
	}
	public insertExercicios(exercicios:Exercicios){

		this._exercicios.push(exercicios);
	}


	public insertAparelhos(aparelho:Aparelhos){

		this._aparelhos.push(aparelho);
	}

	public set nome(value){
		this._nome = value;
	}
	public set cpf(value){
		this._cpf = value;
	}
	public set email(value){
		this._email = value;
	}
	public set endereco(value){
		this._endereco = value;
	}

	public set telefone(value){
		this._telefone = value;
	}

	public get nome(){
		return this._nome;
	}
	public get cpf(){
		return this._cpf;
	}
	public get email(){
		return this._email;
	}
	public get endereco(){
		return this._endereco;
	}

	public get telefone(){
		return this._telefone;
	}

}