export interface Game {
  id: number;
  title: string;
  description: string;
  releaseDate: string;
  image?: string;
  rating: number;
  downloads: number;
  comingSoon: boolean;
}