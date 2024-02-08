import NavBar from '../NavBar.js';
import customerImage from '../images/customer-servc.jpg';

const ContactPage = () => (
	<>
	<div>
    	<NavBar />
    </div>
    <div id="menu-page-background">
    	<>
    	  <div className="menu-background-section">
    		<div className="row-flex">
    		      <div id="contact-us-image">
    			  	<img alt="customer_service" src={customerImage} />
    			  </div>
    			  <div className="contact-us-form">
					  <div>
						  <h3> Make an Inquiry </h3>
							<form className>
								<div className="form-group">
									<input type="text" placeholder="Your Full Name" />
								</div>
								<div className="form-group">
									<input type="email" placeholder="Your Email" />
								</div>
								<div className="form-group">
									<textarea rows="5" cols="40" placeholder="Your Inquiry"/>
								</div>
							  <button type="submit" className="btn btn-primary"> Submit </button>
							</form>
					  </div>
					  <div>
						  <div className="contact-us-display">
							<h3>Hours of Operation</h3>
							<p>
								<span>Monday - Friday: 09:00 — 18:00</span>
								<span>Friday - Saturday: 09:00 — 17:00 </span>
								<span>Sunday: Closed </span>
							</p>
						  </div>
						  <div className="contact-us-display">
							<h3>Contact Us</h3>
							<p>
								<span>613-613-6134</span>
								<span>#1 Canotech Road</span>
								<span>Ottawa, Ontario</span>
								<span>K1V9T4 CA</span>
							</p>
						  </div>
					  </div>
            	  </div>
            	</div>
    	  </div>
    	  </>
    </div>
    </>
);

export default ContactPage;