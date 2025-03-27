import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { GameService } from './game.service';
import { Game } from '../main/game.interface';

@Component({
  selector: 'app-add-game',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  template: `
  <div class="page">
  <div class="form-container">
    <h2>Agregar nuevo videojuego</h2>

    <form [formGroup]="gameForm" (ngSubmit)="onSubmit()" class="game-form">
      <div class="form-row">
        <div class="form-group">
          <label for="title">Título:</label>
          <input id="title" formControlName="title" placeholder="Ingresa el título del videojuego." />
        </div>

        <div class="form-group">
          <label for="rating">Clasificación:</label>
          <input type="number" id="rating" formControlName="rating" min="0" max="5" step="0.1" />
        </div>
      </div>

      <div class="form-group">
        <label for="description">Descripción:</label>
        <textarea id="description" formControlName="description" placeholder="Ingresa la descripción del videojuego."></textarea>
      </div>

      <div class="form-row">
        <div class="form-group">
          <label for="releaseDate">Fecha de lanzamiento:</label>
          <input type="date" id="releaseDate" formControlName="releaseDate" />
        </div>

        <div class="form-group">
          <label for="downloads">Número de descargas:</label>
          <input type="number" id="downloads" formControlName="downloads" min="0" />
        </div>
      </div>

      <div class="form-group checkbox-group">
        <input type="checkbox" id="comingSoon" formControlName="comingSoon" />
        <label for="comingSoon">Próximamente:</label>
      </div>

      <div class="form-actions">
        <button type="submit">Agregar</button>
        <button type="button" (click)="goBack()">Cancelar</button>
      </div>
    </form>
  </div>
</div>
  `
})
export class AddGameComponent {
  gameForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private gameService: GameService,
    private router: Router
  ) {
    this.gameForm = this.fb.group({
      title: ['', Validators.required],
      rating: [0, [Validators.required, Validators.min(0), Validators.max(5)]],
      description: ['', Validators.required],
      releaseDate: ['', Validators.required],
      downloads: [0, Validators.required],
      comingSoon: [false]
    });
  }

  onSubmit(): void {
    if (this.gameForm.invalid) {
      return;
    }

    const formValue = this.gameForm.value;

    const newGame: Game = {
      id: Date.now(),
      title: formValue.title,
      rating: formValue.rating,
      description: formValue.description,
      releaseDate: formValue.releaseDate,
      downloads: formValue.downloads,
      comingSoon: formValue.comingSoon,
      image: 'https://cdn-icons-png.flaticon.com/512/4129/4129579.png'
    };

    this.gameService.addGame(newGame);
    console.log('Juego agregado:', newGame);

    this.router.navigate(['/main/popular']);
  }

  goBack(): void {
    this.router.navigate(['/main/popular']);
  }
}