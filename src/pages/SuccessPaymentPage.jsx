import React from "react";
import { Link } from "react-router";
import { clapImg } from "../assets";

export default function SuccessPaymentPage() {
  return (
    <div className="flex gap-8 flex-col items-center justify-center h-full">
      <div className="w-[230px] h-[300px]">
        <img className="w-full" src={clapImg} alt="payment success" />
      </div>
      <div className="text-center">
        <h2 className="mb-6 text-4xl font-bold">Payment Confirmed</h2>
        <p className="mb-8 text-lg font-bold text-gray-500">
          Your payment was successful, and you're all set! Start exploring your
          personalized fitness plans
        </p>
        <Link
          to="/home"
          className="inline-flex items-center justify-center rounded-md border border-transparent bg-green-450 px-6 py-3 text-base font-medium text-white hover:bg-green-700 focus:ring-2 focus:ring-green-450 focus:ring-offset-2 focus:outline-none"
        >
          Start Now!
        </Link>
      </div>
    </div>
  );
}
