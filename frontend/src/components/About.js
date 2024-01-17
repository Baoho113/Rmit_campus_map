import "./About.css";

const About = () => {
    return (
        <div className="about">
        <header>
          <h1>About Us</h1>
        </header>
        <section>
          <div className="container1">
            <h2>Our Team</h2>
            <ul>
              <li><strong>Huynh Bao Khang	 - S3911723​</strong> - Leader</li>
              <li><strong>Ho Gia Bao		 - s3958122​</strong> - Database creator</li>
              <li><strong>Dang Minh Tam	     - S3980087</strong> - Database creator</li>
              <li><strong>Joo Jeonghyeon   	- S3865746</strong> - Main coding</li>
              <li><strong>Lee Gayeong 		- S3891958</strong> - Main coding</li>
              <li><strong>Nguyen Duy Khang 	- S3963613​</strong> - Main coding</li>
            </ul>
          </div></section>
        <div className="container2">
          <section>
            <h2>Our Achievements</h2>
            <p>1. Display interactive maps: Websites can display interactive maps, allowing users to navigate and explore locations on the map.</p>
            <p>2. Place search: Provides the ability to search for specific places on the map, for example: restaurants, hotels, stores, hospitals, etc.</p>
            <p>3. Directions: Provides directions from point A to point B, including transportation options such as walking, car, bus, etc.</p>
            <p>4. Show detailed information: Provide detailed information about the locations, including ratings, user reviews, prices, contact numbers, operating hours, etc.</p>
            <p>5. Integrate third-party map services: Integrate map services such as Google Maps or OpenStreetMap to be able to use their powerful functionality on your website.</p>
          </section>
        </div>
        <section>
          <h2>Our Products</h2>
          <p>Here are some pictures of our products:</p>
          <div className="image-container">
            <img src="./image/1.png" alt="" className="image" />
            <img src="./image/2.png" alt="" className="image" />
          </div>
        </section>
        <div className="container3">
          <section>
            <h2>Customer Testimonials</h2>
            <blockquote>
              <p>"I am extremely satisfied with the quality of their products and their prompt customer service." - John, happy customer</p>
              <p>"Their products have exceeded my expectations. Highly recommended!" - Sarah, loyal customer</p>
            </blockquote>
          </section>
        </div>
        <div className="container4">
          <h2>Contact Us</h2>
          <p>Feel free to reach out to us with any questions or inquiries.</p>
          <p>Email: s3911723@rmit.edu.vn</p>
          <p>Phone: 0768723214</p>
        </div>
      </div>
    );
}

export default About