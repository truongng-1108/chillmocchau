import { useEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { TreePine, Mountain, Filter, ChevronDown, Check } from 'lucide-react';
import Card from '../ui/Card';

interface Option {
  value: string;
  label: string;
  icon?: string;
}

interface FilterState {
  category: string;
  ageRange: string;
  priceRange: string;
  status: string;
  location: string;
}

interface FilterProps {
  filters: FilterState;
  onFiltersChange: (filters: FilterState) => void;
}

/** -------- FancySelect: dropdown đẹp + animation + PORTAL (tránh bị khuất) -------- */
function FancySelect({
  value,
  onChange,
  label,
  iconLeft,
  options,
  placeholder = 'Chọn...'
}: {
  value: string;
  onChange: (v: string) => void;
  label: string;
  iconLeft?: React.ReactNode;
  options: Option[];
  placeholder?: string;
}) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  const selected = useMemo(() => options.find(o => o.value === value), [options, value]);

  // toạ độ menu (fixed) để tránh clipping
  const [menuStyle, setMenuStyle] = useState<{
    top: number;
    left: number;
    width: number;
    placement: 'bottom' | 'top';
  }>({ top: 0, left: 0, width: 0, placement: 'bottom' });

  const computePosition = () => {
    const el = btnRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const gap = 8; // khoảng cách giữa nút và menu
    const viewportH = window.innerHeight;

    const preferBottom = rect.bottom + 280 /* menu ước lượng */ + gap < viewportH;
    const placement: 'bottom' | 'top' = preferBottom ? 'bottom' : 'top';

    const top =
      placement === 'bottom'
        ? rect.bottom + gap
        : rect.top - gap; // sẽ trừ chiều cao bằng CSS transform origin

    setMenuStyle({
      top,
      left: rect.left + window.scrollX,
      width: rect.width,
      placement
    });
  };

  // đóng khi click ra ngoài
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (!wrapRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, []);

  // cập nhật vị trí khi mở/resize/scroll
  useEffect(() => {
    if (!open) return;
    computePosition();
    const onScroll = () => computePosition();
    const onResize = () => computePosition();
    window.addEventListener('scroll', onScroll, true);
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('scroll', onScroll, true);
      window.removeEventListener('resize', onResize);
    };
  }, [open]);

  // Keyboard: Enter/Space mở; Esc đóng; ↑/↓ di chuyển; Enter chọn
  const [focusIndex, setFocusIndex] = useState<number>(() =>
    Math.max(0, options.findIndex(o => o.value === value))
  );
  useEffect(() => {
    if (!open) return;
    setFocusIndex(Math.max(0, options.findIndex(o => o.value === value)));
  }, [open, value, options]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (!open && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      setOpen(true);
      return;
    }
    if (open) {
      if (e.key === 'Escape') {
        e.preventDefault();
        setOpen(false);
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setFocusIndex(i => Math.min(options.length - 1, i + 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setFocusIndex(i => Math.max(0, i - 1));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        const opt = options[focusIndex];
        if (opt) {
          onChange(opt.value);
          setOpen(false);
        }
      }
    }
  };

  const Menu = (
    <div
      className={`fixed z-[1000]
        ${menuStyle.placement === 'top' ? 'origin-bottom' : 'origin-top'}
        transition-all duration-200 ease-out
        ${open
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 ' +
            (menuStyle.placement === 'top'
              ? 'translate-y-1'
              : '-translate-y-1')}`}
      style={{
        top: menuStyle.top,
        left: menuStyle.left,
        width: menuStyle.width
      }}
      role="listbox"
      tabIndex={-1}
      onKeyDown={onKeyDown}
    >
      <div
        className="rounded-xl border border-forest-200/70 bg-white/95 backdrop-blur-sm shadow-lg"
      >
        <ul className="max-h-64 overflow-auto py-2 custom-scrollbar">
          {options.map((opt, idx) => {
            const active = value === opt.value;
            const focused = open && idx === focusIndex;
            return (
              <li
                key={opt.value + idx}
                role="option"
                aria-selected={active}
                onMouseEnter={() => setFocusIndex(idx)}
                onClick={() => {
                  onChange(opt.value);
                  setOpen(false);
                }}
                className={`px-3 py-2 mx-1 rounded-lg cursor-pointer flex items-center justify-between
                  transition-colors duration-150
                  ${active ? 'bg-forest-50 text-forest-800' : 'text-forest-700'}
                  ${focused ? 'bg-forest-100/70' : 'hover:bg-forest-50'}`}
              >
                <span className="truncate flex items-center gap-2">
                  {opt.icon ? <span className="text-base">{opt.icon}</span> : null}
                  {opt.label}
                </span>
                {active ? <Check className="h-4 w-4 text-forest-600" /> : null}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
  

  return (
    <div className="space-y-3" ref={wrapRef}>
      <label className="flex items-center space-x-2 text-sm font-semibold text-forest-800">
        {iconLeft}
        <span>{label}</span>
      </label>

      <div className="relative">
        <button
          ref={btnRef}
          type="button"
          onClick={() => setOpen(o => !o)}
          onKeyDown={onKeyDown}
          className={`w-full px-4 py-3 rounded-xl border text-left bg-white/80 border-forest-200 focus:outline-none
            focus:ring-2 focus:ring-forest-500 text-forest-800 flex items-center justify-between
            transition-colors duration-200 hover:bg-white`}
          aria-haspopup="listbox"
          aria-expanded={open}
        >
          <span className="truncate flex items-center gap-2">
            {selected?.icon ? <span>{selected.icon}</span> : null}
            {selected ? selected.label : <span className="text-forest-500">{placeholder}</span>}
          </span>
          <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
        </button>

        {/* Portal menu ra body để không bị clipping */}
        {createPortal(Menu, document.body)}
      </div>
    </div>
  );
}

/** --------------------- Bộ lọc CHILL Mộc Châu --------------------- */
const ProductFilter: React.FC<FilterProps> = ({ filters, onFiltersChange }) => {
  const handleFilterChange = (key: keyof FilterState, value: string) => {
    onFiltersChange({ ...filters, [key]: value });
  };

  // Category: 6 nhóm dịch vụ
  const categories: Option[] = [
    { value: '', label: 'Tất cả loại trải nghiệm', icon: '✨' },
    { value: 'food', label: 'Ăn uống & giải trí', icon: '🍽️' },
    { value: 'specialty', label: 'Đặc sản & giao hàng', icon: '🧺' },
    { value: 'stay', label: 'Lưu trú (homestay/khách sạn)', icon: '🏡' },
    { value: 'tour', label: 'Tour & hoạt động', icon: '🥾' },
    { value: 'rentals', label: 'Thuê xe & vận tải', icon: '🏍️' },
    { value: 'event', label: 'Vé sự kiện & festival', icon: '🎟️' }
  ];

  // Duration (giờ)
  const ageRanges: Option[] = [
    { value: '', label: 'Tất cả thời lượng' },
    { value: '0-3', label: 'Dưới 3 giờ' },
    { value: '3-6', label: '3–6 giờ' },
    { value: '6-24', label: 'Nửa ngày – 1 ngày' },
    { value: '24-48', label: '1–2 ngày' },
    { value: '48', label: 'Trên 2 ngày' }
  ];

  // Giá từ (VND)
  const priceRanges: Option[] = [
    { value: '', label: 'Tất cả mức giá' },
    { value: '0-300000', label: 'Dưới 300K' },
    { value: '300000-700000', label: '300K – 700K' },
    { value: '700000-2000000', label: '700K – 2 triệu' },
    { value: '2000000', label: 'Trên 2 triệu' }
  ];

  // Trạng thái
  const statuses: Option[] = [
    { value: '', label: 'Tất cả trạng thái' },
    { value: 'available', label: 'Còn chỗ' },
    { value: 'rented', label: 'Tạm hết' },
    { value: 'sold', label: 'Hết vé/Đã bán' }
  ];

  // Khu vực Mộc Châu
  const locations: Option[] = [
    { value: '', label: 'Tất cả khu vực' },
    { value: 'Bản Áng', label: 'Bản Áng' },
    { value: 'Nà Ka', label: 'Thung lũng Nà Ka' },
    { value: 'Phiêng Cành', label: 'Phiêng Cành' },
    { value: 'Thảo nguyên Mộc Châu', label: 'Thảo nguyên Mộc Châu' },
    { value: 'Trung tâm Mộc Châu', label: 'Trung tâm Mộc Châu' }
  ];

  return (
    <Card variant="forest" className="p-8">
      <div className="flex items-center space-x-3 mb-8">
        <div className="w-10 h-10 bg-gradient-to-br from-forest-500 to-moss-500 rounded-xl flex items-center justify-center shadow-lg">
          <Filter className="h-5 w-5 text-white" />
        </div>
        <h3 className="font-nature font-bold text-xl text-forest-900">Bộ lọc nâng cao</h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        <FancySelect
          value={filters.category}
          onChange={(v) => handleFilterChange('category', v)}
          label="Loại trải nghiệm"
          iconLeft={<TreePine className="h-4 w-4" />}
          options={categories}
          placeholder="Chọn loại"
        />

        <FancySelect
          value={filters.ageRange}
          onChange={(v) => handleFilterChange('ageRange', v)}
          label="Thời lượng (giờ)"
          iconLeft={<Mountain className="h-4 w-4" />}
          options={ageRanges}
          placeholder="Chọn thời lượng"
        />

        <FancySelect
          value={filters.priceRange}
          onChange={(v) => handleFilterChange('priceRange', v)}
          label="Giá từ"
          options={priceRanges}
          placeholder="Chọn mức giá"
        />

        <FancySelect
          value={filters.status}
          onChange={(v) => handleFilterChange('status', v)}
          label="Trạng thái"
          options={statuses}
          placeholder="Chọn trạng thái"
        />

        <FancySelect
          value={filters.location}
          onChange={(v) => handleFilterChange('location', v)}
          label="Khu vực"
          options={locations}
          placeholder="Chọn khu vực"
        />
      </div>
    </Card>
  );
};

export default ProductFilter;
