import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'E-commerceDEPI';
  showRender = false

  constructor(private router: Router) { }

  ngDoCheck(): void {
    if (this.router.url.includes('adminLogin')) {
      this.showRender = false;
    } else {
      this.showRender = true;
    }
  }

}
