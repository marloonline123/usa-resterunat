
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingBag } from 'lucide-react';
import logo from '../../public/logo.png'; // Adjust the path as necessary

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          {/* <h1 className="text-2xl font-bold text-restaurant-red">USA Family <span className="text-restaurant-blue">Restaurant</span></h1> */}
          <img src={logo} alt="Restaurant Logo" className="w-32" />
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="font-medium hover:bg-restaurant-red hover:text-white rounded-md p-2 duration-200 text-restaurant-red">Home</Link>
          <Link to="/menu" className="font-medium hover:bg-restaurant-red hover:text-white rounded-md p-2 duration-200 text-restaurant-red">Menu</Link>
          <Link to="/about" className="font-medium hover:bg-restaurant-red hover:text-white rounded-md p-2 duration-200 text-restaurant-red">About</Link>
          <Link to="/contact" className="font-medium hover:bg-restaurant-red hover:text-white rounded-md p-2 duration-200 text-restaurant-red">Contact</Link>
          <Link to="/order" className="btn-primary flex items-center">
            <ShoppingBag className="mr-2 h-5 w-5" />
            Order Online
          </Link>
        </div>
        
        {/* Mobile Navigation Button */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-white z-40 transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out md:hidden`}
        style={{ top: '60px' }}
      >
        <div className="flex flex-col space-y-4 p-8">
          <Link 
            to="/" 
            className="text-xl font-medium py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/menu" 
            className="text-xl font-medium py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Menu
          </Link>
          <Link 
            to="/about" 
            className="text-xl font-medium py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link 
            to="/contact" 
            className="text-xl font-medium py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
          <Link 
            to="/order" 
            className="btn-primary text-center mt-4"
            onClick={() => setIsMenuOpen(false)}
          >
            Order Online
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
