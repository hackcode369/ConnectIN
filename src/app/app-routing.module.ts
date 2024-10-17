import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'

import { HomeComponent } from './home/home.component'
import { ProfileComponent } from './profile/profile.component'
import { NFTCreationComponent } from './nft-creation/nft-creation.component'
import { MetaverseComponent } from './metaverse/metaverse.component'
import { MarketplaceComponent } from './marketplace/marketplace.component'
import { LiveStreamComponent } from './live-stream/live-stream.component'
import { SettingsComponent } from './settings/settings.component'

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'nft-creation', component: NFTCreationComponent },
  { path: 'metaverse', component: MetaverseComponent },
  { path: 'marketplace', component: MarketplaceComponent },
  { path: 'live-stream', component: LiveStreamComponent },
  { path: 'settings', component: SettingsComponent },
]

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}