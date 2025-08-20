/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { TreePine, MapPin, Clock, Crown, X, Search, Filter, Maximize2, Minimize2, Navigation, Compass, Zap, Leaf, Mountain, Eye, Phone, Calendar, Star, Award, Activity, Thermometer, Droplets, Wind, Sun, Menu } from 'lucide-react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-defaulticon-compatibility';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

// Enhanced custom tree marker icon with pulsing animation
const createTreeIcon = (rarity: string, isSelected: boolean = false) => {
  const colors = {
    'Huyền thoại': '#f59e0b',
    'Cực hiếm': '#8b5cf6',
    'Quý hiếm': '#3b82f6',
    'Theo mùa': '#059669',
    'Cực hot': '#f59e0b',
    'Bản địa': '#3b82f6',
  };
  
  const color = colors[rarity as keyof typeof colors] || '#059669';
  const size = isSelected ? 48 : 32;
  const pulseSize = isSelected ? 60 : 40;
  
  return L.divIcon({
    html: `
      <div class="relative animate-bounce" style="animation-duration: 2s;">
        <div class="absolute inset-0 rounded-full animate-ping" style="width: ${pulseSize}px; height: ${pulseSize}px; background: ${color}; opacity: 0.3; animation-duration: 2s;"></div>
        <div class="relative z-10 rounded-full border-4 border-white shadow-2xl flex items-center justify-center transition-all duration-500 hover:scale-125" style="width: ${size}px; height: ${size}px; background: linear-gradient(135deg, ${color}, ${color}dd);">
          <svg class="text-white animate-pulse" style="width: ${size * 0.5}px; height: ${size * 0.5}px;" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 2L3 7v11h4v-6h6v6h4V7l-7-5z"/>
          </svg>
        </div>
        <div class="absolute -top-2 -right-2 rounded-full border-2 border-white shadow-lg animate-spin" style="width: ${size * 0.3}px; height: ${size * 0.3}px; background: ${color}; animation-duration: 3s;"></div>
      </div>
    `,
    className: 'custom-tree-marker',
    iconSize: [size + 16, size + 16],
    iconAnchor: [(size + 16) / 2, size + 16],
    popupAnchor: [0, -(size + 16)],
  });
};

// Map controller component with smooth animations
const MapController = ({ selectedTree, onMapReady, isFullscreen }: { selectedTree: any; onMapReady: (map: any) => void; isFullscreen: boolean }) => {
  const map = useMap();
  
  useEffect(() => {
    onMapReady(map);
  }, [map, onMapReady]);

  useEffect(() => {
    if (selectedTree && map) {
      map.flyTo([selectedTree.lat, selectedTree.lng], isFullscreen ? 18 : 16, {
        animate: true,
        duration: 2,
        easeLinearity: 0.1,
      });
    }
  }, [selectedTree, map, isFullscreen]);

  return null;
};

// Floating particles component
const FloatingParticles = () => {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const particles = particlesRef.current;
    if (!particles) return;

    const createParticle = () => {
      const particle = document.createElement('div');
      particle.className = 'absolute w-2 h-2 bg-forest-400 rounded-full opacity-60 animate-float pointer-events-none';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = Math.random() * 100 + '%';
      particle.style.animationDelay = Math.random() * 3 + 's';
      particle.style.animationDuration = (3 + Math.random() * 4) + 's';
      
      particles.appendChild(particle);
      
      setTimeout(() => {
        if (particles.contains(particle)) {
          particles.removeChild(particle);
        }
      }, 7000);
    };

    const interval = setInterval(createParticle, 2000);
    return () => clearInterval(interval);
  }, []);

  return <div ref={particlesRef} className="absolute inset-0 pointer-events-none z-[400]" />;
};

// Enhanced decorative frame with animated vines
const MapDecorations = () => {
  return (
    <div className="pointer-events-none absolute inset-0 z-[850]">
      {/* Animated corner decorations - Hidden on mobile */}
      <div className="absolute top-4 left-4 w-32 h-32 opacity-70 hidden md:block">
        <svg className="w-full h-full animate-sway" viewBox="0 0 120 120" fill="none">
          <defs>
            <linearGradient id="vineGradient1" x1="0" y1="0" x2="120" y2="120" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#8fb35a" />
              <stop offset="100%" stopColor="#466036" />
            </linearGradient>
          </defs>
          <path d="M10 108 C 24 84, 44 64, 74 48 C 88 40, 100 30, 112 12" stroke="url(#vineGradient1)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="animate-pulse" />
          <g fill="#91b15c" className="animate-float">
            <ellipse cx="40" cy="70" rx="8" ry="14" transform="rotate(-24 40 70)" />
            <ellipse cx="60" cy="58" rx="6" ry="12" transform="rotate(10 60 58)" />
            <ellipse cx="86" cy="40" rx="8" ry="14" transform="rotate(-15 86 40)" />
          </g>
        </svg>
      </div>
      
      <div className="absolute bottom-4 right-4 w-36 h-36 opacity-70 transform rotate-180 hidden md:block">
        <svg className="w-full h-full animate-sway" style={{ animationDelay: '1s' }} viewBox="0 0 120 120" fill="none">
          <defs>
            <linearGradient id="vineGradient2" x1="0" y1="0" x2="120" y2="120" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#8fb35a" />
              <stop offset="100%" stopColor="#466036" />
            </linearGradient>
          </defs>
          <path d="M10 108 C 24 84, 44 64, 74 48 C 88 40, 100 30, 112 12" stroke="url(#vineGradient2)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="animate-pulse" />
          <g fill="#91b15c" className="animate-float">
            <ellipse cx="40" cy="70" rx="8" ry="14" transform="rotate(-24 40 70)" />
            <ellipse cx="60" cy="58" rx="6" ry="12" transform="rotate(10 60 58)" />
            <ellipse cx="86" cy="40" rx="8" ry="14" transform="rotate(-15 86 40)" />
          </g>
        </svg>
      </div>

      {/* Floating leaves - Hidden on mobile */}
      <div className="absolute top-1/4 left-1/3 text-4xl opacity-30 animate-float hidden md:block" style={{ animationDelay: '0.5s' }}>🍃</div>
      <div className="absolute top-2/3 right-1/4 text-3xl opacity-25 animate-sway hidden md:block" style={{ animationDelay: '1.5s' }}>🌿</div>
      <div className="absolute bottom-1/3 left-1/4 text-5xl opacity-20 animate-float hidden md:block" style={{ animationDelay: '2s' }}>🍂</div>
    </div>
  );
};

const Maps = () => {
  const [selectedTree, setSelectedTree] = useState<any>(null);
  const [, setMapInstance] = useState<any>(null);
  const [isDetailPanelOpen, setIsDetailPanelOpen] = useState(false);
  const [mapStyle, setMapStyle] = useState('satellite');
  const [searchTerm, setSearchTerm] = useState('');
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [isLoading, setIsLoading] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu when screen size changes
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Enhanced mock data with more details
  const trees = [
    {
      id: 1,
      name: 'Homestay View Đồi Chè Bản Áng',
      lat: 22.3364,
      lng: 103.7734,
      age: 2, // 2 ngày 1 đêm
      rarity: 'Theo mùa',
      location: 'Đỉnh Fansipan, Lào Cai',
      price: 1800000,
      rentPrice: 350000,
      status: 'available',
      image: 'https://i.pinimg.com/1200x/c0/3e/fe/c03efedc543c2a972cb2faf38bda98fd.jpg',
      healthScore: 95,
      description: 'Homestay ấm cúng nhìn thẳng ra đồi chè xanh mướt, kèm BBQ tối và set chụp ảnh trang phục dân tộc.',
      altitude: '3,143m',
      temperature: '12°C',
      humidity: '85%',
      windSpeed: '8 km/h',
      sunlight: '6h/ngày',
      soilPh: '6.2',
      lastCare: '2025-01-15',
      nextCare: '2025-01-20',
      achievements: ['Homestay Đẹp Nhất Mộc Châu 2024', 'Chứng nhận An toàn Du lịch'],
      culturalValue: 'Nơi du khách có thể trải nghiệm cuộc sống bình yên của người dân bản địa giữa thiên nhiên hùng vĩ.',
    },
    {
      id: 2,
      name: 'Tour Săn Mây Bình Minh Tà Xùa',
      lat: 21.3833,
      lng: 104.4833,
      age: 5, // 5 giờ
      rarity: 'Cực hot',
      location: 'Đỉnh Tà Xùa, Yên Bái',
      price: 690000,
      rentPrice: 120000,
      status: 'available',
      image: 'https://i.pinimg.com/1200x/29/17/62/291762e4b07d4cda033edc08a295853f.jpg',
      healthScore: 100,
      description: 'Tour săn mây bình minh tại đỉnh Tà Xùa huyền thoại, khởi hành 4h sáng để đón ánh bình minh đầu tiên.',
      altitude: '2,865m',
      temperature: '15°C',
      humidity: '90%',
      windSpeed: '12 km/h',
      sunlight: '5h/ngày',
      soilPh: '6.0',
      lastCare: '2025-01-14',
      nextCare: '2025-01-21',
      achievements: ['Tour Được Yêu Thích Nhất 2024', 'Chứng nhận An toàn Trekking'],
      culturalValue: 'Tà Xùa được mệnh danh là "Nóc nhà Đông Dương", nơi có biển mây đẹp nhất Việt Nam.',
    },
    {
      id: 3,
      name: 'Thuê Xe Máy + Bộ Camping',
      lat: 22.7833,
      lng: 104.7167,
      age: 1, // 1 ngày
      rarity: 'Bản địa',
      location: 'Hoàng Su Phì, Hà Giang',
      price: 180000,
      rentPrice: 50000,
      status: 'rented',
      image: 'https://i.pinimg.com/736x/1c/51/33/1c513308bcfb0b1eba6d2da100d3530d.jpg',
      healthScore: 92,
      description: 'Thuê xe máy kèm bộ camping đầy đủ, có dịch vụ cứu hộ 24/7 và hướng dẫn an toàn.',
      altitude: '1,500m',
      temperature: '18°C',
      humidity: '80%',
      windSpeed: '10 km/h',
      sunlight: '7h/ngày',
      soilPh: '6.5',
      lastCare: '2025-01-13',
      nextCare: '2025-01-18',
      achievements: ['Dịch vụ Thuê xe Uy tín 2024'],
      culturalValue: 'Khám phá Mộc Châu bằng xe máy là cách tuyệt vời để cảm nhận nhịp sống bản địa.',
    },
    {
      id: 4,
      name: 'Vé Lễ Hội Hoa Mận + Shuttle',
      lat: 20.8167,
      lng: 104.6833,
      age: 1, // 1 ngày
      rarity: 'Theo mùa',
      location: 'Cao nguyên Mộc Châu, Sơn La',
      price: 250000,
      rentPrice: 0,
      status: 'available',
      image: 'https://i.pinimg.com/1200x/c0/3e/fe/c03efedc543c2a972cb2faf38bda98fd.jpg',
      healthScore: 95,
      description: 'Vé tham gia lễ hội hoa mận kèm dịch vụ shuttle từ homestay, diễn ra vào cuối tháng 1 - đầu tháng 2.',
      altitude: '1,050m',
      temperature: '20°C',
      humidity: '75%',
      windSpeed: '6 km/h',
      sunlight: '8h/ngày',
      soilPh: '6.8',
      lastCare: '2025-01-12',
      nextCare: '2025-01-19',
      achievements: ['Lễ hội Đặc sắc Nhất Tây Bắc'],
      culturalValue: 'Lễ hội hoa mận là dịp để du khách hiểu thêm về văn hóa và đời sống của người dân tộc thiểu số.',
    },
    {
      id: 5,
      name: 'Đặt Bàn Acoustic Night + Trang Trí',
      lat: 21.5833,
      lng: 105.8167,
      age: 3, // 3 giờ
      rarity: 'Cực hiếm',
      location: 'Tân Cương, Thái Nguyên',
      price: 300000,
      rentPrice: 0,
      status: 'sold',
      image: 'https://i.pinimg.com/1200x/29/17/62/291762e4b07d4cda033edc08a295853f.jpg',
      healthScore: 96,
      description: 'Đặt bàn acoustic night với không gian ấm cúng, có thể trang trí sinh nhật hoặc kỷ niệm đặc biệt.',
      altitude: '200m',
      temperature: '25°C',
      humidity: '70%',
      windSpeed: '4 km/h',
      sunlight: '9h/ngày',
      soilPh: '7.0',
      lastCare: '2025-01-11',
      nextCare: '2025-01-17',
      achievements: ['Quán Acoustic Được Yêu Thích Nhất'],
      culturalValue: 'Không gian âm nhạc acoustic mang đến những phút giây thư giãn giữa thiên nhiên Mộc Châu.',
    },
  ];

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Filter trees based on search and filters
  const filteredTrees = trees.filter(tree => {
    const matchesSearch = tree.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tree.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = selectedFilter === 'all' || 
                         (selectedFilter === 'available' && tree.status === 'available') ||
                         (selectedFilter === 'rented' && tree.status === 'rented') ||
                         (selectedFilter === 'sold' && tree.status === 'sold') ||
                         (selectedFilter === 'legendary' && tree.rarity === 'Cực hot');
    return matchesSearch && matchesFilter;
  });

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
    }).format(price);
  };

  const getRarityColor = (rarity: string) => {
    const colors = {
      'Huyền thoại': 'from-yellow-500 to-orange-500',
      'Cực hiếm': 'from-purple-500 to-pink-500',
      'Quý hiếm': 'from-blue-500 to-indigo-500',
      'Theo mùa': 'from-green-500 to-emerald-500',
      'Cực hot': 'from-yellow-500 to-orange-500',
      'Bản địa': 'from-blue-500 to-indigo-500',
    };
    return colors[rarity as keyof typeof colors] || 'from-forest-500 to-forest-600';
  };

  const getStatusColor = (status: string) => {
    const colors = {
      available: 'text-green-600',
      rented: 'text-orange-600',
      sold: 'text-red-600',
    };
    return colors[status as keyof typeof colors] || 'text-gray-600';
  };

  const getStatusText = (status: string) => {
    const texts = {
      available: 'Có sẵn',
      rented: 'Tạm hết chỗ',
      sold: 'Hết vé',
    };
    return texts[status as keyof typeof texts] || 'Không xác định';
  };

  const handleTreeClick = (tree: any) => {
    setSelectedTree(tree);
    setIsDetailPanelOpen(true);
  };

  const getTileLayerUrl = () => {
    switch (mapStyle) {
      case 'satellite':
        return 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}';
      case 'terrain':
        return 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png';
      case 'street':
      default:
        return 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    }
  };

  const handleMapStyleChange = (style: string) => {
    setMapStyle(style);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-vintage-50 via-forest-50 to-vintage-100 pt-20 flex items-center justify-center">
        <div className="text-center">
          <div className="relative w-32 h-32 mx-auto mb-8">
            <div className="absolute inset-0 border-4 border-forest-200 rounded-full"></div>
            <div className="absolute inset-0 border-4 border-forest-600 rounded-full border-t-transparent animate-spin"></div>
            <TreePine className="absolute inset-0 m-auto h-12 w-12 text-forest-600 animate-pulse" />
          </div>
          <h2 className="text-2xl font-elegant font-bold text-forest-900 mb-4">Đang tải bản đồ rừng trà...</h2>
          <p className="text-forest-600 font-nature">Chuẩn bị khám phá những cây trà cổ thụ huyền thoại</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-vintage-50 via-forest-50 to-vintage-100 pt-20 relative overflow-hidden">
      {/* Animated background effects */}
      <div className="fixed inset-0 forest-texture opacity-20 pointer-events-none animate-pulse" />
      <FloatingParticles />
      
      {/* Enhanced Header with animations - Mobile responsive */}
      <div className="relative py-8 md:py-16 bg-gradient-to-br from-forest-900 via-vintage-900 to-forest-800 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 text-4xl md:text-6xl opacity-10 animate-sway hidden md:block">🗺️</div>
          <div className="absolute bottom-10 right-10 text-3xl md:text-5xl opacity-15 animate-float hidden md:block">🌲</div>
          <div className="absolute top-1/2 left-1/3 text-2xl md:text-4xl opacity-10 animate-bounce hidden md:block" style={{ animationDelay: '1s' }}>🍃</div>
          <div className="absolute bottom-1/3 right-1/4 text-xl md:text-3xl opacity-20 animate-sway hidden md:block" style={{ animationDelay: '2s' }}>🏔️</div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 md:space-x-3 px-4 md:px-6 py-2 md:py-3 bg-forest-800/50 backdrop-blur-sm rounded-full mb-4 md:mb-8 border border-forest-600/30 animate-fade-up">
            <MapPin className="h-4 w-4 md:h-5 md:w-5 text-forest-400 animate-pulse" />
            <span className="text-forest-200 text-xs md:text-sm font-nature font-medium">Bản đồ rừng trà tương tác</span>
            <Compass className="h-3 w-3 md:h-4 md:w-4 text-forest-300 animate-spin hidden sm:block" style={{ animationDuration: '4s' }} />
          </div>
          
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-elegant font-bold text-white mb-4 md:mb-6 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Khám Phá Rừng Trà
            <span className="block text-forest-300 animate-fade-up" style={{ animationDelay: '0.4s' }}>Trên Bản Đồ 3D</span>
          </h1>
          <p className="text-sm sm:text-base md:text-xl text-forest-200 max-w-3xl mx-auto font-nature animate-fade-up px-4" style={{ animationDelay: '0.6s' }}>
            Khám phá {filteredTrees.length} trải nghiệm du lịch bản địa tại Mộc Châu với bản đồ tương tác 3D hiện đại
          </p>
        </div>
      </div>

      <div className="relative">
        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-black/50 z-[2000] md:hidden animate-fade-in" onClick={() => setIsMobileMenuOpen(false)}>
            <div className="absolute top-0 right-0 w-64 h-full bg-white shadow-2xl transform transition-transform duration-300 animate-slide-in-right">
              <div className="p-4 border-b border-forest-200">
                <div className="flex items-center justify-between">
                  <h3 className="font-elegant font-bold text-forest-900">Menu</h3>
                  <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 hover:bg-forest-100 rounded-full">
                    <X className="h-5 w-5 text-forest-600" />
                  </button>
                </div>
              </div>
              <div className="p-4 space-y-4">
                <button className="w-full text-left p-3 hover:bg-forest-50 rounded-lg transition-colors">
                  <div className="flex items-center space-x-3">
                    <TreePine className="h-5 w-5 text-forest-600" />
                    <span className="font-nature">Tất cả cây trà</span>
                  </div>
                </button>
                <button className="w-full text-left p-3 hover:bg-forest-50 rounded-lg transition-colors">
                  <div className="flex items-center space-x-3">
                    <Crown className="h-5 w-5 text-forest-600" />
                    <span className="font-nature">Cây huyền thoại</span>
                  </div>
                </button>
                <button className="w-full text-left p-3 hover:bg-forest-50 rounded-lg transition-colors">
                  <div className="flex items-center space-x-3">
                    <Eye className="h-5 w-5 text-forest-600" />
                    <span className="font-nature">Cây có sẵn</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Enhanced Search and Filter Bar - Mobile responsive */}
        <div className="relative z-[1000] bg-vintage-50/95 backdrop-blur-lg border-b border-forest-200/30 p-3 md:p-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col gap-3 md:gap-4">
              {/* Search Row */}
              <div className="flex items-center gap-2 md:gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 md:left-4 top-1/2 transform -translate-y-1/2 h-4 w-4 md:h-5 md:w-5 text-forest-400" />
                  <input
                    type="text"
                    placeholder="Tìm kiếm trải nghiệm..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 md:pl-12 pr-3 md:pr-4 py-2 md:py-3 bg-white/90 backdrop-blur-sm border-2 border-forest-200 rounded-xl md:rounded-2xl focus:outline-none focus:ring-2 focus:ring-forest-500 focus:border-transparent shadow-lg text-forest-800 placeholder-forest-500 transition-all duration-300 hover:shadow-xl text-sm md:text-base"
                  />
                </div>

                {/* Mobile Menu Button */}
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="md:hidden p-2 md:p-3 bg-white/90 text-forest-600 border-2 border-forest-200 rounded-xl transition-all duration-300"
                >
                  <Menu className="h-5 w-5" />
                </button>
              </div>

              {/* Control Buttons Row */}
              <div className="flex items-center gap-2 md:gap-4">
                {/* Filter Toggle */}
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className={`flex items-center space-x-2 px-4 md:px-6 py-2 md:py-3 rounded-xl md:rounded-2xl transition-all duration-300 text-sm md:text-base ${
                    showFilters 
                      ? 'bg-gradient-to-r from-forest-600 to-forest-700 text-white shadow-forest' 
                      : 'bg-white/90 text-forest-600 hover:bg-forest-100 border-2 border-forest-200'
                  }`}
                >
                  <Filter className="h-4 w-4 md:h-5 md:w-5" />
                  <span className="font-nature font-medium">Bộ lọc</span>
                </button>

                {/* Fullscreen Toggle */}
                <button
                  onClick={() => setIsFullscreen(!isFullscreen)}
                  className="flex items-center space-x-2 px-4 md:px-6 py-2 md:py-3 bg-white/90 text-forest-600 hover:bg-forest-100 border-2 border-forest-200 rounded-xl md:rounded-2xl transition-all duration-300 text-sm md:text-base"
                >
                  {isFullscreen ? <Minimize2 className="h-4 w-4 md:h-5 md:w-5" /> : <Maximize2 className="h-4 w-4 md:h-5 md:w-5" />}
                  <span className="font-nature font-medium hidden sm:inline">
                    {isFullscreen ? 'Thu nhỏ' : 'Toàn màn hình'}
                  </span>
                </button>
              </div>
            </div>

            {/* Animated Filter Options - Mobile responsive */}
            <div className={`transition-all duration-500 overflow-hidden ${
              showFilters ? 'max-h-40 md:max-h-32 opacity-100 mt-4' : 'max-h-0 opacity-0'
            }`}>
              <div className="flex flex-wrap gap-2 md:gap-3">
                {[
                  { id: 'all', label: 'Tất cả trải nghiệm', icon: TreePine },
                  { id: 'available', label: 'Có sẵn', icon: Eye },
                  { id: 'rented', label: 'Tạm hết chỗ', icon: Calendar },
                  { id: 'sold', label: 'Hết vé', icon: Award },
                  { id: 'legendary', label: 'Cực hot', icon: Crown },
                ].map((filter) => (
                  <button
                    key={filter.id}
                    onClick={() => setSelectedFilter(filter.id)}
                    className={`flex items-center space-x-1 md:space-x-2 px-3 md:px-4 py-2 rounded-full transition-all duration-300 text-xs md:text-sm ${
                      selectedFilter === filter.id
                        ? 'bg-gradient-to-r from-forest-600 to-forest-700 text-white shadow-forest scale-105'
                        : 'bg-white/80 text-forest-600 hover:bg-forest-100 hover:scale-105'
                    }`}
                  >
                    <filter.icon className="h-3 w-3 md:h-4 md:w-4" />
                    <span className="font-nature">{filter.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Map Container - Mobile responsive */}
        <div className={`flex transition-all duration-700 ${isFullscreen ? 'h-screen' : 'h-[calc(100vh-200px)] md:h-[calc(100vh-300px)]'}`}>
          {/* Map */}
          <div className="flex-1 relative overflow-hidden">
            {/* Enhanced Decorative frame */}
            <MapDecorations />

            {/* Enhanced Map Controls - Mobile responsive */}
            <div className="absolute top-3 md:top-6 left-3 md:left-6 z-[900] space-y-2 md:space-y-3">
              <Card variant="glass" className="p-2 md:p-4 animate-slide-in">
                <div className="flex flex-col space-y-2">
                  <div className="text-xs font-nature font-semibold mb-2 text-white hidden md:block">Kiểu bản đồ</div>
                  <div className="flex space-x-1 md:space-x-2">
                    {[
                      { id: 'street', icon: '🗺️', label: 'Đường phố' },
                      { id: 'satellite', icon: '🛰️', label: 'Vệ tinh' },
                      { id: 'terrain', icon: '🏔️', label: 'Địa hình' },
                    ].map((style) => (
                      <button
                        key={style.id}
                        onClick={() => handleMapStyleChange(style.id)}
                        className={`p-1.5 md:p-2 text-xs rounded-lg transition-all duration-300 hover:scale-110 ${
                          mapStyle === style.id 
                            ? 'bg-forest-600 text-white shadow-forest' 
                            : 'bg-white/70 text-forest-700 hover:bg-white/90'
                        }`}
                        title={style.label}
                      >
                        <span className="text-xs md:text-sm">{style.icon}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </Card>

              {/* Enhanced Stats Card - Mobile responsive */}
              <Card variant="glass" className="p-2 md:p-4 animate-slide-in">
                <div className="flex items-center space-x-2 md:space-x-3">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-forest-500 to-forest-600 rounded-xl flex items-center justify-center animate-pulse">
                    <TreePine className="h-4 w-4 md:h-5 md:w-5 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-white text-base md:text-lg">{filteredTrees.length}</div>
                    <div className="text-xs text-white font-nature">Trải nghiệm</div>
                  </div>
                </div>
              </Card>

              {/* Weather Info - Mobile responsive */}
              <Card variant="glass" className="p-2 md:p-4 animate-slide-in">
                <div className="space-y-1 md:space-y-2">
                  <div className="text-xs font-nature font-semibold text-white mb-2 hidden md:block">Thời tiết vùng núi</div>
                  <div className="flex items-center space-x-1 md:space-x-2 text-xs">
                    <Thermometer className="h-3 w-3 text-orange-500" />
                    <span className="text-white">15°C</span>
                  </div>
                  <div className="flex items-center space-x-1 md:space-x-2 text-xs">
                    <Droplets className="h-3 w-3 text-blue-500" />
                    <span className="text-white">85%</span>
                  </div>
                  <div className="flex items-center space-x-1 md:space-x-2 text-xs">
                    <Wind className="h-3 w-3 text-green-500" />
                    <span className="text-white">8 km/h</span>
                  </div>
                </div>
              </Card>
            </div>

            {/* Enhanced Navigation Compass - Mobile responsive */}
            <div className="absolute top-3 md:top-6 right-3 md:right-6 z-[900]">
              <Card variant="glass" className="p-2 md:p-4 animate-slide-in">
                <div className="relative w-12 h-12 md:w-16 md:h-16">
                  <div className="absolute inset-0 border-2 border-forest-300 rounded-full animate-spin" style={{ animationDuration: '20s' }}>
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1 w-0 h-0 border-l-2 border-r-2 border-b-4 border-transparent border-b-red-500"></div>
                  </div>
                  <Navigation className="absolute inset-0 m-auto h-6 w-6 md:h-8 md:w-8 text-forest-600" />
                </div>
              </Card>
            </div>

            {/* Leaflet Map with enhanced styling */}
            <MapContainer
              center={[21.5, 104.5]}
              zoom={isFullscreen ? 8 : 7}
              className="h-full w-full transition-all duration-700"
              zoomControl={false}
              style={{ filter: 'contrast(1.1) saturate(1.2)' }}
            >
              <TileLayer
                url={getTileLayerUrl()}
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              
              <MapController selectedTree={selectedTree} onMapReady={setMapInstance} isFullscreen={isFullscreen} />
              
              {filteredTrees.map((tree) => (
                <Marker
                  key={tree.id}
                  position={[tree.lat, tree.lng]}
                  icon={createTreeIcon(tree.rarity, selectedTree?.id === tree.id)}
                  eventHandlers={{
                    click: () => handleTreeClick(tree),
                  }}
                >
                  <Popup className="custom-popup" maxWidth={300}>
                    <div className="p-4 min-w-[250px]">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-forest-500 to-forest-600 rounded-xl flex items-center justify-center">
                          <TreePine className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <span className="font-elegant font-bold text-forest-900 text-lg">{tree.name}</span>
                          <div className="text-sm text-forest-600">{tree.location}</div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                        <div className="flex justify-between">
                          <span className="text-forest-600">Thời lượng:</span>
                          <span className="font-semibold text-forest-800">{tree.age === 1 ? '1 ngày' : tree.age === 2 ? '2N1Đ' : `${tree.age}h`}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-forest-600">Đánh giá:</span>
                          <span className="font-semibold text-green-600">{tree.healthScore}%</span>
                        </div>
                        <div className="col-span-2 flex justify-between">
                          <span className="text-forest-600">Phân loại:</span>
                          <span className={`font-semibold bg-gradient-to-r ${getRarityColor(tree.rarity)} bg-clip-text text-transparent`}>
                            {tree.rarity}
                          </span>
                        </div>
                        <div className="col-span-2 flex justify-between">
                          <span className="text-forest-600">Trạng thái:</span>
                          <span className={`font-semibold ${getStatusColor(tree.status)}`}>
                            {getStatusText(tree.status)}
                          </span>
                        </div>
                      </div>
                      
                      <button
                        onClick={() => handleTreeClick(tree)}
                        className="w-full px-4 py-3 bg-gradient-to-r from-forest-600 to-forest-700 text-white text-sm font-nature font-medium rounded-xl hover:from-forest-500 hover:to-forest-600 transition-all duration-300 shadow-forest hover:shadow-xl hover:scale-105"
                      >
                        <span className="flex items-center justify-center space-x-2">
                          <Eye className="h-4 w-4" />
                          <span>Xem chi tiết</span>
                          <Zap className="h-4 w-4 animate-pulse" />
                        </span>
                      </button>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>

          {/* Enhanced Animated Sidebar - Mobile responsive */}
          <div 
            className={`bg-vintage-50/98 backdrop-blur-xl border-l border-forest-200/30 transition-all duration-700 ease-in-out transform ${
              isDetailPanelOpen 
                ? 'w-full md:w-96 translate-x-0 opacity-100' 
                : 'w-0 translate-x-full opacity-0'
            } ${isFullscreen ? 'absolute right-0 top-0 h-full z-[1000] shadow-2xl' : ''}`}
          >
            {selectedTree && isDetailPanelOpen && (
              <div className="h-full flex flex-col animate-slide-in">
                {/* Enhanced Header */}
                <div className="p-6 border-b border-forest-200/30 bg-gradient-to-r from-forest-50 to-vintage-50">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-elegant font-bold text-2xl text-forest-900 flex items-center">
                      <TreePine className="h-6 w-6 mr-3 text-forest-600 animate-branch-sway" />
                      Chi tiết trải nghiệm
                    </h3>
                    <button
                      onClick={() => setIsDetailPanelOpen(false)}
                      className="p-3 hover:bg-forest-100 rounded-full transition-all duration-300 hover:scale-110 hover:rotate-90"
                    >
                      <X className="h-6 w-6 text-forest-600" />
                    </button>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    <div className={`inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r ${getRarityColor(selectedTree.rarity)} text-white text-sm font-medium rounded-full shadow-lg animate-pulse`}>
                      <Crown className="h-4 w-4" />
                      <span>{selectedTree.rarity}</span>
                    </div>
                    <div className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium ${
                      selectedTree.status === 'available' 
                        ? 'bg-green-100 text-green-800' 
                        : selectedTree.status === 'rented'
                        ? 'bg-orange-100 text-orange-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                      <div className={`w-2 h-2 rounded-full ${
                        selectedTree.status === 'available' 
                          ? 'bg-green-500 animate-pulse' 
                          : selectedTree.status === 'rented'
                          ? 'bg-orange-500 animate-pulse'
                          : 'bg-red-500'
                      }`} />
                      <span>{getStatusText(selectedTree.status)}</span>
                    </div>
                  </div>
                </div>

                {/* Enhanced Content */}
                <div className="flex-1 overflow-y-auto p-6 space-y-8">
                  {/* Enhanced Image with 3D effect */}
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl group">
                    <img
                      src={selectedTree.image}
                      alt={selectedTree.name}
                      className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-forest-900/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="font-elegant font-bold text-xl animate-fade-up">{selectedTree.name}</div>
                      <div className="text-sm opacity-90 animate-fade-up" style={{ animationDelay: '0.2s' }}>{selectedTree.location}</div>
                    </div>
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-forest-800">
                      {selectedTree.altitude}
                    </div>
                  </div>

                  {/* Enhanced Stats Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-gradient-to-br from-forest-50 to-forest-100 rounded-2xl border border-forest-200/30 hover:shadow-lg transition-all duration-300 hover:scale-105">
                      <Clock className="h-8 w-8 text-forest-600 mx-auto mb-2 animate-pulse" />
                      <div className="font-bold text-2xl text-forest-900">{selectedTree.age === 1 ? '1 ngày' : selectedTree.age === 2 ? '2N1Đ' : `${selectedTree.age}h`}</div>
                      <div className="text-sm text-forest-600 font-nature">Thời lượng</div>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl border border-green-200/30 hover:shadow-lg transition-all duration-300 hover:scale-105">
                      <Activity className="h-8 w-8 text-green-600 mx-auto mb-2 animate-pulse" />
                      <div className="font-bold text-2xl text-green-900">{selectedTree.healthScore}%</div>
                      <div className="text-sm text-green-600 font-nature">Đánh giá</div>
                    </div>
                  </div>

                  {/* Enhanced Description */}
                  <div className="bg-vintage-50/80 backdrop-blur-sm rounded-2xl p-6 border border-vintage-200/30">
                    <h4 className="font-elegant font-bold text-forest-900 mb-3 flex items-center">
                      <Leaf className="h-5 w-5 mr-2 text-forest-600" />
                      Mô tả chi tiết
                    </h4>
                    <p className="text-forest-700 text-sm leading-relaxed font-nature">{selectedTree.description}</p>
                  </div>

                  {/* Enhanced Environment Data */}
                  <div className="bg-gradient-to-br from-forest-50 to-vintage-50 rounded-2xl p-6 border border-forest-200/30">
                    <h4 className="font-elegant font-bold text-forest-900 mb-4 flex items-center">
                      <Mountain className="h-5 w-5 mr-2 text-forest-600" />
                      Thông tin thời tiết
                    </h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center space-x-3 p-3 bg-white/60 rounded-xl">
                        <Thermometer className="h-5 w-5 text-orange-500" />
                        <div>
                          <div className="font-semibold text-forest-900 text-sm">{selectedTree.temperature}</div>
                          <div className="text-xs text-forest-600">Nhiệt độ</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3 p-3 bg-white/60 rounded-xl">
                        <Droplets className="h-5 w-5 text-blue-500" />
                        <div>
                          <div className="font-semibold text-forest-900 text-sm">{selectedTree.humidity}</div>
                          <div className="text-xs text-forest-600">Độ ẩm</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3 p-3 bg-white/60 rounded-xl">
                        <Wind className="h-5 w-5 text-green-500" />
                        <div>
                          <div className="font-semibold text-forest-900 text-sm">{selectedTree.windSpeed}</div>
                          <div className="text-xs text-forest-600">Tốc độ gió</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3 p-3 bg-white/60 rounded-xl">
                        <Sun className="h-5 w-5 text-yellow-500" />
                        <div>
                          <div className="font-semibold text-forest-900 text-sm">{selectedTree.sunlight}</div>
                          <div className="text-xs text-forest-600">Ánh sáng</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Pricing */}
                  <div className="space-y-4">
                    <h4 className="font-elegant font-bold text-forest-900 flex items-center">
                      <Crown className="h-5 w-5 mr-2 text-forest-600" />
                      Thông tin giá cả
                    </h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-4 bg-gradient-to-r from-forest-50 to-forest-100 rounded-xl border border-forest-200/30">
                        <span className="text-forest-600 font-nature text-sm">Giá từ:</span>
                        <span className="font-bold text-forest-900 text-lg">
                          {formatPrice(selectedTree.price)}
                        </span>
                      </div>
                      <div className="flex justify-between items-center p-4 bg-gradient-to-r from-vintage-50 to-vintage-100 rounded-xl border border-vintage-200/30">
                        <span className="text-forest-600 font-nature text-sm">Phụ thu/Add-on:</span>
                        <span className="font-bold text-forest-800 text-lg">
                          {formatPrice(selectedTree.rentPrice)}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Cultural Value */}
                  <div className="bg-gradient-to-br from-vintage-50 to-forest-50 rounded-2xl p-6 border border-vintage-200/30">
                    <h4 className="font-elegant font-bold text-forest-900 mb-3 flex items-center">
                      <Star className="h-5 w-5 mr-2 text-forest-600" />
                      Điểm đặc biệt
                    </h4>
                    <p className="text-forest-700 text-sm leading-relaxed font-nature italic">{selectedTree.culturalValue}</p>
                  </div>

                  {/* Achievements */}
                  <div className="space-y-3">
                    <h4 className="font-elegant font-bold text-forest-900 flex items-center">
                      <Award className="h-5 w-5 mr-2 text-forest-600" />
                      Giải thưởng & Chứng nhận
                    </h4>
                    <div className="space-y-2">
                      {selectedTree.achievements.map((achievement: string, index: number) => (
                        <div key={index} className="flex items-center space-x-3 p-3 bg-white/60 rounded-xl border border-forest-200/30">
                          <Award className="h-4 w-4 text-yellow-500 flex-shrink-0" />
                          <span className="text-forest-800 text-sm font-nature">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Enhanced Actions */}
                <div className="p-6 border-t border-forest-200/30 bg-gradient-to-r from-forest-50 to-vintage-50 space-y-4">
                  <Button size="lg" className="w-full animate-pulse" variant="forest">
                    <div className="flex items-center justify-center space-x-2">
                      <Eye className="h-5 w-5" />
                      <span>Đặt ngay</span>
                      <Zap className="h-4 w-4" />
                    </div>
                  </Button>
                  <div className="grid grid-cols-2 gap-3">
                    <Button variant="outline" size="md" className="border-forest-600 text-forest-600 hover:bg-forest-600 hover:text-white">
                      <Phone className="h-4 w-4 mr-2" />
                      Liên hệ
                    </Button>
                    <Button variant="outline" size="md" className="border-vintage-600 text-vintage-600 hover:bg-vintage-600 hover:text-white">
                      <Calendar className="h-4 w-4 mr-2" />
                      Tư vấn
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Enhanced Tree List - Bottom Panel - Mobile responsive */}
        <div className={`relative z-[1100] bg-vintage-50/98 backdrop-blur-xl border-t border-forest-200/30 transition-all duration-500 ${
          isFullscreen ? 'hidden' : 'block'
        }`}>
          <div className="max-w-7xl mx-auto p-4 md:p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-0 mb-4 md:mb-6">
              <h3 className="font-elegant font-bold text-xl md:text-2xl text-forest-900 flex items-center">
                <TreePine className="h-5 w-5 md:h-6 md:w-6 mr-2 md:mr-3 text-forest-600 animate-branch-sway" />
                Danh sách trải nghiệm ({filteredTrees.length})
              </h3>
              <div className="text-xs md:text-sm text-forest-600 font-nature">
                Nhấp vào trải nghiệm để xem chi tiết
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4">
              {filteredTrees.map((tree, index) => (
                <button
                  key={tree.id}
                  onClick={() => handleTreeClick(tree)}
                  className={`p-3 md:p-4 bg-white/90 backdrop-blur-sm rounded-xl md:rounded-2xl border-2 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 hover:scale-105 text-left animate-fade-up ${
                    selectedTree?.id === tree.id 
                      ? 'border-forest-500 bg-forest-50 shadow-forest scale-105' 
                      : 'border-forest-200/30 hover:border-forest-400'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center space-x-2 md:space-x-3 mb-2 md:mb-3">
                    <div className={`w-3 h-3 md:w-4 md:h-4 rounded-full bg-gradient-to-r ${getRarityColor(tree.rarity)} animate-pulse`} />
                    <span className="font-elegant font-bold text-forest-900 text-xs md:text-sm truncate flex-1">{tree.name}</span>
                  </div>
                  <div className="text-xs text-forest-600 mb-2 font-nature">{tree.location}</div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs text-forest-700 font-nature">{tree.age === 1 ? '1 ngày' : tree.age === 2 ? '2N1Đ' : `${tree.age}h`}</span>
                    <span className={`text-xs font-semibold ${getStatusColor(tree.status)}`}>
                      {getStatusText(tree.status)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-forest-600">Đánh giá:</span>
                    <div className="flex items-center space-x-1">
                      <div className="w-6 md:w-8 h-1 bg-forest-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-green-500 to-emerald-500 transition-all duration-1000"
                          style={{ width: `${tree.healthScore}%` }}
                        />
                      </div>
                      <span className="text-xs font-semibold text-green-600">{tree.healthScore}%</span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Maps;