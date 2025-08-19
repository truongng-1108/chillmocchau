import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, TreePine, Star, Crown } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  age: number;
  price: number;
  rentPrice: number;
  status: 'available' | 'rented' | 'sold';
  image: string;
  location: string;
  featured?: boolean;
  rarity?: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
    }).format(price);
  };

  const getStatusBadge = (status: string) => {
    const badges = {
      available: { text: 'Có sẵn', class: 'bg-gradient-to-r from-forest-500 to-forest-600 text-white' },
      rented: { text: 'Đã thuê', class: 'bg-gradient-to-r from-vintage-500 to-vintage-600 text-white' },
      sold: { text: 'Đã bán', class: 'bg-gradient-to-r from-mountain-500 to-mountain-600 text-white' },
    };
    const badge = badges[status as keyof typeof badges];
    return (
      <span className={`px-3 py-1 text-xs font-medium rounded-full ${badge.class} shadow-lg`}>
        {badge.text}
      </span>
    );
  };

  const getRarityColor = (rarity?: string) => {
    const colors = {
      'Huyền thoại': 'from-yellow-500 to-orange-500',
      'Cực hiếm': 'from-purple-500 to-pink-500',
      'Quý hiếm': 'from-blue-500 to-indigo-500',
    };
    return colors[rarity as keyof typeof colors] || 'from-forest-500 to-forest-600';
  };

  return (
    <div className="group relative bg-vintage-50/90 backdrop-blur-sm rounded-3xl overflow-hidden shadow-wood border border-forest-200/30 hover:shadow-forest transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] wood-grain">
      <div className="relative">
        {/* Image */}
        <div className="relative overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-900/60 via-transparent to-transparent" />
        </div>

        {/* Badges - Left side */}
        <div className="absolute top-4 left-4 flex flex-col space-y-2 z-10">
          {product.featured && (
            <div className="flex items-center space-x-1 px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-medium rounded-full shadow-lg">
              <Crown className="h-3 w-3" />
              <span>Nổi bật</span>
            </div>
          )}
          {product.rarity && (
            <div className={`px-3 py-1 bg-gradient-to-r ${getRarityColor(product.rarity)} text-white text-xs font-medium rounded-full shadow-lg`}>
              {product.rarity}
            </div>
          )}
        </div>

        {/* Status badge - Top right */}
        <div className="absolute top-4 right-4 z-10">
          {getStatusBadge(product.status)}
        </div>

        {/* Age badge - Top right corner, below status */}
        <div className="absolute top-16 right-4 flex items-center space-x-1 px-3 py-1 bg-vintage-50/80 backdrop-blur-sm rounded-full shadow-lg z-10 border border-forest-200/30">
          <Clock className="h-3 w-3 text-forest-600" />
          <span className="text-xs font-medium text-forest-800">{product.age} năm</span>
        </div>
      </div>

      <div className="p-6 space-y-4">
        {/* Title - Fixed line height */}
        <h3 className="font-nature font-semibold text-lg text-forest-900 group-hover:text-forest-700 transition-colors duration-300 leading-tight">
          {product.name}
        </h3>

        {/* Location - Fixed spacing */}
        <div className="flex items-center text-forest-600">
          <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
          <span className="text-sm truncate">{product.location}</span>
        </div>

        {/* Pricing - Improved layout */}
        <div className="space-y-3">
          <div className="flex justify-between items-center p-3 bg-forest-50/50 rounded-xl">
            <span className="text-sm text-forest-600">Giá bán:</span>
            <span className="font-bold text-forest-800 text-sm">
              {formatPrice(product.price)}
            </span>
          </div>
          <div className="flex justify-between items-center p-3 bg-vintage-100/50 rounded-xl">
            <span className="text-sm text-forest-600">Thuê/tháng:</span>
            <span className="font-semibold text-forest-700 text-sm">
              {formatPrice(product.rentPrice)}
            </span>
          </div>
        </div>

        {/* Rating */}
        <div className="flex items-center space-x-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
          ))}
          <span className="text-sm text-forest-600 ml-2">(4.9)</span>
        </div>

        {/* CTA Button - Fixed text wrapping */}
        <Link
          to={`/products/${product.id}`}
          className="block w-full text-center bg-gradient-to-r from-forest-600 to-forest-700 text-white py-3 rounded-2xl hover:from-forest-500 hover:to-forest-600 transition-all duration-300 font-medium shadow-forest hover:shadow-xl hover:scale-105 group-hover:shadow-2xl relative overflow-hidden"
        >
          <span className="flex items-center justify-center space-x-2">
            <TreePine className="h-4 w-4 flex-shrink-0" />
            <span className="whitespace-nowrap">Khám phá chi tiết</span>
          </span>
          
          {/* Shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        </Link>
        
        {/* Rent Button */}
        {product.status === 'available' && (
          <Link
            to={`/tree-rental/${product.id}`}
            className="block w-full text-center bg-gradient-to-r from-vintage-600 to-vintage-700 text-white py-3 rounded-2xl hover:from-vintage-500 hover:to-vintage-600 transition-all duration-300 font-medium shadow-vintage hover:shadow-xl hover:scale-105 relative overflow-hidden mt-3"
          >
            <span className="flex items-center justify-center space-x-2">
              <Crown className="h-4 w-4 flex-shrink-0" />
              <span className="whitespace-nowrap">Đăng ký thuê</span>
            </span>
            
            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProductCard;