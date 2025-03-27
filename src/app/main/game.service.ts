import { Injectable } from '@angular/core';
import { Game } from './game.interface';

@Injectable({
    providedIn: 'root'
})
export class GameService {
    private games: Game[] = [
        { id: 1, title: 'Zelda', rating: 4.9, description: 'Aventura épica', releaseDate: '2023-05-01', downloads: 3200, comingSoon: false },
        { id: 2, title: 'Among Us', rating: 4.1, description: 'Juego de impostores', releaseDate: '2021-11-15', downloads: 5400, comingSoon: false },
        { id: 3, title: 'Starfield', rating: 4.3, description: 'Exploración espacial', releaseDate: '2024-03-10', downloads: 2700, comingSoon: false }
    ];

    getAllGames(): Game[] {
        return this.games;
    }

    addGame(game: Game): void {
        this.games.push(game);
    }

    getPopularGames() {
        return this.games.filter(g => g.rating > 4);
    }

    getMostDownloaded(): Game[] {
        return this.games
            .filter(game => !game.comingSoon)
            .sort((a, b) => b.downloads - a.downloads);
    }

    getComingSoon(): Game[] {
        return this.games.filter(g => g.comingSoon);
    }
}