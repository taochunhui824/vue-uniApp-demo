<template>
	<view class="totip">
		<!-- 内容分类数据 -->
		<view class="totip-content">
			<!-- 搜索区域 -->
			<!-- <view class="totip-header">
				<input type="text" placeholder="请输入搜索的关键字">
			</view> -->
			<scroll-view scroll-y="true" :style="'height:' + clientHeight + 'px'">
				<view class="commdity" :style="'height:' + clientHeight + 'px'">
					<!-- 面试题板块 -->
					<Totip :dataList="dataList"></Totip>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import {
		getClassList
	} from "@/servies/class.js"
	import Totip from "@/component/totip/totip.vue"
	export default {
		data() {
			return {
				dataList: [], //面试题分类列表数据
				clientHeight: null
			}
		},
		components: {
			Totip
		},
		onLoad() {
			this.init()
		},
		methods: {
			//初始化面试题分类数据
			async init() {
				const res = await getClassList({})
				this.dataList = res
				console.log(this.dataList)
			}
		},
		onReady() {
			uni.getSystemInfo({
				success: (res) => {
					this.clientHeight = res.windowHeight
					//获取头部高度 select里面的参数就比如css选择器一样的选择元素
					// let info = uni.createSelectorQuery().in(this).select('.totip-header')
					// info.boundingClientRect((data) => {
					// 	//data包含元素的高度信息
					// 	//data.height 头部的高度 68是tabbar
					// 	console.log(data)
					// 	this.clientHeight = res.windowHeight - data.height - 68
					// }).exec(function(res){
					// 	//这个方法必须执行，即使什么也不做，否则不会获取到信息
					// })
				}
			})
		}
	}
</script>

<style scoped>
	/* 取消滚动条 */
	scroll-view ::-webkit-scrollbar {
		display: none;
		width: 0 !important;
		height: 0 !important;
		-webkit-appearance: none;
		background: transparent;
		color: transparent;
	}

	.totip {
		width: 100vw;
		height: 100vh;
	}

	.totip-content {
		/* margin-top: 10px; */
		padding: 0 25rpx;
	}

	/* 搜索框 */
	/* .totip-header {
		width: 500rpx;
		height: 60rpx;
		line-height: 60rpx;
		margin: 20rpx 0;
		background-color: #fff;
		border-radius: 45rpx;
		display: flex;
		justify-content: center;
	} */
	.commdity {
		padding-top: 20rpx;
	}
</style>
