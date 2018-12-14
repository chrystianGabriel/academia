import { Injectable } from '@angular/core';
import { ExerciciosDao } from '../Dao/exercicios.dao';
import {Exercicios} from '../models/exercicios.class';
@Injectable()
export class ExerciciosController{

	constructor(private exercicioDao:ExerciciosDao){

	}

	cadastrarExercicio(exercicio){
		return new Promise((sucesso,erro)=>{
			try{
				this.exercicioDao.cadastrarExercicio(exercicio).subscribe(data=>{
					sucesso();
				})
			}catch(e){
				erro();
			}
		})
	}
	getExercicioId(codigo){
		return new Promise((sucesso,erro)=>{
			try{
				this.exercicioDao.getExercicioId(codigo).subscribe(id=>{
					sucesso(id)
				})
			}catch(e){
				erro();
			}
		})
	}
	cadastrarExercicioAparelho(idExercicio,idAparelho){
		return new Promise((sucesso,erro)=>{
			try{
				this.exercicioDao.cadastrarExercicioAparelho(idExercicio,idAparelho).subscribe(data=>{
					sucesso();
				});
			}catch(e){
				erro();
			}
		})
	}

	getExercicios(){
		return new Promise((sucesso,erro)=>{
			this.exercicioDao.getExercicios().subscribe((data:any)=>{
				let exercicios = new Array<Exercicios>();
				for(let i = 0; i < data.length; i++){
					let exercicio = new Exercicios();
					exercicio.nome = data[i]._nome;
					exercicio.codigo = data[i]._codigo
					exercicios.push(exercicio);
				}
				sucesso(exercicios);
			});
		})
	}
	
}