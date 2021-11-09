import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-animations';
  isOpen = true;

  handleDestroy($event: boolean) {
    this.isOpen = $event;
  }
}
