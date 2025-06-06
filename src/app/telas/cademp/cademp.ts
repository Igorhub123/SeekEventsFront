import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoriaService } from '../../service/categoria.service';

@Component({
  selector: 'app-cadastro-empresa',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './cademp.html',
  styleUrls: ['./cademp.scss']
})
export class CadastroEmpresaComponent {
  empresaForm: FormGroup;
  categorias: any[] = [];

  constructor(private fb: FormBuilder,
    private categoriaService: CategoriaService) {
    this.empresaForm = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      cnpj: ['', [Validators.required]],
      status: ['Ativo', Validators.required],
      categoria: [null, Validators.required]
    });
  }

  ngOnInit() {
    this.categoriaService.getCategorias().subscribe({
      next: (res) => this.categorias = res,
      error: (err) => console.error('Erro ao buscar categorias', err)
    });
  }

  onSubmit() {
    if (this.empresaForm.valid) {
      console.log(this.empresaForm.value);
    }
  }
}