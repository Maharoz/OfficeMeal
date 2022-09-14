import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { take } from 'rxjs';
import { BillDto } from '../_models/bill';
import { User } from '../_models/user';
import { AccountService } from '../_services/account.service';
import { BillService } from '../_services/bill.service';
import { UserService } from '../_services/userService';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

interface Gender {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent implements OnInit {
  displayedColumns: string[] = ['name', 'actions'];
  userForm: FormGroup;
  user: User;
  dataSource = [];

  constructor(
    private formBuilder: FormBuilder,
    private accountService: AccountService,
    private userService: UserService,
    private billService: BillService
  ) {
    this.accountService.currentUser$
      .pipe(take(1))
      .subscribe((user) => (this.user = user));
  }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
    });

    this.loadAllUsers();
  }

  AddtoMealAndMail(data) {
    console.log(data);
    //this.submitted = true;
    //console.log(this.f);
    const params: BillDto = {
      userId: this.user.userId,
      billAmount: 1500,
      billingMonth: new Date(),
      isApproved: false,
      isPaid: false,
    };
    this.billService.saveBill(params).subscribe((bill: any) => {
      console.log(bill);
    });
  }

  loadAllUsers() {
    this.userService.getUsers().subscribe((response: any) => {
      //this.bills = response;
      this.dataSource = response;
      console.log(response);
    });
  }
  onSubmit() {
    console.log(this.userForm);
  }
}
