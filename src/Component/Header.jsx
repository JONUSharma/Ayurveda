import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { HiOutlineMenu, HiX } from 'react-icons/hi';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/treatments', label: 'Treatments' },
    { path: '/doctors', label: 'Doctors' },
    { path: '/appointment', label: 'Book' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <header className="bg-green-100 shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <NavLink to="/" className="text-2xl font-bold text-green-800">AyurVeda Clinic</NavLink>

        {/* Desktop nav */}
        <nav className="hidden md:flex space-x-6 text-green-700">
          {navItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                `relative pb-1 ${
                  isActive
                    ? 'text-green-800 font-semibold after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-green-800'
                    : 'hover:after:absolute hover:after:left-0 hover:after:bottom-0 hover:after:h-[2px] hover:after:w-full hover:after:bg-green-600'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile icon */}
        <div className="md:hidden text-green-800 text-3xl cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <HiX /> : <HiOutlineMenu />}
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-green-50 shadow-inner">
          {navItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 border-b border-green-100 text-green-800 font-medium hover:bg-green-100"
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
}
