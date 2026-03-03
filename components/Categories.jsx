"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost/eventslisting/wp-json/wp/v2/event-category")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  
  return (
  
    <section className="categories">
      <div className="container">
        <div className="category-slider">
          <button className="cat-prev">
            <i className="lni lni-chevron-left"></i>
          </button>
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={15}
            slidesPerView={6}
            autoplay={{ delay: 2500 }}
            breakpoints={{
              320: { slidesPerView: 2 },
              576: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              992: { slidesPerView: 5 },
              1200: { slidesPerView: 6 },
            }}
          >
            {categories.map((cat) => (
              
              <SwiperSlide key={cat.id}>
                <Link href={`/category/${cat.slug}`} className="single-cat">
                  <div className="icon">
                    
                    <Image
                      src={cat.acf?.taxonomy_image || "/placeholder.png"}
                      alt={cat.name}
                      width={200}
                      height={100}
                      unoptimized
                    />
                  </div>

                
                  <h5 className="total">{cat.count} Events</h5>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
          <button className="cat-next">
            <i className="lni lni-chevron-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
}
