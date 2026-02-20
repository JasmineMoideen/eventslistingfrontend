"use client";

import { useState } from "react";

export default function RSVPModal({ eventTitle, eventId }: any) {
  const [open, setOpen] = useState(false);
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

        <button className="btn btn-primary px-4" onClick={() => setOpen(true)}>
          RSVP Now
        </button>
      </div>

      {/* Modal */}
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
    </>
  );
}
