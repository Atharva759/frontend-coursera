import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const Reservation = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm();

  const navigate = useNavigate();
  const onSubmit = (data) => {
    navigate('/reservation/confirmed',{state:data});
    reset();
  };

  return (
    
    <section id="reservation" className="max-w-md mx-auto bg-yellow-50 p-8 rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold text-green-800 mb-6 text-center">Reserve a Table</h2>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <label className="block mb-1 font-medium text-green-700">Name</label>
        <input
          {...register('name', { required: 'Name is required' })}
          type="text"
          className={`w-full p-3 rounded border ${
            errors.name ? 'border-red-500' : 'border-green-300'
          } focus:outline-none focus:ring-2 focus:ring-green-400 mb-4`}
          placeholder="Your full name"
          />
        {errors.name && <p className="text-red-500 mb-4">{errors.name.message}</p>}

        
        <label className="block mb-1 font-medium text-green-700">Email</label>
        <input
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value:
              /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
              message: 'Invalid email address',
            },
          })}
          type="email"
          className={`w-full p-3 rounded border ${
            errors.email ? 'border-red-500' : 'border-green-300'
          } focus:outline-none focus:ring-2 focus:ring-green-400 mb-4`}
          placeholder="you@example.com"
          />
        {errors.email && <p className="text-red-500 mb-4">{errors.email.message}</p>}

        
        <label className="block mb-1 font-medium text-green-700">Date</label>
        <input
          {...register('date', {
            required: 'Date is required',
            validate: (value) => {
              const selectedDate = new Date(value);
              const today = new Date();
              today.setHours(0, 0, 0, 0);
              return selectedDate >= today || 'Date cannot be in the past';
            },
          })}
          type="date"
          className={`w-full p-3 rounded border ${
            errors.date ? 'border-red-500' : 'border-green-300'
          } focus:outline-none focus:ring-2 focus:ring-green-400 mb-4`}
          />
        {errors.date && <p className="text-red-500 mb-4">{errors.date.message}</p>}

        
        <label className="block mb-1 font-medium text-green-700">Time</label>
        <input
          {...register('time', { required: 'Time is required' })}
          type="time"
          className={`w-full p-3 rounded border ${
            errors.time ? 'border-red-500' : 'border-green-300'
          } focus:outline-none focus:ring-2 focus:ring-green-400 mb-4`}
          />
        {errors.time && <p className="text-red-500 mb-4">{errors.time.message}</p>}

        
        <label className="block mb-1 font-medium text-green-700">Number of Guests</label>
        <input
          {...register('guests', {
            required: 'Please enter number of guests',
            min: { value: 1, message: 'At least 1 guest required' },
            max: { value: 20, message: 'Max 20 guests allowed' },
          })}
          type="number"
          min="1"
          max="20"
          className={`w-full p-3 rounded border ${
            errors.guests ? 'border-red-500' : 'border-green-300'
          } focus:outline-none focus:ring-2 focus:ring-green-400 mb-6`}
          placeholder="1"
          />
        {errors.guests && <p className="text-red-500 mb-4">{errors.guests.message}</p>}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-green-600 hover:bg-green-700 text-yellow-300 font-semibold py-3 rounded transition disabled:opacity-50"
          >
          {isSubmitting ? 'Booking...' : 'Reserve Table'}
        </button>

        {isSubmitSuccessful && (
          <p className="mt-4 text-green-700 font-semibold text-center">
            Reservation submitted successfully!
          </p>
        )}
      </form>
    </section>
  );
};

export default Reservation;
