import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { CadastroPlanoDeSaudeComponent } from './cadastro-plano-de-saude/cadastro-plano-de-saude.component';
import { CadastroMedicosComponent } from './cadastro-medicos/cadastro-medicos.component';
import { CadastroUnidadeSaudeComponent } from './cadastro-unidade-saude/cadastro-unidade-saude.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { ModelComponent } from './model/model.component';
import { FormsModule } from '@angular/forms';
import { NgxMaskModule, IConfig } from 'ngx-mask';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CadastroComponent,
    CadastroPlanoDeSaudeComponent,
    CadastroMedicosComponent,
    CadastroUnidadeSaudeComponent,
    ModelComponent,
    
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxMaskModule.forRoot({
      dropSpecialCharacters: false
    }
      
    ),
    
  ],
  

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
