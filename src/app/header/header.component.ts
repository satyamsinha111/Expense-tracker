import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Input() totalAmount: number = 0;
  @Output() onChangeTotal = new EventEmitter<null>();
  constructor() {}
  ngOnInit(): void {}

  getTotalAmount() {
    this.onChangeTotal.emit(null);
  }
}
