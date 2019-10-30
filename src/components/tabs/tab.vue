<style scoped>
.tab {
	display: inline-flex;
	list-style: none;
	border: solid 2px #52BE80;
	padding: 0;
	border-radius: 5px;
}
.right-line {
	border-right: solid #52BE80 2px;
}
.selected-tab {
	background-color: #52BE80;
	color: #fff;
}
.tab-item {
	padding: 0 15px;
	height: 26px;
	line-height: 26px;
	cursor: pointer;
}
</style>

<template>
	<div>
		<ul class="tab">
			<li class="tab-item" 
				:class="{'right-line': index !== tabs.length - 1, 'selected-tab': selectedTabIndex === index}" 
				v-for="(item, index) in tabs"
				@click="onClickTab(index)">{{item.label}}</li>
		</ul>
	</div>
</template>
<script>
export default {
	name: 'tab',
	data() {
		return {
			tabs: [
				{ key: 'yanshi', label: '跨域演示' },
				{ key: 'module', label: '模块化' }
			],
			selectedTabIndex: 0,
		}
	},
	methods: {
		onClickTab(idx) {
			this.selectedTabIndex = idx
			if (idx === 0) {
				this.$router.push({path: '/demo'})
			} else {
				this.$router.push({path: '/module-demo'})
			}
		}
	}
}
</script>

