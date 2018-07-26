
/*入口文件*/


//1.导包
const express = require('express');
const bodyParser = require('body-parser');
const router = require('./02router.js');


//2.配置包
const app = express();
//express-art-template
app.engine('html', require('express-art-template'));
// body-parser
app.use(bodyParser.urlencoded({ extended: false }));
// 统一处理静态资源
app.use('/public', express.static('./public'));
//处理第三方包
app.use('/node_modules', express.static('./node_modules'));

//3.挂载路由
app.use(router);
//4.绑定端口
app.listen(12345, () => {
    console.log('run-----');
});
