<template>
  <div>
    <div v-show="isUpdated">
      <p style="color: green; ">
        settings updated ...
      </p>
    </div>
    <h1 class="title-ref">Préférences Générales :</h1>
    <h5 class="sous-title">ici, vous pouvez modifier les préférences générales</h5>
    <div class="row">
      <div class="form1 col-md-6">
        <label class="descr-pay">Pays pour défault pour les clients</label>
        <b-form-select class="custom-select0" v-model="selectedCountry" :options="countries"></b-form-select>
        <i class="fa fa-angle-down angle"></i>
        <label class="descr-devis">Devise Par défaut</label>
        <b-form-select class="custom-select1" v-model="selectedCurrency" :options="Currency"></b-form-select>
        <i class="fa fa-angle-down angle"></i>
        <label class="descr-article">Type d'article par défaut</label>
        <b-form-select class="custom-select2" v-model="selectedArticle" :options="typeArticles"></b-form-select>
        
        <label class="descr-tva">Tva (%)</label>
        <input class="tva" type="text" placeholder="20.0" v-model="tvaValue" />
        <b-form-checkbox v-model="checked" name="check-button" switch></b-form-checkbox>

        <label class="description">Texte affiché si TVA est applicable</label>
        <input
          type="text"
          class="select-info tva"
          placeholder="TVA non applicable, art. 293 B du CGI"
          v-model="tvaEnabled"
        />
      </div>
      <div class="form2 col-md-6">
        <label class="descr-pay">Texte affiché si TVA n'est pas applicable</label>
        <input class="custom-select custom-select0" placeholder="Reverse charge VAT" v-model="tvaDisabled" />
        <label class="descr-devis">Conditions de règlement par défaut</label>
        <b-form-select class="custom-select1" v-model="selectedCondition" :options="conditions"></b-form-select>
        <label class="descr-article">Mode de règlement par défaut</label>
        <b-form-select class="custom-select2" v-model="selectedMode" :options="mode"></b-form-select>
        <label class="descr-tva">Intérêt de retard par défaut</label>
        <b-form-select class="custom-select3" v-model="selectedInterest" :options="interests"></b-form-select>
      </div>

      <b-button class="load" @click="updateGeneralThing">
        <p class="mise">Mettre à jour votre compte</p>
      </b-button>
    </div>
  </div>
</template>



<style  scoped>
.title-ref {
  font-family: "Gilroy" sans-serif;
  font-size: 27px;
  font-weight: bold;
  margin-left: 49px;
  margin-top: 34px;
  color: #2f2e4d;
}

.sous-title {
  font-size: 16px;
  color: #696990;
  margin-left: 51px;
  margin-top: 17px;
}

.form1 {
  left: 3rem;
}

.description {
  font-size: 14px;
  color: gray;
  margin-top: 24px;
}

.custom-select,
.tva {
  position: absolute;
  width: 18.6rem !important;
  left: 13px;
  height: 44px !important;
  background: #f8f9fc !important;
  border: 1px solid #eceef3 !important;
  box-sizing: border-box;
  border-radius: 4px !important;
}

.tva {
  top: 16rem;
}

.custom-select0 {
  margin-top: 1.8rem;
}

.angle {
  margin-left: 16.5rem;
  position: absolute;
  top: 45px;
}

.custom-select1 {
  margin-top: 6rem;
}

.custom-select2 {
  margin-top: 11rem;
}
.custom-select3 {
  margin-top: 16rem;
}

input[type="text"] {
  font: 15px/24px "Gilroy", Arial, sans-serif;
  color: #b3b8c3;
  width: 100%;
  box-sizing: border-box;
  letter-spacing: 1.5px;
  padding-left: 14px;
}

.custom-switch {
  margin-left: 16.25rem !important;
  margin-top: 14.5rem;
}

.select-info {
  margin-top: 81px;
}

.descr-pay {
  position: absolute;
  top: 4px;
  color: #b3b8c3;
  font-size: 14px;
}

.descr-devis {
  position: relative;
  left: -2px;
  color: #b3b8c3;
  font-size: 14px;
}

.descr-article {
  position: relative;
  top: 147px;
  color: #b3b8c3;
  font-size: 14px;
  left: -2px;
}

.descr-tva {
  position: relative;
  top: 228px;
  color: #b3b8c3;
  font-size: 14px;
  left: -150px;
}

.form2 > .custom-select2 {
  top: 0rem;
}

.form2 > .descr-article {
  margin-left: 1rem;
  position: absolute;
}

.form2 > .descr-tva {
  margin-left: 10.3rem;
  position: absolute;
}
</style>

<script>
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

