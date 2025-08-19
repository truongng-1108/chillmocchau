import React from 'react';
import { Star, Quote, TreePine, Leaf } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Nguyễn Văn Minh',
    position: 'Doanh nhân, Hà Nội',
    content: 'SEEME đã mang đến cho tôi những cây trà cổ thụ tuyệt vời. Không chỉ đẹp mà còn mang lại năng lượng tích cực cho không gian làm việc. Dịch vụ chăm sóc rất chuyên nghiệp.',
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
    content: 'Bộ sưu tập cây trà cổ thụ của SEEME rất đa dạng và chất lượng. Mỗi cây đều có câu chuyện riêng, được chăm sóc tận tâm. Tôi đã sở hữu 5 cây và đều rất hài lòng.',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=100',
    treeAge: '1200 năm'
  }
];

const NatureTestimonials = () => {
  return (
    <section className="relative py-24 bg-gradient-to-br from-forest-50 via-vintage-100 to-forest-100 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 wood-grain opacity-20" />
      <div className="absolute top-20 right-10 text-7xl opacity-10 animate-float">🌿</div>
      <div className="absolute bottom-20 left-10 text-8xl opacity-10 animate-sway">🍃</div>
      
      {/* Torn paper sections */}
      <div className="absolute top-0 left-0 w-2/3 h-24 bg-vintage-200/30 torn-paper" />
      <div className="absolute bottom-0 right-0 w-full h-32 bg-forest-100/20 torn-paper transform rotate-180" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-3 px-6 py-3 bg-forest-100/80 backdrop-blur-sm rounded-full mb-8 border border-forest-200/50">
            <TreePine className="h-5 w-5 text-forest-600 animate-branch-sway" />
            <span className="text-forest-700 text-sm font-nature font-medium">Câu chuyện khách hàng</span>
            <Leaf className="h-4 w-4 text-forest-500 animate-float" />
          </div>
          
          <h2 className="font-elegant font-bold text-forest-900 mb-8">
            <span className="block text-5xl lg:text-7xl">Những Trải Nghiệm</span>
            <span className="block text-4xl lg:text-6xl text-forest-700 mt-2">Đáng Nhớ</span>
          </h2>
          
          {/* Decorative divider */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-forest-400 to-transparent rounded-full" />
            <Quote className="h-6 w-6 text-forest-400" />
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-vintage-400 to-transparent rounded-full" />
          </div>
          
          <p className="text-xl text-forest-700 max-w-3xl mx-auto leading-relaxed font-nature">
            Lắng nghe những chia sẻ chân thực từ khách hàng đã tin tưởng và đồng hành 
            cùng SEEME trong hành trình khám phá rừng trà cổ thụ.
          </p>
        </div>

        {/* Testimonials with asymmetric layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`group relative animate-fade-up ${
                index === 1 ? 'lg:transform lg:translate-y-8' : ''
              }`}
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <div className="relative h-full bg-vintage-50/90 backdrop-blur-sm rounded-3xl p-8 shadow-wood border border-forest-200/30 hover:shadow-forest transition-all duration-500 hover:-translate-y-2 wood-grain">
                {/* Quote decoration */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-forest-500 to-forest-600 rounded-full flex items-center justify-center shadow-lg">
                  <Quote className="h-6 w-6 text-white" />
                </div>
                
                {/* Tree age badge */}
                <div className="absolute -top-3 -right-3 px-4 py-2 bg-gradient-to-r from-vintage-500 to-vintage-600 text-white text-sm font-nature font-medium rounded-full shadow-lg">
                  Cây {testimonial.treeAge}
                </div>
                
                {/* Content */}
                <div className="pt-4 space-y-6">
                  <p className="text-forest-800 font-nature italic text-lg leading-relaxed group-hover:text-forest-700 transition-colors duration-300">
                    "{testimonial.content}"
                  </p>
                  
                  {/* Rating */}
                  <div className="flex justify-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  {/* Author */}
                  <div className="flex items-center space-x-4 pt-4 border-t border-forest-200/50">
                    <div className="relative">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full border-4 border-forest-200 group-hover:border-forest-300 transition-colors duration-300 shadow-lg"
                      />
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-br from-forest-500 to-vintage-500 rounded-full border-2 border-white flex items-center justify-center">
                        <TreePine className="h-3 w-3 text-white" />
                      </div>
                    </div>
                    <div>
                      <div className="font-nature font-bold text-forest-900 group-hover:text-forest-800 transition-colors duration-300">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-forest-600 font-nature">
                        {testimonial.position}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute top-6 right-6 w-3 h-3 bg-vintage-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-float" />
                <div className="absolute bottom-6 left-6 w-2 h-2 bg-forest-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Leaf decoration */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Leaf className="h-4 w-4 text-forest-400 animate-float" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NatureTestimonials;