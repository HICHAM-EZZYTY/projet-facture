<template>
	<div class="container" >
	
		<spinner v-if="isLoading" />
		<Card v-else v-for="client in clients" :key="client.name" :user="client" />	
	</div>
</template>

<script>
import Card from './Card.vue'
import spinner from "@/components/helpers/spinner.vue";
    
export default {
	name: "cards",
	data: function () {
		return {
			isLoading: true,
			clients: [],
		}
	},
	components: {
		Card, 
		spinner
	}, 
	methods:{
		getClients: function () {
			
			this.$http
				.get("/clients")
				.then((result) => {
					this.isLoading = false;
					this.clients = result.data.data;
					// console.log(this.clients[0]);

				})
				.catch((error) => {
					console.log(error)
				});
		}
	},
	created: function () {
		this.getClients();
	}
}
</script>

<style lang="scss" scoped>

	
	.container {
		display: flex;
		flex-wrap: wrap;
		// padding: 0;
		width: 100%;
		max-width: 100%;
		// justify-content: space-around;
	
	}

	@media screen and (max-width: 500px) {
		.container {
			max-width: 100%;
			padding: 0;
			margin: 3px;
		}
	}
	@media (min-width: 1200px){
		.container{
			max-width: 100%;
			position: relative;
			top: 3em;
			right: 0%;	
		}
	}
	// 
	h6{
    font-family: Gilroy-Regular;
}
.Rectangle{
  position: relative;
  left: 8%;
}
.infos{
  position: relative;
  left: -3%;
  z-index: 1;
}
.page-title--text_title {
    font-weight: bold;
    margin-right: 1em;
    font-size: 23px;
    color: #2262c6;
}
.page-title--text_count {
    padding: 8.3px 9.5px;
    background: #2262c6;
    color: #FFFFFF;
    border-radius: 8px;
}
@media only screen and (max-width: 574px) {
.society-page{
    position: relative;
    left: 10%;
}

}

</style>