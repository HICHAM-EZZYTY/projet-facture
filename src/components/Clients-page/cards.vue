<template>
	<div class="container">
		<Card v-for="client in clients" :key="client.name" :user="client" />	
	</div>
</template>

<script>
import Card from './Card.vue'

export default {
    name: "cards",
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
			// get clients. 
			let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMjcuMC4wLjE6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU5MjM0MzM0NSwiZXhwIjoxNTkyMzQ2OTQ1LCJuYmYiOjE1OTIzNDMzNDUsImp0aSI6IjV5VjIydUlFYmJyTk5YeUgiLCJzdWIiOjIyLCJwcnYiOiI4N2UwYWYxZWY5ZmQxNTgxMmZkZWM5NzE1M2ExNGUwYjA0NzU0NmFhIn0.BC4nurF0gDYauQzhsDbNAKFZPAYbyWQUIV3sPZebOmY";

			this.$http.defaults.headers.common = { Authorization: `Bearer ${token}` }
			
			this.$http
				.get("/clients")
				.then((result) => {
					this.clients = result.data.data;
					console.log(this.clients[0]);

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

</style>