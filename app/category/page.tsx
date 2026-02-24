"use client";

import { useEffect, useState } from "react";
import CategoryCard from "@/components/CategoryCard";

export default function Category() {
  const [categories, setCategories] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const res = await fetch(
          "http://localhost/eventslisting/wp-json/wp/v2/event-category"
        );
        const data = await res.json();
        setCategories(data);
      } catch (err) {
        console.error("Failed to load categories", err);
      } finally {
        setLoading(false);
      }
    }

    fetchCategories();
  }, []);

 return (
     <section className="items-grid section custom-padding">
       <div className="container">
         <div className="row">
           <div className="col-12">
             <div className="section-title">
               <h2>All Categories</h2>
               <p>
                 There are many variations of passages of Lorem Ipsum available.
               </p>
             </div>
           </div>
         </div>
 
         <div className="single-head">
           <div className="row justify-content-center g-4">
             {loading ? (
               <p>Loading events...</p>
             ) : (
               categories.map((item) =>   <CategoryCard key={item.id} category={item} />)
             )}
           </div>
         </div>
       </div>
     </section>
   );
 }