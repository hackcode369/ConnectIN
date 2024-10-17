import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

export interface FeedItem {
  type: 'post' | 'nft' | 'event';
  content?: string;
  name?: string;
  price?: string;
  date?: string;
  relevanceScore: number;
}

@Injectable({
  providedIn: 'root'
})
export class AiFeedService {
  private mockFeed: FeedItem[] = [
    { type: 'post', content: 'Welcome to ConnectIN!', relevanceScore: 0.9 },
    { type: 'nft', name: 'Cool NFT', price: '0.5 ETH', relevanceScore: 0.8 },
    { type: 'event', name: 'Virtual Meetup', date: '2023-06-15', relevanceScore: 0.7 },
    { type: 'post', content: 'Check out my new NFT collection!', relevanceScore: 0.85 },
    { type: 'nft', name: 'Rare Gem', price: '2.0 ETH', relevanceScore: 0.95 },
  ];

  constructor() { }

  getAiPoweredFeed(): Observable<FeedItem[]> {
    // Simulate AI processing by sorting based on relevance score
    const sortedFeed = this.mockFeed.sort((a, b) => b.relevanceScore - a.relevanceScore);
    
    // Simulate network delay
    return of(sortedFeed).pipe(delay(1000));
  }
}