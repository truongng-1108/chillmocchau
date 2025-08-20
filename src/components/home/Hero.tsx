import { TreePine, Mountain, Leaf, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with parallax effect */}
      <div className="absolute inset-0">
        {/* Mountain layers */}
        <div className="absolute inset-0 bg-gradient-to-b from-mountain-900 via-forest-800 to-forest-900" />
        <div className="absolute bottom-0 left-0 w-full h-2/3 bg-gradient-to-t from-forest-900/80 to-transparent" />
        <div className="absolute bottom-0 right-0 w-2/3 h-1/2 bg-gradient-to-t from-mountain-800/60 to-transparent transform skew-x-12" />
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 text-6xl opacity-20 animate-float">🌲</div>
        <div className="absolute top-40 right-20 text-4xl opacity-15 animate-sway">🍃</div>
        <div className="absolute bottom-40 left-1/4 text-5xl opacity-10 animate-pulse-soft">🏔️</div>
        <div className="absolute top-60 left-1/2 text-3xl opacity-20 animate-wind">🌿</div>
        
        {/* Mist overlay */}
        <div className="absolute inset-0 bg-mist-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text content */}
          <div className="space-y-8 animate-fade-up">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-forest-800/30 backdrop-blur-sm rounded-full border border-forest-600/30">
              <TreePine className="h-4 w-4 text-forest-400" />
              <span className="text-forest-200 text-sm font-medium">Khám phá Mộc Châu</span>
            </div>

            {/* Main heading */}
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-nature font-bold text-white leading-tight">
                <span className="block">Chill</span>
                <span className="block text-4xl lg:text-5xl text-forest-300 mt-2">
                  Rừng Trà Huyền Thoại
                </span>
              </h1>
              <p className="text-xl text-forest-200 max-w-2xl leading-relaxed">
                CHILL Mộc Châu – Hành trình khám phá rừng núi hùng vĩ, bản làng nguyên sơ và mùa hoa bốn mùa
                nơi du khách tận hưởng homestay, tour trải nghiệm, ẩm thực và đặc sản địa phương trong không gian thân thiện, tin cậy.
              </p>
            </div>
            
            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/products">
                <Button size="xl" icon={Eye} className="w-full sm:w-auto">
                  Khám phá ngay
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" size="xl" className="w-full sm:w-auto border-forest-400 text-forest-200 hover:bg-forest-400">
                  Dịch vụ chăm sóc
                </Button>
              </Link>
            </div>

            {/* Stats preview */}
            <div className="flex items-center space-x-12 pt-8">
              <div className="text-center group">
                <div className="text-3xl font-bold text-forest-300 group-hover:text-forest-200 transition-colors duration-300">50+</div>
                <div className="text-sm text-forest-400">Dịch vụ</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl font-bold text-forest-300 group-hover:text-forest-200 transition-colors duration-300">100+</div>
                <div className="text-sm text-forest-400">Địa điểm hot</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl font-bold text-forest-300 group-hover:text-forest-200 transition-colors duration-300">15+</div>
                <div className="text-sm text-forest-400">Kinh nghiệm</div>
              </div>
            </div>
          </div>

          {/* Visual content */}
          <div className="relative animate-slide-in">
            <div className="relative">
              {/* Main image */}
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src="https://i.pinimg.com/1200x/19/6c/12/196c120c0ebba026466d7ae73da3947a.jpg"
                  alt="Cây trà cổ thụ"
                  className="w-full h-96 lg:h-[600px] object-cover transform hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-900/60 via-transparent to-transparent" />
              </div>
              
              {/* Floating cards */}
              <div className="absolute -bottom-8 -left-8 bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-2xl animate-float border border-forest-200/30">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-forest-500 to-moss-500 rounded-xl flex items-center justify-center">
                    <Leaf className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-forest-800">Chất lượng cao</div>
                    <div className="text-sm text-forest-600">Được chứng nhận</div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-8 -right-8 bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-2xl animate-float border border-mountain-200/30" style={{ animationDelay: '1s' }}>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-mountain-500 to-mountain-600 rounded-xl flex items-center justify-center">
                    <Mountain className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-mountain-800">Cao nguyên</div>
                    <div className="text-sm text-mountain-600">Mộc Châu</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-forest-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-forest-400 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;