import {Clientes} from "./clientes.class";
import Char from 'typescript-char'
export class Pagamentos{
	private _data:Date;
	private _cliente:Clientes;
	private _metodo_pgto:Char;
	private _valorTotal:Number;

	constructor(){
		this.data = new Date();
		this._cliente = new Clientes();
		this._valorTotal = 100;
	}

	public set data(value){
		this._data = value;
	}
	public set cliente(value){
		this._cliente = value;
	}
	public set metodo_pgto(value){
		this._metodo_pgto = value;
	}
	public set valorTotal(value){
		this._valorTotal = value;
	}

	public get data(){
		return this._data;
	}
	public get cliente(){
		return this._cliente;
	}
	public get metodo_pgto(){
		return this._metodo_pgto;
	}
	public get valorTotal(){
		return this._valorTotal;
	}
}