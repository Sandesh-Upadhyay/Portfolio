import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import data from '../data/portfolio.json';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-6">
            <a
              href={data.socials[0].url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href={data.socials[1].url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href={`mailto:${data.personal.email}`}
              className="hover:text-blue-400 transition"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
          <p className="text-gray-400 text-center">
            © {new Date().getFullYear()} {data.personal.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}