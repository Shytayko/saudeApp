import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroMedicosComponent } from './cadastro-medicos/cadastro-medicos.component';
import { CadastroPlanoDeSaudeComponent } from './cadastro-plano-de-saude/cadastro-plano-de-saude.component';
import { CadastroUnidadeSaudeComponent } from './cadastro-unidade-saude/cadastro-unidade-saude.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: 'cadastro', component: CadastroComponent},
	{path: 'login', component: LoginComponent},
	{path: 'cadastro-plano-saude', component: CadastroPlanoDeSaudeComponent},
  {path: 'cadastro-medicos', component: CadastroMedicosComponent},
  {path: 'cadastro-unidade-saude', component: CadastroUnidadeSaudeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


