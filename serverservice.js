const express = require('express');
const cors = require('cors')
const userRouter = require('./routes/user.route')


require('dotenv').config()

const app = express() // สร้าง web sever

const PORT = process.env.PORT

app.use(cors())
app.use(express.json())
app.use('/users', userRouter)



//เอาไว้เทสว่ารับ request response ได้หรือไม่
app.get('/', (request, response) => {
    response.json({
        message: "`สวัสดี`"
    })
})


//สั่ง start web sever โดยเปิด PORT รองกับการ request/response ตามที่กำหนดไว้
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})