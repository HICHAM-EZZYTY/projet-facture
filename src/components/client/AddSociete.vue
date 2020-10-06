<template>
    <div class="society-page px-5">

        <div class="row mb-3 mt-3">
            <div class="col-12 page-title">
                <div class="page-title--text">
                    <span class="page-title--text_title" >Création d'une société :</span>
                </div>
                <div class="page-title--icons">
                    <!--icons -->
                    <span class="mr-2"> Annulé la creation </span>
                    <button>
                        <img src="../../assets/img/closedocument 1.svg" alt="closedocument">
                    </button>
                </div>
            </div>
        </div>

        <div class="row forms mt-4">
            <div class="col-lg-12 head-section">
                <h6 class="head-section--title"> Information Sur la Societe :</h6>
            </div>
            
            <div class="col-lg-6 forms-sides">
                <div class="forms-sides--group">
                    <label class="forms-sides--group_label"  >Nom de la societe : </label>
                    <input class="forms-sides--group_text" v-model="societe.Societe_Nom" type="text"  placeholder="......" />
                </div>
                 <div class="forms-sides--group">
                    <label class="forms-sides--group_label" >IDENTIFIANT COMMUN DE L'ENTREPRISE :</label>
                    <input class="forms-sides--group_text" v-model="societe.Societe_identifiant_commun_entreprise" type="text" placeholder="......" />
                </div>
            </div>
            
            <div class="col-lg-6 forms-sides">
                <div class="forms-sides--group">
                    <label class="forms-sides--group_label" >IDENTIFIANT FISCALE :</label>
                    <input class="forms-sides--group_text" v-model="societe.Societe_identifiant_fiscale" type="text" placeholder="......" />
                </div>
                 <div class="forms-sides--group">
                    <label class="forms-sides--group_label" >Taxe Professionelle : </label>
                    <input class="forms-sides--group_text" v-model="societe.Societe_Taxe_Professionelle" type="text" placeholder="......" />
                </div>
            </div>
        </div>
        
        <div class="row forms mt-4">
            <div class="col-lg-12 head-section">
                <h6 class="head-section--title" > Coordonnées de la société :</h6>
            </div>
            
            <div class="col-lg-6 forms-sides">    
                
                <Custom_Input @addedInput="_addedAdress" placeholder="Adress" title="Adresse" />

                 <div class="forms-sides--group">
                    <label class="forms-sides--group_label" >Site internet  :</label>
                    <input class="forms-sides--group_text" type="text" v-model="societe.Societe_Site_Internet" placeholder="......" />
                </div>

                <div class="forms-sides--group">
                    <label class="forms-sides--group_label" >Notes :</label>
                    <textarea class="forms-sides--group_textarea" v-model="societe.Societe_Note" type="text" placeholder="......" >
                    </textarea>
                </div>
                
            </div>
            
            <div class="col-lg-6 forms-sides">
            <Custom_Input 
                    @addedInput="_phoneNumbers" 
                    placeholder="Mobile" 
                    title="Numéro de téléphone" />
                
                <div class="forms-sides--group">
                    <label class="forms-sides--group_label" >Pays :</label>
                    <b-form-select class="forms-sides--group_select" v-model="societe.Societe_Ville" :options="countries"></b-form-select>
                </div>
                
                
            </div>
        </div>
        
        <div class="row mt-3 forms-buttons">
            <!-- buttons -->
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 forms-buttons">
                <!-- <router-link to="/client/Information_Compte"> -->
                    <button> 
                        <i class="fa fa-arrow-left mr-1"></i>
                        <span>Previous</span>     
                    </button>
                <!-- </router-link>  -->
                <!-- <router-link to="/societe/new">  -->
                    <button @click="submit"> 
                            <span> NEXT </span>
                            <i class="fa fa-arrow-right ml-1"></i> 
                    </button>
                <!-- </router-link>  -->
            </div>
        </div>


    </div>
</template>


<script>
import Custom_Input from '../Sub_Components/Custom_Input.vue';

export default {
    name : "AddSociety",
    data: function(){
        return { 
            societe:{
                Societe_Nom: null, 
                Societe_identifiant_fiscale: null, 
                Societe_identifiant_commun_entreprise: null, 
                Societe_Taxe_Professionelle: null, 
                Societe_Pays: "Morocco",
                Societe_Note: null, 
                Societe_Ville: null, 
                Societe_Site_Internet:null,
                phones:[], 
                adress:[],
                keywords:[]
            },

            
            countries: [
                { value: null, text: 'Please select an option' },
                { value: 'a', text: 'Rabat' },
                { value: 'b', text: 'CasaBlanca' },
                { value: 'd', text: 'Safi' }
            ]
        };
    }, 
    components: {
        Custom_Input,
    }, 
    methods:{

        _addedAdress: function(adressesArray){
            this.societe.adress = adressesArray;
        }, 
        _phoneNumbers: function(numbers){
            this.societe.phones = numbers;
            // console.log(this.societe.phones);
        }, 
        submit: function() {
            this.$http
                .post("/societes", this.societe)
                .then(
                    () => console.log(this.societe) 
                )
                .catch();
            console.log(this.societe);
        }
    }
}
</script>
<style lang="scss" scoped>
    *{
        font-family: Gilroy-Medium, sans-serif ;
        text-transform: capitalize;
    }
    
    .forms-buttons{
        display: flex; 
        margin-left: 2%;
        & button{
            display: flex; 
            justify-content: space-around;
            align-items: center;
            border: none;
            width:  15em;
            height: 3.5em;
            margin: 0px 5px;
            border-radius: 3px; 

            &:nth-child(2){
                color: #FFFFFF;
                background-color: #2262c6;
            }

            &:focus, &:hover{
                border: none;
                outline: none;
            }
        }
    }

    .society-page{
        // background: red;
        height: 100%;
        margin-top: 4em;
    }
.row {
    display: flex;
    flex-wrap: wrap;
    margin-right: 41px;
    margin-left: -15px;
}
.page-title--text_title {
    color: #2262c6;
    font-weight: bold;
    font-family: Gilroy-Bold;
    margin-right: 1em;
    font-size: 25px;
}

    input, textarea, select{
        background-color: transparent !important; 
        &:focus {
           border: 1px solid #2262c6;
        }
    }
    @media only screen and (max-width: 574px) {
        .society-page{
            position: relative;
            left: 10%;
        }

}
</style>