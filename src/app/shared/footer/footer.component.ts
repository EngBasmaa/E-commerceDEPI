import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  constructor() { }

  subscribeToNewsletter() {
    // Newsletter subscription logic here
    alert('Thank you for subscribing!');
  }
}
