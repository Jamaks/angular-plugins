import { Injectable, ViewContainerRef, Injector, ComponentRef, Component, NgModule } from '@angular/core';
import { PluginInfo, PluginLoaderService } from '@jam/core';
import { Router } from '@angular/router';

import * as AngularCore from '@angular/core';
import * as AngularRouter from '@angular/router';
import * as AngularCommon from '@angular/common';
import * as JamCore from '@jam/core';
import * as NgRxStore from '@ngrx/store';
import * as Material from '@angular/material';
import { DynamicPagesComponent } from '../dynamic-pages/dynamic-pages.component';


@Injectable({
  providedIn: 'root'
})
export class LoaderService {
      // Shared modules
      modules = {
        '@angular/core': AngularCore,
        '@angular/router': AngularRouter,
        '@angular/common': AngularCommon,
        '@angular/material': Material,
        '@ngrx/store': NgRxStore,
        '@jam/core': JamCore
      };
    constructor(private loader: PluginLoaderService, private injector: Injector, private router: Router) { }

    load(plugin: PluginInfo, vcr: ViewContainerRef, component: ComponentRef<any>): Promise<any> {
      plugin.deps = this.modules;
      return this.loader.load(plugin).then((factory: {component: any, module: any, exports: any }) => {
        if (factory && vcr) {
          vcr.clear();

          component = vcr.createComponent(factory.component, 0, this.injector);
          // const componentRef: any = factory.component;
          // const componentRef: any = component;

          console.log(factory.exports.pluginRoutes);
          if (plugin.route) {
            this.router.config.unshift({
              path: plugin.route,
              component: DynamicPagesComponent
            });
          }

          // this.router.config.unshift({
          //   path: plugin.route,
          //   component: DynamicPagesComponent,
          //   children: factory.exports.pluginRoutes
          // });
        }
      });
    }
}
