import Vue from 'vue'
/* eslint-disable no-new */
new Vue({
	el: '#app',
	mounted: () => {
		// 第一次进入页面加载loading动画
		Vue.nextTick(() => {
			document.body.removeChild(document.querySelector('.xx-svg__global'))
		})
	}
})
