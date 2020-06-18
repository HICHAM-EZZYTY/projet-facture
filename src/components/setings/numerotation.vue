<template>
  <div>
    <h1 class="title-ref">Préférences Pour La Numérotation :</h1>
    <h5 class="sous-title">ici, vous pouvez modifier les préférences de numérotation</h5>

    <div class="row">
      <div class="form1 col-md-6">
        <label class="descr-pay1">Format De La Numérotation</label>
        <input class="custom-select custom-select00" placeholder="<doc><aa><cmp>" v-model="codeFormat"/>

        <label class="descr-devis0">Aperçu Du Résultat</label>
        <input class="custom-select custom-select001" placeholder="F2000001" :value="formatPreview" disabled/>
        <label class="descr-article1">Taille Minimale Du Compteur</label>
        <input class="custom-select custom-select02" type="number"  min="1"  :value="minCounterValue" />
        <label class="descr-tva descr-tva1">Rénitialisation Du Compteur</label>
        <b-form-select class="tva1" v-model="selected" :options="options"></b-form-select>
      </div>
      <div class="form2 col-md-6">
        <label class="descr-pay1">Débuter Le Compteur Pour Les Devis à</label>
        <input class="custom-select custom-select00" type="number" placeholder="1" min="1" />
        <label class="descr-devis0">Débuter Le Compteur Pour Les Factures à</label>
        <input class="custom-select custom-select001" type="number" placeholder="1" min="1" />
        <label class="descr-article1">Débuter Le Compteur Pour Les Avoirs à</label>
        <input class="custom-select custom-select02" type="number" placeholder="1" min="1" />
        <label class="descr-tva2">Débuter Le Compteur Pour Les Avoirs D'acompte à</label>
        <input class="custom-select tva1" type="number" placeholder="1" min="1" />
      </div>
    </div>

    <b-button class="load" @click="updateGeneralThing">
        <p class="mise">Mettre à jour votre compte</p>
      </b-button>
  </div>
</template>

<script>
export default {
  el: "#vue",
  data() {
    return {
      
      codes: [],
      codeFormat: '',
      formatPreview: '',
      minCounterValue: 4, 
      
      checked: false,
      selected: null,
      options: [
        { text: "Tous les mois" },
        { text: "Tous les ans", selected: true },
        { text: "Jamais" }
      ]
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
    } ,
    __conveter(count){
      this.__init();
      // the count here  segnifies the number of the documments that a single user has. for now it gonna be static. 
      var parts = this.codeFormat.split(">");
      delete parts[parts.length - 1];
      console.log(parts)
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
      this.formatPreview = convertedformat;
      console.log(convertedformat)
    } 
  },
  watch:{
      codeFormat: function () {
        this.__conveter(1);
      }, 
      minCounterValue: function(){
        this.__conveter(1);
      }
  }
};
</script>

<style>
.title-ref {
  font-family: "Gilroy" sans-serif;
  font-size: 27px;
  font-weight: bold;
  margin-left: 49px;
  margin-top: 34px;
}

.sous-title {
  font-size: 16px;
  color: gray;
  margin-left: 51px;
  margin-top: 17px;
}

.descr-tva1 {
  left: -11.2rem;
  top: 16rem;
}

.descr-tva2 {
  margin-top: 16.1rem;
  position: absolute;
  color: #b3b8c3;
  font-size: 14px;
  left: 0.8rem;
}

.tva1 {
  top: 18rem;
}

.custom-select001 {
  margin-top: 7.4rem;
}
.descr-article1 {
  top: 171px;
  position: relative;
  color: #b3b8c3;
  font-size: 14px;
  left: -2px;
}
.custom-select02 {
  margin-top: 12.5rem;
}

.descr-devis0 {
  position: absolute;
  top: 5.8rem;
  left: 0.9rem;
  color: #b3b8c3;
  font-size: 14px;
}

.custom-select00 {
  margin-top: 2.5rem;
}

.descr-pay1 {
  position: absolute;
  top: 12px;
  color: #b3b8c3;
  font-size: 14px;
}
</style>