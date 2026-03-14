"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();

    console.log({
      keyword,
      category,
      location,
    });

    // TODO: route or fetch listings
  };

  return (
    <section className="hero-area overlay">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 offset-lg-1 col-md-12 col-12">
            <div className="hero-text text-center">
              {/* Heading */}
              <motion.div
                className="section-heading"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2>Live. Don't Just Exist.</h2>
                <p>
                  Discover the Most happening events around you
                  <br />
                  in Kochi
                </p>
              </motion.div>
              {/* Search Form */}
             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
