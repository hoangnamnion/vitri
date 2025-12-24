const express = require('express');
const cors = require('cors');
const app = express();

// Sử dụng cổng do Render cấp hoặc 3000 nếu chạy local
const PORT = process.env.PORT || 3000;

app.use(cors()); // Cho phép nhận data từ mọi nguồn
app.use(express.json()); // Cho phép đọc JSON

// API nhận vị trí
app.post('/luu-vi-tri', (req, res) => {
    try {
        const { link_ggmap, device } = req.body;
        // Lấy giờ Việt Nam
        const time = new Date().toLocaleString("vi-VN", { timeZone: "Asia/Ho_Chi_Minh" });

        // Nội dung in ra Logs
        const logContent = `
        🔔 =========== CÓ KHÁCH MỚI =========== 🔔
        ⏰ Thời gian: ${time}
        📱 Thiết bị:  ${device}
        📍 VỊ TRÍ:    ${link_ggmap}
        ========================================
        `;

        console.log(logContent); // In ra console của Render

        res.json({ status: 'success' });
    } catch (error) {
        console.error(error);
        res.status(400).send("Lỗi xử lý");
    }
});

// Trang chủ để test server sống hay chết
app.get('/', (req, res) => {
    res.send("<h1>Server đang hoạt động tốt!</h1>");
});

app.listen(PORT, () => {
    console.log(`Server đang chạy tại cổng ${PORT}`);
});
