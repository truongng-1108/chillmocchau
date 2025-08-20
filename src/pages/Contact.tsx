import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, TreePine, Mountain, Leaf } from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Địa chỉ',
      content: 'Mộc Châu, Sơn La',
      subContent: 'Tây Bắc, Việt Nam',
      color: 'from-forest-500 to-moss-500'
    },
    {
      icon: Phone,
      title: 'Điện thoại',
      content: '+84 374 605 731',
      subContent: 'Hỗ trợ 24/7',
      color: 'from-mountain-500 to-mountain-600'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'chillmocchau@chillmocchau.vn',
      subContent: 'support@chillmocchau.vn',
      color: 'from-earth-500 to-earth-600'
    },
    {
      icon: Clock,
      title: 'Giờ làm việc',
      content: 'Thứ 2 - Chủ nhật',
      subContent: '06:00 - 22:00',
      color: 'from-moss-500 to-forest-600'
    }
  ];

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
            <span className="text-forest-200 text-sm font-medium">Kết nối với CHILL Mộc Châu</span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-nature font-bold text-white mb-6">
            Liên Hệ Với
            <span className="block text-forest-300">CHILL Mộc Châu</span>
          </h1>
          <p className="text-xl text-forest-200 max-w-3xl mx-auto">
            Đội ngũ của chúng tôi sẵn sàng hỗ trợ bạn đặt homestay, ăn uống, tour/hoạt động, thuê xe, vé sự kiện và đặc sản theo mùa – nhanh, rõ ràng, đáng tin cậy.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <Card variant="forest" className="p-8">
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-forest-500 to-moss-500 rounded-2xl flex items-center justify-center">
                  <Send className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-nature font-bold text-forest-900">
                  Gửi Yêu Cầu
                </h2>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-forest-700 mb-2">
                      Họ và tên *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/80 border border-forest-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-forest-500 focus:border-transparent text-forest-800"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-forest-700 mb-2">
                      Số điện thoại *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/80 border border-forest-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-forest-500 focus:border-transparent text-forest-800"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-forest-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/80 border border-forest-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-forest-500 focus:border-transparent text-forest-800"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-forest-700 mb-2">
                    Chủ đề
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/80 border border-forest-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-forest-500 focus:border-transparent text-forest-800"
                  >
                    <option value="">Chọn chủ đề</option>
                    <option value="homestay">Đặt homestay / khách sạn</option>
                    <option value="restaurant">Đặt bàn / ăn uống</option>
                    <option value="tour">Đặt tour / hoạt động trải nghiệm</option>
                    <option value="vehicle">Thuê xe (xe máy/ô tô/ATV)</option>
                    <option value="event">Vé sự kiện / festival</option>
                    <option value="specialty">Đặc sản / giao hàng</option>
                    <option value="policy">Khiếu nại / hoàn-hủy</option>
                    <option value="other">Khác</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-forest-700 mb-2">
                    Nội dung *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Ví dụ: Cần homestay 2 đêm (24–26/09), 4 người, gần rừng thông Bản Áng; thêm BBQ tối và tour hái dâu sáng hôm sau."
                    className="w-full px-4 py-3 bg-white/80 border border-forest-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-forest-500 focus:border-transparent text-forest-800"
                  />
                </div>

                <Button type="submit" size="lg" icon={Send} className="w-full" variant="forest">
                  Gửi yêu cầu
                </Button>
              </form>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} hover variant="mountain" className="p-6 text-center group">
                  <div className={`w-16 h-16 bg-gradient-to-br ${info.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <info.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-nature font-semibold text-lg text-mountain-900 mb-2">
                    {info.title}
                  </h3>
                  <div className="text-mountain-800 font-medium mb-1">
                    {info.content}
                  </div>
                  <div className="text-sm text-mountain-600">
                    {info.subContent}
                  </div>
                </Card>
              ))}
            </div>

            {/* Map (placeholder visual) */}
            <Card variant="earth" className="overflow-hidden">
              <div className="h-64 bg-gradient-to-br from-earth-100 to-earth-200 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-gradient-to-br from-mountain-500/20 to-forest-500/20" />
                <div className="relative z-10 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-forest-500 to-moss-500 rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-2xl">
                    <Mountain className="h-10 w-10 text-white" />
                  </div>
                  <div className="text-earth-800 font-nature font-bold text-lg">
                    Mộc Châu, Sơn La
                  </div>
                  <div className="text-earth-600">
                    Tây Bắc, Việt Nam
                  </div>
                </div>
              </div>
            </Card>

            {/* Additional Info */}
            <Card variant="forest" className="p-8 bg-gradient-to-br from-forest-50 to-moss-50">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-forest-500 to-moss-500 rounded-2xl flex items-center justify-center">
                  <TreePine className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-nature font-bold text-xl text-forest-900">
                  Vì sao chọn CHILL Mộc Châu?
                </h3>
              </div>
              <ul className="space-y-4 text-forest-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-forest-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <span>Mạng lưới đối tác uy tín (KYC), ảnh & địa điểm đã kiểm chứng.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-forest-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <span>Combo theo mùa: hoa mận, hoa cải, dâu; gợi ý lịch trình thông minh.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-forest-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <span>Chính sách cọc/hủy/hoàn rõ ràng; hỗ trợ minh bạch khiếu nại.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-forest-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <span>Tích điểm & ưu đãi loyalty; voucher theo khung giờ và sự kiện.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-forest-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <span>Hỗ trợ 24/7, ưu tiên an toàn khi tham gia tour & di chuyển.</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
