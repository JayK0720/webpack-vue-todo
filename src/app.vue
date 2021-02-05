<template>
	<div class="text">
		<p>{{message}}</p>
		<p>{{message}}</p>
		<p>{{message}}</p>
		<p>{{message}}</p>
		<div class="home"></div>
	</div>
</template>

<script>
	export default {
		name:"app",
		data(){
			return {
				message:"hello world!!!"
			}
		}
	}
</script>

<style lang="scss" scoped>
	.text{
		color:red;
		font-size:18px;
	}
	.home{
		width:50px;
		height:50px;
		background-image:url('./images/home.png');
		background-size:50px 50px;
		background-repeat:no-repeat;
	}
</style>
