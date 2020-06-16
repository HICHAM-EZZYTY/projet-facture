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
			clients: []
		}
	},
	components: {
		Card
	}, 
	methods:{
		getClients: function () {
			// get clients. 
			let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMjcuMC4wLjE6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU5MjMxOTQ1OSwiZXhwIjoxNTkyMzIzMDU5LCJuYmYiOjE1OTIzMTk0NTksImp0aSI6ImJGZEk4ZWh0MXdNVGxkdDAiLCJzdWIiOjIyLCJwcnYiOiI4N2UwYWYxZWY5ZmQxNTgxMmZkZWM5NzE1M2ExNGUwYjA0NzU0NmFhIn0.SNqvGa3ke8jTVnx4kpgKylPUmhRhCmntfmcfAGNh1Gk";

			this.$http.defaults.headers.common = { Authorization: `Bearer ${token}` }
			
			this.$http
				.get("/clients")
				.then((result) => {
					console.log(result.data.data);
					this.clients = result.data.data;
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
	::-webkit-scrollbar { 
		display: none; 
	}

	.container {
		display: flex;
		flex-wrap: wrap;
		// padding: 0;
		width: 100%;
		height: 80vh;
		max-width: 100%;
		// justify-content: space-around;
		overflow-x: hidden; 
		overflow-y: auto; 
		text-align:justify; 
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