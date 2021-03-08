<template>
	<input 
		:type="type" 
		class='input' 
		@input="value_change"
		@keyup.enter="keyup"
	>
</template>

<script>
	export default{
		name:'v-input',
		model:{
			prop:"value",
			event:"input"
		},
		props:{
			type:{
				type:String,
				default:'text'
			}
		},
		methods:{
			value_change(event){
				this.$emit("input",event.target.value);
			},
			keyup(){
				this.$emit('keyup');
			}
		}
	}
</script>

<style lang="scss" scoped>
	.input{
		box-sizing: border-box;
		width:100%;
		height:32px;
		padding:4px 11px;
		color: rgba(0,0,0,.65);
		font-size: 14px;
		border: 1px solid #d9d9d9;
		outline:none;
		transition: all .3s;
		&::-webkit-input-placeholder{
			color:#d1d1d1;
		}
		&::-moz-placeholder{
			color:#d1d1d1;
		}
		&:-ms-input-placeholder{
			color:#d1d1d1;
		}
		&:focus{
			border-color:#40a9ff;
		}
		&:hover{
			border-color:#40a9ff;
		}
	}
</style>
