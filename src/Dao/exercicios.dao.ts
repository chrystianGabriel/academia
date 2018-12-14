import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Exercicios} from "../models/exercicios.class"
@Injectable()
export class ExerciciosDao{

	api:string = "http://www.amatezu.com/apiAcademia/index.php";
	constructor(public http: HttpClient){
	}

	cadastrarExercicio(exercicio:Exercicios){
		let header = new HttpHeaders();
		return this.http.put(this.api + "/exercicio",JSON.stringify(exercicio),{headers:header})
	}

	getExercicioId(codigo){
		return this.http.get(this.api + "/exercicioId?codigo="+codigo)
	}

	cadastrarExercicioAparelho(idExercicio,idAparelho){
		let header = new HttpHeaders();
		return this.http.put(this.api + "/exercicio/aparelho?idExercicio=" + idExercicio + "&idAparelho=" + idAparelho,{},{headers:header})
	}

	getExercicios(){
		return this.http.get(this.api + "/exercicio")
	}

}