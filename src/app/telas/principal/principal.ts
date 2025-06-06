import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { CommonModule } from '@angular/common';
import { PopupCadastro } from '../popup-cadastro/popup-cadastro';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, PopupCadastro],
  templateUrl: './principal.html',
  styleUrls: ['./principal.scss']
})
export class Principal {
  @ViewChild('footerElement') footerElement!: ElementRef<HTMLElement>;

  showLoginOverlay = false;

  events = [
    {
      id: 1,
      nome: 'Festival de Verão',
      descricao: 'O maior festival de música do ano',
      data: '15/12/2023',
      imagem: 'assets/imagem/Evento01.jpg'
    },
    {
      id: 2,
      nome: 'Feira de Tecnologia',
      descricao: 'As últimas inovações em TI',
      data: '20/01/2024',
      imagem: 'assets/imagem/Evento03.jpg'
    },
    {
      id: 3,
      nome: 'Workshop de Gastronomia',
      descricao: 'Aprenda com chefs renomados',
      data: '05/02/2024',
      imagem: 'assets/imagem/Evento02.jpg'
    }
  ];

  categories = [
    { nome: 'Música', icon: 'bi-music-note-beamed' },
    { nome: 'Games', icon: 'bi-controller' },
    { nome: 'Palestras', icon: 'bi-lightbulb' },
    { nome: 'Arte', icon: 'bi-brush' },
    { nome: 'Networking', icon: 'bi-people' },
    { nome: 'Gastronomia', icon: 'bi-cup-hot' }
  ];

  constructor(
    public authService: AuthService,
    private router: Router
  ) { }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  filterByCategory(category: string): void {
    console.log('Filtrando por:', category);
    // Aqui entraria o filtro real futuramente
  }

  viewEventDetails(eventId: number): void {
    this.router.navigate(['/evento', eventId]);
  }

  scrollToFooter(): void {
    if (this.footerElement) {
      this.footerElement.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
