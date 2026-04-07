import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Droplets, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [location]);

  const transparent = isHome && !scrolled && !mobileOpen;
  const navClass = transparent
    ? 'bg-transparent text-white'
    : 'bg-white/95 backdrop-blur-md shadow-md text-neutral-800';

  const links = [
    { to: '/', label: 'Home' },
    { to: '/services', label: 'Services' },
    { to: '/gallery', label: 'Gallery' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-2">
            <Droplets className={`w-8 h-8 ${transparent ? 'text-cyan-300' : 'text-primary-500'}`} />
            <span className="font-heading font-bold text-lg tracking-tight">Florida Super Wash</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            {links.map(l => (
              <Link key={l.to} to={l.to} className="font-medium hover:text-primary-500 transition-colors">
                {l.label}
              </Link>
            ))}
            <a href="tel:(813) 956-9274" className="bg-accent-500 hover:bg-accent-600 text-white px-5 py-2 rounded-full font-semibold transition-all text-sm">
              Call Now
            </a>
          </div>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden p-2">
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      {mobileOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md shadow-xl border-t">
          <div className="px-4 py-4 flex flex-col gap-2">
            {links.map(l => (
              <Link key={l.to} to={l.to} className="py-3 px-4 text-neutral-700 hover:text-primary-500 hover:bg-primary-50 rounded-lg font-medium transition-colors">
                {l.label}
              </Link>
            ))}
            <a href="tel:(813) 956-9274" className="mt-2 bg-accent-500 text-white text-center py-3 rounded-full font-semibold">
              Call Now — (813) 956-9274
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
