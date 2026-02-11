"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    

    
    setEmail("");
    alert("Subscribed successfully!");
  };

  return (
    <div className="newsletter section">
      <div className="container">
        <div className="inner-content">

          <div className="row align-items-center">

            <div className="col-lg-6 col-md-6 col-12">
              <div className="title">
                <i className="lni lni-alarm"></i>
                <h2>Newsletter</h2>
                <p>We don't send spam so don't worry.</p>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-12">
              <div className="form">
                <form
                  onSubmit={handleSubmit}
                  className="newsletter-form"
                >
                  <input
                    type="email"
                    placeholder="Your email address"
                    required
                    value={email}
                    onChange={(e) =>
                      setEmail(e.target.value)
                    }
                  />

                  <div className="button">
                    <button className="btn" type="submit">
                      Subscribe
                      <span className="dir-part"></span>
                    </button>
                  </div>

                </form>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
