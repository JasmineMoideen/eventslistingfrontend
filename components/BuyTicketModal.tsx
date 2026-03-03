"use client";
import Script from "next/script";

import { useState } from "react";
interface BuyTicketModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  eventId: number;
  ticketPrice?: number;
}

export default function BuyTicketModal({
  open,
  setOpen,
  eventId,
  ticketPrice = 200,
}: BuyTicketModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);

  if (!open) return null;

  const totalAmount = ticketPrice * quantity;

  const handlePayment = async () => {
    if (!name || !email || !phone) {
      alert("Please fill all fields");
      return;
    }

    setLoading(true);

    try {
      // 🔹 Step 1 — create order from your backend (NEXT STEP)
      const res = await fetch(
        "http://localhost/eventslisting/wp-json/events/v1/create-order",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            amount: totalAmount * 100, // paise!
            event_id: eventId,
            name,
            email,
            phone,
            quantity,
          }),
        },
      );

      const data = await res.json();

      // 🔹 Step 2 — open Razorpay
      const options = {
        key: "rzp_test_SMghkKiw1mCMEv",
        amount: data.amount,
        currency: "INR",
        name: "Event Ticket",
        description: "Ticket Purchase",
        order_id: data.orderId,

        handler: async function (response: any) {
          alert("✅ Payment successful!");
          setOpen(false);
        },

        prefill: {
          name,
          email,
          contact: phone,
        },

        theme: {
          color: "#00bae0",
        },
      };

      const rzp = new (window as any).Razorpay(options);
      rzp.open();
    } catch (err) {
      console.error(err);
      alert("Payment failed");
    } finally {
      setLoading(false);
    }
  };

  return (
   <>
     <Script
      src="https://checkout.razorpay.com/v1/checkout.js"
      strategy="lazyOnload"
    />
    
    <div className="modal fade show d-block" tabIndex={-1}>
      <div className="modal-dialog">
        <div className="modal-content rounded-4">
          {/* Header */}
          <div className="modal-header">
            <h5 className="modal-title">Buy Tickets</h5>
            <button
              className="btn-close"
              onClick={() => setOpen(false)}
            ></button>
          </div>

          {/* Body */}
          <div className="modal-body">
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Phone</label>
              <input
                className="form-control"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Ticket Quantity</label>
              <input
                type="number"
                min={1}
                className="form-control"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
              />
            </div>

            <div className="alert alert-info text-center">
              Total: <strong>₹{totalAmount}</strong>
            </div>
          </div>

          {/* Footer */}
          <div className="modal-footer">
            <button
              className="btn btn-secondary"
              onClick={() => setOpen(false)}
            >
              Cancel
            </button>

            <button
              className="btn btn-primary"
              onClick={handlePayment}
              disabled={loading}
            >
              {loading ? "Processing..." : "Pay with Razorpay"}
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
