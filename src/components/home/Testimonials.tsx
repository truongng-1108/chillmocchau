import { Star, Quote, TreePine } from 'lucide-react';
import Card from '../ui/Card';

const testimonials = [
  {
    id: 1,
    name: 'Nguyễn Văn Minh',
    position: 'Doanh nhân, Hà Nội',
    content: 'Chill đã mang đến cho tôi những cây trà cổ thụ tuyệt vời. Không chỉ đẹp mà còn mang lại năng lượng tích cực cho không gian làm việc. Dịch vụ chăm sóc rất chuyên nghiệp.',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100',
    treeAge: '800 năm'
  },
  {
    id: 2,
    name: 'Trần Thị Lan Anh',
    position: 'Chủ resort, Đà Lạt',
    content: 'Thuê cây trang trí cho resort, khách hàng rất ấn tượng với vẻ đẹp cổ kính và huyền bí. Hệ thống theo dõi online giúp tôi yên tâm về chất lượng cây.',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100',
    treeAge: '600 năm'
  },
  {
    id: 3,
    name: 'Lê Hoàng Nam',
    position: 'Nhà sưu tập, TP.HCM',
    content: 'Bộ sưu tập cây trà cổ thụ của Chill rất đa dạng và chất lượng. Mỗi cây đều có câu chuyện riêng, được chăm sóc tận tâm. Tôi đã sở hữu 5 cây và đều rất hài lòng.',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=100',
    treeAge: '1200 năm'
  }
];

const Testimonials = () => {
  return (
    <section className="relative py-24 bg-gradient-to-br from-moss-50 via-forest-50 to-earth-50 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 leaf-pattern opacity-20" />
      <div className="absolute top-20 right-10 text-5xl opacity-10 animate-float">🌿</div>
      <div className="absolute bottom-20 left-10 text-6xl opacity-10 animate-sway">🍃</div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-forest-100 rounded-full mb-6">
            <TreePine className="h-4 w-4 text-forest-600" />
            <span className="text-forest-700 text-sm font-medium">Câu chuyện khách hàng</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-nature font-bold text-forest-900 mb-6">
            Những Trải Nghiệm
            <span className="block text-moss-700">Đáng Nhớ</span>
          </h2>
          <p className="text-xl text-forest-700 max-w-3xl mx-auto leading-relaxed">
            Lắng nghe những chia sẻ chân thực từ khách hàng đã tin tưởng và đồng hành 
            cùng Chill trong hành trình khám phá Mộc Châu.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              hover
              variant="forest"
              className="p-8 h-full group"
            >
              {/* Quote icon */}
              <div className="relative mb-6">
                <Quote className="h-12 w-12 text-forest-400 group-hover:text-forest-500 transition-colors duration-300" />
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-moss-400 to-forest-500 rounded-full flex items-center justify-center">
                  <TreePine className="h-3 w-3 text-white" />
                </div>
              </div>
              
              {/* Content */}
              <p className="text-forest-800 mb-6 italic leading-relaxed group-hover:text-forest-700 transition-colors duration-300">
                "{testimonial.content}"
              </p>
              
              {/* Rating */}
              <div className="flex mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              {/* Tree age badge */}
              <div className="inline-flex items-center space-x-1 px-3 py-1 bg-forest-200 rounded-full mb-6">
                <span className="text-xs font-medium text-forest-700">Cây {testimonial.treeAge}</span>
              </div>
              
              {/* Author */}
              <div className="flex items-center">
                <div className="relative">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full mr-4 border-2 border-forest-200 group-hover:border-forest-300 transition-colors duration-300"
                  />
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-gradient-to-br from-forest-500 to-moss-500 rounded-full border-2 border-white" />
                </div>
                <div>
                  <div className="font-semibold text-forest-900 group-hover:text-forest-800 transition-colors duration-300">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-forest-600">
                    {testimonial.position}
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-6 right-6 w-2 h-2 bg-moss-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-6 left-6 w-1 h-1 bg-forest-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;