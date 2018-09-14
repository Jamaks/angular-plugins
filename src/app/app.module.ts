import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule, MatButtonModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CoreModule } from '@jam/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PluginLoaderComponent } from './plugin-loader/plugin-loader.component';
import { LoaderService } from './plugin-loader/plugin-loader.service';
import { NotLoadedComponent } from './not-loaded/not-loaded.component';
import { DynamicPagesComponent } from './dynamic-pages/dynamic-pages.component';

@NgModule({
  declarations: [
    AppComponent,
    PluginLoaderComponent,
    NotLoadedComponent,
    DynamicPagesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    CoreModule
  ],
  entryComponents: [DynamicPagesComponent],
  providers: [LoaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
