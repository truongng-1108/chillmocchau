import React, { useEffect, useState } from 'react';
import { ArrowRight, TreePine, Mountain, Leaf, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

const MysticalHero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden parallax-container">
      {/* Parallax Background Layers */}
      <div className="parallax-layer parallax-back">
        <div className="absolute inset-0 bg-gradient-to-br from-mountain-800 via-forest-800 to-vintage-900" />
        <div className="absolute inset-0 forest-texture opacity-30" />
      </div>
      
      <div className="parallax-layer parallax-mid">
        <div className="absolute bottom-0 left-0 w-full h-2/3 bg-gradient-to-t from-forest-900/60 to-transparent mountain-silhouette" />
        <div className="absolute bottom-0 right-0 w-3/4 h-1/2 bg-gradient-to-t from-mountain-700/40 to-transparent transform skew-x-12" />
      </div>

      {/* Floating Nature Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated trees */}
        <div className="absolute top-20 left-10 text-8xl opacity-20 animate-sway" style={{ animationDelay: '0s' }}>🌲</div>
        <div className="absolute top-40 right-20 text-6xl opacity-15 animate-float" style={{ animationDelay: '2s' }}>🍃</div>
        <div className="absolute bottom-40 left-1/4 text-7xl opacity-10 animate-branch-sway" style={{ animationDelay: '4s' }}>🏔️</div>
        <div className="absolute top-60 left-1/2 text-5xl opacity-20 animate-mist" style={{ animationDelay: '1s' }}>🌿</div>
        
        {/* Mist layers */}
        <div className="absolute top-1/4 left-0 w-full h-64 bg-gradient-to-r from-mist-200/20 via-transparent to-mist-200/20 animate-mist" />
        <div className="absolute top-1/2 right-0 w-2/3 h-48 bg-gradient-to-l from-mist-300/10 to-transparent animate-mist" style={{ animationDelay: '3s' }} />
      </div>

      {/* Main Content */}
      <div className="parallax-layer parallax-front relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[calc(100vh-12rem)]">
          {/* Text Content */}
          <div className="space-y-4 lg:space-y-8 animate-fade-up text-center lg:text-left">
            {/* Mystical Badge */}
            <div className="inline-flex items-center space-x-3 px-6 py-3 bg-vintage-100/20 backdrop-blur-md rounded-full border border-forest-300/30 group">
              <TreePine className="h-5 w-5 text-forest-400 group-hover:animate-branch-sway" />
              <span className="text-forest-200 text-sm font-nature font-medium">Khám phá thiên nhiên Mộc Châu</span>
              <Leaf className="h-4 w-4 text-forest-300 animate-float" />
            </div>

            {/* Main Heading with Creative Typography */}
            <div className="space-y-3 lg:space-y-6">
              <h1 className="font-elegant font-bold leading-tight">
                <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl text-white drop-shadow-2xl">CHILL</span>
                <span className="block text-lg sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl text-forest-300 mt-1 lg:mt-4 font-nature">
                  Mộc Châu
                </span>
                <span className="block text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-vintage-200 mt-1 lg:mt-2 font-light">
                  Thiên Nhiên Tuyệt Vời
                </span>
              </h1>
              
              {/* Decorative line */}
              <div className="flex items-center justify-center lg:justify-start space-x-4">
                <div className="w-16 h-1 bg-gradient-to-r from-forest-400 to-transparent rounded-full" />
                <Mountain className="h-6 w-6 text-forest-400 animate-float" />
                <div className="w-24 h-1 bg-gradient-to-r from-forest-400 via-vintage-400 to-transparent rounded-full" />
              </div>
              
              <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-forest-100 max-w-2xl leading-relaxed font-nature mx-auto lg:mx-0">
                Hành trình khám phá vẻ đẹp thiên nhiên Mộc Châu với đầy đủ dịch vụ du lịch: 
                homestay, tour, ẩm thực và những trải nghiệm độc đáo.
              </p>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 lg:gap-6 pt-4 lg:pt-8 justify-center lg:justify-start">
              <Link to="/services">
                <button className="group relative w-full sm:w-auto px-5 lg:px-8 py-2.5 lg:py-4 bg-gradient-to-r from-forest-600 to-forest-700 text-white rounded-full hover:from-forest-500 hover:to-forest-600 transition-all duration-300 shadow-forest hover:shadow-2xl hover:scale-105 overflow-hidden">
                  <div className="flex items-center space-x-3">
                    <Eye className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                    <span className="font-nature font-semibold text-sm lg:text-lg">Khám phá ngay</span>
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                  
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </button>
              </Link>
              
              <Link to="/products">
                <button className="group relative w-full sm:w-auto px-5 lg:px-8 py-2.5 lg:py-4 border-2 border-forest-400 text-forest-200 rounded-full hover:bg-forest-400 hover:text-white transition-all duration-300 hover:scale-105 backdrop-blur-sm">
                  <div className="flex items-center space-x-3">
                    <TreePine className="h-5 w-5 group-hover:animate-branch-sway" />
                    <span className="font-nature font-semibold text-sm lg:text-lg">Đặc sản địa phương</span>
                  </div>
                </button>
              </Link>
            </div>

            {/* Stats with Nature Theme */}
            <div className="flex items-center justify-center lg:justify-start space-x-6 sm:space-x-8 lg:space-x-12 pt-4 lg:pt-8">
              <div className="text-center group">
                <div className="relative">
                  <div className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-forest-300 group-hover:text-forest-200 transition-colors duration-300">200+</div>
                  <div className="absolute -top-1 -right-1 w-2 h-2 lg:w-3 lg:h-3 bg-forest-400 rounded-full animate-float" />
                </div>
                <div className="text-xs sm:text-sm text-forest-400 font-nature mt-1">Dịch vụ</div>
              </div>
              <div className="text-center group">
                <div className="relative">
                  <div className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-forest-300 group-hover:text-forest-200 transition-colors duration-300">50+</div>
                  <div className="absolute -top-1 -right-1 w-2 h-2 lg:w-3 lg:h-3 bg-vintage-400 rounded-full animate-float" style={{ animationDelay: '1s' }} />
                </div>
                <div className="text-xs sm:text-sm text-forest-400 font-nature mt-1">Đối tác</div>
              </div>
              <div className="text-center group">
                <div className="relative">
                  <div className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-forest-300 group-hover:text-forest-200 transition-colors duration-300">10+</div>
                  <div className="absolute -top-1 -right-1 w-2 h-2 lg:w-3 lg:h-3 bg-mountain-400 rounded-full animate-float" style={{ animationDelay: '2s' }} />
                </div>
                <div className="text-xs sm:text-sm text-forest-400 font-nature mt-1">Năm kinh nghiệm</div>
              </div>
            </div>
          </div>

          {/* Visual Content with Asymmetric Layout */}
          <div className="relative animate-slide-in order-first lg:order-last">
            <div className="relative">
              {/* Main Image with Torn Paper Effect */}
              <div className="relative overflow-hidden rounded-3xl shadow-2xl torn-paper">
                <img
                  src="https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Thiên nhiên Mộc Châu tuyệt đẹp"
                  className="w-full h-64 sm:h-80 lg:h-[600px] object-cover transform hover:scale-110 transition-transform duration-700"
                  style={{ transform: `translateY(${scrollY * 0.1}px)` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-900/60 via-transparent to-transparent" />
                
                {/* Mystical overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-forest-500/20 via-transparent to-vintage-500/20 animate-mist" />
              </div>
              
              {/* Floating Cards with Asymmetric Positioning */}
              <div className="absolute -bottom-6 lg:-bottom-12 -left-4 lg:-left-12 bg-vintage-50/95 backdrop-blur-md p-3 lg:p-6 rounded-2xl shadow-wood border border-forest-200/30 animate-float wood-grain">
                <div className="flex items-center space-x-4">
                  <div className="w-10 lg:w-14 h-10 lg:h-14 bg-gradient-to-br from-forest-500 to-forest-600 rounded-2xl flex items-center justify-center leaf-shape">
                    <Leaf className="h-5 lg:h-7 w-5 lg:w-7 text-white animate-branch-sway" />
                  </div>
                  <div>
                    <div className="font-nature font-bold text-sm lg:text-base text-forest-800">Dịch vụ 5 sao</div>
                    <div className="text-xs lg:text-sm text-forest-600">Chất lượng cao</div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-6 lg:-top-12 -right-4 lg:-right-12 bg-vintage-50/95 backdrop-blur-md p-3 lg:p-6 rounded-2xl shadow-wood border border-mountain-200/30 animate-float wood-grain" style={{ animationDelay: '1s' }}>
                <div className="flex items-center space-x-4">
                  <div className="w-10 lg:w-14 h-10 lg:h-14 bg-gradient-to-br from-mountain-500 to-mountain-600 rounded-2xl flex items-center justify-center">
                    <Mountain className="h-5 lg:h-7 w-5 lg:w-7 text-white animate-float" />
                  </div>
                  <div>
                    <div className="font-nature font-bold text-sm lg:text-base text-mountain-800">Cao nguyên Mộc Châu</div>
                    <div className="text-xs lg:text-sm text-mountain-600">Vùng núi cao</div>
                  </div>
                </div>
              </div>

              {/* Additional decorative elements */}
              <div className="absolute top-1/2 -left-3 lg:-left-6 w-8 lg:w-12 h-8 lg:h-12 bg-forest-400/30 rounded-full animate-float" style={{ animationDelay: '2s' }} />
              <div className="absolute bottom-1/4 -right-2 lg:-right-4 w-6 lg:w-8 h-6 lg:h-8 bg-vintage-400/40 rounded-full animate-float" style={{ animationDelay: '3s' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 lg:bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 lg:w-8 h-10 lg:h-12 border-2 border-forest-400 rounded-full flex justify-center relative">
          <div className="w-2 h-4 bg-forest-400 rounded-full mt-2 animate-float" />
          <div className="absolute -bottom-2 text-xs text-forest-400 font-nature hidden lg:block">Cuộn xuống</div>
        </div>
      </div>
    </section>
  );
};

export default MysticalHero;