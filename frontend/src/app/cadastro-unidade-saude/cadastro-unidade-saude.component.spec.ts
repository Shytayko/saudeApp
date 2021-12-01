import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroUnidadeSaudeComponent } from './cadastro-unidade-saude.component';

describe('CadastroUnidadeSaudeComponent', () => {
  let component: CadastroUnidadeSaudeComponent;
  let fixture: ComponentFixture<CadastroUnidadeSaudeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroUnidadeSaudeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroUnidadeSaudeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
