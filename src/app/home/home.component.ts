import { Component, OnInit } from '@angular/core';
import { AiFeedService, FeedItem } from '../services/ai-feed.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  feedItems: FeedItem[] = [];
  isLoading = true;

  constructor(private aiFeedService: AiFeedService) { }

  ngOnInit() {
    this.loadFeed();
  }

  loadFeed() {
    this.isLoading = true;
    this.aiFeedService.getAiPoweredFeed().subscribe(
      (items) => {
        this.feedItems = items;
        this.isLoading = false;
      },
      (error) => {
        console.error('Error fetching feed:', error);
        this.isLoading = false;
      }
    );
  }
}