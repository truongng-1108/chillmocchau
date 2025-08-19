import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, TreePine, User, Leaf, Mountain } from 'lucide-react';

const ForestHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Trang chủ', href: '/', current: location.pathname === '/' },
    { name: 'Dịch vụ', href: '/services', current: location.pathname === '/services' },
    { name: 'Bản đồ', href: '/maps', current: location.pathname === '/maps' },
    { name: 'Đặc sản', href: '/products', current: location.pathname === '/products' },
    { name: 'Booking', href: '/my-trees', current: location.pathname === '/my-trees' },
    { name: 'Liên hệ', href: '/contact', current: location.pathname === '/contact' },
  ];

  return (
    <>
      {/* Floating leaves background */}
      <div className="floating-leaves" />
      
      <header className={`fixed top-0 w-full z-[2000] transition-all duration-700 ${
        isScrolled 
          ? 'bg-vintage-50/95 backdrop-blur-lg shadow-mist border-b border-forest-200/30' 
          : 'bg-transparent'
      }`}>
        {/* Mountain silhouette overlay */}
        <div className="absolute bottom-0 left-0 w-full h-2 bg-forest-500/20 mountain-silhouette" />
        
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo with nature elements */}
            <Link to="/" className="flex items-center space-x-3 group relative">
              <div className="relative">
                <TreePine className="h-12 w-12 text-forest-600 group-hover:text-forest-500 transition-colors duration-300 animate-branch-sway" />
                <Leaf className="absolute -top-1 -right-1 h-5 w-5 text-forest-400 animate-float" />
                <Mountain className="absolute -bottom-1 -left-1 h-4 w-4 text-mountain-600 opacity-60" />
              </div>
              <div className="flex flex-col">
                <span className="font-elegant font-bold text-3xl text-forest-800 tracking-wider">CHILL</span>
                <span className="text-xs text-forest-600 -mt-1 font-nature">Mộc Châu</span>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-2 -right-2 w-3 h-3 bg-forest-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-float" />
              <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-vintage-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`relative px-6 py-3 text-sm font-nature font-medium transition-all duration-300 rounded-full group ${
                    item.current
                      ? 'text-forest-700 bg-forest-100/80'
                      : 'text-forest-600 hover:text-forest-700 hover:bg-forest-50/50'
                  }`}
                >
                  {item.name}
                  {item.current && (
                    <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-forest-500 rounded-full" />
                  )}
                  
                  {/* Hover effect */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-forest-200/0 via-forest-100/20 to-forest-200/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Branch decoration */}
                  <div className="absolute top-0 right-0 w-1 h-1 bg-forest-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              ))}
              
              <Link to="/auth" className="ml-6 flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-forest-600 to-forest-700 text-white rounded-full hover:from-forest-500 hover:to-forest-600 transition-all duration-300 shadow-forest group relative overflow-hidden">
                <User className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                <span className="font-nature font-medium">Đăng nhập</span>
                
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-3 rounded-full text-forest-600 hover:text-forest-700 hover:bg-forest-100/50 transition-all duration-300 relative group"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                
                {/* Decorative ring */}
                <div className="absolute inset-0 rounded-full border-2 border-forest-300 opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300" />
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-vintage-50/98 backdrop-blur-lg border-t border-forest-200/30 wood-grain">
              <div className="px-4 py-6 space-y-3">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`block px-6 py-4 text-base font-nature font-medium rounded-2xl transition-all duration-300 relative group ${
                      item.current
                        ? 'text-forest-700 bg-forest-100/80'
                        : 'text-forest-600 hover:text-forest-700 hover:bg-forest-50/50'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                    
                    {/* Mobile decoration */}
                    <div className="absolute left-2 top-1/2 transform -translate-y-1/2 w-1 h-6 bg-forest-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>
                ))}
                <Link to="/auth" className="w-full mt-6 flex items-center justify-center space-x-2 px-6 py-4 bg-gradient-to-r from-forest-600 to-forest-700 text-white rounded-2xl hover:from-forest-500 hover:to-forest-600 transition-all duration-300 shadow-forest">
                  <User className="h-4 w-4" />
                  <span className="font-nature font-medium">Đăng nhập</span>
                </Link>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
};

export default ForestHeader;