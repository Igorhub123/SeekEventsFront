import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-empresa',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './cademp.html',
  styleUrls: ['./cademp.scss']
})
export class CadastroEmpresaComponent {
  empresaForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.empresaForm = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      cnpj: ['', [Validators.required]],
      status: ['Ativo', Validators.required],
      categoria: [null, Validators.required]
    });
  }

  onSubmit() {
    if (this.empresaForm.valid) {
      console.log(this.empresaForm.value);
    }
  }
}