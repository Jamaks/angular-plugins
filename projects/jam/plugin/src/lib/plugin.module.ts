import { Store } from '@ngrx/store';
import { NgModule, Component, OnInit } from '@angular/core';
import { AppState, incrementCartItem } from '@jam/core';

@Component({
  selector: 'lib-plugin',
  template: `
    <p>
      plugin works!
      <button (click)="increment()"> increment from plugin! </button>
    </p>
  `,
  styles: []
})
export class PluginComponent implements OnInit {

  constructor(private store: Store<AppState>) { }
  increment() {
    this.store.dispatch(incrementCartItem(1));
  }
  ngOnInit() {
  }

}


@NgModule({
  imports: [
  ],
  declarations: [PluginComponent],
  exports: [PluginComponent]
})
export class PluginModule { }
