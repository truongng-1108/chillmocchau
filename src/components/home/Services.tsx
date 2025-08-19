import { TreePine, Shield, Eye, Users, Calendar, Mountain, Leaf, Crown, Home, Coffee, Car } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

const services = [
  {
    icon: Home,
    title: 'Homestay & Lưu Trú',
    description: 'Hệ thống homestay và khách sạn chất lượng cao với view núi tuyệt đẹp và dịch vụ 5 sao.',
    features: ['Phòng view núi', 'Dịch vụ 24/7', 'Bữa sáng miễn phí'],
    color: 'from-forest-500 to-moss-500',
    bgColor: 'forest'
  },
  {
    icon: Mountain,
    title: 'Tour & Hoạt Động',
    description: 'Các tour du lịch đa dạng từ săn mây, trekking đến trải nghiệm văn hóa bản địa.',
    features: ['Tour săn mây', 'Trekking núi', 'Văn hóa bản địa'],
    color: 'from-mountain-500 to-mountain-600',
    bgColor: 'mountain'
  },
  {
    icon: Coffee,
    title: 'Ẩm Thực & Giải Trí',
    description: 'Thưởng thức đặc sản Mộc Châu và tham gia các hoạt động giải trí độc đáo.',
    features: ['Đặc sản địa phương', 'Nhà hàng view đẹp', 'Âm nhạc live'],
    color: 'from-earth-500 to-earth-600',
    bgColor: 'earth'
  },
  {
    icon: Car,
    title: 'Thuê Xe & Vận Tải',
    description: 'Dịch vụ thuê xe đa dạng từ xe máy, ô tô đến xe limousine cao cấp.',
    features: ['Xe máy', 'Ô tô 4-7 chỗ', 'Xe limousine'],
    color: 'from-moss-500 to-forest-600',
    bgColor: 'default'
  }
];

const ServiceCard = ({ service, index, isActive, onHover }) => {
  const Icon = service.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      onMouseEnter={() => onHover(index)}
      onMouseLeave={() => onHover(null)}
      className={`relative group cursor-pointer transition-all duration-500 ${
        isActive ? 'scale-105' : 'hover:scale-105'
      }`}
    >
      <div className={`
        relative overflow-hidden rounded-3xl p-8 h-full
        bg-gradient-to-br ${service.color}
        shadow-xl hover:shadow-2xl transition-all duration-500
        border border-white/10
        ${isActive ? 'ring-4 ring-white/30' : ''}
      `}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -translate-y-16 translate-x-16" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full translate-y-12 -translate-x-12" />
        </div>
        
        {/* Content */}
        <div className="relative z-10">
          {/* Icon */}
          <div className="mb-6">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
              <Icon className="w-8 h-8 text-white" />
            </div>
          </div>
          
          {/* Title */}
          <h3 className="text-2xl font-bold text-white mb-4 font-nature">
            {service.title}
          </h3>
          
          {/* Description */}
          <p className="text-white/90 mb-6 leading-relaxed">
            {service.description}
          </p>
          
          {/* Features */}
          <div className="space-y-3">
            {service.features.map((feature, idx) => (
              <div key={idx} className="flex items-center text-white/80">
                <div className="w-2 h-2 bg-white/60 rounded-full mr-3" />
                <span className="text-sm">{feature}</span>
              </div>
            ))}
          </div>
          
          {/* Hover Effect */}
          <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl" />
        </div>
      </div>
    </motion.div>
  );
};

export default function Services() {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-mountain-900 via-forest-900 to-earth-900" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-forest-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            rotate: -360,
            scale: [1.1, 1, 1.1]
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-mountain-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-nature font-bold text-white mb-6">
            Dịch Vụ Du Lịch
            <span className="block text-forest-300">Chất Lượng Cao</span>
          </h2>
          <p className="text-xl text-forest-200 max-w-3xl mx-auto leading-relaxed">
            Mỗi chuyến du lịch là một trải nghiệm đáng nhớ. Chúng tôi cam kết mang đến 
            những dịch vụ tốt nhất với sự chuyên nghiệp và tình yêu với Mộc Châu.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              index={index}
              isActive={activeCard === index}
              onHover={setActiveCard}
            />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <button className="group relative px-8 py-4 bg-gradient-to-r from-forest-500 to-moss-500 text-white font-semibold rounded-full hover:from-forest-600 hover:to-moss-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
            <span className="relative z-10">Khám Phá Dịch Vụ</span>
            <div className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}