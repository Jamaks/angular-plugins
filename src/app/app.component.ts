import { Component, ViewContainerRef, ViewChild, OnDestroy, ComponentRef, Injector, OnInit } from '@angular/core';
import { PluginLoaderService, PluginInfo, AppState, incrementCartItem } from '@jam/core';
import { Store } from '@ngrx/store';

import * as AngularCore from '@angular/core';
import * as AngularCommon from '@angular/common';
import * as JamCore from '@jam/core';
import * as NgRxStore from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy  {
  cart: { items: number};
  constructor(
    private store: Store<AppState>,
    private loader: PluginLoaderService,
     private injector: Injector,
     private _vcr: ViewContainerRef) { }
  title = 'jam-plugins';
  @ViewChild('content',  { read: ViewContainerRef })
  content: ViewContainerRef;
  @ViewChild('head',  { read: ViewContainerRef })
  head: ViewContainerRef;

  component: ComponentRef<any>;

  // Shared modules
  modules = {
    '@angular/core': AngularCore,
    '@angular/common': AngularCommon,
    '@ngrx/store': NgRxStore,
    '@jam/core': JamCore
  };

  ngOnInit() {
    const sub = this.store.select<any>('cart').subscribe(data => {
      this.cart = data.cart;
    });
  }
  increment() {
    this.store.dispatch(incrementCartItem(1));
  }
  load() {
    const firstPlugin: PluginInfo = {
      entryName: 'lib-plugin',
      url: '/assets/plugin.module.js',
      moduleId: 'PluginModule',
      deps: this.modules
    };
    const headPlugin: PluginInfo = {
      entryName: 'lib-plugin-head',
      url: '/assets/head.module.js',
      moduleId: 'PluginModule',
      deps: this.modules
    };
    this.loader.load(headPlugin).then(factory => {
      if (factory) {
        this.head.clear();
        this.component = this.head.createComponent(factory, 0, this.injector);
        // const componentRef = this._vcr.createComponent(factory);
      }
    });
    this.loader.load(firstPlugin).then(factory => {
      if (factory) {
        this.content.clear();
        this.component = this.content.createComponent(factory, 0, this.injector);
        // this._vcr.clear();
        // const componentRef = this._vcr.createComponent(factory);
      }
    });
  }
  ngOnDestroy() {
    if (this.component) {
      this.component.destroy();
      this.component = null;
    }
  }
}
