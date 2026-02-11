import Link from "next/link";

const plans = [
  {
    title: "Free",
    price: "$00",
    duration: "/ Month",
    features: [
      "One Listing",
      "Contact Display",
      "Image Gallery",
      "30 Days Availability",
      "Non-Featured",
      "Business Tagline",
    ],
  },
  {
    title: "Standard",
    price: "$59",
    duration: "/ Month",
    features: [
      "One Listing",
      "Contact Display",
      "Image Gallery",
      "60 Days Availability",
      "Non-Featured",
      "Business Tagline",
    ],
  },
  {
    title: "Premium",
    price: "$99",
    duration: "/ Month",
    features: [
      "One Listing",
      "Contact Display",
      "Image Gallery",
      "90 Days Availability",
      "Non-Featured",
      "Business Tagline",
    ],
  },
];

export default function Pricing() {
  return (
    <section className="pricing-table section">
      <div className="container">

        <div className="row">
          <div className="col-12">
            <div className="section-title">
              <h2>Pricing Plan</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          {plans.map((plan, index) => (
            <div
              className="col-lg-4 col-md-6 col-12"
              key={index}
            >
              <div className="single-table">

                <div className="table-head">
                  <div className="price">
                    <h2 className="amount">
                      {plan.price}
                      <span className="duration">{plan.duration}</span>
                    </h2>
                  </div>
                  <h4 className="title">{plan.title}</h4>
                </div>

                <ul className="table-list">
                  {plan.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>

                <div className="button">
                  <Link href="#" className="btn">
                    Select Plan
                  </Link>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
