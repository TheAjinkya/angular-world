import { Component, OnInit } from '@angular/core';
import { NewsFeedService } from '../services/news-feed.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-news-feed-app',
  templateUrl: './news-feed-app.component.html',
  styleUrls: ['./news-feed-app.component.scss'],
})
export class NewsFeedAppComponent implements OnInit {
  constructor(private newsFeedService: NewsFeedService) {}

  latestNews$: Observable<any[]> | undefined;

  ngOnInit(): void {
    this.getLatestData();
  }

  getLatestData() {
    this.latestNews$ = this.newsFeedService.latestNewsSubject;
  }
}
