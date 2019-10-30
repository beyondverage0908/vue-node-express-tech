const express = require('express')
const app = express()
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

// 中间件区域
app.use('/static', express.static('public'))
// cookie解析
app.use(cookieParser());

// 中间件，为所有请求设置跨域通配
app.use(function (req, res, next) {

	console.log('request be listen: ', req.path);

	// res.header("Access-Control-Allow-Origin", "*");
	// res.header("Access-Control-Allow-Methods", "*");
	
	// 动态获取请求头中的origin
	// const origin = req.headers.origin;
	// if (origin && origin.length) {
	// 	res.header('Access-Control-Allow-Origin', origin)
	// }

	// 动态的获取预检命令的请求头
	// const headers = req.headers['access-control-request-headers'];
	// if (headers && headers.length) {
	// 	res.header('Access-Control-Allow-Headers', headers);
	// }

	// res.header("Access-Control-Allow-Headers", "Content-Type, X-Header-1, X-Header-2"); // 设置响应头
	// res.header("Access-Control-Max-Age", "3600"); // 用户缓存预检命令

	// 跨域支持cookie
	// res.header('Access-Control-Allow-Origin', req.headers.origin);
	// res.header('Access-Control-Allow-Credentials', true);
	next();
});

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
	console.log(req.query);

	setTimeout(() => {
		res.jsonp(info);
	}, 5000)
})

// ------------通过设置response header中Access-Control-Allow-Origin---允许跨域请求

// 使用get发送请求
app.get('/test/all/info', function (req, res) {
	const user = {
		info: "设定CORS为资源所有为通配符*"
	}
	res.json(user)
});

// 使用get发送请求
app.get('/test/target/info', function (req, res) {
	const user = {
		title: '设定CORS为指定域名',
		info: "zhiding特定的域名可以访问该接口"
	}
	res.json(user)
});

app.get('/test/dynamic/info', (req, res) => {
	const data = req.query;
	// const origin = req.headers.origin;
	// res.header('Access-Control-Allow-Origin', origin);
	res.json(data);
})

/**************跨域支持Cookies **************************/

app.get('/test/cookie', (req, res) => {
	console.log('Cookies:', req.cookies);
	res.json(req.cookies);
});

/*************简单请求和非简单请求******************/

app.post('/test/simple/info', (req, res) => {
	const query = req.query;
	res.json(query);
});

app.post('/test/complex/info', (req, res) => {
	const user = req.body;
	res.json(user);
});

app.post('/test/complex/header/info', (req, res) => {
	const info = req.body;
	res.json(info);
})

/**************代理和反向代理请求 ********/
app.get('/test/api/tech/proxy/info', (req, res) => {
	const info = req.query;
	info.status = 200;
	res.json(info);
});

app.post('/test/api/proxy/info', (req, res) => {
	const info = req.body;
	info.status = 200;
	res.json(info);
});

app.post('/test/api/reserse/proxy/info', (req, res) => {
	const info = req.body;
	res.json(info);
})



// 

app.get('/cqa/api/user/cur-info', (req, res) => {
	const info = {
		code: 200,
		data: {
			userName: '李小华',
			duration: 123,
			loveNum: 5,
			starLevel: 34,
			topStarLevel: 38,
			uid: 1111,
			userAlias: '胡铁花',
			userAvatar: 'https://avatar-static.segmentfault.com/207/487/2074876616-5bee3cd5ba16c_huge256'
		},
		success: true,
		message: '成功'
	}
	res.json(info);
})

app.get('/cqa/api/user-love/get', (req, res) => {
	const info = {
		code: 200,
		data: true,
		message: '领取失败，您已有爱心或段位',
		success: true
	}
	res.json(info);
})

app.post('/cqa/api/quiz/', (req, res) => {
	let info = {
		code: 601,
		message: '您的爱心不够，请领取爱心',
		success: false,
		data: {
			flag: true,
			total: 10,
			timeLimit: 10
		}
	}
	res.json(info);
})

app.post('/cqa/api/quiz/answer', (req, res) => {
	const body = req.body;
	const info = {
		code: 200
	}
	const rightIndex = new Date().getTime() % 3 + 1;
	console.log(body, rightIndex);
	if (body.answerIndex == rightIndex) {
		info.message = '成功';
		info.success = true;
		info.data = {
			correct: true,
			quizContinue: true,
			quizSuccess: false,
			remark: 'xxxx',
			rightIndex: 1
		}
	} else {
		info.message = '失败';
		info.success = true;
		info.data = {
			correct: false,
			quizContinue: true,
			quizSuccess: false,
			remark: 'xxxx',
			rightIndex: 4
		}
	}
	if (body.currentIndex === 3) {
		info.data.quizContinue = false;
		info.data.quizSuccess = true;
	}
	res.json(info);
})

app.get('/cqa/api/quiz/question', (req, res) => {
	let t = new Date().getTime();
	const info = {
		code: 200,
		data: {
			questionTitle: '中国的诗仙是谁？',
			answers: ['李白' + t, '王维' + t, '杜牧' + t, '杜甫' + t],
			questionId: new Date().getTime() % 3 + 1
		},
		success: true
	}
	res.json(info);
})


/*************端口监听 */

app.listen(3000, function () {
	console.log('Example app listening on port 3000!');
});