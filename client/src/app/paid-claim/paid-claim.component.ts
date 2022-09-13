import { Component, OnInit } from '@angular/core';
import { Bill } from '../_models/bill';
import { BillService } from '../_services/bill.service';

@Component({
  selector: 'app-paid-claim',
  templateUrl: './paid-claim.component.html',
  styleUrls: ['./paid-claim.component.css'],
})
export class PaidClaimComponent implements OnInit {
  bills: any = [];

  constructor(private billService: BillService) {}

  ngOnInit(): void {
    this.loadPaidClaimedBill();
  }

  loadPaidClaimedBill() {
    this.billService.getPaidClaims().subscribe((response: any) => {
      this.bills = response;
      console.log(response);
    });
  }
}
