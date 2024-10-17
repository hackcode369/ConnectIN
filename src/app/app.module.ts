import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptModule } from '@nativescript/angular'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HomeComponent } from './home/home.component'
import { ProfileComponent } from './profile/profile.component'
import { NFTCreationComponent } from './nft-creation/nft-creation.component'
import { MetaverseComponent } from './metaverse/metaverse.component'
import { MarketplaceComponent } from './marketplace/marketplace.component'
import { LiveStreamComponent } from './live-stream/live-stream.component'
import { SettingsComponent } from './settings/settings.component'

@NgModule({
  bootstrap: [AppComponent],
  imports: [NativeScriptModule, AppRoutingModule],
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    NFTCreationComponent,
    MetaverseComponent,
    MarketplaceComponent,
    LiveStreamComponent,
    SettingsComponent
  ],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}