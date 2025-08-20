import { Link } from 'react-router-dom';
import { TreePine, Mail, Phone, MapPin, Facebook, Instagram, Youtube, Leaf, Mountain } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-forest-900 via-forest-800 to-mountain-900 text-forest-100 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 text-6xl animate-float">🌲</div>
        <div className="absolute top-20 right-20 text-4xl animate-sway">🍃</div>
        <div className="absolute bottom-20 left-1/4 text-5xl animate-pulse-soft">🏔️</div>
        <div className="absolute bottom-10 right-1/3 text-3xl animate-wind">🌿</div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <TreePine className="h-10 w-10 text-forest-400" />
                <Leaf className="absolute -top-1 -right-1 h-4 w-4 text-moss-400 animate-pulse" />
              </div>
              <div className="flex flex-col">
                <span className="font-nature font-bold text-2xl text-white tracking-wider">CHILL</span>
                <span className="text-xs text-forest-300 -mt-1">Mộc Châu</span>
              </div>
            </div>
            <p className="text-forest-300 text-sm leading-relaxed">
              Nền tảng du lịch bản địa Mộc Châu: ăn uống, đặc sản, lưu trú, tour/hoạt động, thuê xe và vé sự kiện.
              Đặt nhanh – chính sách rõ – QR check‑in mượt – combo theo mùa.
            </p>
            <div className="flex space-x-4">
              <div className="p-2 bg-forest-800/50 rounded-full hover:bg-forest-700/50 transition-colors duration-300 cursor-pointer group">
                <Facebook className="h-5 w-5 text-forest-400 group-hover:text-forest-300" />
              </div>
              <div className="p-2 bg-forest-800/50 rounded-full hover:bg-forest-700/50 transition-colors duration-300 cursor-pointer group">
                <Instagram className="h-5 w-5 text-forest-400 group-hover:text-forest-300" />
              </div>
              <div className="p-2 bg-forest-800/50 rounded-full hover:bg-forest-700/50 transition-colors duration-300 cursor-pointer group">
                <Youtube className="h-5 w-5 text-forest-400 group-hover:text-forest-300" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="font-serif font-semibold text-lg text-white flex items-center">
              <Mountain className="h-5 w-5 mr-2 text-forest-400" />
              Khám phá
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/experiences" className="text-forest-300 hover:text-forest-200 transition-colors duration-300 flex items-center group">
                  <span className="w-1 h-1 bg-moss-400 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                  Trải nghiệm bản địa
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-forest-300 hover:text-forest-200 transition-colors duration-300 flex items-center group">
                  <span className="w-1 h-1 bg-moss-400 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                  Danh mục dịch vụ
                </Link>
              </li>
              <li>
                <Link to="/combos" className="text-forest-300 hover:text-forest-200 transition-colors duration-300 flex items-center group">
                  <span className="w-1 h-1 bg-moss-400 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                  Combo theo mùa
                </Link>
              </li>
              <li>
                <Link to="/support" className="text-forest-300 hover:text-forest-200 transition-colors duration-300 flex items-center group">
                  <span className="w-1 h-1 bg-moss-400 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                  Hỗ trợ & liên hệ
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="font-serif font-semibold text-lg text-white flex items-center">
              <Leaf className="h-5 w-5 mr-2 text-forest-400" />
              Dịch vụ
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="text-forest-300 flex items-center">
                <span className="w-1 h-1 bg-moss-400 rounded-full mr-3"></span>
                Ăn uống & giải trí
              </li>
              <li className="text-forest-300 flex items-center">
                <span className="w-1 h-1 bg-moss-400 rounded-full mr-3"></span>
                Đặc sản & giao hàng
              </li>
              <li className="text-forest-300 flex items-center">
                <span className="w-1 h-1 bg-moss-400 rounded-full mr-3"></span>
                Lưu trú (homestay/khách sạn)
              </li>
              <li className="text-forest-300 flex items-center">
                <span className="w-1 h-1 bg-moss-400 rounded-full mr-3"></span>
                Tour & hoạt động
              </li>
              <li className="text-forest-300 flex items-center">
                <span className="w-1 h-1 bg-moss-400 rounded-full mr-3"></span>
                Thuê xe & vận tải
              </li>
              <li className="text-forest-300 flex items-center">
                <span className="w-1 h-1 bg-moss-400 rounded-full mr-3"></span>
                Vé sự kiện & festival
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h3 className="font-serif font-semibold text-lg text-white flex items-center">
              <MapPin className="h-5 w-5 mr-2 text-forest-400" />
              Liên hệ
            </h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-start space-x-3 group">
                <MapPin className="h-4 w-4 text-forest-400 mt-0.5 group-hover:text-forest-300 transition-colors duration-300" />
                <span className="text-forest-300 group-hover:text-forest-200 transition-colors duration-300">
                  Cao nguyên Mộc Châu<br />Sơn La, Việt Nam
                </span>
              </div>
              <div className="flex items-center space-x-3 group">
                <Phone className="h-4 w-4 text-forest-400 group-hover:text-forest-300 transition-colors duration-300" />
                <span className="text-forest-300 group-hover:text-forest-200 transition-colors duration-300">
                  +84 374 605 731
                </span>
              </div>
              <div className="flex items-center space-x-3 group">
                <Mail className="h-4 w-4 text-forest-400 group-hover:text-forest-300 transition-colors duration-300" />
                <span className="text-forest-300 group-hover:text-forest-200 transition-colors duration-300">
                  chillmocchau@chillmocchau.vn
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-16 pt-8 border-t border-forest-700/50">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-forest-400 text-sm">
              &copy; 2025 CHILL Mộc Châu. Tất cả quyền được bảo lưu.
            </p>
            <div className="flex items-center space-x-6 text-sm text-forest-400">
              <span className="hover:text-forest-300 transition-colors duration-300 cursor-pointer">Chính sách bảo mật</span>
              <span className="hover:text-forest-300 transition-colors duration-300 cursor-pointer">Điều khoản sử dụng</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
