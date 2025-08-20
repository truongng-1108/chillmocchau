import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TreePine, Crown, MapPin, Clock } from 'lucide-react';

const featuredProducts = [
  {
    id: 1,
    name: 'Trà Cổ Thụ Shan Tuyết Hoàng Gia',
    age: 1500,
    price: 85000000,
    rentPrice: 2500000,
    status: 'available',
    image: 'https://i.pinimg.com/1200x/ea/98/a7/ea98a74048e3ab2b686b8f1f97a63f34.jpg',
    location: 'Đỉnh Fansipan, Lào Cai',
    rarity: 'Huyền thoại',
    size: 'large',
    description: 'Trà Cổ Thụ Shan Tuyết Hoàng Gia là một cây trà cổ thụ quý hiếm nhất, được tuyển chọn từ những đỉnh núi cao nhất và được bảo tồn qua hàng nghìn năm lịch sử.',
    // truyền thuyết cho cây này 
    legend: "Từ thuở xa xưa, ở một làng nhỏ ven sông, có một quán trà chỉ mở vào đêm rằm. Người trong làng gọi đó là “Quán Câu Trà” – vì chỉ cần uống một câu trà ở đó, lòng người như được buộc chặt vào điều mình khát khao nhất. Không phải “một chén trà”, mà là “một câu trà” – bởi mỗi lần rót, chủ quán sẽ vừa pha vừa đọc một câu, nghe như lời nguyện, vừa như lời nguyền.Chủ quán là một ông lão tóc bạc, không ai biết tên, chỉ biết ông đến làng vào một đêm bão lớn. Nước trà của ông có màu xanh ngọc, mùi thơm lạ, uống vào ngọt ở đầu lưỡi nhưng ấm tận tim. Người nào được nghe “câu trà” của ông và uống hết chén, thì điều trong lòng sẽ sớm thành sự thật – nhưng đổi lại, một ký ức quý giá sẽ biến mất, như bị trà cuốn đi. Có người dùng câu trà để tìm lại người mình yêu, có người dùng để cầu tài lộc. Nhưng cũng có kẻ, sau khi ước nguyện thành, bỗng trống rỗng vì quên mất lý do mình từng ao ước điều đó. Người ta kể, vào đêm rằm cuối cùng của đời mình, ông lão đã tự rót cho mình một câu trà. Sáng hôm sau, quán biến mất, chỉ còn lại một ấm trà cũ và một tờ giấy ghi câu cuối: “Điều quý giá nhất không phải là ước mơ thành hiện thực, mà là nhớ vì sao ta đã mơ.” Nếu muốn, tôi có thể viết thêm một phiên bản khác theo hướng huyền ảo – kinh dị hoặc tình cảm nhẹ nhàng để mở rộng truyền thuyết này thành cả vòng đời của “câu trà”."
  },
  {
    id: 2,
    name: 'Trà Cổ Thụ Tà Xùa Thiên Cổ',
    age: 2000,
    price: 120000000,
    rentPrice: 3500000,
    status: 'available',
    image: 'https://i.pinimg.com/736x/f8/f1/4a/f8f14ac2e52b2f37db6acbe9b26b8702.jpg',
    location: 'Đỉnh Tà Xùa, Yên Bái',
    rarity: 'Huyền thoại',
    size: 'medium'
  },
  {
    id: 3,
    name: 'Trà Cổ Thụ Hoàng Su Phì',
    age: 800,
    price: 35000000,
    rentPrice: 1200000,
    status: 'rented',
    image: 'https://i.pinimg.com/1200x/c0/3e/fe/c03efedc543c2a972cb2faf38bda98fd.jpg',
    location: 'Hoàng Su Phì, Hà Giang',
    rarity: 'Cực hiếm',
    size: 'small'
  },
  {
    id: 4,
    name: 'Trà Cổ Thụ Mộc Châu Cổ Điển',
    age: 600,
    price: 25000000,
    rentPrice: 800000,
    status: 'available',
    image: 'https://i.pinimg.com/1200x/ea/98/a7/ea98a74048e3ab2b686b8f1f97a63f34.jpg',
    location: 'Cao nguyên Mộc Châu',
    rarity: 'Quý hiếm',
    size: 'medium'
  }
];

const AsymmetricProducts = () => {
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
    };
    return colors[rarity as keyof typeof colors] || 'from-forest-500 to-forest-600';
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
            <span className="text-forest-700 text-sm font-nature font-medium">Bộ sưu tập đặc biệt</span>
            <Crown className="h-4 w-4 text-forest-500 animate-float" />
          </div>
          
          <h2 className="font-elegant font-bold text-forest-900 mb-8">
            <span className="block text-5xl lg:text-7xl">Những Cây Trà</span>
            <span className="block text-4xl lg:text-6xl text-forest-700 mt-2">Huyền Thoại</span>
          </h2>
          
          {/* Decorative divider */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-forest-400 to-transparent rounded-full" />
            <div className="w-3 h-3 bg-forest-400 rounded-full animate-float" />
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-vintage-400 to-transparent rounded-full" />
          </div>
          
          <p className="text-xl text-forest-700 max-w-3xl mx-auto leading-relaxed font-nature">
            Khám phá những cây trà cổ thụ quý hiếm nhất, được tuyển chọn từ những đỉnh núi cao nhất 
            và được bảo tồn qua hàng nghìn năm lịch sử.
          </p>
        </div>

        {/* Asymmetric Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredProducts.map((product, index) => (
            <div
              key={product.id}
              className={`group relative ${getCardSize(product.size)} animate-fade-up`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative h-full bg-vintage-50/90 backdrop-blur-sm rounded-3xl overflow-hidden shadow-wood border border-forest-200/30 hover:shadow-forest transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] wood-grain">
                {/* Image with overlay */}
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className={`w-full object-cover group-hover:scale-110 transition-transform duration-700 ${
                      product.size === 'large' ? 'h-80 lg:h-96' : 'h-64'
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-900/60 via-transparent to-transparent" />
                  
                  {/* Mystical overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-forest-500/20 via-transparent to-vintage-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Badges - Left side */}
                <div className="absolute top-6 left-6 flex flex-col space-y-3 z-10">
                  <div className={`flex items-center space-x-2 px-4 py-2 bg-gradient-to-r ${getRarityColor(product.rarity)} text-white text-sm font-medium rounded-full shadow-lg backdrop-blur-sm`}>
                    <Crown className="h-4 w-4" />
                    <span>{product.rarity}</span>
                  </div>
                  
                  {product.status === 'rented' && (
                    <div className="px-4 py-2 bg-vintage-600 text-white text-sm font-medium rounded-full shadow-lg backdrop-blur-sm">
                      Đã thuê
                    </div>
                  )}
                </div>

                {/* Age badge - Top right corner with better opacity */}
                <div className="absolute top-6 right-6 flex items-center space-x-2 px-4 py-2 bg-vintage-50/85 backdrop-blur-sm rounded-full shadow-lg border border-forest-200/30 z-10">
                  <Clock className="h-4 w-4 text-forest-600" />
                  <span className="text-sm font-nature font-medium text-forest-800">{product.age} năm</span>
                </div>

                                 {/* Content */}
                 <div className="p-8 space-y-6">
                   <h3 className="font-elegant font-bold text-xl text-forest-900 group-hover:text-forest-700 transition-colors duration-300 leading-tight">
                     {product.name}
                   </h3>

                   <div className="flex items-center text-forest-600">
                     <MapPin className="h-5 w-5 mr-2 flex-shrink-0" />
                     <span className="text-sm font-nature truncate">{product.location}</span>
                   </div>

                   {/* Pricing with Creative Layout */}
                   <div className="space-y-4">
                     <div className="flex justify-between items-center p-4 bg-forest-50/50 rounded-2xl border border-forest-200/30">
                       <span className="text-sm text-forest-600 font-nature">Giá sở hữu:</span>
                       <span className="font-bold text-forest-800 font-nature text-sm">
                         {formatPrice(product.price)}
                       </span>
                     </div>
                     <div className="flex justify-between items-center p-4 bg-vintage-100/50 rounded-2xl border border-vintage-200/30">
                       <span className="text-sm text-forest-600 font-nature">Thuê/tháng:</span>
                       <span className="font-semibold text-forest-700 font-nature text-sm">
                         {formatPrice(product.rentPrice)}
                       </span>
                     </div>
                   </div>

                   {/* Details Section - Chỉ hiển thị cho sản phẩm đầu tiên */}
                   {product.id === 1 && (
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
                           {product.description}
                         </p>
                         
                         {/* Additional details */}
                         <div className="grid grid-cols-2 gap-4 text-xs">
                           <div className="bg-white/60 rounded-lg p-3 text-center">
                             <div className="text-amber-700 font-bold mb-1">Tuổi cây</div>
                             <div className="text-amber-800">{product.age} năm</div>
                           </div>
                           <div className="bg-white/60 rounded-lg p-3 text-center">
                             <div className="text-amber-700 font-bold mb-1">Độ cao</div>
                             <div className="text-amber-800">2,800m</div>
                           </div>
                           <div className="bg-white/60 rounded-lg p-3 text-center">
                             <div className="text-amber-700 font-bold mb-1">Loại trà</div>
                             <div className="text-amber-800">Shan Tuyết</div>
                           </div>
                           <div className="bg-white/60 rounded-lg p-3 text-center">
                             <div className="text-amber-700 font-bold mb-1">Trạng thái</div>
                             <div className="text-amber-800 capitalize">{product.status}</div>
                           </div>
                         </div>
                       </div>

                       {/* Truyền thuyết Section */}
                       <div className="bg-gradient-to-br from-purple-50/90 to-indigo-50/90 backdrop-blur-sm rounded-2xl p-6 border border-purple-200/40 animate-fade-up" style={{ animationDelay: '0.5s' }}>
                         {/* Title với icon mystical */}
                         <h4 className="font-bold text-purple-700 mb-4 text-center flex items-center justify-center">
                           <div className="w-2 h-2 bg-purple-400 rounded-full animate-ping mr-3" />
                           <span className="text-lg">Truyền Thuyết Huyền Bí</span>
                           <div className="w-2 h-2 bg-purple-400 rounded-full animate-ping ml-3" />
                         </h4>
                         
                         {/* Legend text với scroll */}
                         <div className="max-h-48 overflow-y-auto custom-scrollbar">
                           <p className="text-purple-800 text-sm leading-relaxed font-medium text-justify">
                             {product.legend}
                           </p>
                         </div>
                         
                         {/* Mystical elements */}
                         <div className="flex justify-center mt-4 space-x-2">
                           <div className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                           <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                           <div className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.3s' }} />
                         </div>
                       </div>
                     </div>
                   )}

                   {/* CTA Button - Fixed text wrapping */}
                   <Link
                     to={`/products/${product.id}`}
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
          <Link to="/products">
            <button className="group relative px-12 py-6 bg-gradient-to-r from-forest-600 to-forest-700 text-white rounded-full hover:from-forest-500 hover:to-forest-600 transition-all duration-300 shadow-forest hover:shadow-2xl hover:scale-105 overflow-hidden">
              <div className="flex items-center space-x-3">
                <TreePine className="h-6 w-6 group-hover:animate-branch-sway flex-shrink-0" />
                <span className="font-nature font-bold text-xl whitespace-nowrap">Khám phá toàn bộ rừng trà</span>
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

export default AsymmetricProducts;