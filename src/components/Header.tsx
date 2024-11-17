'use client';

import React from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import data from '../data/portfolio.json';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="#home" className="text-2xl font-bold text-gray-900">
            {data.personal.name.split(' ')[0]}
            <span className="text-blue-600">.dev</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#about"
              className="text-gray-600 hover:text-blue-600 transition"
            >
              About
            </a>
            <a
              href="#skills"
              className="text-gray-600 hover:text-blue-600 transition"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="text-gray-600 hover:text-blue-600 transition"
            >
              Projects
            </a>
            <a
              href="#experience"
              className="text-gray-600 hover:text-blue-600 transition"
            >
              Experience
            </a>
            <a
              href="#achievements"
              className="text-gray-600 hover:text-blue-600 transition"
            >
              Achievements
            </a>
            <div className="flex items-center gap-4">
              <a
                href={data.socials[0].url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={data.socials[1].url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${data.personal.email}`}
                className="text-gray-600 hover:text-blue-600 transition"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 py-4">
            <div className="flex flex-col items-center gap-4">
              <a
                href="#about"
                className="text-gray-600 hover:text-blue-600 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#skills"
                className="text-gray-600 hover:text-blue-600 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Skills
              </a>
              <a
                href="#projects"
                className="text-gray-600 hover:text-blue-600 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </a>
              <a
                href="#experience"
                className="text-gray-600 hover:text-blue-600 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Experience
              </a>
              <a
                href="#achievements"
                className="text-gray-600 hover:text-blue-600 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Achievements
              </a>
              <div className="flex items-center gap-4">
                <a
                  href={data.socials[0].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={data.socials[1].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={`mailto:${data.personal.email}`}
                  className="text-gray-600 hover:text-blue-600 transition"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
