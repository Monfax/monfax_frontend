export enum PaymentStatus {
  PENDING = "PENDING",
  COMPLETED = "COMPLETED",
  FAILED = "FAILED"
}

export interface Payment {
  id: number;
  userId: number;
  amount: number;
  status: PaymentStatus;
  invoiceUrl: string;
  createdAt: string;
}

// mock data
export const paymentMock: Payment[] = [
  { id: 1, userId: 1, amount: 50, status: PaymentStatus.COMPLETED, invoiceUrl: "/invoice/123", createdAt: "2025-08-10" }
];
