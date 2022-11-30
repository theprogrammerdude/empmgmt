import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class JsService {
  constructor() {}

  loadScript() {
    let node = document.createElement('script');
    node.src = 'https://unpkg.com/flowbite@1.5.4/dist/flowbite.js';
    node.type = 'text/javascript';
    node.async = true;
    node.charset = 'utf-8';
    document.getElementsByTagName('head')[0].appendChild(node);
  }
}
