import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
  displayedColumns: string[] = ['name'];
  userForm: FormGroup;

  dataSource = [];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
    });
  }

  onSubmit() {
    console.log(this.userForm);
    // this.submitted = true;
    // //console.log(this.f);
    // const params: BillDepositDto = {
    //   bkashTransactionNumber: this.f.tranId.value,
    //   bkashMobileNumber: this.f.mobileNo.value,
    //   userId: this.user.userId,
    // };
    // this.billService.saveDeposit(params).subscribe((bill: any) => {
    //   console.log(bill);
    // });
  }
}
