<template>
	<div class="app">
		<transition name="page-fade" mode='out-in'>
			<router-view/>
		</transition>
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
	.page-fade-enter-active,.page-fade-leave-active{
		transition:all .45s;
	}
	.page-fade-enter,.page-fade-leave-to{
		opacity:0;
	}
</style>
