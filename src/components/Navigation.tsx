import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed w-full bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-zinc-900 dark:text-white">
              Yuumi Iida
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`${
                isActive('/') ? 'text-red-600' : 'text-zinc-600 dark:text-zinc-300'
              } hover:text-red-600 transition-colors`}
            >
              Home
            </Link>
            <Link
              to="/projects"
              className={`${
                isActive('/projects') ? 'text-red-600' : 'text-zinc-600 dark:text-zinc-300'
              } hover:text-red-600 transition-colors`}
            >
              Projects
            </Link>
            <Link
              to="/about"
              className={`${
                isActive('/about') ? 'text-red-600' : 'text-zinc-600 dark:text-zinc-300'
              } hover:text-red-600 transition-colors`}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`${
                isActive('/contact') ? 'text-red-600' : 'text-zinc-600 dark:text-zinc-300'
              } hover:text-red-600 transition-colors`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-zinc-600 dark:text-zinc-300 hover:text-red-600"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-zinc-900">
            <Link
              to="/"
              className="block px-3 py-2 text-base font-medium text-zinc-600 dark:text-zinc-300 hover:text-red-600"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/projects"
              className="block px-3 py-2 text-base font-medium text-zinc-600 dark:text-zinc-300 hover:text-red-600"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 text-base font-medium text-zinc-600 dark:text-zinc-300 hover:text-red-600"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 text-base font-medium text-zinc-600 dark:text-zinc-300 hover:text-red-600"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}