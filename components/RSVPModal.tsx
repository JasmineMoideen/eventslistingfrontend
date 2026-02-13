
"use client";

import { useState } from "react";

export default function RSVPModal({ eventTitle, eventId }: any) {
  const [open, setOpen] = useState(false);
   const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const submitRSVP = async (e: any) => {
    e.preventDefault();

    await fetch(
      "http://localhost/eventslisting/wp-json/events/v1/rsvp",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          event_id: eventId,
          name,
          email,
        }),
      }
    );
    alert("RSVP saved!");
    setOpen(false);
  };

  return (
    <>
      {/* RSVP Button */}
      <div className="text-center mb-5">
        <button
          className="btn btn-primary px-4"
          onClick={() => setOpen(true)}
        >
          RSVP Now
        </button>
      </div>

      {/* Modal */}
      {open && (
        <div className="modal-overlay">
          <div className="modal-box">
            <h4>RSVP for {eventTitle}</h4>

            <form>
              <input
                type="text"
                placeholder="Your Name"
                className="form-control mb-2"
              />
              <input
                type="email"
                placeholder="Email"
                className="form-control mb-3"
              />

              <button className="btn btn-success w-100 mb-2">
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
