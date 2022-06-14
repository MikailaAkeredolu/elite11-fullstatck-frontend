import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Joke } from '../joke';
import { JokeService } from '../joke.service';

@Component({
  selector: 'app-list-jokes',
  templateUrl: './list-jokes.component.html',
  styleUrls: ['./list-jokes.component.css']
})
export class ListJokesComponent implements OnInit {

  jokes: Joke[] = [];

  constructor(private jokeService: JokeService, private router: Router) { }

  ngOnInit(): void {
    this.fetchJokes();
  }

 fetchJokes(){
    this.jokeService.getAllJokes().subscribe(
      data =>{
          this.jokes = data;
      },
      error => console.log(error)
    );
  }


  goToEditJoke(id: any){
    this.router.navigate(['editjoke', id]);
  }


  goToViewJoke(id: any){
    this.router.navigate(['viewjoke', id]);
  }

  deleteJoke(id:any){
    this.jokeService.deleteJokeById(id).subscribe(
      data =>{
          this.fetchJokes(); //re - fetch jokes
          this.router.navigate(['jokes']); // route back to display list
      },
      error => console.log(error)
    );
  }


//Add a Joke Button - lead to CreateJoke Component - Form
goToAddJoke(){
 this.router.navigate(['addjoke']);
}


}
