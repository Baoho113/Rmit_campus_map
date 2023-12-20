const Home = () => {
    return (
        <>
  <section className="main">
    <img src="image/Picture1.png" alt="Background image" />
    <section className="hero" id="home">
      <h1>
        Explore <span>RMIT</span>
        <br />
        SaiGon South Campus
      </h1>
      <a href="building.html" className="download">
        {" "}
        Get Started
      </a>
    </section>
  </section>
  <section className="course" id="course">
    <h1 className="heading">Most Popular Courses</h1>
    <hr className="line1" />
    <div className="box-container">
      <div className="box">
        <img src="image/Picture2.png" alt="" />
        <h3>User Experience Design</h3>
        <a href="#">
          See Course Guide <i className="fas fa-arrow-right" />
        </a>
      </div>
      <div className="box">
        <img src="image/Picture3.png" alt="" />
        <h3>Computer Science</h3>
        <a href="#">
          See Course Guide <i className="fas fa-arrow-right" />
        </a>
      </div>
      <div className="box">
        <img src="image/Picture4.png" alt="" />
        <h3>Business Management</h3>
        <a href="#">
          See Course Guide <i className="fas fa-arrow-right" />
        </a>
      </div>
    </div>
    <a href="#" className="btn">
      See all <i className="fas fa-arrow-right" />
    </a>
  </section>
  <section className="featured" id="featured">
    <div className="featured-slider">
      <div className="wrapper">
        <div className="box">
          <img
            src="image/icon1.png"
            alt=""
            style={{ width: 80, height: 80, marginRight: 30, float: "left" }}
          />
          <h1>Find a course</h1>
          <p>
            Search by subject, course or region to find the right course for
            you.
          </p>
          <a href="#" className="button1">
            Get Started <i className="fas fa-arrow-right" />
          </a>
        </div>
        <div className="box">
          <img
            src="image/icon2.png"
            alt=""
            style={{ width: 80, height: 80, marginRight: 30, float: "left" }}
          />
          <h1>Find a university</h1>
          <p>Search for universities to find out about courses and more. </p>
          <a href="#" className="button1">
            Get Started <i className="fas fa-arrow-right" />
          </a>
        </div>
        <div className="box">
          <img
            src="image/icon3.png"
            alt=""
            style={{ width: 80, height: 80, marginRight: 30, float: "left" }}
          />
          <h1>Find an open day</h1>
          <p>Search and book open days to help you make the right choice. </p>
          <a href="#" className="button1">
            Get Started <i className="fas fa-arrow-right" />
          </a>
        </div>
      </div>
    </div>
  </section>
  <section className="faps" id="faps">
    <hr className="line2" />
    <img src="image/Picture6.png" alt="" />
    <h1>We're hear to help</h1>
    <p>
      Read through our FAQs and, if you can't find what you're looking for, our
      experts will be happy to answer your questions.
    </p>
    <div className="row">
      <a href="#" className="button2">
        Read FAQS
      </a>
      <a href="#" className="button3">
        <i className="fa fa-envelope" /> Ask a question
      </a>
    </div>
  </section>
  <footer className="footer">
    <div className="container">
      <h1>Subcribe to our newsletter</h1>
      <p>
        Get expert advice for your journey to university delivered to your inbox
        each month. It's short, and worthwhile - we promise!
      </p>
      <form action="">
        <input
          type="text"
          id="email"
          name="email"
          placeholder="Email Address"
        />
        <label className="container1">
          I confirm I am over 16 and I agree to the Terms and Conditions and
          Privacy Notice.
          <input type="checkbox" />
          <span className="checkmark" />
        </label>
        <input type="submit" defaultValue="Subcribe Now" />
      </form>
      <div className="social-links">
        <a href="#">
          <i className="fab fa-facebook" />
        </a>
        <a href="#">
          <i className="fab fa-twitter" />
        </a>
        <a href="#">
          <i className="fab fa-instagram" />
        </a>
        <a href="#">
          <i className="fab fa-linkedin" />
        </a>
      </div>
      <div className="policy">
        <a href="#">About</a>
        <a href="#">Contact Us</a>
        <a href="#">FAQS</a>
        <a href="#">Terms and Conditions</a>
        <a href="#">Cookie Policy</a>
        <a href="#">Privacy</a>
      </div>
    </div>
  </footer>
</>

    );
}

export default Home;