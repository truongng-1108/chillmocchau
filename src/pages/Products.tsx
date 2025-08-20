import { useState } from 'react';
import { Search, Filter, TreePine, Mountain } from 'lucide-react';
import ProductCard from '../components/products/ProductCard';
import ProductFilter from '../components/products/ProductFilter';

const products = [
  {
    id: 1,
    name: 'Trà Cổ Thụ Shan Tuyết Hoàng Gia',
    age: 1500,
    price: 85000000,
    rentPrice: 2500000,
    status: 'available' as const,
    image: 'https://i.pinimg.com/1200x/ea/98/a7/ea98a74048e3ab2b686b8f1f97a63f34.jpg',
    location: 'Đỉnh Fansipan, Lào Cai',
    category: 'shan-tuyet',
    rarity: 'Huyền thoại'
  },
  {
    id: 2,
    name: 'Trà Cổ Thụ Tà Xùa Thiên Cổ',
    age: 2000,
    price: 120000000,
    rentPrice: 3500000,
    status: 'available' as const,
    image: 'https://i.pinimg.com/736x/f8/f1/4a/f8f14ac2e52b2f37db6acbe9b26b8702.jpg',
    location: 'Đỉnh Tà Xùa, Yên Bái',
    category: 'ta-xua',
    rarity: 'Huyền thoại'
  },
  {
    id: 3,
    name: 'Trà Cổ Thụ Hoàng Su Phì',
    age: 800,
    price: 35000000,
    rentPrice: 1200000,
    status: 'rented' as const,
    image: 'https://i.pinimg.com/1200x/c0/3e/fe/c03efedc543c2a972cb2faf38bda98fd.jpg',
    location: 'Hoàng Su Phì, Hà Giang',
    category: 'hoang-su-phi',
    rarity: 'Cực hiếm'
  },
  {
    id: 4,
    name: 'Trà Cổ Thụ Mộc Châu Cổ Điển',
    age: 600,
    price: 25000000,
    rentPrice: 800000,
    status: 'available' as const,
    image: 'https://i.pinimg.com/1200x/ea/98/a7/ea98a74048e3ab2b686b8f1f97a63f34.jpg',
    location: 'Cao nguyên Mộc Châu, Sơn La',
    category: 'moc-chau',
    rarity: 'Quý hiếm'
  },
  {
    id: 5,
    name: 'Trà Cổ Thụ Tân Cương Hoàng Kim',
    age: 1000,
    price: 55000000,
    rentPrice: 1800000,
    status: 'sold' as const,
    image: 'https://i.pinimg.com/736x/f8/f1/4a/f8f14ac2e52b2f37db6acbe9b26b8702.jpg',
    location: 'Tân Cương, Thái Nguyên',
    category: 'tan-cuong',
    rarity: 'Cực hiếm'
  },
  {
    id: 6,
    name: 'Trà Cổ Thụ Phú Thọ Linh Thiêng',
    age: 700,
    price: 30000000,
    rentPrice: 1000000,
    status: 'available' as const,
    image: 'https://i.pinimg.com/1200x/c0/3e/fe/c03efedc543c2a972cb2faf38bda98fd.jpg',
    location: 'Đất Tổ Phú Thọ',
    category: 'phu-tho',
    rarity: 'Quý hiếm'
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
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
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
    
    return matchesSearch && matchesCategory && matchesStatus && matchesLocation && matchesAge && matchesPrice;
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
            <span className="text-forest-200 text-sm font-medium">Bộ sưu tập đặc biệt</span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-nature font-bold text-white mb-6">
            Rừng Trà Cổ Thụ
            <span className="block text-forest-300">Huyền Thoại</span>
          </h1>
          <p className="text-xl text-forest-200 max-w-3xl mx-auto">
            Khám phá {products.length} cây trà cổ thụ quý hiếm từ những đỉnh núi cao nhất Việt Nam
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
              placeholder="Tìm kiếm cây trà huyền thoại..."
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
            <ProductFilter filters={filters} onFiltersChange={setFilters} />
          </div>
        )}

        {/* Results */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <p className="text-forest-700 font-medium">
              Hiển thị {filteredProducts.length} cây trà cổ thụ
            </p>
            <div className="flex items-center space-x-2 text-sm text-forest-600">
              <Mountain className="h-4 w-4" />
              <span>Từ những đỉnh núi cao nhất</span>
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
              Không tìm thấy cây trà phù hợp
            </h3>
            <p className="text-forest-600 mb-8 max-w-md mx-auto">
              Hãy thử điều chỉnh bộ lọc hoặc từ khóa tìm kiếm để khám phá những cây trà cổ thụ khác.
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