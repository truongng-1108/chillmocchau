import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, TreePine, Mountain, Leaf, User, Mail, Lock, ArrowRight} from 'lucide-react';
import { gsap } from 'gsap';

const Auth = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  // Refs for GSAP animations
  const containerRef = useRef<HTMLDivElement>(null);
  const mountainRef = useRef<HTMLDivElement>(null);
  const cloudsRef = useRef<HTMLDivElement>(null);
  const leavesRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const mistRef = useRef<HTMLDivElement>(null);
  const forestImmersionRef = useRef<HTMLDivElement>(null);
  const treeLayersRef = useRef<HTMLDivElement>(null);
  const portalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initial page load animations
    const tl = gsap.timeline();
    
    // Set initial states
    gsap.set([mountainRef.current, cloudsRef.current, formRef.current, titleRef.current], {
      opacity: 0,
      y: 100
    });
    
    gsap.set(leavesRef.current?.children || [], {
      opacity: 0,
      scale: 0,
      rotation: -180
    });

    // Animate in sequence
    tl.to(mountainRef.current, {
      duration: 1.5,
      opacity: 1,
      y: 0,
      ease: "power3.out"
    })
    .to(cloudsRef.current, {
      duration: 1.2,
      opacity: 1,
      y: 0,
      ease: "power2.out"
    }, "-=1")
    .to(titleRef.current, {
      duration: 1,
      opacity: 1,
      y: 0,
      ease: "back.out(1.7)"
    }, "-=0.8")
    .to(formRef.current, {
      duration: 1,
      opacity: 1,
      y: 0,
      ease: "power3.out"
    }, "-=0.6")
    .to(leavesRef.current?.children || [], {
      duration: 0.8,
      opacity: 1,
      scale: 1,
      rotation: 0,
      stagger: 0.1,
      ease: "back.out(1.7)"
    }, "-=0.4");

    // Continuous animations
    gsap.to(cloudsRef.current?.children || [], {
      duration: 20,
      x: "100vw",
      repeat: -1,
      ease: "none"
    });

    gsap.to(leavesRef.current?.children || [], {
      duration: 6,
      y: "+=20",
      rotation: "+=10",
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      stagger: 0.5
    });

    // Mist animation
    gsap.to(mistRef.current?.children || [], {
      duration: 8,
      x: "50px",
      opacity: 0.7,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      stagger: 1
    });

  }, []);

  useEffect(() => {
    // Form switch animation
    if (formRef.current) {
      gsap.fromTo(formRef.current, 
        { 
          rotationY: isLogin ? 180 : -180,
          opacity: 0,
          scale: 0.8
        },
        {
          duration: 0.8,
          rotationY: 0,
          opacity: 1,
          scale: 1,
          ease: "back.out(1.7)"
        }
      );
    }
  }, [isLogin]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isLogin) {
      setIsLoggingIn(true);
      await startForestImmersionEffect();
    } else {
      // Register animation
      gsap.to(formRef.current, {
        duration: 0.3,
        scale: 0.95,
        yoyo: true,
        repeat: 1,
        ease: "power2.inOut"
      });
      console.log('Register submitted:', formData);
    }
  };

  const startForestImmersionEffect = async () => {
    const tl = gsap.timeline();
    
    // Phase 1: Form disappears with smooth mystical effect
    tl.to(formRef.current, {
      duration: 0.8,
      scale: 0.7,
      opacity: 0,
      rotationY: 20,
      y: -50,
      ease: "power3.inOut"
    })
    
    // Phase 2: Show forest immersion overlay with smooth fade
    .set(forestImmersionRef.current, { display: 'block' })
    .fromTo(forestImmersionRef.current, 
      { opacity: 0 },
      { 
        duration: 1,
        opacity: 1,
        ease: "power2.inOut"
      }
    )
    
    // Phase 3: Portal opening effect with smooth scaling
    .fromTo(portalRef.current,
      { 
        scale: 0,
        rotation: 0,
        opacity: 0
      },
      {
        duration: 1.5,
        scale: 1,
        rotation: 360,
        opacity: 1,
        ease: "elastic.out(1, 0.5)"
      }, "-=0.3")
    
    // Phase 4: Trees growing with smooth staggered animation
    .fromTo(treeLayersRef.current?.children || [],
      {
        scale: 0.1,
        y: 0,
        opacity: 0,
        rotationZ: 0
      },
      {
        duration: 1.8,
        scale: 1.2,
        y: 0,
        opacity: 0.8,
        rotationZ: 0,
        stagger: 0.15,
        ease: "power2.out"
      }, "-=0.5")
    
    // Phase 5: Smooth zoom into forest with perspective
    .to(treeLayersRef.current,
      {
        duration: 2.5,
        scale: 4,
        z: 200,
        rotationX: 5,
        ease: "power1.inOut"
      }, "-=1")
    
    // Phase 6: Smooth color transition
    .to(forestImmersionRef.current,
      {
        duration: 1.2,
        backgroundColor: "rgba(122, 148, 62, 0.8)",
        ease: "power1.inOut"
      }, "-=1.5")
    
    // Phase 7: Final smooth fade to white
    .to(forestImmersionRef.current,
      {
        duration: 1,
        backgroundColor: "rgba(255, 255, 255, 1)",
        ease: "power1.out",
        onComplete: () => {
          // Navigate to home after animation
          gsap.delayedCall(0.5, () => {
            navigate('/');
          });
        }
      }, "-=0.5");

    // Enhanced continuous mystical effects
    gsap.fromTo(".mystical-particle", 
      {
        scale: 0,
        opacity: 0
      },
      {
      duration: 3,
      y: "-=100",
      opacity: 1,
      rotation: "+=360",
      scale: 1,
      repeat: -1,
      stagger: 0.3,
      ease: "sine.inOut"
    });

    gsap.fromTo(".forest-mist",
      {
        x: -50,
        opacity: 0
      },
      {
      duration: 4,
      x: "+=50",
      opacity: 0.6,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    // Add smooth camera shake effect
    gsap.to(treeLayersRef.current, {
      duration: 0.1,
      x: "+=2",
      yoyo: true,
      repeat: 5,
      ease: "power2.inOut"
    });

    // Smooth portal pulse during transition
    gsap.to(portalRef.current, {
      duration: 1.5,
      scale: 1.1,
      opacity: 0.9,
      yoyo: true,
      repeat: 3,
      ease: "sine.inOut"
    });
  };

  const switchMode = () => {
    // Switch animation
    gsap.to(formRef.current, {
      duration: 0.4,
      rotationY: 90,
      opacity: 0.5,
      ease: "power2.in",
      onComplete: () => {
        setIsLogin(!isLogin);
      }
    });
  };

  return (
    <div ref={containerRef} className="min-h-screen relative overflow-hidden bg-gradient-to-br from-mountain-900 via-forest-800 to-vintage-900">
      {/* Animated Background Elements */}
      
      {/* Mountain Silhouettes */}
      <div ref={mountainRef} className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-full h-2/3 bg-gradient-to-t from-mountain-800/60 to-transparent mountain-silhouette" />
        <div className="absolute bottom-0 right-0 w-3/4 h-1/2 bg-gradient-to-t from-forest-700/40 to-transparent transform skew-x-12" />
        <div className="absolute bottom-0 left-1/4 w-1/2 h-3/4 bg-gradient-to-t from-vintage-800/30 to-transparent transform -skew-x-6" />
      </div>

      {/* Floating Clouds */}
      <div ref={cloudsRef} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 -left-32 text-6xl opacity-30 text-mist-300">☁️</div>
        <div className="absolute top-40 -left-48 text-4xl opacity-20 text-mist-400">☁️</div>
        <div className="absolute top-60 -left-24 text-5xl opacity-25 text-mist-200">☁️</div>
      </div>

      {/* Floating Leaves */}
      <div ref={leavesRef} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-32 left-16 text-3xl opacity-40 text-forest-400">🍃</div>
        <div className="absolute top-64 right-24 text-2xl opacity-30 text-vintage-400">🍂</div>
        <div className="absolute bottom-48 left-32 text-4xl opacity-35 text-forest-300">🌿</div>
        <div className="absolute top-96 left-2/3 text-2xl opacity-25 text-forest-500">🍃</div>
        <div className="absolute bottom-64 right-16 text-3xl opacity-40 text-vintage-300">🍂</div>
      </div>

      {/* Mist Effect */}
      <div ref={mistRef} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-full h-32 bg-gradient-to-r from-mist-200/10 via-mist-100/20 to-transparent" />
        <div className="absolute top-1/2 right-0 w-2/3 h-24 bg-gradient-to-l from-mist-300/15 to-transparent" />
        <div className="absolute bottom-1/3 left-1/4 w-3/4 h-20 bg-gradient-to-r from-transparent via-mist-200/10 to-transparent" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        
        {/* Forest Immersion Overlay */}
        <div 
          ref={forestImmersionRef}
          className="fixed inset-0 z-50 bg-gradient-to-br from-forest-900 via-mountain-800 to-vintage-900"
          style={{ display: 'none' }}
        >
          {/* Portal Effect */}
          <div 
            ref={portalRef}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="relative w-96 h-96 rounded-full bg-gradient-to-br from-forest-400/30 to-vintage-400/30 backdrop-blur-sm border-4 border-forest-300/50">
              {/* Portal rings */}
              <div className="absolute inset-4 rounded-full border-2 border-forest-400/40 animate-spin" style={{ animationDuration: '8s' }} />
              <div className="absolute inset-8 rounded-full border-2 border-vintage-400/40 animate-spin" style={{ animationDuration: '6s', animationDirection: 'reverse' }} />
              <div className="absolute inset-12 rounded-full border-2 border-forest-300/40 animate-spin" style={{ animationDuration: '10s' }} />
              
              {/* Portal center */}
              <div className="absolute inset-16 rounded-full bg-gradient-to-br from-forest-500/60 to-vintage-500/60 backdrop-blur-md flex items-center justify-center">
                <TreePine className="h-16 w-16 text-white animate-pulse" />
              </div>
            </div>
          </div>

          {/* Tree Layers for Depth Effect */}
          <div ref={treeLayersRef} className="absolute inset-0">
            {/* Trees positioned around the portal in a circle */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Background layer - outer circle */}
              <div className="absolute w-[800px] h-[800px] opacity-30">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 text-8xl text-forest-600">🌲</div>
                <div className="absolute top-1/4 right-0 text-7xl text-forest-700">🌲</div>
                <div className="absolute top-3/4 right-0 text-8xl text-forest-500">🌲</div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-7xl text-forest-600">🌲</div>
                <div className="absolute top-3/4 left-0 text-8xl text-forest-700">🌲</div>
                <div className="absolute top-1/4 left-0 text-7xl text-forest-500">🌲</div>
                <div className="absolute top-1/8 right-1/4 text-6xl text-forest-600">🌲</div>
                <div className="absolute bottom-1/8 left-1/4 text-6xl text-forest-700">🌲</div>
              </div>
            </div>
            
            {/* Middle layer - medium circle */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="absolute w-[600px] h-[600px] opacity-50">
                <div className="absolute top-1/8 left-1/2 transform -translate-x-1/2 text-9xl text-forest-600">🌲</div>
                <div className="absolute top-1/2 right-1/8 text-8xl text-forest-700">🌲</div>
                <div className="absolute bottom-1/8 right-1/3 text-9xl text-forest-500">🌲</div>
                <div className="absolute bottom-1/8 left-1/3 text-8xl text-forest-600">🌲</div>
                <div className="absolute top-1/2 left-1/8 text-9xl text-forest-700">🌲</div>
                <div className="absolute top-1/3 right-1/6 text-7xl text-forest-500">🌲</div>
              </div>
            </div>
            
            {/* Foreground layer - inner circle */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="absolute w-[400px] h-[400px] opacity-70">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 text-10xl text-forest-700">🌲</div>
                <div className="absolute top-1/2 right-0 text-9xl text-forest-600">🌲</div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-10xl text-forest-500">🌲</div>
                <div className="absolute top-1/2 left-0 text-9xl text-forest-700">🌲</div>
              </div>
            </div>
          </div>

          {/* Mystical Particles */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="mystical-particle absolute w-2 h-2 bg-forest-400 rounded-full opacity-60"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`
                }}
              />
            ))}
          </div>

          {/* Forest Mist */}
          <div className="absolute inset-0">
            <div className="forest-mist absolute top-1/4 left-0 w-full h-32 bg-gradient-to-r from-mist-200/20 via-mist-100/30 to-transparent" />
            <div className="forest-mist absolute top-1/2 right-0 w-2/3 h-24 bg-gradient-to-l from-mist-300/25 to-transparent" />
            <div className="forest-mist absolute bottom-1/3 left-1/4 w-3/4 h-20 bg-gradient-to-r from-transparent via-mist-200/20 to-transparent" />
          </div>

          {/* Loading text */}
          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-center">
            <div className="text-white font-elegant text-2xl mb-4 animate-pulse">
              Đang đi sâu vào rừng cổ thụ...
            </div>
            <div className="flex items-center justify-center space-x-2">
              <div className="w-3 h-3 bg-forest-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
              <div className="w-3 h-3 bg-forest-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
              <div className="w-3 h-3 bg-forest-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
            </div>
          </div>
        </div>

        <div className="max-w-md w-full space-y-8">
          
          {/* Animated Title */}
          <div ref={titleRef} className="text-center mt-16">
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="relative">
                <TreePine className="h-16 w-16 text-forest-400 animate-branch-sway" />
                <Leaf className="absolute -top-2 -right-2 h-6 w-6 text-vintage-400 animate-float" />
                <Mountain className="absolute -bottom-2 -left-2 h-5 w-5 text-mountain-400 opacity-60" />
              </div>
              <div className="flex flex-col">
                <span className="font-elegant font-bold text-4xl text-white tracking-wider">SEEME</span>
                <span className="text-sm text-forest-300 -mt-1 font-nature">Rừng Trà Cổ Thụ</span>
              </div>
            </div>
          </div>

          {/* Animated Form */}
          <div ref={formRef} className="relative">
            <div className="bg-vintage-50/95 backdrop-blur-lg rounded-3xl shadow-2xl border border-forest-200/30 p-8 wood-grain">
              {/* Decorative corners */}
              <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-forest-400 rounded-tl-lg opacity-60" />
              <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-forest-400 rounded-tr-lg opacity-60" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-forest-400 rounded-bl-lg opacity-60" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-forest-400 rounded-br-lg opacity-60" />
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name field for register */}
                {!isLogin && (
                  <div className="relative group">
                    <label htmlFor="name" className="block text-sm font-nature font-medium text-forest-700 mb-2">
                      Họ và tên
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-forest-500 group-focus-within:text-forest-600 transition-colors duration-300" />
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required={!isLogin}
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-4 bg-white/80 border-2 border-forest-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-forest-500 focus:border-transparent text-forest-800 placeholder-forest-500 transition-all duration-300 hover:border-forest-300"
                        placeholder="Nhập họ và tên của bạn"
                      />
                    </div>
                  </div>
                )}

                {/* Email field */}
                <div className="relative group">
                  <label htmlFor="email" className="block text-sm font-nature font-medium text-forest-700 mb-2">
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-forest-500 group-focus-within:text-forest-600 transition-colors duration-300" />
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-4 py-4 bg-white/80 border-2 border-forest-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-forest-500 focus:border-transparent text-forest-800 placeholder-forest-500 transition-all duration-300 hover:border-forest-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                {/* Password field */}
                <div className="relative group">
                  <label htmlFor="password" className="block text-sm font-nature font-medium text-forest-700 mb-2">
                    Mật khẩu
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-forest-500 group-focus-within:text-forest-600 transition-colors duration-300" />
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? 'text' : 'password'}
                      required
                      value={formData.password}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-12 py-4 bg-white/80 border-2 border-forest-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-forest-500 focus:border-transparent text-forest-800 placeholder-forest-500 transition-all duration-300 hover:border-forest-300"
                      placeholder="Nhập mật khẩu"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-forest-500 hover:text-forest-600 transition-colors duration-300"
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                </div>

                {/* Confirm Password field for register */}
                {!isLogin && (
                  <div className="relative group">
                    <label htmlFor="confirmPassword" className="block text-sm font-nature font-medium text-forest-700 mb-2">
                      Xác nhận mật khẩu
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-forest-500 group-focus-within:text-forest-600 transition-colors duration-300" />
                      <input
                        id="confirmPassword"
                        name="confirmPassword"
                        type={showConfirmPassword ? 'text' : 'password'}
                        required={!isLogin}
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-12 py-4 bg-white/80 border-2 border-forest-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-forest-500 focus:border-transparent text-forest-800 placeholder-forest-500 transition-all duration-300 hover:border-forest-300"
                        placeholder="Nhập lại mật khẩu"
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-forest-500 hover:text-forest-600 transition-colors duration-300"
                      >
                        {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                      </button>
                    </div>
                  </div>
                )}

                {/* Remember me / Forgot password */}
                {isLogin && (
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="h-4 w-4 text-forest-600 focus:ring-forest-500 border-forest-300 rounded"
                      />
                      <label htmlFor="remember-me" className="ml-2 block text-sm text-forest-700 font-nature">
                        Ghi nhớ đăng nhập
                      </label>
                    </div>
                    <div className="text-sm">
                      <a href="#" className="font-nature text-forest-600 hover:text-forest-500 transition-colors duration-300">
                        Quên mật khẩu?
                      </a>
                    </div>
                  </div>
                )}

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isLoggingIn}
                  className="group relative w-full flex justify-center items-center py-4 px-6 border border-transparent text-lg font-nature font-medium rounded-2xl text-white bg-gradient-to-r from-forest-600 to-forest-700 hover:from-forest-500 hover:to-forest-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-forest-500 transition-all duration-300 shadow-forest hover:shadow-2xl hover:scale-105 overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {/* Shimmer effect */}
                  {!isLoggingIn && (
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  )}
                  
                  <span className="flex items-center space-x-2 relative z-10">
                    {isLoggingIn ? (
                      <>
                        <TreePine className="h-5 w-5 animate-spin" />
                        <span>Đang đăng nhập...</span>
                      </>
                    ) : (
                      <>
                        <TreePine className="h-5 w-5 group-hover:animate-branch-sway" />
                        <span>{isLogin ? 'Đăng nhập' : 'Đăng ký'}</span>
                        <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </>
                    )}
                  </span>
                </button>

                {/* Switch mode */}
                <div className="text-center">
                  <p className="text-forest-700 font-nature">
                    {isLogin ? 'Chưa có tài khoản?' : 'Đã có tài khoản?'}
                    <button
                      type="button"
                      onClick={switchMode}
                      className="ml-2 font-semibold text-forest-600 hover:text-forest-500 transition-colors duration-300 underline decoration-forest-400 hover:decoration-forest-500"
                    >
                      {isLogin ? 'Đăng ký ngay' : 'Đăng nhập'}
                    </button>
                  </p>
                </div>

                {/* Divider */}
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-forest-300" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-vintage-50 text-forest-600 font-nature">hoặc</span>
                  </div>
                </div>

                {/* Social login */}
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    className="group relative flex justify-center items-center py-3 px-4 border-2 border-forest-300 rounded-2xl text-forest-700 bg-white/50 hover:bg-forest-50 focus:outline-none focus:ring-2 focus:ring-forest-500 transition-all duration-300 hover:border-forest-400"
                  >
                    <span className="text-xl mr-2">🌐</span>
                    <span className="font-nature font-medium">Google</span>
                  </button>
                  <button
                    type="button"
                    className="group relative flex justify-center items-center py-3 px-4 border-2 border-forest-300 rounded-2xl text-forest-700 bg-white/50 hover:bg-forest-50 focus:outline-none focus:ring-2 focus:ring-forest-500 transition-all duration-300 hover:border-forest-400"
                  >
                    <span className="text-xl mr-2">📱</span>
                    <span className="font-nature font-medium">Facebook</span>
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Back to home */}
          <div className="text-center">
            <Link
              to="/"
              className="inline-flex items-center space-x-2 text-forest-300 hover:text-forest-200 transition-colors duration-300 font-nature group"
            >
              <TreePine className="h-4 w-4 group-hover:animate-branch-sway" />
              <span>Quay về trang chủ</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-forest-400/40 rounded-full animate-float" style={{ animationDelay: '0s' }} />
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-vintage-400/60 rounded-full animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-forest-300/30 rounded-full animate-float" style={{ animationDelay: '4s' }} />
        <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-mountain-400/50 rounded-full animate-float" style={{ animationDelay: '1s' }} />
      </div>
    </div>
  );
};

export default Auth;