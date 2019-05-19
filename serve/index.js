const express = require('express')
const app = express()
const path = require('path');
const bodyParser = require('body-parser');

// 中间件区域
app.use('/static', express.static('public'))

// 中间件，为所有请求设置跨域通配
// app.use(function (req, res, next) {
// 	res.header("Access-Control-Allow-Origin", "*");
// 	res.header("Access-Control-Allow-Methods", "*");
// 	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
// 	res.header("Access-Control-Max-Age", "3600"); // 用户缓存预检命令
// 	next();
// });

//此项必须在 bodyParser.json 下面,为参数编码
app.use(bodyParser.json());

app.get('/', function (req, res) {
	// res.send('Hello world!');
	// 发送文件到浏览器
	res.sendFile(path.join(__dirname, 'views', 'home.html')); // methods: 1
	// res.sendFile('404.html', {root: path.join(__dirname, '../views')});
});

// 使用josnp发送get请求
app.get('/jsonp', (req, res) => {
	const info = {
		title: 'jsonp',
		length: '1000',
		description: '这是使用jsonp方式发送的get请求'
	}
	// res.header('Content-type','application/json');
	// res.header('Charset','utf8');
	res.jsonp(info);
})

// ------------通过设置response header中Access-Control-Allow-Origin---允许跨域请求

// 使用get发送请求
app.get('/all/info', function (req, res) {
	const user = {
		info: "设定CORS为资源所有为通配符*"
	}
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Methods", "*");
	res.json(user)
});

// 使用get发送请求
app.get('/target/info', function (req, res) {
	const user = {
		title: '设定CORS为指定域名',
		info: "zhiding特定的域名可以访问该接口"
	}
	res.header("Access-Control-Allow-Origin", "http://localhost:9001");
	res.header("Access-Control-Allow-Methods", "GET");
	res.json(user)
});

app.get('/dynamic/info', (req, res) => {
	const data = req.query;
	const origin = req.headers.origin;
	res.header('Access-Control-Allow-Origin', origin);
	res.json(data);
})


/*************简单请求和非简单请求*************8*****/

app.post('/simple/info', (req, res) => {
	const query = req.query;
	res.json(query);
});

app.post('/complex/info', (req, res) => {
	const user = req.body;
	res.json(user);
});


app.listen(3000, function () {
	console.log('Example app listening on port 3000!');
});