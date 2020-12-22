import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Expense } from '../expense.modal';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  @Input() expense: Expense;
  @Output() onRemoveExpense = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}

  remove() {
    this.onRemoveExpense.emit(this.expense.id);
  }
}
