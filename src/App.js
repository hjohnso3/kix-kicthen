import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';

function App() {
  return (
    <BrowserRouter>
        <div className="App">
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
        </div>
     </BrowserRouter>
  );
}

export default App;
