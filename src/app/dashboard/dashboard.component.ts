import { Component } from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  movies: Movie[] = [];
  movieLength: number | undefined;
  constructor(private movieService: MovieService) {}
  
  ngOnInit() {
    this.getMovies();
  }
  
  getMovies(): void {
      this.movieService.getMovies()
          .subscribe(movies =>{ 
            this.movies = movies.slice(0, 5);
            this.movieLength=movies.length;
          })
  }
  
}
