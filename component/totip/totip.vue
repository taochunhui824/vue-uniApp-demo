<template>
	<view class="totip-commdity">
		<block v-for="(item,index) in dataList" :key="index">
			<!-- 分类组件 -->
			<QuestionItem :item="item"></QuestionItem>
		</block>
	</view>
</template>

<script>
	import QuestionItem from "@/component/totip/question-item.vue"
	export default {
		data() {
			return {
				
			}
		},
		props: {
			dataList: {
				type: Array,
				default: []
			}
		},
		components: {
			QuestionItem
		},
		methods: {
			
		}
	}
</script>

<style scoped>
	.totip-commdity {
		padding-bottom: 15rpx;
		box-sizing: border-box;
	}
</style>
