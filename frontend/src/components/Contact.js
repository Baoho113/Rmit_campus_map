import "./Contact.css";

const Contact = () => {
    return (
        <div className="contact">
        <div className="container1">
          <img src="image/15.jpg" alt="Image Description" className="image" />
          <div className="text">
            <div className="white-frame">
              <div className="text-container">
                <p>Contact Us</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container2">
          <h1>Contact Us</h1>
          <div className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Family name:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">First name:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="name">Email:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Preferred contact number:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" rows={5} required defaultValue={""} />
            </div>
            <div className="form-group">
              <input type="submit" defaultValue="Submit" className="submit-btn" />
            </div>
          </div>
        </div>
      </div>
    );
}

export default Contact;