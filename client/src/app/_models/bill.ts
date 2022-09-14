export interface BillForIdDto {
  userId: number;
  billingMonth: Date;
}

export interface BillDepositDto {
  bkashTransactionNumber: string;
  bkashMobileNumber: string;
  userId: number;
}

export interface BillDto {
  userId: number;
  billAmount: number;
  billingMonth: Date;
  isPaid: boolean;
  isApproved: boolean;
}

export interface BillDepositDto {
  bkashTransactionNumber: string;
  bkashMobileNumber: string;
  userId: number;
}
