import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, TreePine, Mountain, Leaf } from 'lucide-react';
import Button from '../ui/Button';

const CTA = () => {
  return (
    <section className="relative py-24 bg-gradient-to-br from-forest-900 via-mountain-900 to-forest-800 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        {/* Mountain silhouettes */}
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-mountain-800/40 to-transparent" />
        <div className="absolute bottom-0 right-0 w-2/3 h-1/3 bg-gradient-to-t from-forest-800/30 to-transparent transform skew-x-12" />
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 text-6xl opacity-10 animate-sway">🌲</div>
        <div className="absolute top-40 right-20 text-4xl opacity-15 animate-float">🏔️</div>
        <div className="absolute bottom-40 left-1/4 text-5xl opacity-10 animate-wind">🌿</div>
        
        {/* Mist overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-mist-900/10 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main content */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-forest-800/50 backdrop-blur-sm rounded-full mb-8 border border-forest-600/30">
            <TreePine className="h-4 w-4 text-forest-400" />
            <span className="text-forest-200 text-sm font-medium">Bắt đầu hành trình</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-nature font-bold text-white mb-6">
            Sẵn Sàng Trải Nghiệm
            <span className="block text-forest-300">Mộc Châu Tuyệt Vời?</span>
          </h2>
          <p className="text-xl text-forest-200 mb-12 leading-relaxed">
            Hãy để Chill Mộc Châu đồng hành cùng bạn trong hành trình khám phá 
            vẻ đẹp thiên nhiên và văn hóa độc đáo của cao nguyên Mộc Châu.
          </p>
          
          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Link to="/services">
              <Button 
                size="xl" 
                icon={ArrowRight}
                className="w-full sm:w-auto bg-gradient-to-r from-forest-500 to-moss-500 hover:from-forest-400 hover:to-moss-400"
              >
                Khám phá dịch vụ
              </Button>
            </Link>
            <Link to="/contact">
              <Button 
                variant="outline" 
                size="xl" 
                icon={Phone}
                className="w-full sm:w-auto border-forest-400 text-forest-200 hover:bg-forest-400 hover:text-white"
              >
                Tư vấn miễn phí
              </Button>
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="group">
            <div className="w-20 h-20 bg-gradient-to-br from-forest-500 to-moss-500 rounded-3xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-2xl">
              <TreePine className="h-10 w-10 text-white" />
            </div>
            <div className="text-3xl font-bold text-forest-300 mb-2 group-hover:text-forest-200 transition-colors duration-300">24/7</div>
            <div className="text-forest-400">Hỗ trợ khách hàng</div>
          </div>
          
          <div className="group">
            <div className="w-20 h-20 bg-gradient-to-br from-mountain-500 to-mountain-600 rounded-3xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-2xl">
              <Mountain className="h-10 w-10 text-white" />
            </div>
            <div className="text-3xl font-bold text-forest-300 mb-2 group-hover:text-forest-200 transition-colors duration-300">100%</div>
            <div className="text-forest-400">Hài lòng khách hàng</div>
          </div>
          
          <div className="group">
            <div className="w-20 h-20 bg-gradient-to-br from-earth-500 to-earth-600 rounded-3xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-2xl">
              <Leaf className="h-10 w-10 text-white" />
            </div>
            <div className="text-3xl font-bold text-forest-300 mb-2 group-hover:text-forest-200 transition-colors duration-300">10+</div>
            <div className="text-forest-400">Năm kinh nghiệm du lịch</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;