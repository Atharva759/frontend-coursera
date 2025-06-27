import React from 'react';

const Contact = () => (
  <section id="contact" className="text-center py-16 px-6 bg-yellow-50">
    <h2 className="text-3xl font-semibold text-green-800 mb-4">Contact & Location</h2>
    <p className="text-gray-700 mb-1">📍 123 Citrus Avenue, Flavor Town</p>
    <p className="text-gray-700 mb-1">🕒 Open daily: 11 AM – 10 PM</p>
    <p className="text-gray-700">📞 (123) 456‑7890</p>
    <form className="mt-6 max-w-md mx-auto flex flex-col space-y-4">
      <input type="text" placeholder="Name" className="p-3 border rounded focus:outline-none focus:ring-2 focus:ring-green-300" />
      <input type="email" placeholder="Email" className="p-3 border rounded focus:outline-none focus:ring-2 focus:ring-green-300" />
      <textarea placeholder="Message" rows="4" className="p-3 border rounded focus:outline-none focus:ring-2 focus:ring-green-300"></textarea>
      <button type="submit" className="inline-block px-6 py-3 bg-yellow-400 text-green-900 font-medium rounded hover:bg-yellow-300 transition">
        Send Message
      </button>
    </form>
  </section>
);


export default Contact;
