import breakfast from '../images/breakfast.jpg';
import pancakes from '../images/pancakes.jpg';
import chickenWings from '../images/chicken-wings-barbecue-sweetly.jpg';
import meat from '../images/meat-food.jpg';
import pasta from '../images/pasta.jpg';
import iceCream from '../images/ice-cream.jpg';
import cake from '../images/cake.jpg';

export const foodData = [
	{
	    id: 1,
        title: 'Buffet Breakfast',
        category: 'breakfast',
        price: 19.99,
        image: breakfast,
        description: 'Full Buffet Breakfast with your choice of delicious fruits, toast and food'
	},
	{
		id: 2,
        title: 'Pancakes',
        category: 'breakfast',
        price: 12.75,
        image: pancakes,
        description: 'Fresh Buttermilk Pancakes make from scratch'
	},
	{
		id: 3,
        title: 'Chicken Wings with Salad',
        category: 'lunch',
        price: 15.79,
        image: chickenWings,
        description: 'Your choice of caesar or regular salad with chicken wings'
	},
	{
		id: 4,
        title: 'Buffet Meat',
        category: 'lunch',
        price: 25.55,
        image: meat,
        description: 'All you can eat meat!'
	},
	{
	    id: 5,
        title: 'Pasta',
        category: 'lunch',
        price: 17.99,
        image: pasta,
        description: 'Fresh Pasta with tomato or alfredo sauce'
    },
    {
    	id: 6,
        title: 'Ice cream',
        category: 'dessert',
        price: 11.99,
        image: iceCream,
        description: 'Your choice of different flavours of ice cream'
    },
    {
    	id: 7,
        title: 'Vanilla Cake',
        category: 'dessert',
        price: 10.99,
        image: cake,
        description: 'Our signature vanilla cake made in house with love'
    }
];