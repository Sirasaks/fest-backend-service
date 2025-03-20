const express = require('express');
const cors = require('cors');
const userRouter = require('./routes/user.route');
const festRouter = require('./routes/fest.route'); // เพิ่ม route ใหม่เข้ามา

require('dotenv').config();

const app = express(); // สร้าง web server

const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use('/users', userRouter);
app.use('/festivals', festRouter); // เชื่อม route ใหม่

// เอาไว้เทสว่ารับ request response ได้หรือไม่
app.get('/', (request, response) => {
    response.json({
        message: "สวัสดี"
    });
});

// สั่ง start web server โดยเปิด PORT รองรับการ request/response ตามที่กำหนดไว้
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
