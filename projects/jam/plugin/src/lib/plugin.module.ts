import { Store } from '@ngrx/store';
import { NgModule, Component, OnInit } from '@angular/core';
import { AppState, incrementCartItem, addLinksToolbar } from '@jam/core';
import { MatButtonModule } from '@angular/material';

@Component({
  selector: 'lib-plugin',
  template: `
    <p>
      plugin works!
      <button mat-button (click)="increment()"> increment from plugin! </button>
    </p>
  `,
  styles: []
})
export class PluginComponent implements OnInit {

  constructor(private store: Store<AppState>) { }
  ngOnInit() {
    this.store.dispatch(addLinksToolbar({
      title: 'Plugin one',
      route: 'one'
    }));
  }
  increment() {
    this.store.dispatch(incrementCartItem(1));
  }
}

import { Routes, RouterModule } from '@angular/router';

export const pluginRoutes: Routes = [
  {
    path: 'one',
    component: PluginComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(
      pluginRoutes
    )
  ]
})
export class PluginRoutingModule { }


@NgModule({
  imports: [
    PluginRoutingModule,
    MatButtonModule
  ],
  declarations: [PluginComponent],
  exports: [PluginComponent],
  entryComponents: [PluginComponent]
})
export class PluginModule { }
