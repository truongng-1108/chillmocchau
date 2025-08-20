import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, TreePine, User, Leaf } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Trang chủ', href: '/', current: location.pathname === '/' },
    { name: 'Rừng Trà', href: '/products', current: location.pathname === '/products' },
    { name: 'Dịch vụ', href: '/services', current: location.pathname === '/services' },
    { name: 'Cây của tôi', href: '/my-trees', current: location.pathname === '/my-trees' },
    { name: 'Liên hệ', href: '/contact', current: location.pathname === '/contact' },
  ];

  return (
    <header className={`fixed top-0 w-full z-[2000] transition-all duration-500 ${
      isScrolled 
        ? 'bg-forest-900/95 backdrop-blur-md shadow-forest border-b border-forest-700/30' 
        : 'bg-transparent'
    }`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <TreePine className="h-10 w-10 text-forest-400 group-hover:text-forest-300 transition-colors duration-300" />
              <Leaf className="absolute -top-1 -right-1 h-4 w-4 text-moss-400 animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="font-nature font-bold text-2xl text-white tracking-wider">SEEME</span>
              <span className="text-xs text-forest-300 -mt-1">Rừng Trà Cổ Thụ</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full group ${
                  item.current
                    ? 'text-forest-300 bg-forest-800/50'
                    : 'text-forest-100 hover:text-forest-300 hover:bg-forest-800/30'
                }`}
              >
                {item.name}
                {item.current && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-forest-400 rounded-full" />
                )}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-forest-600/0 via-forest-500/10 to-forest-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            ))}
            
            <button className="ml-4 flex items-center space-x-2 px-6 py-2 bg-gradient-to-r from-forest-600 to-moss-600 text-white rounded-full hover:from-forest-500 hover:to-moss-500 transition-all duration-300 shadow-forest group">
              <User className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
              <span className="font-medium">Đăng nhập</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-full text-forest-100 hover:text-forest-300 hover:bg-forest-800/30 transition-all duration-300"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-forest-900/98 backdrop-blur-lg border-t border-forest-700/30">
            <div className="px-4 py-6 space-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-4 py-3 text-base font-medium rounded-xl transition-all duration-300 ${
                    item.current
                      ? 'text-forest-300 bg-forest-800/50'
                      : 'text-forest-100 hover:text-forest-300 hover:bg-forest-800/30'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <button className="w-full mt-4 flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-forest-600 to-moss-600 text-white rounded-xl hover:from-forest-500 hover:to-moss-500 transition-all duration-300">
                <User className="h-4 w-4" />
                <span className="font-medium">Đăng nhập</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;