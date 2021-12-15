import { Component, OnInit } from '@angular/core';
import { Medico } from "../model/Medico/Medico";
import { MedicoService } from 'src/app/services/medico/medico.service'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cadastro-medicos',
  templateUrl: './cadastro-medicos.component.html',
  styleUrls: ['./cadastro-medicos.component.css']
})

export class CadastroMedicosComponent implements OnInit {
    medicos: Medico[] = []
    medico = {} as Medico;
  
    constructor(private medicoService: MedicoService) {}


	ngOnInit(): void {}

	listarMedicos(){
		this.medicoService.getAtributoMedico().subscribe((medicos: Medico[]) =>{
			this.medicos= medicos;
			console.log(medicos);
		})
	}
  	salvarMedicos(medico: Medico){
		this.medico.nome = this.medico.nome
		this.medico.crm = this.medico.crm
		this.medico.telefone = this.medico.telefone
		this.medico.planoSaude = this.medico.planoSaude
		this.medico.especialidade = this.medico.especialidade;
		this.medicoService.salvarAtributoMEdico(medico).subscribe(()=>{})
		window.alert("Infomrações cadastradas");
  	}
  }