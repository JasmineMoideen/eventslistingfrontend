import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      {/* Footer Top */}
      <div className="footer-top">
        <div className="container">
          <div className="row">

            {/* Mobile Apps */}
            <div className="col-lg-3 col-md-6 col-12">
              <div className="single-footer mobile-app">
                <h3>Mobile Apps</h3>

                <div className="app-button">
                  <Link href="#" className="btn">
                    <i className="lni lni-play-store"></i>
                    <span className="text">
                      <span className="small-text">Get It On</span>
                      Google Play
                    </span>
                  </Link>

                  <Link href="#" className="btn">
                    <i className="lni lni-apple"></i>
                    <span className="text">
                      <span className="small-text">Get It On</span>
                      App Store
                    </span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Locations */}
            <div className="col-lg-3 col-md-6 col-12">
              <div className="single-footer f-link">
                <h3>Locations</h3>
                <div className="row">
                  <div className="col-6">
                    <ul>
                      <li><Link href="#">Chicago</Link></li>
                      <li><Link href="#">New York City</Link></li>
                      <li><Link href="#">San Francisco</Link></li>
                      <li><Link href="#">Washington</Link></li>
                      <li><Link href="#">Boston</Link></li>
                    </ul>
                  </div>

                  <div className="col-6">
                    <ul>
                      <li><Link href="#">Los Angeles</Link></li>
                      <li><Link href="#">Seattle</Link></li>
                      <li><Link href="#">Las Vegas</Link></li>
                      <li><Link href="#">San Diego</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-lg-3 col-md-6 col-12">
              <div className="single-footer f-link">
                <h3>Quick Links</h3>
                <ul>
                  <li><Link href="#">About Us</Link></li>
                  <li><Link href="#">How It's Works</Link></li>
                  <li><Link href="#">Login</Link></li>
                  <li><Link href="#">Signup</Link></li>
                  <li><Link href="#">Help & Support</Link></li>
                </ul>
              </div>
            </div>

            {/* Contact */}
            <div className="col-lg-3 col-md-6 col-12">
              <div className="single-footer f-contact">
                <h3>Contact</h3>
                <ul>
                  <li>
                    23 New Design Str, Lorem Upsum 10
                    <br />
                    Hudson Yards, USA
                  </li>
                  <li>
                    Tel. +(123) 1800-567-8990
                    <br />
                    Mail. support@classigrids.com
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="inner">
            <div className="row">
              <div className="col-12">
                <div className="content">

                  <ul className="footer-bottom-links">
                    <li><Link href="#">Terms of use</Link></li>
                    <li><Link href="#">Privacy Policy</Link></li>
                    <li><Link href="#">Advanced Search</Link></li>
                    <li><Link href="#">Site Map</Link></li>
                    <li><Link href="#">Information</Link></li>
                  </ul>

                  <p className="copyright-text">
                    Designed and Developed by{" "}
                    <a
                      href="https://graygrids.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GrayGrids
                    </a>
                  </p>

                  <ul className="footer-social">
                    <li>
                      <Link href="#"><i className="lni lni-facebook-filled"></i></Link>
                    </li>
                    <li>
                      <Link href="#"><i className="lni lni-twitter-original"></i></Link>
                    </li>
                    <li>
                      <Link href="#"><i className="lni lni-youtube"></i></Link>
                    </li>
                    <li>
                      <Link href="#"><i className="lni lni-linkedin-original"></i></Link>
                    </li>
                  </ul>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
}
