import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TreePine, Crown, MapPin, Star, Home, Car, Coffee } from 'lucide-react';

const featuredServices = [
  {
    id: 1,
    name: 'Homestay Mộc Châu View Núi',
    category: 'homestay',
    price: 800000,
    originalPrice: 1200000,
    status: 'available',
    image: 'https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=800',
    location: 'Cao nguyên Mộc Châu',
    rating: 4.9,
    reviews: 156,
    type: 'Homestay cao cấp',
    size: 'large',
    description: 'Homestay cao cấp với view núi tuyệt đẹp, phòng ốc hiện đại, dịch vụ 5 sao và nhiều tiện ích đi kèm như BBQ, xe đạp miễn phí.',
    features: ['View núi tuyệt đẹp', 'Phòng hiện đại', 'BBQ miễn phí', 'Xe đạp cho thuê', 'Wifi tốc độ cao', 'Bữa sáng miễn phí']
  },
  {
    id: 2,
    name: 'Tour Săn Mây Tà Xùa 2N1Đ',
    category: 'tour',
    price: 1500000,
    originalPrice: 2000000,
    status: 'available',
    image: 'https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=800',
    location: 'Đỉnh Tà Xùa',
    rating: 4.8,
    reviews: 89,
    type: 'Tour phiêu lưu',
    size: 'medium'
  },
  {
    id: 3,
    name: 'Nhà hàng Đặc sản Mộc Châu',
    category: 'restaurant',
    price: 300000,
    originalPrice: 400000,
    status: 'available',
    image: 'https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=800',
    location: 'Trung tâm Mộc Châu',
    rating: 4.7,
    reviews: 234,
    type: 'Ẩm thực địa phương',
    size: 'small'
  },
  {
    id: 4,
    name: 'Thuê xe máy Honda Winner',
    category: 'vehicle',
    price: 200000,
    originalPrice: 300000,
    status: 'available',
    image: 'https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=800',
    location: 'Mộc Châu',
    rating: 4.6,
    reviews: 67,
    type: 'Thuê xe theo ngày',
    size: 'medium'
  }
];

const AsymmetricServices = () => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
    }).format(price);
  };

  const getTypeColor = (type: string) => {
    const colors = {
      'Homestay cao cấp': 'from-yellow-500 to-orange-500',
      'Tour phiêu lưu': 'from-purple-500 to-pink-500',
      'Ẩm thực địa phương': 'from-blue-500 to-indigo-500',
      'Thuê xe theo ngày': 'from-green-500 to-emerald-500',
    };
    return colors[type as keyof typeof colors] || 'from-forest-500 to-forest-600';
  };

  const getCardSize = (size: string) => {
    switch (size) {
      case 'large':
        return 'lg:col-span-2 lg:row-span-2';
      case 'medium':
        return 'lg:col-span-1 lg:row-span-1';
      case 'small':
        return 'lg:col-span-1 lg:row-span-1';
      default:
        return 'lg:col-span-1 lg:row-span-1';
    }
  };

  return (
    <section className="relative py-24 bg-gradient-to-br from-vintage-50 via-vintage-100 to-forest-50 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 forest-texture opacity-30" />
      <div className="absolute top-20 left-10 text-8xl opacity-10 animate-sway">🌲</div>
      <div className="absolute bottom-20 right-10 text-6xl opacity-15 animate-float">🍃</div>
      <div className="absolute top-1/2 left-1/4 text-5xl opacity-5 animate-mist">🏔️</div>
      
      {/* Torn paper sections */}
      <div className="absolute top-0 left-0 w-full h-32 bg-forest-100/20 torn-paper" />
      <div className="absolute bottom-0 right-0 w-2/3 h-24 bg-vintage-200/30 torn-paper transform rotate-180" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Creative Typography */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-3 px-6 py-3 bg-forest-100/80 backdrop-blur-sm rounded-full mb-8 border border-forest-200/50">
            <TreePine className="h-5 w-5 text-forest-600 animate-branch-sway" />
            <span className="text-forest-700 text-sm font-nature font-medium">Dịch vụ nổi bật</span>
            <Crown className="h-4 w-4 text-forest-500 animate-float" />
          </div>
          
          <h2 className="font-elegant font-bold text-forest-900 mb-8">
            <span className="block text-5xl lg:text-7xl">Dịch Vụ Du Lịch</span>
            <span className="block text-4xl lg:text-6xl text-forest-700 mt-2">Tuyệt Vời</span>
          </h2>
          
          {/* Decorative divider */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-forest-400 to-transparent rounded-full" />
            <div className="w-3 h-3 bg-forest-400 rounded-full animate-float" />
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-vintage-400 to-transparent rounded-full" />
          </div>
          
          <p className="text-xl text-forest-700 max-w-3xl mx-auto leading-relaxed font-nature">
            Khám phá Mộc Châu với đầy đủ dịch vụ du lịch chất lượng cao: homestay, tour, 
            ẩm thực và nhiều trải nghiệm độc đáo khác.
          </p>
        </div>

        {/* Asymmetric Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredServices.map((service, index) => (
            <div
              key={service.id}
              className={`group relative ${getCardSize(service.size)} animate-fade-up`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative h-full bg-vintage-50/90 backdrop-blur-sm rounded-3xl overflow-hidden shadow-wood border border-forest-200/30 hover:shadow-forest transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] wood-grain">
                {/* Image with overlay */}
                <div className="relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    className={`w-full object-cover group-hover:scale-110 transition-transform duration-700 ${
                      service.size === 'large' ? 'h-80 lg:h-96' : 'h-64'
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-900/60 via-transparent to-transparent" />
                  
                  {/* Mystical overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-forest-500/20 via-transparent to-vintage-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Badges - Left side */}
                <div className="absolute top-6 left-6 flex flex-col space-y-3 z-10">
                  <div className={`flex items-center space-x-2 px-4 py-2 bg-gradient-to-r ${getTypeColor(service.type)} text-white text-sm font-medium rounded-full shadow-lg backdrop-blur-sm`}>
                    <Crown className="h-4 w-4" />
                    <span>{service.type}</span>
                  </div>
                  
                  {service.status === 'booked' && (
                    <div className="px-4 py-2 bg-orange-600 text-white text-sm font-medium rounded-full shadow-lg backdrop-blur-sm">
                      Đã đặt
                    </div>
                  )}
                </div>

                {/* Rating badge - Top right corner */}
                <div className="absolute top-6 right-6 flex items-center space-x-2 px-4 py-2 bg-vintage-50/85 backdrop-blur-sm rounded-full shadow-lg border border-forest-200/30 z-10">
                  <Star className="h-4 w-4 text-yellow-500 fill-current" />
                  <span className="text-sm font-nature font-medium text-forest-800">{service.rating}</span>
                </div>

                {/* Content */}
                <div className="p-8 space-y-6">
                  <h3 className="font-elegant font-bold text-xl text-forest-900 group-hover:text-forest-700 transition-colors duration-300 leading-tight">
                    {service.name}
                  </h3>

                  <div className="flex items-center text-forest-600">
                    <MapPin className="h-5 w-5 mr-2 flex-shrink-0" />
                    <span className="text-sm font-nature truncate">{service.location}</span>
                  </div>

                  {/* Pricing with Creative Layout */}
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 bg-forest-50/50 rounded-2xl border border-forest-200/30">
                      <span className="text-sm text-forest-600 font-nature">Giá hiện tại:</span>
                      <span className="font-bold text-forest-800 font-nature text-sm">
                        {formatPrice(service.price)}
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-vintage-100/50 rounded-2xl border border-vintage-200/30">
                      <span className="text-sm text-forest-600 font-nature">Giá gốc:</span>
                      <span className="font-semibold text-forest-700 font-nature text-sm">
                        <span className="line-through">{formatPrice(service.originalPrice)}</span>
                      </span>
                    </div>
                  </div>

                  {/* Details Section - Chỉ hiển thị cho dịch vụ đầu tiên */}
                  {service.id === 1 && (
                    <div className="space-y-6">
                      {/* Thông tin chi tiết */}
                      <div className="bg-gradient-to-br from-amber-50/80 to-vintage-50/80 backdrop-blur-sm rounded-2xl p-6 border border-amber-200/30 animate-fade-up" style={{ animationDelay: '0.3s' }}>
                        {/* Title với icon */}
                        <h4 className="font-bold text-amber-700 mb-4 text-center flex items-center justify-center">
                          <Crown className="h-4 w-4 text-amber-600 mr-2 animate-pulse" />
                          <span className="text-lg">Thông tin chi tiết</span>
                          <Crown className="h-4 w-4 text-amber-600 ml-2 animate-pulse" />
                        </h4>
                        
                        {/* Description */}
                        <p className="text-amber-800 text-sm leading-relaxed font-medium mb-4 text-center">
                          {service.description}
                        </p>
                        
                        {/* Additional details */}
                        <div className="grid grid-cols-2 gap-4 text-xs">
                          <div className="bg-white/60 rounded-lg p-3 text-center">
                            <div className="text-amber-700 font-bold mb-1">Đánh giá</div>
                            <div className="text-amber-800">{service.rating}/5</div>
                          </div>
                          <div className="bg-white/60 rounded-lg p-3 text-center">
                            <div className="text-amber-700 font-bold mb-1">Reviews</div>
                            <div className="text-amber-800">{service.reviews}</div>
                          </div>
                          <div className="bg-white/60 rounded-lg p-3 text-center">
                            <div className="text-amber-700 font-bold mb-1">Danh mục</div>
                            <div className="text-amber-800">{service.category}</div>
                          </div>
                          <div className="bg-white/60 rounded-lg p-3 text-center">
                            <div className="text-amber-700 font-bold mb-1">Trạng thái</div>
                            <div className="text-amber-800 capitalize">{service.status}</div>
                          </div>
                        </div>
                      </div>

                      {/* Features Section */}
                      {service.features && (
                        <div className="bg-gradient-to-br from-purple-50/90 to-indigo-50/90 backdrop-blur-sm rounded-2xl p-6 border border-purple-200/40 animate-fade-up" style={{ animationDelay: '0.5s' }}>
                          {/* Title với icon mystical */}
                          <h4 className="font-bold text-purple-700 mb-4 text-center flex items-center justify-center">
                            <div className="w-2 h-2 bg-purple-400 rounded-full animate-ping mr-3" />
                            <span className="text-lg">Tiện Ích Đi Kèm</span>
                            <div className="w-2 h-2 bg-purple-400 rounded-full animate-ping ml-3" />
                          </h4>
                          
                          {/* Features grid */}
                          <div className="grid grid-cols-2 gap-2">
                            {service.features.map((feature, idx) => (
                              <div key={idx} className="flex items-center text-purple-800 text-sm">
                                <div className="w-2 h-2 bg-purple-400 rounded-full mr-2" />
                                {feature}
                              </div>
                            ))}
                          </div>
                          
                          {/* Mystical elements */}
                          <div className="flex justify-center mt-4 space-x-2">
                            <div className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                            <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                            <div className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.3s' }} />
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* CTA Button - Fixed text wrapping */}
                  <Link
                    to={`/services/${service.id}`}
                    className="block w-full text-center bg-gradient-to-r from-forest-600 to-forest-700 text-white py-4 rounded-2xl hover:from-forest-500 hover:to-forest-600 transition-all duration-300 font-nature font-medium shadow-forest hover:shadow-xl hover:scale-105 group-hover:shadow-2xl relative overflow-hidden"
                  >
                    <div className="flex items-center justify-center space-x-2">
                      <TreePine className="h-5 w-5 flex-shrink-0" />
                      <span className="whitespace-nowrap">Khám phá chi tiết</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300 flex-shrink-0" />
                    </div>
                    
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </Link>
                </div>

                {/* Decorative corner elements */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-forest-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-float" />
                <div className="absolute bottom-4 left-4 w-2 h-2 bg-vintage-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Link to="/services">
            <button className="group relative px-12 py-6 bg-gradient-to-r from-forest-600 to-forest-700 text-white rounded-full hover:from-forest-500 hover:to-forest-600 transition-all duration-300 shadow-forest hover:shadow-2xl hover:scale-105 overflow-hidden">
              <div className="flex items-center space-x-3">
                <TreePine className="h-6 w-6 group-hover:animate-branch-sway flex-shrink-0" />
                <span className="font-nature font-bold text-xl whitespace-nowrap">Khám phá tất cả dịch vụ</span>
                <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform duration-300 flex-shrink-0" />
              </div>
              
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AsymmetricServices;