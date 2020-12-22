import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Expense } from '../expense.modal';
import shortid from 'shortid';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  @Output() onExpenseAdded = new EventEmitter<Expense>();
  item: string = null;
  amount: number = null;
  constructor() {}

  ngOnInit(): void {}

  handleItemChange(event) {
    this.item = event.target.value;
  }

  handleAmountChange(event) {
    this.amount = event.target.value;
  }

  handleReset() {
    this.item = null;
    this.amount = null;
  }

  addExpenseEmit() {
    console.log('Add expense');
    console.log(this.item);
    this.onExpenseAdded.emit(
      new Expense(shortid.generate(), this.item, this.amount)
    );
    this.handleReset();
  }
}
