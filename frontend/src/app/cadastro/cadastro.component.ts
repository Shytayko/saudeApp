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
  
  constructor(private clienteService: ClienteService) {}

    clientes: Cliente[] = []
    cliente = {} as Cliente;
    
	ngOnInit(): void {}

	getCliente(){
		this.clienteService.getCliente().subscribe(
			(clientes: Cliente[]) =>{
				this.clientes= clientes
			}
		)
	}
  	salvarCliente(){
		console.log(this.cliente.cpf);
  	}
  }