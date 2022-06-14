import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Joke } from '../joke';
import { JokeService } from '../joke.service';

@Component({
  selector: 'app-update-jokes',
  templateUrl: './update-jokes.component.html',
  styleUrls: ['./update-jokes.component.css']
})
export class UpdateJokesComponent implements OnInit {

//Instance Variables
joke = new Joke();
id : any; 

  constructor(private jokeService: JokeService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    //grab id from url
     this.id = this.activatedRoute.snapshot.params[`id`];

    this.jokeService.getJokeById(this.id).subscribe(
      data => {
       this.joke = data;
      }, 
      error => console.log(error)
    );

  }


  editJokeButton(){
    this.jokeService.updateJokes(this.id, this.joke).subscribe(
      data => {
        this.router.navigate(['jokes']);
      },
      error => console.log(error)
    );
  }

  goBackToList() {
    this.router.navigate(['jokes']);
  }

}
