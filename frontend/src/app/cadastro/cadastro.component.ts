import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Cliente } from "../model/Cliente/Cliente";
import { ClienteService } from '../services/cliente/cliente.service';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {


  clientes: Cliente[] = []
  cliente = {} as Cliente;
  testecpf: String = "";
  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    console.log("abcccyckkkkkkkkkkk");
    this.getCliente();
  }
  getCliente(){
    this.clienteService.getAtributo().subscribe((clientes: Cliente[]) =>{
      this.clientes= clientes
      console.log("Clientes");
      console.log(this.clientes);
    })
  }

  salvarCliente(){
    console.log(this.cliente);
    console.log(this.testecpf);
  }
}
