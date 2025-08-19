@@ .. @@
 const testimonials = [
   {
     id: 1,
     name: 'Nguyễn Văn Minh',
-    position: 'Doanh nhân, Hà Nội',
-    content: 'SEEME đã mang đến cho tôi những cây trà cổ thụ tuyệt vời. Không chỉ đẹp mà còn mang lại năng lượng tích cực cho không gian làm việc. Dịch vụ chăm sóc rất chuyên nghiệp.',
+    position: 'Du khách, Hà Nội',
+    content: 'Chill Mộc Châu đã mang đến cho gia đình tôi kỳ nghỉ tuyệt vời. Homestay đẹp, dịch vụ chu đáo và đặc biệt là tour săn mây rất ấn tượng. Chúng tôi sẽ quay lại!',
     rating: 5,
     avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100',
-    treeAge: '800 năm'
+    service: 'Homestay + Tour'
   },
   {
     id: 2,
     name: 'Trần Thị Lan Anh',
-    position: 'Chủ resort, Đà Lạt',
-    content: 'Thuê cây trang trí cho resort, khách hàng rất ấn tượng với vẻ đẹp cổ kính và huyền bí. Hệ thống theo dõi online giúp tôi yên tâm về chất lượng cây.',
+    position: 'Blogger du lịch, TP.HCM',
+    content: 'Trải nghiệm ẩm thực tại Mộc Châu thật tuyệt vời! Các món đặc sản được chế biến tinh tế, không gian nhà hàng view núi rất lãng mạn. Đội ngũ phục vụ nhiệt tình.',
     rating: 5,
     avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100',
-    treeAge: '600 năm'
+    service: 'Ẩm thực'
   },
   {
     id: 3,
     name: 'Lê Hoàng Nam',
-    position: 'Nhà sưu tập, TP.HCM',
-    content: 'Bộ sưu tập cây trà cổ thụ của SEEME rất đa dạng và chất lượng. Mỗi cây đều có câu chuyện riêng, được chăm sóc tận tâm. Tôi đã sở hữu 5 cây và đều rất hài lòng.',
+    position: 'Nhiếp ảnh gia, Đà Nẵng',
+    content: 'Dịch vụ thuê xe của Chill Mộc Châu rất chuyên nghiệp. Xe mới, sạch sẽ và đầy đủ giấy tờ. Đặc biệt là có hướng dẫn các điểm chụp ảnh đẹp, giúp tôi có những shot tuyệt vời.',
     rating: 5,
     avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=100',
-    treeAge: '1200 năm'
+    service: 'Thuê xe'
   }
 ];
@@ .. @@
                 {/* Tree age badge */}
-                <div className="absolute -top-3 -right-3 px-4 py-2 bg-gradient-to-r from-vintage-500 to-vintage-600 text-white text-sm font-nature font-medium rounded-full shadow-lg">
-                  Cây {testimonial.treeAge}
+                <div className="absolute -top-3 -right-3 px-4 py-2 bg-gradient-to-r from-vintage-500 to-vintage-600 text-white text-sm font-nature font-medium rounded-full shadow-lg">
+                  {testimonial.service}
                 </div>
@@ .. @@
           <p className="text-xl text-forest-700 max-w-3xl mx-auto leading-relaxed font-nature">
-            Lắng nghe những chia sẻ chân thực từ khách hàng đã tin tưởng và đồng hành 
-            cùng SEEME trong hành trình khám phá rừng trà cổ thụ.
+            Lắng nghe những chia sẻ chân thực từ du khách đã tin tưởng và đồng hành 
+            cùng Chill Mộc Châu trong hành trình khám phá vẻ đẹp thiên nhiên.
           </p>