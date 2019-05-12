const express = require('express')
const app = express()
const path = require('path');

app.use('/static', express.static('public'))

app.get('/', function (req, res) {
  // res.send('Hello world!');

  // 发送文件到浏览器
  res.sendFile(path.join(__dirname, 'views', 'home.html')); // methods: 1
  // res.sendFile('404.html', {root: path.join(__dirname, '../views')});
});

// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

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

// 使用get发送请求
app.get('/user', function (req, res) {
  const user = {
    title: '设定CORS为指定域名',
    address: 'shanghai',
    income: 7000,
    description: "设定CORS为资源所有CORS为指定域名"
  }
  res.header("Access-Control-Allow-Origin", "http://localhost:9001");
  res.header("Access-Control-Allow-Methods", "GET");
  res.json(user)
});

// 使用get发送请求
app.get('/userinfo', function (req, res) {
  const user = {
    title: '设定CORS为*',
    age: 26,
    address: 'shanghai',
    income: 7000,
    description: "设定CORS为资源所有为*"
  }
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "*");
  res.json(user)
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});