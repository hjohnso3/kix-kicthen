import NavBar from '../NavBar.js';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel} from 'react-responsive-carousel';
import pancakes from '../images/pancakes.jpg';
import meats from '../images/meat-food.jpg';
import vegFruit from '../images/veg-fruits.jpg';
import breakfast from '../images/breakfast.jpg';

const backgroundImages = [
   meats,
   breakfast,
   vegFruit,
]

const HomePage = () => (
    <>
    <div id="page-background">
		  <NavBar />
		  <div className="section-intro">
			<h1>Kix Kitchen</h1>
		  </div>
	  </div>
	  <div className="info-section">
		<h1> Welcome to Kix Kitchen </h1>
		<p> Where culinary excellence meets the vibrant flavors of African cuisine. Our small chops and appetizers are crafted with passion and precision, offering a tantalizing journey for your taste buds.

			Indulge in a delightful array of small chops, each bite bursting with the rich and diverse tastes of Africa. From crispy samosas to succulent skewers, our menu is a celebration of authentic flavors and culinary traditions.

			At Kix Kitchen, we take pride in sourcing the finest ingredients to ensure every dish is a masterpiece. Whether you're craving the bold spices of West African cuisine or the subtle elegance of East African flavors, our menu is a tribute to the continent's gastronomic diversity.

			Immerse yourself in our welcoming ambiance, where the warmth of African hospitality meets modern sophistication. Our commitment to exceptional service ensures that every visit is a memorable experience.

			Join us at and embark on a culinary adventure that captures the essence of African cuisine. From small gatherings to special occasions, our small chops and appetizers are the perfect complement to any celebration.

			Indulge, savor, and discover the taste of Africa at Kix Kitchen!
		 </p>
	  </div>
	  <div className="box">
		  <Carousel autoPlay infiniteLoop={true} autoPlaySpeed={4000} useKeyboardArrows={true}>
			  {backgroundImages.map((image, index) => (
			  <div id="background-image-one">
				  <div className="slide">
					 <img alt="background_images" src={image} key={index} />
				  </div>
			  </div>
			  ))}
		  </Carousel>
	  </div>
	  <div className="row-flex">
		  <div className="flex-column-form">
			  <h3> Make an Inquiry </h3>
				<form>
					<div class="form-group">
						<input type="text" placeholder="Your Full Name" />
					</div>
					<div class="form-group">
						<input type="email" placeholder="Your Email" />
					</div>
					<div class="form-group">
						<textarea rows="5" cols="40" placeholder="Your Inquiry"/>
					</div>
				  <button type="submit" className="btn btn-primary"> Submit </button>
				</form>
		  </div>
		  <div className="hours">
			<h3>Hours of Operation</h3>
			<p>
				<span>Monday - Friday: 09:00 — 18:00</span>
				<span>Friday - Saturday: 09:00 — 17:00 </span>
				<span>Sunday: Closed </span>
			</p>
		  </div>
		  <div className="contact-us">
			<h3>Contact Us</h3>
			<p>
				<span>613-613-6134</span>
				<span>#1 Canotech Road</span>
				<span>Ottawa, Ontario</span>
				<span>K1V9T4 CA</span>
			</p>
		  </div>
	  </div>
    </>
);

export default HomePage;