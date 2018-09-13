import { NgModule, Compiler } from '@angular/core';
import { JitCompiler } from '@angular/compiler';
import { JitCompilerFactory } from '@angular/platform-browser-dynamic';
import { CoreComponent } from './core.component';
import { StoreModule } from '@ngrx/store';
import { ROOT_REDUCER } from './data/index';

export function createJitCompiler() {
  return new JitCompilerFactory().createCompiler([{ useJit: true }]);
}
@NgModule({
  imports: [
    StoreModule.forRoot(ROOT_REDUCER),
  ],
  declarations: [CoreComponent],
  exports: [CoreComponent],
  providers: [{provide: Compiler, useFactory: createJitCompiler}],
})
export class CoreModule { }
