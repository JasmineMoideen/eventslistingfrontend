import Image from "next/image";

async function getEvent(slug: string) {
  const res = await fetch(
    `http://localhost/eventslisting/wp-json/wp/v2/event?slug=${slug}&_embed`,
    { cache: "no-store" }
  );

  const data = await res.json();
  return data[0];
}

export default async function EventDetail(props: any) {
  const { slug } = await props.params;

  const event = await getEvent(slug);

  if (!event) {
    return <div className="container section">Event not found</div>;
  }

  const acf = event.acf;
  const image =
    acf?.event_image?.url || "/placeholder.png";

  return (
    <div className="container section">

      {/* Title */}
      <h1
        dangerouslySetInnerHTML={{
          __html: event.title.rendered,
        }}
        className="mb-4"
      />

      {/* Image */}
      <div className="mb-4">
        <Image
          src={image}
          alt={event.title.rendered}
          width={900}
          height={500}
          style={{ width: "100%", height: "auto" }}
          unoptimized
        />
      </div>

      {/* Event Meta */}
      <div className="event-meta mb-4">
        <p><strong>Date:</strong> {acf?.event_date}</p>
        <p><strong>Time:</strong> {acf?.event_time}</p>
        <p><strong>Location:</strong> {acf?.location}</p>
        <p><strong>Venue:</strong> {acf?.venue}</p>
      </div>

      {/* Description */}
      <div
        dangerouslySetInnerHTML={{
          __html: event.content.rendered,
        }}
      />

    </div>
  );
}
