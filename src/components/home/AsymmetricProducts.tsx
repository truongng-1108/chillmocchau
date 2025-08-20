import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TreePine, Crown, MapPin, Clock } from 'lucide-react';

type Item = {
  id: number;
  name: string;
  age?: number;          // giữ để không vỡ type cũ (không dùng nữa)
  meta: string;          // NEW: hiển thị ở badge Clock
  price: number;
  rentPrice: number;
  status: 'available' | 'rented';
  image: string;
  location: string;
  rarity: 'Theo mùa' | 'Cực hot' | 'Bản địa';
  size: 'large' | 'medium' | 'small';
  description?: string;
  legend?: string;
};

const featuredProducts: Item[] = [
  {
    id: 1,
    name: 'Homestay View Đồi Chè – Combo BBQ & Ảnh Nghệ Thuật',
    meta: '2 ngày 1 đêm',
    price: 1800000,            // giá gói từ
    rentPrice: 350000,         // phụ thu add-on từ
    status: 'available',
    image: 'https://i.pinimg.com/1200x/6f/8a/8d/6f8a8dfdbad6dd40a46b7d8c6c77f9a1.jpg',
    location: 'Bản Áng, Mộc Châu',
    rarity: 'Theo mùa',
    size: 'large',
    description:
      'Gói lưu trú ấm cúng nhìn thẳng đồi chè, kèm BBQ tối và set chụp ảnh trang phục dân tộc tại vườn.',
    legend:
      'Tương truyền mỗi sớm ở đồi chè có “làn sương biết kể chuyện”: ai chạm tay vào lá còn ướt sẽ nghe thì thầm tên người mình thương. Khách ở đêm—nghe gió, nghe chè, nghe lòng dịu lại.'
  },
  {
    id: 2,
    name: 'Tour Săn Mây Bình Minh – Tà Xùa ↔ Mộc Châu',
    meta: '04:00–09:00',
    price: 690000,
    rentPrice: 120000, // thuê thêm áo ấm/đồ nghề
    status: 'available',
    image: 'https://i.pinimg.com/736x/69/5b/7d/695b7d1e6f1b1f2b2a6a5fd2c0e7a2ad.jpg',
    location: 'Điểm hẹn: trung tâm Mộc Châu',
    rarity: 'Cực hot',
    size: 'medium'
  },
  {
    id: 3,
    name: 'Thuê Xe Máy + Bộ Camping – Cứu Hộ 24/7',
    meta: 'Thuê theo ngày',
    price: 180000,     // giá thuê/ngày
    rentPrice: 50000,  // phụ kiện từ
    status: 'rented',  // đang hết xe dòng hot
    image: 'https://i.pinimg.com/1200x/c0/3e/fe/c03efedc543c2a972cb2faf38bda98fd.jpg',
    location: 'Thảo Nguyên Mộc Châu',
    rarity: 'Bản địa',
    size: 'small'
  },
  {
    id: 4,
    name: 'Vé Lễ Hội Hoa Mận + Shuttle Homestay',
    meta: 'Cuối tháng 1 – 2',
    price: 250000,
    rentPrice: 0,
    status: 'available',
    image: 'https://i.pinimg.com/1200x/ea/98/a7/ea98a74048e3ab2b686b8f1f97a63f34.jpg',
    location: 'Khu lễ hội Nà Ka – Mộc Châu',
    rarity: 'Theo mùa',
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

  const getRarityColor = (rarity: Item['rarity']) => {
    const colors: Record<Item['rarity'], string> = {
      'Theo mùa': 'from-emerald-500 to-lime-500',
      'Cực hot': 'from-rose-500 to-orange-500',
      'Bản địa': 'from-sky-500 to-indigo-500',
    };
    return colors[rarity] || 'from-forest-500 to-forest-600';
  };

  const getCardSize = (size: Item['size']) => {
    switch (size) {
      case 'large':
        return 'lg:col-span-2 lg:row-span-2';
      case 'medium':
      case 'small':
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
            <span className="text-forest-700 text-sm font-nature font-medium">Trải nghiệm nổi bật</span>
            <Crown className="h-4 w-4 text-forest-500 animate-float" />
          </div>

          <h2 className="font-elegant font-bold text-forest-900 mb-8">
            <span className="block text-5xl lg:text-7xl">CHILL Mộc Châu</span>
            <span className="block text-4xl lg:text-6xl text-forest-700 mt-2">Bản địa – Mùa vụ – Rõ ràng</span>
          </h2>

          {/* Decorative divider */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-forest-400 to-transparent rounded-full" />
            <div className="w-3 h-3 bg-forest-400 rounded-full animate-float" />
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-vintage-400 to-transparent rounded-full" />
          </div>

          <p className="text-xl text-forest-700 max-w-3xl mx-auto leading-relaxed font-nature">
            Từ homestay view đồi chè, tour săn mây, thuê xe vi vu đến vé lễ hội – mọi dịch vụ được
            kết nối mượt mà, chính sách minh bạch, gợi ý theo mùa & khoảng cách.
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
                      Tạm hết chỗ
                    </div>
                  )}
                </div>

                {/* Meta badge (replaces "X năm") */}
                <div className="absolute top-6 right-6 flex items-center space-x-2 px-4 py-2 bg-vintage-50/85 backdrop-blur-sm rounded-full shadow-lg border border-forest-200/30 z-10">
                  <Clock className="h-4 w-4 text-forest-600" />
                  <span className="text-sm font-nature font-medium text-forest-800">{product.meta}</span>
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
                      <span className="text-sm text-forest-600 font-nature">Giá từ:</span>
                      <span className="font-bold text-forest-800 font-nature text-sm">
                        {formatPrice(product.price)}
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-vintage-100/50 rounded-2xl border border-vintage-200/30">
                      <span className="text-sm text-forest-600 font-nature">Add‑on/Phụ thu từ:</span>
                      <span className="font-semibold text-forest-700 font-nature text-sm">
                        {formatPrice(product.rentPrice)}
                      </span>
                    </div>
                  </div>

                  {/* Details Section - chỉ hiển thị cho item đầu */}
                  {product.id === 1 && (
                    <div className="space-y-6">
                      <div
                        className="bg-gradient-to-br from-amber-50/80 to-vintage-50/80 backdrop-blur-sm rounded-2xl p-6 border border-amber-200/30 animate-fade-up"
                        style={{ animationDelay: '0.3s' }}
                      >
                        <h4 className="font-bold text-amber-700 mb-4 text-center flex items-center justify-center">
                          <Crown className="h-4 w-4 text-amber-600 mr-2 animate-pulse" />
                          <span className="text-lg">Thông tin chi tiết</span>
                          <Crown className="h-4 w-4 text-amber-600 ml-2 animate-pulse" />
                        </h4>

                        <p className="text-amber-800 text-sm leading-relaxed font-medium mb-4 text-center">
                          {product.description}
                        </p>

                        <div className="grid grid-cols-2 gap-4 text-xs">
                          <div className="bg-white/60 rounded-lg p-3 text-center">
                            <div className="text-amber-700 font-bold mb-1">Thời lượng</div>
                            <div className="text-amber-800">{product.meta}</div>
                          </div>
                          <div className="bg-white/60 rounded-lg p-3 text-center">
                            <div className="text-amber-700 font-bold mb-1">Khu vực</div>
                            <div className="text-amber-800">{product.location}</div>
                          </div>
                          <div className="bg-white/60 rounded-lg p-3 text-center">
                            <div className="text-amber-700 font-bold mb-1">Phân loại</div>
                            <div className="text-amber-800">{product.rarity}</div>
                          </div>
                          <div className="bg-white/60 rounded-lg p-3 text-center">
                            <div className="text-amber-700 font-bold mb-1">Trạng thái</div>
                            <div className="text-amber-800 capitalize">
                              {product.status === 'available' ? 'Còn chỗ' : 'Tạm hết chỗ'}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Truyền thuyết/Không khí Mộc Châu */}
                      <div
                        className="bg-gradient-to-br from-purple-50/90 to-indigo-50/90 backdrop-blur-sm rounded-2xl p-6 border border-purple-200/40 animate-fade-up"
                        style={{ animationDelay: '0.5s' }}
                      >
                        <h4 className="font-bold text-purple-700 mb-4 text-center flex items-center justify-center">
                          <div className="w-2 h-2 bg-purple-400 rounded-full animate-ping mr-3" />
                          <span className="text-lg">Không khí Mộc Châu</span>
                          <div className="w-2 h-2 bg-purple-400 rounded-full animate-ping ml-3" />
                        </h4>
                        <div className="max-h-48 overflow-y-auto custom-scrollbar">
                          <p className="text-purple-800 text-sm leading-relaxed font-medium text-justify">
                            {product.legend}
                          </p>
                        </div>
                        <div className="flex justify-center mt-4 space-x-2">
                          <div className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                          <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                          <div className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.3s' }} />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* CTA Button */}
                  <Link
                    to={`/products/${product.id}`}
                    className="block w-full text-center bg-gradient-to-r from-forest-600 to-forest-700 text-white py-4 rounded-2xl hover:from-forest-500 hover:to-forest-600 transition-all duration-300 font-nature font-medium shadow-forest hover:shadow-xl hover:scale-105 group-hover:shadow-2xl relative overflow-hidden"
                  >
                    <div className="flex items-center justify-center space-x-2">
                      <TreePine className="h-5 w-5 flex-shrink-0" />
                      <span className="whitespace-nowrap">Khám phá chi tiết</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300 flex-shrink-0" />
                    </div>
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
                <span className="font-nature font-bold text-xl whitespace-nowrap">Xem tất cả trải nghiệm</span>
                <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform duration-300 flex-shrink-0" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AsymmetricProducts;
