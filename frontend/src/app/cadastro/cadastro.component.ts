import { Component, OnInit } from '@angular/core';
import { Cliente } from "../model/Cliente/Cliente";
import { ClienteService } from '../services/cliente/cliente.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
	clientes: Cliente[] = []
    cliente = {} as Cliente;
  
  constructor(private clienteService: ClienteService) {}


    
	ngOnInit(): void {}

	getCliente(){
		this.clienteService.getAtributo().subscribe(
			(clientes: Cliente[]) =>{
				this.clientes= clientes
				console.log(clientes)
			}
		)
	}
  	salvarCliente(cliente: Cliente){
		this.cliente.cpf = this.cliente.cpf;
		this.cliente.nome = this.cliente.nome
		this.cliente.dataNascimento = this.cliente.dataNascimento
		this.cliente.planoSaude = this.cliente.planoSaude
		this.cliente.telefone = this.cliente.telefone
		this.clienteService.salvarAtributo(cliente).subscribe(()=>{})
  	}
  }