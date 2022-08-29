<template>
	<view class="question-item">
		<image src="../../static/logo.png" class="item-img"></image>
		<view class="item-text">
			<view class="item-title">{{item.title}}</view>
			<view class="item-tips">HTML高频面试题</view>
		</view>
		<view class="item-btn" @tap="goDetail(item)">开始刷题</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		props: {
			item: {
				type: Object,
				default: {}
			}
		},
		methods: {
			//跳转开始刷题
			goDetail(item) {
				//假数据，如果目录下totipList存在就跳转到刷题界面，否则就提示
				if (item.totipList) {
					uni.navigateTo({
						url: `/pages/subject/subject?data=` + encodeURIComponent(JSON.stringify(item))
					})
				} else {
					uni.showToast({
						title: "暂无题目",
						icon: 'none'
					})
				}
			}
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

	.question-item {
		width: 100%;
		height: 150rpx;
		display: flex;
		align-items: center;
		margin-bottom: 15rpx;
		background-color: #fff;
		border-radius: 10rpx;
	}

	.item-img {
		width: 118rpx;
		height: 118rpx;
		padding: 20rpx;
	}

	.item-text {
		flex: 1;
		padding: 0 40rpx;
		flex-direction: column;
		justify-content: space-around;
		text-align: left;
	}

	.item-title {
		height: 29rpx;
		font-size: 30rpx;
		font-weight: 400;
		color: #333;
		padding-bottom: 40rpx;
	}

	.item-tips {
		height: 24rpx;
		font-size: 24rpx;
		font-weight: 400;
		color: #afafaf;
	}

	.item-btn {
		width: 120rpx;
		height: 30rpx;
		padding: 20rpx;
		font-size: 30rpx;
		font-weight: 400;
		color: #0054ff;
	}
</style>
