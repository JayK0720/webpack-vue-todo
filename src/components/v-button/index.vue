<template>
	<button class="button" :class="type+'-button'" @click="button_click">
		<slot/>
	</button>
</template>

<script>
	export default {
		name:'v-button',
		props:{
			type:{
				type:String,
				default:'primary'
			}
		},
		methods:{
			button_click(){
				this.$emit("click");
			}
		}
	}
</script>

<style lang="scss" scoped>
	.button{
		width:70px;
		height:40px;
		outline:none;
		color:#ffffff;
		cursor:pointer;
		transition:all .3s;
		&.primary-button{
			background-color: #1890ff;
			border:1px solid #1890ff;
			&:hover{
				background-color: #40a9ff;
				border-color: #40a9ff;
			}
			&:active{
				background-color: #096dd9;
				border-color: #096dd9;
			}
		}
		
	}
</style>
