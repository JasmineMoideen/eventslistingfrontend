const steps = [
  {
    number: "01",
    title: "Create Account",
    desc: "Lorem ipsum dolor sit amet constur adipisicing sed do eiusmod tempor incididunt labore.",
  },
  {
    number: "02",
    title: "Post Your Ads",
    desc: "Lorem ipsum dolor sit amet constur adipisicing sed do eiusmod tempor incididunt labore.",
  },
  {
    number: "03",
    title: "Sell Your Item",
    desc: "Lorem ipsum dolor sit amet constur adipisicing sed do eiusmod tempor incididunt labore.",
  },
];

export default function HowItWorks() {
  return (
    <section
      className="how-works section"
      style={{ backgroundColor: "#fff" }}
    >
      <div className="container">

        <div className="row">
          <div className="col-12">
            <div className="section-title">
              <h2>How it Works</h2>
              <p>
                There are many variations of passages of Lorem Ipsum
                available, but the majority have suffered alteration in some
                form.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          {steps.map((step, index) => (
            <div className="col-lg-4 col-md-4 col-12" key={index}>
              <div className="single-work">
                <span className="serial">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
