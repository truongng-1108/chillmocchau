import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, TreePine, Mountain, Leaf, Eye, Camera, BarChart3, Calendar, Crown, MapPin, Clock, Thermometer, Droplets, Wind, Sun, Activity, Zap, Award, Users, Heart } from 'lucide-react';

const TreeDetail = () => {
  const [activeView, setActiveView] = useState('3d');
  const [rotationY, setRotationY] = useState(0);
  const [rotationX, setRotationX] = useState(0);
  const [selectedSensor, setSelectedSensor] = useState('overview');

  // Enhanced tree data with more detailed information
  const tree = {
    id: 1,
    name: 'Trà Shan Tuyết Hoàng Gia #001',
    scientificName: 'Camellia sinensis var. assamica',
    type: 'rent',
    startDate: '2024-12-01',
    status: 'excellent',
    location: 'Vườn A - Khu vực Đỉnh Cao',
    coordinates: '22.3364° N, 103.7734° E',
    altitude: '2,800m',
    image: 'https://i.pinimg.com/1200x/19/6c/12/196c120c0ebba026466d7ae73da3947a.jpg',
    images: [
      'https://i.pinimg.com/1200x/19/6c/12/196c120c0ebba026466d7ae73da3947a.jpg',
      'https://i.pinimg.com/1200x/98/85/f3/9885f38dc02d4aad94ffe92bfc728894.jpg',
      'https://images.pexels.com/photos/4753879/pexels-photo-4753879.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://i.pinimg.com/1200x/19/6c/12/196c120c0ebba026466d7ae73da3947a.jpg'
    ],
    lastCare: '2025-01-15',
    nextCare: '2025-01-20',
    healthScore: 98,
    notes: 'Cây phát triển xuất sắc, lá xanh mướt như ngọc bích',
    age: 1200,
    height: '8.5m',
    diameter: '85cm',
    trunkCircumference: '2.67m',
    canopySpread: '12m',
    rootDepth: '4.2m',
    leafCount: '~50,000',
    branchCount: 47,
    rarity: 'Huyền thoại',
    discoveryYear: 1823,
    culturalSignificance: 'Được coi là cây thiêng của bản địa',
    teaQuality: 'Đặc cấp AAA+',
    annualYield: '15kg trà khô',
    marketValue: '85,000,000 VNĐ',
    environment: {
      temperature: '18°C',
      humidity: '85%',
      windSpeed: '12 km/h',
      sunlight: '6h/ngày',
      soilPh: '6.2',
      rainfall: '2,400mm/năm',
      airQuality: 'Xuất sắc (AQI: 15)',
      uvIndex: 'Trung bình (4/10)'
    },
    sensors: {
      soilMoisture: { value: 72, unit: '%', status: 'optimal', lastUpdate: '5 phút trước' },
      nutrients: { value: 94, unit: '%', status: 'excellent', lastUpdate: '1 giờ trước' },
      growth: { value: 0.3, unit: 'mm/ngày', status: 'healthy', lastUpdate: '12 giờ trước' },
      stress: { value: 8, unit: '%', status: 'low', lastUpdate: '30 phút trước' }
    },
    careHistory: [
      { 
        date: '2025-01-15', 
        action: 'Kiểm tra sức khỏe tổng quát', 
        status: 'Hoàn thành', 
        note: 'Cây phát triển tốt, lá xanh mướt, không có dấu hiệu bệnh tật. Phát hiện 3 chồi non mới.',
        technician: 'Thầy Minh - Chuyên gia cây trà',
        duration: '45 phút',
        tools: ['Kính lúp chuyên dụng', 'Máy đo pH', 'Cảm biến độ ẩm']
      },
      { 
        date: '2025-01-10', 
        action: 'Bón phân hữu cơ cao cấp', 
        status: 'Hoàn thành', 
        note: 'Sử dụng phân compost từ lá rừng tự nhiên kết hợp với phân cá và tro trấu',
        technician: 'Anh Dũng - Kỹ thuật viên',
        duration: '30 phút',
        tools: ['Phân hữu cơ đặc chế', 'Dụng cụ bón phân']
      },
      { 
        date: '2025-01-05', 
        action: 'Tưới nước và kiểm tra hệ thống', 
        status: 'Hoàn thành', 
        note: 'Sử dụng nước suối núi trong, độ ẩm đất đạt 70%. Hệ thống tưới nhỏ giọt hoạt động tốt.',
        technician: 'Chị Lan - Chuyên viên chăm sóc',
        duration: '20 phút',
        tools: ['Hệ thống tưới tự động', 'Máy đo độ ẩm đất']
      },
      { 
        date: '2025-01-01', 
        action: 'Cắt tỉa và tạo hình', 
        status: 'Hoàn thành', 
        note: 'Loại bỏ 5 cành khô, tỉa 12 cành phụ, tạo hình cây đẹp tự nhiên theo phong thủy',
        technician: 'Thầy Hùng - Nghệ nhân tạo hình',
        duration: '90 phút',
        tools: ['Kéo cắt chuyên dụng', 'Dao tỉa', 'Thuốc bảo vệ vết cắt']
      }
    ],
    achievements: [
      { title: 'Cây Trà Xuất Sắc 2024', organization: 'Hiệp hội Trà Việt Nam', date: '2024-12-01' },
      { title: 'Di sản Thiên nhiên Quý hiếm', organization: 'Bộ Tài nguyên & Môi trường', date: '2024-10-15' },
      { title: 'Chứng nhận Organic Premium', organization: 'Tổ chức Chứng nhận Quốc tế', date: '2024-08-20' }
    ],
    folklore: {
      legend: 'Truyền thuyết kể rằng cây trà này được trồng bởi một vị tiên nữ để bảo vệ bản làng khỏi bệnh tật.',
      culturalValue: 'Người dân địa phương tin rằng uống trà từ cây này sẽ mang lại sức khỏe và trường thọ.',
      rituals: 'Mỗi năm vào ngày rằm tháng 3, bản làng tổ chức lễ cúng tạ ơn cây trà.'
    }
  };

  // Mouse move handler for 3D effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (activeView !== '3d') return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const rotateX = (e.clientY - centerY) / 10;
    const rotateY = (e.clientX - centerX) / 10;
    
    setRotationX(-rotateX);
    setRotationY(rotateY);
  };

  const handleMouseLeave = () => {
    setRotationX(0);
    setRotationY(0);
  };

  const getStatusColor = (status: string) => {
    const colors = {
      excellent: 'from-green-500 to-emerald-500',
      healthy: 'from-blue-500 to-cyan-500',
      good: 'from-yellow-500 to-orange-500',
      warning: 'from-orange-500 to-red-500',
      optimal: 'from-green-500 to-emerald-500',
      low: 'from-blue-500 to-cyan-500'
    };
    return colors[status as keyof typeof colors] || 'from-gray-500 to-gray-600';
  };

  const getStatusText = (status: string) => {
    const texts = {
      excellent: 'Xuất sắc',
      healthy: 'Khỏe mạnh',
      good: 'Tốt',
      warning: 'Cần chú ý',
      optimal: 'Tối ưu',
      low: 'Thấp'
    };
    return texts[status as keyof typeof texts] || 'Không xác định';
  };

  const getSensorIcon = (sensor: string) => {
    const icons = {
      soilMoisture: Droplets,
      nutrients: Leaf,
      growth: Activity,
      stress: Zap
    };
    return icons[sensor as keyof typeof icons] || Activity;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-vintage-50 via-forest-50 to-vintage-100 pt-20">
      {/* Background effects */}
      <div className="fixed inset-0 forest-texture opacity-20 pointer-events-none" />
      <div className="absolute top-20 left-10 text-6xl opacity-10 animate-sway">🌲</div>
      <div className="absolute bottom-20 right-10 text-5xl opacity-15 animate-float">🍃</div>

      {/* Back button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link 
          to="/my-trees" 
          className="inline-flex items-center space-x-2 text-forest-600 hover:text-forest-700 transition-colors duration-300 group"
        >
          <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform duration-300" />
          <span className="font-nature font-medium">Quay lại rừng của tôi</span>
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {/* Enhanced Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-3 px-6 py-3 bg-forest-100/80 backdrop-blur-sm rounded-full mb-6 border border-forest-200/50">
            <TreePine className="h-5 w-5 text-forest-600 animate-branch-sway" />
            <span className="text-forest-700 text-sm font-nature font-medium">Chi tiết cây trà của bạn</span>
            <Crown className="h-4 w-4 text-forest-500 animate-float" />
          </div>
          
          <h1 className="font-elegant font-bold text-forest-900 mb-4">
            <span className="block text-4xl lg:text-6xl">{tree.name}</span>
            <span className="block text-lg lg:text-xl text-forest-600 font-nature italic mt-2">{tree.scientificName}</span>
          </h1>
          
          <div className="flex flex-wrap items-center justify-center gap-6 text-forest-700">
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5" />
              <span className="font-nature">Tuổi: {tree.age} năm</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-5 w-5" />
              <span className="font-nature">{tree.location}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mountain className="h-5 w-5" />
              <span className="font-nature">{tree.altitude}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="h-5 w-5" />
              <span className="font-nature">Phát hiện: {tree.discoveryYear}</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
          {/* Enhanced 3D Tree Viewer */}
          <div className="xl:col-span-3 space-y-8">
            {/* View Controls */}
            <div className="flex items-center justify-center space-x-4">
              <button
                onClick={() => setActiveView('3d')}
                className={`px-6 py-3 rounded-full font-nature font-medium transition-all duration-300 ${
                  activeView === '3d'
                    ? 'bg-gradient-to-r from-forest-600 to-forest-700 text-white shadow-forest'
                    : 'bg-vintage-100 text-forest-600 hover:bg-forest-100'
                }`}
              >
                <span className="flex items-center space-x-2">
                  <Eye className="h-4 w-4" />
                  <span>Xem 3D</span>
                </span>
              </button>
              <button
                onClick={() => setActiveView('gallery')}
                className={`px-6 py-3 rounded-full font-nature font-medium transition-all duration-300 ${
                  activeView === 'gallery'
                    ? 'bg-gradient-to-r from-forest-600 to-forest-700 text-white shadow-forest'
                    : 'bg-vintage-100 text-forest-600 hover:bg-forest-100'
                }`}
              >
                <span className="flex items-center space-x-2">
                  <Camera className="h-4 w-4" />
                  <span>Thư viện ảnh</span>
                </span>
              </button>
              <button
                onClick={() => setActiveView('sensors')}
                className={`px-6 py-3 rounded-full font-nature font-medium transition-all duration-300 ${
                  activeView === 'sensors'
                    ? 'bg-gradient-to-r from-forest-600 to-forest-700 text-white shadow-forest'
                    : 'bg-vintage-100 text-forest-600 hover:bg-forest-100'
                }`}
              >
                <span className="flex items-center space-x-2">
                  <Activity className="h-4 w-4" />
                  <span>Cảm biến IoT</span>
                </span>
              </button>
            </div>

            {/* Enhanced 3D Viewer */}
            {activeView === '3d' && (
              <div 
                className="relative bg-gradient-to-br from-vintage-50 to-forest-50 rounded-3xl overflow-hidden shadow-2xl border border-forest-200/30 wood-grain"
                style={{ perspective: '1200px' }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                <div className="aspect-video relative">
                  <div
                    className="absolute inset-0 transition-transform duration-300 ease-out"
                    style={{
                      transform: `rotateX(${rotationX}deg) rotateY(${rotationY}deg) translateZ(60px)`,
                      transformStyle: 'preserve-3d'
                    }}
                  >
                    {/* Enhanced main tree image with multiple 3D layers */}
                    <div className="relative w-full h-full">
                      <img
                        src={tree.image}
                        alt={tree.name}
                        className="w-full h-full object-cover rounded-3xl"
                      />
                      
                      {/* Multiple 3D depth layers */}
                      <div 
                        className="absolute inset-0 bg-gradient-to-t from-forest-900/40 to-transparent rounded-3xl"
                        style={{ transform: 'translateZ(15px)' }}
                      />
                      
                      <div 
                        className="absolute inset-0 bg-gradient-to-br from-forest-500/10 to-vintage-500/10 rounded-3xl"
                        style={{ transform: 'translateZ(25px)' }}
                      />
                      
                      {/* Enhanced floating info cards with better 3D positioning */}
                      <div 
                        className="absolute top-6 left-6 bg-vintage-50/95 backdrop-blur-md p-6 rounded-2xl shadow-wood border border-forest-200/30"
                        style={{ transform: 'translateZ(40px)' }}
                      >
                        <div className="flex items-center space-x-4">
                          <div className={`w-14 h-14 bg-gradient-to-br ${getStatusColor(tree.status)} rounded-xl flex items-center justify-center`}>
                            <TreePine className="h-7 w-7 text-white" />
                          </div>
                          <div>
                            <div className="font-nature font-bold text-forest-900 text-lg">{getStatusText(tree.status)}</div>
                            <div className="text-sm text-forest-600">Tình trạng cây</div>
                            <div className="text-xs text-forest-500">Cập nhật: 5 phút trước</div>
                          </div>
                        </div>
                      </div>

                      <div 
                        className="absolute top-6 right-6 bg-vintage-50/95 backdrop-blur-md p-6 rounded-2xl shadow-wood border border-forest-200/30"
                        style={{ transform: 'translateZ(35px)' }}
                      >
                        <div className="flex items-center space-x-4">
                          <div className="w-14 h-14 bg-gradient-to-br from-forest-500 to-forest-600 rounded-xl flex items-center justify-center">
                            <BarChart3 className="h-7 w-7 text-white" />
                          </div>
                          <div>
                            <div className="font-nature font-bold text-forest-900 text-lg">{tree.healthScore}%</div>
                            <div className="text-sm text-forest-600">Chỉ số sức khỏe</div>
                            <div className="text-xs text-forest-500">Đánh giá: Xuất sắc</div>
                          </div>
                        </div>
                      </div>

                      <div 
                        className="absolute bottom-6 left-6 bg-vintage-50/95 backdrop-blur-md p-6 rounded-2xl shadow-wood border border-forest-200/30"
                        style={{ transform: 'translateZ(30px)' }}
                      >
                        <div className="flex items-center space-x-4">
                          <div className="w-14 h-14 bg-gradient-to-br from-vintage-500 to-vintage-600 rounded-xl flex items-center justify-center">
                            <Crown className="h-7 w-7 text-white" />
                          </div>
                          <div>
                            <div className="font-nature font-bold text-vintage-900 text-lg">{tree.rarity}</div>
                            <div className="text-sm text-vintage-600">Độ hiếm</div>
                            <div className="text-xs text-vintage-500">Giá trị: {tree.marketValue}</div>
                          </div>
                        </div>
                      </div>

                      <div 
                        className="absolute bottom-6 right-6 bg-vintage-50/95 backdrop-blur-md p-6 rounded-2xl shadow-wood border border-forest-200/30"
                        style={{ transform: 'translateZ(25px)' }}
                      >
                        <div className="flex items-center space-x-4">
                          <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                            <Leaf className="h-7 w-7 text-white" />
                          </div>
                          <div>
                            <div className="font-nature font-bold text-green-900 text-lg">{tree.teaQuality}</div>
                            <div className="text-sm text-green-600">Chất lượng trà</div>
                            <div className="text-xs text-green-500">Năng suất: {tree.annualYield}</div>
                          </div>
                        </div>
                      </div>

                      {/* Enhanced 3D depth indicators with more variety */}
                      <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-forest-400/60 rounded-full animate-float" style={{ transform: 'translateZ(50px)' }} />
                        <div className="absolute top-3/4 right-1/4 w-4 h-4 bg-vintage-400/50 rounded-full animate-float" style={{ transform: 'translateZ(45px)', animationDelay: '1s' }} />
                        <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-forest-300/70 rounded-full animate-float" style={{ transform: 'translateZ(55px)', animationDelay: '2s' }} />
                        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-green-400/80 rounded-full animate-float" style={{ transform: 'translateZ(60px)', animationDelay: '0.5s' }} />
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Enhanced 3D Instructions */}
                <div className="absolute bottom-4 right-4 bg-forest-900/90 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-nature flex items-center space-x-2">
                  <Eye className="h-4 w-4" />
                  <span>Di chuyển chuột để xoay 3D</span>
                </div>
              </div>
            )}

            {/* Enhanced Gallery View */}
            {activeView === 'gallery' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {tree.images.map((image, index) => (
                  <div key={index} className="relative group">
                    <div className="aspect-video overflow-hidden rounded-2xl shadow-wood border border-forest-200/30">
                      <img
                        src={image}
                        alt={`${tree.name} - Ảnh ${index + 1}`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-forest-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="absolute bottom-4 left-4 bg-vintage-50/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-nature text-forest-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Ảnh {index + 1} - {index === 0 ? 'Toàn cảnh' : index === 1 ? 'Thân cây' : index === 2 ? 'Lá non' : 'Chi tiết'}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* New IoT Sensors View */}
            {activeView === 'sensors' && (
              <div className="space-y-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {Object.entries(tree.sensors).map(([key, sensor]) => {
                    const IconComponent = getSensorIcon(key);
                    return (
                      <button
                        key={key}
                        onClick={() => setSelectedSensor(key)}
                        className={`p-4 rounded-2xl transition-all duration-300 ${
                          selectedSensor === key
                            ? 'bg-gradient-to-br from-forest-500 to-forest-600 text-white shadow-forest'
                            : 'bg-vintage-50/90 text-forest-700 hover:bg-forest-100'
                        }`}
                      >
                        <IconComponent className="h-8 w-8 mx-auto mb-2" />
                        <div className="text-sm font-nature font-medium">
                          {key === 'soilMoisture' ? 'Độ ẩm đất' :
                           key === 'nutrients' ? 'Dinh dưỡng' :
                           key === 'growth' ? 'Tăng trưởng' : 'Stress'}
                        </div>
                        <div className="text-lg font-bold">
                          {sensor.value}{sensor.unit}
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Sensor Detail */}
                {selectedSensor !== 'overview' && (
                  <div className="bg-vintage-50/90 backdrop-blur-sm rounded-3xl p-8 shadow-wood border border-forest-200/30">
                    <div className="flex items-center space-x-4 mb-6">
                      {React.createElement(getSensorIcon(selectedSensor), { className: "h-8 w-8 text-forest-600" })}
                      <h3 className="font-elegant font-bold text-2xl text-forest-900">
                        {selectedSensor === 'soilMoisture' ? 'Độ ẩm đất' :
                         selectedSensor === 'nutrients' ? 'Dinh dưỡng' :
                         selectedSensor === 'growth' ? 'Tăng trưởng' : 'Mức độ stress'}
                      </h3>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="text-center">
                        <div className="text-4xl font-bold text-forest-900 mb-2">
                          {tree.sensors[selectedSensor as keyof typeof tree.sensors].value}
                          {tree.sensors[selectedSensor as keyof typeof tree.sensors].unit}
                        </div>
                        <div className="text-forest-600">Giá trị hiện tại</div>
                      </div>
                      <div className="text-center">
                        <div className={`text-2xl font-bold mb-2 bg-gradient-to-r ${getStatusColor(tree.sensors[selectedSensor as keyof typeof tree.sensors].status)} bg-clip-text text-transparent`}>
                          {getStatusText(tree.sensors[selectedSensor as keyof typeof tree.sensors].status)}
                        </div>
                        <div className="text-forest-600">Trạng thái</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-semibold text-forest-800 mb-2">
                          {tree.sensors[selectedSensor as keyof typeof tree.sensors].lastUpdate}
                        </div>
                        <div className="text-forest-600">Cập nhật cuối</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Enhanced Environment Data */}
            <div className="bg-vintage-50/90 backdrop-blur-sm rounded-3xl p-8 shadow-wood border border-forest-200/30 wood-grain">
              <h3 className="font-elegant font-bold text-2xl text-forest-900 mb-6 flex items-center">
                <Leaf className="h-6 w-6 mr-3 text-forest-600" />
                Môi trường sống chi tiết
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                    <Thermometer className="h-8 w-8 text-white" />
                  </div>
                  <div className="font-nature font-bold text-forest-900">{tree.environment.temperature}</div>
                  <div className="text-sm text-forest-600">Nhiệt độ</div>
                </div>
                
                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                    <Droplets className="h-8 w-8 text-white" />
                  </div>
                  <div className="font-nature font-bold text-forest-900">{tree.environment.humidity}</div>
                  <div className="text-sm text-forest-600">Độ ẩm</div>
                </div>
                
                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                    <Wind className="h-8 w-8 text-white" />
                  </div>
                  <div className="font-nature font-bold text-forest-900">{tree.environment.windSpeed}</div>
                  <div className="text-sm text-forest-600">Tốc độ gió</div>
                </div>
                
                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                    <Sun className="h-8 w-8 text-white" />
                  </div>
                  <div className="font-nature font-bold text-forest-900">{tree.environment.sunlight}</div>
                  <div className="text-sm text-forest-600">Ánh sáng</div>
                </div>
              </div>

              {/* Additional environment data */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6 pt-6 border-t border-forest-200/30">
                <div className="text-center">
                  <div className="font-nature font-bold text-forest-900">pH {tree.environment.soilPh}</div>
                  <div className="text-sm text-forest-600">Độ pH đất</div>
                </div>
                <div className="text-center">
                  <div className="font-nature font-bold text-forest-900">{tree.environment.rainfall}</div>
                  <div className="text-sm text-forest-600">Lượng mưa</div>
                </div>
                <div className="text-center">
                  <div className="font-nature font-bold text-forest-900">{tree.environment.airQuality}</div>
                  <div className="text-sm text-forest-600">Chất lượng không khí</div>
                </div>
                <div className="text-center">
                  <div className="font-nature font-bold text-forest-900">{tree.environment.uvIndex}</div>
                  <div className="text-sm text-forest-600">Chỉ số UV</div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Sidebar Info - Better organized */}
          <div className="xl:col-span-1 space-y-6">
            {/* Enhanced Tree Stats */}
            <div className="bg-vintage-50/90 backdrop-blur-sm rounded-3xl p-6 shadow-wood border border-forest-200/30 wood-grain">
              <h3 className="font-elegant font-bold text-lg text-forest-900 mb-4 flex items-center">
                <TreePine className="h-5 w-5 mr-2" />
                Thông số chi tiết
              </h3>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center p-2 bg-forest-50/50 rounded-lg">
                  <span className="text-forest-600 font-nature text-sm">Chiều cao:</span>
                  <span className="font-bold text-forest-900 text-sm">{tree.height}</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-vintage-100/50 rounded-lg">
                  <span className="text-forest-600 font-nature text-sm">Đường kính:</span>
                  <span className="font-bold text-forest-900 text-sm">{tree.diameter}</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-forest-50/50 rounded-lg">
                  <span className="text-forest-600 font-nature text-sm">Chu vi thân:</span>
                  <span className="font-bold text-forest-900 text-sm">{tree.trunkCircumference}</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-vintage-100/50 rounded-lg">
                  <span className="text-forest-600 font-nature text-sm">Tán lá:</span>
                  <span className="font-bold text-forest-900 text-sm">{tree.canopySpread}</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-forest-50/50 rounded-lg">
                  <span className="text-forest-600 font-nature text-sm">Số lá:</span>
                  <span className="font-bold text-forest-900 text-sm">{tree.leafCount}</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-vintage-100/50 rounded-lg">
                  <span className="text-forest-600 font-nature text-sm">Số cành:</span>
                  <span className="font-bold text-forest-900 text-sm">{tree.branchCount}</span>
                </div>
              </div>
            </div>

            {/* Care Schedule */}
            <div className="bg-vintage-50/90 backdrop-blur-sm rounded-3xl p-6 shadow-wood border border-forest-200/30 wood-grain">
              <h3 className="font-elegant font-bold text-lg text-forest-900 mb-4 flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                Lịch chăm sóc
              </h3>
              
              <div className="space-y-3">
                <div className="p-3 bg-green-50 border border-green-200 rounded-xl">
                  <div className="font-nature font-semibold text-green-800 text-sm">Chăm sóc cuối</div>
                  <div className="text-green-600 text-sm">{tree.lastCare}</div>
                </div>
                <div className="p-3 bg-blue-50 border border-blue-200 rounded-xl">
                  <div className="font-nature font-semibold text-blue-800 text-sm">Chăm sóc tiếp theo</div>
                  <div className="text-blue-600 text-sm">{tree.nextCare}</div>
                </div>
              </div>
            </div>

            {/* Health Score */}
            <div className="bg-vintage-50/90 backdrop-blur-sm rounded-3xl p-6 shadow-wood border border-forest-200/30 wood-grain">
              <h3 className="font-elegant font-bold text-lg text-forest-900 mb-4">Chỉ số sức khỏe</h3>
              
              <div className="text-center mb-4">
                <div className="text-4xl font-bold text-green-600 mb-2">{tree.healthScore}%</div>
                <div className="w-full bg-forest-200 rounded-full h-3 mb-3">
                  <div 
                    className="bg-gradient-to-r from-green-500 to-emerald-500 h-3 rounded-full transition-all duration-1000" 
                    style={{ width: `${tree.healthScore}%` }}
                  ></div>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="text-center">
                    <div className="font-bold text-forest-900">Xuất sắc</div>
                    <div className="text-forest-600">Đánh giá</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-forest-900">A+</div>
                    <div className="text-forest-600">Xếp hạng</div>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <div className="font-nature text-forest-800 italic text-sm leading-relaxed">{tree.notes}</div>
              </div>
            </div>

            {/* Cultural Significance */}
            <div className="bg-vintage-50/90 backdrop-blur-sm rounded-3xl p-6 shadow-wood border border-forest-200/30 wood-grain">
              <h3 className="font-elegant font-bold text-lg text-forest-900 mb-4 flex items-center">
                <Heart className="h-5 w-5 mr-2" />
                Giá trị văn hóa
              </h3>
              
              <div className="space-y-3">
                <div>
                  <h4 className="font-nature font-semibold text-forest-800 mb-1 text-sm">Truyền thuyết:</h4>
                  <p className="text-forest-700 text-xs leading-relaxed">{tree.folklore.legend}</p>
                </div>
                <div>
                  <h4 className="font-nature font-semibold text-forest-800 mb-1 text-sm">Ý nghĩa:</h4>
                  <p className="text-forest-700 text-xs leading-relaxed">{tree.folklore.culturalValue}</p>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-vintage-50/90 backdrop-blur-sm rounded-3xl p-6 shadow-wood border border-forest-200/30 wood-grain">
              <h3 className="font-elegant font-bold text-lg text-forest-900 mb-4 flex items-center">
                <Award className="h-5 w-5 mr-2" />
                Giải thưởng
              </h3>
              
              <div className="space-y-3">
                {tree.achievements.slice(0, 2).map((achievement, index) => (
                  <div key={index} className="p-3 bg-forest-50/50 rounded-xl border border-forest-200/30">
                    <div className="font-nature font-semibold text-forest-900 text-sm mb-1">{achievement.title}</div>
                    <div className="text-xs text-forest-700 mb-1">{achievement.organization}</div>
                    <div className="text-xs text-forest-600">{achievement.date}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Care History - Compact */}
            <div className="bg-vintage-50/90 backdrop-blur-sm rounded-3xl p-6 shadow-wood border border-forest-200/30 wood-grain">
              <h3 className="font-elegant font-bold text-lg text-forest-900 mb-4 flex items-center">
                <Users className="h-5 w-5 mr-2" />
                Lịch sử chăm sóc
              </h3>
              
              <div className="space-y-3 max-h-64 overflow-y-auto">
                {tree.careHistory.slice(0, 3).map((record, index) => (
                  <div key={index} className="p-3 bg-forest-50/50 rounded-xl border border-forest-200/30">
                    <div className="flex justify-between items-start mb-2">
                      <div className="font-nature font-semibold text-forest-900 text-sm">{record.action}</div>
                      <div className="text-xs text-forest-600">{record.date}</div>
                    </div>
                    <div className="text-xs text-forest-700 mb-2 leading-relaxed">{record.note}</div>
                    <div className="flex justify-between items-center text-xs text-forest-600 mb-2">
                      <span>{record.technician}</span>
                      <span>{record.duration}</span>
                    </div>
                    <div>
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                        {record.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TreeDetail;