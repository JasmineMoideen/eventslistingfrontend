"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import BuyTicketModal from "@/components/BuyTicketModal";

export default function RSVPModal({ eventTitle, eventId }: any) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [buyOpen, setBuyOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submitRSVP = async (e: any) => {
    e.preventDefault();

    const res = await fetch(
      "http://localhost/eventslisting/wp-json/events/v1/rsvp",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          event_id: eventId,
          name: name,
          email: email,
        }),
      },
    );

    const data = await res.json();

    setOpen(false);
    if (res.ok) {
      setMessage("✅ RSVP saved successfully! Confirmation email sent.");
      setName("");
      setEmail("");
      setOpen(false);
      router.refresh();
    } else {
      setMessage("❌ " + (data.message || "Something went wrong."));
    }
  };

  return (
    <>
      {/* RSVP Button */}
      <div className="text-center mb-5">
        {message && (
          <div className="alert alert-success text-center">{message}</div>
        )}

        <div className="d-flex justify-content-center gap-3 flex-wrap">
          <button
            className="btn btn-primary px-4"
            onClick={() => setOpen(true)}
          >
            RSVP Now
          </button>

          <button
            className="btn btn-outline-primary px-4"
            onClick={() => setBuyOpen(true)}
          >
            Buy Tickets
          </button>
        </div>
      </div>

      

      {/* RSVP Modal */}
      {open && (
        <div className="modal-overlay">
          <div className="modal-box">
            <h4>RSVP for {eventTitle}</h4>

            <form onSubmit={submitRSVP}>
              <input
                type="text"
                placeholder="Your Name"
                className="form-control mb-2"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />

              <input
                type="email"
                placeholder="Email"
                className="form-control mb-3"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <button type="submit" className="btn btn-success w-100 mb-2">
                Submit RSVP
              </button>

              <button
                type="button"
                className="btn btn-secondary w-100"
                onClick={() => setOpen(false)}
              >
                Close
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Buy Ticket Modal */}
      <BuyTicketModal
      open={buyOpen}
      setOpen={setBuyOpen}
      eventId={eventId}
      ticketPrice={200}
    />
    </>
  );
}
