export default {
	parseToInt(str) {
		return parseInt(str) || 0
	},
	parseToString(str) {
		if (typeof str === 'string') return str
		return ''
	},
	parseToFloat(str) {
		return parseFloat(str) || 0.0 
	}
}

