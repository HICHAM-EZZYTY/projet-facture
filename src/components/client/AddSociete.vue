<template>
    <div class="society-page px-5">

        <div class="row mb-3 mt-3">
            <div class="col-12 page-title">
                <div class="page-title--text">
                    <span class="page-title--text_title" >Society</span>
                    <span class="page-title--text_count">12</span>
                </div>
                <div class="page-title--icons">
                    <!--icons -->
                    <span class="mr-2"> Annulé la creation </span>
                    <button>
                        <i class="fa fa-times"></i>
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
                    <label class="forms-sides--group_label" >Nom de la societe :</label>
                    <input class="forms-sides--group_text" type="text" placeholder="......" />
                </div>
                 <div class="forms-sides--group">
                    <label class="forms-sides--group_label" >IDENTIFIANT COMMUN DE L'ENTREPRISE :</label>
                    <input class="forms-sides--group_text" type="text" placeholder="......" />
                </div>
            </div>
            
            <div class="col-lg-6 forms-sides">
                <div class="forms-sides--group">
                    <label class="forms-sides--group_label" >label :</label>
                    <input class="forms-sides--group_text" type="text" placeholder="......" />
                </div>
                 <div class="forms-sides--group">
                    <label class="forms-sides--group_label" >label :</label>
                    <input class="forms-sides--group_text" type="text" placeholder="......" />
                </div>
            </div>
        </div>
        
        <div class="row forms mt-4">
            <div class="col-lg-12 head-section">
                <h6 class="head-section--title" > Information Sur la Societe :</h6>
            </div>
            
            <div class="col-lg-6 forms-sides">    
                
                <Custom_Input @addedInput="_addedAdress" placeholder="Adress" />

                 <div class="forms-sides--group">
                    <label class="forms-sides--group_label" >Site internet :</label>
                    <input class="forms-sides--group_text" type="text" placeholder="......" />
                </div>
                 <div class="forms-sides--group">
                    <label class="forms-sides--group_label" >Notes :</label>
                     <b-form-textarea rows="3" class="forms-sides--group_textarea" size="lg"  ></b-form-textarea>
                </div>
            </div>
            
            <div class="col-lg-6 forms-sides">
                <div class="forms-sides--group">
                    <label class="forms-sides--group_label" >Pays :</label>
                    <b-form-select class="forms-sides--group_select" ></b-form-select>
                </div>
                <Custom_Input @addedInput="_addedPhone" placeholder="Phone Number"/>
                <div class="forms-sides--group">
                    <label class="forms-sides--group_label" >Clients :</label>
                    <b-form-select class="forms-sides--group_select" ></b-form-select>
                </div>
            </div>
        </div>
        
        <div class="row mt-3 forms-buttons">
            <!-- buttons -->
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 forms-buttons">
                <button> 
                    <i class="fa fa-arrow-left mr-1"></i>
                    <span>prev</span> 
                </button>
                <button> 
                    <span> next </span>
                    <i class="fa fa-arrow-right ml-1"></i> 
                </button>
            </div>
        </div>


    </div>
</template>


<script>
import Custom_Input from '../Sub_Components/Custom_Input.vue';

// import S_Phones from './S_Sub_Components/S_Phones.vue';
export default {
    name : "AddSociety",
    data: function(){
        return { 
            adresses: [], 
            phones: []
        };
    }, 
    components: {
        Custom_Input,
    }, 
    methods:{
        _addedAdress: function(adressesArray){
            this.adresses = adressesArray;
            console.log(this.adresses);
        }, 
        _addedPhone: function(phonesArray){
            this.phones = phonesArray;
            
            console.log(this.phones);
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
        margin-left: 3em;
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
    }

    input, textarea, select{
        background-color: transparent !important; 
        &:focus {
           border: 1px solid #2262c6;
        }
    }
</style>