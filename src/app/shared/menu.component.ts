import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav>
      <ul>
        <li><a routerLink="/main/popular">🎮 Populares</a></li>
        <li><a routerLink="/main/downloads">📥 Descargados</a></li>
        <li><a routerLink="/main/upcoming">⏳ Próximamente</a></li>
        <li><a routerLink="/main/add-game">➕ Agregar</a></li>
        <li><a routerLink="/main/logout">🚪 Salir</a></li>
      </ul>
    </nav>
  `
})
export class MenuComponent { }