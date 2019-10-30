<style>
</style>
<template>
	<div style="text-align: center">
		<Tab />
		<div>
			<router-view></router-view>
		</div>
	</div>
</template>
<script>
import jsonp from "jsonp";
import Tab from './components/tabs'
export default {
	name: "app",
	components: {
		Tab
	},
	data() {
		return {
		
		};
	},
	mounted() {},
	methods: {}
};
</script>


