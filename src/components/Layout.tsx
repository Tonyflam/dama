import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, User, Menu, X } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background text-text flex flex-col font-sans">
      {/* Header */}
      <header className="bg-card border-b border-gray-700 sticky top-0 z-50 shadow-md">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <img src="/logo.svg" alt="OpenChat Logo" className="h-8 w-auto" />
            <span className="font-bold text-xl tracking-tight">Agent Marketplace</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search agents..."
                className="bg-background border border-gray-600 rounded-full py-2 px-4 pl-10 w-64 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm"
              />
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            </div>
            
            <nav className="flex items-center gap-4">
              <Link 
                to="/" 
                className={`text-sm font-medium hover:text-primary transition-colors ${location.pathname === '/' ? 'text-primary' : 'text-text-secondary'}`}
              >
                Marketplace
              </Link>
              <Link 
                to="/dashboard" 
                className={`text-sm font-medium hover:text-primary transition-colors ${location.pathname === '/dashboard' ? 'text-primary' : 'text-text-secondary'}`}
              >
                Dashboard
              </Link>
              <Link 
                to="/developer" 
                className={`text-sm font-medium hover:text-primary transition-colors ${location.pathname.startsWith('/developer') ? 'text-primary' : 'text-text-secondary'}`}
              >
                For Developers
              </Link>
            </nav>

            <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center cursor-pointer hover:opacity-90 transition-opacity">
              <User className="w-5 h-5 text-white" />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-text-secondary hover:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-card border-b border-gray-700 p-4 flex flex-col gap-4 animate-in slide-in-from-top-5 duration-200">
            <div className="relative">
              <input
                type="text"
                placeholder="Search agents..."
                className="bg-background border border-gray-600 rounded-lg py-2 px-4 pl-10 w-full focus:outline-none focus:border-primary text-sm"
              />
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            </div>
            <Link 
              to="/" 
              className={`text-sm font-medium hover:text-primary transition-colors ${location.pathname === '/' ? 'text-primary' : 'text-text-secondary'}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Marketplace
            </Link>
            <Link 
              to="/dashboard" 
              className={`text-sm font-medium hover:text-primary transition-colors ${location.pathname === '/dashboard' ? 'text-primary' : 'text-text-secondary'}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Dashboard
            </Link>
            <Link 
              to="/developer" 
              className={`text-sm font-medium hover:text-primary transition-colors ${location.pathname.startsWith('/developer') ? 'text-primary' : 'text-text-secondary'}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              For Developers
            </Link>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-gray-700 py-8 mt-auto">
        <div className="container mx-auto px-4 text-center text-text-secondary text-sm">
          <p>&copy; {new Date().getFullYear()} AI Agent Marketplace. Built for OpenChat.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
