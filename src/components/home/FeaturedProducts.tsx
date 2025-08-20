import { Link } from 'react-router-dom';
import { ArrowRight, TreePine } from 'lucide-react';
import ProductCard from '../products/ProductCard';
import Button from '../ui/Button';

const featuredProducts = [
  {
    id: 1,
    name: 'Trà Cổ Thụ Shan Tuyết',
    age: 800,
    price: 25000000,
    rentPrice: 800000,
    status: 'available',
    image: 'https://i.pinimg.com/1200x/ea/98/a7/ea98a74048e3ab2b686b8f1f97a63f34.jpg',
    location: 'Mộc Châu, Lào Cai',
    featured: true,
    rarity: 'Cực hiếm'
  },
  {
    id: 2,
    name: 'Trà Cổ Thụ Tà Xùa',
    age: 1200,
    price: 45000000,
    rentPrice: 1200000,
    status: 'available',
    image: 'https://i.pinimg.com/736x/f8/f1/4a/f8f14ac2e52b2f37db6acbe9b26b8702.jpg',
    location: 'Đỉnh Tà Xùa, Yên Bái',
    featured: true,
    rarity: 'Huyền thoại'
  },
  {
    id: 3,
    name: 'Trà Cổ Thụ Hoàng Su Phì',
    age: 600,
    price: 18000000,
    rentPrice: 600000,
    status: 'rented',
    image: 'https://i.pinimg.com/1200x/c0/3e/fe/c03efedc543c2a972cb2faf38bda98fd.jpg',
    location: 'Hoàng Su Phì, Hà Giang',
    featured: true,
    rarity: 'Quý hiếm'
  },
];

const FeaturedProducts = () => {
  return (
    <section className="relative py-24 bg-gradient-to-br from-white via-forest-50/30 to-moss-50/30 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 forest-texture opacity-20" />
      <div className="absolute top-20 left-10 text-6xl opacity-10 animate-sway">🌲</div>
      <div className="absolute bottom-20 right-10 text-4xl opacity-15 animate-float">🍃</div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-forest-100 rounded-full mb-6">
            <TreePine className="h-4 w-4 text-forest-600" />
            <span className="text-forest-700 text-sm font-medium">Bộ sưu tập đặc biệt</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-nature font-bold text-forest-900 mb-6">
            Những Cây Trà
            <span className="block text-moss-700">Huyền Thoại</span>
          </h2>
          <p className="text-xl text-forest-700 max-w-3xl mx-auto leading-relaxed">
            Khám phá những cây trà cổ thụ quý hiếm nhất, được tuyển chọn từ những đỉnh núi cao nhất 
            và được bảo tồn qua hàng nghìn năm lịch sử.
          </p>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
          {featuredProducts.map((product, index) => (
            <div
              key={product.id}
              className="animate-fade-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <ProductCard product={{ 
                ...product, 
                status: product.status as "available" | "rented" | "sold" 
              }} />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link to="/products">
            <Button size="xl" icon={ArrowRight} variant="forest">
              Khám phá toàn bộ rừng trà
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;