import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Clock, TreePine, Shield, Eye, Star, Crown, Mountain, Leaf } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const ProductDetail = () => {
  const [selectedTab, setSelectedTab] = useState('details');

  // Mock product data
  const product = {
    id: 1,
    name: 'Trà Cổ Thụ Shan Tuyết Hoàng Gia',
    age: 1500,
    height: '8.5m',
    diameter: '85cm',
    price: 85000000,
    rentPrice: 2500000,
    status: 'available',
    location: 'Đỉnh Fansipan, Lào Cai',
    origin: 'Vùng núi Mộc Châu thiêng liêng',
    rarity: 'Huyền thoại',
    images: [
      'https://i.pinimg.com/1200x/19/6c/12/196c120c0ebba026466d7ae73da3947a.jpg',
      'https://i.pinimg.com/1200x/98/85/f3/9885f38dc02d4aad94ffe92bfc728894.jpg',
      'https://images.pexels.com/photos/4753879/pexels-photo-4753879.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Cây trà cổ thụ Shan Tuyết 1500 năm tuổi, được mệnh danh là "Vua của rừng trà". Cây mọc trên đỉnh Fansipan, nơi có độ cao 3.143m so với mực nước biển, trong điều kiện khí hậu khắc nghiệt và sương mù quanh năm.',
    characteristics: [
      'Lá to, dày, có lông trắng mịn như tuyết',
      'Hương thơm đặc trưng, thanh mát như núi rừng',
      'Vị ngọt tự nhiên, hậu ngọt kéo dài',
      'Chịu được khí hậu khắc nghiệt của núi cao',
      'Sức sống mạnh mẽ qua 15 thế kỷ',
      'Được bảo vệ bởi cộng đồng địa phương'
    ],
    careHistory: [
      { date: '2025-01-15', action: 'Kiểm tra sức khỏe', note: 'Cây phát triển tốt, lá xanh mướt, không có dấu hiệu bệnh tật' },
      { date: '2025-01-10', action: 'Bón phân hữu cơ', note: 'Sử dụng phân compost từ lá rừng tự nhiên' },
      { date: '2025-01-05', action: 'Tưới nước', note: 'Sử dụng nước suối núi trong, độ ẩm đất: 70%' },
      { date: '2025-01-01', action: 'Cắt tỉa', note: 'Loại bỏ cành khô, tạo hình cây đẹp tự nhiên' }
    ],
    reviews: [
      {
        id: 1,
        name: 'Nguyễn Văn Minh',
        avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100',
        rating: 5,
        comment: 'Cây thực sự tuyệt vời! Năng lượng từ cây rất mạnh mẽ, mang lại cảm giác bình an cho không gian.',
        date: '2 tuần trước'
      }
    ]
  };

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
    }).format(price);
  };

  const tabs = [
    { id: 'details', label: 'Chi tiết', icon: TreePine },
    { id: 'care', label: 'Lịch sử chăm sóc', icon: Leaf },
    { id: 'reviews', label: 'Đánh giá', icon: Star }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-forest-50 via-moss-50 to-earth-50 pt-20">
      {/* Back button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link 
          to="/products" 
          className="inline-flex items-center space-x-2 text-forest-600 hover:text-forest-700 transition-colors duration-300 group"
        >
          <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform duration-300" />
          <span className="font-medium">Quay lại rừng trà</span>
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Images */}
          <div className="space-y-6">
            <Card variant="forest" className="overflow-hidden">
              <div className="aspect-square relative">
                <img
                  src={product.images[currentImageIndex]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-900/30 to-transparent" />
                
                {/* Rarity badge */}
                <div className="absolute top-6 left-6">
                  <div className="flex items-center space-x-1 px-4 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-full shadow-lg">
                    <Crown className="h-4 w-4" />
                    <span className="font-medium">{product.rarity}</span>
                  </div>
                </div>
              </div>
            </Card>
            
            <div className="grid grid-cols-3 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`aspect-square overflow-hidden rounded-2xl transition-all duration-300 ${
                    currentImageIndex === index 
                      ? 'ring-4 ring-forest-500 scale-105' 
                      : 'hover:scale-105 hover:shadow-lg'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="space-y-8">
            {/* Header */}
            <div>
              <h1 className="text-4xl font-nature font-bold text-forest-900 mb-4">
                {product.name}
              </h1>
              <div className="flex items-center space-x-6 text-forest-700">
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5" />
                  <span className="font-medium">Tuổi: {product.age} năm</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5" />
                  <span>{product.location}</span>
                </div>
              </div>
            </div>

            {/* Specifications */}
            <Card variant="forest" className="p-6">
              <h3 className="font-semibold text-forest-900 mb-4 flex items-center">
                <Mountain className="h-5 w-5 mr-2" />
                Thông số kỹ thuật
              </h3>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <span className="text-sm text-forest-600">Chiều cao:</span>
                  <div className="font-semibold text-forest-900">{product.height}</div>
                </div>
                <div>
                  <span className="text-sm text-forest-600">Đường kính thân:</span>
                  <div className="font-semibold text-forest-900">{product.diameter}</div>
                </div>
                <div className="col-span-2">
                  <span className="text-sm text-forest-600">Nguồn gốc:</span>
                  <div className="font-semibold text-forest-900">{product.origin}</div>
                </div>
              </div>
            </Card>

            {/* Pricing */}
            <Card variant="earth" className="p-8">
              <h3 className="font-nature font-bold text-xl text-earth-900 mb-6">Thông tin giá cả</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-white/50 rounded-xl">
                  <span className="text-earth-700">Giá sở hữu:</span>
                  <span className="text-3xl font-bold text-earth-900">
                    {formatPrice(product.price)}
                  </span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white/50 rounded-xl">
                  <span className="text-earth-700">Giá thuê/tháng:</span>
                  <span className="text-2xl font-semibold text-moss-700">
                    {formatPrice(product.rentPrice)}
                  </span>
                </div>
              </div>
            </Card>

            {/* Action buttons */}
            <div className="space-y-4">
              <Button size="xl" className="w-full" variant="forest">
                Sở hữu ngay
              </Button>
              <div>
              <Link to={`/tour/${product.id}`}>
                <Button size="xl" variant="outline" className="w-full border-moss-600 text-moss-600 hover:bg-moss-600">
                  Đăng ký thuê
                </Button>
              </Link>
              </div>
              <Button size="xl" variant="mountain" className="w-full bg-forest-600 text-white hover:bg-forest-700 hover:text-white hover:border-forest-700 border-forest-600 border-2">
               <p className=''>Liên hệ tư vấn</p> 
              </Button>
            </div>

            {/* Features */}
            <div className="flex items-center justify-center space-x-8 text-sm text-forest-600 pt-6 border-t border-forest-200">
              <div className="flex items-center space-x-2">
                <Shield className="h-4 w-4 text-forest-500" />
                <span>Bảo hiểm 100%</span>
              </div>
              <div className="flex items-center space-x-2">
                <Eye className="h-4 w-4 text-forest-500" />
                <span>Theo dõi 24/7</span>
              </div>
              <div className="flex items-center space-x-2">
                <Leaf className="h-4 w-4 text-forest-500" />
                <span>Chăm sóc chuyên nghiệp</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-20">
          <Card variant="forest" className="overflow-hidden">
            {/* Tab navigation */}
            <div className="border-b border-forest-200">
              <nav className="flex space-x-8 px-8">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setSelectedTab(tab.id)}
                    className={`flex items-center space-x-2 py-4 px-2 border-b-2 font-medium text-sm transition-colors duration-300 ${
                      selectedTab === tab.id
                        ? 'border-forest-600 text-forest-600'
                        : 'border-transparent text-forest-500 hover:text-forest-700 hover:border-forest-300'
                    }`}
                  >
                    <tab.icon className="h-4 w-4" />
                    <span>{tab.label}</span>
                  </button>
                ))}
              </nav>
            </div>

            {/* Tab content */}
            <div className="p-8">
              {selectedTab === 'details' && (
                <div className="space-y-8">
                  <div>
                    <h3 className="font-nature font-bold text-xl text-forest-900 mb-4">Mô tả chi tiết</h3>
                    <p className="text-forest-700 leading-relaxed">{product.description}</p>
                  </div>
                  <div>
                    <h3 className="font-nature font-bold text-xl text-forest-900 mb-4">Đặc điểm nổi bật</h3>
                    <ul className="space-y-3">
                      {product.characteristics.map((char, index) => (
                        <li key={index} className="flex items-start text-forest-700">
                          <span className="w-2 h-2 bg-forest-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                          {char}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {selectedTab === 'care' && (
                <div>
                  <h3 className="font-nature font-bold text-xl text-forest-900 mb-6">Lịch sử chăm sóc</h3>
                  <div className="space-y-4">
                    {product.careHistory.map((record, index) => (
                      <Card key={index} variant="default" className="p-6">
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <div className="font-semibold text-forest-900 mb-1">{record.action}</div>
                            <div className="text-forest-700">{record.note}</div>
                          </div>
                          <div className="text-sm text-forest-600 ml-4">{record.date}</div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              )}

              {selectedTab === 'reviews' && (
                <div>
                  <h3 className="font-nature font-bold text-xl text-forest-900 mb-6">Đánh giá từ khách hàng</h3>
                  <div className="space-y-6">
                    {product.reviews.map((review) => (
                      <Card key={review.id} variant="default" className="p-6">
                        <div className="flex items-start space-x-4">
                          <img
                            src={review.avatar}
                            alt={review.name}
                            className="w-12 h-12 rounded-full border-2 border-forest-200"
                          />
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <span className="font-semibold text-forest-900">{review.name}</span>
                              <div className="flex">
                                {[...Array(review.rating)].map((_, i) => (
                                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                                ))}
                              </div>
                            </div>
                            <p className="text-forest-700 mb-2">{review.comment}</p>
                            <div className="text-sm text-forest-600">{review.date}</div>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;