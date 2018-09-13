import {
  Component,
  Compiler,
  Injector,
  Injectable,
  ReflectiveInjector,
  ViewContainerRef
} from '@angular/core';

export interface Dependencies {
  [key: string]: Object;
}
export interface PluginInfo {
  url: string;
  moduleId: string;
  entryName: string;
  route?: string;
  deps: Dependencies;
}
@Injectable()
export class PluginLoaderService {
  private injector: Injector;
  private compiler: Compiler;

  constructor(injector: Injector) {
    this.injector = ReflectiveInjector.resolveAndCreate([], injector);
    this.compiler = this.injector.get(Compiler);
  }
  load(plugin: PluginInfo): Promise<any> {
    // TODO: Add cashe
    return fetch(plugin.url)
      .then(response => response.text())
      .then(source => {
        const exports = {};
        const modules = plugin.deps;
        const require = module => modules[module];
        // tslint:disable-next-line:no-eval
        eval(source);

        const mwcf = this.compiler.compileModuleAndAllComponentsSync(
          exports[plugin.moduleId]
        );
        const componentFactory = mwcf.componentFactories.find(
          e => e.selector === plugin.entryName
        );
        if (componentFactory) {
          return { component: componentFactory, module: mwcf.ngModuleFactory, exports: exports };
        } else {
          return null;
        }
      });
  }
}
