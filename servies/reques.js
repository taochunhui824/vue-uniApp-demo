export default {
	common: {
		baseUrl: 'https://www.fastmock.site/mock/aa3640d8ee5e989889fde81cb8262390/tch',
		data: {},
		header: {
			"Content-Type": 'application/json',
			"Content-Type": 'application/x-www-form-urlencoded'
		},
		method: 'GET',
		dataType: 'json'
	},
	request(options = {}) {
		options.url = this.common.baseUrl + options.url
		options.data = this.common.data || options.data
		options.header = this.common.header || options.header
		options.dataType = this.common.dataType || options.dataType
		return new Promise((res, rej) => {
			uni.showLoading({
				title: '加载中...'
			})
			uni.request({
				...options,
				success(result) {
					if (result.data.resultCode != 200) {
						setTimeout(function() {
							uni.hideLoading()
						}, 300)
					}
					setTimeout(function() {
						uni.hideLoading()
					}, 300)
					let data = result.data.data
					if (data) {
						res(data)
					} else {
						res(result.data)
					}
				}
			})
		})
	}
}
