import Link from "next/link";
import Image from "next/image";

export default function ListingCard({ item, categories }) {
  const acf = item.acf || {};

  const title = item.title?.rendered || "Event";
  const updated = new Date(item.modified).toLocaleDateString();

  const location = acf.location_details || "Location TBD";
  const date = acf.event_date || "";
  const eventfinal = acf.event_end_date || "";
  const price = acf.event_price || "Free";

  const image = acf.event_image?.url || "/placeholder.png";
  const categoryId = item["event-category"]?.[0];
  const category = categories.find((cat) => cat.id === categoryId);

  return (
    <div className="col-lg-4 col-md-6 col-12">
      <div className="single-grid">
        <div className="image">
          <Link href={`/event/${item.slug}`} className="thumbnail">
            <Image
              src={image}
              alt={title}
              width={600}
              height={400}
              style={{ width: "100%", height: "auto" }}
              unoptimized
            />
          </Link>

          <div className="author">
            {acf.rsvp && <p className="sale">RSVP Open</p>}
          </div>
        </div>

        <div className="content">
          <div className="top-content">
            <Link href="#" className="tag">
              {category?.name}
            </Link>

            <h3 className="title" dangerouslySetInnerHTML={{ __html: title }} />

            <p className="update-time">Event Date: {date}</p>

            <ul className="info-list">
              <li>
                <i className="lni lni-map-marker"></i> {location}
              </li>

              <li>
                <i className="lni lni-timer"></i> Reg Closes on: {eventfinal}
              </li>
            </ul>
          </div>

          <div className="bottom-content">
            <p className="price">
              Ticket Price: <span>${price}</span>
            </p>

            <Link href="#" className="like">
              <i className="lni lni-heart"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
