import { Component, ViewContainerRef, ViewChild, OnDestroy, ComponentRef, Injector, OnInit, ChangeDetectorRef } from '@angular/core';
import { PluginLoaderService, PluginInfo, AppState, incrementCartItem } from '@jam/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  cart: { items: number};
  toolbar$: Observable<any>;

  constructor(
    private router: Router,
    private store: Store<AppState>,
     private injector: Injector,
     private cdr: ChangeDetectorRef) { }
  title = 'jam-plugins';

  ngOnInit() {
    this.store.select<any>('cart').subscribe(data => {
      this.cart = data.cart;
    });
    this.toolbar$ = this.store.select<any>('toolbar').
    pipe(map(data => {
      this.cdr.detectChanges();
      return data.toolbarLinks;
    }));
  }
  increment() {
    this.store.dispatch(incrementCartItem(1));
  }

}
