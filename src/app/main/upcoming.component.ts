import { Component, OnInit } from '@angular/core';
import { GameService } from './game.service';
import { Game } from './game.interface';
import { CommonModule } from '@angular/common';
import { GameCardComponent } from '../shared/game-card.component';
import { MenuComponent } from '../shared/menu.component';

@Component({
  selector: 'app-coming-soon',
  standalone: true,
  imports: [CommonModule, GameCardComponent, MenuComponent],
  template: `
    <app-menu></app-menu>
    <h2>Próximamente</h2>
    <div class="cards-container">
      <div class="games-wrapper">
        <app-game-card *ngFor="let game of games" [game]="game" />
      </div>
    </div>
    
  `
})
export class ComingSoonComponent implements OnInit {
  games: Game[] = [];

  constructor(private gameService: GameService) {}

  ngOnInit() {
    this.games = this.gameService.getComingSoon();
  }
}