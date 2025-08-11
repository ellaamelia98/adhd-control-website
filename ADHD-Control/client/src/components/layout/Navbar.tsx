import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X, Brain } from 'lucide-react';
import { useActiveSection } from '@/lib/hooks';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const activeSection = useActiveSection();
  const [, setLocation] = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Blog', path: '/blog' },
    { name: 'Resources', path: '/resources' },
    { name: 'Reviews', path: '/product-reviews' },
    { name: 'About', path: '/about' },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleNavClick = (path: string) => {
    setLocation(path);
    setMobileMenuOpen(false);
  };

  // Close mobile menu when window is resized
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="bg-gradient-to-br from-sage to-sage-dark text-white rounded-xl p-2.5 shadow-lg group-hover:shadow-xl transition-all duration-200 group-hover:scale-105">
                <Brain className="h-7 w-7" />
              </div>
              <div className="flex flex-col">
                <span className="font-poppins font-bold text-xl text-charcoal leading-tight group-hover:text-sage-dark transition-colors">
                  ADHD Control
                </span>
                <span className="font-poppins text-xs text-sage-dark font-medium -mt-1 opacity-80">
                  Take Control of Your ADHD
                </span>
              </div>
            </Link>
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link key={link.path} href={link.path}>
                <span 
                  className={`nav-link font-poppins hover:text-sage transition duration-150 ease-in-out relative cursor-pointer
                  ${activeSection === link.path ? 'nav-link-active text-sage-dark' : 'text-charcoal'}`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-sage transition-all duration-300 ${
                    activeSection === link.path ? 'w-full' : ''
                  }`}></span>
                </span>
              </Link>
            ))}
          </div>
          
          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMobileMenu}
              className="text-charcoal hover:text-sage focus:outline-none"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.path}
              onClick={() => handleNavClick(link.path)}
              className={`block py-2 px-3 rounded-md text-base font-medium cursor-pointer transition-colors duration-150
                ${activeSection === link.path 
                  ? 'text-sage bg-gray-50' 
                  : 'text-charcoal hover:text-sage hover:bg-gray-50'
                }`}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
