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
			clients: [{"id":13,"user_id":22,"Client_Nom":"Mehdi","Client_Prenom":"Bzikha","Client_Email":"zieme.kellie@example.com","Client_Ville":"South Michel","Client_Code_Postal":2920473,"Client_Pays":"Israel","Client_Fonction":"placeat","Client_SiteInternet":"Http://www.dolorem.com","Client_Note":"Voluptatibus aperiam omnis quis autem illum dignissimos veritatis.","societe":null,"Adresses":[{"id":21,"adress":"KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK"},{"id":22,"adress":"KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK"}],"Phones":[{"id":13,"number":"98374947495855"},{"id":14,"number":"827777"},{"id":15,"number":"938383"}],"keywords":[{"id":4,"user_id":13,"mot_clé_value":"Keyword1"},{"id":5,"user_id":13,"mot_clé_value":"Keyword2"},{"id":6,"user_id":13,"mot_clé_value":"Keyword3"}]},{"id":14,"user_id":22,"Client_Nom":"Hicham","Client_Prenom":"Ezzity","Client_Email":"zieme.kellie@example.com","Client_Ville":"South Michel","Client_Code_Postal":2920473,"Client_Pays":"Israel","Client_Fonction":"placeat","Client_SiteInternet":"Http://www.dolorem.com","Client_Note":"Voluptatibus aperiam omnis quis autem illum dignissimos veritatis.","societe":null,"Adresses":[{"id":23,"adress":"KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK"},{"id":24,"adress":"KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK"}],"Phones":[{"id":16,"number":"98374947495855"},{"id":17,"number":"827777"},{"id":18,"number":"938383"}],"keywords":[{"id":4,"user_id":13,"mot_clé_value":"Keyword1"},{"id":5,"user_id":13,"mot_clé_value":"Keyword2"},{"id":6,"user_id":13,"mot_clé_value":"Keyword3"}]},{"id":15,"user_id":22,"Client_Nom":"Hamdaoui","Client_Prenom":"Hamza","Client_Email":"zieme.kellie@example.com","Client_Ville":"South Michel","Client_Code_Postal":2920473,"Client_Pays":"Israel","Client_Fonction":"placeat","Client_SiteInternet":"Http://www.dolorem.com","Client_Note":"Voluptatibus aperiam omnis quis autem illum dignissimos veritatis.","societe":null,"Adresses":[{"id":25,"adress":"KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK"},{"id":26,"adress":"KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK"}],"Phones":[{"id":19,"number":"98374947495855"},{"id":20,"number":"827777"},{"id":21,"number":"938383"}],"keywords":[{"id":4,"user_id":13,"mot_clé_value":"Keyword1"},{"id":5,"user_id":13,"mot_clé_value":"Keyword2"},{"id":6,"user_id":13,"mot_clé_value":"Keyword3"}]},{"id":16,"user_id":22,"Client_Nom":"chamkhi","Client_Prenom":"Anas","Client_Email":"zwita.hicham@example.com","Client_Ville":"youssoufia","Client_Code_Postal":2920473,"Client_Pays":"Morroco","Client_Fonction":"frontEnd Developper","Client_SiteInternet":"Http://www.Zwita.com","Client_Note":"Voluptatibus aperiam omnis quis autem illum dignissimos veritatis.","societe":null,"Adresses":[{"id":27,"adress":"KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK"},{"id":28,"adress":"KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK"}],"Phones":[{"id":22,"number":"98374947495855"},{"id":23,"number":"827777"},{"id":24,"number":"938383"}],"keywords":[{"id":4,"user_id":13,"mot_clé_value":"Keyword1"},{"id":5,"user_id":13,"mot_clé_value":"Keyword2"},{"id":6,"user_id":13,"mot_clé_value":"Keyword3"}]},{"id":17,"user_id":22,"Client_Nom":"hicham","Client_Prenom":"Ezzity","Client_Email":"zwita.hicham@example.com","Client_Ville":"youssoufia","Client_Code_Postal":2920473,"Client_Pays":"Morroco","Client_Fonction":"frontEnd Developper","Client_SiteInternet":"Http://www.Zwita.com","Client_Note":"Voluptatibus aperiam omnis quis autem illum dignissimos veritatis.","societe":{"id":14,"user_id":22,"Societe_identifiant_fiscale":"earum","Societe_identifiant_commun_entreprise":"optio","Societe_Nom":"DevoSoft","Societe_Taxe_Professionelle":5,"Societe_Pays":"Morocco","Societe_Note":"ratione","Societe_Ville":"Safi","Societe_Site_Internet":"http://www.aut.com","Adresses":[{"id":32,"adress":"98374947495855"},{"id":33,"adress":"82333227777"},{"id":34,"adress":"9383823444S3"}],"Phones":[{"id":28,"number":"98374947495855"},{"id":29,"number":"82333227777"},{"id":30,"number":"9383823444S3"}],"Keywords":[{"id":4,"user_id":13,"mot_clé_value":"Keyword1"},{"id":5,"user_id":13,"mot_clé_value":"Keyword2"}]},"Adresses":[{"id":35,"adress":"KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK"},{"id":36,"adress":"KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK"}],"Phones":[{"id":31,"number":"98374947495855"},{"id":32,"number":"827777"},{"id":33,"number":"938383"}],"keywords":[{"id":4,"user_id":13,"mot_clé_value":"Keyword1"},{"id":5,"user_id":13,"mot_clé_value":"Keyword2"},{"id":6,"user_id":13,"mot_clé_value":"Keyword3"}]},{"id":18,"user_id":22,"Client_Nom":"chaima","Client_Prenom":"Essbah","Client_Email":"zwita.hicham@example.com","Client_Ville":"youssoufia","Client_Code_Postal":2920473,"Client_Pays":"Morroco","Client_Fonction":"frontEnd Developper","Client_SiteInternet":"Http://www.Zwita.com","Client_Note":"Voluptatibus aperiam omnis quis autem illum dignissimos veritatis.","societe":{"id":14,"user_id":22,"Societe_identifiant_fiscale":"earum","Societe_identifiant_commun_entreprise":"optio","Societe_Nom":"DevoSoft","Societe_Taxe_Professionelle":5,"Societe_Pays":"Morocco","Societe_Note":"ratione","Societe_Ville":"Safi","Societe_Site_Internet":"http://www.aut.com","Adresses":[{"id":32,"adress":"98374947495855"},{"id":33,"adress":"82333227777"},{"id":34,"adress":"9383823444S3"}],"Phones":[{"id":28,"number":"98374947495855"},{"id":29,"number":"82333227777"},{"id":30,"number":"9383823444S3"}],"Keywords":[{"id":4,"user_id":13,"mot_clé_value":"Keyword1"},{"id":5,"user_id":13,"mot_clé_value":"Keyword2"}]},"Adresses":[{"id":37,"adress":"KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK"},{"id":38,"adress":"KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK"}],"Phones":[{"id":34,"number":"98374947495855"},{"id":35,"number":"827777"},{"id":36,"number":"938383"}],"keywords":[{"id":4,"user_id":13,"mot_clé_value":"Keyword1"},{"id":5,"user_id":13,"mot_clé_value":"Keyword2"},{"id":6,"user_id":13,"mot_clé_value":"Keyword3"}]}]
		}
	},
	components: {
		Card
	}, 
	methods:{
		getClients: function () {
			// get clients. 
			// let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMjcuMC4wLjE6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU5MjE1ODk3MiwiZXhwIjoxNTkyMTYyNTcyLCJuYmYiOjE1OTIxNTg5NzIsImp0aSI6InNVYmw2WnpRTzFoazRRMDMiLCJzdWIiOjIyLCJwcnYiOiI4N2UwYWYxZWY5ZmQxNTgxMmZkZWM5NzE1M2ExNGUwYjA0NzU0NmFhIn0.wqkmRj7Vkcu_3z6G0Ec7BsAyuIq-iGMoiIvYqVakdbc";

			// this.$http.defaults.headers.common = { Authorization: `Bearer ${token}` }
			
			// this.$http
			// 	.get("/clients")
			// 	.then((result) => {
			// 		console.log(result.data.data);
			// 		this.clients = result.data.data;
			// 	})
			// 	.catch((error) => {
			// 		console.log(error)
			// 	});
		}
	},
	created: function () {
		// this.getClients();
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