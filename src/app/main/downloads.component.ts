import { Component, OnInit } from '@angular/core';
import { GameService } from './game.service';
import { Game } from './game.interface';
import { CommonModule } from '@angular/common';
import { GameCardComponent } from '../shared/game-card.component';
import { MenuComponent } from '../shared/menu.component';

@Component({
  selector: 'app-downloads',
  standalone: true,
  imports: [CommonModule, GameCardComponent, MenuComponent],
  template: `
    <app-menu></app-menu>
    <h2>Más Descargados</h2>
    <div class="cards-container">
      <app-game-card *ngFor="let game of games" [game]="game" />
    </div>
  `
})
export class DownloadsComponent implements OnInit {
  games: Game[] = [];

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.games = this.gameService.getMostDownloaded();
  }
}