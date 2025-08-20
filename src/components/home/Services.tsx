import { TreePine, Shield, Eye, Users, Leaf, Mountain } from 'lucide-react';
import Card from '../ui/Card';

const services = [
  {
    icon: TreePine,
    title: 'Chăm Sóc Rừng Trà',
    description: 'Đội ngũ chuyên gia chăm sóc cây 24/7 với quy trình khoa học và tình yêu thiên nhiên.',
    features: ['Tưới nước tự động', 'Bón phân hữu cơ', 'Kiểm tra sức khỏe định kỳ'],
    color: 'from-forest-500 to-moss-500',
    bgColor: 'forest'
  },
  {
    icon: Shield,
    title: 'Bảo Vệ Toàn Diện',
    description: 'Hệ thống bảo hiểm và bảo vệ 100% giá trị, đảm bảo an toàn tuyệt đối cho cây trà.',
    features: ['Bảo hiểm thiên tai', 'Bảo vệ 24/7', 'Hỗ trợ khẩn cấp'],
    color: 'from-mountain-500 to-mountain-600',
    bgColor: 'mountain'
  },
  {
    icon: Eye,
    title: 'Theo Dõi Thông Minh',
    description: 'Công nghệ IoT và AI giúp bạn theo dõi cây mọi lúc mọi nơi qua ứng dụng di động.',
    features: ['Camera 4K 24/7', 'Cảm biến thông minh', 'Báo cáo AI'],
    color: 'from-earth-500 to-earth-600',
    bgColor: 'earth'
  },
  {
    icon: Users,
    title: 'Tư Vấn Chuyên Gia',
    description: 'Đội ngũ chuyên gia nông nghiệp và phong thủy tư vấn miễn phí suốt đời.',
    features: ['Tư vấn kỹ thuật', 'Phong thủy cây trà', 'Hỗ trợ online'],
    color: 'from-moss-500 to-forest-600',
    bgColor: 'default'
  }
];

const Services = () => {
  return (
    <section className="relative py-24 bg-gradient-to-br from-forest-900 via-mountain-900 to-forest-800 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 text-6xl opacity-10 animate-sway">🌲</div>
        <div className="absolute bottom-20 right-10 text-5xl opacity-10 animate-float">🏔️</div>
        <div className="absolute top-1/2 left-1/4 text-4xl opacity-5 animate-wind">🌿</div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-forest-800/50 backdrop-blur-sm rounded-full mb-6 border border-forest-600/30">
            <Leaf className="h-4 w-4 text-forest-400" />
            <span className="text-forest-200 text-sm font-medium">Dịch vụ chuyên nghiệp</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-nature font-bold text-white mb-6">
            Chăm Sóc Như
            <span className="block text-forest-300">Báu Vật Thiên Nhiên</span>
          </h2>
          <p className="text-xl text-forest-200 max-w-3xl mx-auto leading-relaxed">
            Mỗi cây trà cổ thụ là một kho báu của thiên nhiên. Chúng tôi cam kết mang đến 
            dịch vụ chăm sóc tốt nhất với công nghệ hiện đại và tình yêu thiên nhiên.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              hover
              variant="glass"
              className="p-8 text-center h-full group"
            >
              {/* Icon */}
              <div className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500 shadow-2xl`}>
                <service.icon className="h-10 w-10 text-white" />
              </div>
              
              {/* Content */}
              <h3 className="font-nature font-semibold text-xl text-white mb-4 group-hover:text-forest-200 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-forest-200 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center justify-center text-sm text-forest-300">
                    <span className="w-1.5 h-1.5 bg-forest-400 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-forest-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 w-1 h-1 bg-moss-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-forest-600 to-moss-600 text-white rounded-full hover:from-forest-500 hover:to-moss-500 transition-all duration-300 shadow-forest hover:shadow-xl cursor-pointer group">
            <Mountain className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
            <span className="font-medium">Tìm hiểu thêm về dịch vụ</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;