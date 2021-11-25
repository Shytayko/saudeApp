import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { CadastroPlanoDeSaudeComponent } from './cadastro-plano-de-saude/cadastro-plano-de-saude.component';
import { CadastroMedicosComponent } from './cadastro-medicos/cadastro-medicos.component';
import { CadastroUnidadeSaudeComponent } from './cadastro-unidade-saude/cadastro-unidade-saude.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    CadastroComponent,
    CadastroPlanoDeSaudeComponent,
    CadastroMedicosComponent,
    CadastroUnidadeSaudeComponent,
    

  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule
  ],
  

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
