import { TreePine, Shield, Eye, Users, Leaf, Mountain } from 'lucide-react';
import Card from '../ui/Card';

const services = [
  {
    icon: Users,
    title: 'Ăn Uống & Giải Trí',
    description: 'Đặt bàn, gọi món QR, phòng VIP và sự kiện nhỏ gọn – rõ ràng chính sách cọc/no‑show.',
    features: ['Đặt bàn theo ca', 'QR order tại bàn', 'Phòng VIP / trang trí'],
    color: 'from-rose-500 to-orange-500',
    bgColor: 'default'
  },
  {
    icon: Shield,
    title: 'Đặc Sản & Giao Hàng',
    description: 'Đặt mua đặc sản Mộc Châu, ship nội khu/xa, theo dõi đơn minh bạch.',
    features: ['Giỏ quà theo mùa', 'Pre‑order mận/dâu/chè', 'Tracking giao xa'],
    color: 'from-amber-500 to-yellow-600',
    bgColor: 'mountain'
  },
  {
    icon: TreePine,
    title: 'Lưu Trú (Homestay/Hotel)',
    description: 'Phòng theo ngày, giá động cuối tuần/lễ, add‑on BBQ – chụp ảnh – babysitting.',
    features: ['Honeymoon/Family', 'BBQ & lửa trại', 'Trang trí phòng'],
    color: 'from-forest-500 to-moss-600',
    bgColor: 'forest'
  },
  {
    icon: Eye,
    title: 'Tour & Hoạt Động',
    description: 'Tour cố định / custom: săn mây, trekking, workshop văn hoá – an toàn & rõ điều kiện.',
    features: ['Guide đa ngôn ngữ', 'Trang phục dân tộc', 'Bảo hiểm du lịch'],
    color: 'from-sky-500 to-indigo-600',
    bgColor: 'earth'
  },
  {
    icon: Mountain,
    title: 'Thuê Xe & Vận Tải',
    description: 'Thuê xe máy/ô tô/ATV theo ngày, hợp đồng điện tử, cứu hộ 24/7, phụ kiện đầy đủ.',
    features: ['Giao/nhận tận nơi', 'Biên bản tình trạng', 'Fuel policy minh bạch'],
    color: 'from-teal-500 to-cyan-600',
    bgColor: 'default'
  },
  {
    icon: Leaf,
    title: 'Vé Sự Kiện & Festival',
    description: 'Mua vé theo hạng/khung giờ, vào cổng bằng QR (offline fallback), combo shuttle–homestay.',
    features: ['QR check‑in', 'Combo vé + shuttle', 'Thuê trang phục tại cổng'],
    color: 'from-violet-500 to-fuchsia-600',
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
            <span className="text-forest-200 text-sm font-medium">Dịch vụ CHILL Mộc Châu</span>
          </div>

          <h2 className="text-4xl lg:text-6xl font-nature font-bold text-white mb-6">
            Trải Nghiệm Bản Địa
            <span className="block text-forest-300">Mùa Vụ – Rõ Ràng – Kết Nối</span>
          </h2>
          <p className="text-xl text-forest-200 max-w-3xl mx-auto leading-relaxed">
            Bao quát từ bên cung đến bên cầu: ăn uống, đặc sản, lưu trú, tour/hoạt động, thuê xe và vé sự kiện –
            minh bạch chính sách, dễ ghép combo, thuận tiện cho hành trình Mộc Châu.
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
