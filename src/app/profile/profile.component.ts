import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user = {
    name: 'John Doe',
    avatar: '~/assets/default-avatar.png',
    nfts: [
      { name: 'Cool NFT', image: '~/assets/nft1.png' },
      { name: 'Awesome NFT', image: '~/assets/nft2.png' }
    ],
    walletBalance: '10.5 ETH'
  };

  constructor() { }

  ngOnInit() {
  }

  onAvatarTap() {
    // TODO: Implement avatar customization
    console.log('Avatar tapped');
  }
}