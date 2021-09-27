import {Component, Input, OnInit} from '@angular/core';
import {Account} from "../model/account";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AccountService} from "../service/account.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  accounts!: Account[];
  accountForm!: FormGroup;

  constructor(private service: AccountService) {
    this.accounts = service.accounts;
  }

  ngOnInit(): void {
    this.accountForm = new FormGroup({
      id: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{1,}$')]),
      username: new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9]{3,}$')]),
      password: new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9]{6,}$')]),
    });  }

  save() {
    this.service.save(this.accountForm.value);
  }

  delete(id:number) {
    this.service.delete(id);
  }

  showFormEdit(id:number) {
      for (let i = 0; i < this.accounts.length; i++) {
        if (this.accounts[i].id === id) {
          this.accountForm.get('id')?.setValue(this.accounts[i].id);
          this.accountForm.get('username')?.setValue(this.accounts[i].username);
          this.accountForm.get('password')?.setValue(this.accounts[i].password);
          break;
      }
    }
  }

  submitEdit() {
    this.service.submitEdit(this.accountForm.value);
    this.accountForm.reset();
  }
}
