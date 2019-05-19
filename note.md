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


-------------------------------

预检命令是可以缓存的，通过设置相应头中的`Access-Controller-Max-Age`，表示对预检命令缓存的时间周期，在这一段时间内，非简单请求即将不在发出预检命令。你可以通过在浏览器的inspect中`disable-cache`清除缓存