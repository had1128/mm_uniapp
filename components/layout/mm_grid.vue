<template>
	<!-- 栅格 -->
	<view :class="'mm_grid' + cl"><slot></slot></view>
</template>

<script>
	export default {
		props: {
			col: {
				type: String,
				default: ""
			}
		},
		data(){
			return {
				cl: this.col
			}
		},
		created(){
			if(this.cl){
				if(this.cl.indexOf("_") == -1)
				{
					this.cl = "_" + this.cl;
				}
			}
		}
	}
</script>

<style>
</style>
