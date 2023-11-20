import React from "react";
import footer1 from "../images/footer1.svg";
import footer2 from "../images/footer2.svg";
import footer3 from "../images/footer3.svg";
import footer4 from "../images/footer4.svg";
import footer5 from "../images/footer5.svg";
import footer6 from "../images/footer6.svg";
import footer7 from "../images/footer7.svg";
import logo from "../images/logo.svg";

function Footer() {
  return (
    <div className="footer-first">
      <div
        style={{ backgroundColor: "#2E2E2E", color: "white", flexShrink: "0" }}
      >
        <div style={{ display: "flex", paddingBottom: "2rem" }}>
          <div style={{ width: "1200px" }}>
            <p className="footer-start-one">
              Explore the most attractive areas in Kyiv neighborhoods to buy a
              home
            </p>
            <p className="footer-start-two">
              We are very proud of the service we provide. Discover the hottest
              communities available in our portfolio. Look through the most
              popular areas. Our locations and services prove we are the best.{" "}
              <br /> <br />
              Kyiv is the capital and most populous city of Ukraine.The city’s
              name is said to derive from the name of Kyi, one of its four
              legendary founders. We rank amongst the Top 6 agencies in the
              world.
            </p>
          </div>
          <div style={{ paddingTop: "2rem" }}>
            <div style={{ display: "flex" }}>
              <div style={{ paddingRight: "3rem", display: "flex" }}>
                {" "}
                <img
                  src={footer1}
                  alt="footer1"
                  className="footer-img"
                  style={{ width: "70px", height: "70px", flexShrink: "0" }}
                />
                <p> Trusted and verified property listings.</p>
              </div>
              <div style={{ paddingRight: "3rem", display: "flex" }}>
                {" "}
                <img
                  src={footer2}
                  alt="footer2"
                  className="footer-img"
                  style={{ width: "70px", height: "70px", flexShrink: "0" }}
                />
                <p> Complete info on trending properties listed.</p>
              </div>
            </div>
            <div style={{ display: "flex", paddingTop: "2rem" }}>
              <div style={{ paddingRight: "3rem", display: "flex" }}>
                {" "}
                <img
                  src={footer3}
                  alt="footer3"
                  className="footer-img"
                  style={{ width: "70px", height: "70px", flexShrink: "0" }}
                />
                <p> Home plan layouts for virtual tours of every house.</p>
              </div>
              <div style={{ paddingRight: "5rem", display: "flex" }}>
                {" "}
                <img
                  src={footer4}
                  alt="footer4"
                  className="footer-img"
                  style={{ width: "70px", height: "70px", flexShrink: "0" }}
                />{" "}
                <p> Personalized filters that make property search easier.</p>
              </div>{" "}
            </div>
            <div style={{ display: "flex", paddingTop: "2rem" }}>
              {" "}
              <div style={{ paddingRight: "3rem", display: "flex" }}>
                <img
                  src={footer5}
                  alt="footer5"
                  className="footer-img"
                  style={{ width: "70px", height: "70px", flexShrink: "0" }}
                />{" "}
                <p>Details infoabout the property that are in wishlist.</p>
              </div>
              <div style={{ paddingRight: "7rem", display: "flex" }}>
                {" "}
                <img
                  src={footer6}
                  alt="footer6"
                  className="footer-img"
                  style={{ width: "70px", height: "70px", flexShrink: "0" }}
                />
                <p> QR scan code for retrieving property details.</p>
              </div>
            </div>
            <p className="card-value">
              With tons of benefits for customers. Go True People Wall is the
              ultimate place where a buyer will search for properties online.
            </p>
          </div>
        </div>
        <hr />
        <div style={{ display: "flex" }}>
          <div style={{ paddingLeft: "10rem" }}>
            <img
              src={footer7}
              alt="footer7"
              style={{ width: "300px", height: "300px" }}
            />
          </div>
          <div
            style={{
              textAlign: "center",
              paddingLeft: "8rem",
              paddingTop: "2rem",
              paddingBottom: "5rem",
            }}
          >
            <span className="footer-one">
              Let Us Help You Find Your Ideal Buyer!
            </span>
            <p className="footer-two">
              Interior brings 41 years of interior designs experience right to
              your home or office. Our design professionals are equipped to help
              you determine the products and design that work best for our
              customers.
            </p>
            <div style={{ textAlign: "left" }}>
              <button className="footer-btn">REGISTER NOW</button>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-below">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div className="footer-home">
          <p>HOME</p>
          <p>PROFILE</p>
          <p>REPORTS</p>
          <p>INSIGHTS</p>
        </div>
        <div className="footer-home">
          <p>INFORMATION CENTER </p>
          <p>TERMS & CONDITIONS </p>
          <p>PRIVACY POLICY</p>
        </div>
        <div className="footer-last-one">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="25"
            viewBox="0 0 12 25"
            fill="none"
          >
            <path
              d="M9.89184 3.96406C8.39646 3.96406 7.97136 4.65156 7.97136 6.16719V8.66875H11.9487L11.5568 12.7211H7.9706V25H3.21085V12.7203H0V8.66797H3.21236V6.23672C3.21236 2.14844 4.79367 0 9.22932 0C10.1813 0 11.3201 0.078125 12 0.176563V3.98125"
              fill="#2E2E2E"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
          >
            <path
              d="M12.0027 6.09032C8.59743 6.09032 5.85075 8.95208 5.85075 12.5C5.85075 16.0479 8.59743 18.9097 12.0027 18.9097C15.4079 18.9097 18.1546 16.0479 18.1546 12.5C18.1546 8.95208 15.4079 6.09032 12.0027 6.09032ZM12.0027 16.6671C9.80212 16.6671 8.00312 14.7983 8.00312 12.5C8.00312 10.2017 9.79677 8.33287 12.0027 8.33287C14.2086 8.33287 16.0022 10.2017 16.0022 12.5C16.0022 14.7983 14.2032 16.6671 12.0027 16.6671ZM19.8412 5.82813C19.8412 6.65932 19.1987 7.32316 18.4062 7.32316C17.6085 7.32316 16.9713 6.65374 16.9713 5.82813C16.9713 5.00251 17.6138 4.33309 18.4062 4.33309C19.1987 4.33309 19.8412 5.00251 19.8412 5.82813ZM23.9157 7.34548C23.8247 5.3428 23.3856 3.56884 21.9775 2.10727C20.5747 0.64571 18.8721 0.188274 16.9499 0.0878612C14.9689 -0.0292871 9.03112 -0.0292871 7.05008 0.0878612C5.1333 0.182696 3.43068 0.640132 2.02253 2.1017C0.614389 3.56326 0.180703 5.33722 0.0843279 7.3399C-0.0281093 9.40394 -0.0281093 15.5905 0.0843279 17.6545C0.175349 19.6572 0.614389 21.4312 2.02253 22.8927C3.43068 24.3543 5.12794 24.8117 7.05008 24.9121C9.03112 25.0293 14.9689 25.0293 16.9499 24.9121C18.8721 24.8173 20.5747 24.3599 21.9775 22.8927C23.3803 21.4312 23.8193 19.6572 23.9157 17.6545C24.0281 15.5905 24.0281 9.40952 23.9157 7.34548ZM21.3564 19.8692C20.9388 20.9626 20.1303 21.8049 19.0755 22.2456C17.496 22.8983 13.7481 22.7477 12.0027 22.7477C10.2572 22.7477 6.50396 22.8927 4.92984 22.2456C3.88042 21.8105 3.07195 20.9681 2.64897 19.8692C2.02253 18.2235 2.16709 14.3186 2.16709 12.5C2.16709 10.6814 2.02789 6.77089 2.64897 5.13082C3.06659 4.03743 3.87507 3.19508 4.92984 2.75438C6.50931 2.1017 10.2572 2.25232 12.0027 2.25232C13.7481 2.25232 17.5014 2.10727 19.0755 2.75438C20.1249 3.1895 20.9334 4.03185 21.3564 5.13082C21.9828 6.77647 21.8383 10.6814 21.8383 12.5C21.8383 14.3186 21.9828 18.2291 21.3564 19.8692Z"
              fill="#2E2E2E"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="27"
            height="23"
            viewBox="0 0 27 23"
            fill="none"
          >
            <path
              d="M27 3.10433C26.0067 3.5475 24.9369 3.84295 23.8181 3.97973C24.9642 3.29035 25.8375 2.20157 26.2523 0.910346C25.1825 1.53954 23.9982 2.0046 22.7374 2.25081C21.7277 1.17297 20.2868 0.5 18.6931 0.5C15.6313 0.5 13.1534 2.98396 13.1534 6.05334C13.1534 6.49105 13.2025 6.91234 13.2953 7.31721C8.69436 7.08742 4.61189 4.87702 1.8775 1.51766C1.40267 2.33835 1.12978 3.29035 1.12978 4.30801C1.12978 6.2339 2.10673 7.93546 3.59127 8.93124C2.68526 8.90388 1.82838 8.6522 1.08065 8.23638C1.08065 8.25827 1.08065 8.28015 1.08065 8.30751C1.08065 10.9994 2.9909 13.2426 5.52335 13.7514C5.05943 13.8773 4.56822 13.9484 4.0661 13.9484C3.71134 13.9484 3.36204 13.9156 3.02365 13.8499C3.72771 16.0548 5.77441 17.6634 8.1977 17.7072C6.30382 19.1953 3.91328 20.0817 1.3208 20.0817C0.873257 20.0817 0.43117 20.0543 0 20.0051C2.45058 21.5808 5.36507 22.5 8.49242 22.5C18.6822 22.5 24.2547 14.0414 24.2547 6.69896C24.2547 6.45822 24.2492 6.21748 24.2383 5.98222C25.319 5.19435 26.2577 4.215 27 3.10433Z"
              fill="#2E2E2E"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="27"
            height="25"
            viewBox="0 0 27 25"
            fill="none"
          >
            <path
              d="M0 2.90404C0 2.06227 0.293031 1.36783 0.879068 0.820707C1.4651 0.273561 2.22698 0 3.16464 0C4.08558 0 4.83068 0.269343 5.39999 0.808081C5.98602 1.36364 6.27906 2.08753 6.27906 2.9798C6.27906 3.78788 5.99441 4.46126 5.4251 5C4.83907 5.55556 4.06883 5.83333 3.11441 5.83333H3.0893C2.16836 5.83333 1.42326 5.55556 0.853952 5C0.284642 4.44444 0 3.74578 0 2.90404ZM0.326511 25V8.13131H5.90231V25H0.326511ZM8.99161 25H14.5674V15.5808C14.5674 14.9916 14.6344 14.537 14.7683 14.2172C15.0027 13.6448 15.3586 13.1608 15.8358 12.7652C16.313 12.3695 16.9116 12.1717 17.6316 12.1717C19.5069 12.1717 20.4446 13.4428 20.4446 15.9848V25H26.0204V15.3283C26.0204 12.8367 25.4344 10.947 24.2623 9.65909C23.0902 8.37121 21.5414 7.72727 19.6158 7.72727C17.4558 7.72727 15.773 8.66162 14.5674 10.5303V10.5808H14.5423L14.5674 10.5303V8.13131H8.99161C9.02509 8.67002 9.04184 10.3451 9.04184 13.1566C9.04184 15.968 9.02509 19.9158 8.99161 25Z"
              fill="#2E2E2E"
            />
          </svg>
        </div>
        {/* <br /> */}
        {/* ©2022 wealth properties. */}
      </div>{" "}
    </div>
  );
}

export default Footer;
