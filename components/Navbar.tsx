// components/Navbar.tsx - Navigation component
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { navLinks, firmNavLinks } from '@/constants/navbarLinks';


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-blue-950/80 backdrop-blur-md border-b border-blue-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            
            <Image 
            src={'/images/logo.png'} 
            alt='logo'
            width={24}
            height={24}
            className='rounded-sm'
            />

            <span className="text-xl font-bold text-white tracking-tight">
              Prop Firm<span className="text-cyan-400">Sale</span>
            </span>

          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {firmNavLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-blue-200 hover:text-white hover:bg-blue-900/50 rounded-lg transition-all"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-blue-200 hover:text-white hover:bg-blue-900/50 rounded-lg transition-all"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-blue-200 hover:text-white"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-blue-950 border-b border-blue-800/30"
          >
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-base font-medium text-blue-200 hover:text-white hover:bg-blue-900/50 rounded-lg transition-all"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="px-4 py-4 space-y-2">
              {firmNavLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-base font-medium text-blue-200 hover:text-white hover:bg-blue-900/50 rounded-lg transition-all"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}