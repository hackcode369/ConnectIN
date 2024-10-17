import { Injectable } from '@angular/core';
import { ethers } from 'ethers';

@Injectable({
  providedIn: 'root'
})
export class BlockchainService {
  private provider: ethers.providers.JsonRpcProvider;
  private signer: ethers.Signer;

  constructor() {
    // Initialize provider (replace with actual Ethereum node URL)
    this.provider = new ethers.providers.JsonRpcProvider('https://mainnet.infura.io/v3/YOUR-PROJECT-ID');
    
    // Initialize signer (replace with actual private key or use a better key management solution)
    this.signer = new ethers.Wallet('YOUR-PRIVATE-KEY', this.provider);
  }

  async mintNFT(tokenURI: string): Promise<string> {
    // Replace with actual NFT contract address and ABI
    const contractAddress = 'YOUR-NFT-CONTRACT-ADDRESS';
    const contractABI = []; // Add your contract ABI here
    
    const nftContract = new ethers.Contract(contractAddress, contractABI, this.signer);
    
    try {
      const tx = await nftContract.mintNFT(this.signer.getAddress(), tokenURI);
      const receipt = await tx.wait();
      return receipt.transactionHash;
    } catch (error) {
      console.error('Error minting NFT:', error);
      throw error;
    }
  }
}