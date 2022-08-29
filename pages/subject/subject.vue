<template>
	<view class="subject">
		<view class="subject-content">
			<view class="subject-common">
				<!-- 定义计数 -->
				<view class="dots">
					<text>
						{{toSwiperIndex + 1}}/{{totalNum}}
					</text>
				</view>
				<!-- 中间滑动内容 -->
				<swiper :current="toSwiperIndex" @change="toSwiperTab" :style="'height:'+ clientHeight +'px'">
					<swiper-item v-for="(item,index) in subjectData.totipList" :key="index">
						<scroll-view scroll-y="true" :style="'height:'+ clientHeight +'px'">
							<!-- 每道题组件 -->
							<SubjectItem :item="item" :index="toSwiperIndex"></SubjectItem>
						</scroll-view>
					</swiper-item>
				</swiper>
			</view>
		</view>
		<!-- 底部/上下题btn -->
		<view class="subject-check">
			<view @tap="goBefore">
				上一题
			</view>
			<view class="next" @tap="goNext">
				下一题
			</view>
		</view>
	</view>
</template>

<script>
	import SubjectItem from "@/component/subject-item/subject-item.vue"
	export default {
		data() {
			return {
				clientHeight: 0,
				subjectData: {},
				totalNum: 0,
				toSwiperIndex: 0,

			}
		},
		components: {
			SubjectItem
		},
		methods: {
			//下一题
			goNext() {
				if (this.toSwiperIndex === this.totalNum - 1) {
					uni.showToast({
						title: "等待更新",
						icon: "none"
					})
					return
				} else {
					this.toSwiperIndex++
					if(this.toSwiperIndex === this.subjectData.totipList.length - 1) {
						//继续请求
					}
				}
			},
			//上一题
			goBefore() {
				if (this.toSwiperIndex === 0) {
					uni.showToast({
						title: "不能在往前了～",
						icon: "none"
					})
					return
				}
				this.toSwiperIndex--
			},
			//滑动轮播触发改变
			toSwiperTab(e) {
				var that = this
				this.toSwiperIndex = Number(e.target.current)
				const current = this.toSwiperIndex + 1
				if (current === this.toSwiperIndex - 1) {
					// 继续请求
					// this.xxx
				} else if (current === this.totalNum) {
					uni.showToast({
						title: "等待更新",
						icon: "none"
					})
				}
			},
			//获取可视区域的高度
			getClientHeight() {
				const res = uni.getSystemInfoSync()

				return res.statusBarHeight
			}
		},
		onReady() {
			uni.getSystemInfo({
				success: (res) => {
					this.clientHeight = res.windowHeight - this.getClientHeight()
					//获取计数高度
					let dots = uni.createSelectorQuery().in(this).select('.dots')
					dots.boundingClientRect((data) => {
						//data包含元素的高度信息
						console.log(data.height)
						this.clientHeight = this.clientHeight - data.height
					}).exec(function(res) {
						//这个方法必须执行，即使什么也不做，否则不会获取到信息
					})
					//获取切换题目高度
					let info = uni.createSelectorQuery().in(this).select('.subject-check')
					info.boundingClientRect((data) => {
						//data包含元素的高度信息
						console.log(data.height)
						this.clientHeight = this.clientHeight - data.height
					}).exec(function(res) {
						//这个方法必须执行，即使什么也不做，否则不会获取到信息
					})
				}
			})
		},
		onLoad(option) {
			//获取跳转传参
			this.subjectData = JSON.parse(decodeURIComponent(option.data))
			//获取条数
			this.totalNum = this.subjectData.totipList ? this.subjectData.totipList.length : 0
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

	swiper {
		height: auto;
	}

	.subject {
		width: 100vw;
		position: relative;
		background: #f0f3f7;
		box-sizing: border-box;
	}

	.subject-content {
		padding: 0 37rpx;
		width: 100%;
		box-sizing: border-box;
	}

	.dots {
		height: 30rpx;
		text-align: center;
		font-size: 32rpx;
		font-weight: 500;
		color: #344356;
		opacity: .6;
		padding: 20rpx 0;
	}

	.subject-check {
		width: 100vw;
		position: fixed;
		left: 0;
		bottom: 30rpx;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}

	.subject-check view {
		width: 311rpx;
		height: 80rpx;
		line-height: 80rpx;
		text-align: center;
		border-radius: 40rpx;
		color: #fff;
		background-color: rgb(90, 103, 247);
	}

	.subject-check .next {
		background-color: rgb(90, 139, 245);
	}
</style>
