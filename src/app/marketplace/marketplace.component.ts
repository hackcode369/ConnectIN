import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css']
})
export class MarketplaceComponent implements OnInit {
  nfts = [
    { id: 1, name: 'Cool NFT', price: '0.5 ETH', image: '~/assets/nft1.png' },
    { id: 2, name: 'Awesome NFT', price: '1.2 ETH', image: '~/assets/nft2.png' },
    { id: 3, name: 'Rare NFT', price: '3.7 ETH', image: '~/assets/nft3.png' }
  ];

  constructor() { }

  ngOnInit() {
    // TODO: Fetch NFTs from the blockchain
  }

  onNFTTap(nft) {
    // TODO: Implement NFT details view
    console.log('NFT tapped', nft);
  }
}