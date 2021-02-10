<template>
	<div class="filter-wrapper">
		<div class="unfinished-length">{{unfinished_todo_length}} items left</div>
		<section class="filter-container">
			<span 
				class="filter-text" 
				:class="{active:current_filter == 'all' ? true : false}" @click.stop="set_filter('all')"
			>All</span>
			<span 
				class="filter-text" 
				:class="{active:current_filter == 'finished' ? true : false}" @click.stop="set_filter('finished')"
			>Finished</span>
			<span class="filter-text" 
				:class="{active:current_filter == 'unfinished' ? true : false}" 
				@click.stop="set_filter('unfinished')"
			>Unfinished</span>
		</section>
		<div class="clear-text" @click.stop="clear">clear</div>
	</div>
</template>

<script>
	const ALL = "all";
	export default {
		name:"filtered",
		props:{
			current_filter:{
				type:String,
				default:ALL
			},
			unfinished_todo_length:{
				type:Number,
				default:0
			}
		},
		methods:{
			set_filter(filter){
				this.$emit('set_filter',filter);
			},
			clear(){
				this.$emit("clear");
			}
		}
	}
</script>

<style lang="scss" scoped>
	.filter-wrapper{
		padding-top:5px;
		padding-bottom:5px;
		display:flex;
		line-height:40px;
		justify-content:space-between;
		font-size:14px;
		border-bottom:1px solid #f1f1f1;
		.unfinished-length{
			color:#f81d22;
		}
		.filter-container{
			padding-left:24px;
			flex:1;
		}
		.clear-text{
			color:rgba(0,0,0,.45);
			cursor:pointer;
			&:hover{
				color:#f81d22;
			}
		}
		.filter-text{
			padding:0 10px;
			color:rgba(0,0,0,.65);
			cursor:pointer;
			user-select:none;
			&:hover{
				color:#1890ff;
				text-decoration:underline;
			}
			&.active{
				color:#1890ff;
			}
		}
	}
</style>
