import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

export interface NFT {
  id: string;
  title: string;
  description: string;
  price: string;
  royalties: string;
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class NftService {
  constructor() { }

  createNFT(nftData: Partial<NFT>): Observable<NFT> {
    // Simulate NFT creation and minting process
    const newNFT: NFT = {
      id: Math.random().toString(36).substr(2, 9),
      title: nftData.title,
      description: nftData.description,
      price: nftData.price,
      royalties: nftData.royalties,
      image: 'https://via.placeholder.com/150' // Placeholder image
    };

    // Simulate network delay
    return of(newNFT).pipe(delay(2000));
  }
}