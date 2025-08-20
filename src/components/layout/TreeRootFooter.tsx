import { Link } from 'react-router-dom';
import { TreePine, Mail, Phone, MapPin, Facebook, Instagram, Youtube, Leaf, Mountain } from 'lucide-react';

const TreeRootFooter = () => {
  return (
    <footer className="relative bg-gradient-to-br from-forest-900 via-vintage-900 to-forest-800 text-forest-100 overflow-hidden">
      {/* Tree root pattern background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1200 400" fill="none">
          <path d="M0 200 Q300 150 600 200 T1200 200 L1200 400 L0 400 Z" fill="currentColor" opacity="0.1"/>
          <path d="M0 250 Q200 200 400 250 T800 250 Q1000 200 1200 250 L1200 400 L0 400 Z" fill="currentColor" opacity="0.15"/>
          <path d="M0 300 Q150 250 300 300 T600 300 Q900 250 1200 300 L1200 400 L0 400 Z" fill="currentColor" opacity="0.2"/>
        </svg>
      </div>
      
      {/* Floating elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 text-6xl animate-float">🌲</div>
        <div className="absolute top-20 right-20 text-4xl animate-sway">🍃</div>
        <div className="absolute bottom-20 left-1/4 text-5xl animate-mist">🏔️</div>
        <div className="absolute bottom-10 right-1/3 text-3xl animate-float" style={{ animationDelay: '2s' }}>🌿</div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <TreePine className="h-12 w-12 text-forest-400 animate-branch-sway" />
                <Leaf className="absolute -top-1 -right-1 h-5 w-5 text-vintage-400 animate-float" />
                <Mountain className="absolute -bottom-1 -left-1 h-4 w-4 text-mountain-400 opacity-60" />
              </div>
              <div className="flex flex-col">
                <span className="font-elegant font-bold text-3xl text-white tracking-wider">CHILL</span>
                <span className="text-sm text-forest-300 -mt-1 font-nature">Mộc Châu</span>
              </div>
            </div>
            
            <p className="text-forest-300 font-nature leading-relaxed">
              Nền tảng trải nghiệm – đặt dịch vụ tại Mộc Châu: lưu trú, ăn uống, tour/hoạt động,
              thuê xe, vé sự kiện và đặc sản theo mùa. Trải nghiệm thân thiện, tin cậy, rõ ràng.
            </p>
            
            <div className="flex space-x-4">
              <a className="p-3 bg-forest-800/50 rounded-full hover:bg-forest-700/50 transition-colors duration-300 cursor-pointer group" aria-label="Facebook">
                <Facebook className="h-5 w-5 text-forest-400 group-hover:text-forest-300" />
              </a>
              <a className="p-3 bg-forest-800/50 rounded-full hover:bg-forest-700/50 transition-colors duration-300 cursor-pointer group" aria-label="Instagram">
                <Instagram className="h-5 w-5 text-forest-400 group-hover:text-forest-300" />
              </a>
              <a className="p-3 bg-forest-800/50 rounded-full hover:bg-forest-700/50 transition-colors duration-300 cursor-pointer group" aria-label="YouTube">
                <Youtube className="h-5 w-5 text-forest-400 group-hover:text-forest-300" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-8">
            <h3 className="font-elegant font-bold text-xl text-white flex items-center">
              <Mountain className="h-6 w-6 mr-3 text-forest-400" />
              Khám phá
            </h3>
            <ul className="space-y-4 font-nature">
              <li>
                <Link to="/explore" className="text-forest-300 hover:text-forest-200 transition-colors duration-300 flex items-center group">
                  <span className="w-2 h-2 bg-vintage-400 rounded-full mr-4 group-hover:scale-150 transition-transform duration-300"></span>
                  Khám phá Mộc Châu
                </Link>
              </li>
              <li>
                <Link to="/maps" className="text-forest-300 hover:text-forest-200 transition-colors duration-300 flex items-center group">
                  <span className="w-2 h-2 bg-vintage-400 rounded-full mr-4 group-hover:scale-150 transition-transform duration-300"></span>
                  Bản đồ trải nghiệm
                </Link>
              </li>
              <li>
                <Link to="/homestays" className="text-forest-300 hover:text-forest-200 transition-colors duration-300 flex items-center group">
                  <span className="w-2 h-2 bg-vintage-400 rounded-full mr-4 group-hover:scale-150 transition-transform duration-300"></span>
                  Lưu trú (Homestay/Hotel)
                </Link>
              </li>
              <li>
                <Link to="/food" className="text-forest-300 hover:text-forest-200 transition-colors duration-300 flex items-center group">
                  <span className="w-2 h-2 bg-vintage-400 rounded-full mr-4 group-hover:scale-150 transition-transform duration-300"></span>
                  Ăn uống & Giải trí
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-forest-300 hover:text-forest-200 transition-colors duration-300 flex items-center group">
                  <span className="w-2 h-2 bg-vintage-400 rounded-full mr-4 group-hover:scale-150 transition-transform duration-300"></span>
                  Liên hệ
                </Link>
              </li>
              <li>
                <Link to="/partner-registration" className="text-forest-300 hover:text-forest-200 transition-colors duration-300 flex items-center group">
                  <span className="w-2 h-2 bg-vintage-400 rounded-full mr-4 group-hover:scale-150 transition-transform duration-300"></span>
                  Đăng ký đối tác
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-8">
            <h3 className="font-elegant font-bold text-xl text-white flex items-center">
              <Leaf className="h-6 w-6 mr-3 text-forest-400" />
              Dịch vụ
            </h3>
            <ul className="space-y-4 font-nature">
              <li className="text-forest-300 flex items-center">
                <span className="w-2 h-2 bg-vintage-400 rounded-full mr-4"></span>
                Đặt homestay / khách sạn
              </li>
              <li className="text-forest-300 flex items-center">
                <span className="w-2 h-2 bg-vintage-400 rounded-full mr-4"></span>
                Đặt bàn / Nhà hàng – Café – Bar
              </li>
              <li className="text-forest-300 flex items-center">
                <span className="w-2 h-2 bg-vintage-400 rounded-full mr-4"></span>
                Tour & hoạt động trải nghiệm
              </li>
              <li className="text-forest-300 flex items-center">
                <span className="w-2 h-2 bg-vintage-400 rounded-full mr-4"></span>
                Thuê xe (xe máy/ô tô/ATV/xe đạp)
              </li>
              <li className="text-forest-300 flex items-center">
                <span className="w-2 h-2 bg-vintage-400 rounded-full mr-4"></span>
                Vé sự kiện / festival
              </li>
              <li className="text-forest-300 flex items-center">
                <span className="w-2 h-2 bg-vintage-400 rounded-full mr-4"></span>
                Đặc sản & giao hàng
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-8">
            <h3 className="font-elegant font-bold text-xl text-white flex items-center">
              <MapPin className="h-6 w-6 mr-3 text-forest-400" />
              Liên hệ
            </h3>
            <div className="space-y-6 font-nature">
              <div className="flex items-start space-x-4 group">
                <MapPin className="h-5 w-5 text-forest-400 mt-1 group-hover:text-forest-300 transition-colors duration-300" />
                <span className="text-forest-300 group-hover:text-forest-200 transition-colors duration-300">
                  Mộc Châu, Sơn La<br />Việt Nam
                </span>
              </div>
              <div className="flex items-center space-x-4 group">
                <Phone className="h-5 w-5 text-forest-400 group-hover:text-forest-300 transition-colors duration-300" />
                <a href="tel:+84374605731" className="text-forest-300 group-hover:text-forest-200 transition-colors duration-300">
                  +84 374 605 731
                </a>
              </div>
              <div className="flex items-center space-x-4 group">
                <Mail className="h-5 w-5 text-forest-400 group-hover:text-forest-300 transition-colors duration-300" />
                <a href="mailto:support@chillmocchau.vn" className="text-forest-300 group-hover:text-forest-200 transition-colors duration-300">
                  support@chillmocchau.vn
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section with root-like design */}
        <div className="mt-20 pt-8 border-t border-forest-700/50 relative">
          {/* Decorative root pattern */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-8 bg-forest-600 rounded-full opacity-30" />
          
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-forest-400 font-nature">
              &copy; {new Date().getFullYear()} CHILL Mộc Châu. Tất cả quyền được bảo lưu.
            </p>
            <div className="flex items-center space-x-8 font-nature">
              <Link to="/privacy" className="text-forest-400 hover:text-forest-300 transition-colors duration-300">
                Chính sách bảo mật
              </Link>
              <Link to="/terms" className="text-forest-400 hover:text-forest-300 transition-colors duration-300">
                Điều khoản sử dụng
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default TreeRootFooter;
