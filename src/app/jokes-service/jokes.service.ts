import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { jokes } from './jokes';

@Injectable({
  providedIn: 'root'
})
export class JokesService {

  constructor(private http:HttpClient) { }

  getJokes(){
  return  this.http.get('https://karljoke.herokuapp.com/jokes/random');
  }
}
