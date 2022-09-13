export interface BillForIdDto {
  userId: number;
  billingMonth: Date;
}

export interface BillDepositDto {
  bkashTransactionNumber: string;
  bkashMobileNumber: string;
  userId: number;
}