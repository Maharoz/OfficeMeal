import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { take } from 'rxjs';
import { BillDepositDto, BillForIdDto } from '../_models/bill';
import { User } from '../_models/user';
import { AccountService } from '../_services/account.service';
import { BillService } from '../_services/bill.service';

@Component({
  selector: 'app-pay-bill',
  templateUrl: './pay-bill.component.html',
  styleUrls: ['./pay-bill.component.css'],
})
export class PayBillComponent implements OnInit {
  payBillForm: FormGroup;
  user: User;
  infoText: string;
  isBkash: boolean = true;
  isPayment: boolean = false;
  paymentText: string =
    'Scan the QR code and and after payment insert the transaction number';
  submitted: boolean = false;

  constructor(
    private accountService: AccountService,
    private billService: BillService,
    private toastr: ToastrService,
    private formBuilder: FormBuilder
  ) {
    this.accountService.currentUser$
      .pipe(take(1))
      .subscribe((user) => (this.user = user));
  }

  ngOnInit(): void {
    this.loadBill();

    this.payBillForm = this.formBuilder.group({
      tranId: ['', Validators.required],
      mobileNo: ['', Validators.required],
    });
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.f);
    const params: BillDepositDto = {
      bkashTransactionNumber: this.f.tranId.value,
      bkashMobileNumber: this.f.mobileNo.value,
      userId: this.user.userId,
    };
    this.billService.saveDeposit(params).subscribe((bill: any) => {
      console.log(bill);
    });
  }

  get f() {
    return this.payBillForm.controls;
  }

  paymentType(event) {
    this.isBkash = !this.isBkash;
    this.setTextForPayment(this.isBkash);
    console.log(event);
  }

  setTextForPayment(isBkash: boolean) {
    if (isBkash) {
      this.paymentText =
        'Scan the QR code and and after payment insert the transaction number';
    } else {
      this.paymentText =
        'After sending money please give your IFIC account number';
    }
  }

  loadBill() {
    let params: BillForIdDto = {
      userId: this.user.userId,
      billingMonth: new Date(Date.now()),
    };
    this.billService.getBillByMessMember(params).subscribe((bill: any) => {
      console.log(bill);
      if (bill == 'undefined' || bill == null) {
        this.infoText = 'You are not registered as mess member for this month';
        console.log('You are not registered as mess member for this month');
      } else if (bill.isPaid && !bill.isApproved) {
        this.infoText = 'You are submitted bill but not approved yet';
        console.log('You are submitted bill but not approved yet');
      } else if (bill.isPaid && bill.isApproved) {
        this.infoText = 'Your bill is approved';
        console.log('Your bill is approved');
      } else {
        this.infoText = 'Your bill is ' + bill.billAmount + ' Taka.';
        this.isPayment = true;
      }
    });
  }
}
