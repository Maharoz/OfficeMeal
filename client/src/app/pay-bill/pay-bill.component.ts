import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { take } from 'rxjs';
import { BillForIdDto } from '../_models/bill';
import { User } from '../_models/user';
import { AccountService } from '../_services/account.service';
import { BillService } from '../_services/bill.service';

@Component({
  selector: 'app-pay-bill',
  templateUrl: './pay-bill.component.html',
  styleUrls: ['./pay-bill.component.css'],
})
export class PayBillComponent implements OnInit {
  user: User;
  infoText: string;
  isBkash: boolean = true;
  paymentText: string =
    'Scan the QR code and and after payment insert the transaction number';
  constructor(
    private accountService: AccountService,
    private billService: BillService,
    private toastr: ToastrService
  ) {
    this.accountService.currentUser$
      .pipe(take(1))
      .subscribe((user) => (this.user = user));
  }

  ngOnInit(): void {
    this.loadBill();
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
      }
    });
  }
}
