import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from "src/app/model/Cliente/Cliente";


@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  url = 'http://localhost:8080/cliente'

  constructor(private httpClient : HttpClient) {
    this.getCliente();
    this.salvarCliente();
    
   }

  httpOption = {
    headers : new HttpHeaders({
      'Content-Type' : 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiJzb2Z0dGVrSldUIiwic3ViIjoiYWxwaGFAYmV0YS5jb20iLCJhdXRob3JpdGllcyI6WyJST0xFX1VTRVIiXSwiaWF0IjoxNjMyODY5OTQ5LCJleHAiOjE2MzI4NzU5NDl9.u5P5YE8-nSFT6LM1QT2GuPkmneKzMt7mu-kVZGlKb4B_dKlX7C_cRM3Zqw9QsDq1Gs24w49gBCnGHeGC9qoI3w',
    })
  }

  getCliente():Observable<Cliente[]>{
    return this.httpClient.get<Cliente[]>(this.url + '/todos');

  }


  salvarCliente(): Observable<Cliente> {
    return this.httpClient.post<Cliente>(this.url + '/criar', this.httpOption);
  }

/*
  aprovarAtributo(cliente: Cliente):Observable<Cliente>{
    return this.httpClient.put<Cliente>(
      this.url + '/aceitar/' + cliente.id, this.httpOption
    )
  }

  getAtributoId(id:any):Observable<Cliente>{
    return this.httpClient.get<Cliente>(
      this.url + '/porID/' + id, this.httpOption
    )
  }

  atualizarCliente(cliente:Cliente):Observable<Cliente>{
    return this.httpClient.put<Cliente>(this.url + '/atualizar/'+ cliente.id, JSON.stringify(cliente), this.httpOption)
    console.log
  }

  */
}