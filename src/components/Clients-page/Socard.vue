<template>
	<div class="cards-card">
		

		<div class="box"
			
		
		></div>
		<div class="cards-content">
			<div class="cards-content-header">
				<router-link to="client/1" class="name">
					<h3 class="cards-title">{{user.Societe_Nom.split(' ')[0]}}</h3>
				</router-link>
			</div>
			<div class="cards-info">
				<div class="info-section">
					<label>Societe identifiant fiscalee	 : {{ user.Societe_identifiant_fiscale }}</label>
					<!-- <label>Société : Marjane</label> -->

					<span>
						<img class="gmail" src="../../assets/img/icon1.png" alt="gmail"> {{user.Societe_Site_Internet}}
						<!-- <img class="gmail" src="../../assets/img/Group.svg" alt="gmail"> Chamkhianas@gmail.Com -->

					</span>
					<p><img class="telephone" src="../../assets/img/call 1.svg" alt="téléphone"> {{user.Phones[0].number}}</p>
				</div>
				<div class="info-section">
				</div>	
			</div>
			<div class="imax-logo">
				<a href="#">
					<img class="edit" src="../../assets/img/Vector.svg" alt="">
				</a>
			</div>
			<div class="Ellipse">
			</div>
			<div class="Ellipse1">
			</div>
		</div>
	</div>
</template>


<script>
export default {
    name: "Card", 
    data: function () {
        return {
        colors:["#2262C6","#427FDE","#FFC5A0"]
        };
    }, 
    props: {
		user: Object
    }, 
	computed: {
	
	},
	methods:{
	
	},
	created: function () {
		console.log(this.user);
	}

}



</script>

<style lang="scss"  >

$color1:#2262C6;
$color2:#427FDE;
$color3:#FFC5A0;


.intro {
	text-align:center;
}

h1,h2,h3,h4,h5,p {
	font-weight: 400;
}

.name{
	text-decoration:none;
	color:inherit;
}
.name:hover {
	text-decoration:none;
	color:balck;
}


.imax-logo{
	position: relative;
    width: 21px;
    height: 21.64px;
	left: 90%;
	bottom: 4em;
    background: #2262C6;
    border-radius: 5px;
}
.imax-logo-x{
	position: relative;
    width: 21px;
    height: 21.64px;
	left: 90%;
	bottom: 4em;
    background: #FFC5A0;
    border-radius: 5px;
}
.gmail, .telephone, .edit{
	width: 14px;
    margin-left: 3px;
    margin-top: -6px;
}
.Ellipse{
	position: relative;
    left: 86%;
    bottom: 14em;
    border-radius: 6px;
    width: 7px;
    height: 7px;
    list-style-type: circle;
    border: 2px solid #2262C6;
    box-sizing: border-box;
    transform: matrix(1, 0, 0, -1, 0, 0);
}
.Ellipse1{
	position: relative;
    left: 91%;
    bottom: 231px;
    border-radius: 6px;
    width: 7px;
    height: 7px;
    list-style-type: circle;
    border: 2px solid #2262C6;
    box-sizing: border-box;
    transform: matrix(1, 0, 0, -1, 0, 0);
}
.Ellipse-x{
	position: relative;
    left: 86%;
    bottom: 14em;
    border-radius: 6px;
    width: 7px;
    height: 7px;
    list-style-type: circle;
    border: 2px solid #FFC5A0;
    box-sizing: border-box;
    transform: matrix(1, 0, 0, -1, 0, 0);
}
.Ellipse1-x{
	position: relative;
    left: 91%;
    bottom: 231px;
    border-radius: 6px;
    width: 7px;
    height: 7px;
    list-style-type: circle;
    border: 2px solid #FFC5A0;
    box-sizing: border-box;
    transform: matrix(1, 0, 0, -1, 0, 0);	
}
.cards-header {
	padding:0;
	margin: 0;
	height: 367px;
	width: 100%;
	display: block;
	border-top-left-radius: 10px;
	border-top-right-radius:10px;
}

.header-icon-container {
	position: relative;
}

.header-icon {
	width: 100%;
	height: 367px;
	line-height: 367px;
	text-align:center;
	vertical-align:middle;
	margin: 0 auto;
	color: #ffffff;
	font-size: 54px;
	text-shadow:0px 0px 20px #6abcea, 0px 5px 20px #6ABCEA;
	opacity: .85;
}

.header-icon:hover {
	background:rgba(0,0,0,.15);
	font-size: 74px;
	text-shadow:0px 0px 20px #6abcea, 0px 5px 30px #6ABCEA;
	border-top-left-radius: 10px;
	border-top-right-radius:10px;
	opacity: 1;
}
.cards-card {
	width: 100%;
	max-width: 320px;
	height: 210px;
	margin: 2.3em;
	border-radius: 15px;
	display:inline-block;
	z-index: 22;
	transition: 600ms;
}
.box{
	position: relative;
    width: 120px;
    height: 49px;
    left: 1em;
    top: 2.2em;
	background:green;
	box-shadow: 0px 4px 15px rgba(223, 223, 223, 0.45);
	border-radius: 20px;
	z-index: -1;
}

// .cards-card:nth-child(3n+0) .box{
// 	background: #FFC5A0;
// }
.cards-card:nth-child(1) {
	.box{
	background: $color1;
	}
	.imax-logo{
		background-color: $color1 ;
	}
	.Ellipse{
	border: 2px solid  $color1;
	}
	.Ellipse1{
	border: 2px solid  $color1;
	}
}
.cards-card:nth-child(1n+1) {
	.box{
	background: $color1;
	}
	.imax-logo{
		background-color:$color1 ;
	}
	.Ellipse{
	border: 2px solid $color1;
	}
	.Ellipse1{
	border: 2px solid $color1;
	}
}


.cards-card:nth-child(2) {
	.box{
	background: $color2;
	}
	.imax-logo{
		background-color:$color2 ;
	}
	.Ellipse{
	border: 2px solid $color2;
	}
	.Ellipse1{
	border: 2px solid $color2;
	}
}
.cards-card:nth-child(2n+3) {
	.box{
	background: $color2;
	}
	.imax-logo{
		background-color:$color2 ;
	}
	.Ellipse{
	border: 2px solid $color2;
	}
	.Ellipse1{
	border: 2px solid $color2;
	}
}


.cards-card:nth-child(3) {
	.box{
	background: $color3;
	}
	.imax-logo{
		background-color:$color3 ;
	}
	.Ellipse{
	border: 2px solid $color3;
	}
	.Ellipse1{
	border: 2px solid $color3;
	}
}

.cards-card:nth-child(3n+3) {
	.box{
	background: $color3;
	}
	.imax-logo{
		background-color:$color3 ;
	}
	.Ellipse{
	border: 2px solid $color3;
	}
	.Ellipse1{
	border: 2px solid $color3;
	}
}


.cards-card:hover{
	transform:scale(1.04);
	// z-index: 4000;
}

.cards-content {
	background: #ffffff;
	box-shadow: 0px 6px 18px rgba(0,0,0,.1);
	z-index: 4000;
	border-radius: 15px;
	height: inherit;
	padding: 120px 18px 24px 18px;
	margin: 0;
}


.cards-content-header, .cards-info {
	display: table;
	width: 100%;
}

.cards-title {
	font-size: 24px;
	margin: 0;
	position: relative;
    display: table-cell;
    bottom: 80px;
}

.cards-info {
	margin-top: 1em;
}

.info-section {
	display: table-cell;
	text-transform: uppercase;
	text-align:center;
}

.info-section:first-of-type {
	text-align:left;
}

.info-section:last-of-type {
	text-align:right;
}

.info-section label {
	display: block;
    color: black;
    margin-bottom: 0em;
    font-size: 0.7rem;
    position: relative;
    bottom: 7.9em;
    font-weight: 600;
}

.info-section span {
	font-weight: 700;
	font-size: 11px;
    color: rgba(76, 76, 76, 0.596);
    position: relative;
    bottom: 7em;
}
.info-section p{
	position: relative;
    top: -5em;
    font-size: 14px;
	color: rgba(76, 76, 76, 0.596);

}

@media screen and (max-width: 500px) {
	.cards-card {
		position: relative;
		left: 10%;
		width: 95%;
		max-width: 80%;
		margin: 1em;
		display: block;
	}
	.cards-card{
		transform:scale(0.8);
	}
	
	.cards-card:hover{
		transform:scale(0.9);
	}
}

	
</style>