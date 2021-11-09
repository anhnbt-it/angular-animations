import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {animate, state, style, transition, trigger,} from '@angular/animations';

@Component({
  selector: 'app-open-close',
  templateUrl: './open-close.component.html',
  styleUrls: ['./open-close.component.scss'],
  animations: [
    trigger('openClose', [
      // animation triggers go here
      state('open', style({
        height: '250px',
        opacity: 1,
      })),
      state('closed', style({
        height: '45px',
      })),
      transition('open => closed', [
        animate('0.2s')
      ]),
      transition('closed => open', [
        animate('0.2s')
      ]),
    ]),
  ]
})
export class OpenCloseComponent implements OnInit {
  isOpen = true;
  @Output() destroy: EventEmitter<boolean> = new EventEmitter<boolean>(true);

  constructor() {
  }

  ngOnInit(): void {
  }

  onToggleChat() {
    this.isOpen = !this.isOpen;
  }

  onCloseChat() {
    this.destroy.emit(false);
  }
}
