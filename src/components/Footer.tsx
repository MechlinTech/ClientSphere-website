import { Link } from 'react-router-dom';
import { Shield, Linkedin, Twitter, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-6 h-6 text-blue-500" strokeWidth={2} />
              <span className="text-xl font-semibold text-white">ClientSphere</span>
            </div>
            <p className="text-sm leading-relaxed">
              Enterprise-grade client and organization management platform for structured collaboration.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/features" className="hover:text-white transition-colors">Features</Link></li>
              <li><Link to="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
              <li><a href="#integrations" className="hover:text-white transition-colors">Integrations</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#careers" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#blog" className="hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#documentation" className="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#support" className="hover:text-white transition-colors">Support</a></li>
              <li><a href="#api" className="hover:text-white transition-colors">API Reference</a></li>
              <li><a href="#status" className="hover:text-white transition-colors">System Status</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm">
            &copy; 2024 ClientSphere. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <a href="#linkedin" className="hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#twitter" className="hover:text-white transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#github" className="hover:text-white transition-colors">
              <Github className="w-5 h-5" />
            </a>
          </div>

          <div className="flex items-center gap-6 text-sm">
            <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
