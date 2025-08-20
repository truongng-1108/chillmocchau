import { Eye, Calendar, TreePine, BarChart3, Camera, Bell, Crown, Mountain} from 'lucide-react';
import { Link } from 'react-router-dom';

const MyTrees = () => {
  const myTrees = [
    {
      id: 1,
      name: 'Trà Shan Tuyết Hoàng Gia #001',
      type: 'rent',
      startDate: '2024-12-01',
      status: 'excellent',
      location: 'Vườn A - Khu vực Đỉnh Cao',
      image: 'https://i.pinimg.com/1200x/c0/3e/fe/c03efedc543c2a972cb2faf38bda98fd.jpg',
      lastCare: '2025-01-15',
      nextCare: '2025-01-20',
      healthScore: 98,
      notes: 'Cây phát triển xuất sắc, lá xanh mướt như ngọc bích',
      age: 1200,
      rarity: 'Huyền thoại'
    },
    {
      id: 2,
      name: 'Trà Tà Xùa Thiên Cổ #012',
      type: 'own',
      purchaseDate: '2024-10-15',
      status: 'excellent',
      location: 'Vườn B - Khu vực Núi Thiêng',
      image: 'https://i.pinimg.com/1200x/29/17/62/291762e4b07d4cda033edc08a295853f.jpg',
      lastCare: '2025-01-14',
      nextCare: '2025-01-21',
      healthScore: 100,
      notes: 'Cây trong tình trạng hoàn hảo, năng lượng rất mạnh',
      age: 1800,
      rarity: 'Huyền thoại'
    },
    {
      id: 3,
      name: 'Trà Hoàng Su Phì Cổ Điển #007',
      type: 'rent',
      startDate: '2024-11-20',
      status: 'healthy',
      location: 'Vườn A - Khu vực Sương Mù',
      image: 'https://i.pinimg.com/736x/1c/51/33/1c513308bcfb0b1eba6d2da100d3530d.jpg',
      lastCare: '2025-01-13',
      nextCare: '2025-01-18',
      healthScore: 92,
      notes: 'Cây khỏe mạnh, cần tăng cường chăm sóc lá non',
      age: 600,
      rarity: 'Cực hiếm'
    }
  ];

  const getStatusColor = (status: string) => {
    const colors = {
      excellent: 'bg-gradient-to-r from-green-500 to-emerald-500 text-white',
      healthy: 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white',
      good: 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white',
      warning: 'bg-gradient-to-r from-orange-500 to-red-500 text-white'
    };
    return colors[status as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const getStatusText = (status: string) => {
    const texts = {
      excellent: 'Xuất sắc',
      healthy: 'Khỏe mạnh',
      good: 'Tốt',
      warning: 'Cần chú ý'
    };
    return texts[status as keyof typeof texts] || 'Không xác định';
  };

  const getTypeText = (type: string) => {
    return type === 'rent' ? 'Thuê' : 'Sở hữu';
  };

  const getTypeColor = (type: string) => {
    return type === 'rent' 
      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white' 
      : 'bg-gradient-to-r from-forest-500 to-forest-600 text-white';
  };

  const getRarityColor = (rarity: string) => {
    const colors = {
      'Huyền thoại': 'from-yellow-500 to-orange-500',
      'Cực hiếm': 'from-purple-500 to-pink-500',
      'Quý hiếm': 'from-blue-500 to-indigo-500',
    };
    return colors[rarity as keyof typeof colors] || 'from-forest-500 to-forest-600';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-vintage-50 via-forest-50 to-vintage-100 pt-20">
      {/* Background effects */}
      <div className="fixed inset-0 forest-texture opacity-20 pointer-events-none" />
      
      {/* Hero section */}
      <div className="relative py-20 bg-gradient-to-br from-forest-900 via-vintage-900 to-forest-800 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 text-6xl opacity-10 animate-sway">🌲</div>
          <div className="absolute bottom-10 right-10 text-5xl opacity-15 animate-float">🏔️</div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-forest-800/50 backdrop-blur-sm rounded-full mb-6 border border-forest-600/30">
            <TreePine className="h-4 w-4 text-forest-400" />
            <span className="text-forest-200 text-sm font-medium">Khu vườn cá nhân</span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-elegant font-bold text-white mb-6">
            Rừng Trà Của Bạn
          </h1>
          <p className="text-xl text-forest-200 max-w-3xl mx-auto font-nature">
            Theo dõi và quản lý {myTrees.length} cây trà cổ thụ quý hiếm trong bộ sưu tập cá nhân
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-vintage-50/90 backdrop-blur-sm rounded-3xl p-6 text-center shadow-wood border border-forest-200/30 wood-grain">
            <div className="w-16 h-16 bg-gradient-to-br from-forest-500 to-forest-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <TreePine className="h-8 w-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-forest-900 font-elegant">{myTrees.length}</div>
            <div className="text-sm text-forest-600 font-nature">Tổng số cây</div>
          </div>
          
          <div className="bg-vintage-50/90 backdrop-blur-sm rounded-3xl p-6 text-center shadow-wood border border-forest-200/30 wood-grain">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <BarChart3 className="h-8 w-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-forest-900 font-elegant">97%</div>
            <div className="text-sm text-forest-600 font-nature">Chỉ số sức khỏe TB</div>
          </div>
          
          <div className="bg-vintage-50/90 backdrop-blur-sm rounded-3xl p-6 text-center shadow-wood border border-forest-200/30 wood-grain">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Calendar className="h-8 w-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-forest-900 font-elegant">2</div>
            <div className="text-sm text-forest-600 font-nature">Cần chăm sóc tuần này</div>
          </div>
          
          <div className="bg-vintage-50/90 backdrop-blur-sm rounded-3xl p-6 text-center shadow-wood border border-forest-200/30 wood-grain">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Bell className="h-8 w-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-forest-900 font-elegant">0</div>
            <div className="text-sm text-forest-600 font-nature">Cảnh báo</div>
          </div>
        </div>

        {/* Trees Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {myTrees.map((tree) => (
            <div 
              key={tree.id} 
              className="group relative bg-vintage-50/90 backdrop-blur-sm rounded-3xl overflow-hidden shadow-wood border border-forest-200/30 hover:shadow-forest transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] wood-grain"
            >
              <div className="relative">
                <img
                  src={tree.image}
                  alt={tree.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-900/60 via-transparent to-transparent" />
                
                {/* Badges - Fixed positioning */}
                <div className="absolute top-4 left-4 flex flex-col space-y-2 z-10">
                  <span className={`px-3 py-1 text-xs font-medium rounded-full ${getTypeColor(tree.type)} shadow-lg`}>
                    {getTypeText(tree.type)}
                  </span>
                  <span className={`px-3 py-1 text-xs font-medium rounded-full ${getStatusColor(tree.status)} shadow-lg`}>
                    {getStatusText(tree.status)}
                  </span>
                </div>

                <div className="absolute top-4 right-4 z-10">
                  <div className={`flex items-center space-x-1 px-3 py-1 bg-gradient-to-r ${getRarityColor(tree.rarity)} text-white text-xs font-medium rounded-full shadow-lg`}>
                    <Crown className="h-3 w-3" />
                    <span>{tree.rarity}</span>
                  </div>
                </div>

                {/* Age badge - Fixed positioning */}
                <div className="absolute bottom-4 left-4 flex items-center space-x-1 px-3 py-1 bg-vintage-50/95 backdrop-blur-sm rounded-full shadow-lg z-10">
                  <Mountain className="h-3 w-3 text-forest-600" />
                  <span className="text-xs font-medium text-forest-800">{tree.age} năm</span>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="font-elegant font-semibold text-lg text-forest-900 group-hover:text-forest-700 transition-colors duration-300 leading-tight">
                  {tree.name}
                </h3>

                <div className="space-y-2 text-sm text-forest-600">
                  <div className="flex justify-between">
                    <span>Vị trí:</span>
                    <span className="font-medium text-right">{tree.location}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Chăm sóc cuối:</span>
                    <span className="font-medium">{tree.lastCare}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Chăm sóc tiếp theo:</span>
                    <span className="font-medium text-forest-700">{tree.nextCare}</span>
                  </div>
                </div>

                {/* Health Score */}
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-forest-600">Chỉ số sức khỏe</span>
                    <span className="font-bold text-forest-800">{tree.healthScore}%</span>
                  </div>
                  <div className="w-full bg-forest-200 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-green-500 to-emerald-500 h-3 rounded-full transition-all duration-500" 
                      style={{ width: `${tree.healthScore}%` }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="text-sm text-forest-600 mb-1">Ghi chú chăm sóc:</div>
                  <div className="text-sm text-forest-800 italic font-nature leading-relaxed">{tree.notes}</div>
                </div>

                <div className="flex gap-2 pt-2">
                  <Link 
                    to={`/my-trees/${tree.id}`}
                    className="flex-1 text-center bg-gradient-to-r from-forest-600 to-forest-700 text-white py-3 rounded-2xl hover:from-forest-500 hover:to-forest-600 transition-all duration-300 font-medium shadow-forest hover:shadow-xl hover:scale-105 relative overflow-hidden"
                  >
                    <span className="flex items-center justify-center space-x-2">
                      <Eye className="h-4 w-4" />
                      <span>Chi tiết 3D</span>
                    </span>
                    
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </Link>
                  
                  <button className="px-4 py-3 border-2 border-forest-400 text-forest-600 rounded-2xl hover:bg-forest-400 hover:text-white transition-all duration-300">
                    <Camera className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {myTrees.length === 0 && (
          <div className="text-center py-20">
            <div className="text-8xl mb-8">🌲</div>
            <h3 className="text-3xl font-elegant font-bold text-forest-800 mb-4">
              Chưa có cây nào trong vườn
            </h3>
            <p className="text-forest-600 mb-8 max-w-md mx-auto text-lg font-nature">
              Bạn chưa sở hữu hoặc thuê cây nào. Hãy khám phá rừng trà cổ thụ huyền thoại của chúng tôi.
            </p>
            <Link to="/products">
              <button className="px-8 py-4 bg-gradient-to-r from-forest-600 to-forest-700 text-white rounded-full hover:from-forest-500 hover:to-forest-600 transition-all duration-300 font-nature font-medium shadow-forest hover:shadow-xl hover:scale-105">
                <span className="flex items-center space-x-2">
                  <TreePine className="h-5 w-5" />
                  <span>Khám phá rừng trà</span>
                </span>
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyTrees;