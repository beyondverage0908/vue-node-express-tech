<template>
	<div style="text-align: center">
		<div>
			<h2>{{title}}</h2>
		</div>
		<div>
			<img src="http://127.0.0.1:3000/static/images/angular.png" alt>
		</div>
		<div>
			<div class="gutter">
				<a href="#" @click="getUserByJsonp">演示一(使用jsonp发起请求)</a>
			</div>
			<div class="gutter">
				<a href="#" @click="getUser2">演示二(设置CORS指定域和方法))</a>
			</div>
			<div class="gutter">
				<a href="#" @click="getUser3">演示三(CORS*)</a>
			</div>
			<div class="gutter">
				<a href="#" @click="getUserInfoDynamicCORS">演示三（动态的CORS）</a>
			</div>
			<div class="gutter">
				<a href="#" @click="putUser">非简单请求演示Put</a>
			</div>
			<div class="gutter">
				<a href="#" @click="postUser">非简单请求演示POST</a>
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
		getUser2() {
			this.axios.get("/user").then(res => {
				console.log(res.data);
				this.res = res.data;
			});
		},
		getUser3() {
			this.axios.get("/userinfo").then(res => {
				console.log(res.data);
				this.res = res.data;
			});
		},
		getUserInfoDynamicCORS() {
			this.axios.post("/dynamic/userinfo", { desc: "dynamic user info" }).then(res => {
				this.res = res.data;
			});
		},
		putUser() {
			this.axios.put("/user", { userId: 100 }).then(res => {
				this.res = res.data;
			});
		},
		postUser() {
			this.axios.post("/user/add", { name: "小李子", age: 18 }).then(res => {
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


