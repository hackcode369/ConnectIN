import { Component } from '@angular/core';
import { NftService, NFT } from '../services/nft.service';

@Component({
  selector: 'app-nft-creation',
  templateUrl: './nft-creation.component.html',
  styleUrls: ['./nft-creation.component.css']
})
export class NFTCreationComponent {
  nftData: Partial<NFT> = {
    title: '',
    description: '',
    price: '',
    royalties: ''
  };
  isCreating = false;
  createdNFT: NFT | null = null;

  constructor(private nftService: NftService) { }

  onSelectFile() {
    // TODO: Implement file selection
    console.log('File selection');
  }

  onCreateNFT() {
    this.isCreating = true;
    this.nftService.createNFT(this.nftData).subscribe(
      (nft) => {
        this.createdNFT = nft;
        this.isCreating = false;
        console.log('NFT created:', nft);
      },
      (error) => {
        console.error('Error creating NFT:', error);
        this.isCreating = false;
      }
    );
  }
}