import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/';

  // Subscribing to an Observable



  constructor(private http: HttpClient) {}

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + 'users');
  }

  getPosts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + 'posts');
  }


  
}
