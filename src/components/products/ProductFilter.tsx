import { TreePine, Mountain, Filter } from 'lucide-react';
import Card from '../ui/Card';

interface FilterProps {
  filters: {
    category: string;
    ageRange: string;
    priceRange: string;
    status: string;
    location: string;
  };
  onFiltersChange: (filters: {
    category: string;
    ageRange: string;
    priceRange: string;
    status: string;
    location: string;
  }) => void;
}

const ProductFilter: React.FC<FilterProps> = ({ filters, onFiltersChange }) => {
  const handleFilterChange = (key: string, value: string) => {
    onFiltersChange({
      ...filters,
      [key]: value
    });
  };

  const categories = [
    { value: '', label: 'Tất cả loại cây', icon: '🌲' },
    { value: 'shan-tuyet', label: 'Shan Tuyết', icon: '❄️' },
    { value: 'ta-xua', label: 'Tà Xùa', icon: '🏔️' },
    { value: 'hoang-su-phi', label: 'Hoàng Su Phì', icon: '🌿' },
    { value: 'moc-chau', label: 'Mộc Châu', icon: '🍃' },
    { value: 'tan-cuong', label: 'Tân Cương', icon: '🌱' },
    { value: 'phu-tho', label: 'Phú Thọ', icon: '🌳' }
  ];

  const ageRanges = [
    { value: '', label: 'Tất cả tuổi cây' },
    { value: '0-500', label: 'Dưới 500 năm' },
    { value: '500-800', label: '500-800 năm' },
    { value: '800-1000', label: '800-1000 năm' },
    { value: '1000-1500', label: '1000-1500 năm' },
    { value: '1500', label: 'Trên 1500 năm (Huyền thoại)' }
  ];

  const priceRanges = [
    { value: '', label: 'Tất cả mức giá' },
    { value: '0-30000000', label: 'Dưới 30 triệu' },
    { value: '30000000-50000000', label: '30-50 triệu' },
    { value: '50000000-80000000', label: '50-80 triệu' },
    { value: '80000000', label: 'Trên 80 triệu' }
  ];

  const statuses = [
    { value: '', label: 'Tất cả trạng thái' },
    { value: 'available', label: 'Có sẵn', color: 'text-forest-600' },
    { value: 'rented', label: 'Đã thuê', color: 'text-earth-600' },
    { value: 'sold', label: 'Đã bán', color: 'text-mountain-600' }
  ];

  const locations = [
    { value: '', label: 'Tất cả vùng núi' },
    { value: 'Lào Cai', label: 'Lào Cai' },
    { value: 'Yên Bái', label: 'Yên Bái' },
    { value: 'Hà Giang', label: 'Hà Giang' },
    { value: 'Sơn La', label: 'Sơn La' },
    { value: 'Thái Nguyên', label: 'Thái Nguyên' },
    { value: 'Phú Thọ', label: 'Phú Thọ' }
  ];

  return (
    <Card variant="forest" className="p-8">
      <div className="flex items-center space-x-3 mb-8">
        <div className="w-10 h-10 bg-gradient-to-br from-forest-500 to-moss-500 rounded-xl flex items-center justify-center">
          <Filter className="h-5 w-5 text-white" />
        </div>
        <h3 className="font-nature font-bold text-xl text-forest-900">Bộ lọc nâng cao</h3>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {/* Category */}
        <div className="space-y-3">
          <label className="flex items-center space-x-2 text-sm font-semibold text-forest-800">
            <TreePine className="h-4 w-4" />
            <span>Loại cây trà</span>
          </label>
          <select
            value={filters.category}
            onChange={(e) => handleFilterChange('category', e.target.value)}
            className="w-full px-4 py-3 bg-white/80 border border-forest-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-forest-500 text-forest-800"
          >
            {categories.map((category) => (
              <option key={category.value} value={category.value}>
                {category.icon} {category.label}
              </option>
            ))}
          </select>
        </div>

        {/* Age Range */}
        <div className="space-y-3">
          <label className="flex items-center space-x-2 text-sm font-semibold text-forest-800">
            <Mountain className="h-4 w-4" />
            <span>Tuổi cây</span>
          </label>
          <select
            value={filters.ageRange}
            onChange={(e) => handleFilterChange('ageRange', e.target.value)}
            className="w-full px-4 py-3 bg-white/80 border border-forest-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-forest-500 text-forest-800"
          >
            {ageRanges.map((range) => (
              <option key={range.value} value={range.value}>
                {range.label}
              </option>
            ))}
          </select>
        </div>

        {/* Price Range */}
        <div className="space-y-3">
          <label className="text-sm font-semibold text-forest-800">
            Giá bán
          </label>
          <select
            value={filters.priceRange}
            onChange={(e) => handleFilterChange('priceRange', e.target.value)}
            className="w-full px-4 py-3 bg-white/80 border border-forest-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-forest-500 text-forest-800"
          >
            {priceRanges.map((range) => (
              <option key={range.value} value={range.value}>
                {range.label}
              </option>
            ))}
          </select>
        </div>

        {/* Status */}
        <div className="space-y-3">
          <label className="text-sm font-semibold text-forest-800">
            Trạng thái
          </label>
          <select
            value={filters.status}
            onChange={(e) => handleFilterChange('status', e.target.value)}
            className="w-full px-4 py-3 bg-white/80 border border-forest-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-forest-500 text-forest-800"
          >
            {statuses.map((status) => (
              <option key={status.value} value={status.value}>
                {status.label}
              </option>
            ))}
          </select>
        </div>

        {/* Location */}
        <div className="space-y-3">
          <label className="text-sm font-semibold text-forest-800">
            Vùng núi
          </label>
          <select
            value={filters.location}
            onChange={(e) => handleFilterChange('location', e.target.value)}
            className="w-full px-4 py-3 bg-white/80 border border-forest-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-forest-500 text-forest-800"
          >
            {locations.map((location) => (
              <option key={location.value} value={location.value}>
                {location.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </Card>
  );
};

export default ProductFilter;