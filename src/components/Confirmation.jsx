import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Confirmation = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  
  if (!state) {
    navigate('/reservation');
    return null;
  }

  const { name, email, date, time, guests } = state;

  return (
    <section className="max-w-lg mx-auto bg-green-50 p-8 rounded-lg shadow-md mt-10 text-center mb-10">
      <h2 className="text-3xl font-bold text-green-800 mb-4">Reservation Confirmed! 🎉</h2>
      <p className="text-lg text-green-700 mb-6">Thank you, <span className="font-semibold">{name}</span>!</p>

      <div className="text-left text-green-900 space-y-2 bg-white p-6 rounded-lg shadow-inner">
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Date:</strong> {date}</p>
        <p><strong>Time:</strong> {time}</p>
        <p><strong>Guests:</strong> {guests}</p>
      </div>

      <button
        onClick={() => navigate('/')}
        className="mt-6 bg-green-600 hover:bg-green-700 text-yellow-200 px-6 py-2 rounded shadow font-semibold transition"
      >
        Back to Home
      </button>
    </section>
  );
};

export default Confirmation;
