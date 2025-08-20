import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, ArrowRight, Check, Upload, TreePine,
  Building2, Store, ShoppingCart, Users, Phone,
  Award, Camera, FileText, AlertCircle, CheckCircle, Info
} from 'lucide-react';
import { gsap } from 'gsap';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

// Types
interface FormData {
  // Business Scale Selection
  businessScale: 'large' | 'medium' | 'small' | '';
  
  // Basic Info
  businessName: string;
  businessTypes: string[];
  otherBusinessType: string;
  contactPerson: string;
  phone: string;
  email: string;
  
  // Address
  address: string;
  ward: string;
  district: string;
  province: string;
  
  // Legal Info (for large/medium businesses)
  taxCode?: string;
  businessLicense?: string;
  licenseStatus: 'have' | 'processing' | 'none';
  representativeName?: string;
  representativePosition?: string;
  
  // Business Details
  description: string;
  capacity: string;
  operatingHours: { [key: string]: { open: string; close: string; closed: boolean } };
  specialFeatures: string[];
  otherSpecialFeature: string;
  
  // Experience & Financial (simplified for small businesses)
  experience: string;
  monthlyRevenue: string;
  
  // Services & Amenities
  languages: string[];
  amenities: string[];
  otherAmenity: string;
  paymentMethods: string[];
  
  // Files
  files: { [key: string]: File[] };
  
  // Partnership
  expectedRevenue: string;
  marketingBudget: string;
  goals: string[];
  additionalServices: string[];
}

const PartnerRegistration = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    businessScale: '',
    businessName: '',
    businessTypes: [],
    otherBusinessType: '',
    contactPerson: '',
    phone: '',
    email: '',
    address: '',
    ward: '',
    district: '',
    province: '',
    licenseStatus: 'none',
    description: '',
    capacity: '',
    operatingHours: {
      monday: { open: '08:00', close: '22:00', closed: false },
      tuesday: { open: '08:00', close: '22:00', closed: false },
      wednesday: { open: '08:00', close: '22:00', closed: false },
      thursday: { open: '08:00', close: '22:00', closed: false },
      friday: { open: '08:00', close: '22:00', closed: false },
      saturday: { open: '08:00', close: '22:00', closed: false },
      sunday: { open: '08:00', close: '22:00', closed: false },
    },
    specialFeatures: [],
    otherSpecialFeature: '',
    experience: '',
    monthlyRevenue: '',
    languages: [],
    amenities: [],
    otherAmenity: '',
    paymentMethods: [],
    files: {},
    expectedRevenue: '',
    marketingBudget: '',
    goals: [],
    additionalServices: [],
  });

  const containerRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  // Business Scale Options (not used directly; selection cards below)

  // Dynamic steps based on business scale
  const getSteps = () => {
    const baseSteps = [
      { id: 'scale', title: 'Quy mô', icon: Users },
      { id: 'basic', title: 'Thông tin cơ bản', icon: Building2 },
    ];

    if (formData.businessScale === 'large') {
      return [
        ...baseSteps,
        { id: 'legal', title: 'Thông tin pháp lý', icon: FileText },
        { id: 'business', title: 'Chi tiết kinh doanh', icon: Store },
        { id: 'financial', title: 'Tài chính & Kinh nghiệm', icon: Award },
        { id: 'documents', title: 'Tài liệu', icon: Upload },
        { id: 'partnership', title: 'Kế hoạch hợp tác', icon: TreePine },
        { id: 'complete', title: 'Hoàn tất', icon: CheckCircle }
      ];
    } else if (formData.businessScale === 'medium') {
      return [
        ...baseSteps,
        { id: 'business', title: 'Chi tiết dịch vụ', icon: Store },
        { id: 'experience', title: 'Kinh nghiệm', icon: Award },
        { id: 'documents', title: 'Hình ảnh & Tài liệu', icon: Upload },
        { id: 'partnership', title: 'Mục tiêu hợp tác', icon: TreePine },
        { id: 'complete', title: 'Hoàn tất', icon: CheckCircle }
      ];
    } else if (formData.businessScale === 'small') {
      return [
        ...baseSteps,
        { id: 'service', title: 'Dịch vụ của bạn', icon: Store },
        { id: 'photos', title: 'Hình ảnh', icon: Camera },
        { id: 'complete', title: 'Hoàn tất', icon: CheckCircle }
      ];
    }

    return baseSteps;
  };

  const steps = getSteps();

  // Business types based on scale
  const getBusinessTypes = () => {
    if (formData.businessScale === 'large') {
      return [
        { id: 'hotel', label: 'Khách sạn / Resort', icon: '🏨' },
        { id: 'restaurant', label: 'Nhà hàng cao cấp', icon: '🍽️' },
        { id: 'tour-company', label: 'Công ty du lịch', icon: '🏢' },
        { id: 'transport', label: 'Vận tải du lịch', icon: '🚌' },
        { id: 'event', label: 'Tổ chức sự kiện', icon: '🎪' },
        { id: 'spa', label: 'Spa / Wellness', icon: '💆' },
        { id: 'shopping', label: 'Trung tâm mua sắm', icon: '🛍️' },
        { id: 'other', label: 'Khác', icon: '📝' }
      ];
    } else if (formData.businessScale === 'medium') {
      return [
        { id: 'homestay', label: 'Homestay', icon: '🏡' },
        { id: 'restaurant', label: 'Nhà hàng / Quán ăn', icon: '🍽️' },
        { id: 'cafe', label: 'Quán cà phê', icon: '☕' },
        { id: 'tour', label: 'Tour / Hoạt động', icon: '🥾' },
        { id: 'rental', label: 'Cho thuê xe', icon: '🏍️' },
        { id: 'specialty', label: 'Đặc sản địa phương', icon: '🧺' },
        { id: 'craft', label: 'Thủ công mỹ nghệ', icon: '🎨' },
        { id: 'other', label: 'Khác', icon: '📝' }
      ];
    } else {
      return [
        { id: 'street-food', label: 'Quán vỉa hè', icon: '🍜' },
        { id: 'cart', label: 'Xe đẩy bán hàng', icon: '🛒' },
        { id: 'tea-shop', label: 'Quán trà sữa', icon: '🧋' },
        { id: 'snack', label: 'Bán đồ ăn vặt', icon: '🍿' },
        { id: 'fruit', label: 'Bán trái cây', icon: '🍎' },
        { id: 'motorbike-taxi', label: 'Xe ôm', icon: '🏍️' },
        { id: 'guide', label: 'Hướng dẫn viên tự do', icon: '🗺️' },
        { id: 'handicraft', label: 'Bán đồ thủ công', icon: '🧸' },
        { id: 'other', label: 'Khác', icon: '📝' }
      ];
    }
  };

  // Special features based on scale
  const getSpecialFeatures = () => {
    if (formData.businessScale === 'large') {
      return [
        { id: 'luxury', label: 'Dịch vụ cao cấp' },
        { id: 'conference', label: 'Phòng hội nghị' },
        { id: 'spa-wellness', label: 'Spa & Wellness' },
        { id: 'fine-dining', label: 'Nhà hàng fine dining' },
        { id: 'vip-service', label: 'Dịch vụ VIP' },
        { id: 'concierge', label: 'Dịch vụ concierge' },
        { id: 'shuttle', label: 'Xe đưa đón sân bay' },
        { id: 'multilingual', label: 'Nhân viên đa ngôn ngữ' },
        { id: 'other', label: 'Khác' }
      ];
    } else if (formData.businessScale === 'medium') {
      return [
        { id: 'view', label: 'View đẹp (núi, đồi chè)' },
        { id: 'local-experience', label: 'Trải nghiệm bản địa' },
        { id: 'bbq', label: 'BBQ / Lửa trại' },
        { id: 'photo-service', label: 'Dịch vụ chụp ảnh' },
        { id: 'traditional-costume', label: 'Cho thuê trang phục dân tộc' },
        { id: 'local-guide', label: 'Hướng dẫn viên địa phương' },
        { id: 'organic-food', label: 'Thực phẩm organic' },
        { id: 'cultural-activity', label: 'Hoạt động văn hóa' },
        { id: 'other', label: 'Khác' }
      ];
    } else {
      return [
        { id: 'cheap', label: 'Giá rẻ, bình dân' },
        { id: 'fast', label: 'Phục vụ nhanh' },
        { id: 'mobile', label: 'Dịch vụ lưu động' },
        { id: 'family-recipe', label: 'Công thức gia truyền' },
        { id: 'fresh', label: 'Nguyên liệu tươi sống' },
        { id: 'local-specialty', label: 'Đặc sản địa phương' },
        { id: 'friendly', label: 'Thân thiện, gần gũi' },
        { id: 'convenient', label: 'Tiện lợi, dễ tìm' },
        { id: 'other', label: 'Khác' }
      ];
    }
  };

  // Handle business scale selection
  const handleBusinessScaleSelect = (scale: FormData['businessScale']) => {
    console.log('handleBusinessScaleSelect called with:', scale);
    handleInputChange('businessScale', scale);
    console.log('Moving to step 1');
  };

  // Validation functions
  const validateStep = (step: number): boolean => {
    const currentStepId = steps[step]?.id;
    
    switch (currentStepId) {
      case 'scale':
        return formData.businessScale !== '';
      
      case 'basic': {
        const basicRequired = ['businessName', 'contactPerson', 'phone', 'email'] as const;
        const allFilled = basicRequired.every((field) => formData[field] !== '');
        return allFilled && formData.businessTypes.length > 0;
      }
      
      case 'legal':
        if (formData.businessScale === 'large') {
          return formData.taxCode !== '' && formData.representativeName !== '';
        }
        return true;
      
      case 'business':
      case 'service':
        return formData.description !== '' && formData.capacity !== '';
      
      case 'documents':
      case 'photos':
        return Object.keys(formData.files).length > 0;
      
      default:
        return true;
    }
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      if (currentStep < steps.length - 1) {
        setCurrentStep(currentStep + 1);
      }
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  // GSAP Animations
  useEffect(() => {
    if (formRef.current) {
      gsap.fromTo(formRef.current, 
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
      );
    }
  }, [currentStep]);

  // Handle form input changes
  const handleInputChange = <K extends keyof FormData>(field: K, value: FormData[K]) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleArrayToggle = (field: keyof FormData, value: string, maxItems?: number) => {
    setFormData(prev => {
      const currentArray = prev[field] as string[];
      const isSelected = currentArray.includes(value);
      
      if (isSelected) {
        return { ...prev, [field]: currentArray.filter(item => item !== value) };
      } else {
        if (maxItems && currentArray.length >= maxItems) {
          return prev;
        }
        return { ...prev, [field]: [...currentArray, value] };
      }
    });
  };

  const handleFileUpload = (type: string, files: FileList) => {
    setFormData(prev => ({
      ...prev,
      files: {
        ...prev.files,
        [type]: Array.from(files)
      }
    }));
  };

  // Render step content
  const renderStep = () => {
    const currentStepId = steps[currentStep]?.id;

    switch (currentStepId) {
      case 'scale':
        return (
          <>
            {/* Business Scale Selection */}
            <div className="text-center mb-12">
              <h1 className="text-4xl font-elegant font-bold text-forest-900 mb-4">
                Đăng Ký Đối Tác CHILL Mộc Châu
              </h1>
              <p className="text-xl text-forest-700 max-w-3xl mx-auto leading-relaxed">
                Chúng tôi sẽ tùy chỉnh form đăng ký phù hợp với quy mô doanh nghiệp
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {/* Doanh nghiệp lớn */}
              <Card
                variant="forest"
                className={`p-8 text-center group transition-all duration-300 h-full flex flex-col relative border ${formData.businessScale === 'large' ? 'border-forest-500 ring-1 ring-forest-300 shadow-md' : 'border-forest-200/40 hover:shadow-lg hover:-translate-y-1'}`}
                onClick={() => handleBusinessScaleSelect('large')}
                hover
              >
                <div className={`w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl transition-all duration-300 bg-gradient-to-br from-blue-500 to-blue-600 ${formData.businessScale === 'large' ? 'scale-[1.02]' : ''}`}>
                  <Building2 className="h-10 w-10 text-white" />
                </div>
                <h3 className="font-elegant font-bold text-2xl text-forest-900 mb-4">
                  Doanh nghiệp lớn
                </h3>
                <p className="text-forest-700 mb-6">
                  Công ty, khách sạn, resort
                </p>
                
                {/* Đặc điểm */}
                <div className="space-y-3 mb-6 text-left">
                  <div className="flex items-center text-forest-700">
                    <Check className="h-4 w-4 text-forest-500 mr-3 flex-shrink-0" />
                    <span className="text-sm">Có mã số thuế</span>
                  </div>
                  <div className="flex items-center text-forest-700">
                    <Check className="h-4 w-4 text-forest-500 mr-3 flex-shrink-0" />
                    <span className="text-sm">Giấy phép kinh doanh đầy đủ</span>
                  </div>
                  <div className="flex items-center text-forest-700">
                    <Check className="h-4 w-4 text-forest-500 mr-3 flex-shrink-0" />
                    <span className="text-sm">Nhân viên từ 10+ người</span>
                  </div>
                  <div className="flex items-center text-forest-700">
                    <Check className="h-4 w-4 text-forest-500 mr-3 flex-shrink-0" />
                    <span className="text-sm">Doanh thu từ 50 triệu/tháng</span>
                  </div>
                  <div className="flex items-center text-forest-700">
                    <Check className="h-4 w-4 text-forest-500 mr-3 flex-shrink-0" />
                    <span className="text-sm">Hệ thống quản lý chuyên nghiệp</span>
                  </div>
                </div>

                {/* Yêu cầu */}
                <div className="text-left mb-6">
                  <h4 className="font-semibold text-forest-800 mb-3">Yêu cầu:</h4>
                  <ul className="space-y-2 text-sm text-forest-600">
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-forest-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Mã số thuế
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-forest-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Giấy phép kinh doanh
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-forest-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Thông tin pháp nhân
                    </li>
                  </ul>
                </div>

                <div className="mt-auto flex items-center justify-center gap-2 text-forest-700">
                  {formData.businessScale === 'large' ? (
                    <>
                      <Check className="h-5 w-5 text-forest-600" />
                      <span className="font-medium">Đã chọn</span>
                    </>
                  ) : (
                    <>
                      <span className="text-sm opacity-80">Nhấn để chọn</span>
                      <ArrowRight className="h-4 w-4" />
                    </>
                  )}
                </div>
              </Card>

              {/* Doanh nghiệp vừa */}
              <Card
                variant="mountain"
                className={`p-8 text-center group transition-all duration-300 h-full flex flex-col relative border ${formData.businessScale === 'medium' ? 'border-forest-500 ring-1 ring-forest-300 shadow-md' : 'border-forest-200/40 hover:shadow-lg hover:-translate-y-1'}`}
                onClick={() => handleBusinessScaleSelect('medium')}
                hover
              >
                <div className={`w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl transition-all duration-300 bg-gradient-to-br from-green-500 to-green-600 ${formData.businessScale === 'medium' ? 'scale-[1.02]' : ''}`}>
                  <Store className="h-10 w-10 text-white" />
                </div>
                <h3 className="font-elegant font-bold text-2xl text-forest-900 mb-4">
                  Doanh nghiệp vừa
                </h3>
                <p className="text-forest-700 mb-6">
                  Homestay, nhà hàng, tour
                </p>
                
                {/* Đặc điểm */}
                <div className="space-y-3 mb-6 text-left">
                  <div className="flex items-center text-forest-700">
                    <Check className="h-4 w-4 text-forest-500 mr-3 flex-shrink-0" />
                    <span className="text-sm">Có/đang làm giấy phép</span>
                  </div>
                  <div className="flex items-center text-forest-700">
                    <Check className="h-4 w-4 text-forest-500 mr-3 flex-shrink-0" />
                    <span className="text-sm">Nhân viên 3-10 người</span>
                  </div>
                  <div className="flex items-center text-forest-700">
                    <Check className="h-4 w-4 text-forest-500 mr-3 flex-shrink-0" />
                    <span className="text-sm">Doanh thu 10-50 triệu/tháng</span>
                  </div>
                  <div className="flex items-center text-forest-700">
                    <Check className="h-4 w-4 text-forest-500 mr-3 flex-shrink-0" />
                    <span className="text-sm">Kinh doanh ổn định</span>
                  </div>
                  <div className="flex items-center text-forest-700">
                    <Check className="h-4 w-4 text-forest-500 mr-3 flex-shrink-0" />
                    <span className="text-sm">Có địa điểm cố định</span>
                  </div>
                </div>

                {/* Yêu cầu */}
                <div className="text-left mb-6">
                  <h4 className="font-semibold text-forest-800 mb-3">Yêu cầu:</h4>
                  <ul className="space-y-2 text-sm text-forest-600">
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-forest-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Thông tin liên hệ
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-forest-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Mô tả dịch vụ
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-forest-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Hình ảnh minh họa
                    </li>
                  </ul>
                </div>

                <div className="mt-auto flex items-center justify-center gap-2 text-forest-700">
                  {formData.businessScale === 'medium' ? (
                    <>
                      <Check className="h-5 w-5 text-forest-600" />
                      <span className="font-medium">Đã chọn</span>
                    </>
                  ) : (
                    <>
                      <span className="text-sm opacity-80">Nhấn để chọn</span>
                      <ArrowRight className="h-4 w-4" />
                    </>
                  )}
                </div>
              </Card>

              {/* Kinh doanh nhỏ */}
              <Card
                variant="earth"
                className={`p-8 text-center group transition-all duration-300 h-full flex flex-col relative border ${formData.businessScale === 'small' ? 'border-forest-500 ring-1 ring-forest-300 shadow-md' : 'border-forest-200/40 hover:shadow-lg hover:-translate-y-1'}`}
                onClick={() => handleBusinessScaleSelect('small')}
                hover
              >
                <div className={`w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl transition-all duration-300 bg-gradient-to-br from-orange-500 to-red-500 ${formData.businessScale === 'small' ? 'scale-[1.02]' : ''}`}>
                  <ShoppingCart className="h-10 w-10 text-white" />
                </div>
                <h3 className="font-elegant font-bold text-2xl text-forest-900 mb-4">
                  Kinh doanh nhỏ
                </h3>
                <p className="text-forest-700 mb-6">
                  Quán vỉa hè, xe đẩy, gia đình
                </p>
                
                {/* Đặc điểm */}
                <div className="space-y-3 mb-6 text-left">
                  <div className="flex items-center text-forest-700">
                    <Check className="h-4 w-4 text-forest-500 mr-3 flex-shrink-0" />
                    <span className="text-sm">Kinh doanh cá nhân/gia đình</span>
                  </div>
                  <div className="flex items-center text-forest-700">
                    <Check className="h-4 w-4 text-forest-500 mr-3 flex-shrink-0" />
                    <span className="text-sm">1-3 người</span>
                  </div>
                  <div className="flex items-center text-forest-700">
                    <Check className="h-4 w-4 text-forest-500 mr-3 flex-shrink-0" />
                    <span className="text-sm">Doanh thu dưới 10 triệu/tháng</span>
                  </div>
                  <div className="flex items-center text-forest-700">
                    <Check className="h-4 w-4 text-forest-500 mr-3 flex-shrink-0" />
                    <span className="text-sm">Linh hoạt địa điểm</span>
                  </div>
                  <div className="flex items-center text-forest-700">
                    <Check className="h-4 w-4 text-forest-500 mr-3 flex-shrink-0" />
                    <span className="text-sm">Đơn giản, dễ tham gia</span>
                  </div>
                </div>

                {/* Yêu cầu */}
                <div className="text-left mb-6">
                  <h4 className="font-semibold text-forest-800 mb-3">Yêu cầu:</h4>
                  <ul className="space-y-2 text-sm text-forest-600">
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-forest-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Thông tin cá nhân
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-forest-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Mô tả ngắn gọn
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-forest-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Ảnh sản phẩm/dịch vụ
                    </li>
                  </ul>
                </div>

                <div className="mt-auto flex items-center justify-center gap-2 text-forest-700">
                  {formData.businessScale === 'small' ? (
                    <>
                      <Check className="h-5 w-5 text-forest-600" />
                      <span className="font-medium">Đã chọn</span>
                    </>
                  ) : (
                    <>
                      <span className="text-sm opacity-80">Nhấn để chọn</span>
                      <ArrowRight className="h-4 w-4" />
                    </>
                  )}
                </div>
              </Card>
            </div>
          </>
        );

      case 'basic': {
        return (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-elegant font-bold text-forest-900 mb-4">
                Thông tin cơ bản
              </h2>
              <p className="text-forest-700 font-nature">
                Cung cấp thông tin liên hệ và loại hình kinh doanh
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-forest-800 mb-2">
                    Tên {formData.businessScale === 'small' ? 'quán/dịch vụ' : 'doanh nghiệp'} *
                  </label>
                  <input
                    type="text"
                    value={formData.businessName}
                    onChange={(e) => handleInputChange('businessName', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-forest-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-forest-500 focus:border-transparent"
                    placeholder={formData.businessScale === 'small' ? 'VD: Quán bánh mì cô Hoa' : 'VD: Homestay Mộc Châu View'}
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-forest-800 mb-2">
                    Người liên hệ *
                  </label>
                  <input
                    type="text"
                    value={formData.contactPerson}
                    onChange={(e) => handleInputChange('contactPerson', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-forest-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-forest-500 focus:border-transparent"
                    placeholder="Họ và tên"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-forest-800 mb-2">
                      Số điện thoại *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="w-full px-4 py-3 border-2 border-forest-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-forest-500 focus:border-transparent"
                      placeholder="0xxx xxx xxx"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-forest-800 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full px-4 py-3 border-2 border-forest-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-forest-500 focus:border-transparent"
                      placeholder="email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-forest-800 mb-2">
                    Địa chỉ
                  </label>
                  <div className="space-y-3">
                    <input
                      type="text"
                      value={formData.address}
                      onChange={(e) => handleInputChange('address', e.target.value)}
                      className="w-full px-4 py-3 border-2 border-forest-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-forest-500 focus:border-transparent"
                      placeholder={formData.businessScale === 'small' ? 'Khu vực hoạt động (VD: Chợ Mộc Châu, đường Điện Biên)' : 'Số nhà, tên đường'}
                    />
                    {formData.businessScale !== 'small' && (
                      <div className="grid grid-cols-3 gap-3">
                        <input
                          type="text"
                          value={formData.ward}
                          onChange={(e) => handleInputChange('ward', e.target.value)}
                          className="px-4 py-3 border-2 border-forest-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-forest-500 focus:border-transparent"
                          placeholder="Phường/Xã"
                        />
                        <input
                          type="text"
                          value={formData.district}
                          onChange={(e) => handleInputChange('district', e.target.value)}
                          className="px-4 py-3 border-2 border-forest-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-forest-500 focus:border-transparent"
                          placeholder="Quận/Huyện"
                        />
                        <input
                          type="text"
                          value={formData.province}
                          onChange={(e) => handleInputChange('province', e.target.value)}
                          className="px-4 py-3 border-2 border-forest-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-forest-500 focus:border-transparent"
                          placeholder="Tỉnh/TP"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-forest-800 mb-4">
                  Loại hình kinh doanh * (Chọn tối đa 3)
                </label>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {getBusinessTypes().map((type) => (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => handleArrayToggle('businessTypes', type.id, 3)}
                      disabled={!formData.businessTypes.includes(type.id) && formData.businessTypes.length >= 3}
                      className={`p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                        formData.businessTypes.includes(type.id)
                          ? 'border-forest-500 bg-forest-50 text-forest-800'
                          : 'border-forest-200 hover:border-forest-300 text-forest-700'
                      } ${!formData.businessTypes.includes(type.id) && formData.businessTypes.length >= 3 ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{type.icon}</span>
                        <span className="font-medium text-sm">{type.label}</span>
                      </div>
                    </button>
                  ))}
                </div>

                {formData.businessTypes.includes('other') && (
                  <input
                    type="text"
                    value={formData.otherBusinessType}
                    onChange={(e) => handleInputChange('otherBusinessType', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-forest-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-forest-500 focus:border-transparent"
                    placeholder="Nhập loại hình khác..."
                  />
                )}

                <div className="text-sm text-forest-600 mt-2">
                  Đã chọn {formData.businessTypes.length}/3 loại hình
                </div>
              </div>
            </div>
          </div>
        );
      }

      case 'legal':
        return (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-elegant font-bold text-forest-900 mb-4">
                Thông tin pháp lý
              </h2>
              <p className="text-forest-700 font-nature">
                Thông tin về giấy phép và đại diện pháp nhân
              </p>
            </div>

            <div className="max-w-2xl mx-auto space-y-6">
              <div>
                <label className="block text-sm font-semibold text-forest-800 mb-2">
                  Mã số thuế *
                </label>
                <input
                  type="text"
                  value={formData.taxCode}
                  onChange={(e) => handleInputChange('taxCode', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-forest-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-forest-500 focus:border-transparent"
                  placeholder="Nhập mã số thuế"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-forest-800 mb-2">
                  Tình trạng giấy phép kinh doanh
                </label>
                <div className="grid grid-cols-3 gap-4">
                  {([
                    { id: 'have', label: 'Đã có', color: 'green' },
                    { id: 'processing', label: 'Đang làm', color: 'yellow' },
                    { id: 'none', label: 'Chưa có', color: 'red' }
                  ] as const).map((status) => (
                    <button
                      key={status.id}
                      type="button"
                      onClick={() => handleInputChange('licenseStatus', status.id)}
                      className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                        formData.licenseStatus === status.id
                          ? `border-${status.color}-500 bg-${status.color}-50`
                          : 'border-forest-200 hover:border-forest-300'
                      }`}
                    >
                      {status.label}
                    </button>
                  ))}
                </div>
              </div>

              {formData.licenseStatus === 'have' && (
                <div>
                  <label className="block text-sm font-semibold text-forest-800 mb-2">
                    Số giấy phép kinh doanh
                  </label>
                  <input
                    type="text"
                    value={formData.businessLicense}
                    onChange={(e) => handleInputChange('businessLicense', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-forest-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-forest-500 focus:border-transparent"
                    placeholder="Nhập số giấy phép"
                  />
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-forest-800 mb-2">
                    Người đại diện pháp nhân *
                  </label>
                  <input
                    type="text"
                    value={formData.representativeName}
                    onChange={(e) => handleInputChange('representativeName', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-forest-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-forest-500 focus:border-transparent"
                    placeholder="Họ và tên"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-forest-800 mb-2">
                    Chức vụ
                  </label>
                  <input
                    type="text"
                    value={formData.representativePosition}
                    onChange={(e) => handleInputChange('representativePosition', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-forest-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-forest-500 focus:border-transparent"
                    placeholder="VD: Giám đốc, Chủ tịch HĐQT"
                  />
                </div>
              </div>
            </div>
          </div>
        );

      case 'business':
      case 'service':
        return (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-elegant font-bold text-forest-900 mb-4">
                {formData.businessScale === 'small' ? 'Dịch vụ của bạn' : 'Chi tiết kinh doanh'}
              </h2>
              <p className="text-forest-700 font-nature">
                Mô tả chi tiết về dịch vụ và điểm đặc biệt
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-forest-800 mb-2">
                  Mô tả {formData.businessScale === 'small' ? 'dịch vụ' : 'doanh nghiệp'} *
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  rows={4}
                  className="w-full px-4 py-3 border-2 border-forest-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-forest-500 focus:border-transparent"
                  placeholder={
                    formData.businessScale === 'small' 
                      ? 'VD: Bán bánh mì thịt nướng tự làm, nguyên liệu tươi sạch, giá 15k/ổ. Phục vụ từ 6h-11h sáng tại chợ Mộc Châu.'
                      : 'Mô tả về dịch vụ, sản phẩm, điểm mạnh của doanh nghiệp...'
                  }
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-forest-800 mb-2">
                    {formData.businessScale === 'small' ? 'Số lượng phục vụ' : 'Sức chứa'} *
                  </label>
                  <select
                    value={formData.capacity}
                    onChange={(e) => handleInputChange('capacity', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-forest-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-forest-500 focus:border-transparent"
                  >
                    <option value="">Chọn sức chứa</option>
                    {formData.businessScale === 'small' ? (
                      <>
                        <option value="1-10">1-10 khách/ngày</option>
                        <option value="10-30">10-30 khách/ngày</option>
                        <option value="30-50">30-50 khách/ngày</option>
                        <option value="50+">Trên 50 khách/ngày</option>
                      </>
                    ) : (
                      <>
                        <option value="1-10">1-10 khách</option>
                        <option value="10-20">10-20 khách</option>
                        <option value="20-50">20-50 khách</option>
                        <option value="50-100">50-100 khách</option>
                        <option value="100+">Trên 100 khách</option>
                      </>
                    )}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-forest-800 mb-2">
                    Doanh thu hàng tháng (ước tính)
                  </label>
                  <select
                    value={formData.monthlyRevenue}
                    onChange={(e) => handleInputChange('monthlyRevenue', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-forest-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-forest-500 focus:border-transparent"
                  >
                    <option value="">Chọn mức doanh thu</option>
                    {formData.businessScale === 'small' ? (
                      <>
                        <option value="under-5m">Dưới 5 triệu</option>
                        <option value="5-10m">5-10 triệu</option>
                        <option value="10-20m">10-20 triệu</option>
                        <option value="20m+">Trên 20 triệu</option>
                      </>
                    ) : formData.businessScale === 'medium' ? (
                      <>
                        <option value="10-30m">10-30 triệu</option>
                        <option value="30-50m">30-50 triệu</option>
                        <option value="50-100m">50-100 triệu</option>
                        <option value="100m+">Trên 100 triệu</option>
                      </>
                    ) : (
                      <>
                        <option value="100-500m">100-500 triệu</option>
                        <option value="500m-1b">500 triệu - 1 tỷ</option>
                        <option value="1-5b">1-5 tỷ</option>
                        <option value="5b+">Trên 5 tỷ</option>
                      </>
                    )}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-forest-800 mb-4">
                  Điểm đặc biệt (Chọn tối đa 5)
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
                  {getSpecialFeatures().map((feature) => (
                    <button
                      key={feature.id}
                      type="button"
                      onClick={() => handleArrayToggle('specialFeatures', feature.id, 5)}
                      disabled={!formData.specialFeatures.includes(feature.id) && formData.specialFeatures.length >= 5}
                      className={`p-3 rounded-xl border-2 transition-all duration-300 text-sm ${
                        formData.specialFeatures.includes(feature.id)
                          ? 'border-forest-500 bg-forest-50 text-forest-800'
                          : 'border-forest-200 hover:border-forest-300 text-forest-700'
                      } ${!formData.specialFeatures.includes(feature.id) && formData.specialFeatures.length >= 5 ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                      {feature.label}
                    </button>
                  ))}
                </div>

                {formData.specialFeatures.includes('other') && (
                  <input
                    type="text"
                    value={formData.otherSpecialFeature}
                    onChange={(e) => handleInputChange('otherSpecialFeature', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-forest-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-forest-500 focus:border-transparent"
                    placeholder="Nhập điểm đặc biệt khác..."
                  />
                )}

                <div className="text-sm text-forest-600 mt-2">
                  Đã chọn {formData.specialFeatures.length}/5 điểm đặc biệt
                </div>
              </div>

              {formData.businessScale !== 'small' && (
                <div>
                  <label className="block text-sm font-semibold text-forest-800 mb-4">
                    Giờ hoạt động
                  </label>
                  <div className="space-y-3">
                    {Object.entries(formData.operatingHours).map(([day, hours]) => (
                      <div key={day} className="flex items-center space-x-4">
                        <div className="w-20 text-sm font-medium text-forest-800 capitalize">
                          {day === 'monday' ? 'T2' : 
                           day === 'tuesday' ? 'T3' :
                           day === 'wednesday' ? 'T4' :
                           day === 'thursday' ? 'T5' :
                           day === 'friday' ? 'T6' :
                           day === 'saturday' ? 'T7' : 'CN'}
                        </div>
                        <input
                          type="time"
                          value={hours.open}
                          onChange={(e) => handleInputChange('operatingHours', {
                            ...formData.operatingHours,
                            [day]: { ...hours, open: e.target.value }
                          })}
                          disabled={hours.closed}
                          className="px-3 py-2 border border-forest-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-500 disabled:bg-gray-100"
                        />
                        <span className="text-forest-600">-</span>
                        <input
                          type="time"
                          value={hours.close}
                          onChange={(e) => handleInputChange('operatingHours', {
                            ...formData.operatingHours,
                            [day]: { ...hours, close: e.target.value }
                          })}
                          disabled={hours.closed}
                          className="px-3 py-2 border border-forest-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-500 disabled:bg-gray-100"
                        />
                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            checked={hours.closed}
                            onChange={(e) => handleInputChange('operatingHours', {
                              ...formData.operatingHours,
                              [day]: { ...hours, closed: e.target.checked }
                            })}
                            className="mr-2"
                          />
                          <span className="text-sm text-forest-600">Đóng cửa</span>
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        );

      case 'photos':
      case 'documents':
        return (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-elegant font-bold text-forest-900 mb-4">
                {formData.businessScale === 'small' ? 'Hình ảnh dịch vụ' : 'Tài liệu & Hình ảnh'}
              </h2>
              <p className="text-forest-700 font-nature">
                {formData.businessScale === 'small' 
                  ? 'Tải lên một vài hình ảnh về sản phẩm/dịch vụ của bạn'
                  : 'Tải lên các tài liệu cần thiết và hình ảnh minh họa'
                }
              </p>
            </div>

            <div className="space-y-8">
              {formData.businessScale === 'small' ? (
                <div>
                  <label className="block text-sm font-semibold text-forest-800 mb-4">
                    Hình ảnh sản phẩm/dịch vụ * (2-10 ảnh)
                  </label>
                  <div className="border-2 border-dashed border-forest-300 rounded-xl p-8 text-center hover:border-forest-400 transition-colors">
                    <input
                      type="file"
                      multiple
                      accept="image/*"
                      onChange={(e) => e.target.files && handleFileUpload('photos', e.target.files)}
                      className="hidden"
                      id="photos-upload"
                    />
                    <label htmlFor="photos-upload" className="cursor-pointer">
                      <Camera className="h-12 w-12 text-forest-400 mx-auto mb-4" />
                      <p className="text-forest-700 font-medium mb-2">Chọn hình ảnh</p>
                      <p className="text-sm text-forest-600">PNG, JPG tối đa 5MB mỗi ảnh</p>
                    </label>
                  </div>
                  {formData.files.photos && (
                    <div className="mt-4 text-sm text-forest-600">
                      Đã chọn {formData.files.photos.length} ảnh
                    </div>
                  )}
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-sm font-semibold text-forest-800 mb-4">
                        Giấy phép kinh doanh {formData.businessScale === 'large' ? '*' : '(nếu có)'}
                      </label>
                      <div className="border-2 border-dashed border-forest-300 rounded-xl p-6 text-center hover:border-forest-400 transition-colors">
                        <input
                          type="file"
                          accept=".pdf,.jpg,.png"
                          onChange={(e) => e.target.files && handleFileUpload('license', e.target.files)}
                          className="hidden"
                          id="license-upload"
                        />
                        <label htmlFor="license-upload" className="cursor-pointer">
                          <FileText className="h-8 w-8 text-forest-400 mx-auto mb-2" />
                          <p className="text-sm text-forest-700">Tải lên giấy phép</p>
                        </label>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-forest-800 mb-4">
                        Hình ảnh dịch vụ * (5-15 ảnh)
                      </label>
                      <div className="border-2 border-dashed border-forest-300 rounded-xl p-6 text-center hover:border-forest-400 transition-colors">
                        <input
                          type="file"
                          multiple
                          accept="image/*"
                          onChange={(e) => e.target.files && handleFileUpload('photos', e.target.files)}
                          className="hidden"
                          id="photos-upload"
                        />
                        <label htmlFor="photos-upload" className="cursor-pointer">
                          <Camera className="h-8 w-8 text-forest-400 mx-auto mb-2" />
                          <p className="text-sm text-forest-700">Chọn hình ảnh</p>
                        </label>
                      </div>
                    </div>
                  </div>

                  {formData.businessScale === 'large' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <label className="block text-sm font-semibold text-forest-800 mb-4">
                          Giấy chứng nhận thuế
                        </label>
                        <div className="border-2 border-dashed border-forest-300 rounded-xl p-6 text-center hover:border-forest-400 transition-colors">
                          <input
                            type="file"
                            accept=".pdf,.jpg,.png"
                            onChange={(e) => e.target.files && handleFileUpload('tax', e.target.files)}
                            className="hidden"
                            id="tax-upload"
                          />
                          <label htmlFor="tax-upload" className="cursor-pointer">
                            <FileText className="h-8 w-8 text-forest-400 mx-auto mb-2" />
                            <p className="text-sm text-forest-700">Tải lên chứng nhận thuế</p>
                          </label>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-forest-800 mb-4">
                          Menu/Brochure dịch vụ
                        </label>
                        <div className="border-2 border-dashed border-forest-300 rounded-xl p-6 text-center hover:border-forest-400 transition-colors">
                          <input
                            type="file"
                            accept=".pdf,.jpg,.png"
                            onChange={(e) => e.target.files && handleFileUpload('menu', e.target.files)}
                            className="hidden"
                            id="menu-upload"
                          />
                          <label htmlFor="menu-upload" className="cursor-pointer">
                            <FileText className="h-8 w-8 text-forest-400 mx-auto mb-2" />
                            <p className="text-sm text-forest-700">Tải lên menu/brochure</p>
                          </label>
                        </div>
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>

            <div className="bg-forest-50 rounded-xl p-6">
              <div className="flex items-start space-x-3">
                <Info className="h-5 w-5 text-forest-600 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-forest-700">
                  <p className="font-semibold mb-2">Lưu ý về hình ảnh:</p>
                  <ul className="space-y-1 list-disc list-inside">
                    <li>Hình ảnh rõ nét, ánh sáng tốt</li>
                    <li>Thể hiện được đặc trưng của dịch vụ</li>
                    <li>Không chứa thông tin cá nhân nhạy cảm</li>
                    <li>Kích thước tối đa 5MB mỗi file</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );

      case 'partnership':
        return (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-elegant font-bold text-forest-900 mb-4">
                {formData.businessScale === 'small' ? 'Mục tiêu hợp tác' : 'Kế hoạch hợp tác'}
              </h2>
              <p className="text-forest-700 font-nature">
                Chia sẻ mong muốn và kỳ vọng từ việc hợp tác với CHILL Mộc Châu
              </p>
            </div>

            <div className="space-y-6">
              {formData.businessScale !== 'small' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-forest-800 mb-2">
                      Doanh thu kỳ vọng từ nền tảng (tháng)
                    </label>
                    <select
                      value={formData.expectedRevenue}
                      onChange={(e) => handleInputChange('expectedRevenue', e.target.value)}
                      className="w-full px-4 py-3 border-2 border-forest-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-forest-500 focus:border-transparent"
                    >
                      <option value="">Chọn mức doanh thu</option>
                      <option value="under-10m">Dưới 10 triệu</option>
                      <option value="10-30m">10-30 triệu</option>
                      <option value="30-50m">30-50 triệu</option>
                      <option value="50-100m">50-100 triệu</option>
                      <option value="100m+">Trên 100 triệu</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-forest-800 mb-2">
                      Ngân sách marketing (tháng)
                    </label>
                    <select
                      value={formData.marketingBudget}
                      onChange={(e) => handleInputChange('marketingBudget', e.target.value)}
                      className="w-full px-4 py-3 border-2 border-forest-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-forest-500 focus:border-transparent"
                    >
                      <option value="">Chọn ngân sách</option>
                      <option value="under-5m">Dưới 5 triệu</option>
                      <option value="5-10m">5-10 triệu</option>
                      <option value="10-20m">10-20 triệu</option>
                      <option value="20m+">Trên 20 triệu</option>
                    </select>
                  </div>
                </div>
              )}

              <div>
                <label className="block text-sm font-semibold text-forest-800 mb-4">
                  Mục tiêu hợp tác (Chọn tối đa 3)
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    { id: 'increase-customers', label: 'Tăng số lượng khách hàng' },
                    { id: 'brand-awareness', label: 'Nâng cao nhận diện thương hiệu' },
                    { id: 'revenue-growth', label: 'Tăng doanh thu' },
                    { id: 'market-expansion', label: 'Mở rộng thị trường' },
                    { id: 'service-improvement', label: 'Cải thiện chất lượng dịch vụ' },
                    { id: 'digital-transformation', label: 'Chuyển đổi số' },
                    { id: 'sustainable-tourism', label: 'Du lịch bền vững' },
                    { id: 'community-development', label: 'Phát triển cộng đồng' }
                  ].map((goal) => (
                    <button
                      key={goal.id}
                      type="button"
                      onClick={() => handleArrayToggle('goals', goal.id, 3)}
                      disabled={!formData.goals.includes(goal.id) && formData.goals.length >= 3}
                      className={`p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                        formData.goals.includes(goal.id)
                          ? 'border-forest-500 bg-forest-50 text-forest-800'
                          : 'border-forest-200 hover:border-forest-300 text-forest-700'
                      } ${!formData.goals.includes(goal.id) && formData.goals.length >= 3 ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                      {goal.label}
                    </button>
                  ))}
                </div>
                <div className="text-sm text-forest-600 mt-2">
                  Đã chọn {formData.goals.length}/3 mục tiêu
                </div>
              </div>

              {formData.businessScale !== 'small' && (
                <div>
                  <label className="block text-sm font-semibold text-forest-800 mb-4">
                    Dịch vụ bổ sung quan tâm
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      { id: 'photography', label: 'Dịch vụ chụp ảnh chuyên nghiệp' },
                      { id: 'marketing', label: 'Hỗ trợ marketing & quảng cáo' },
                      { id: 'training', label: 'Đào tạo nhân viên' },
                      { id: 'consulting', label: 'Tư vấn kinh doanh' },
                      { id: 'technology', label: 'Giải pháp công nghệ' },
                      { id: 'logistics', label: 'Hỗ trợ logistics' }
                    ].map((service) => (
                      <button
                        key={service.id}
                        type="button"
                        onClick={() => handleArrayToggle('additionalServices', service.id)}
                        className={`p-3 rounded-xl border-2 transition-all duration-300 text-left text-sm ${
                          formData.additionalServices.includes(service.id)
                            ? 'border-forest-500 bg-forest-50 text-forest-800'
                            : 'border-forest-200 hover:border-forest-300 text-forest-700'
                        }`}
                      >
                        {service.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        );

      case 'complete':
        return (
          <div className="text-center space-y-8">
            <div className="w-24 h-24 bg-gradient-to-br from-forest-500 to-forest-600 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle className="h-12 w-12 text-white" />
            </div>

            <h2 className="text-3xl font-elegant font-bold text-forest-900 mb-4">
              Đăng ký thành công!
            </h2>
            
            <p className="text-lg text-forest-700 font-nature max-w-2xl mx-auto">
              Cảm ơn bạn đã đăng ký trở thành đối tác CHILL Mộc Châu. 
              Chúng tôi sẽ xem xét hồ sơ và liên hệ với bạn trong vòng 24-48 giờ.
            </p>

            <div className="bg-forest-50 rounded-xl p-8 max-w-2xl mx-auto">
              <h3 className="font-semibold text-forest-900 mb-4">Các bước tiếp theo:</h3>
              <div className="space-y-3 text-left">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-forest-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                  <span className="text-forest-700">Xem xét hồ sơ (24-48h)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-forest-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                  <span className="text-forest-700">Liên hệ tư vấn chi tiết</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-forest-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                  <span className="text-forest-700">Ký kết hợp đồng đối tác</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-forest-500 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
                  <span className="text-forest-700">Đào tạo và ra mắt dịch vụ</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/">
                <Button size="lg" variant="forest">
                  Về trang chủ
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline">
                  Liên hệ hỗ trợ
                </Button>
              </Link>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-vintage-50 via-forest-50 to-vintage-100 pt-20">
      {/* Hero Section */}
      <div className="relative py-16 bg-gradient-to-br from-forest-900 via-mountain-900 to-forest-800 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 text-6xl opacity-10 animate-sway">🌲</div>
          <div className="absolute bottom-10 right-10 text-5xl opacity-10 animate-float">🤝</div>
          <div className="absolute top-1/2 left-1/4 text-4xl opacity-5 animate-mist">🏔️</div>
        </div>
        
        <div className="relative z-10 max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-forest-800/50 backdrop-blur-sm rounded-full mb-6 border border-forest-600/30">
            <TreePine className="h-4 w-4 text-forest-400" />
            <span className="text-forest-200 text-sm font-medium">Trở thành đối tác</span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-elegant font-bold text-white mb-6">
            Đăng Ký Đối Tác
            <span className="block text-forest-300">CHILL Mộc Châu</span>
          </h1>
          <p className="text-xl text-forest-200 max-w-3xl mx-auto">
            Tham gia hệ sinh thái du lịch bền vững tại Mộc Châu. 
            Từ quán vỉa hè đến resort cao cấp - tất cả đều được chào đón!
          </p>
        </div>
      </div>

      <div ref={containerRef} className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Progress Sidebar */}
          <div className="lg:w-80 flex-shrink-0">
            <Card variant="forest" className="p-6 sticky top-24">
              <h3 className="font-elegant font-bold text-xl text-forest-900 mb-6">
                Tiến trình đăng ký
              </h3>
              
              <div className="space-y-4">
                {steps.map((step, index) => (
                  <div
                    key={step.id}
                    className={`flex items-center space-x-3 p-3 rounded-xl transition-all duration-300 ${
                      index === currentStep
                        ? 'bg-forest-100 text-forest-800'
                        : index < currentStep
                        ? 'bg-forest-50 text-forest-700'
                        : 'text-forest-600'
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                      index === currentStep
                        ? 'bg-forest-600 text-white'
                        : index < currentStep
                        ? 'bg-forest-500 text-white'
                        : 'bg-forest-200 text-forest-600'
                    }`}>
                      {index < currentStep ? (
                        <Check className="h-4 w-4" />
                      ) : (
                        index + 1
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-sm">{step.title}</div>
                    </div>
                    <step.icon className="h-4 w-4" />
                  </div>
                ))}
              </div>

              {/* Support Info */}
              <div className="mt-8 p-4 bg-vintage-50 rounded-xl border border-vintage-200">
                <h4 className="font-semibold text-forest-900 mb-3 flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  Cần hỗ trợ?
                </h4>
                <div className="space-y-2 text-sm text-forest-700">
                  <div>📞 +84 374 605 731</div>
                  <div>📧 partner@chillmocchau.vn</div>
                  <div>🕐 8:00 - 22:00 hàng ngày</div>
                </div>
              </div>
            </Card>
          </div>

          {/* Main Form */}
          <div className="flex-1">
            <Card variant="forest" className="p-8">
              <div ref={formRef}>
                {renderStep()}
              </div>

              {/* Navigation Buttons */}
              <div className="flex justify-between items-center mt-12 pt-8 border-t border-forest-200">
                <div>
                  {currentStep > 0 && (
                    <Button
                      variant="outline"
                      onClick={prevStep}
                      icon={ArrowLeft}
                      className="border-forest-600 text-forest-600 hover:bg-forest-600 hover:text-white"
                    >
                      Quay lại
                    </Button>
                  )}
                </div>

                <div className="flex items-center space-x-4">
                  {currentStep < steps.length - 1 && (
                    <>
                      {!validateStep(currentStep) && (
                        <div className="flex items-center space-x-2 text-red-600 text-sm">
                          <AlertCircle className="h-4 w-4" />
                          <span>Vui lòng điền đầy đủ thông tin bắt buộc</span>
                        </div>
                      )}
                      <Button
                        variant="forest"
                        onClick={nextStep}
                        disabled={!validateStep(currentStep)}
                        icon={ArrowRight}
                      >
                        {currentStep === steps.length - 2 ? 'Hoàn tất' : 'Tiếp tục'}
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerRegistration;