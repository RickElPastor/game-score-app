import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Game } from '../main/game.interface';

@Component({
  selector: 'app-game-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="card">
  <h2 class="title">Título: {{ game.title }}</h2>

  <img class="game-image" src="https://cdn-icons-png.flaticon.com/512/3962/3962554.png" alt="Imagen del juego" />

  <div class="info-row">
    <span>Fecha: {{ game.releaseDate | date:'dd/MMMM/yyyy' }}</span>
    <div class="rating">
      <ng-container *ngFor="let star of getStars()">
        <span>⭐</span>
      </ng-container>
    </div>
  </div>

  <div class="description">
    <strong>Descripción:</strong><br>
    {{ game.description }}
  </div>

  <button class="buy-button">Agregar al carrito</button>
</div>
  `
})
export class GameCardComponent {
  @Input() game!: Game;

  getStars(): number[] {
    return Array(Math.round(this.game.rating)).fill(0);
  }
}