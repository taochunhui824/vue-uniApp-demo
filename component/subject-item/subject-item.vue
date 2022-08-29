<template>
	<view class="swiper-item">
		<view class="item-tittle">
			<text>{{index + 1}}.{{item.totip}}</text>
			<view v-if="item.answer">
				<MDParserHighlight class="answer" :resource="item.answer"></MDParserHighlight>
			</view>
		</view>
		<!-- <view class="item-content">
			<view class="item-result">
				<image class="item-img" src="../../static/result.png"></image>
				<view class="reslut">结果:</view>
			</view>
			<view>
				<MDParserHighlight class="answer"></MDParserHighlight>
			</view>
			<view class="item-reslut">
				<image class="item-img" src="../../static/explain.png"></image>
				<view class="reslut">解析:</view>
			</view>
			<view class="parsing">
				<MDParserHighlight class="answer"></MDParserHighlight>
			</view>
		</view> -->
	</view>
</template>

<script>
	import MDParserHighlight from "@/component/cmder-MDParserHighlight/index.vue"
	export default {
		props: {
			item: {
				type: Object,
				default: {}
			},
			index: {
				type: Number,
				default: 1
			}
		},
		data() {
			return {
				
			}
		},
		components: {
			MDParserHighlight
		},
		methods: {
			
		}
	}
</script>

<style scoped>
	.swiper-item {
		margin-top: 60rpx;
		margin-bottom: 100rpx;
	}
	.item-title {
		width: 100%;
		height: 100%;
		font-size: 30rpx;
		padding: 0 20rpx;
		font-weight: normal;
		color: #344356;
		box-sizing: border-box;
	}
	.item-content {
		display: flex;
		flex-direction: column;
		padding: 0 20rpx;
		box-sizing: border-box;
	}
	.item-reslut {
		display: flex;
	}
	.item-img {
		width: 45rpx;
		height: 44rpx;
	}
	.reslut {
		width: 576rpx;
		font-size: 32rpx;
		font-weight: 400;
		color: #333;
		padding-left: 10rpx;
	}
	.answer {
		box-sizing: border-box;
		border: 2rpx solid transparent;
	}
	.parsing {
		box-sizing: border-box;
	}
</style>
