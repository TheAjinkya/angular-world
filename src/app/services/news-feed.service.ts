import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsFeedService {
  constructor(private http: HttpClient) {
    this.getTheLastestNews()
  }

  private subject = new BehaviorSubject<any>([]);

  latestNewsSubject = this.subject.asObservable();

  headers = {
    params: {lr: 'en-US'},
    headers: {
      'X-RapidAPI-Key': 'fc6048848fmshf1fc35333d1fbb5p14c024jsn3445ce4952bb',
      'X-RapidAPI-Host': 'google-news13.p.rapidapi.com'
    }
  }

  getTheLastestNews() {
    this.http
      .get('https://google-news13.p.rapidapi.com/latest', this.headers)
      .subscribe((response: any) => {
        console.log('response', response);
        this.subject.next(response.items);
      });
  }
}
