import React, { useState } from 'react';
import Categories from '../components/Categories';
import Menu from '../components/Menu';
import { foodData } from '../components/foodData';
import NavBar from '../NavBar.js';


const allCategories = ['all',...new Set(foodData.map(item => item.category))];

const MenuPage = () => {

	const [menuItems, setMenuItems] = useState(foodData);
	const [categories, setCategories] = useState(allCategories);

	const filterItems = (category) => {
		if (category === 'all') {
			return setMenuItems(foodData);
		}
		const newMenuItems = foodData.filter(item => item.category === category);
        setMenuItems(newMenuItems);
    }

  return (
  <>
  <div>
	<NavBar />
  </div>
  <div id="menu-page-background">
	  <div className="menu-background-section">
		<main>
			  <section className="menu section">
				<Categories categories={categories} filterItems={filterItems} />
				<Menu items={menuItems} />
			  </section>
			</main>
	  </div>
  </div>
  </>
  );
}

export default MenuPage;