import { NgModule } from '@angular/core';
import { CoreComponent } from './core.component';
import { StoreModule } from '@ngrx/store';
import { ROOT_REDUCER } from './data/index';

@NgModule({
  imports: [
    StoreModule.forRoot(ROOT_REDUCER),
  ],
  declarations: [CoreComponent],
  exports: [CoreComponent]
})
export class CoreModule { }
