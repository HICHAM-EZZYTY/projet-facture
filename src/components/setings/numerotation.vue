<template>
  <div class="numerotation-settings mt-0">   
      <!-- 
        this is a custom component . 
      -->
      <Title mainTitle="Numérotation :" subTitle="ici, vous pouvez modifier les préférences de numérotation" />
    
    <div class="row forms px-xl-4 px-md-3 px-sm-2 px-xs-2">
    
      <div class="forms-sides col-xl-6 col-md-12 col-sm-12 col-xs-12">
    
        <div  class="forms-sides--group">
          <label class="forms-sides--group_label">Format De La Numérotation</label>
          <input class="forms-sides--group_text" placeholder="<doc><aa><cmp>" v-model="codeFormat"/>
          <div class="documentation">
              <a href="#" class="documentation-title">Learn About Code Formas.</a>
              <ul class="documentation-content">
                <li>home</li>
                <li>home</li>
                <li>home</li>
                <li>home</li>
                <li>home</li>
                <li>home</li>
                <li>home</li>
                <li>home</li>
              </ul>
          </div>
         
        
        </div>
    
        <div class="forms-sides--group">
          <label class="forms-sides--group_label">Aperçu Du Résultat</label>
          <input class="forms-sides--group_text" placeholder="F2000001" :value="formatPreview" disabled/>
        </div>
    
        <div class="forms-sides--group">
          <label class="forms-sides--group_label">Taille Minimale Du Compteur</label>
          <input class="forms-sides--group_text" type="number"  min="1"  v-model="minCounterValue" />
        </div>
    
        <div class="forms-sides--group">  
          <label class="forms-sides--group_label">Rénitialisation Du Compteur</label>
          <b-form-select class="forms-sides--group_select" v-model="selected" :options="options"></b-form-select>
        </div>

      </div>
    
      <div class="forms-sides col-xl-6 col-md-12 col-sm-12 col-xs-12">
        
        <div class="forms-sides--group">
          <label class="forms-sides--group_label">Débuter Le Compteur Pour Les Devis à</label>
          <input class="forms-sides--group_text" type="number" placeholder="1" min="1" />  
        </div>

        <div class="forms-sides--group">
          <label class="forms-sides--group_label">Débuter Le Compteur Pour Les Factures à</label>
          <input class="forms-sides--group_text" type="number" placeholder="1" min="1" />
        </div>
        
        <div class="forms-sides--group">
          <label class="forms-sides--group_label">Débuter Le Compteur Pour Les Avoirs à</label>
          <input class="forms-sides--group_text" type="number" placeholder="1" min="1" />
        </div>
        
        <div class="forms-sides--group">
          <label class="forms-sides--group_label">Débuter Le Compteur Pour Les Avoirs D'acompte à</label>
          <input class="forms-sides--group_text" type="number" placeholder="1" min="1" />
        </div>
     
      </div>

    </div>

    <b-button class="settings-btn btn btn-primary" @click="update">
      Mettre à jour votre compte
    </b-button>
  </div>
</template>

<script >
import Title from './Title.vue'; 
export default {
  name: "Numerotation", 
  components: {
        Title,
  },
  data() {
    return {
      
      codes: [],
      codeFormat: '',
      formatPreview: '',
      minCounterValue: 4, 
      
      checked: false,
      selected: null,
      options: [
        { text: "Tous les mois" , value: "month"},
        { text: "Tous les ans", value: "year"},
        { text: "Jamais", value: null }
      ],
        
    };
  }, 
  methods:{
    __init(){
      var d = new Date();
      
      const ye = new Intl.DateTimeFormat('en', {
          year: 'numeric'
      }).format(d);
      const mo = new Intl.DateTimeFormat('en', {
          month: '2-digit'
      }).format(d);
      const da = new Intl.DateTimeFormat('en', {
          day: '2-digit'
      }).format(d);

      this.codes["doc"] = "F";
      this.codes["aa"]  = ye.substr(2);
      this.codes["aaaa"] = ye; 
      this.codes["m"] = mo;
      this.codes["mm"] = mo;
      this.codes["j"] = da;
      this.codes["jj"] = da; 
    },
    
    __conveter(count){
      this.__init();
      // the count here  segnifies the number of the documments that a single user has. for now it gonna be static. 
      var parts = this.codeFormat.split(">");
      delete parts[parts.length - 1];
      // console.log(parts)
      var convertedformat = this.codeFormat;
      parts.forEach((part) => {
        if (part != "") {
                var sub = part.replace(/[^a-zA-Z]/, '');
                // console.log(this.codes[sub])
                if (sub == 'cmp') {

                    for (let i = 0; i < this.minCounterValue - count.toString().length; i++) {
                        convertedformat += '0';
                    }

                    convertedformat += count.toString();
                    convertedformat = convertedformat.replace('<' + sub + '>', '');
                } else {
                    var ok = "";
                    if (this.codes[sub] != null) {                   
                        ok = this.codes[sub];  
                    }
                    convertedformat = convertedformat.replace('<' + sub + '>', ok);
                }
            }
      });
      
      if(!convertedformat.includes("<"))
        this.formatPreview = convertedformat;
      else
        this.formatPreview = "wrong format";

    },
    getNum(){
      this.$http
        .get("settings/uids")
        .then( (res) => {
          console.log(res.data[0]);
          this.codeFormat = res.data[0].format;
          this.minCounterValue = res.data[0].Min_compteur_valeur;
        })
        .catch(
          () => {
            console.log(":/")
          }
        ); 
    },
    update(){
      let num = {
        	format : this.codeFormat, 
		      min_counter_value: this.minCounterValue
      }; 
      this.$http
        .post("/settings/uids", num)
        .then( () => {
          console.log("done");
        })
        .catch( (e) => {
          console.log(e)
        });
    }
  },
  watch:{
      codeFormat: function () {
        this.__conveter(1);
      }, 
      minCounterValue: function(){
        this.__conveter(1);
      }
  }, 
  created: function () {
    this.getNum();
  }
};
</script>

<style lang="scss" scoped>

  .documentation{
    &-title{
      font-size: 14px;
      padding: 0% 2%;
      color: #696990; 
    }
    &-content{
      display:none;
      height: 0%;
    }
  } 
  .numerotation-settings{
    position: relative;
    width: 100%; 
    min-height: 100%; 
  }
// .title-ref {
//   font-family: "Gilroy" sans-serif;
//   font-size: 27px;
//   font-weight: bold;
//   margin-left: 49px;
//   margin-top: 34px;
// }

// .sous-title {
//   font-size: 16px;
//   color: gray;
//   margin-left: 51px;
//   margin-top: 17px;
// }

// .descr-tva1 {
//   left: -11.2rem;
//   top: 16rem;
// }

// .descr-tva2 {
//   margin-top: 16.1rem;
//   position: absolute;
//   color: #b3b8c3;
//   font-size: 14px;
//   left: 0.8rem;
// }

// .tva1 {
//   top: 18rem;
// }

// .custom-select001 {
//   margin-top: 7.4rem;
// }
// .descr-article1 {
//   top: 171px;
//   position: relative;
//   color: #b3b8c3;
//   font-size: 14px;
//   left: -2px;
// }
// .custom-select02 {
//   margin-top: 12.5rem;
// }

// .descr-devis0 {
//   position: absolute;
//   top: 5.8rem;
//   left: 0.9rem;
//   color: #b3b8c3;
//   font-size: 14px;
// }

// .custom-select00 {
//   margin-top: 2.5rem;
// }

// .descr-pay1 {
//   position: absolute;
//   top: 12px;
//   color: #b3b8c3;
//   font-size: 14px;
// }
</style>