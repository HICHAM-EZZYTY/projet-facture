<template>
    <div class="society-page px-5">
        <div class="row mb-3 mt-3">
            <div class="col-12 page-title">
                <div class="page-title--text">
                    <span class="page-title--text_title" >Mes Clients</span>
                    <span class="page-title--text_count">15</span>
                </div>
                <div class="page-title--icons">
                    <!--icons -->
                    <span class="mr-2"> Exporter mes clients </span>
                       <img src="../../assets/img/Group 15.svg" alt="Group">
                    
                      <img class="Rectangle" src="../../assets/img/Rectangle 8.svg" alt="Rectangle">
                      <img class="infos" src="../../assets/img/infos 1.svg" alt="infos">
                   
                </div>
            </div>
        </div>
        <!--  -->
        <div class="row forms mt-4">
            <div class="col-lg-12 head-section">
                <h6 class="head-section--title"> Information sur le compte :</h6>
            </div>
            
            <div class="col-lg-6 forms-sides">
                <div class="forms-sides--group">
                    <label class="forms-sides--group_label" >Prénom</label>
                    <input class="forms-sides--group_text" type="text" placeholder="Prénom" />
                </div>
                 <div class="forms-sides--group">
                    <label class="forms-sides--group_label" >Adresse email</label>
                    <input class="forms-sides--group_text" type="text" placeholder="hicham@gmail.com" />
                </div>
            </div>
            
            <div class="col-lg-6 forms-sides">
                <div class="forms-sides--group">
                    <label class="forms-sides--group_label" >Nom</label>
                    <input class="forms-sides--group_text" type="text" placeholder="Nom" />
                </div>
                 <div class="forms-sides--group">
                    <label class="forms-sides--group_label" >Fonction</label>
                    <input class="forms-sides--group_text" type="text" placeholder="Directeur technique" />
                </div>
            </div>
        </div>
        
        <div class="row forms mt-4">
            <div class="col-lg-12 head-section">
                <h6 class="head-section--title" > Coordonnées du client :</h6>
            </div>
            
            <div class="col-lg-6 forms-sides">    
                
                <Custom_Input @addedInput="_addedAdress" placeholder="Phone" />

                 <div class="forms-sides--group">
                    <label class="forms-sides--group_label" >Mots clés</label>
                    <input class="forms-sides--group_text" type="text" placeholder="climatiseurs" />
                </div>
            
            </div>
            
            <div class="col-lg-6 forms-sides">
                <div class="forms-sides--group">
                    <label class="forms-sides--group_label" > Société</label>
                    <b-form-select class="forms-sides--group_select" ></b-form-select>
                </div>
                <div class="forms-sides--group">
                    <label class="forms-sides--group_label" >Notes</label>
                     <b-form-textarea rows="3" class="forms-sides--group_textarea" size="lg" placeholder="Ajouter vos remarques ici"></b-form-textarea>
                </div>
                
            </div>
        </div>
        
        <div class="row mt-3 forms-buttons">
            <!-- buttons -->
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 forms-buttons">
              <!-- <router-link to="/client/type_client"> -->
                <button>                  
                    <i class="fa fa-arrow-left mr-1"></i>
                    <span>Previous</span>                 
                </button>
              <!-- </router-link> -->
                <!-- <router-link to="/societe/new"> -->
                  <button>            
                      <span> NEXT </span>
                      <i class="fa fa-arrow-right ml-1"></i> 
                  </button>
                <!-- </router-link> -->
            </div>
        </div>


    </div>
</template>


<script>

import Custom_Input from './../Sub_Components/Custom_Input.vue';

export default {
    name : "Information_Compte",
    data: function(){
        return { 
            phones: []
        };
    }, 
    components: {
        Custom_Input,
    }, 
    methods:{
        _addedPhone: function(phonesArray){
            this.phones = phonesArray;
            
            console.log(this.phones);
        }
    }
}
</script>
<style lang="scss" scoped>
    // *{
    //     text-transform: capitalize;
            // font-family: Gilroy-Bold ;

    // }
    
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
        // height: 100%;
        margin-top: 4em;
    }

    input, textarea, select{
        background-color: transparent !important; 
        &:focus {
           border: 1px solid #2262c6;
        }
    }
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