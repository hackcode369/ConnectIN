import { Injectable } from '@angular/core';
declare var AR: any; // Declare AR namespace from nativescript-ar

@Injectable({
  providedIn: 'root'
})
export class ArService {
  private arSession: any;

  constructor() { }

  async initializeAR(): Promise<void> {
    try {
      this.arSession = await AR.startARSession({
        cameraPosition: "back",
        worldAlignment: "gravity",
      });
      console.log('AR session initialized');
    } catch (error) {
      console.error('Error initializing AR:', error);
      throw error;
    }
  }

  async addObject(objectPath: string, position: { x: number, y: number, z: number }): Promise<void> {
    if (!this.arSession) {
      throw new Error('AR session not initialized');
    }

    try {
      await this.arSession.addModel({
        name: "object",
        model: objectPath,
        position: position,
        scale: 1,
      });
      console.log('Object added to AR scene');
    } catch (error) {
      console.error('Error adding object to AR scene:', error);
      throw error;
    }
  }
}