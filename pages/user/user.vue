<template>
	<view>
		<view class="content">
			<view class="logo">
				<image :src="avatarUrl"></image>
			</view>
			<view class="name">{{ nickName }}</view>
			<u-toast ref="uToast" />
			<view class="summary"><text>如需正常使用小程序的功能，请点击下方授权登录按钮，打开授权弹窗，并点击允许。</text></view>
			<view class="btn">
				<button type="success" size="default" shape="circle" @click="wxLogin">授权登录</button>
			</view>
		</view>
	</view>
</template>

<script>
	// 登录流程
	// 1.用户点击登录按钮，弹出授权弹窗
	// 2.用户确认授权，调用uni.login接口，拿到code
	// 3.使用code调用后端接口,接收后端返回的自定义登录态,如token等
	// 4.登录状态在本地保存起来,用的时候在vuex取用
	// 5.用户信息由后端解密，统一返回，再存入本地
	// 此处简化了流程,没有返回自定义登录态,直接使用openid来判断用户
	// 用户信息也没有做特别处理，获取到之后就进行了存储
	export default {
		data() {
			return {
				nickName: '刷题小程序',
				avatarUrl: '../../static/logo.png'
			}
		},
		methods: {
			wxLogin() {
				var that = this
				uni.login({
				  provider: 'weixin',
				  success: function (res) {
				    console.log(res);
				    // 获取用户信息
				    uni.getUserInfo({
				      provider: 'weixin',
				      success: function (infoRes) {
				        console.log('用户昵称为：' + infoRes.userInfo.nickName);
						console.log('用户昵称为：' + infoRes.userInfo.openId);
						console.log('用户昵称为：' + infoRes.userInfo.avatarUrl);
						console.log('用户昵称为：' + infoRes.userInfo.gender);
						that.nickName = infoRes.userInfo.nickName
						that.avatarUrl = infoRes.userInfo.avatarUrl
				      }
				    });
				  }
				});
			}
		},
	}
</script>

<style scoped>
	page {
		background: url('https://vkceyugu.cdn.bspapp.com/VKCEYUGU-weitao/50c93d50-a594-11ea-b997-9918a5dda011.png') no-repeat center / 100% 100%;
	}

	.content {
		margin-top: 200rpx;
	}
	.logo {
		display: flex;
		justify-content: center;
	}
	.logo image {
		width: 128rpx;
		height: 128rpx;
		border-radius: 64rpx;
	}
	
	.name {
		margin-top: 20rpx;
		font-size: 32rpx;
		color: #333;
		font-weight: bold;
		text-align: center;
	}
	
	.summary {
		justify-content: center;
		margin-top: 40rpx;
		margin-bottom: 60rpx;
		padding: 0 54rpx;
		color: #999;
		/* // text-align: center; */
		line-height: 48rpx;
		font-size: 28rpx;
	
		
	}
	.summary text {
		width: 100%;
	}
	
	.btn {
		padding: 0 100rpx;
	}
</style>
