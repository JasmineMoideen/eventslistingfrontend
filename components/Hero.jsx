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
              <form className="search-form" onSubmit={handleSearch}>
                <div className="row">
                  {/* Keyword */}
                  <div className="col-lg-4 col-md-4 col-12 p-0">
                    <div className="search-input">
                      <label htmlFor="keyword">
                        <i className="lni lni-search-alt theme-color"></i>
                      </label>
                      <input
                        type="text"
                        id="keyword"
                        placeholder="Product keyword"
                        value={keyword}
                        onChange={(e) => setKeyword(e.target.value)}
                      />
                    </div>
                  </div>

                  {/* Category */}
                  <div className="col-lg-3 col-md-3 col-12 p-0">
                    <div className="search-input">
                      <label htmlFor="category">
                        <i className="lni lni-grid-alt theme-color"></i>
                      </label>
                      <select
                        id="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                      >
                        <option value="" disabled>
                          Categories
                        </option>
                        <option>Vehicle</option>
                        <option>Electronics</option>
                        <option>Mobiles</option>
                        <option>Furniture</option>
                        <option>Fashion</option>
                        <option>Jobs</option>
                        <option>Real Estate</option>
                        <option>Animals</option>
                        <option>Education</option>
                        <option>Matrimony</option>
                      </select>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="col-lg-3 col-md-3 col-12 p-0">
                    <div className="search-input">
                      <label htmlFor="location">
                        <i className="lni lni-map-marker theme-color"></i>
                      </label>
                      <select
                        id="location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                      >
                        <option value="" disabled>
                          Locations
                        </option>
                        <option>New York</option>
                        <option>California</option>
                        <option>Washington</option>
                        <option>Birmingham</option>
                        <option>Chicago</option>
                        <option>Phoenix</option>
                      </select>
                    </div>
                  </div>

                  {/* Search Button */}
                  <div className="col-lg-2 col-md-2 col-12 p-0">
                    <div className="search-btn button">
                      <button className="btn" type="submit">
                        <i className="lni lni-search-alt"></i> Search
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
