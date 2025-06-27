import React from 'react';

const HeroSection = () => (
  <section id="home" className="bg-yellow-50 text-center py-20 px-4">
    <h1 className="text-5xl font-bold text-green-800 mb-4">Lemon Tree Restaurant</h1>
    <p className="text-xl text-green-700">Fresh. Local. Delicious. Mediterranean-inspired.</p>
    <a
      href="#menu"
      className="inline-block mt-6 px-6 py-3 bg-green-800 text-yellow-300 font-medium rounded shadow hover:bg-yellow-300 hover:text-green-700 transition"
    >
      Explore Menu
    </a>
    <div className="mt-16 border-b-4 border-green-600 w-24 mx-auto rounded"></div>
  </section>
);


export default HeroSection;
