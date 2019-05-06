const express = require('express')
const app = express()
const path = require('path');

app.use('/static', express.static('public'))

app.get('/', function(req, res) {
  // res.send('Hello world!');

  // 发送文件到浏览器
  res.sendFile(path.join(__dirname, '../views', 'home.html')); // methods: 1
  // res.sendFile('404.html', {root: path.join(__dirname, '../views')});
});

app.get('/user/:id', function(req, res) {
  const user = {
    name: 'ss',
    age: 26,
    address: 'shanghai',
    income: 17000
  }
  res.json(user)
});

app.put('/user', function(req, res) {
  res.json({code: 200, message: '修改成功'});
})

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});
