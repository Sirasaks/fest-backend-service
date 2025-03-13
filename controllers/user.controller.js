//จัดการฐานข้อมูล
const { PrismaClient } = require('@prisma/client')
//จัดการการ upload
const multer = require('multer')
const path = require('path')
const fs = require('fs')
const { response } = require('express')

//สร้างตัวแปล Prisma เพื่อเอาไปใช้งาน
const prisma = new PrismaClient()

//การ upload ...................
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "images/users");
    } ,
    filename: (req, file, cb) => {
        cb(null, 'user_'+ Math.floor(Math.random()* Date.now()) + path.extname(file.originalname));
    }
})
exports.uploadUser = multer({
     storage: storage,
     limits: {
         fileSize: 1000000
     },
     fileFilter: (req, file, cb) => {
         const fileTypes = /jpeg|jpg|png/;
         const mimeType = fileTypes.test(file.mimetype);
         const extname = fileTypes.test(path.extname(file.originalname));
         if(mimeType && extname) {
             return cb(null, true);
         }
         cb("Error: Images Only");
     }
}).single("userImage");

//เอาข้อมูลที่ส่งมาจาก frontend เพิ่ม (Create/Insert) ลงตาราง DB
exports.createUser = async (request, response) => {
    try {
        const result = await prisma.user_tb.create({
            data: {
                userFullname: request.body.userFullname,
                userName: request.body.userName,
                userPassword: request.body.userPassword,
                userImage: request.file ? request.file.path.replace('images\\users\\', '') : '',
            } 
        })
        //-------
        response.status(201).json({
            message: 'Ok',
            info: result
        })
    } catch (error) {
        response.status(500).json(
            {
                message: 'พบปัญหาในการทำงาน', error
            }
        )
        console.log('error', error)
    }
}