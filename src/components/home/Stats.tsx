import { TreePine, Mountain, Users, Award } from 'lucide-react';

const Stats = () => {
  const stats = [
    {
      icon: TreePine,
      number: '500+',
      label: 'Cây trà cổ thụ',
      description: 'Được bảo tồn và chăm sóc',
      color: 'from-forest-500 to-moss-500'
    },
    {
      icon: Mountain,
      number: '15+',
      label: 'Vùng núi',
      description: 'Trải dài Tây Bắc Việt Nam',
      color: 'from-mountain-500 to-mountain-600'
    },
    {
      icon: Users,
      number: '1000+',
      label: 'Khách hàng',
      description: 'Tin tưởng và đồng hành',
      color: 'from-earth-500 to-earth-600'
    },
    {
      icon: Award,
      number: '20+',
      label: 'Năm kinh nghiệm',
      description: 'Trong lĩnh vực trà cổ thụ',
      color: 'from-moss-500 to-forest-600'
    }
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-forest-50 via-moss-50 to-earth-50 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 leaf-pattern opacity-30" />
      <div className="absolute top-10 right-10 text-4xl opacity-10 animate-sway">🌿</div>
      <div className="absolute bottom-10 left-10 text-5xl opacity-10 animate-float">🍃</div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-nature font-bold text-forest-900 mb-4">
            Hành Trình Của Chúng Tôi
          </h2>
          <p className="text-lg text-forest-700 max-w-2xl mx-auto">
            Những con số ấn tượng trong hành trình bảo tồn và phát triển rừng trà cổ thụ
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 text-center hover:bg-white/90 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl border border-forest-200/30"
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`} />
              
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              
              {/* Number */}
              <div className="text-4xl font-bold text-forest-800 mb-2 group-hover:text-forest-700 transition-colors duration-300">
                {stat.number}
              </div>
              
              {/* Label */}
              <div className="text-lg font-semibold text-forest-700 mb-2">
                {stat.label}
              </div>
              
              {/* Description */}
              <div className="text-sm text-forest-600">
                {stat.description}
              </div>
              
              {/* Decorative element */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-forest-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;