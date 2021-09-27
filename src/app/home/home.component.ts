import {Component, Input, OnInit} from '@angular/core';
import {Account} from "../model/account";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input()
  accountForm: FormGroup = new FormGroup({});

  @Input()
  accounts: Account[] = [];

  constructor() {
  }

  ngOnInit(): void {
    this.accountForm = new FormGroup({
      id: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{1,}$')]),
      username: new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9]{3,}$')]),
      password: new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9]{6,}$')]),
    });
  }

  getAll() {
    return this.accounts;
  }

  delete(id: number) {
    for (let i = 0; i < this.accounts.length; i++) {
      if (this.accounts[i].id == id) {
        this.accounts.splice(i, 1);
        break;
      }
    }
  }

  save() {
    this.accounts.push(this.accountForm.value);
    this.accountForm.reset();
    history.back();
  }

  showFormEdit(account: Account) {
    for (let i = 0; i < this.accounts.length; i++) {
      if (this.accounts[i].id === account.id) {
        this.accountForm.get('id')?.setValue(this.accounts[i].id);
        this.accountForm.get('username')?.setValue(this.accounts[i].username);
        this.accountForm.get('password')?.setValue(this.accounts[i].password);
        break;
      }
    }
  }

  submitEdit() {
    for (let i = 0; i < this.accounts.length; i++) {
      if (this.accounts[i].id === this.accountForm.get('id')?.value) {
        this.accounts[i] = this.accountForm.value;
        break;
      }
    }
  }
}
