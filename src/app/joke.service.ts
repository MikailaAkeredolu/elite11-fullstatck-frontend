import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Joke } from './joke';

@Injectable({
  providedIn: 'root'
})
export class JokeService {

  private baseEndpoint = `http://localhost:8080/jokes`;

  constructor(private httpClient: HttpClient) { }

//get all jokes from backend api
getAllJokes(): Observable<Joke[]>{
  return this.httpClient.get<Joke[]>(`${this.baseEndpoint}`);
}

updateJokes(id:any, joke: Joke): Observable<any> {
  return this.httpClient.put<any>(`http://localhost:8080/jokes/${id}`, joke);
}

addJoke(joke: Joke) {
  return this.httpClient.post<Joke>(`http://localhost:8080/jokes`, joke);
}

getJokeById(id: number): Observable<any> {
  return this.httpClient.get<Joke>(`http://localhost:8080/jokes/${id}`);
}

// delete from the backend
deleteJokeById(id: number) {
    return this.httpClient.delete<Joke>(`http://localhost:8080/jokes/${id}`);
}



}
