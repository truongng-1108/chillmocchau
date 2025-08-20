import { Check, TreePine, Shield, Eye, Users, Calendar, Mountain, Leaf, Crown } from 'lucide-react';
import { Car, Utensils, Gift, Ticket, Home, Camera } from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const services = [
  {
    id: 'basic',
    name: 'Gói Khám Phá Cơ Bản',
    price: 1500000,
    duration: 'người',
    icon: TreePine,
    features: [
      'Homestay 2N1Đ view đồi chè',
      'Ăn sáng đặc sản địa phương',
      'Tour tham quan 1 ngày',
      'Hướng dẫn viên bản địa',
      'Bảo hiểm du lịch cơ bản'
    ],
    popular: false,
    color: 'from-forest-500 to-moss-500'
  },
  {
    id: 'premium',
    name: 'Gói Trải Nghiệm Cao Cấp',
    price: 2800000,
    duration: 'người',
    icon: Mountain,
    features: [
      'Homestay 3N2Đ phòng VIP',
      'Tour săn mây bình minh Tà Xùa',
      'BBQ tối + acoustic night',
      'Chụp ảnh trang phục dân tộc',
      'Thuê xe máy + phụ kiện',
      'Hỗ trợ 24/7 + cứu hộ',
      'Bảo hiểm du lịch toàn diện'
    ],
    popular: true,
    color: 'from-mountain-500 to-mountain-600'
  },
  {
    id: 'vip',
    name: 'Gói Trọn Gói VIP',
    price: 4500000,
    duration: 'người',
    icon: Crown,
    features: [
      'Hướng dẫn viên riêng 1-1',
      'Lịch trình tùy chỉnh cá nhân',
      'Tất cả tour + hoạt động',
      'Ăn uống cao cấp mọi bữa',
      'Vé tham gia mọi lễ hội',
      'Đặc sản mang về theo mùa',
      'Xe riêng + tài xế',
      'Phòng suite view núi',
      'Concierge 24/7'
    ],
    popular: false,
    color: 'from-yellow-500 to-orange-500'
  }
];

const serviceCategories = [
  {
    id: 'accommodation',
    name: 'Gói Lưu Trú Premium',
    price: 1200000,
    duration: 'đêm',
    icon: Home,
    features: [
      'Homestay/Hotel view đồi chè',
      'Phòng VIP với ban công riêng',
      'BBQ + lửa trại tối',
      'Trang trí phòng theo yêu cầu',
      'Dịch vụ babysitting',
      'Ăn sáng buffet đặc sản',
      'Late check-out miễn phí'
    ],
    popular: false,
    color: 'from-blue-500 to-indigo-500'
  },
  {
    id: 'transport',
    name: 'Gói Thuê Xe Toàn Diện',
    price: 350000,
    duration: 'ngày',
    icon: Car,
    features: [
      'Xe máy/ô tô/ATV theo lựa chọn',
      'Giao nhận tận nơi',
      'Bảo hiểm + cứu hộ 24/7',
      'Phụ kiện đầy đủ (mũ bảo hiểm, áo mưa)',
      'Hướng dẫn lộ trình chi tiết',
      'Fuel policy minh bạch',
      'Hỗ trợ kỹ thuật tại chỗ'
    ],
    popular: true,
    color: 'from-green-500 to-emerald-500'
  },
  {
    id: 'dining',
    name: 'Gói Ẩm Thực Bản Địa',
    price: 450000,
    duration: 'người',
    icon: Utensils,
    features: [
      'Đặt bàn VIP tại nhà hàng đối tác',
      'Menu đặc sản theo mùa',
      'QR order tại bàn tiện lợi',
      'Acoustic night + không gian riêng tư',
      'Trang trí bàn theo sự kiện',
      'Rượu cần + trà cổ thụ',
      'Photographer ghi lại khoảnh khắc'
    ],
    popular: false,
    color: 'from-orange-500 to-red-500'
  },
  {
    id: 'specialty',
    name: 'Gói Đặc Sản Theo Mùa',
    price: 280000,
    duration: 'combo',
    icon: Gift,
    features: [
      'Mận/dâu/chè tươi theo mùa',
      'Đóng gói quà tặng cao cấp',
      'Ship toàn quốc + tracking',
      'Pre-order cho mùa vụ',
      'Tư vấn bảo quản sản phẩm',
      'Chứng nhận nguồn gốc',
      'Hoàn tiền nếu không hài lòng'
    ],
    popular: false,
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 'events',
    name: 'Gói Vé Sự Kiện VIP',
    price: 180000,
    duration: 'vé',
    icon: Ticket,
    features: [
      'Vé VIP các lễ hội/festival',
      'QR check-in nhanh chóng',
      'Shuttle bus từ homestay',
      'Thuê trang phục dân tộc tại cổng',
      'Combo vé + ăn uống',
      'Chỗ ngồi ưu tiên',
      'Quà lưu niệm độc quyền'
    ],
    popular: false,
    color: 'from-teal-500 to-cyan-500'
  },
  {
    id: 'photography',
    name: 'Gói Chụp Ảnh Nghệ Thuật',
    price: 890000,
    duration: 'buổi',
    icon: Camera,
    features: [
      'Photographer chuyên nghiệp',
      'Trang phục dân tộc đầy đủ',
      'Makeup + làm tóc cơ bản',
      'Chụp tại 3-5 địa điểm đẹp',
      'Edit ảnh chuyên nghiệp',
      'Album kỷ niệm cao cấp',
      'File gốc + bản quyền sử dụng'
    ],
    popular: true,
    color: 'from-violet-500 to-purple-500'
  }
];
const additionalServices = [
  {
    name: 'Tư vấn Lịch Trình',
    description: 'Chuyên gia du lịch tư vấn hành trình theo mùa',
    price: 'Miễn phí',
    icon: Users,
    color: 'from-forest-500 to-moss-500'
  },
  {
    name: 'Đưa đón Sân bay',
    description: 'Dịch vụ đưa đón từ sân bay Nội Bài',
    price: 'Từ 2.500.000đ',
    icon: Shield,
    color: 'from-mountain-500 to-mountain-600'
  },
  {
    name: 'Chụp ảnh Chuyên nghiệp',
    description: 'Photographer riêng + album kỷ niệm',
    price: 'Từ 1.500.000đ',
    icon: Eye,
    color: 'from-earth-500 to-earth-600'
  }
];

const Services = () => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN').format(price);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-forest-50 via-moss-50 to-earth-50 pt-20">
      {/* Hero section */}
      <div className="relative py-20 bg-gradient-to-br from-forest-900 via-mountain-900 to-forest-800 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 text-6xl opacity-10 animate-sway">🌲</div>
          <div className="absolute bottom-10 right-10 text-5xl opacity-10 animate-float">🏔️</div>
          <div className="absolute top-1/2 left-1/4 text-4xl opacity-5 animate-wind">🌿</div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-forest-800/50 backdrop-blur-sm rounded-full mb-6 border border-forest-600/30">
            <Leaf className="h-4 w-4 text-forest-400" />
            <span className="text-forest-200 text-sm font-medium">Dịch vụ chuyên nghiệp</span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-nature font-bold text-white mb-6">
            Gói Trải Nghiệm
            <span className="block text-forest-300">Mộc Châu Trọn Vẹn</span>
          </h1>
          <p className="text-xl text-forest-200 max-w-3xl mx-auto">
            Mỗi chuyến du lịch đều cần được lên kế hoạch chu đáo và trải nghiệm trọn vẹn. 
            Chúng tôi mang đến các gói dịch vụ toàn diện cho mọi nhu cầu du lịch.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Service Packages */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-nature font-bold text-forest-900 mb-4">
              Gói Du Lịch Trọn Gói
            </h2>
            <p className="text-lg text-forest-700 max-w-2xl mx-auto">
              Lựa chọn gói trải nghiệm phù hợp với thời gian và ngân sách của bạn
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card 
                key={service.id} 
                variant="forest"
                className={`relative p-8 ${service.popular ? 'ring-4 ring-forest-500 scale-105' : ''}`}
                hover
              >
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-forest-600 to-moss-600 text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg">
                      Phổ biến nhất
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <div className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl`}>
                    <service.icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-nature font-bold text-forest-900 mb-4">
                    {service.name}
                  </h3>
                  <div className="text-4xl font-bold text-forest-800">
                    {formatPrice(service.price)}đ
                    <span className="text-base font-normal text-forest-600">/{service.duration}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start text-forest-700">
                      <Check className="h-5 w-5 text-forest-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  variant={service.popular ? 'forest' : 'outline'} 
                  size="lg" 
                  className="w-full"
                >
                  <span className="flex items-center justify-center space-x-2">
                    <TreePine className="h-5 w-5" />
                    <span>Đăng ký ngay</span>
                  </span>
                </Button>
              </Card>
            ))}
          </div>
        </div>

        {/* Service Categories */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-nature font-bold text-forest-900 mb-4">
              Dịch Vụ Chuyên Biệt
            </h2>
            <p className="text-lg text-forest-700 max-w-2xl mx-auto">
              6 nhóm dịch vụ chính bao phủ mọi nhu cầu du lịch tại Mộc Châu
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((service) => (
              <Card 
                key={service.id} 
                variant="mountain"
                className={`relative p-6 ${service.popular ? 'ring-4 ring-mountain-500 scale-105' : ''}`}
                hover
              >
                {service.popular && (
                  <div className="absolute -top-3 -right-3">
                    <span className="bg-gradient-to-r from-mountain-600 to-mountain-700 text-white px-4 py-1 rounded-full text-xs font-medium shadow-lg">
                      Hot
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-nature font-bold text-mountain-900 mb-3">
                    {service.name}
                  </h3>
                  <div className="text-2xl font-bold text-mountain-800">
                    {formatPrice(service.price)}đ
                    <span className="text-sm font-normal text-mountain-600">/{service.duration}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start text-mountain-700 text-sm">
                      <Check className="h-4 w-4 text-mountain-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  variant={service.popular ? 'mountain' : 'outline'} 
                  size="md" 
                  className="w-full hover:scale-105 transition-transform duration-300"
                >
                  <span className="flex items-center justify-center space-x-2">
                    <service.icon className="h-4 w-4" />
                    <span className="text-forest-600 border-2 border-forest-600">Đặt ngay</span>
                  </span>
                </Button>
              </Card>
            ))}
          </div>
        </div>
        {/* Additional Services */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-nature font-bold text-forest-900 mb-4">
              Dịch Vụ Hỗ Trợ
            </h2>
            <p className="text-lg text-forest-700 max-w-2xl mx-auto">
              Các dịch vụ bổ sung để hoàn thiện chuyến du lịch của bạn
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <Card key={index} hover variant="mountain" className="p-8 text-center">
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-nature font-semibold text-xl text-mountain-900 mb-3">
                  {service.name}
                </h3>
                <p className="text-mountain-700 mb-4">
                  {service.description}
                </p>
                <div className="text-forest-600 font-semibold text-lg">
                  {service.price}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Consultation Form */}
        <Card variant="earth" className="p-12 bg-gradient-to-br from-earth-50 to-earth-100">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-earth-500 to-earth-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl">
              <Calendar className="h-10 w-10 text-white" />
            </div>
            <h2 className="text-3xl font-nature font-bold text-earth-900 mb-6">
              Tư Vấn Lịch Trình Miễn Phí
            </h2>
            <p className="text-earth-700 mb-8 text-lg leading-relaxed">
              Chuyên gia du lịch của CHILL sẽ tư vấn chi tiết về lịch trình 
              du lịch Mộc Châu phù hợp với thời gian và sở thích của bạn
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <input
                type="text"
                placeholder="Họ và tên"
                className="px-6 py-4 bg-white/80 border border-earth-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-earth-500 text-earth-800"
              />
              <input
                type="tel"
                placeholder="Số điện thoại"
                className="px-6 py-4 bg-white/80 border border-earth-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-earth-500 text-earth-800"
              />
            </div>
            
            <div className="mb-8">
              <textarea
                placeholder="Mô tả nhu cầu của bạn..."
                rows={4}
                className="w-full px-6 py-4 bg-white/80 border border-earth-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-earth-500 text-earth-800"
              />
            </div>
            
            <Button size="xl" variant="forest" className="w-full md:w-auto">
              <span className="flex items-center justify-center space-x-2">
                <Calendar className="h-5 w-5" />
                <span>Nhận tư vấn miễn phí</span>
              </span>
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Services;