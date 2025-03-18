"use client";

import { Instagram, Twitter, Youtube, Linkedin, Facebook } from "lucide-react";

const socialLinks = [
  { name: "Instagram", icon: Instagram, url: "https://instagram.com/maycamevolve" },
  { name: "X", icon: Twitter, url: "https://twitter.com/maycamevolve" },
  { name: "YouTube", icon: Youtube, url: "https://youtube.com/maycamevolve" },
  { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com/maycamevolve" },
  { name: "Facebook", icon: Facebook, url: "https://facebook.com/maycamevolve" },
  // { name: "Discord", icon: Discord, url: "https://discord.com/invite/r7qHmd6u6g" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white p-8 text-center border-t border-gray-700">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <p className="text-lg font-semibold">&copy; {new Date().getFullYear()} eSports Team. Todos los derechos reservados.</p>
        <p className="text-sm mt-2 text-gray-400">Seguinos en nuestras redes sociales:</p>
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          {socialLinks.map(({ name, icon: Icon, url }) => (
            <a 
              key={name} 
              href={url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center justify-center w-12 h-12 bg-gray-800/50 rounded-full hover:bg-violet-900/30 transition-colors group shadow-md"
            >
              <Icon size={24} className="text-gray-300 group-hover:text-violet-400 transition-colors" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}