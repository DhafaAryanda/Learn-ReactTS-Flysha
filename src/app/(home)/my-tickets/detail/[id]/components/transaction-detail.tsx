import React from "react";

export default function TransactionDetail() {
  return (
    <div className="flex flex-col gap-[30px] w-[400px]">
      <div className="flex flex-col gap-[18px]">
        <p className="font-semibold">Payment Details</p>
        <div className="flex justify-between">
          <span>ID Transaction</span>
          <span className="font-semibold">TRX1209KKM</span>
        </div>
        <div className="flex justify-between">
          <span>Seat Price</span>
          <span className="font-semibold">Rp 25.590.333</span>
        </div>
        <div className="flex justify-between">
          <span>Insurance 24%</span>
          <span className="font-semibold">Rp 89.294.599</span>
        </div>
        <div className="flex justify-between">
          <span>Baggage</span>
          <span className="font-semibold">Rp 5.394.283</span>
        </div>
        <div className="flex justify-between">
          <span>Grand Total</span>
          <span className="font-bold text-flysha-light-purple">
            Rp 149.384.293
          </span>
        </div>
        <div className="flex justify-between">
          <span>Status</span>
          <span className="font-bold text-[#8DFFBA]">Success Paid</span>
        </div>
      </div>
    </div>
  );
}
