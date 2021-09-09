import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { Movielist } from 'src/app/models/movielist';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movielisting',
  templateUrl: './movielisting.component.html',
  styleUrls: ['./movielisting.component.css']
})
export class MovielistingComponent implements OnInit {


  // listing: Movie[] = [
  //   { title: "Batman", year: 1989, director: "Tim Burton", cast: "Michael Keaton, Jack Nicholson, Jerry Hall" },
  //   { title: "Superman", year: 1978, director: "Richard Donner", cast: "Christopher Reeve, Margot Kidder, Gene Hackman" },
  //   { title: "Spiderman", year: 2002, director: "Sam Raimi", cast: "Tobey Maguire, Kirsten Dunst, Willem Dafoe" }];

  listing : Movie[] | any;



  constructor(private movieService: MovieService) { }

  ngOnInit(): void {

   // this.selectedMovie = this.listing[0];

   this.GetMovies();

  } // ngOnInit
  
  selectedMovie: Movie | any;
  GetMovies() {

    this.movieService.getMovies().subscribe(movies => {

      this.listing = movies;

      this.selectedMovie = this.listing[0];
    })
  }



  message: string = `No message yet`;
  selectMovie(movie: Movie): void {

    this.message = `Selecting the  movie: ${movie.title}`

    this.selectedMovie = movie;
    console.log('selecting a movie')
  }

}
