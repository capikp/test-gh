import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'My Page';

  goHome() {
    window.location.replace('#home');
  }

  goInformation() {
      window.location.replace('#information');
  }

  goFooter() {
      window.location.replace('#footer');
  }
}
