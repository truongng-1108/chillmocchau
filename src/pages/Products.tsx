import { useState } from 'react';
import { Search, Filter, TreePine, Mountain } from 'lucide-react';
import ProductCard from '../components/products/ProductCard';
import ProductFilter from '../components/products/ProductFilter';

const products = [
  {
    id: 1,
    name: 'Homestay View Đồi Chè + BBQ Tối',
    age: 2, // coi như 2N1Đ
    price: 1800000,
    rentPrice: 350000, // add-on từ
    status: 'available' as const,
    image: 'https://i.pinimg.com/1200x/98/85/f3/9885f38dc02d4aad94ffe92bfc728894.jpg',
    location: 'Bản Áng, Mộc Châu',
    category: 'stay',
    rarity: 'Theo mùa'
  },
  {
    id: 2,
    name: 'Tour Săn Mây Bình Minh Tà Xùa',
    age: 5, // 5 giờ
    price: 690000,
    rentPrice: 120000, // thuê áo ấm/phụ kiện
    status: 'available' as const,
    image: 'https://i.pinimg.com/1200x/ea/98/a7/ea98a74048e3ab2b686b8f1f97a63f34.jpg',
    location: 'Điểm hẹn trung tâm Mộc Châu',
    category: 'tour',
    rarity: 'Cực hot'
  },
  {
    id: 3,
    name: 'Thuê Xe Máy + Bộ Camping (Cứu hộ 24/7)',
    age: 1, // 1 ngày
    price: 180000,
    rentPrice: 50000, // phụ kiện từ
    status: 'rented' as const, // tạm hết dòng xe hot
    image: 'https://i.pinimg.com/1200x/c0/3e/fe/c03efedc543c2a972cb2faf38bda98fd.jpg',
    location: 'Thảo nguyên Mộc Châu',
    category: 'rentals',
    rarity: 'Bản địa'
  },
  {
    id: 4,
    name: 'Vé Lễ Hội Hoa Mận + Shuttle Homestay',
    age: 1, // 1 ngày
    price: 250000,
    rentPrice: 0,
    status: 'available' as const,
    image: 'https://i.pinimg.com/1200x/ea/98/a7/ea98a74048e3ab2b686b8f1f97a63f34.jpg',
    location: 'Thung lũng Nà Ka, Mộc Châu',
    category: 'event',
    rarity: 'Theo mùa'
  },
  {
    id: 5,
    name: 'Đặt Bàn Acoustic Night + Trang Trí Sinh Nhật',
    age: 3, // 3 giờ
    price: 300000, // set từ
    rentPrice: 0,
    status: 'sold' as const, // sold-out suất tối nay
    image: 'https://i.pinimg.com/736x/f8/f1/4a/f8f14ac2e52b2f37db6acbe9b26b8702.jpg',
    location: 'Khu trung tâm Mộc Châu',
    category: 'food',
    rarity: 'Cực hot'
  },
  {
    id: 6,
    name: 'Đặc Sản Theo Mùa: Mận/Chè/Dâu – Ship Toàn Quốc',
    age: 0, // đơn hàng
    price: 199000, // combo nhỏ từ
    rentPrice: 30000, // phí gói/ship phụ
    status: 'available' as const,
    image: 'https://i.pinimg.com/1200x/98/85/f3/9885f38dc02d4aad94ffe92bfc728894.jpg',
    location: 'Kho đối tác Mộc Châu',
    category: 'specialty',
    rarity: 'Bản địa'
  }
];

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilter, setShowFilter] = useState(false);
  const [filters, setFilters] = useState({
    category: '',
    ageRange: '',
    priceRange: '',
    status: '',
    location: ''
  });

  const filteredProducts = products.filter(product => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.location.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory = !filters.category || product.category === filters.category;
    const matchesStatus = !filters.status || product.status === filters.status;
    const matchesLocation = !filters.location || product.location.includes(filters.location);

    let matchesAge = true;
    if (filters.ageRange) {
      const [min, max] = filters.ageRange.split('-').map(Number);
      matchesAge = product.age >= min && (max ? product.age <= max : true);
    }

    let matchesPrice = true;
    if (filters.priceRange) {
      const [min, max] = filters.priceRange.split('-').map(Number);
      matchesPrice = product.price >= min && (max ? product.price <= max : true);
    }

    return (
      matchesSearch &&
      matchesCategory &&
      matchesStatus &&
      matchesLocation &&
      matchesAge &&
      matchesPrice
    );
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-forest-50 via-moss-50 to-earth-50 pt-20">
      {/* Hero section */}
      <div className="relative py-20 bg-gradient-to-br from-forest-900 via-mountain-900 to-forest-800 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 text-6xl opacity-10 animate-sway">🌲</div>
          <div className="absolute bottom-10 right-10 text-5xl opacity-10 animate-float">🏔️</div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-forest-800/50 backdrop-blur-sm rounded-full mb-6 border border-forest-600/30">
            <TreePine className="h-4 w-4 text-forest-400" />
            <span className="text-forest-200 text-sm font-medium">Danh mục trải nghiệm</span>
          </div>

          <h1 className="text-4xl lg:text-6xl font-nature font-bold text-white mb-6">
            CHILL Mộc Châu
            <span className="block text-forest-300">Bản Địa – Mùa Vụ – Rõ Ràng</span>
          </h1>
          <p className="text-xl text-forest-200 max-w-3xl mx-auto">
            Khám phá {products.length} trải nghiệm nổi bật: lưu trú, tour/hoạt động, ăn uống, đặc sản, thuê xe và vé sự kiện.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filter */}
        <div className="mb-12 flex flex-col lg:flex-row gap-6">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-forest-400" />
            <input
              type="text"
              placeholder="Tìm kiếm trải nghiệm (homestay, tour, vé, thuê xe, ẩm thực...)"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white/90 backdrop-blur-sm border border-forest-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-forest-500 focus:border-transparent shadow-lg text-forest-800 placeholder-forest-500"
            />
          </div>
          <button
            onClick={() => setShowFilter(!showFilter)}
            className="flex items-center space-x-2 px-6 py-4 bg-gradient-to-r from-forest-600 to-moss-600 text-white rounded-2xl hover:from-forest-500 hover:to-moss-500 transition-all duration-300 shadow-forest hover:shadow-xl"
          >
            <Filter className="h-5 w-5" />
            <span className="font-medium">Bộ lọc nâng cao</span>
          </button>
        </div>

        {/* Filter Panel */}
        {showFilter && (
          <div className="mb-12 animate-fade-up">
            {/* Giữ nguyên component, field ageRange ~= thời lượng; category như trên */}
            <ProductFilter filters={filters} onFiltersChange={setFilters} />
          </div>
        )}

        {/* Results */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <p className="text-forest-700 font-medium">
              Hiển thị {filteredProducts.length} trải nghiệm
            </p>
            <div className="flex items-center space-x-2 text-sm text-forest-600">
              <Mountain className="h-4 w-4" />
              <span>Gợi ý theo mùa & địa điểm gần</span>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className="animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* Empty state */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-6">🌲</div>
            <h3 className="text-2xl font-nature font-bold text-forest-800 mb-4">
              Không tìm thấy trải nghiệm phù hợp
            </h3>
            <p className="text-forest-600 mb-8 max-w-md mx-auto">
              Hãy điều chỉnh bộ lọc hoặc từ khóa để khám phá thêm homestay, tour, vé sự kiện, thuê xe hay đặc sản.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setFilters({
                  category: '',
                  ageRange: '',
                  priceRange: '',
                  status: '',
                  location: ''
                });
              }}
              className="px-6 py-3 bg-gradient-to-r from-forest-600 to-moss-600 text-white rounded-2xl hover:from-forest-500 hover:to-moss-500 transition-all duration-300 font-medium"
            >
              Xóa bộ lọc
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
