import { Component, ViewContainerRef, ViewChild, OnDestroy, ComponentRef, Injector, OnInit } from '@angular/core';
import { PluginLoaderService, PluginInfo, AppState, incrementCartItem } from '@jam/core';
import { Store } from '@ngrx/store';
import { LoaderService } from './plugin-loader.service';
import { DynamicPagesComponent } from '../dynamic-pages/dynamic-pages.component';

@Component({
  selector: 'app-plugin-loader',
  templateUrl: './plugin-loader.component.html',
  styleUrls: ['./plugin-loader.component.css']
})
export class PluginLoaderComponent implements OnInit, OnDestroy {
  @ViewChild('content',  { read: ViewContainerRef })
  content: ViewContainerRef;
  @ViewChild('dynamic')
  dynamic: DynamicPagesComponent;
  @ViewChild('head',  { read: ViewContainerRef })
  head: ViewContainerRef;
  component: ComponentRef<any>;

  constructor(private loaderService: LoaderService) {  }
  ngOnInit() {
  }
  load() {
    const firstPlugin: PluginInfo = {
      entryName: 'lib-plugin',
      url: '/assets/plugin.module.js',
      moduleId: 'PluginModule',
      route: 'one',
      deps: null
    };
    const headPlugin: PluginInfo = {
      entryName: 'lib-plugin-head',
      url: '/assets/head.module.js',
      moduleId: 'PluginModule',
      deps: null
    };

    this.loaderService.load(firstPlugin, this.dynamic.content, this.component).then(() => {});
    this.loaderService.load(headPlugin, this.head, this.component).then(() => {});
  }

  ngOnDestroy() {
    if (this.component) {
      this.component.destroy();
      this.component = null;
    }
  }
}
