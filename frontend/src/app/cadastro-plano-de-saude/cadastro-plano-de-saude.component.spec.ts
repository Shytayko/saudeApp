import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroPlanoDeSaudeComponent } from './cadastro-plano-de-saude.component';

describe('CadastroPlanoDeSaudeComponent', () => {
  let component: CadastroPlanoDeSaudeComponent;
  let fixture: ComponentFixture<CadastroPlanoDeSaudeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroPlanoDeSaudeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroPlanoDeSaudeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
