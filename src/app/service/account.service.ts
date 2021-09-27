import {Injectable} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Account} from "../model/account";

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  accounts: Account[] = [];

  constructor() {
    this.accounts.push({id: 1, username: 'admin', password: '123456'});
    this.accounts.push({id: 2, username: 'user', password: '123456'});
    this.accounts.push({id: 3, username: 'guest', password: '123456'});
  }

  delete(id: number) {
    for (let i = 0; i < this.accounts.length; i++) {
      if (this.accounts[i].id === id) {
        this.accounts.splice(i, 1);
        break;
      }
    }
  }

  save(acc:Account) {
    this.accounts.push(acc);
  }

  submitEdit(acc:Account) {
    for (let i = 0; i < this.accounts.length; i++) {
      if (this.accounts[i].id === acc.id) {
        this.accounts[i] = acc;
        break;
      }
    }
  }
}
