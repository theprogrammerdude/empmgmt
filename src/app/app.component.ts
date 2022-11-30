import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { JsService } from './services/js.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private router: Router, private jsService: JsService) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.jsService.loadScript();
      }
    });
  }
}
