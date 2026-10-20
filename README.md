# 💖 Website Chúc Mừng 20/10 Dành Riêng Cho Mỹ Hòa

Website quà tặng tình yêu lãng mạn, tinh tế với hiệu ứng 3D Three.js, hoa rơi, âm nhạc du dương và các tương tác bất ngờ.

---

## 📂 Danh mục tệp tin
- `index.html`: Giao diện phong bì thư tình 3D, trái tim xoay 3D, vườn hoa, album ảnh và hộp quà bí mật.
- `style.css`: Hệ thống thiết kế chuẩn Romantic Pink, Glassmorphism, Responsive hoàn hảo trên điện thoại.
- `script.js`: Toàn bộ logic tương tác, Three.js 3D Heart, đồng hồ đếm ngày yêu, hiệu ứng gõ chữ, âm thanh Web Audio API và cấu hình cá nhân hóa.

---

## ⚙️ Hướng dẫn chỉnh sửa & Cá nhân hóa
Mở file `script.js`, ở ngay những dòng đầu tiên là khu vực `CONFIG`:
```javascript
const CONFIG = {
  loverName: "Mỹ Hòa",                 // Tên người yêu của bạn
  loverNickname: "Công chúa Mỹ Hòa",   // Biệt danh đáng yêu
  senderName: "Anh của em",            // Tên của bạn
  
  // Ngày kỷ niệm yêu nhau (Năm-Tháng-Ngày)
  anniversaryDate: "2023-10-20T00:00:00",

  // Lời chúc 20/10
  wishLetter: `Chúc công chúa của anh một ngày 20/10 thật hạnh phúc ❤️...`,

  // Danh sách ảnh kỷ niệm (thay đường dẫn ảnh của hai bạn vào đây)
  memories: [ ... ]
};
```

---

## 🚀 Cách 1: Xem trực tiếp trên máy tính
- Chỉ cần nhấp đúp (Double-click) vào file `index.html` để mở ngay trên trình duyệt Chrome, Edge, Safari hoặc Firefox.
- Hoặc mở bằng VS Code với extension **Live Server** (chuột phải chọn *Open with Live Server*).

---

## 🌐 Cách 2: Đưa lên mạng miễn phí để gửi link cho Mỹ Hòa mở trên điện thoại

### 1. Dùng Netlify Drop (Cực nhanh - chỉ mất 30 giây, không cần tài khoản phức tạp)
1. Truy cập: [https://app.netlify.com/drop](https://app.netlify.com/drop)
2. Kéo toàn bộ thư mục `em_20_10` (chứa `index.html`, `style.css`, `script.js`) thả vào ô tròn trên trang web.
3. Trong 5 giây, Netlify sẽ cấp cho bạn một đường link website trực tiếp (ví dụ: `https://my-hoa-20-10.netlify.app`).
4. Sao chép link này và gửi qua Messenger/Zalo/Instagram cho Mỹ Hòa!

### 2. Dùng Vercel
1. Đăng ký tài khoản miễn phí tại [vercel.com](https://vercel.com).
2. Tải CLI: `npm i -g vercel` sau đó chạy lệnh `vercel` tại thư mục này, bấm Enter vài lần là có link ngay.

### 3. Dùng GitHub Pages
1. Tạo một repository mới trên GitHub (ví dụ: `tang-my-hoa-20-10`).
2. Tải toàn bộ file lên repository.
3. Vào phần **Settings** -> **Pages** -> chọn nhánh `main` và nhấn **Save**.
4. Website sẽ xuất hiện tại `https://<ten-user>.github.io/tang-my-hoa-20-10`.
