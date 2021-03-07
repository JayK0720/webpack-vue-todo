<template>
	<ul class="list">
		<li>111</li>
	</ul>
</template>

<script>
	export default {
		name:'todo-list',
		props:{
			list:{
				type:Array,
				default:function(){
					return []
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	
</style>
