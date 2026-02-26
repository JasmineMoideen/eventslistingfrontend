import Image from "next/image";
import RSVPModal from "@/components/RSVPModal";



async function getEvent(slug: string) {
  const res = await fetch(
    `http://localhost/eventslisting/wp-json/wp/v2/event?slug=${slug}&_embed`,
    { cache: "no-store" },
  );

  const data = await res.json();
  return data[0];
}

async function getRSVPStats(eventId: number) {
  const res = await fetch(
    `http://localhost/eventslisting/wp-json/events/v1/event/${eventId}`,
    { cache: "no-store" },
  );

  if (!res.ok) return null;
  return res.json();
}

export default async function EventDetail(props: any) {
  const { slug } = await props.params;

  const event = await getEvent(slug);
  const stats = await getRSVPStats(event.id);

  if (!event) {
    return <div className="container section">Event not found</div>;
  }

  const acf = event.acf;
  const image = acf?.event_image?.url || "/placeholder.png";

  return (
    <div className="container section">
      {/* Title */}
      <h1
        dangerouslySetInnerHTML={{
          __html: event.title.rendered,
        }}
        className="text-center mt-5 mb-4"
      />

      {/* Image */}
      <div className="text-center mb-5">
        <Image
          src={image}
          alt={event.title.rendered}
          width={800}
          height={400}
          className="img-fluid rounded shadow"
          unoptimized
        />
      </div>

      {/* Event Meta */}
      <div className="row mb-5">
        <div className="col-md-6 col-lg-3 mb-3">
          <div className="card h-100 shadow-sm border-0 p-3 text-center">
            <h6 className="text-muted">Date</h6>
            <p className="fw-semibold mb-0">{acf?.event_date}</p>
          </div>
        </div>

        <div className="col-md-6 col-lg-3 mb-3">
          <div className="card h-100 shadow-sm border-0 p-3 text-center">
            <h6 className="text-muted">Event Capacity</h6>
            <p className="fw-semibold mb-0">{acf?.event_capacity}</p>
          </div>
        </div>

        <div className="col-md-6 col-lg-3 mb-3">
          <div className="card h-100 shadow-sm border-0 p-3 text-center">
            <h6 className="text-muted">Location</h6>
            <p className="fw-semibold mb-0">{acf?.location_details}</p>
          </div>
        </div>

        <div className="col-md-6 col-lg-3 mb-3">
          <div className="card h-100 shadow-sm border-0 p-3 text-center">
            <h6 className="text-muted">Organiser Name</h6>
            <p className="fw-semibold mb-0">{acf?.organizer_name}</p>
          </div>
        </div>

        <div className="col-md-6 col-lg-3 mb-3">
          <div className="card h-100 shadow-sm border-0 p-3 text-center">
            <h6 className="text-muted">Organiser Contact</h6>
            <p className="fw-semibold mb-0">{acf?.organizer_contact}</p>
          </div>
        </div>

        <div className="col-md-6 col-lg-3 mb-3">
          <div className="card h-100 shadow-sm border-0 p-3 text-center">
            <h6 className="text-muted">Event Price</h6>
            <p className="fw-semibold mb-0">{acf?.event_price}</p>
          </div>
        </div>

        <div className="col-md-6 col-lg-3 mb-3">
          <div className="card h-100 shadow-sm border-0 p-3 text-center">
            <h6 className="text-muted">Registration Deadline</h6>
            <p className="fw-semibold mb-0">{acf?.registration_deadline}</p>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="card shadow-sm border-0 p-4 mb-5">
        <h3 className="mb-3">About this event</h3>

        <div
          className="event-description"
          dangerouslySetInnerHTML={{
            __html: acf?.event_description || "",
          }}
        />
      </div>

      {stats && (
        <div className="card shadow-sm border-0 p-4 mb-4 text-center">
          <h5 className="mb-3">Event Availability</h5>

          <p className="mb-2">
            <strong>Seats Filled:</strong> {stats.rsvp_count} /{" "}
            {stats.rsvp_limit}
          </p>

          <p
            className={`fw-bold ${
              stats.remaining_seats === 0 ? "text-danger" : "text-success"
            }`}
          >
            Remaining Seats: {stats.remaining_seats}
          </p>

          {stats.remaining_seats === 0 && (
            <p className="text-danger fw-bold mt-2">
              🚫 This event is fully booked
            </p>
          )}
        </div>
      )}

      <RSVPModal eventTitle={event.title.rendered} eventId={event.id} />
    </div>
  );
}
