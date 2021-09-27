import {Component, Input} from '@angular/core';
import {Account} from "./model/account";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  accounts: Account[] = [];

  constructor() {
  }

  delete(id: number) {
    for (let i = 0; i < this.accounts.length; i++) {
      if (this.accounts[i].id === id) {
        this.accounts.splice(i, 1);
        return;
      }
    }
  }

  save(account: Account) {
    this.accounts.push(account);
  }

  showFormEdit(account: Account) {
    for (let i = 0; i < this.accounts.length; i++) {
      if (this.accounts[i].id === account.id) {
        this.accounts[i] = account;
        return;
      }
    }
  };

  edit(account: Account) {
    for (let i = 0; i < this.accounts.length; i++) {
      if (this.accounts[i].id === account.id) {
        this.accounts[i] = account;
        return;
      }
    }
  }
}
