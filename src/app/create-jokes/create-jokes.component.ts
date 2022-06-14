import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Joke } from '../joke';
import { JokeService } from '../joke.service';

@Component({
  selector: 'app-create-jokes',
  templateUrl: './create-jokes.component.html',
  styleUrls: ['./create-jokes.component.css']
})
export class CreateJokesComponent implements OnInit {

  joke = new Joke(); // need a joke object

  constructor(private jokeService:JokeService, private router: Router) { }

  ngOnInit(): void {
  }

  submitJokeButton() {
    this.jokeService.addJoke(this.joke).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['jokes']);
      }
    );
  }

  goBackToList() {
    this.router.navigate(['jokes']);
  }

}
