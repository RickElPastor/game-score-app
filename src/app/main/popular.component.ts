import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameService } from './game.service';
import { Game } from './game.interface';
import { GameCardComponent } from '../shared/game-card.component';
import { MenuComponent } from '../shared/menu.component';

@Component({
  selector: 'app-popular',
  standalone: true,
  imports: [CommonModule, GameCardComponent, MenuComponent],
  template: `
    <app-menu></app-menu>
    <h2>Más Populares</h2>
    <div class="cards-container">
      <app-game-card *ngFor="let game of games" [game]="game" />
    </div>
  `
})
export class PopularComponent {
  games: Game[] = [];

  constructor(private gameService: GameService) {
    this.games = this.gameService.getAllGames();
  }
}