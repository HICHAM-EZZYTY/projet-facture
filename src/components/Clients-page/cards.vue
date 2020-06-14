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
			let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMjcuMC4wLjE6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU5MjEzOTQwOSwiZXhwIjoxNTkyMTQzMDA5LCJuYmYiOjE1OTIxMzk0MDksImp0aSI6IjIwVXIwQ1VBYUhlUXc3TWMiLCJzdWIiOjIyLCJwcnYiOiI4N2UwYWYxZWY5ZmQxNTgxMmZkZWM5NzE1M2ExNGUwYjA0NzU0NmFhIn0.pvlo6C9FhPB2QWjsKFvybEt2Euunx_LAJRU2gZDCUcg";
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


.container {
	display: flex;
	flex-wrap: wrap;
	max-width: 100%;
	justify-content: center;
}
@media screen and (max-width: 500px) {
	.container {
        max-width: 100%;
		padding: 0;
		margin: 0;
	}
}
@media (min-width: 1200px){
.container{
    max-width: 100%;
    position: relative;
    top: 10em;
    right: 0%;
}
}


</style>