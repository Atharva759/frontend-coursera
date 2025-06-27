import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('App component routing and rendering', () => {
  test('renders Navbar and Footer on all routes', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    // Assuming Navbar uses <nav> element
    expect(screen.getByRole('navigation')).toBeInTheDocument();

    // Adjust this to some text or element in your Footer component
    expect(screen.getByText(/©/i)).toBeInTheDocument();
  });

  test('renders homepage components on "/" route', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    // Replace these with actual visible text from your HeroSection, Menu, About, Contact components
    expect(screen.getByText(/hero/i)).toBeInTheDocument();
    expect(screen.getByText(/menu/i)).toBeInTheDocument();
    expect(screen.getByText(/about/i)).toBeInTheDocument();
    expect(screen.getByText(/contact/i)).toBeInTheDocument();
  });

  test('renders Reservation component on "/reservation" route', () => {
    render(
      <MemoryRouter initialEntries={['/reservation']}>
        <App />
      </MemoryRouter>
    );

    // Replace with actual text in your Reservation component
    expect(screen.getByText(/reservation/i)).toBeInTheDocument();
  });

  test('renders Confirmation component on "/reservation/confirmed" route', () => {
    render(
      <MemoryRouter initialEntries={['/reservation/confirmed']}>
        <App />
      </MemoryRouter>
    );

    // Replace with actual text in your Confirmation component
    expect(screen.getByText(/confirmed/i)).toBeInTheDocument();
  });
});
