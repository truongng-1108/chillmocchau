import { TreePine, Mountain, Users } from 'lucide-react';

const RippedPaperSection = () => {
  return (
    <section className="relative py-24 bg-gradient-to-br from-vintage-200 via-vintage-100 to-forest-50 overflow-hidden">
      {/* Torn paper edges */}
      <div className="absolute top-0 left-0 w-full h-16 bg-forest-100 torn-paper" />
      <div className="absolute bottom-0 right-0 w-full h-20 bg-vintage-300 torn-paper transform rotate-180" />
      
      {/* Background texture */}
      <div className="absolute inset-0 wood-grain opacity-40" />
      
      {/* Floating elements */}
      <div className="absolute top-10 left-10 text-6xl opacity-10 animate-sway">📜</div>
      <div className="absolute bottom-10 right-10 text-5xl opacity-15 animate-float">🍂</div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Story Content */}
          <div className="space-y-8 animate-fade-up">
            <div className="inline-flex items-center space-x-3 px-6 py-3 bg-vintage-100/80 backdrop-blur-sm rounded-full border border-forest-200/50">
              <TreePine className="h-5 w-5 text-forest-600 animate-branch-sway" />
              <span className="text-forest-700 text-sm font-nature font-medium">Câu chuyện của chúng tôi</span>
            </div>
            
            <h2 className="font-elegant font-bold text-forest-900">
              <span className="block text-4xl lg:text-6xl">Hành Trình</span>
              <span className="block text-3xl lg:text-5xl text-forest-700 mt-2">Bảo Tồn</span>
            </h2>
            
            <div className="space-y-6 text-forest-800 font-nature leading-relaxed">
              <p className="text-lg">
                Từ những đỉnh núi cao nhất của Tây Bắc, nơi sương mù bao phủ quanh năm, 
                chúng tôi đã tìm thấy những cây trà cổ thụ với tuổi đời hàng nghìn năm.
              </p>
              
              <p className="text-lg">
                Mỗi cây trà không chỉ là một sinh vật sống, mà còn là nhân chứng lịch sử, 
                mang trong mình câu chuyện của núi rừng và con người bản địa.
              </p>
              
              <p className="text-lg font-semibold text-forest-900">
                SEEME cam kết bảo tồn và chăm sóc những báu vật thiên nhiên này, 
                mang đến cho bạn cơ hội sở hữu một phần của lịch sử.
              </p>
            </div>
            
            {/* Quote section */}
            <div className="relative p-8 bg-vintage-50/80 backdrop-blur-sm rounded-3xl border-l-4 border-forest-500 shadow-wood">
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-forest-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xl">"</span>
              </div>
              <p className="text-forest-800 font-nature italic text-lg leading-relaxed">
                Mỗi cây trà cổ thụ là một kho báu của thiên nhiên, 
                chứa đựng tinh hoa của đất trời và thời gian.
              </p>
              <div className="mt-4 text-forest-600 font-nature font-semibold">
                - Người sáng lập SEEME
              </div>
            </div>
          </div>
          
          {/* Visual Content */}
          <div className="relative animate-slide-in">
            {/* Main image with creative frame */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-forest-500/20 to-vintage-500/20 rounded-3xl transform rotate-3" />
              <div className="relative overflow-hidden rounded-3xl shadow-2xl border-8 border-vintage-100">
                <img
                  src="https://i.pinimg.com/1200x/98/85/f3/9885f38dc02d4aad94ffe92bfc728894.jpg"
                  alt="Rừng trà cổ thụ trong sương mù"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-900/40 to-transparent" />
              </div>
            </div>
            
            {/* Floating stats cards */}
            <div className="absolute -top-8 -right-8 bg-vintage-50/95 backdrop-blur-md p-6 rounded-2xl shadow-wood border border-forest-200/30 animate-float">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-forest-500 to-forest-600 rounded-xl flex items-center justify-center">
                  <TreePine className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-nature font-bold text-2xl text-forest-800">500+</div>
                  <div className="text-sm text-forest-600">Cây được bảo tồn</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-8 -left-8 bg-vintage-50/95 backdrop-blur-md p-6 rounded-2xl shadow-wood border border-mountain-200/30 animate-float" style={{ animationDelay: '1s' }}>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-mountain-500 to-mountain-600 rounded-xl flex items-center justify-center">
                  <Mountain className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-nature font-bold text-2xl text-mountain-800">15+</div>
                  <div className="text-sm text-mountain-600">Vùng núi khám phá</div>
                </div>
              </div>
            </div>
            
            <div className="absolute top-1/2 -right-12 bg-vintage-50/95 backdrop-blur-md p-6 rounded-2xl shadow-wood border border-vintage-200/30 animate-float" style={{ animationDelay: '2s' }}>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-vintage-500 to-vintage-600 rounded-xl flex items-center justify-center">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-nature font-bold text-2xl text-vintage-800">1000+</div>
                  <div className="text-sm text-vintage-600">Khách hàng tin tưởng</div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-1/4 -left-4 w-8 h-8 bg-forest-400/30 rounded-full animate-float" style={{ animationDelay: '3s' }} />
            <div className="absolute bottom-1/3 -right-6 w-6 h-6 bg-vintage-400/40 rounded-full animate-float" style={{ animationDelay: '4s' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RippedPaperSection;