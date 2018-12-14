import { Component, OnInit } from '@angular/core';
import {AparelhosController} from "../../../controlers/aparelhos.controller";
import {ExerciciosController} from "../../../controlers/exercicios.controller";
import {Exercicios} from "../../../models/exercicios.class"
declare var $:any;
@Component({
	selector: 'cadastrar-exercicios',
	templateUrl: './cadastrar_exercicios.view.html',
	styleUrls: ['./cadastrar_exercicios.view.css']
})
export class CadastrarExerciciosView implements OnInit {

	public aparelhos;
	public aux_aparelhos;
	public exercicio:Exercicios;
	constructor(private exerciciosCtrl:ExerciciosController,private aparelhoCtrl:AparelhosController){
		this.exercicio = new Exercicios();
		this.aux_aparelhos = {};
	}

	async ngOnInit() {
		this.aparelhos = await this.aparelhoCtrl.getAparelhos();
	}

	adicionarAparelho(codigo,evento){
		
		if(evento.target.checked == true){
			this.aux_aparelhos[codigo] = true;
		}else{
			this.aux_aparelhos[codigo] = false;
		}
		
	}
	async cadastrarExercicio(){
		$("#modalCadastroExercicio").modal('hide');
		await this.exerciciosCtrl.cadastrarExercicio(this.exercicio);
		let idExercicio = await this.exerciciosCtrl.getExercicioId(this.exercicio.codigo);
		for(let key in this.aux_aparelhos){
			if(this.aux_aparelhos[key]){
				let idAparelho = await this.aparelhoCtrl.getAparelhoId(key);
				await this.exerciciosCtrl.cadastrarExercicioAparelho(idExercicio[0]._id,idAparelho[0]._id)
			}
		}
		window.location.reload();
	}
}