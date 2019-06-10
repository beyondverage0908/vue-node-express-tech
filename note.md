## 简单请求

工作中常见的简单请求：

GET
POST
HEAD
请求header中没有自定义头
Content-Type为一下几种
  text/plain
  multipart/form-data
  application/x-www-form-urlencoded


--------------------------------------------

工作中常见的非简单请求有

  put, delete的ajax请求方法
  发送json格式的ajax请求
  带有自定义头的ajax请求


### Node of Express 获取数据的集中方式

1. 获取body中得数据，const body = req.body;
2. 获取url中得数据, const query = req.query;
3. 获取url的参数, const params = req.params;
4. 被遗弃的方法 const params = req.params('name') 