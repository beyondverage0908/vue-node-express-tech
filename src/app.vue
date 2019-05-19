<template>
	<div style="text-align: center">
		<div>
			<h2>{{title}}</h2>
		</div>
		<div>
			<p>
				<a href="#">使用"disable-security启动浏览器解决跨域问题</a>
			</p>
		</div>
		---------
		<div>
			<div class="gutter">
				<a href="#" @click="getUserByJsonp">使用jsonp解决跨域问题</a>
			</div>
			------
			<div class="gutter">
				<a href="#" @click="getInfoByAll">CORS*解决跨域</a>
			</div>
			<div class="gutter">
				<a href="#" @click="getInfoByTarget">这特定的域可以访问</a>
			</div>
			<div class="gutter">
				<a href="#" @click="getUserInfoDynamicCORS">动态的获取调用方的源进行判断是否支持跨域</a>
			</div>
			---------
			<div class="gutter">
				<a href="#" @click="simplePost">简单请求Post演示</a>
			</div>
			<div class="gutter">
				<a href="#" @click="complexPost">非简单请求演示POST</a>
			</div>
			-----------
			<div class="gutter">
				<a href="#">基于调用方的代理解决跨域问题(代理)</a>
			</div>
			<div>
				<a href="#">基于被调用的代理解决跨域问题(反向代理)</a>
			</div>
		</div>
		<div style="margin-top: 25px;">{{res}}</div>
	</div>
</template>
<script>
import jsonp from "jsonp";
export default {
	name: "app",
	data() {
		return {
			title: "这里是演示跨域的演示项目",
			res: ""
		};
	},
	mounted() {},
	methods: {
		getUserByJsonp() {
			jsonp("http://127.0.0.1:3000/jsonp", null, (err, res) => {
				this.res = res;
				console.log(res);
			});
		},

		/*********** 设置响应头解决跨域问题 **************/

		getInfoByAll() {
			this.axios.get("/all/info").then(res => {
				console.log(res.data);
				this.res = res.data;
			});
		},
		getInfoByTarget() {
			this.axios.get("/target/info").then(res => {
				console.log(res.data);
				this.res = res.data;
			});
		},
		getUserInfoDynamicCORS() {
			this.axios.get("/dynamic/info?info=动态的设置来源用于解决跨域问题").then(res => {
				this.res = res.data;
			});
		},

		/*******简单请求和非简单请求***********/
		simplePost() {
			this.axios.post("/simple/info?name=jack&info=这是一个简单请求来自于中山陵", { userId: 100 }).then(res => {
				this.res = res.data;
			});
		},
		complexPost() {
			this.axios.post("/complex/info", { name: "Steve", info: '这是一个非简单请求来自于明孝陵' }).then(res => {
				this.res = res.data;
			});
		}
	}
};
</script>
<style>
.gutter {
	margin: 20px 0;
}
</style>


