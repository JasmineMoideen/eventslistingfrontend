import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="call-action overlay section">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 col-12">

            <div className="inner">
              <div className="content">

                <h2>
                  Currently You are using free
                  <br />
                  Lite version of ClassiGrids
                </h2>

                <p>
                  Please, purchase full version of the template to get all
                  pages,
                  <br />
                  features and commercial license.
                </p>

                <div className="button">
                  <Link href="#" className="btn">
                    Purchase Now
                  </Link>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
