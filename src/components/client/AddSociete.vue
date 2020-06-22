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
                <div class="forms-sides--group">  
                    <div class="nn">
                        <label class="forms-sides--group_label" >Adress :</label>
                        <div>
                            <i class="fa fa-plus"></i>
                            <i class="fa fa-times"></i>
                        </div>
                    </div>
                    <input class="forms-sides--group_text" type="text" placeholder="......" />
                </div>
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
                 <div class="forms-sides--group">
                    <div class="nn">
                        <label class="forms-sides--group_label" >Numéro de téléphone :</label>
                        <div>
                            <i class="fa fa-plus"></i>
                            <i class="fa fa-times"></i>
                        </div>
                    </div>
                    <input type="text" class="forms-sides--group_select" />
                </div>
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
export default {
    name : "AddSociety",
    data: function(){
        return { 

        };
    }
}
</script>
<style lang="scss" scoped>
    *{
        font-family: Gilroy-Medium, sans-serif ;
        text-transform: capitalize;
    }
    .nn{
        display: flex ; 
        & div {
            display: flex ; 
            align-items: center ; 
            color: black ;
            & .fa{
                margin: 0em .2em;
                display: flex; 
                background: #2262C6;
                color: white; 
                height: 1.5em ;
                width: 1.5em ;
                align-items: center;
                justify-content: center;
                border-radius: 50%; 
                
                &:hover{
                    cursor: pointer;
                }
            }
        }
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