import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Instagram, Twitter, Linkedin, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
                <Heart className="w-5 h-5 text-white fill-white" />
              </div>
              <span className="text-xl font-bold text-slate-900">MindfulCare</span>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              Empowering individuals through professional, accessible, and empathetic mental health support. Your journey to wellness starts here.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-slate-400 hover:text-emerald-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-emerald-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-emerald-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-6">Platform</h4>
            <ul className="space-y-4">
              <li><Link to="/directory" className="text-slate-500 hover:text-emerald-600 text-sm transition-colors">Find a Specialist</Link></li>
              <li><Link to="/blog" className="text-slate-500 hover:text-emerald-600 text-sm transition-colors">Resources & Blog</Link></li>
              <li><Link to="/about" className="text-slate-500 hover:text-emerald-600 text-sm transition-colors">How it Works</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-6">Company</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-slate-500 hover:text-emerald-600 text-sm transition-colors">About Us</Link></li>
              <li><a href="#" className="text-slate-500 hover:text-emerald-600 text-sm transition-colors">Careers</a></li>
              <li><a href="#" className="text-slate-500 hover:text-emerald-600 text-sm transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-6">Newsletter</h4>
            <p className="text-slate-500 text-sm mb-4">Get mental health tips and updates delivered to your inbox.</p>
            <div className="relative">
              <input
                type="email"
                placeholder="Email address"
                className="w-full bg-white border border-slate-200 rounded-xl py-3 px-4 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
              />
              <button className="absolute right-2 top-2 p-1.5 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors">
                <Mail className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-xs">© 2024 MindfulCare. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-slate-400 hover:text-slate-600 text-xs">Privacy Policy</a>
            <a href="#" className="text-slate-400 hover:text-slate-600 text-xs">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
