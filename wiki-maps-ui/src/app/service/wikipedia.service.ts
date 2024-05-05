import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WikipediaService {
  private url = 'http://localhost:8080/api/wikipedia/random-topic';

  constructor(private http: HttpClient) { }

  getRandomTopic(): Observable<any> {

    return this.http.get(this.url,{});
  }
}
