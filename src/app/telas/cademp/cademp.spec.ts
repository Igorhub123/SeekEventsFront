import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroEmpresaComponent } from './cademp';

describe('Cademp', () => {
  let component: CadastroEmpresaComponent;
  let fixture: ComponentFixture<CadastroEmpresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroEmpresaComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CadastroEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
