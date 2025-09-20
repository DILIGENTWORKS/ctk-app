import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  menuOpen = false;
  // Angular templates don't support `new Date()` directly; expose a property instead
  readonly currentYear = new Date().getFullYear();
}
