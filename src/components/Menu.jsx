import React from 'react';
import baklava from "../assets/baklava.jpg"
import grilledlemon from "../assets/grilledlemon.jpg"
import pasta from "../assets/pasta.jpg"
import medbowl from "../assets/medbowl.jpg"
import salad from "../assets/salad.jpg"
import desert from "../assets/desert.jpg"


const dishes = [
  { img: grilledlemon, name: 'Grilled Lemon Chicken', price: '$14.99', desc: 'Served with roasted veggies.' },
  { img: pasta, name: 'Seafood Pasta', price: '$18.99', desc: 'Shrimp, mussels, garlic butter.' },
  { img: salad, name: 'Fresh Garden Salad', price: '$9.99', desc: 'Mixed greens & house vinaigrette.' },
  { img: desert, name: 'Lemon Tart', price: '$6.99', desc: 'Sweet and tangy dessert.' },
  { img: medbowl, name: 'Mediterranean Bowl', price: '$12.99', desc: 'Quinoa, falafel, hummus.' },
  { img: baklava, name: 'Baklava Bites', price: '$5.99', desc: 'Honey-walnut sweets.' },
];


const Menu = () => (
  <section id="menu" className="py-16 px-6 bg-yellow-50">
    <h2 className="text-3xl font-semibold text-center text-green-800 mb-8">Our Menu</h2>

    {/* Grid container with proper spacing */}
    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
      {dishes.map((d) => (
        <div
          key={d.name}
          className="bg-white rounded-lg shadow-md hover:shadow-lg transition overflow-hidden"
        >
          <img src={d.img} alt={d.name} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-bold text-green-700">{d.name}</h3>
            <p className="text-gray-600">{d.desc}</p>
            <p className="mt-2 text-yellow-500 font-semibold">{d.price}</p>
          </div>
        </div>
      ))}
    </div>

    {/* Decorative green line at the bottom */}
    <div className="mt-16 h-1 bg-green-600 w-24 mx-auto rounded"></div>
  </section>
);


export default Menu;
