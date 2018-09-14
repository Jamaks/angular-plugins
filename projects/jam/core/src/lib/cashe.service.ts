import { Injectable } from '@angular/core';

@Injectable()
export class CasheService {
  appName = 'jam';
  put(url: string, response: any): Promise<any> {
    return window.caches.open(this.appName).then(cashe => cashe.put(url, response));
  }
  get(url: string): Promise<any> {
    return window.caches.open(this.appName).then(cashe => cashe.keys(url));
  }
  clear() {
  }
}
