"use client";

import { useEffect, useState } from "react";
import ListingCard from "./ListingCard";

export default function DanceEvents() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🔹 Fetch events
  useEffect(() => {
    async function fetchEvents() {
      try {
        const res = await fetch(
          "http://localhost/eventslisting/wp-json/wp/v2/event"
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

  // 🔹 Fetch categories
  useEffect(() => {
    fetch("http://localhost/eventslisting/wp-json/wp/v2/event-category")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  // 🔥 Find dance category ID
  const danceCategoryId = categories.find(
    (c) => c.slug === "dance"
  )?.id;

  // 🔥 Filter events safely
  const danceEvents = products.filter(
    (item) =>
      danceCategoryId &&
      item["event-category"]?.includes(danceCategoryId)
  );

  return (
    <section className="items-grid section custom-padding">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title">
              <h2>Dance Events</h2>
              <p>Explore upcoming dance events.</p>
            </div>
          </div>
        </div>

        <div className="single-head">
          <div className="row">
            {loading ? (
              <p>Loading events...</p>
            ) : danceEvents.length === 0 ? (
              <p>No dance events found.</p>
            ) : (
              danceEvents.map((item) => (
                <ListingCard
                  key={item.id}
                  item={item}
                  categories={categories}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}