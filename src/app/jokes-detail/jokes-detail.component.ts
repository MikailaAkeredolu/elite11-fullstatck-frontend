import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Joke } from '../joke';
import { JokeService } from '../joke.service';

@Component({
  selector: 'app-jokes-detail',
  templateUrl: './jokes-detail.component.html',
  styleUrls: ['./jokes-detail.component.css']
})
export class JokesDetailComponent implements OnInit {

  id: any;
  joke = new Joke();

  constructor(private jokeService: JokeService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params[`id`];

    //load employee by id
    this.jokeService.getJokeById(this.id).subscribe(
      data => {
        this.joke = data;
      }
    );


  }




  goBackToList(){
    this.router.navigate(['jokes']);
  }

}
