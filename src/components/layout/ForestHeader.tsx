@@ .. @@
               <div className="flex flex-col">
                <span className="font-elegant font-bold text-3xl text-forest-800 tracking-wider">CHILL</span>
                <span className="text-xs text-forest-600 -mt-1 font-nature">Mộc Châu</span>
               </div>

  const navigation = [
    { name: 'Trang chủ', href: '/', current: location.pathname === '/' },
    { name: 'Dịch vụ', href: '/services', current: location.pathname === '/services' },
    { name: 'Bản đồ', href: '/maps', current: location.pathname === '/maps' },
    { name: 'Đặc sản', href: '/products', current: location.pathname === '/products' },
    { name: 'Booking', href: '/my-trees', current: location.pathname === '/my-trees' },
    { name: 'Liên hệ', href: '/contact', current: location.pathname === '/contact' },
  ];