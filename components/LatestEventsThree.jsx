"use client";

import { useEffect, useState } from "react";
import ListingCard from "./ListingCard";

export default function LatestEventsThree() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchEvents() {
      try {
        const res = await fetch(
          "http://localhost/eventslisting/wp-json/wp/v2/event",
        );
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error("Failed to load events", err);
      } finally {
        setLoading(false);
      }
    }

    fetchEvents();
  }, []);
  useEffect(() => {
    fetch("http://localhost/eventslisting/wp-json/wp/v2/event-category")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <section className="items-grid section custom-padding">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title">
              <h2>Latest Events</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available.
              </p>
            </div>
          </div>
        </div>

        <div className="single-head">
          <div className="row">
            {loading ? (
              <p>Loading events...</p>
            ) : (
              products.slice(0,3).map((item) => <ListingCard key={item.id} item={item} categories={categories} />)
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
