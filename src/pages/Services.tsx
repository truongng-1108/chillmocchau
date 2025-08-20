import { Check, TreePine, Shield, Eye, Users, Calendar, Mountain, Leaf, Crown } from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const services = [
  {
    id: 'basic',
    name: 'Gói Rừng Xanh',
    price: 500000,
    duration: 'tháng',
    icon: TreePine,
    features: [
      'Tưới nước 3 lần/tuần',
      'Kiểm tra sức khỏe hàng tuần',
      'Báo cáo tình trạng qua email',
      'Hỗ trợ qua điện thoại',
      'Bón phân 1 lần/tháng'
    ],
    popular: false,
    color: 'from-forest-500 to-moss-500'
  },
  {
    id: 'premium',
    name: 'Gói Núi Thiêng',
    price: 1200000,
    duration: 'tháng',
    icon: Mountain,
    features: [
      'Tưới nước tự động hàng ngày',
      'Kiểm tra sức khỏe 2 lần/tuần',
      'Theo dõi qua camera 24/7',
      'Báo cáo chi tiết hàng tuần',
      'Bón phân hữu cơ chuyên dụng',
      'Hỗ trợ kỹ thuật 24/7',
      'Bảo hiểm cây trồng cơ bản'
    ],
    popular: true,
    color: 'from-mountain-500 to-mountain-600'
  },
  {
    id: 'vip',
    name: 'Gói Hoàng Gia',
    price: 2500000,
    duration: 'tháng',
    icon: Crown,
    features: [
      'Chăm sóc riêng biệt 1-1',
      'Kỹ thuật viên chuyên trách',
      'Hệ thống IoT cao cấp',
      'Báo cáo realtime',
      'Tư vấn phong thủy chuyên sâu',
      'Chăm sóc theo từng mùa',
      'Bảo hiểm toàn diện',
      'Dịch vụ vận chuyển miễn phí',
      'Tư vấn chuyên gia 24/7'
    ],
    popular: false,
    color: 'from-yellow-500 to-orange-500'
  }
];

const additionalServices = [
  {
    name: 'Tư vấn Phong Thủy',
    description: 'Chuyên gia phong thủy tư vấn vị trí đặt cây',
    price: 'Miễn phí',
    icon: Users,
    color: 'from-forest-500 to-moss-500'
  },
  {
    name: 'Vận chuyển An toàn',
    description: 'Đội ngũ chuyên nghiệp vận chuyển cây',
    price: 'Từ 1.000.000đ',
    icon: Shield,
    color: 'from-mountain-500 to-mountain-600'
  },
  {
    name: 'Theo dõi IoT',
    description: 'Hệ thống cảm biến thông minh',
    price: 'Từ 500.000đ',
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
            Chăm Sóc Cây Trà
            <span className="block text-forest-300">Như Báu Vật</span>
          </h1>
          <p className="text-xl text-forest-200 max-w-3xl mx-auto">
            Mỗi cây trà cổ thụ đều cần được chăm sóc với tình yêu và sự chuyên nghiệp. 
            Chúng tôi mang đến các gói dịch vụ toàn diện cho từng nhu cầu.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Service Packages */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-nature font-bold text-forest-900 mb-4">
              Gói Chăm Sóc Chuyên Nghiệp
            </h2>
            <p className="text-lg text-forest-700 max-w-2xl mx-auto">
              Lựa chọn gói dịch vụ phù hợp với nhu cầu và ngân sách của bạn
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
                  Đăng ký ngay
                </Button>
              </Card>
            ))}
          </div>
        </div>

        {/* Additional Services */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-nature font-bold text-forest-900 mb-4">
              Dịch Vụ Bổ Sung
            </h2>
            <p className="text-lg text-forest-700 max-w-2xl mx-auto">
              Các dịch vụ chuyên biệt để nâng cao trải nghiệm chăm sóc cây trà
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
              Đặt Lịch Tư Vấn Miễn Phí
            </h2>
            <p className="text-earth-700 mb-8 text-lg leading-relaxed">
              Chuyên gia của SEEME sẽ tư vấn chi tiết về nhu cầu chăm sóc 
              cây trà cổ thụ phù hợp với không gian và mong muốn của bạn
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
              Đặt lịch tư vấn miễn phí
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Services;