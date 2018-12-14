import { Component, OnInit } from '@angular/core';
import {ExerciciosController} from "../../../controlers/exercicios.controller"
@Component({
  selector: 'listar-exercicios',
  templateUrl: './listar_exercicios.view.html',
  styleUrls: ['./listar_exercicios.view.css']
})
export class ListarExerciciosView implements OnInit {
	public exercicios;
	constructor(public exerciosCtrl:ExerciciosController){

	}
	async ngOnInit() {
    	this.exercicios = await this.exerciosCtrl.getExercicios();
  	}

}