import { Link } from 'react-router-dom';
import { Shield } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <Shield className="w-7 h-7 text-blue-600" strokeWidth={2} />
            <span className="text-xl font-semibold text-gray-900">ClientSphere</span>
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <Link to="/features" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">Features</Link>
          <Link to="/#how-it-works" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">How It Works</Link>
          <Link to="/pricing" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">Pricing</Link>
        </div>

        <div className="flex items-center gap-4">
          <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
            Contact Sales
          </button>
        </div>
      </div>
    </nav>
  );
}
