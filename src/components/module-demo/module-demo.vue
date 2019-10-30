<template>
	<div>
		使用gulp模块打包 -- {{t}}
	</div>
</template>
<script>
// import pipe from '../../util/pipe'
import pipe from '@/util/pipe'
// const util = require('@/util/util')
import util from '../../../gulp-dist/js/util'
export default {
	name: 'module-demo',
	data() {
		return {
			t: ''
		}
	},
	mounted() {
		console.log(pipe.parseToInt('123456'))
		this.t = util.addStep(10, 50)
	}
}
</script>

