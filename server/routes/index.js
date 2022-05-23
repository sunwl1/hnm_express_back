const express = require('express');
const router = express.Router();
const { sequelize, Post } = require('../models');

// force 테이블 요소 초기화 할건지 true가 초기화
sequelize.sync({force : false})
.then(() =>{
    console.log('db 실행')
    // 정상 구동
})
.catch((err) => {
    console.log(err);
    // 에러 발생
})

router.get('/', async(req,res) => {
    let post = await POST.create({
        comment : req.comment,
    });
    res.seed();
});

module.exports = router;

