async function getEventsBySlug(slug: string) {
  const catRes = await fetch(
    `http://localhost/eventslisting/wp-json/wp/v2/event-category?slug=${slug}`,
    { cache: "no-store" },
  );

  const category = await catRes.json();
  if (!category.length) return [];

  const categoryId = category[0].id;

  const eventsRes = await fetch(
    `http://localhost/eventslisting/wp-json/wp/v2/event?event-category=${categoryId}&_embed`,
    { cache: "no-store" },
  );

  return eventsRes.json();
}

export default async function CategoryPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;

  const events = await getEventsBySlug(params.slug);

  return (
    <div className="container section">
      <h2 className="mb-4 text-capitalize">{params.slug} Events</h2>

      <div className="row">
        {events.map((event: any) => {
         const image = event.acf.event_image?.url || "/placeholder.png";

          return (
            <div key={event.id} className="col-lg-4 col-md-6 col-12">
              <div className="single-grid">
                <div className="image">
                <img
                  src={image}
                  alt={event.title.rendered}
                  className="img-fluid"
                />
                </div>

                <h3
                  dangerouslySetInnerHTML={{
                    __html: event.title.rendered,
                  }}
                />

                <p
                  dangerouslySetInnerHTML={{
                    __html: event.excerpt?.rendered || "",
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>

      {!events.length && <p>No events found.</p>}
    </div>
  );
}
