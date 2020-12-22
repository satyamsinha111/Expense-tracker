import { Component } from '@angular/core';
import { Expense } from './expense.modal';
import shortId from 'shortid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'expense-tracker';
  expenseList: Expense[] = [];

  constructor() {
    const data: Expense[] = JSON.parse(localStorage.getItem('Expense'));
    console.log('Current data', data);
    this.expenseList = [...data];
  }

  addExpense(expense: Expense) {
    console.log(expense);
    this.expenseList.push(expense);
    if (window) {
      localStorage.setItem('Expense', JSON.stringify(this.expenseList));
    }
  }

  removeExpense(id: string) {
    console.log(id);
    //Removes expenses
    let newArray: Expense[] = this.expenseList.filter(
      (expense, index) => expense.id !== id
    );
    this.expenseList = [...newArray];
    if (window) {
      localStorage.setItem('Expense', JSON.stringify(this.expenseList));
    }
  }

  getTotalAmount(): number {
    let total: number = 0;
    this.expenseList.map((v, i) => {
      total = <number>total + parseInt(v.amount.toString());
    });
    console.log(total);
    return total;
  }
}
