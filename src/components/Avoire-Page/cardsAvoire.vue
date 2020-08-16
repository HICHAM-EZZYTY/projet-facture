<template>
	<div>
	        <div class="row mb-3 mt-3">
            <div class="col-10 page-title">
                <div class="page-title--text">
                    <span class="page-title--text_title" >Les Avoirs</span>
                </div>
                <div class="page-title--icons">
                    <!--icons -->
                    <span class="mr-2"> Exporter les Aoirs </span>
					   <router-link to="/Avoire-export">
                       <img src="../../assets/img/Group 15.svg" alt="Group">
						</router-link>
                      <img class="Rectangle" src="../../assets/img/Rectangle 8.svg" alt="Rectangle">
                      <img class="infos" src="../../assets/img/infos 1.svg" alt="infos">
					
					</div>
				</div>
			</div>
			<!--  -->

			
			<!--  -->
		<div class="container">
			<Card v-for="client in clients" :key="client.name" :user="client" />	
		</div>
	</div>
</template>

<script>
import Card from '@/components/Clients-page/Card.vue';

export default {
    name: "cardsAvoire",
	data: function () {
		return {
			clients: [],
		}
	},
	components: {
		Card
	}, 
	methods:{
		getClients: function () {
			
			this.$http
				.get("/clients")
				.then((result) => {
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

@media only screen and (max-width: 574px) {
.society-page{
    position: relative;
    left: 10%;
}

}

</style>