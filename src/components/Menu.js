import React from 'react';

const Menu = ({ items }) => {
	return (
        <div className="menu-section">
			{items.map(menuItem => {
				const { id, title, image, description, price } = menuItem;
				return (
					<article key={id} className="menu-item">
						<img src={image} alt={title} className="picture"/>
						<div className="menu-item-info">
							<header>
								<h4>{title}</h4>
								<h4 className="price">${price}</h4>
							</header>
							<p className="menu-item-description">{description}</p>
						</div>
					</article>
				);
			})}
        </div>
    );
};

export default Menu;