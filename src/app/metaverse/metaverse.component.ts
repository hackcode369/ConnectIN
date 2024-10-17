import { Component, OnInit } from '@angular/core';
import { ArService } from '../services/ar.service';

@Component({
  selector: 'app-metaverse',
  templateUrl: './metaverse.component.html',
  styleUrls: ['./metaverse.component.css']
})
export class MetaverseComponent implements OnInit {
  constructor(private arService: ArService) { }

  async ngOnInit() {
    try {
      await this.arService.initializeAR();
    } catch (error) {
      console.error('Failed to initialize AR:', error);
    }
  }

  async onAddObject() {
    try {
      await this.arService.addObject('path/to/3d/model.glb', { x: 0, y: 0, z: -1 });
    } catch (error) {
      console.error('Failed to add object:', error);
    }
  }

  onSaveSpace() {
    // TODO: Implement saving the metaverse space
    console.log('Saving metaverse space');
  }
}