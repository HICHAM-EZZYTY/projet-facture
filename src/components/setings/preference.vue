<template>
  <div class="general-preferences">
  
    <!-- General Preferences Notification Message. -->
    <div v-show="isUpdated">
      <p style="color: green; ">
        settings updated ...
      </p>
    </div>
    <!-- End Of General Preferences Notification Message. -->
  
    <!-- General Preferences Header -->
      <!-- 
        this is a custom component . 
      -->
      <Title mainTitle="Préférences Générales :" subTitle="Ici, Vous Pouvez Modifier Les Préférences Générales" />
    <!-- End Of General Preferences Header -->
    
      <!-- General Preferences inputs -->
    <div class="row forms p-xl-4 p-md-3 p-sm-2">
      
      <!-- left Side of the General Preferences -->
      <div class="forms-sides col-xl-6 col-md-12 col-sm-12">

        <div class="forms-sides--group">
          <label class="forms-sides--group_label">Pays pour défault pour les clients</label>
          <b-form-select class="forms-sides--group_select" v-model="selectedCountry" :options="countries"></b-form-select>    
        </div>
        
        <div class="forms-sides--group" >
          <label class="forms-sides--group_label">Devise Par défaut</label>
          <b-form-select class="forms-sides--group_select" v-model="selectedCurrency" :options="Currency"></b-form-select>
        </div>
        
        <div class="forms-sides--group" >
          <label class="forms-sides--group_label">Type d'article par défaut</label>
          <b-form-select class="forms-sides--group_select" v-model="selectedArticle" :options="typeArticles"></b-form-select>
        </div>
        
        <div class="forms-sides--group" >
          <label class="forms-sides--group_label">Tva (%)</label>
          <input class="forms-sides--group_text" type="text" placeholder="20.0" v-model="tvaValue" />
          <b-form-checkbox v-model="checked" class="forms-sides--group_checkbox-2" name="check-button" switch></b-form-checkbox>
        </div>
      
        <div class="forms-sides--group" >
          <label class="forms-sides--group">Texte affiché si TVA est applicable</label>
          <input type="text" class="forms-sides--group_text" placeholder="TVA non applicable, art. 293 B du CGI" v-model="tvaEnabled"/>
        </div>
      
      </div>
      <!-- End of left Side of the General Preferences -->
      
      <!-- Right Side of the General Preferences -->
      <div class="forms-sides col-xl-6 col-md-12 col-sm-12">
        
        <div  class="forms-sides--group">
          <label class="forms-sides--group_label">Texte affiché si TVA n'est pas applicable</label>
          <input class="forms-sides--group_text" type="text" placeholder="Reverse charge VAT" v-model="tvaDisabled" />  
        </div>

        <div class="forms-sides--group">
          <label class="forms-sides--group_label">Conditions de règlement par défaut</label>
          <b-form-select class="forms-sides--group_select" v-model="selectedCondition" :options="conditions"></b-form-select>  
        </div>
        
        <div class="forms-sides--group">
          <label class="forms-sides--group_label">Mode de règlement par défaut</label>
          <b-form-select class="forms-sides--group_select" v-model="selectedMode" :options="mode"></b-form-select>
        </div>
        
        <div class="forms-sides--group">
          <label class="forms-sides--group_label">Intérêt de retard par défaut</label>
          <b-form-select class="forms-sides--group_select" v-model="selectedInterest" :options="interests"></b-form-select>
        </div>
        
      </div>
      <!-- Enf of Right Side of the General Preferences -->
      
    </div>
    <!-- End Of General Preferences inputs -->

    <!-- General Preferences Submit button. -->
    <b-button class="settings-btn btn btn-primary" @click="updateGeneralThing">
      Mettre à jour votre compte
    </b-button>
    <!-- End Of General Preferences Submit button. -->

  </div>
</template>



<style lang="scss"  scoped>
.general-preferences{
  position: relative; 
  width: 100%;
  min-height: 100%;
  // height: 100vh;
}
// .header{
//   &-title{
//     font-size: 2em;
//     color: #2f2e4d;
   
//   }
//   &-subtitle{
//     font-size: 1em;
//     color: #696990;
//   }
//   @media screen and(max-width: 700){
//     &-title {
//       font-size: 1em; 
//       text-align: center; 
//     }
//     &-subtitle{
//       font-size: 0.5em;
//       color: #696990;
//     }
//   }
// }
// .forms{
//   &-sides{
//     color: #b3b8c3; 
//     &--group{
//       position: relative;
//       width: 100%;
//       margin-top: 2.7px;

//       &_text,
//       &_select{
//         height: 3em; 
//         background-color: #F8F9FC;
//         border-radius: 0.3em;
//         color: #b3b8c3;
//         padding: 0em .9em;
       
//         &::placeholder{
//           color: #b3b8c3;
//         }
//       }

//       &_label{
//       width: 100%;
//       }
      
//       &_text{
//         border: none;
//         width: 100%;
        
//       }
//       &_select{
//         border: none;
//         width: 100%;
//       }
//       &_checkbox{
//         position: absolute;
//         right: 0.3em;
//         bottom: 0.8em;
//       }
//     }
//   }
// }
</style>

<script>
import Title from './Title.vue';
export default {
  data() {
    return {
      isUpdated : false ,

      Token: "", 
      checked: false,
      
      tvaDisabled: "", 
      tvaEnabled:  "",
      tvaValue: 0,

      selectedCountry: null,
      countries: [
        { value:null,  text: "Maroc"},
        { value:"Maroc",  text: "Maroc" },
        { value:"France", text: "France" },
        { value:"Korea",  text: "Korea" },
        { value:"Chine",  text: "Chine" }
      ],

      selectedCurrency: null,
      Currency: [
        { text: "Dirham (dh)" ,value: null },
        { text: "Dollar ($)" ,value: "HHHH"  },
        { text: "Euro (‎€)" ,value: "HHHH"  }
      ],

      selectedArticle: null, 
      typeArticles: [],

      selectedCondition: null, 
      conditions: [],

      selectedMode: null, 
      mode: [],

      selectedInterest: null, 
      interests :[], 

    
    };
  }, 
  components:{
    Title
  },
  methods: {
    getSelectedValueSync(array, value){
      array.forEach( (a) => {
        if(a.value === parseInt(value)){
          return value;
        }
      });
      return null;
    },

    getArticles: function () {
      
      this.typeArticles.push({
        text: "Select a default article",
        value: null
      });

      this.$http
        .get('/type_articles')
        .then( (res) => {
          res.data.forEach( (data) => {
            let obj = {
              text: data.article_type_value, 
              value: data.id
            };
            this.typeArticles.push(obj);
          });
        })
        .catch((e) => {
          console.error(e)
        });
    }, 
    getConditions: function () {

      this.conditions.push({
        text: "Select a default condition",
        value: null
      });
		  
      this.$http
        .get('/condition_reglement')
        .then( (res) => {
          res.data.forEach( (data) => {
            let obj = {
              text: data.Condition_value, 
              value: data.id
            };
            this.conditions.push(obj);
          });
        })
        .catch((e) => {
          console.error(e)
        });
    }, 
    getModes: function() {
      
      this.mode.push({
        text: "Select a default mode",
        value: null
      });
    	
      this.$http
        .get('/mode_reglement')
        .then( (res) => {
          res.data.forEach( (data) => {
            let obj = {
              text: data.mode_value, 
              value: data.id
            };
            this.mode.push(obj);
          });
        })
        .catch((e) => {
          console.error(e)
        });
    }, 
    getGeneralPref: function () {
		  
      this.$http
        .get('/settings/general')
        .then( (res) => {

          this.tvaValue = res.data[0].tva_value;
          this.checked = ( this.tvaValue != 0 ) ? true : false;
          
          this.tvaDisabled = res.data[0].text_tva_off;
          this.tvaEnabled = res.data[0].text_tva_on;
          
          this.typeArticles.forEach( (a) => {
            if(a.value == res.data[0].type_article_id){
              this.selectedArticle = a.value;
            }
          })

          this.mode.forEach( (a) => {
            if(a.value == res.data[0].mode_reglement_id){
              this.selectedMode = a.value;
            }
          })

          this.conditions.forEach( (a) => {
            if(a.value == res.data[0].condition_reglement_id){
              this.selectedCondition = a.value;
            }
          })

          this.interests.forEach( (a) => {
            if(a.value == res.data[0].interet_retard_id){
              this.selectedInterest = a.value;
            }
          })
        
        })
        .catch((e) => {
          console.error(e)
        });
    }, 
    getInterests: function () {
      
      this.interests.push({
        text: "Select a default interest",
        value: null
      });
		  
      this.$http
        .get('/interet_retard')
        .then( (res) => {
          res.data.forEach( (data) => {
            let obj = {
              text: data.inter_value, 
              value: data.id
            };
            this.interests.push(obj);
          });
        })
        .catch((e) => {
          console.error(e)
        });
    }, 
    updateGeneralThing: function(){
    
      let tva = (this.checked == false ) ? 0 : parseInt(this.tvaValue);
      let g = {
        type_article_id: this.selectedArticle,
        tva_value : tva, 
        text_tva_on : this.tvaEnabled,
        text_tva_off : this.tvaDisabled,
        mode_reglement_id : this.selectedMode,
        condition_reglement_id : this.selectedCondition,
        interet_retard_id : this.selectedInterest
      }; 
      this.$http
          .post('/settings/general', g)
          .then( (res) => {
            // res.data.forEach( (data) => {
            console.log(res.data);
            this.isUpdated = true; 
            // });
          })
          .catch((e) => {
            console.error(e)
          });

    }
  }, 
  watch: {
    checked: function () {
      console.log(this.checked)
    }
  },
  created: function () {
    this.getArticles();
    this.getModes();
    this.getConditions();
    this.getInterests();
    this.getGeneralPref();
  }
};
</script>

