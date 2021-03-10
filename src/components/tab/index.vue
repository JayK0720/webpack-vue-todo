<template>
	<div class="tabs">
		<span class="items-left"><i style="color:rgb(240,0,0);">{{left}}</i> items left</span>
		<ul class='tab-list'>
			<li 
				v-for="(tab,index) in tab" 
				:key="'tab-'+index"
				class='tab-item'
				@click.stop="toggle_filter(tab)"
				:class="{active:current_tab == tab ? true : false}"
			>{{tab}}</li>
		</ul>
	</div>
</template>

<script>
	const ALL = 'all', UNFINISHED = 'unfinished', FINISHED = 'finished'
	export default {
		name:'tabs',
		data(){
			return {
				tab:[
					ALL,FINISHED,UNFINISHED,
				]
			}
		},
		props:{
			current_tab:{
				type:String,
				required:true
			},
			left:{
				type:Number,
				default:0
			}
		},
		methods:{
			toggle_filter(tab){
				this.$emit("toggle",tab);
			}
		}
	}
</script>

<style lang="scss" scoped>
	.tabs{
		height:42px;
		display:flex;
		justify-content:space-between;
		align-items:center;
		.tab-list{
			flex:1;
			display:flex;
			.tab-item{
				padding:0 8px;
				cursor:pointer;
				color:#314659;
				transition:all .2s;
				&:hover{
					color:#1890ff;
				}
				&.active{
					color:#1890ff;
				}
			}
		}
		.items-left{
			padding-right:40px;
			color:#616161;
			font-size:14px;
		}
	}
</style>
