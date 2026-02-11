const features = [
  {
    icon: "lni lni-book",
    title: "Fully Documented",
    desc: "Buy and sell everything from used cars to mobile phones and computer or search for property.",
  },
  {
    icon: "lni lni-leaf",
    title: "Clean & Modern Design",
    desc: "Buy and sell everything from used cars to mobile phones and computer or search for property.",
  },
  {
    icon: "lni lni-cog",
    title: "Completely Customizable",
    desc: "Buy and sell everything from used cars to mobile phones and computer or search for property.",
  },
  {
    icon: "lni lni-pointer-up",
    title: "User Friendly",
    desc: "Buy and sell everything from used cars to mobile phones and computer or search for property.",
  },
  {
    icon: "lni lni-layout",
    title: "Awesome Layout",
    desc: "Buy and sell everything from used cars to mobile phones and computer or search for property.",
  },
  {
    icon: "lni lni-laptop-phone",
    title: "Fully Responsive",
    desc: "Buy and sell everything from used cars to mobile phones and computer or search for property.",
  },
];

export default function WhyChoose() {
  return (
    <section className="why-choose section">
      <div className="container">

        <div className="row">
          <div className="col-12">
            <div className="section-title">
              <h2>Why Choose Us</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div className="choose-content">
              <div className="row">

                {features.map((item, index) => (
                  <div
                    key={index}
                    className="col-lg-4 col-md-6 col-12"
                  >
                    <div className="single-list">
                      <i className={item.icon}></i>
                      <h4>{item.title}</h4>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                ))}

              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
