

/*提取路由模块*/



//1.导入express
const express = require('express');
const handle = require('./controllers/user');
//2.使用express.Router()返回的路由对象
const router = express.Router();
//3.配置路由 

//渲染登录页面的请求
router.get('/signin', user.showSigin);
	//处理登录表单的请求
	.post('/handleSignin', user.handleSignin);

//4.导出路由
module.exports = router;