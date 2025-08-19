import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, TreePine, Crown, Clock, MapPin, Star, Shield, Eye, Camera, Gift, Award, Heart, CheckCircle, Upload, CreditCard, Truck, Video, User, Mail, Phone, MapIcon, FileText, QrCode, Sparkles, Leaf, Mountain, Zap, Calendar, Package, Check, Home, Plane, GraduationCap, AlignCenterVertical as Certificate, Users, Coffee } from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const TreeRental = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedPackage, setSelectedPackage] = useState('');
  const [selectedDelivery, setSelectedDelivery] = useState('');
  const [selectedPayment, setSelectedPayment] = useState('');
  const [showContract, setShowContract] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    address: '',
    idDocument: null as File | null
  });
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Mock tree data
  const tree = {
    id: 1,
    name: 'Trà Shan Tuyết Hoàng Gia #001',
    code: 'TST-HG-001',
    qrCode: 'https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=TST-HG-001',
    age: 1500,
    variety: 'Shan Tuyết Cổ Thụ',
    expectedYield: '15kg trà khô/năm',
    baseRentPrice: 2500000,
    image: 'https://i.pinimg.com/1200x/19/6c/12/196c120c0ebba026466d7ae73da3947a.jpg',
    location: 'Đỉnh Fansipan, Lào Cai',
    rarity: 'Huyền thoại',
    healthScore: 98
  };

  // Service packages
  const packages = [
    {
      id: 'basic',
      name: 'Gói Rừng Xanh',
      price: 2500000,
      originalPrice: 3000000,
      duration: 'tháng',
      popular: false,
      icon: TreePine,
      color: 'from-forest-500 to-forest-600',
      features: [
        'Thuê cây trà cổ thụ độc quyền',
        'Chăm sóc chuyên nghiệp 24/7',
        'Báo cáo tình trạng hàng tuần',
        'Thu hoạch sản phẩm cơ bản',
        'Hỗ trợ kỹ thuật qua điện thoại'
      ],
      benefits: []
    },
    {
      id: 'premium',
      name: 'Gói Núi Thiêng',
      price: 4200000,
      originalPrice: 5000000,
      duration: 'tháng',
      popular: true,
      icon: Mountain,
      color: 'from-mountain-500 to-mountain-600',
      features: [
        'Tất cả quyền lợi gói Rừng Xanh',
        'Voucher homestay 2N1Đ tại vùng núi',
        'Tour tham quan rừng trà miễn phí',
        'Trải nghiệm hái trà thực tế',
        'Ăn uống đặc sản vùng cao',
        'Hướng dẫn viên chuyên nghiệp'
      ],
      benefits: [
        { icon: Home, text: 'Homestay cao cấp view núi' },
        { icon: Camera, text: 'Chụp ảnh chuyên nghiệp' },
        { icon: Gift, text: 'Quà tặng đặc sản địa phương' }
      ]
    },
    {
      id: 'vip',
      name: 'Gói Hoàng Gia',
      price: 7500000,
      originalPrice: 9000000,
      duration: 'tháng',
      popular: false,
      icon: Crown,
      color: 'from-yellow-500 to-orange-500',
      features: [
        'Tất cả quyền lợi gói Núi Thiêng',
        'Treo bảng tên riêng trên cây',
        'Workshop trà đạo với chuyên gia',
        'Giấy chứng nhận sở hữu đặc biệt',
        'Video thu hoạch cá nhân hóa',
        'Khóa học online trọn đời',
        'Ưu tiên hỗ trợ VIP 24/7'
      ],
      benefits: [
        { icon: Award, text: 'Chứng nhận sở hữu có tem chống giả' },
        { icon: GraduationCap, text: 'Khóa học trà đạo chuyên sâu' },
        { icon: Video, text: 'Video thu hoạch 4K chất lượng cao' },
        { icon: Users, text: 'Tư vấn 1-1 với chuyên gia trà' },
        { icon: Coffee, text: 'Bộ ấm chén trà cao cấp tặng kèm' }
      ]
    }
  ];

  // Delivery options
  const deliveryOptions = [
    {
      id: 'self-harvest',
      name: 'Tự thu hoạch',
      description: 'Bạn đến tận nơi để thu hoạch và trải nghiệm',
      icon: TreePine,
      price: 0,
      features: ['Trải nghiệm thực tế', 'Hướng dẫn chuyên nghiệp', 'Chụp ảnh kỷ niệm']
    },
    {
      id: 'home-delivery',
      name: 'Giao tận nơi',
      description: 'Chúng tôi thu hoạch và giao sản phẩm đến tay bạn',
      icon: Truck,
      price: 200000,
      features: ['Đóng gói cao cấp', 'Bảo quản chất lượng', 'Giao trong 24h']
    },
    {
      id: 'video-harvest',
      name: 'Video + Ship',
      description: 'Quay video thu hoạch và gửi sản phẩm',
      icon: Video,
      price: 350000,
      features: ['Video 4K chất lượng cao', 'Bình luận cá nhân hóa', 'Lưu trữ trọn đời']
    }
  ];

  // Payment methods
  const paymentMethods = [
    { id: 'bank-transfer', name: 'Chuyển khoản ngân hàng', icon: CreditCard },
    { id: 'e-wallet', name: 'Ví điện tử (Momo, ZaloPay)', icon: Phone },
    { id: 'cod', name: 'Thanh toán khi nhận hàng', icon: Package }
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
    }).format(price);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({
        ...formData,
        idDocument: e.target.files[0]
      });
    }
  };

  const calculateTotal = () => {
    const selectedPkg = packages.find(pkg => pkg.id === selectedPackage);
    const selectedDel = deliveryOptions.find(del => del.id === selectedDelivery);
    
    const packagePrice = selectedPkg ? selectedPkg.price : 0;
    const deliveryPrice = selectedDel ? selectedDel.price : 0;
    
    return packagePrice + deliveryPrice;
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsLoading(false);
    setShowSuccess(true);
    
    // Auto redirect after 3 seconds
    setTimeout(() => {
      navigate('/my-trees');
    }, 3000);
  };

  const canProceed = () => {
    return selectedPackage && 
           selectedDelivery && 
           selectedPayment && 
           formData.fullName && 
           formData.phone && 
           formData.email && 
           formData.address && 
           agreeToTerms;
  };

  // Success modal
  if (showSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-forest-50 via-vintage-50 to-forest-100 flex items-center justify-center p-4">
        <div className="max-w-md w-full">
          <Card variant="forest" className="p-8 text-center animate-fade-up">
            <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
              <CheckCircle className="h-10 w-10 text-white" />
            </div>
            
            <h2 className="font-elegant font-bold text-2xl text-forest-900 mb-4">
              Đặt thuê thành công!
            </h2>
            
            <p className="text-forest-700 mb-6 font-nature">
              Cảm ơn bạn đã tin tưởng SEEME. Mã đơn hàng của bạn là:
            </p>
            
            <div className="bg-forest-100 p-4 rounded-xl mb-6">
              <div className="font-bold text-2xl text-forest-900 mb-2">#TST-2025-001</div>
              <div className="text-sm text-forest-600">Chúng tôi sẽ liên hệ trong 24h</div>
            </div>
            
            <div className="flex justify-center space-x-4">
              <div className="w-16 h-16 bg-white p-2 rounded-lg border border-forest-200">
                <img src={tree.qrCode} alt="QR Code" className="w-full h-full" />
              </div>
            </div>
            
            <div className="mt-6 text-sm text-forest-600">
              Đang chuyển hướng đến trang quản lý...
            </div>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-vintage-50 via-forest-50 to-vintage-100 pt-20">
      {/* Animated background effects */}
      <div className="fixed inset-0 forest-texture opacity-20 pointer-events-none animate-pulse" />
      <div className="absolute top-20 left-10 text-6xl opacity-10 animate-sway">🌲</div>
      <div className="absolute bottom-20 right-10 text-5xl opacity-15 animate-float">🍃</div>
      <div className="absolute top-1/2 left-1/4 text-4xl opacity-10 animate-mist">🏔️</div>

      {/* Back button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button 
          onClick={() => navigate(-1)}
          className="inline-flex items-center space-x-2 text-forest-600 hover:text-forest-700 transition-colors duration-300 group"
        >
          <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform duration-300" />
          <span className="font-nature font-medium">Quay lại</span>
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-3 px-6 py-3 bg-forest-100/80 backdrop-blur-sm rounded-full mb-6 border border-forest-200/50 animate-fade-up">
            <Sparkles className="h-5 w-5 text-forest-600 animate-pulse" />
            <span className="text-forest-700 text-sm font-nature font-medium">Đặt thuê cây trà cổ thụ</span>
            <Crown className="h-4 w-4 text-forest-500 animate-float" />
          </div>
          
          <h1 className="font-elegant font-bold text-forest-900 mb-4 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <span className="block text-4xl lg:text-6xl">Thuê Cây Trà</span>
            <span className="block text-3xl lg:text-5xl text-forest-700 mt-2">Huyền Thoại</span>
          </h1>
          
          <p className="text-xl text-forest-700 max-w-3xl mx-auto font-nature animate-fade-up" style={{ animationDelay: '0.4s' }}>
            Trở thành chủ nhân của một cây trà cổ thụ 1500 năm tuổi với đầy đủ quyền lợi đặc biệt
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="xl:col-span-3 space-y-8">
            {/* 1. Tree Summary Card */}
            <Card variant="forest" className="p-8 animate-slide-in">
              <div className="flex items-center space-x-3 mb-6">
                <TreePine className="h-6 w-6 text-forest-600 animate-branch-sway" />
                <h2 className="font-elegant font-bold text-2xl text-forest-900">Thông tin cây trà</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="relative group">
                  <img
                    src={tree.image}
                    alt={tree.name}
                    className="w-full h-48 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-900/60 to-transparent rounded-2xl" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-lg">
                    <img src={tree.qrCode} alt="QR Code" className="w-8 h-8" />
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="font-bold text-lg">{tree.code}</div>
                  </div>
                </div>
                
                <div className="md:col-span-2 space-y-4">
                  <div>
                    <h3 className="font-elegant font-bold text-xl text-forest-900 mb-2">{tree.name}</h3>
                    <div className="flex items-center space-x-2 text-forest-600">
                      <MapPin className="h-4 w-4" />
                      <span className="font-nature">{tree.location}</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-forest-50 p-4 rounded-xl">
                      <div className="flex items-center space-x-2 mb-2">
                        <Clock className="h-4 w-4 text-forest-600" />
                        <span className="text-sm text-forest-600">Tuổi cây</span>
                      </div>
                      <div className="font-bold text-forest-900">{tree.age} năm</div>
                    </div>
                    
                    <div className="bg-vintage-50 p-4 rounded-xl">
                      <div className="flex items-center space-x-2 mb-2">
                        <Leaf className="h-4 w-4 text-forest-600" />
                        <span className="text-sm text-forest-600">Giống</span>
                      </div>
                      <div className="font-bold text-forest-900">{tree.variety}</div>
                    </div>
                    
                    <div className="bg-forest-50 p-4 rounded-xl">
                      <div className="flex items-center space-x-2 mb-2">
                        <Package className="h-4 w-4 text-forest-600" />
                        <span className="text-sm text-forest-600">Sản lượng</span>
                      </div>
                      <div className="font-bold text-forest-900">{tree.expectedYield}</div>
                    </div>
                    
                    <div className="bg-vintage-50 p-4 rounded-xl">
                      <div className="flex items-center space-x-2 mb-2">
                        <Crown className="h-4 w-4 text-forest-600" />
                        <span className="text-sm text-forest-600">Giá thuê</span>
                      </div>
                      <div className="font-bold text-forest-900">{formatPrice(tree.baseRentPrice)}</div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* 2. Service Packages */}
            <Card variant="forest" className="p-8 animate-slide-in" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center space-x-3 mb-8">
                <Gift className="h-6 w-6 text-forest-600 animate-pulse" />
                <h2 className="font-elegant font-bold text-2xl text-forest-900">Chọn gói dịch vụ</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {packages.map((pkg, index) => (
                  <div
                    key={pkg.id}
                    className={`relative cursor-pointer transition-all duration-500 animate-fade-up ${
                      selectedPackage === pkg.id ? 'scale-105' : 'hover:scale-102'
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                    onClick={() => setSelectedPackage(pkg.id)}
                  >
                    <div className={`relative p-6 rounded-3xl border-2 transition-all duration-300 ${
                      selectedPackage === pkg.id 
                        ? 'border-forest-500 bg-forest-50 shadow-forest' 
                        : 'border-forest-200 bg-white hover:border-forest-300'
                    } ${pkg.popular ? 'ring-4 ring-forest-200' : ''}`}>
                      
                      {pkg.popular && (
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                          <span className="bg-gradient-to-r from-forest-600 to-forest-700 text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg animate-pulse">
                            Phổ biến nhất
                          </span>
                        </div>
                      )}
                      
                      <div className="text-center mb-6">
                        <div className={`w-16 h-16 bg-gradient-to-br ${pkg.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                          <pkg.icon className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="font-elegant font-bold text-xl text-forest-900 mb-2">{pkg.name}</h3>
                        <div className="space-y-1">
                          <div className="text-3xl font-bold text-forest-800">
                            {formatPrice(pkg.price)}
                            <span className="text-base font-normal text-forest-600">/{pkg.duration}</span>
                          </div>
                          <div className="text-sm text-forest-500 line-through">
                            {formatPrice(pkg.originalPrice)}
                          </div>
                        </div>
                      </div>
                      
                      <ul className="space-y-3 mb-6">
                        {pkg.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start text-forest-700">
                            <Check className="h-4 w-4 text-forest-500 mr-3 flex-shrink-0 mt-0.5" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      {selectedPackage === pkg.id && (
                        <div className="absolute inset-0 bg-gradient-to-r from-forest-500/10 to-forest-600/10 rounded-3xl pointer-events-none animate-pulse" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* 3. Benefits Display */}
            {selectedPackage && (
              <Card variant="vintage" className="p-8 animate-fade-up">
                <div className="flex items-center space-x-3 mb-6">
                  <Star className="h-6 w-6 text-vintage-600 animate-spin" style={{ animationDuration: '3s' }} />
                  <h2 className="font-elegant font-bold text-2xl text-vintage-900">Quyền lợi đặc biệt</h2>
                </div>
                
                {(() => {
                  const selectedPkg = packages.find(pkg => pkg.id === selectedPackage);
                  if (!selectedPkg?.benefits.length) return null;
                  
                  return (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {selectedPkg.benefits.map((benefit, index) => (
                        <div 
                          key={index}
                          className="flex items-center space-x-3 p-4 bg-vintage-100/50 rounded-xl animate-slide-in"
                          style={{ animationDelay: `${index * 0.1}s` }}
                        >
                          <benefit.icon className="h-6 w-6 text-vintage-600" />
                          <span className="font-nature text-vintage-800">{benefit.text}</span>
                        </div>
                      ))}
                    </div>
                  );
                })()}
              </Card>
            )}

            {/* 4. Customer Information */}
            <Card variant="forest" className="p-8 animate-slide-in" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center space-x-3 mb-8">
                <User className="h-6 w-6 text-forest-600" />
                <h2 className="font-elegant font-bold text-2xl text-forest-900">Thông tin khách hàng</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-forest-700 mb-2">
                    Họ và tên *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white border border-forest-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-forest-500 transition-all duration-300"
                    placeholder="Nhập họ và tên"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-forest-700 mb-2">
                    Số điện thoại *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white border border-forest-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-forest-500 transition-all duration-300"
                    placeholder="Nhập số điện thoại"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-forest-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white border border-forest-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-forest-500 transition-all duration-300"
                    placeholder="Nhập email"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-forest-700 mb-2">
                    Giấy tờ tùy thân
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      onChange={handleFileUpload}
                      className="hidden"
                      id="id-upload"
                      accept="image/*,.pdf"
                    />
                    <label
                      htmlFor="id-upload"
                      className="w-full px-4 py-3 bg-white border border-forest-200 rounded-xl cursor-pointer hover:bg-forest-50 transition-all duration-300 flex items-center space-x-2"
                    >
                      <Upload className="h-4 w-4 text-forest-600" />
                      <span className="text-forest-700">
                        {formData.idDocument ? formData.idDocument.name : 'Chọn file'}
                      </span>
                    </label>
                  </div>
                </div>
                
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-forest-700 mb-2">
                    Địa chỉ *
                  </label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-3 bg-white border border-forest-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-forest-500 transition-all duration-300"
                    placeholder="Nhập địa chỉ chi tiết"
                  />
                </div>
              </div>
            </Card>

            {/* 5. Delivery & Payment */}
            <Card variant="forest" className="p-8 animate-slide-in" style={{ animationDelay: '0.6s' }}>
              <div className="flex items-center space-x-3 mb-8">
                <Truck className="h-6 w-6 text-forest-600" />
                <h2 className="font-elegant font-bold text-2xl text-forest-900">Hình thức nhận & thanh toán</h2>
              </div>
              
              {/* Delivery Options */}
              <div className="mb-8">
                <h3 className="font-nature font-semibold text-lg text-forest-900 mb-4">Cách thức nhận sản phẩm</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {deliveryOptions.map((option, index) => (
                    <div
                      key={option.id}
                      className={`cursor-pointer p-6 rounded-2xl border-2 transition-all duration-300 animate-fade-up ${
                        selectedDelivery === option.id
                          ? 'border-forest-500 bg-forest-50 shadow-forest'
                          : 'border-forest-200 bg-white hover:border-forest-300'
                      }`}
                      style={{ animationDelay: `${index * 0.1}s` }}
                      onClick={() => setSelectedDelivery(option.id)}
                    >
                      <div className="text-center mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-forest-500 to-forest-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                          <option.icon className="h-6 w-6 text-white" />
                        </div>
                        <h4 className="font-nature font-semibold text-forest-900">{option.name}</h4>
                        <p className="text-sm text-forest-600 mt-1">{option.description}</p>
                        <div className="font-bold text-forest-800 mt-2">
                          {option.price > 0 ? `+${formatPrice(option.price)}` : 'Miễn phí'}
                        </div>
                      </div>
                      
                      <ul className="space-y-1">
                        {option.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-xs text-forest-700">
                            <Check className="h-3 w-3 text-forest-500 mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Payment Methods */}
              <div>
                <h3 className="font-nature font-semibold text-lg text-forest-900 mb-4">Phương thức thanh toán</h3>
                <div className="space-y-3">
                  {paymentMethods.map((method, index) => (
                    <div
                      key={method.id}
                      className={`cursor-pointer p-4 rounded-xl border-2 transition-all duration-300 animate-slide-in ${
                        selectedPayment === method.id
                          ? 'border-forest-500 bg-forest-50'
                          : 'border-forest-200 bg-white hover:border-forest-300'
                      }`}
                      style={{ animationDelay: `${index * 0.1}s` }}
                      onClick={() => setSelectedPayment(method.id)}
                    >
                      <div className="flex items-center space-x-3">
                        <method.icon className="h-5 w-5 text-forest-600" />
                        <span className="font-nature text-forest-900">{method.name}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            {/* 6. Contract & Terms */}
            <Card variant="forest" className="p-8 animate-slide-in" style={{ animationDelay: '0.8s' }}>
              <div className="flex items-center space-x-3 mb-6">
                <FileText className="h-6 w-6 text-forest-600" />
                <h2 className="font-elegant font-bold text-2xl text-forest-900">Hợp đồng & cam kết</h2>
              </div>
              
              <div className="space-y-4">
                <button
                  onClick={() => setShowContract(!showContract)}
                  className="w-full p-4 bg-forest-100 hover:bg-forest-200 rounded-xl transition-all duration-300 text-left"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-nature font-semibold text-forest-900">Xem hợp đồng mẫu</span>
                    <Eye className="h-5 w-5 text-forest-600" />
                  </div>
                </button>
                
                {showContract && (
                  <div className="p-6 bg-vintage-50 rounded-xl border border-vintage-200 animate-fade-up">
                    <h4 className="font-bold text-forest-900 mb-4">HỢP ĐỒNG THUÊ CÂY TRÀ CỔ THỤ</h4>
                    <div className="space-y-3 text-sm text-forest-700 max-h-64 overflow-y-auto">
                      <p><strong>Điều 1:</strong> Bên A (SEEME) cam kết cung cấp cây trà cổ thụ chất lượng cao với đầy đủ giấy tờ pháp lý.</p>
                      <p><strong>Điều 2:</strong> Bên B (Khách hàng) có quyền theo dõi, giám sát tình trạng cây 24/7 qua hệ thống online.</p>
                      <p><strong>Điều 3:</strong> Sản lượng cam kết tối thiểu 80% so với dự kiến, nếu không đạt sẽ được bồi thường.</p>
                      <p><strong>Điều 4:</strong> Thời hạn hợp đồng tối thiểu 6 tháng, có thể gia hạn theo thỏa thuận.</p>
                      <p><strong>Điều 5:</strong> Mọi tranh chấp sẽ được giải quyết thông qua hòa giải hoặc tòa án có thẩm quyền.</p>
                    </div>
                  </div>
                )}
                
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="agree-terms"
                    checked={agreeToTerms}
                    onChange={(e) => setAgreeToTerms(e.target.checked)}
                    className="mt-1 w-4 h-4 text-forest-600 border-forest-300 rounded focus:ring-forest-500"
                  />
                  <label htmlFor="agree-terms" className="text-sm text-forest-700 font-nature">
                    Tôi đồng ý với các điều khoản và cam kết sản lượng trong hợp đồng thuê cây trà cổ thụ
                  </label>
                </div>
              </div>
            </Card>
          </div>

          {/* Sidebar - Order Summary */}
          <div className="xl:col-span-1">
            <div className="sticky top-24 space-y-6">
              <Card variant="vintage" className="p-6 animate-slide-in" style={{ animationDelay: '1s' }}>
                <h3 className="font-elegant font-bold text-xl text-vintage-900 mb-6 flex items-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  Tóm tắt đơn hàng
                </h3>
                
                <div className="space-y-4">
                  {selectedPackage && (
                    <div className="flex justify-between items-center p-3 bg-vintage-100/50 rounded-lg">
                      <span className="font-nature text-vintage-800">
                        {packages.find(pkg => pkg.id === selectedPackage)?.name}
                      </span>
                      <span className="font-bold text-vintage-900">
                        {formatPrice(packages.find(pkg => pkg.id === selectedPackage)?.price || 0)}
                      </span>
                    </div>
                  )}
                  
                  {selectedDelivery && (
                    <div className="flex justify-between items-center p-3 bg-vintage-100/50 rounded-lg">
                      <span className="font-nature text-vintage-800">
                        {deliveryOptions.find(del => del.id === selectedDelivery)?.name}
                      </span>
                      <span className="font-bold text-vintage-900">
                        {deliveryOptions.find(del => del.id === selectedDelivery)?.price === 0 
                          ? 'Miễn phí' 
                          : formatPrice(deliveryOptions.find(del => del.id === selectedDelivery)?.price || 0)}
                      </span>
                    </div>
                  )}
                  
                  <div className="border-t border-vintage-300 pt-4">
                    <div className="flex justify-between items-center">
                      <span className="font-nature font-bold text-lg text-vintage-900">Tổng cộng:</span>
                      <span className="font-bold text-2xl text-vintage-900">
                        {formatPrice(calculateTotal())}
                      </span>
                    </div>
                  </div>
                </div>
                
                <Button
                  onClick={handleSubmit}
                  disabled={!canProceed() || isLoading}
                  className={`w-full mt-6 ${isLoading ? 'animate-pulse' : 'animate-bounce'}`}
                  size="lg"
                  variant="forest"
                >
                  {isLoading ? (
                    <div className="flex items-center space-x-2">
                      <Zap className="h-5 w-5 animate-spin" />
                      <span>Đang xử lý...</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <Crown className="h-5 w-5" />
                      <span>Đặt thuê ngay</span>
                    </div>
                  )}
                </Button>
                
                <div className="mt-4 text-center">
                  <div className="flex items-center justify-center space-x-2 text-sm text-vintage-600">
                    <Shield className="h-4 w-4" />
                    <span>Bảo mật thanh toán 100%</span>
                  </div>
                </div>
              </Card>
              
              {/* Trust Badges */}
              <Card variant="forest" className="p-6 animate-fade-up" style={{ animationDelay: '1.2s' }}>
                <h4 className="font-nature font-semibold text-forest-900 mb-4">Cam kết của SEEME</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Shield className="h-4 w-4 text-forest-600" />
                    <span className="text-sm text-forest-700">Bảo hiểm 100% giá trị</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Eye className="h-4 w-4 text-forest-600" />
                    <span className="text-sm text-forest-700">Theo dõi 24/7</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award className="h-4 w-4 text-forest-600" />
                    <span className="text-sm text-forest-700">Chứng nhận chất lượng</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Heart className="h-4 w-4 text-forest-600" />
                    <span className="text-sm text-forest-700">Chăm sóc tận tâm</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TreeRental;