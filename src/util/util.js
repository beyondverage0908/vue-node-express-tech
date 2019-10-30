// (function(root) {
// 	var collection = {
// 		toString: function(str) {
// 			return str + ''
// 		},
// 		addNumber: function(num) {
// 			return 100 + num
// 		},
// 		addString: function(str) {
// 			return '123' + str
// 		},
// 		release: function () {
// 			console.log('release')
// 		}
// 	}
// 	root['collection'] = collection
// })(window)

var e = {
	PI: 3.1415926,
	addStep: function (o, a) {
		return o + a
	}
}

module.exports = e